import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// ✅ Use Vite env variable or fallback to localhost
const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:3000";
const CHAT_ID = import.meta.env.VITE_CHAT_ID || '5949702687'; // Replace with correct chat ID or use .env variable

const MessageView = () => {
  const [messages, setMessages] = useState([
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false); // To manage loading state for sending and fetching
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    // Add the user's message to the chat
    setMessages((prev) => [...prev, { text: trimmed, from: "user" }]);
    setInput("");
    setLoading(true); // Set loading when sending a message

    try {
      const response = await fetch(`${API_BASE}/api/send`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: trimmed, chatId: CHAT_ID }), // Include chatId in the body
      });

      if (!response.ok) throw new Error("Network error on sending");

    } catch (error) {
      console.error("Sending failed:", error);
    } finally {
      setLoading(false); // Stop loading once the message is sent
    }
  };

  useEffect(() => {
    const interval = setInterval(fetchMessages, 3000);
    return () => clearInterval(interval);
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch(`${API_BASE}/api/messages`);
      if (response.ok) {
        const data = await response.json();
        if (data?.message) {
          setMessages((prev) => [...prev, { text: data.message, from: "support" }]);
        }
      } else {
        console.error("Failed to fetch messages:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f] text-white flex flex-col">
      {/* Header */}
      <div className="p-6 bg-[#1f1f1f] border-b border-[#00f0ff] flex justify-between items-center shadow-lg z-10">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-[#00f0ff] to-[#ff00f7] bg-clip-text text-transparent">
          Chat with Customer
        </h1>
        <Link to="/dashboard" className="text-sm text-[#00f0ff] hover:underline">
          ← Back to Dashboard
        </Link>
      </div>

      {/* Chat Messages */}
      <div id="messages" className="flex-1 p-6 overflow-y-auto space-y-4">
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className={`max-w-xl px-4 py-3 rounded-xl shadow-lg ${
              msg.from === "user"
                ? "ml-auto bg-gradient-to-r from-[#00f0ff] to-[#00f7ff33] text-black"
                : "mr-auto bg-[#2a2a2a] border border-[#ff00f7] text-white"
            }`}
          >
            {msg.text}
          </motion.div>
        ))}
        <div ref={bottomRef}></div>
      </div>

      {/* Input Box */}
      <div className="p-4 border-t border-[#00f0ff] bg-[#1f1f1f] flex items-center gap-4">
        <input
          id="message-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type your message..."
          className="flex-1 px-4 py-3 bg-[#333] rounded-xl text-white outline-none border-2 border-transparent focus:border-[#00f0ff] transition-all duration-300"
        />
        <button
          id="send-button"
          onClick={sendMessage}
          className="px-5 py-3 bg-gradient-to-r from-[#00f0ff] to-[#ff00f7] text-black font-bold rounded-xl hover:scale-105 transition-transform shadow-lg"
        >
          {loading ? (
            <span className="animate-spin">Sending...</span>
          ) : (
            "Send"
          )}
        </button>
      </div>
    </div>
  );
};

export default MessageView;

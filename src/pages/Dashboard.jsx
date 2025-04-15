import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios"; // Install axios if not done: npm install axios

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("whatsapp");
  const [telegramMessages, setTelegramMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch Telegram messages from backend
  useEffect(() => {
    if (activeTab === "telegram") {
      setLoading(true);
      axios.get("http://localhost:3000/api/telegram/messages")
        .then((res) => {
          setTelegramMessages(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching telegram messages:", err);
          setLoading(false);
        });
    }
  }, [activeTab]);

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-[#111111] via-[#2d2d2d] to-[#111111] overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 bg-[#1c1c1c] p-6 shadow-xl border-r-4 border-[#00f0ff] overflow-y-auto">
        <h2 className="text-4xl text-[#00f0ff] font-semibold mb-8 text-center">Cencom Dashboard</h2>

        <nav className="space-y-4">
          <Link
            to="#"
            onClick={() => setActiveTab("whatsapp")}
            className={`block text-white py-2 px-4 rounded-lg hover:bg-[#00f0ff] transition-all duration-300 ease-in-out transform hover:scale-100 ${activeTab === "whatsapp" ? "bg-[#00f0ff] text-black" : ""}`}
          >
            <span className="flex items-center space-x-2">
              <i className="fab fa-whatsapp text-2xl"></i>
              <span>WhatsApp</span>
            </span>
          </Link>
          <Link
            to="#"
            onClick={() => setActiveTab("telegram")}
            className={`block text-white py-2 px-4 rounded-lg hover:bg-[#ff00f7] transition-all duration-300 ease-in-out transform hover:scale-100 ${activeTab === "telegram" ? "bg-[#ff00f7] text-black" : ""}`}
          >
            <span className="flex items-center space-x-2">
              <i className="fab fa-telegram-plane text-2xl"></i>
              <span>Telegram</span>
            </span>
          </Link>
          <Link
            to="#"
            onClick={() => setActiveTab("discord")}
            className={`block text-white py-2 px-4 rounded-lg hover:bg-[#7289da] transition-all duration-300 ease-in-out transform hover:scale-100 ${activeTab === "discord" ? "bg-[#7289da] text-black" : ""}`}
          >
            <span className="flex items-center space-x-2">
              <i className="fab fa-discord text-2xl"></i>
              <span>Discord</span>
            </span>
          </Link>
        </nav>
      </div>

       {/* Main Content */}
       <div className="flex-1 p-8 text-white overflow-y-auto">
        <motion.h1
          className="text-5xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#ff00f7]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Active Conversations
        </motion.h1>

        {/* Stats Panel */}
        <motion.div
          className="grid grid-cols-3 gap-6 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-[#333] p-6 rounded-xl shadow-lg hover:scale-100 transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#00f0ff]">New Messages</h3>
            <p className="text-3xl font-bold">87</p>
          </div>
          <div className="bg-[#333] p-6 rounded-xl shadow-lg hover:scale-100 transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#ff00f7]">Resolved</h3>
            <p className="text-3xl font-bold">53</p>
          </div>
          <div className="bg-[#333] p-6 rounded-xl shadow-lg hover:scale-100 transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#7289da]">Unresolved</h3>
            <p className="text-3xl font-bold">34</p>
          </div>
        </motion.div>

        {/* Floating Chat Cards */}
        {activeTab === "whatsapp" && (
          <div className="space-y-6">
            <Link to="/message">
              <motion.div
                className="bg-[#333] p-6 rounded-2xl shadow-2xl transform hover:scale-100 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-lg font-semibold text-[#00f0ff]">Chat 1</h3>
                <p className="text-gray-400">Last message: "Hi, I need support with my order..."</p>
              </motion.div>
            </Link>
            <Link to="/message">
              <motion.div
                className="bg-[#333] p-6 rounded-2xl shadow-2xl transform hover:scale-100 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-lg font-semibold text-[#00f0ff]">Chat 2</h3>
                <p className="text-gray-400">Last message: "How can I track my shipment?"</p>
              </motion.div>
            </Link>
          </div>
        )}

          {/* Telegram Dynamic Chat Cards */}
          {activeTab === "telegram" && (
          <div className="space-y-6">
          <Link to="/message">
            <motion.div
              className="bg-[#333] p-6 rounded-2xl shadow-2xl transform hover:scale-100 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <h3 className="text-lg font-semibold text-[#ff00f7]">Chat 1</h3>
              <p className="text-gray-400">Last message: "Hi"</p>
            </motion.div>
          </Link>
        </div>
        )}
        
        {activeTab === "discord" && (
          <div className="space-y-6">
            <Link to="/message">
              <motion.div
                className="bg-[#333] p-6 rounded-2xl shadow-2xl transform hover:scale-100 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-lg font-semibold text-[#7289da]">Chat 1</h3>
                <p className="text-gray-400">Last message: "What are your support hours?"</p>
              </motion.div>
            </Link>
            <Link to="/message">
              <motion.div
                className="bg-[#333] p-6 rounded-2xl shadow-2xl transform hover:scale-100 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-lg font-semibold text-[#7289da]">Chat 2</h3>
                <p className="text-gray-400">Last message: "How can I change my payment method?"</p>
              </motion.div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

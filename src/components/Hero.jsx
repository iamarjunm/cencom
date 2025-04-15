import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export default function Hero() {
  const navigate = useNavigate();
  const learnMoreRef = useRef(null);

  const handleLearnMore = () => {
    learnMoreRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="relative min-h-screen bg-gradient-to-br from-[#0c0c0c] via-[#111111] to-[#0c0c0c] flex items-center justify-center px-6 text-white overflow-hidden">
        {/* Background Glows */}
        <div className="absolute w-[600px] h-[600px] bg-[#00f0ff] opacity-20 rounded-full blur-[180px] top-[-250px] left-[-300px] -z-10" />
        <div className="absolute w-[500px] h-[500px] bg-[#ff00f7] opacity-20 rounded-full blur-[160px] bottom-[-250px] right-[-300px] -z-10" />
        <div className="absolute w-[400px] h-[400px] bg-[#ffffff] opacity-[0.04] rounded-full blur-[180px] bottom-[10%] left-[45%] -z-10" />

        {/* Hero Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl w-full backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-xl px-10 py-20 text-center"
        >
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-white to-[#ff00f7]">
            Cencom: Bot-Powered Support<br />Across All Platforms
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
            Unify WhatsApp, Telegram, and Discord into one intelligent hub. Fast, anonymous, and frictionless communication at scale.
          </p>

          {/* Call to Actions */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => navigate("/login")}
              className="px-6 py-3 bg-[#00f0ff] text-black font-bold rounded-xl hover:scale-105 hover:bg-[#04d6e0] transition-transform duration-300 shadow-md"
            >
              Access Support Console
            </button>
          </div>
        </motion.div>

        {/* Footer system note */}
        <p className="absolute bottom-5 text-[11px] text-gray-500 tracking-widest opacity-60 italic">
          SYSTEM ONLINE // Awaiting Incoming Queries . . .
        </p>
      </div>
    </>
  );
}

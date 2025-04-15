import { motion } from "framer-motion";
import { FaRobot, FaPhoneAlt, FaEnvelope, FaCheckCircle } from "react-icons/fa";

const steps = [
  {
    icon: <FaPhoneAlt size={28} className="text-blue-400" />,
    title: "Customer Sends Query",
    description: "Your customer reaches out through WhatsApp, Telegram, or Discord with a question.",
  },
  {
    icon: <FaRobot size={28} className="text-green-400" />,
    title: "Bot Receives Query",
    description: "The bot automatically processes the query and prepares an initial response.",
  },
  {
    icon: <FaEnvelope size={28} className="text-orange-400" />,
    title: "Team Views Query",
    description: "The support team gets notified in the dashboard and reviews the customer's request for follow-up.",
  },
  {
    icon: <FaCheckCircle size={28} className="text-teal-400" />,
    title: "Reply Sent Back",
    description: "The bot sends a solution to the customer, completing the support cycle.",
  },
];

export default function Timeline() {
  return (
    <div className="py-20 px-6 bg-[#111111] text-white">
      <h2 className="text-4xl font-semibold text-center mb-12">How Cencom Works</h2>

      <div className="max-w-6xl mx-auto space-y-16">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            className="flex items-center space-x-8"
          >
            <div className="flex-shrink-0">
              <div className="p-5 bg-[#222222] rounded-full hover:scale-110 transition-transform">
                {step.icon}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white">{step.title}</h3>
              <p className="text-gray-400 mt-2">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

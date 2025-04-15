import { motion } from "framer-motion";
import { FaSyncAlt, FaChartLine, FaCogs, FaCommentDots, FaUsers } from "react-icons/fa";

const features = [
  {
    icon: <FaSyncAlt size={40} className="text-blue-400" />,
    title: "Multi-Platform Sync",
    description:
      "Manage all your customer queries in one place, across WhatsApp, Telegram, and Discord.",
  },
  {
    icon: <FaChartLine size={40} className="text-yellow-400" />,
    title: "Real-Time Analytics",
    description:
      "Track response times, bot performance, and customer satisfaction with live data analytics.",
  },
  {
    icon: <FaCogs size={40} className="text-purple-400" />,
    title: "Bot Customization",
    description:
      "Easily customize the bot’s responses, tone, and workflow to align with your brand's voice.",
  },
  {
    icon: <FaCommentDots size={40} className="text-green-400" />,
    title: "Automated Responses",
    description:
      "Set up automated replies for common customer queries and FAQs, improving response time.",
  },
  {
    icon: <FaUsers size={40} className="text-orange-400" />,
    title: "Team Collaboration",
    description:
      "Collaborate with your support team in real-time, ensuring seamless customer service interactions.",
  },
];

export default function CoreFeatures() {
  return (
    <div className="py-20 px-6 bg-[#0a0a0a] text-white">
      <h2 className="text-4xl font-semibold text-center mb-12">Cencom Core Features</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            className="flex flex-col items-center text-center p-6 bg-[#1a1a1a] rounded-lg shadow-xl hover:scale-[1.03] transition-transform"
          >
            <div className="p-4 bg-[#2c2c2c] rounded-full mb-6 transition group-hover:scale-110">
              {feature.icon}
            </div>
            <h3 className="text-2xl font-semibold text-white">{feature.title}</h3>
            <p className="mt-4 text-gray-400">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

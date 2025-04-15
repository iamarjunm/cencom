import { FaWhatsapp, FaTelegramPlane, FaDiscord } from "react-icons/fa";

const platforms = [
  {
    name: "WhatsApp",
    icon: <FaWhatsapp size={26} className="text-green-400" />,
    summary: "Handle customer support via WhatsApp Bot Integration.",
    query: "Customer: 'What are your business hours?'",
    color: "border-green-400/30 hover:shadow-green-500/20",
  },
  {
    name: "Telegram",
    icon: <FaTelegramPlane size={26} className="text-sky-400" />,
    summary: "Deploy custom responses to Telegram user queries.",
    query: "User: 'Can I track my shipment status?'",
    color: "border-sky-400/30 hover:shadow-sky-500/20",
  },
  {
    name: "Discord",
    icon: <FaDiscord size={26} className="text-indigo-400" />,
    summary: "Assist users in your Discord server using AI bots.",
    query: "Client: 'How do I escalate an issue?'",
    color: "border-indigo-400/30 hover:shadow-indigo-500/20",
  },
];

export default function PlatformPreview() {
  return (
    <div className="py-20 px-6 bg-[#0a0a0a] text-white">
      <h2 className="text-4xl font-semibold text-center mb-3 tracking-tight">
        Multi-Channel Bot Support
      </h2>
      <p className="text-gray-400 text-center max-w-xl mx-auto mb-14">
        Manage and respond to support queries from all platforms through a single control interface. Powered by automation, backed by intelligence.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {platforms.map((p, index) => (
          <div
            key={index}
            className={`group relative rounded-2xl border ${p.color} p-6 bg-[#1a1a1a] transition hover:scale-[1.05] duration-300 hover:shadow-2xl`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white/20 p-3 rounded-full transition group-hover:bg-white/10">
                {p.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">{p.name}</h3>
            </div>
            <p className="text-sm text-gray-300 mb-3">{p.summary}</p>
            <div className="text-sm text-gray-400 italic border-l-4 border-white/20 pl-3">
              {p.query}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

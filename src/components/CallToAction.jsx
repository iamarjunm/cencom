import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";  // Use react-router-dom for navigation

const CallToAction = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the login page
    navigate("/login");
  };

  return (
    <div className="py-20 px-6 bg-[#1c1c1c] text-white text-center"> {/* Changed bg color to a darker shade */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-semibold mb-4">
          Ready to streamline your customer support?
        </h2>
        <p className="text-lg text-gray-400 mb-6"> {/* Adjusted text color for better contrast */}
          With Cencom, manage all your customer queries from a single platform and enhance your team’s performance.
        </p>

        <div className="flex justify-center gap-6">
          <button className="px-6 py-3 bg-[#00f0ff] text-black font-semibold rounded-xl hover:bg-[#00b8cc] transition"> {/* Retained accent color for buttons */}
            Start Free Trial
          </button>
          <button
            onClick={handleClick}
            className="px-6 py-3 border border-white text-white rounded-xl hover:bg-[#00f0ff] hover:text-black transition"
          >
            Access Support Console
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default CallToAction;

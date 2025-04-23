import { motion } from "framer-motion"
import { INSIGHTS } from "../../data/analytics"
const AIPoweredInsights = () => {
    return (
        <motion.div
            className="text-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <h2 className="text-lg font-medium mb-4 text-gray-100">
                AI-Powered Insights
            </h2>
            <div className="space-y-4">
                {INSIGHTS.map((item, index) => (
                    <div className="flex items-start space-x-3" key={index}>
                        <div className={`p-2 rounded-full ${item.color} bg-opacity-20`}>
                            <item.icon className={`w-6 h-6 ${item.color}`} />
                        </div>
                        <p className="text-gray-300">{item.insight}</p>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

export default AIPoweredInsights
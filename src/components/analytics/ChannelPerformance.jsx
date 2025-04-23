import { motion } from "framer-motion"
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"
import { channelData, COLORS_ANALYTICS } from "../../data/analytics"
const ChannelPerformance = () => {
    return (
        <motion.div
            className="text-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
        >
            <h2 className="text-xl font-medium mb-4 text-gray-100">Channel Performance</h2>
            <div className="w-full h-80">
                <ResponsiveContainer width={"100%"} height="100%">
                    <PieChart>
                        <Pie
                            data={channelData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey={"value"}
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                            {channelData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS_ANALYTICS[index % COLORS_ANALYTICS.length]} />
                            ))}
                        </Pie>
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "rgba(31, 41, 55, 0.8)",
                                borderColor: "#4B5563",
                            }}
                            itemStyle={{ color: "#F3F4F6" }}
                        />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    )
}

export default ChannelPerformance
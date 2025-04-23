import { motion } from "framer-motion"
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { dailyOrdersData } from "../../data/ordersData"
const DailyOrders = () => {
    return (
        <motion.div
            className="text-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <h2 className="text-lg font-medium mb-4 text-gray-100">
                Daily Orders
            </h2>
            <div className="w-full h-[300px]">
                <ResponsiveContainer>
                    <LineChart data={dailyOrdersData}>
                        <CartesianGrid strokeDasharray={'3 3'} stroke='#374151' />
                        <XAxis dataKey={"date"} stroke="#9CA3AF" />
                        <YAxis stroke="#9CA3AF" />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "rgba(31, 41, 55, 0.8)",
                                borderColor: "#4B5563",
                            }}
                            itemStyle={{ color: "#E5E7EB" }}
                        />
                        <Legend />
                        <Line type={"monotone"} dataKey={"orders"} stroke="#8B5CF6" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    )
}

export default DailyOrders
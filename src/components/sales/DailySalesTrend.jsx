import { motion } from "framer-motion"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { dailySalesData } from "../../data/saleData"

const DailySalesTrend = () => {
    return (
        <motion.div
            className="text-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
            <h2 className="text-lg font-medium mb-4 text-gray-100">
                Daily Sales Trend
            </h2>
            <div className="w-full h-80">
                <ResponsiveContainer >
                    <BarChart data={dailySalesData}>
                        <CartesianGrid strokeDasharray={'3 3'} stroke='#4B5563' />
                        <XAxis dataKey={"name"} stroke="#9CA3AF" />
                        <YAxis stroke="#9CA3AF" />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "rgba(31, 41, 55, 0.8)",
                                borderColor: "#4B5563",
                            }}
                            itemStyle={{ color: "#E5E7EB" }}
                        />
                        <Legend />
                        <Bar dataKey={"sales"} fill="#10B981" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    )
}

export default DailySalesTrend
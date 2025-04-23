import { motion } from "framer-motion"
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts"
import { COLORS_ORDER, orderStatusData } from "../../data/ordersData"
const OrderDistribution = () => {
    return (
        <motion.div
            className="text-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
        >
            <h2 className="text-lg font-medium mb-4 text-gray-100">
                Order Status Distribution
            </h2>
            <div className="h-80">
                <ResponsiveContainer width={"100%"} height="100%">
                    <PieChart>
                        <Pie
                            data={orderStatusData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey={"value"}
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                            {orderStatusData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS_ORDER[index % COLORS_ORDER.length]} />
                            ))}
                        </Pie>
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    )
}

export default OrderDistribution
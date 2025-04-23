import { motion } from "framer-motion"
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"
import { COLORS_SALE, salesByCategory } from "../../data/saleData"
const SalesByCategoryChart = () => {
    return (
        <motion.div
            className="text-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <h2 className="text-lg font-medium mb-4 text-gray-100">
                Sales by Category
            </h2>
            <div className="w-full h-80">
                <ResponsiveContainer>
                    <PieChart>
                        <Pie
                            fill="#8884d8"
                            data={salesByCategory}
                            cx={"50%"}
                            cy={"50%"}
                            dataKey={"value"}
                            outerRadius={80}
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                            {salesByCategory.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS_SALE[index % COLORS_SALE.length]} />
                            ))}
                        </Pie>
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "rgba(31, 41, 55, 0.8)",
                                borderColor: "#4B5563",
                            }}
                            itemStyle={{ color: "#E5E7EB" }}
                        />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    )
}

export default SalesByCategoryChart
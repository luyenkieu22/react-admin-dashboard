import { motion } from "framer-motion";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";
import { COLORS_USER, userDemographicsData } from "../../data/usersData";
const UserDemographicsChart = () => {
    return (
        <motion.div
            className="text-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-lg font-medium mb-4 text-gray-100">
                Category Distribution
            </h2>
            <div className="w-full h-[300px]">
                <ResponsiveContainer>
                    <PieChart>
                        <Pie
                            data={userDemographicsData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={100}
                            fill="#8884d8"
                            dataKey={"value"}
                            label={({ name, percent }) =>
                                `${name} ${(percent * 100).toFixed(0)}%`
                            }
                        >
                            {userDemographicsData.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={COLORS_USER[index % COLORS_USER.length]}
                                />
                            ))}
                        </Pie>
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    );
};

export default UserDemographicsChart;

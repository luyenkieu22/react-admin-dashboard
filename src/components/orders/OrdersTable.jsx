import { motion } from "framer-motion";
import { Eye, Search } from "lucide-react";
import { useState } from "react";
import { orderData } from "../../data/ordersData";

const OrdersTable = () => {
    const [inputValue, setInputValue] = useState("");
    const [ordersList, setOrdersList] = useState(orderData);

    const handleChangeValue = (e) => {
        const value = e.target.value.toLowerCase();
        setInputValue(value);

        if (value === "") {
            setOrdersList(orderData);
        } else {
            let filtered = orderData.filter(
                (order) =>
                    order.id.toLowerCase().includes(value) ||
                    order.customer.toLowerCase().includes(value)
            );
            setOrdersList(filtered);
        }
    };

    return (
        <motion.div
            className="text-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 mb-8 border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
        >
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-medium mb-4 text-gray-100">
                    Orders List
                </h2>
                <div className="relative">
                    <Search
                        size={18}
                        className="opacity-50 absolute top-2.5 left-3 text-gray-400"
                        onClick={() =>
                            setOrdersList(ordersList ? orderData : ordersList)
                        }
                    />
                    <input
                        type="text"
                        onChange={handleChangeValue}
                        value={inputValue}
                        placeholder="Search orders..."
                        className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                Order Id
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                Customer
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                Total
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                Status
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                Date
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                        {ordersList?.map((order) => (
                            <motion.tr
                                key={order.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <td className="px-6 py-3 text-left text-xs font-medium text-gray-100">
                                    {order.id}
                                </td>
                                <td className="px-6 py-3 text-left text-xs font-medium text-gray-100">
                                    {order.customer}
                                </td>
                                <td className="px-6 py-3 text-left text-xs font-medium text-gray-100">
                                    ${order.total.toFixed(2)}
                                </td>
                                <td className="px-6 py-3 text-left text-xs text-gray-300">
                                    <span className={`px-2 inline-flex text-left text-xs leading-5 font-semibold rounded-full ${order.status === "Delivered"
                                        ? "bg-green-100 text-green-800"
                                        : order.status === "Processing"
                                            ? "bg-yellow-100 text-yellow-800"
                                            : order.status === "Shipped"
                                                ? "bg-blue-100 text-blue-800"
                                                : "bg-red-100 text-red-800"

                                        }`}>
                                        {order.status}
                                    </span>
                                </td>
                                <td className="px-6 py-3 text-left text-xs font-medium text-gray-400">
                                    {order.date}
                                </td>
                                <td className="flex items-center px-6 py-3 text-left text-xs font-medium text-gray-400">
                                    <button>
                                        <Eye className="w-5 h-5" color="#6366f1" />
                                    </button>
                                </td>
                            </motion.tr>
                        ))}
                        {ordersList.length === 0 && (
                            <tr>
                                <td
                                    colSpan="6"
                                    className="px-6 py-3 text-center text-xs font-medium text-gray-400"
                                >
                                    No products found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </motion.div>
    );
};

export default OrdersTable;

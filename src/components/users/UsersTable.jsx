import { useState } from 'react'
import { userData } from '../../data/usersData';
import { motion } from 'framer-motion';
import { Edit, Search, Trash2 } from 'lucide-react';

const UsersTable = () => {
    const [inputValue, setInputValue] = useState("");
    const [usersList, setUsersList] = useState(userData);

    const handleChangeValue = (e) => {
        const value = e.target.value.toLowerCase();
        setInputValue(value);

        if (value === "") {
            setUsersList(userData);
        } else {
            let filtered = userData.filter(
                (product) =>
                    product.name.toLowerCase().includes(value) ||
                    product.category.toLowerCase().includes(value)
            );
            setUsersList(filtered);
        }
    };

    const handleDelete = (id) => {
        const confirm = window.confirm("Are you sure want to delete this product?");
        if (!confirm) return;
        const updatedData = usersList.filter((product) => product.id !== id);
        if (id) {
            setUsersList(updatedData);
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
                    Users List
                </h2>
                <div className="relative">
                    <Search
                        size={18}
                        className="opacity-50 absolute top-2.5 left-3 text-gray-400"
                        onClick={() =>
                            setUsersList(userData)
                        }
                    />
                    <input
                        type="text"
                        onChange={handleChangeValue}
                        value={inputValue}
                        placeholder="Search users..."
                        className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                Name
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                Email
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                Role
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                Status
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                        {usersList?.map((user) => (
                            <motion.tr
                                key={user.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <td className="px-6 py-4 whitespace-nowrap text-xs font-medium text-gray-300 flex items-center gap-2">
                                    <img
                                        className="size-10"
                                        src="https://images.unsplash.com/photo-1627820751059-43001b92c076?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2lyZWxlc3N8ZW58MHx8MHx8fDA%3D"
                                        alt="User img"
                                    />
                                    {user.name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                                    {user.email}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-800">
                                        {user.role}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${user.status === "Active" ? "bg-green-800 text-green-100" : "bg-red-800 text-red-100"
                                        }`}>
                                        {user.status}
                                    </span>
                                </td>
                                <td className="flex items-center gap-2 px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                    <button>
                                        <Edit className="w-5 h-5" color="#6366f1" />
                                    </button>
                                    <button>
                                        <Trash2
                                            className="w-5 h-5"
                                            color="#ef4444"
                                            onClick={() => handleDelete(user.id)}
                                        />
                                    </button>
                                </td>
                            </motion.tr>
                        ))}
                        {/* {usersList.length === 0 && (
                            <tr>
                                <td
                                    colSpan="6"
                                    className="px-6 py-3 text-center text-xs font-medium text-gray-400 uppercase tracking-wider"
                                >
                                    No products found
                                </td>
                            </tr>
                        )} */}
                    </tbody>
                </table>
            </div>
        </motion.div>
    );
};

export default UsersTable
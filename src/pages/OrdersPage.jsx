import { motion } from "framer-motion"
import Header from "../components/common/Header"
import StatCard from "../components/common/StatCard"
import { CheckCircle, Clock, DollarSign, ShoppingBag } from "lucide-react"
import DailyOrders from "../components/orders/DailyOrders"
import OrderDistribution from "../components/orders/OrderDistribution"
import OrdersTable from "../components/orders/OrdersTable"

const OrdersPage = () => {
    return (
        <div className="flex-1 overflow-auto relative z-10">
            <Header title="Orders" />
            <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8 mt-20">
                {/* STATS */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <StatCard name="Total Orders" icon={ShoppingBag} value={"1,234"} color="#6366F1" />
                    <StatCard name="Pending Orders" icon={Clock} value="56" color="#10B981" />
                    <StatCard name="Completed Orders" icon={CheckCircle} value="1,178" color="#F59E0B" />
                    <StatCard name="Total Revenue" icon={DollarSign} value="$98,765" color="#EF4444" />
                </motion.div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                    <DailyOrders />
                    <OrderDistribution />
                </div>
                <div className="mt-8">
                    <OrdersTable />
                </div>
            </main>
        </div>
    )
}

export default OrdersPage
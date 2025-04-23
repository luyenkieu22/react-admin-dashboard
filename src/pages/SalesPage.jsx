import { motion } from "framer-motion"
import Header from "../components/common/Header"
import StatCard from "../components/common/StatCard"
import { CreditCard, DollarSign, ShoppingCart, TrendingUp } from "lucide-react"
import SalesOverviewChart from "../components/sales/SalesOverviewChart"
import SalesByCategoryChart from "../components/sales/SalesByCategoryChart"
import DailySalesTrend from "../components/sales/DailySalesTrend"

const SalesPage = () => {
    return (
        <div className="flex-1 overflow-auto relative z-10">
            <Header title="Sales" />
            <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8 mt-20">
                {/* STATS */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <StatCard name="Total Sales" icon={DollarSign} value="1234" color="#6366F1" />
                    <StatCard name="Top Selling" icon={ShoppingCart} value="89" color="#10B981" />
                    <StatCard name="Low Stock" icon={TrendingUp} value="23" color="#F59E0B" />
                    <StatCard name="Total Revenue" icon={CreditCard} value="$543,210" color="#EF4444" />
                </motion.div>
                <SalesOverviewChart />

                {/* USER CHARTS */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                    <SalesByCategoryChart />
                    <DailySalesTrend />
                </div>
            </main>
        </div>
    )
}

export default SalesPage
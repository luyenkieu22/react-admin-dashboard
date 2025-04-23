import { motion } from "framer-motion"
import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, Tooltip } from "recharts"
import { customerSegmentationData } from "../../data/analytics"
const CustomerSegmentation = () => {
  return (
    <motion.div
      className="text-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">
        Customer Segmentation
      </h2>
      <div className="w-full h-[300px]">
        <ResponsiveContainer>
          <RadarChart
            data={customerSegmentationData}
            cx={"50%"}
            cy={"50%"}
            outerRadius={"80%"}
          >
            <PolarGrid stroke="#374151" />
            <PolarAngleAxis dataKey={'subject'} stroke="#9ca3af" />
            <PolarRadiusAxis angle={30} domain={[0, 150]} stroke="#9CA3AF" />
            <Radar name="Segment A" dataKey={"A"} stroke="#8b5cf6" fill="#8b5cf6" opacity={0.6} />
            <Radar name="Segment B" dataKey={"B"} stroke="#10b981" fill="#10b981" opacity={0.6} />
            <Legend />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}

export default CustomerSegmentation
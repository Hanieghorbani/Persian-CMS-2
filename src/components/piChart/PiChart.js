import React from "react"
import { PieChart, Pie, Sector, Cell, ResponsiveContainer,Tooltip } from "recharts"
import { piChartInSalesDatas } from "../../datas"
import './PiChart.css'
const COLORS = ['rgb(92, 26, 195)', 'rgb(226, 160, 63)',"#00C49F"]

export default function PiChart() {
  return (
    <div className="w-100 piChart p-4">
      <h5 className="text-white">فروش بر اساس دسته بندی</h5>
      <ResponsiveContainer height={340} 
      >
        <PieChart>
          <Pie
            data={piChartInSalesDatas}
            // cx={110}
            cy={200}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={8}
            dataKey="value"
          >
            {piChartInSalesDatas.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                strokeWidth={0}
              />
            ))}
          </Pie>
          <Tooltip />

        </PieChart>
      </ResponsiveContainer>
      <div className="guidancePiChart d-flex align-items-center justify-content-between mb-3 w-100 w-lg-75 w-md-75 mx-auto">
        <h6 className="text-white"><span>●</span> پوشاک</h6>
        <h6 className="text-white"> <span className="text-success fs-4">●</span> الکترونیک</h6>
        <h6 className="text-white"> <span className="text-warning fs-4">●</span> دیگر</h6>
      </div>
    </div>
  )
}

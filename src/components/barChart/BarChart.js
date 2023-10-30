import { func } from "prop-types"
import React from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { barChartInSalesDatas } from "../../datas"
import "./BarChart.css"

export default function BarCharts() {
  return (
    <div className="barChart p-3 pb-2 rounded">
      <div className="text-white d-flex justify-content-between align-items-center mb-3 mb-lg-5">
        <div>
          <h6>فروش روزانه</h6>
          <p className="text-secondary">برای جزئیات بیشتر به ستون ها بروید.</p>
        </div>
        <p className="dolarIcon">$</p>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart
          width="100%"
          height={200}
          data={barChartInSalesDatas}
          margin={{
            top: 15,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={15}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <Tooltip />
          <Bar dataKey="درهفته" fill="orange" background={{ fill: "#eee" }} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

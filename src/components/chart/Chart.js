import React from "react"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import { chartInSalesDatas } from "../../datas"
import "./Chart.css"
export default function Chart() {
  return (
    <div className="chart-container rounded p-4">
      <div className="chartHead d-flex justify-content-between align-items-center mb-3">
        <h5 className="text-white">درآمد</h5>
        <button className="btn text-white">ماهانه</button>
      </div>
      
      <div className="">
        <h5 className="text-white">150000</h5>
        <p className="text-white opacity-50">سود کل</p>
      </div>

      <div className="d-flex align-items-center justify-content-end mb-3">
        <h6 className="text-white ms-5"><span>●</span>  درآمد</h6>
        <h6 className="text-white"> <span className="text-danger fs-4">●</span> هزینه ها</h6>
      </div>
      <ResponsiveContainer width="100%" height={250}>
     
        <AreaChart
          width={730}
          height={200}
          data={chartInSalesDatas}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#5e5ef4" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#5e5ef4" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f45e5e" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#f45e5e" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" tickMargin={5}/>
          <YAxis tickMargin={55} tickCount={9}/>
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <Tooltip />
          <Area
            type="monotone"
            dataKey="درآمد"
            stroke="#3333fa"
            fillOpacity={1}
            fill="url(#colorUv)"
            strokeWidth={2}
            // label={{ fill: 'red', fontSize: 20 }} 
          />
          <Area
            type="monotone"
            dataKey="هزینه"
            stroke="#f45e5e"
            fillOpacity={1}
            fill="url(#colorPv)"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

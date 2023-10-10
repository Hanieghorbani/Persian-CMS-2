import React from "react"
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip
} from "recharts"

import { lineChartInfos } from "../../datas"
export default function LineCharts(props) {
  return (
      <div className="w-100">
        <ResponsiveContainer width="100%" height={70}>
          <LineChart width={300} height={50} data={lineChartInfos}>
            <Line
              type="monotone"
              dataKey="بازدید"
              stroke={props.lineColor}
              strokeWidth={2}
              dot={false}
            />
            <Tooltip labelStyle={{display:'none'}}  contentStyle={{
                    background: "#0e1735",
                    border: "none",
                    color: "white",
                    borderRadius: "12px",
                  }}/>
          </LineChart>
        </ResponsiveContainer>
      </div>
  )
}

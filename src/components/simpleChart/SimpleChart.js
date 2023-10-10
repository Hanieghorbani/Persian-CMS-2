import React from 'react'
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from "recharts"
  
  import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import { infoChartInRow3 } from '../../datas'
export default function SimpleChart(props) {
    console.log(props.color);
  return (
    <div className="infoChart rounded pt-1">
            <dir
              className="d-flex align-items-center p-3"
              //  style={{marginLeft:'-30px'}}
            >
              <ShoppingCartOutlinedIcon className="basketIcon ms-3" />
              <div className="text-white">
                <h4>{props.value}</h4>
                <p className="fw-bold" style={{ fontSize: "12px" }}>
                  {props.title}
                </p>
              </div>
            </dir>
            <ResponsiveContainer width="100%" height={props.height}>
              <AreaChart
                width="100%"
                height={250}
                data={infoChartInRow3}
                margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
              >
                
                <Tooltip
                  contentStyle={{
                    background: "#0e1726",
                    border: "none",
                    color: "white",
                    borderRadius: "12px",
                  }}
                  labelStyle={{ display: "none" }}
                />
                <Area
                  type="monotone"
                  dataKey="فروشها"
                  stroke={props.color}
                  fillOpacity={1}
                  fill={`url(#${props.id})`}
                  strokeWidth={2}
                />
                <defs>
                  <linearGradient id={props.id} x1="1" y1="0" x2="1" y2="1">
                    <stop offset="15%" stopColor={props.color} stopOpacity={0.5} />
                    <stop offset="85%" stopColor={props.color} stopOpacity={0} />
                  </linearGradient>
                </defs>
              </AreaChart>
            </ResponsiveContainer>
          </div>
  )
}

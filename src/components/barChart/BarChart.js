import { func } from 'prop-types';
import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { barChartInSalesDatas } from '../../datas';
import './BarChart.css'
// const data = [
//   {
//     name: 'Page A',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ]


export default function BarCharts() {

  return (
    <div className='barChart p-3 pb-2 rounded' >
    <div className='text-white d-flex justify-content-between align-items-center mb-5'>
        <div>
            <h6>فروش روزانه</h6>
            <p className='text-secondary'>برای جزئیات بیشتر به ستون ها بروید.</p>
        </div>
        <p className='dolarIcon'>$</p>
    </div>
         <ResponsiveContainer width='100%' height={200}>
        <BarChart
          width='100%'
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
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <Tooltip />
          <Bar dataKey="درهفته" fill="orange" background={{ fill: '#eee' }} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

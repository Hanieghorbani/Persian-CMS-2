import React from "react"
import LineCharts from "../../components/lineChart/LineChart"
import HomeIcon from "@mui/icons-material/Home"
import CreditCardIcon from "@mui/icons-material/CreditCard"
import AddIcon from "@mui/icons-material/Add"
import "./analyze.css"
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import ScrollBox from "../../components/scrollBox/ScrollBox"
import { chartInAnalyzeRow2Datas } from "../../datas"
import Analogy from "../../components/analogy/Analogy"
import SimpleChart from "../../components/simpleChart/SimpleChart"
export default function Analyze() {
  return (
    <div className="analyze w-100 my-4">
      <div className="row w-100 row1">
        <div className="col-5">
          <div className="text-white rounded p-4 pb-0">
            <h5>آمار</h5>
            <div className="d-flex justify-content-between mt-4">
              <div className="w-50 ms-2">
                <p className="fw-bold">تعداد بازدیدها</p>
                <h4 className="text-danger">432,987</h4>
                <LineCharts lineColor="orange" />
              </div>
              <div className="w-50 me-1">
                <p className="fw-bold">تعداد بازدیدهای پرداخت شده</p>
                <h4 className="text-danger">2,870</h4>
                <LineCharts lineColor="rgb(59, 147, 59)" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="text-white rounded p-4">
            <div className="d-flex align-items-center mb-5 justify-content-between">
              <div>
                <h4>45000 تومان</h4>
                <p>هزینه ها</p>
              </div>
              <HomeIcon />
            </div>
            <div className="bg-secondary rounded-pill p-1">
              <div className="w-75 gradient rounded-pill d-flex justify-content-end align-items-center ps-1">
                <p className="text-black mt-2 fs-4">●</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="text-white rounded p-4">
            <div className="d-flex justify-content-between align-items-center mb-5 pb-3">
              <h6>پنل ویژه</h6>
              <h6>10000 تومان</h6>
            </div>
            <div className="d-flex justify-content-between pt-4">
              <div>
                <button className="btn btn-sm btn-outline-light ms-1">
                  <AddIcon />
                </button>
                <button className="btn btn-sm btn-outline-light">
                  <CreditCardIcon />
                </button>
              </div>
              <button className="btn  btn-sm btn-outline-light">ارتقا</button>
            </div>
          </div>
        </div>
      </div>

      <div className="row w-100 row2 my-4">
        <div className="col-9">
          <div className="w-100 rounded pb-4">
            <h6 className="text-white border-bottom border-secondary pb-3 p-4">
              بازدید کنندگان یکتا
            </h6>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                width={500}
                height={300}
                data={chartInAnalyzeRow2Datas}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="name" />
                <YAxis tickMargin={30} />
                <Tooltip
                  contentStyle={{
                    background: "#0e1735",
                    border: "none",
                    color: "white",
                    borderRadius: "12px",
                  }}
                  cursor={false}
                />
                <Legend iconType="circle" />
                <Bar
                  dataKey="مستقیم"
                  fill="rgb(105, 46, 225)"
                  radius={5}
                  barSize={14}
                />
                <Bar dataKey="ارگانیک" fill="orange" radius={5} barSize={14} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="col-3">
          <div className="rounded pb-4">
            <ScrollBox title="اطلاعیه ها" />
          </div>
        </div>
      </div>

      <div className="row row3 w-100">
        <div className="col-4">
          <div className="p-4 text-white">
            <Analogy
              title="بازدید کنندگان توسط مرورگر"
              key1="کروم"
              key2="سافاری"
              key3="دیگر"
              value1="75%"
              value2="25%"
              value3="50%"
            />
          </div>
        </div>
        <div className="col-3">
          <SimpleChart
          id='دنب'
            title="دنبال کنندگان"
            value="3,700"
            color="rgb(0, 132, 255)"
            height={170}
          />
        </div>
        <div className="col-2">
          <SimpleChart id='معر' title="معرف" value="700" color="red" height={170} />
        </div>
        <div className="col-3">
          <SimpleChart
            id='نام'
            title="نامزدی"
            value="5,600"
            color="rgb(133, 198, 150)"
            height={170}
          />
        </div>
      </div>
    </div>
  )
}
import React from "react"
import Chart from "../../components/chart/Chart"
import PiChart from "../../components/piChart/PiChart"
import BarCharts from "../../components/barChart/BarChart"
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag"
import LocalOfferIcon from "@mui/icons-material/LocalOffer"
import CreditCardIcon from "@mui/icons-material/CreditCard"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward"
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward"
import "./Sales.css"
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft"
import ScrollBox from "../../components/scrollBox/ScrollBox"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

import { infoChartInRow3 } from "../../datas"
import Analogy from "../../components/analogy/Analogy"
import SimpleChart from "../../components/simpleChart/SimpleChart"
export default function Sales() {
  return (
    <div className="sales w-100 p-4">
      <div className="row row1">
        <div className="col-12 col-lg-8">
          <Chart />
        </div>
        <div className="col-12 col-lg-4 mt-4 mt-lg-0">
          <PiChart />
        </div>
      </div>
      <div className="row row2 my-4">
        <div className="col-12 col-md-6 col-lg-4">
          <BarCharts />
        </div>
        <div className="col-12 col-md-6 col-lg-4 text-white my-4 my-lg-0 my-md-0">
          <Analogy
            title="خلاصه"
            key1="درآمد"
            key2="سود"
            key3="هزینه ها"
            value1="92600 تومان"
            value2="37500 تومان"
            value3="550000 تومان"
          />
        </div>
        <div className="col-12 col-lg-4 mt-md-4 mt-lg-0">
          <SimpleChart
            title="کل سفارشات"
            value="4,200"
            color="white"
            height={200}
          />
        </div>
      </div>

      <div className="row row3">
        <div className="col-12 col-md-6 col-lg-5">
          <div className="text-white p-1 p-lg-4 rounded">
            <h5 className="p-4 p-lg-0">معاملات</h5>
            <div>
              <div className="d-flex rounded align-items-center justify-content-between p-1 p-lg-2 mt-3">
                <LocalOfferIcon className="cartIcon ms-3 ms-lg-0" />
                <div
                  className="d-flex justify-content-between align-items-center"
                  style={{ width: "95%" }}
                >
                  <div>
                    <h6 className="fw-bold">قبض برق</h6>
                    <p className="text-secondary">4 خرداد 1:00بعد از ظهر</p>
                  </div>

                  <p>
                    16000- تومان <ArrowDownwardIcon className="text-danger" />
                  </p>
                </div>
              </div>

              <div className="d-flex  rounded align-items-center justify-content-between p-2 mt-3">
                <ShoppingBagIcon className="tagIcon ms-3 ms-lg-0" />
                <div
                  className="d-flex justify-content-between align-items-center"
                  style={{ width: "95%" }}
                >
                  <div>
                    <h6 className="fw-bold">قبض آب</h6>
                    <p className="text-secondary">4 خرداد 1:00بعد از ظهر</p>
                  </div>

                  <p>
                    1000 تومان <ArrowUpwardIcon className="text-success" />
                  </p>
                </div>
              </div>

              <div className="d-flex  rounded align-items-center justify-content-between p-2 mt-3">
                <LocalOfferIcon className="tagIcon ms-3 ms-lg-0" />
                <div
                  className="d-flex justify-content-between align-items-center"
                  style={{ width: "95%" }}
                >
                  <div>
                    <h6 className="fw-bold">نتفلیکس</h6>
                    <p className="text-secondary">4 خرداد 1:00بعد از ظهر</p>
                  </div>

                  <p>
                    34000 تومان <ArrowUpwardIcon className="text-success" />
                  </p>
                </div>
              </div>

              <div className="d-flex  rounded align-items-center justify-content-between p-2 mt-3">
                <ShoppingCartOutlinedIcon className="cartIcon ms-3 ms-lg-0" />
                <div
                  className="d-flex justify-content-between align-items-center"
                  style={{ width: "95%" }}
                >
                  <div>
                    <h6 className="fw-bold">لورم ایپسوم</h6>
                    <p className="text-secondary">4 خرداد 1:00بعد از ظهر</p>
                  </div>

                  <p>
                    1300- تومان <ArrowDownwardIcon className="text-danger" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3 rounded my-4 my-lg-0 my-md-0 barChart">
          <ScrollBox title="فعالیت های اخیر" />
          <button className="btn text-info w-100 m-auto">
            مشاهده همه <KeyboardArrowLeftIcon className="arrowDown" />
          </button>
        </div>
        <div className="col-12 col-lg-4 mt-md-4 mt-lg-0">
          <div className="p-4 rounded">
            <h5 className="text-white mb-5">اطلاعات حساب</h5>
            <div className="d-flex justify-content-center text-white flex-column align-items-center">
              <h5 className="text-white">تعادل</h5>
              <h4 className="text-success mb-4">470000 تومان</h4>

              <div className="w-100 border-top border-bottom py-3">
                <div className="d-flex justify-content-between">
                  <p>پلن ماهیانه</p>
                  <p>199000 تومان</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>پلن ماهیانه</p>
                  <p>199000 تومان</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>پلن ماهیانه</p>
                  <p>199000 تومان</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>پلن ماهیانه</p>
                  <p>199000 تومان</p>
                </div>
              </div>
              <div className="d-flex justify-content-between w-75 mt-4">
                <button className="btn btn-outline-secondary">خلاصه</button>
                <button className="btn btn-danger">انتقال</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

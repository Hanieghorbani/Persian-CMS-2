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

export default function Sales() {
  return (
    <div className="sales w-100 p-4">
      <div className="row row1">
        <div className="col-8">
          <Chart />
        </div>
        <div className="col-4">
          <PiChart />
        </div>
      </div>
      <div className="row row2 my-4">
        <div className="col-4">
          <BarCharts />
        </div>
        <div className="col-4 text-white p-4 rounded pb-0">
          <h5 className="mb-5">خلاصه</h5>
          <div className="d-flex align-items-center">
            <ShoppingBagIcon className="bagIcon" />
            <div className="w-100 me-3">
              <div className="d-flex justify-content-between align-items-center w-100 text-secondary fw-bold">
                <p>درآمد</p>
                <p>92600 تومان</p>
              </div>
              <div className="bg-dark w-100 rounded-pill">
                <div className="gradientBoxIncome w-75 rounded-pill"></div>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center my-4">
            <LocalOfferIcon className="tagIcon bg-gradient" />
            <div className="w-100 me-3">
              <div className="d-flex justify-content-between align-items-center w-100 text-secondary fw-bold">
                <p>سود</p>
                <p>2340 تومان</p>
              </div>
              <div className="bg-dark w-100 rounded-pill">
                <div className="gradientBoxProfit w-25 rounded-pill"></div>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <CreditCardIcon className="cartIcon bg-gradient" />
            <div className="w-100 me-3">
              <div className="d-flex justify-content-between align-items-center w-100 text-secondary fw-bold">
                <p>هزینه ها</p>
                <p>5400 تومان</p>
              </div>
              <div className="bg-dark w-100 rounded-pill">
                <div className="gradientBoxCosts w-50 rounded-pill"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="infoChart rounded pt-1">
            <dir
              className="d-flex align-items-center p-3"
              //  style={{marginLeft:'-30px'}}
            >
              <ShoppingCartOutlinedIcon className="basketIcon ms-3" />
              <div className="text-white">
                <h4>3,123</h4>
                <p className="fw-bold" style={{ fontSize: "12px" }}>
                  کل سفارشات
                </p>
              </div>
            </dir>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart
                width="100%"
                height={250}
                data={infoChartInRow3}
                margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorUv" x1="1" y1="0" x2="1" y2="1">
                    <stop offset="15%" stopColor="#fff" stopOpacity={1} />
                    <stop offset="85%" stopColor="#fff" stopOpacity={0.3} />
                  </linearGradient>
                </defs>
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
                  stroke="white"
                  fillOpacity={1}
                  fill="url(#colorUv)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="row row3">
        <div className="col-5">
          <div className="text-white p-4 rounded">
            <h5>معاملات</h5>
            <div>
              <div className="d-flex rounded align-items-center justify-content-between p-2 mt-3">
                <LocalOfferIcon className="cartIcon" />
                <div
                  className="d-flex justify-content-between align-items-center"
                  style={{ width: "85%" }}
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
                <ShoppingBagIcon className="tagIcon" />
                <div
                  className="d-flex justify-content-between align-items-center"
                  style={{ width: "85%" }}
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
                <LocalOfferIcon className="tagIcon" />
                <div
                  className="d-flex justify-content-between align-items-center"
                  style={{ width: "85%" }}
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
                <ShoppingCartOutlinedIcon className="cartIcon" />
                <div
                  className="d-flex justify-content-between align-items-center"
                  style={{ width: "85%" }}
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
        <div className="col-3 rounded">
          <h5 className="text-white p-4">فعالیت های اخیر</h5>
          <div className="recentActs">
            <div className="d-flex align-items-center justify-content-between">
              <p className="d-flex align-items-center text-secondary fw-bold">
                <span className="text-info ms-1">●</span>
                بروزرسانی گزارشات سرور
              </p>
              <p className="text-secondary">همین الان</p>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <p className="d-flex align-items-center text-secondary fw-bold">
                <span className="text-success ms-1">●</span>
                ارسال نامه به HR و ادمین
              </p>
              <p className="text-secondary">2 دقیقه پیش</p>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <p className="d-flex align-items-center text-secondary fw-bold">
                <span className="text-danger ms-1">●</span>
                پشتیبان گیری فایل EOD
              </p>
              <p className="text-secondary">14:00</p>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <p className="d-flex align-items-center text-secondary fw-bold">
                <span className="text-secondary ms-1">●</span>
                جمع آوری اسناد از سارا
              </p>
              <p className="text-secondary">16:09</p>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <p className="d-flex align-items-center text-secondary fw-bold">
                <span className="text-warning ms-1">●</span>
                جزئیات قرارداد را به فریلنسر ارسال کنید
              </p>
              <p className="text-secondary">17:36</p>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <p className="d-flex align-items-center text-secondary fw-bold">
                <span className="text-info ms-1">●</span>
                مهدی می خواهد زمان پروژه را افزایش دهد.
              </p>
              <p className="text-secondary">همین الان</p>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <p className="d-flex align-items-center text-secondary fw-bold">
                <span className="text-info ms-1">●</span>
                بروزرسانی گزارشات سرور
              </p>
              <p className="text-secondary">همین الان</p>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <p className="d-flex align-items-center text-secondary fw-bold">
                <span className="text-info ms-1">●</span>
                بروزرسانی گزارشات سرور
              </p>
              <p className="text-secondary">همین الان</p>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <p className="d-flex align-items-center text-secondary fw-bold">
                <span className="text-info ms-1">●</span>
                بروزرسانی گزارشات سرور
              </p>
              <p className="text-secondary">همین الان</p>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <p className="d-flex align-items-center text-secondary fw-bold">
                <span className="text-info ms-1">●</span>
                بروزرسانی گزارشات سرور
              </p>
              <p className="text-secondary">همین الان</p>
            </div>
          </div>
          <button className="btn text-info w-100 m-auto">
            مشاهده همه <KeyboardArrowLeftIcon className="arrowDown" />
          </button>
        </div>
        <div className="col-4">
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

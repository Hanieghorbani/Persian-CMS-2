import React from "react"
import LineCharts from "../../components/lineChart/LineChart"
import HomeIcon from "@mui/icons-material/Home"
import CreditCardIcon from "@mui/icons-material/CreditCard"
import AddIcon from '@mui/icons-material/Add';
import "./analyze.css"
export default function Analyze() {
  return (
    <div className="analyze w-100 mt-4">
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
                <button className="btn btn-sm btn-outline-light ms-1"><AddIcon /></button>
                <button className="btn btn-sm btn-outline-light">
                  <CreditCardIcon />
                </button>
              </div>
              <button className="btn  btn-sm btn-outline-light">ارتقا</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import './ScrollBox.css'
export default function ScrollBox(props) {
  return (
    <div className='scrollBox'>
        <h5 className="text-white p-3">{props.title}</h5>
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
    </div>
  )
}

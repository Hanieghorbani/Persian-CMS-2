import React from "react"
import "./SettingAccount.css"

import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined"
import TwitterIcon from "@mui/icons-material/Twitter"
import GitHubIcon from "@mui/icons-material/GitHub"
export default function SettingAccount() {
  return (
    <div className="settingAcc m-lg-3 w-100">
   
      <div className="bgMain rounded p-lg-4 pb-4 mx-4">
        <h6 className="text-light mb-5 p-4 p-lg-0">اطلاعات کلی</h6>
        <div className="d-flex flex-column flex-lg-row align-items-center px-lg-5">
          <div className="border-lg-start border-secondary w-100 w-lg-25 ms-lg-4 ps-lg-3 px-4 px-lg-0">
            <input type="file" accept="image/*" className="w-100" />
            <p className="text-success">آپلود عکس</p>
          </div>

          <div className="me-lg-5 w-100 w-lg-75">
            <div className="row justify-content-between">
              <div className="col-lg-6">
                <p>نام و نام خانوادگی</p>
                <input
                  type="text"
                  defaultValue="حانیه قربانی"
                  className="w-100"
                />
              </div>
              <div className="col-lg-6 mt-4 mt-lg-0">
                <p>تاریخ تولد</p>
                <div className="d-flex justify-content-lg-between flex-column flex-lg-row">
                  <select name="day" defaultValue={3}>
                    <option value="day">روز</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                  </select>

                  <select
                    name="month"
                    defaultValue={"خرداد"}
                    className="mx-lg-1 my-4 my-lg-0"
                  >
                    <option value="ماه">ماه</option>
                    <option value="فروردین">فروردین</option>
                    <option value="اردیبهشت">اردیبهشت</option>
                    <option value="خرداد">خرداد</option>
                    <option value="تیر">تیر</option>
                    <option value="مرداد">مرداد</option>
                    <option value="شهریور">شهریور</option>
                    <option value="مهر">مهر</option>
                    <option value="آبان">آبان</option>
                    <option value="آذر">آذر</option>
                    <option value="دی">دی</option>
                    <option value="بهمن">بهمن</option>
                    <option value="اسفند">اسفند</option>
                  </select>

                  <select name="year" defaultValue={1382}>
                    <option value="سال">سال</option>
                    <option value="1370">1370</option>
                    <option value="1371">1371</option>
                    <option value="1372">1372</option>
                    <option value="1373">1373</option>
                    <option value="1374">1374</option>
                    <option value="1375">1375</option>
                    <option value="1376">1376</option>
                    <option value="1377">1377</option>
                    <option value="1378">1378</option>
                    <option value="1379">1379</option>
                    <option value="1380">1380</option>
                    <option value="1381">1381</option>
                    <option value="1382">1382</option>
                    <option value="1383">1383</option>
                    <option value="1384">1384</option>
                    <option value="1385">1385</option>
                    <option value="1386">1386</option>
                    <option value="1387">1387</option>
                    <option value="1388">1388</option>
                    <option value="1389">1389</option>
                    <option value="1390">1390</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row mt-4 mt-lg-5 mx-3 mx-lg-0">
              <p>حرفه</p>
              <input type="text" defaultValue="طراح سایت" className="" />
            </div>
          </div>
        </div>
      </div>

      <div className="bgMain rounded p-4 mt-3 mx-4">
        <h6 className="text-light">بیوگرافی</h6>

        <div className="mt-4 px-lg-5">
          <h6 className="text-secondary">درباره من</h6>

          <textarea rows="6" className="w-100 rounded fs-3"></textarea>
        </div>
      </div>

      <div className="bgMain rounded p-1 p-lg-4 my-3 mx-4">
        <h6 className="text-light p-3 p-lg-0">مخاطب</h6>

        <div className="row mt-5 px-5">
          <div className="col-lg-6">
            <p>کشور</p>
            <select name="country">
              <option value="همه کشورها">همه کشورها</option>
              <option value="ایران">ایران</option>
              <option value="فرانسه">فرانسه</option>
              <option value="کره جنوبی">کره جنوبی</option>
              <option value="آمریکا">آمریکا</option>
              <option value="انگلیس">انگلیس</option>
              <option value="ایتالیا">ایتالیا</option>
              <option value="چین">چین</option>
            </select>
          </div>

          <div className="col-lg-6 my-4 my-lg-0">
            <p>آدرس</p>
            <input type="text" defaultValue={"تهران"} />
          </div>
          <div className="col-lg-6 my-lg-4">
            <p>کد پستی</p>
            <input type="text" defaultValue={1234567890} />
          </div>
          <div className="col-lg-6 my-4">
            <p>موبایل</p>
            <input type="text" defaultValue={"989121234567+"} />
          </div>
          <div className="col-lg-6">
            <p>ایمیل</p>
            <input type="email" defaultValue={"hnie.ghorbani@gmail.com"} />
          </div>
          <div className="col-lg-6 my-4 my-lg-0">
            <p>وبسایت</p>
            <input
              type="text"
              placeholder="آدرس وبسایتتان را در اینجا بنویسید"
            />
          </div>
        </div>
      </div>

      <div className="bgMain rounded p-4 mb-lg-5 mx-4">
        <h6 className="text-light">اجتماعی</h6>

        <div className="row">
          <div className="col-lg-6 d-flex align-items-center">
            <FacebookOutlinedIcon />
            <input type="text" placeholder="@hanie" />
          </div>
          <div className="col-lg-6 d-flex align-items-center  my-4">
            <TwitterIcon />
            <input type="text" placeholder="@hanie" />
          </div>
          <div className="col-lg-6 d-flex align-items-center my-lg-4">
            <GitHubIcon />
            <input type="text" placeholder="@hnieghorbani" />
          </div>
          <div className="col-lg-6 d-flex align-items-center mt-4 mt-lg-0">
            <GitHubIcon />
            <input type="text" placeholder="@hnieghorbani" />
          </div>
        </div>
      </div>

      <div className="saveCha d-flex rounded py-2 justify-content-between">
        <button className="btn btn-info mx-5">تنظیم مجدد</button>
        <button className="btn btn-secondary ms-5">ذخیره تغییرات</button>
      </div>
    </div>
  )
}

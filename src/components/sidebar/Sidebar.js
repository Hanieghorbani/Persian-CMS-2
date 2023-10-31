import React from "react"
import "./Sidebar.css"
import StorefrontIcon from "@mui/icons-material/Storefront"
import WorkOutlineIcon from "@mui/icons-material/WorkOutline"
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft"
import HomeIcon from "@mui/icons-material/Home"
import AppsIcon from "@mui/icons-material/Apps"
import WidgetsIcon from "@mui/icons-material/Widgets"
import ContentPasteIcon from "@mui/icons-material/ContentPaste"
import LayersIcon from "@mui/icons-material/Layers"
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline"
import LockIcon from "@mui/icons-material/Lock"
import { Accordion } from "react-bootstrap"
import { Link } from "react-router-dom"
import CmsContext from "../../contexts/cmsContext"
import { useContext } from "react"
export default function Sidebar() {
  const contextData = useContext(CmsContext)
  function changeIsShowMenu(e){
    if (e.target.tagName == 'LI') {
      contextData.setShowMenuBar(false)
    }
  }
  return (
    <div className={`sidebar ${contextData.showMenuBar ? 'd-block' : 'd-none'}`}>
      <Accordion defaultActiveKey="0" onClick={e=>changeIsShowMenu(e)}>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <HomeIcon />
            داشبورد
            <KeyboardArrowLeftIcon className="arrow" />
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <Link to={"/"}>
                <li>فروش ها</li>
              </Link>
              <Link to={"/analyze"}>
                <li>تجزیه و تحلیل</li>
              </Link>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <LayersIcon />
            جداول داده
            <KeyboardArrowLeftIcon className="arrow" />
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>پایه ای</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <PeopleOutlineIcon />
            کاربران
            <KeyboardArrowLeftIcon className="arrow" />
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <Link to={"/profile"}>
                <li>پروفایل</li>
              </Link>
              <Link to={"/settingAccount"}>
                <li>تنظیمات اکانت</li>
              </Link>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <LockIcon />
            احراز هویت
            <KeyboardArrowLeftIcon className="arrow" />
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <Link to={"/login"}>
                <li>ورود</li>
              </Link>
              <Link to={"/register"}>
                <li>ثبت نام</li>
              </Link>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <AppsIcon />
            برنامه ها
            <KeyboardArrowLeftIcon className="arrow" />
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <Link to={"./contacts"}>
                <li>مخاطبین</li>
              </Link>
              <Link to={"./notes"}>
                <li>یادداشت</li>
              </Link>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header>
            <ContentPasteIcon />
            ابزارک ها
            <KeyboardArrowLeftIcon className="arrow" />
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>لورم</li>
              <li>ایپسوم</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6">
          <Accordion.Header>
            <WidgetsIcon />
            اجزا
            <KeyboardArrowLeftIcon className="arrow" />
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>زبانه ها</li>
              <li>کارت ها</li>
              <li>پیشخوان</li>
              <li>کاروسول</li>
              <li>شمارش معکوس</li>
              <li>مسدود کردن کاربر</li>
              <li>مودال ها</li>
              <li>پایان جلسه</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="7">
          <Accordion.Header>
            <WorkOutlineIcon />
            عناصر
            <KeyboardArrowLeftIcon className="arrow" />
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>هشدارها</li>
              <li>نشانها</li>
              <li>دکمه ها</li>
              <li>کشویی</li>
              <li>لودر</li>
              <li>جعبه اطلاعات</li>
              <li>آواتارها</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="8">
          <Accordion.Header>
            <StorefrontIcon />
            صفحات
            <KeyboardArrowLeftIcon className="arrow" />
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>راهنما</li>
              <li>فرم تماس</li>
              <li>سوالات متداول</li>
              <li>2 فرم تماس</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>
            <StorefrontIcon />
            صفحات
            <KeyboardArrowLeftIcon className="arrow" />
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>راهنما</li>
              <li>فرم تماس</li>
              <li>سوالات متداول</li>
              <li>2 فرم تماس</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>
            <StorefrontIcon />
            صفحات
            <KeyboardArrowLeftIcon className="arrow" />
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>راهنما</li>
              <li>فرم تماس</li>
              <li>سوالات متداول</li>
              <li>2 فرم تماس</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>
            <StorefrontIcon />
            صفحات
            <KeyboardArrowLeftIcon className="arrow" />
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>راهنما</li>
              <li>فرم تماس</li>
              <li>سوالات متداول</li>
              <li>2 فرم تماس</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>
            <StorefrontIcon />
            صفحات
            <KeyboardArrowLeftIcon className="arrow" />
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>راهنما</li>
              <li>فرم تماس</li>
              <li>سوالات متداول</li>
              <li>2 فرم تماس</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

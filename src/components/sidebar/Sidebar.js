import React from "react"
import "./Sidebar.css"
import LineStyleIcon from "@mui/icons-material/LineStyle"
import TimelineIcon from "@mui/icons-material/Timeline"
import TrendingUpIcon from "@mui/icons-material/TrendingUp"
import PermIdentityIcon from "@mui/icons-material/PermIdentity"
import StorefrontIcon from "@mui/icons-material/Storefront"
import AttachMoneyIcon from "@mui/icons-material/AttachMoney"
import BarChartIcon from "@mui/icons-material/BarChart"
import MailOutlineIcon from "@mui/icons-material/MailOutline"
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed"
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline"
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined"
import WorkOutlineIcon from "@mui/icons-material/WorkOutline"
import ReportIcon from "@mui/icons-material/WorkOutline"

import { Link } from "react-router-dom"
export default function Sidebar() {
  return (
    <div className=" sidebar">
      <div className="mb-3">
        <h6>Dashboard</h6>
        <ul>
          <Link to={"/"} className='link'>
            <li className="active">
              <LineStyleIcon />
              Home
            </li>
          </Link>
          <li>
            <TimelineIcon />
            Analytics
          </li>
          <li>
            <TrendingUpIcon />
            Sales
          </li>
        </ul>
      </div>

      <div className="mb-3">
        <h6>Quick Menu</h6>
        <ul>
          <Link to={"/users"} className='link'>
            <li>
              <PermIdentityIcon />
              Users
            </li>
          </Link>
          <Link to={"/newUser"} className='link'>
            <li>
              <StorefrontIcon />
              New User
            </li>
          </Link>
          <Link to={"/products"} className='link'>
            <li>
              <AttachMoneyIcon />
              Products
            </li>
          </Link>
          <li>
            <BarChartIcon />
            Transactions
          </li>
          <li>
            <MailOutlineIcon />
            Reports
          </li>
        </ul>
      </div>

      <div className="mb-3">
        <h6>Notifications</h6>
        <ul>
          <li>
            <MailOutlineIcon />
            Mail
          </li>
          <li>
            <DynamicFeedIcon />
            Feedback
          </li>
          <li>
            <ChatBubbleOutlineIcon />
            Messages
          </li>
        </ul>
      </div>

      <div className="mb-3">
        <h6>Staff</h6>
        <ul>
          <li>
            <WorkOutlineIcon />
            Manage
          </li>
          <li>
            <TimelineIcon />
            Analytics
          </li>
          <li>
            <ReportIcon />
            Reports
          </li>
        </ul>
      </div>
    </div>
  )
}

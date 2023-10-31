import React from "react"
import "./TopBar.css"
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone"
import LanguageIcon from "@mui/icons-material/Language"
import SettingsIcon from "@mui/icons-material/Settings"
import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  TextField,
} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import MailOutlineIcon from "@mui/icons-material/MailOutline"
import SearchBox from "../searchBox/SearchBox"
import MenuIcon from '@mui/icons-material/Menu';
import CmsContext from "../../contexts/cmsContext"
import { useContext } from "react"
import context from "react-bootstrap/esm/AccordionContext"
export default function TopBar() {
  const contextData = useContext(CmsContext)
  return (
    <div className="w-100 position-sticky top-0 z-3">
       <div className="topbar d-flex justify-content-between align-items-center py-3 px-4 w-100 bg-dark">
      <div>
        <img src="/imgs/logo.png" className="logo ms-lg-5" />
        <div className="d-none d-lg-inline-block">
          <SearchBox />
        </div>
      </div>

      <div className="topbarLeft d-flex align-items-center">
        <img src="/imgs/ca.png" className="lang" />
        <SearchIcon className="d-inline-block d-lg-none fs-5 fs-lg-3 text-secondary me-1" />
        <MailOutlineIcon className="text-secondary fs-5 fs-lg-3 mx-1 mx-lg-3 " />
        <NotificationsNoneIcon className="text-secondary fs-5 fs-lg-3 ms-1 ms-lg-3" />
        <img src="/imgs/logo.png" className="logo" />
      </div>
    </div>

    <div className="d-flex d-lg-none w-100 bg-secondary p-3">
    <MenuIcon className="text-light" style={{cursor:"pointer"}} onClick={()=>contextData.setShowMenuBar(prev=>!prev)}/>
    </div>
    </div>
   
  )
}

import React from 'react'
import './TopBar.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import { FormControl,InputLabel,Input,InputAdornment,IconButton,TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export default function TopBar() {
  return (
    <div className='topbar d-flex justify-content-between align-items-center py-3 px-4 position-sticky top-0 w-100 z-3 bg-dark'>
        
 <div>
 <img src="/imgs/logo.png" className='logo' />
  <TextField
        className='inputBox me-5'
        id="input-with-icon-textfield"
        placeholder='جستجو کنید...'
        color=' string'
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon className='text-secondary ms-2 mb-3'/>
            </InputAdornment>
          ),
        }}
        variant="filled"
      />
 </div>

 <div className='topbarLeft d-flex align-items-center'>
  <img src="/imgs/ca.png" className='lang'/>
  <MailOutlineIcon className='text-secondary fs-3 mx-3'/>
  <NotificationsNoneIcon className='text-secondary fs-3 ms-3'/>
  <img src="/imgs/logo.png" className='logo'/>
 </div>
        
    </div>
  )
}

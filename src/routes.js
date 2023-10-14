import Sales from "./pages/sales/Sales"
import Analyze from './pages/analyze/Analyze'
import Notes from './pages/notes/Notes'
import Contacts from './pages/contacts/Contacts'
import Profile from './pages/profile/Profile'
import SettingAccount from './pages/setting-account/SettingAccount'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
let routes = [
    {path:'/',element:<Sales/>},
    {path:'/analyze',element:<Analyze/>},
    {path:'/notes',element:<Notes/>},
    {path:'/Contacts',element:<Contacts/>},
    {path:'/profile',element:<Profile/>},
    {path:'/settingAccount',element:<SettingAccount/>},
    {path:'/login',element:<Login/>},
    {path:'/register',element:<Register/>},
]

export default routes
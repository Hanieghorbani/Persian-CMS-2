import routes from "./routes"
import './App.css'
import { useRoutes } from "react-router-dom"
import TopBar from "./components/topBar/TopBar"
import Sidebar from "./components/sidebar/Sidebar"
export default function App() {
  let routers = useRoutes(routes)
  return (
    <div className="App">
      <TopBar />
      <div className="px-4 d-flex">
        <Sidebar/>
        {routers}
      </div>
    </div>
  )
}

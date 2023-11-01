import routes from "./routes"
import "./App.css"
import { useRoutes } from "react-router-dom"
import TopBar from "./components/topBar/TopBar"
import Sidebar from "./components/sidebar/Sidebar"
import CmsContext from "./contexts/cmsContext"
import { useState } from "react"
export default function App() {
  let routers = useRoutes(routes)
  const [showMenuBar, setShowMenuBar] = useState(false)
  return (
    <CmsContext.Provider
      value={{
        showMenuBar,
        setShowMenuBar,
      }}
    >
      <div className="App">
        <TopBar />
        <div className="d-flex w-100 containerDiv">
          <div className={`sidebarDiv ${showMenuBar ? 'showSidebar ' : 'd-none'}`}>
            <Sidebar />
          </div>
          <div className={`routersDiv  ${!showMenuBar ? 'w-100' : ''}`}>
            {routers}
          </div>
        </div>
      </div>
    </CmsContext.Provider>
  )
}

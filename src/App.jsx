import { Routes, Route } from "react-router-dom"

import AdminPortal from "./pages/AdminPortal"
import Home from "./pages/Home"
import Shop from "./pages/Shop"

function App() {

  return (  
    <>      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/shop" element={<Shop />}/>
        <Route path="/adminportal" element={<AdminPortal />}/>
      </Routes>
    </>  
          
  
  )
}

export default App

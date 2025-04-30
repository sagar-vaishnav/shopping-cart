import {Routes, Route} from "react-router-dom";
import { Home } from "../pages";
import { Cart } from "../pages";
export const AllRoutes = () => {
  return (
    <>    
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />            
        </Routes>      
    </>
  )
}

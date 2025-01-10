import { Route, Routes } from "react-router-dom"
import Clothing from "./Clothing"
import Electronics from "./Electronics"
import Health from "./Health"
import Kitchen from "./Kitchen"
import ProductDetails from "./ProductDetails"
import Sports from "./Sports"

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/product/:id' element={<ProductDetails />}></Route>
            <Route path='/electronics' element={<Electronics />}></Route>
            <Route path='/clothings' element={<Clothing />}></Route>
            <Route path='/health' element={<Health />}></Route>
            <Route path='/kitchen' element={<Kitchen />}></Route>
            <Route path='/sports' element={<Sports />}></Route>
            <Route path='/' element={<Electronics />}></Route>
        </Routes>
    )
}

export default AllRoutes
import { Route, Routes } from "react-router-dom"
import Clothing from "./Clothing"
import Electronics from "./Electronics"
import Health from "./Health"
import Kitchen from "./Kitchen"
import Sports from "./Sports"

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/electronics' element={<Electronics />}></Route>
            <Route path='/clothings' element={<Clothing />}></Route>
            <Route path='/health' element={<Health />}></Route>
            <Route path='/kitchen' element={<Kitchen />}></Route>
            <Route path='/sports' element={<Sports />}></Route>
        </Routes>
    )
}

export default AllRoutes
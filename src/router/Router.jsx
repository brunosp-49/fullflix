import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/home/Home"
import Details from "../pages/details/Details"

export function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="/detail" element={<Details/>}/>
                <Route path="*" element={<div><h1>Error 404 - page is not found</h1></div>}/>
            </Routes>
        </BrowserRouter>
    )
}
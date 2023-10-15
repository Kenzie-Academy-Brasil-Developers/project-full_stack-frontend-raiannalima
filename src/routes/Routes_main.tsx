import { Route, Routes } from "react-router-dom"
import { Login } from "../pages/login"
import { Home } from "../pages/home"
import { Register } from "../pages/register"

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/user" element={<Register />}></Route>
        </Routes>
    )
}
import { Route, Routes } from "react-router-dom"
import { Login } from "../pages/login"
import { Home } from "../pages/home"
import { Register } from "../pages/register"
import { Product } from "../pages/product"
import { ProfileViewUser } from "../pages/profileViewUser"
import { ProfileViewAdmin } from "../pages/profileViewAdmin"

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/user" element={<Register />}></Route>
            <Route path="/product" element={<Product />}></Route>
            <Route path="/profile-user" element={<ProfileViewUser />}></Route>
            <Route path="profile-advertiser" element={<ProfileViewAdmin />}></Route>
        </Routes>
    )
}
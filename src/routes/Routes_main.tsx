import { Route, Routes } from "react-router-dom"
import App from "../App"
import { Login } from "../pages/login"

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<App />}></Route>
            <Route path="/login" element={<Login />}></Route>
        </Routes>
    )
}
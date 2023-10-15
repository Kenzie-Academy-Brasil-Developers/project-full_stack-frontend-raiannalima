import { Link } from "react-router-dom"

export const Header_home = () => {
    return (
        <header className="bg-grey10 h-20 w-full border-b-2 border-grey6">
            <div className="container flex items-center h-full justify-between">
                <div className="header_home_logo">
                    <Link to={"/"}>
                        <h2 className="text-transparent bg-gradient-to-r from-grey0 to-brand1 bg-clip-text text-3xl font-bold">
                            Motors <span className="text-transparent text-lg">Shop</span>
                        </h2>
                    </Link>
                </div>
                <div className="header_home_nav border-l-2 border-grey6 h-full flex items-center">
                    <Link to={"/login"} className="text-grey2 font-semibold mx-5 w-[8.3125rem] h-12 flex items-center justify-center">
                        Fazer Login
                    </Link>
                    <Link to="/register" className="border-2 border-grey6 rounded w-[8.3125rem] h-12 font-semibold pt-1 flex items-center justify-center color-grey0">
                        Cadastrar
                    </Link>
                </div>
            </div>
        </header>
    )
}
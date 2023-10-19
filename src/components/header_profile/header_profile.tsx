import { Link } from "react-router-dom"
import avatar from "../../assets/avatar.png";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export const Header_profile = () => {
    const { user } = useContext(UserContext);

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
                    <div className="w-8 h-8 mr-[0.5rem] ml-[2.75rem] flex justify-center items-center bg-brand1 rounded-[50%] text-sm text-whiteFixed font-medium">
                        {user?.name.charAt(0)}
                    </div>
                    <span className="text-grey2 text-base font-normal">
                        {user?.name}
                    </span>
                </div>
            </div>
        </header>
    )
}
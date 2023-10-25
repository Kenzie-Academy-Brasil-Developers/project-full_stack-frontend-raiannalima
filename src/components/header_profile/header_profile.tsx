import { Link } from "react-router-dom"
import { useContext, useState } from "react";
import { UserContext } from "../../providers/UserContext";

export const Header_profile = () => {
    const { user, userLogout, openModalEditUser } = useContext(UserContext);
    const [isModalOptionsUser, setIsModalOptionsUser] = useState(false);

    const toggleModalOptionsUser = () => {
        setIsModalOptionsUser(!isModalOptionsUser);
    };

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
                <div className="header_home_nav relative border-l-2 border-grey6 h-full flex items-center">
                    <div onClick={toggleModalOptionsUser} className="flex items-center">
                        <div className="w-8 h-8 mr-[0.5rem] ml-[2.75rem] flex justify-center items-center bg-brand1 rounded-[50%] text-sm text-whiteFixed font-medium">
                            {user?.name.charAt(0)}
                        </div>
                        <span className="text-grey2 text-base font-normal">
                            {user?.name}
                        </span>
                    </div>
                    {isModalOptionsUser &&
                        <div className="absolute top-[79px] left-[-3px] w-[10.5rem] bg-grey9 flex flex-col items-start gap-4 pl-[1.375rem] pr-[1.375rem] pt-[1.3125rem] pb-[1.3125rem] shadow-[0_4px_40px_-10px_rgba(0,0,0,0.25)]">
                            <button onClick={openModalEditUser} type="button" className="text-grey2 font-normal">
                                Editar perfil
                            </button>
                            <button type="button" className="text-grey2 font-normal">
                                Editar endereço
                            </button>
                            <button onClick={userLogout} type="button" className="text-grey2 font-normal">
                                Sair
                            </button>
                        </div>
                    }
                </div>
            </div>
        </header>
    )
}
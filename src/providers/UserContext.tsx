/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { AxiosError } from "axios";
import { TLoginFormData } from "../schemas/login_schema";
import { TRegisterFormData } from "../schemas/register_schema";

interface IUserProviderProps {
    children: React.ReactNode;
}

interface IUserContext {
    user: IUser | null;
    userLogin: (
        formData: TLoginFormData,
    ) => Promise<void>;
    userRegister: (
        formData: TRegisterFormData
    ) => Promise<void>;
    userLogout: () => void;
    isModalEditUserOpen: boolean;
    openModalEditUser: () => void;
    closeModalEditUser: () => void;
    userEdit: (formData: TRegisterFormData) => void;
    isModalRegisterOpen: boolean;
    closeModalRegisterSucess: () => void;
}

interface IUser {
    id: string;
    name: string;
    email: string;
    cpf: string;
    tel: string;
    birth: string;
    description: string | null;
    typeAccount: string;
    order_date: Date;
    cep: string;
    state: string;
    city: string;
    street: string | null;
    number: string | null;
    complement: string | null;
}

interface IUserLoginResponse {
    token: string;
    name: string;
    description: string;
    typeAccount: string;
    id: number;
}

interface IUserLoginReturn {
    name: string;
    description: string;
    typeAccount: string;
    id: number;
}

interface IAxiosErro {
    error: string;
    message: string;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
    const [user, setUser] = useState<IUserLoginReturn | null>(null);
    const navigate = useNavigate();
    const [isModalEditUserOpen, setIsModalEditUserOpen] = useState(false);
    const [isModalRegisterOpen, setIsModalRegisterOpen] = useState(false);

    const closeModalEditUser = () => {
        setIsModalEditUserOpen(false);
    }

    const openModalEditUser = () => {
        setIsModalEditUserOpen(true);
    }

    const closeModalRegisterSucess = () => {
        setIsModalRegisterOpen(false);
    }

    const openModalRegisterSucess = () => {
        setIsModalRegisterOpen(true);
    }

    const token = localStorage.getItem("@TOKEN");
    api.defaults.headers.common.authorization = `Bearer ${token}`;

    useEffect(() => {
        const token = localStorage.getItem("@TOKEN");
        const userId = localStorage.getItem("@USERID");

        const userAutoLogin = async () => {
            try {
                const { data } = await api.get<IUserLoginResponse>(`/user/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setUser(data);
                // navigate('/home');
            } catch (error) {
                console.log(error);
                localStorage.removeItem("@TOKEN");
                localStorage.removeItem("@USERID");
            }
        }

        if (token && userId) {
            userAutoLogin();
        }
    }, [])

    const userLogin = async (
        formData: TLoginFormData,
    ) => {
        try {
            const { data } = await api.post<IUserLoginResponse>("login", formData);
            localStorage.setItem("@TOKEN", data.token);
            localStorage.setItem("@USERID", JSON.stringify(data.id));
            const { name, description, typeAccount, id } = data;
            const newUser = {
                name: name,
                description: description,
                typeAccount: typeAccount,
                id: id
            }

            setUser(newUser);

            if (newUser.typeAccount == "Anunciante") {
                navigate("/profile-advertiser");
            } else {
                navigate("/");
            }

        } catch (error) {
            const showError = error as AxiosError<IAxiosErro>
            console.error(showError)
        }
    };

    const userRegister = async (
        formData: TRegisterFormData,
    ) => {
        try {
            const { data } = await api.post<IUser>("user", formData);
            openModalRegisterSucess()
            // setUser(data);
            // navigate("/login");

        } catch (error) {
            const showError = error as AxiosError<IAxiosErro>
            console.error(showError)
        }
    };

    const userEdit = async (formData: TRegisterFormData) => {
        const token = localStorage.getItem("@TOKEN");
        const id = localStorage.getItem("@USERID");

        api.defaults.headers.common.authorization = `Bearer ${token}`;
        const { data } = await api.patch(`user/${id}`, formData);
        setUser({ ...user, ...data })
        closeModalEditUser()
    }

    const userLogout = () => {
        localStorage.removeItem("@TOKEN");
        localStorage.removeItem("@USERID");
        setUser(null);
        navigate("/");
    };

    return (
        <UserContext.Provider value={{
            user,
            userLogin,
            userRegister,
            userLogout,
            closeModalEditUser,
            openModalEditUser,
            isModalEditUserOpen,
            userEdit,
            isModalRegisterOpen,
            closeModalRegisterSucess
        }}>
            {children}
        </UserContext.Provider>
    );
};


// criar um estado para os modais e setar true quando a requisição for chamada. 
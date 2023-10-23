/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useState } from "react";
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

    const token = localStorage.getItem("@TOKEN");
    api.defaults.headers.common.authorization = `Bearer ${token}`;

    const userLogin = async (
        formData: TLoginFormData,
    ) => {
        try {
            const { data } = await api.post<IUserLoginResponse>("login", formData);
            localStorage.setItem("@TOKEN", data.token);
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
                navigate("/profile-user");
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
            // setUser(data);
            navigate("/login");

        } catch (error) {
            const showError = error as AxiosError<IAxiosErro>
            console.error(showError)
        }
    };

    const userLogout = () => {
        localStorage.removeItem("@TOKEN");
        localStorage.removeItem("@USERID");
        setUser(null);
        navigate("/");
    };

    return (
        <UserContext.Provider value={{ user, userLogin, userRegister, userLogout }}>
            {children}
        </UserContext.Provider>
    );
};

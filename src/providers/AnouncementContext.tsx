import React, { createContext, useState } from "react";
import { TAnouncementFormData } from "../schemas/anouncement_schema";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { AxiosError } from "axios";

interface IAnouncementProviderProps {
    children: React.ReactNode;
}

interface IAnouncement {
    brand: string;
    model: string;
    year: number;
    fuel: string;
    mileage: number;
    color: string;
    price_fipe: number;
    price: number;
    description: string;
    cover_image: string;
    images: [IImage];
}

interface IImage {
    image_url: string;
}

interface IAnouncementContext {
    anouncement: IAnouncement | null;
    isModalCreateOpen: boolean;
    openModalCreate: () => void;
    closeModalCreate: () => void;
    createAnouncement: (formData: TAnouncementFormData) => void;
}

export const AnouncementContext = createContext({} as IAnouncementContext);

export const AnouncementProvider = ({
    children,
}: IAnouncementProviderProps) => {
    const [anouncement, setAnouncement] = useState<IAnouncement | null>(null);
    const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);

    const navigate = useNavigate();

    const closeModalCreate = () => {
        setIsModalCreateOpen(false);
    };
    const openModalCreate = () => {
        setIsModalCreateOpen(true);
    };

    const createAnouncement = async (formData: TAnouncementFormData) => {
        try {
            const token = localStorage.getItem("@TOKEN");
            api.defaults.headers.common.authorization = `Bearer ${token}`;
            const { data } = await api.post("anouncement", formData);
            console.log(data)
            setAnouncement(data);
        } catch (error) {
            const showError = error as AxiosError<AxiosError>;
            console.error(showError);
        }
    };

    return (
        <AnouncementContext.Provider
            value={{
                anouncement,
                closeModalCreate,
                openModalCreate,
                isModalCreateOpen,
                createAnouncement
            }}
        >
            {children}
        </AnouncementContext.Provider>
    );
};
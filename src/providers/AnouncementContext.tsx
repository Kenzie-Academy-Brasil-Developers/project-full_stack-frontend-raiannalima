import React, { createContext, useEffect, useState } from "react";
import { TAnouncementFormData } from "../schemas/anouncement_schema";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { AxiosError } from "axios";
import { IComment, IImage, IUser } from "../interfaces";

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

export interface IAnouncementId {
    id: number;
    brand: string;
    model: string;
    year: number;
    fuel: string;
    mileage: number;
    color: string;
    price_fipe: number;
    price: number;
    description?: string | undefined | null;
    cover_image: string;
    user: IUser;
    images: [IImage];
    comments: [IComment];
}

interface IImage {
    image_url: string;
}

interface IAnouncementContext {
    anouncement: IAnouncement | IAnouncementId | null;
    isModalCreateOpen: boolean;
    anouncements: IAnouncementId[] | null;
    isModalEditOpen: boolean;
    openModalCreate: () => void;
    closeModalCreate: () => void;
    openModalEdit: () => void;
    closeModalEdit: () => void;
    openModalDelete: () => void;
    closeModalDelete: () => void;
    createAnouncement: (formData: TAnouncementFormData) => void;
    getAnouncements: () => void;
    removeAnouncement: (anouncementId: number) => void;
    currentAnouncement: IAnouncementId | null;
    setCurrentAnouncement: React.Dispatch<React.SetStateAction<IAnouncementId | null>>
    editAnouncement: (anouncementId: number, formData: TAnouncementFormData) => void;
    anouncementsAdvertiser: IAnouncementId[] | null;
    isModalDeleteOpen: boolean;
}

export const AnouncementContext = createContext({} as IAnouncementContext);

export const AnouncementProvider = ({
    children,
}: IAnouncementProviderProps) => {
    const [anouncement, setAnouncement] = useState<IAnouncement | null>(null);
    const [anouncements, setAnouncements] = useState<IAnouncementId[]>([]);
    const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);
    const [isModalEditOpen, setIsModalEditOpen] = useState(false);
    const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
    const [currentAnouncement, setCurrentAnouncement] = useState<IAnouncementId | null>(null)
    const [anouncementsAdvertiser, setAnouncementsAdvertiser] = useState<IAnouncementId[] | null>(null);

    const navigate = useNavigate();
    const idUser = localStorage.getItem("@USERID");

    useEffect(() => {
        getAnouncements()
    }, [anouncement])

    useEffect(() => {
        getAnouncementsAdvertiser(idUser)
    }, [anouncement])

    const closeModalCreate = () => {
        setIsModalCreateOpen(false);
    };

    const openModalCreate = () => {
        setIsModalCreateOpen(true);
    };

    const closeModalEdit = () => {
        setIsModalEditOpen(false);
    }

    const openModalEdit = () => {
        setIsModalEditOpen(true);
    }

    const closeModalDelete = () => {
        setIsModalDeleteOpen(false);
    };

    const openModalDelete = () => {
        setIsModalDeleteOpen(true);
    };

    const createAnouncement = async (formData: TAnouncementFormData) => {
        try {
            const token = localStorage.getItem("@TOKEN");
            api.defaults.headers.common.authorization = `Bearer ${token}`;
            const { data } = await api.post("anouncement", formData);
            console.log(data)
            // setAnouncement(data);
            getAnouncements()
        } catch (error) {
            const showError = error as AxiosError<AxiosError>;
            console.error(showError);
        }
    };

    const getAnouncements = async () => {
        try {
            const anouncements = await api.get("anouncement");
            setAnouncements(anouncements.data)
        } catch (error) {
            const showError = error as AxiosError<AxiosError>;
            console.error(showError);
        }
    }

    const editAnouncement = async (anouncementId: number, formData: TAnouncementFormData) => {
        const token = localStorage.getItem("@TOKEN");
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        const { data } = await api.patch(`anouncement/${anouncementId}`, formData);
        setAnouncement(data)
        closeModalEdit()
    }

    const getAnouncementsAdvertiser = async (userId: string) => {
        try {
            const allAnouncementsAdvertiser = await api.get(`anouncement/advertiser/${userId}`);
            setAnouncementsAdvertiser(allAnouncementsAdvertiser.data);
        } catch (error) {
            const showError = error as AxiosError<AxiosError>;
            console.error(showError);
        }
    }


    const removeAnouncement = async (anouncementId: number) => {
        const token = localStorage.getItem("@TOKEN");

        try {
            await api.delete(`anouncement/${anouncementId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            })

            const newAnouncementsList = anouncements!.filter(currentAnouncement => currentAnouncement.id !== anouncementId);
            setAnouncements(newAnouncementsList)
            closeModalEdit()
            window.location.reload()
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <AnouncementContext.Provider
            value={{
                anouncement,
                closeModalCreate,
                openModalCreate,
                isModalCreateOpen,
                createAnouncement,
                getAnouncements,
                anouncements,
                closeModalEdit,
                openModalEdit,
                isModalEditOpen,
                removeAnouncement,
                currentAnouncement,
                setCurrentAnouncement,
                editAnouncement,
                anouncementsAdvertiser,
                closeModalDelete,
                openModalDelete
            }}
        >
            {children}
        </AnouncementContext.Provider>
    );
};

// fazer um get;
// armazenar em um estado 
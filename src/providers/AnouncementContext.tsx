import React, { createContext, useContext, useEffect, useState } from "react";
import { TAnouncementFormData } from "../schemas/anouncement_schema";
import { TCommentFormData } from "../schemas/comment_schema";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { AxiosError } from "axios";
import { IComment, IImage, IUser } from "../interfaces";
import { UserContext } from "./UserContext";

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

interface IComment {
    id: number;
    comment: string;
    user: IUser;
    anouncement: IAnouncementId;
}

interface ICommentReturn {
    id: number,
    comment: string,
    user: IUser,
    anouncement: IAnouncementId
}

// MEXI NA ICOMMENT ADICIONANDO O USER E O ANOUNCEMENT. ANTES NÃO TINHA ESSES DADOS. 

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
    getAnouncementsAdvertiser: (userId: string) => void;
    anouncementById: IAnouncementId | null;
    getAnouncementById: (anouncementId: string) => void;
    getCommentsByIdAnouncement: (anouncementId: string) => void;
    comments: IComment[] | [];
    createComment: (anouncementId: string, formData: TCommentFormData) => void;
    returnComment: ICommentReturn | null;
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
    const [anouncementById, setAnouncementById] = useState<IAnouncementId | null>(null);
    const [comments, setComments] = useState<IComment[]>([]);
    const [returnComment, setReturnComment] = useState<ICommentReturn | null>(null)

    const { user } = useContext(UserContext);

    const navigate = useNavigate();

    useEffect(() => {
        getAnouncements()
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
        setIsModalEditOpen(false)
        setIsModalDeleteOpen(true);
    };

    const createAnouncement = async (formData: TAnouncementFormData) => {
        try {
            const token = localStorage.getItem("@TOKEN");
            api.defaults.headers.common.authorization = `Bearer ${token}`;
            const { data } = await api.post("anouncement", formData);
            // setAnouncement(data);
            getAnouncementsAdvertiser(user!.id);
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

    const getAnouncementById = async (anouncementId: string) => {
        try {
            const anouncement = await api.get(`anouncement/${anouncementId}`);
            setAnouncementById(anouncement.data);
            navigate(`product/${anouncementId}`);
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

    /* Comments */

    const getCommentsByIdAnouncement = async (anouncementId: string) => {
        try {
            const allComments = await api.get(`comment/${anouncementId}`);
            setComments(allComments.data)
        } catch (error) {
            const showError = error as AxiosError<AxiosError>;
            console.error(showError);
        }
    }

    const createComment = async (anouncementId: string, formData: TCommentFormData) => {
        try {
            const token = localStorage.getItem("@TOKEN");
            api.defaults.headers.common.authorization = `Bearer ${token}`;
            const { data } = await api.post(`comment/${anouncementId}`, formData);
            setReturnComment(data)
            setComments([...comments, data])
            // getCommentsByIdAnouncement(anouncementId)
        } catch (error) {
            const showError = error as AxiosError<AxiosError>;
            console.error(showError);
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
                openModalDelete,
                getAnouncementsAdvertiser,
                getAnouncementById,
                isModalDeleteOpen,
                anouncementById,
                getCommentsByIdAnouncement,
                comments,
                createComment,
                returnComment
            }}
        >
            {children}
        </AnouncementContext.Provider>
    );
};






// Fazer uma rota de get por id do anúncio; 
// Armazenar este anúncio em um estado; 
// Pegar este estado chamar na página de produto e renderizar na tela o anúncio. 
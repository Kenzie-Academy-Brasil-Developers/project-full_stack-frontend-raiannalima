import React, { createContext, useState } from "react";
import { TAnouncementFormData } from "../schemas/anouncement_schema";

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
    images: [
        IImage
    ];
}

interface IImage {
    image_url: string;
}

interface IAnouncementContext {
    anouncement: IAnouncement | null;
}

export const AnouncementContext = createContext({} as IAnouncementContext);

export const AnouncementProvider = ({ children }: IAnouncementProviderProps) => {
    const [anouncement, setAnouncement] = useState<IAnouncement | null>(null);

    const createAnouncement = async (
        formData: TAnouncementFormData,
    ) => {
        try {
            const { data } = await api.post<IUser>("profile-advertiser", formData);
            // setUser(data);
            navigate("/login");

        } catch (error) {
            const showError = error as AxiosError<IAxiosErro>
            console.error(showError)
        }
    };

    return (
        <AnouncementContext.Provider value={{ anouncement }}>
            {children}
        </AnouncementContext.Provider>
    );
}    
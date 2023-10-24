export interface IUser {
    id: number;
    name: string;
    email: string;
    cpf: string;
    tel: string;
    birth: string;
    password: string;
    typeAccount: 'Comprador' | 'Anunciante';
    anouncements: IAnouncement;
    address: IAddress;
}

export interface IImage {
    id: number;
    image_url: string;
}

export interface IComment {
    id: number;
    comment: string;
    user: IUser;
}

export interface IAnouncement {
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
    images: IImage[];
    comments: IComment[];
}

export interface IAddress {
    id: number;
    order_date: string;
    cep: string;
    state: string;
    city: string;
    street: string;
    number: number;
    complement?: string | undefined | null;
    user: IUser;
}

export interface IUserLogin {
    email: string;
    password: string;
}
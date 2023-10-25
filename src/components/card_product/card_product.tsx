import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { ReactNode } from "react";
import { IAnouncementId } from "../../providers/AnouncementContext";

interface IPropAnouncement {
    anouncement: IAnouncementId;
    children?: ReactNode;
}

export const Card_product = ({ anouncement }: IPropAnouncement) => {
    const { user } = useContext(UserContext);

    return (
        <li className="w-[16rem] h-[28.875rem] overflow-y-scroll">
            <div className="flex justify-center items-center card-product-img bg-grey7 h-[9.5rem] mb-4">
                <img src={anouncement?.cover_image} alt="Imagem do carro vinculado ao anúncio." className="max-h-[9.5rem]"></img>
            </div>
            <div className="card-product-info_car mb-4">
                <h2 className="max-h-[1.875rem] overflow-y-scroll title-01 mb-4 font-lexend text-base text-grey1 font-semibold">
                    {anouncement?.brand}
                </h2>
                <p className="max-h-[5rem] min-h-[5rem] overflow-y-scroll font-normal text-grey2 text-sm">
                    {anouncement?.description}
                </p>
            </div>
            <div className="card-product-info_user mb-4 flex items-center">
                <div className="w-[32px] h-[32px] flex justify-center items-center bg-brand1 rounded-[50%] mb-6 mr-[0.5rem] text-4xl text-whiteFixed font-medium">
                    {anouncement?.user.name.charAt(0)}
                </div>
                <span className="text-sm text-grey2 font-normal">
                    {anouncement?.user.name}
                </span>
            </div>
            <div className="card-product-info_car_data flex justify-between">
                <div>
                    <span className="py-1 px-2 bg-brand4 text-brand1 text-sm font-medium rounded mr-0.5">
                        {anouncement?.mileage} KM
                    </span>
                    <span className="py-1 px-2 bg-brand4 text-brand1 text-sm font-medium rounded">
                        {anouncement?.year}
                    </span>
                </div>
                <span className="font-lexend text-grey1 text-base font-medium">
                    R$ {anouncement?.price}
                </span>
            </div>
        </li>
    )
}
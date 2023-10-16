import car_product from "../../assets/car_product.png";
import avatar from "../../assets/avatar.png";

export const Card_product_advertiser = () => {

    return (
        <li className="w-[16rem] h-[25.875rem]">
            <div className="card-product-img bg-grey7 h-[9.5rem] mb-4">
                <img src={car_product} alt="Imagem do carro vinculado ao anúncio." className="max-h-[9.5rem]"></img>
            </div>
            <div className="card-product-info_car mb-4">
                <h2 className="title-01 mb-4 font-lexend text-base text-grey1 font-semibold">
                    Maserati - Ghibli
                </h2>
                <p className="font-normal text-grey2 text-sm">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...
                </p>
            </div>
            <div className="card-product-info_user mb-4 flex items-center">
                <img src={avatar} className="w-[32px] h-[32px] mr-[0.5rem]"></img>
                <span className="text-sm text-grey2 font-normal">
                    Fulano de tal
                </span>
            </div>
            <div className="card-product-info_car_data flex justify-between mb-4">
                <div>
                    <span className="py-1 px-2 bg-brand4 text-brand1 text-sm font-medium rounded mr-0.5">
                        0 KM
                    </span>
                    <span className="py-1 px-2 bg-brand4 text-brand1 text-sm font-medium rounded">
                        2019
                    </span>
                </div>
                <span className="font-lexend text-grey1 text-base font-medium">
                    R$ 00.000,00
                </span>
            </div>
            <div className="flex">
                <button type="button" className="h-[2.375rem] flex items-center justify-center border-2 border-grey1 py-3 px-5 mr-4 rounded">
                    Editar
                </button>
                <button type="button" className="h-[2.375rem] flex items-center justify-center border-2 border-grey1 py-3 px-5 rounded">
                    Ver detalhes
                </button>
            </div>
        </li>
    )
}
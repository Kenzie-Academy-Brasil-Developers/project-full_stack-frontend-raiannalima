import car_product from "../../assets/car_product.png";

export const Modal_image_expand = () => {
    return (
        <div className="modal-wrapper w-full h-full bg-modalWrapper fixed top-0 left-0 flex items-center justify-center">
            <div className="modal w-[32.5rem] h-[18.9375rem] bg-whiteFixed rounded-lg py-4 px-6">
                <div className="modal-header flex justify-between items-center mb-[2.5rem]">
                    <h2 className="font-lexend text-grey1 text-base font-medium">
                        Imagem do veículo
                    </h2>
                    <button type="button" className="text-[25px] font-lexend text-grey4">
                        x
                    </button>
                </div>
                <div className="modal-main flex justify-center items-center">
                    <img src={car_product} className="max-w-[29.125rem] max-h-[18.75rem]"></img>
                </div>
            </div>
        </div>
    )
}




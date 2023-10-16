export const Modal_register_sucess = () => {
    return (
        <div className="modal-wrapper w-full h-full bg-modalWrapper fixed top-0 left-0 flex items-center justify-center">
            <div className="modal w-[32.5rem] h-[17.9375rem] bg-whiteFixed rounded-lg py-4 px-6">
                <div className="modal-header flex justify-between mb-[2.5rem]">
                    <h2 className="font-lexend text-grey1 text-base font-medium">
                        Sucesso
                    </h2>
                    <button type="button" className="text-[25px] font-lexend text-grey4">
                        x
                    </button>
                </div>
                <div className="modal-main">
                    <h3 className="font-lexend text-grey1 text-base font-medium mb-[1.25rem]">
                        Sua conta foi criada com sucesso!
                    </h3>
                    <p className="text-grey2 text-base font-normal mb-[1.25rem]">
                        Agora você poderá ver seus negócios crescendo em grande escala
                    </p>
                    <button type="button" className="h-[3rem] bg-brand1 rounded font-semibold text-whiteFixed py-3 px-5">
                        Ir para o login
                    </button>
                </div>
            </div>
        </div>
    )
}




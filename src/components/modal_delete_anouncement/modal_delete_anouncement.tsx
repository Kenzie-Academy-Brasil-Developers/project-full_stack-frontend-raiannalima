export const Modal_delete_anouncement = () => {
    return (
        <div className="modal-wrapper w-full h-full bg-modalWrapper fixed top-0 left-0 flex items-center justify-center">
            <div className="modal w-[32.5rem] h-[18.9375rem] bg-whiteFixed rounded-lg py-4 px-6">
                <div className="modal-header flex justify-between mb-[2.5rem]">
                    <h2 className="font-lexend text-grey1 text-base font-medium">
                        Excluir anúncio
                    </h2>
                    <button type="button" className="text-[25px] font-lexend text-grey4">
                        x
                    </button>
                </div>
                <div className="modal-main">
                    <h3 className="font-lexend text-grey1 text-base font-medium mb-[1.25rem]">
                        Tem certeza de que deseja remover este anúncio?
                    </h3>
                    <p className="text-grey2 text-base font-normal mb-[1.25rem]">
                        Essa ação não pode ser desfeita. Isso excluirá permanentemente sua conta e removerá seus dados de nossos servidores.
                    </p>
                    <div className="flex justify-end">
                        <button type="button" className="w-[9.375rem] h-[3rem] bg-grey6 rounded font-semibold text-grey2 mr-[0.3125rem]">
                            Cancelar
                        </button>
                        <button type="button" className="w-[12.500rem] h-[3rem] bg-alert2 rounded font-semibold text-alert1 mr-[0.3125rem]">
                            Sim, excluir anúncio
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}




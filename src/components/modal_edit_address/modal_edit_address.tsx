export const Modal_edit_address = () => {
    return (
        <div className="modal-wrapper w-full h-full bg-modalWrapper fixed top-0 left-0 flex justify-center overflow-auto">
            <div className="modal w-[32.5rem] h-[36.625rem] bg-whiteFixed rounded-lg py-4 px-6 mt-[5rem] mb-[5rem]">
                <div className="modal-header flex justify-between mb-[1.0625rem]">
                    <h2 className="font-lexend text-grey1 text-base font-medium">
                        Editar endereço
                    </h2>
                    <button type="button" className="text-[25px] font-lexend text-grey4">
                        x
                    </button>
                </div>
                <div className="modal-main">
                    <form>
                        <fieldset className="flex flex-col">
                            <legend className="text-sm text-[#000] font-medium mb-6">
                                Informações de endereço
                            </legend>
                            <label className="text-sm text-grey1 font-medium mb-[0.3125rem]">
                                CEP
                            </label>
                            <input type="number" placeholder="89888.888" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mb-6"></input>
                            <div className="flex mb-6">
                                <div className="mr-5">
                                    <label className="text-sm text-grey1 font-medium">
                                        Estado
                                    </label>
                                    <input type="text" placeholder="Paraná" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mt-[0.3125rem]"></input>
                                </div>
                                <div>
                                    <label className="text-sm text-grey1 font-medium">
                                        Cidade
                                    </label>
                                    <input type="text" placeholder="Curitiba" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mt-[0.3125rem]"></input>
                                </div>
                            </div>
                            <label className="text-sm text-grey1 font-medium mb-[0.3125rem]">
                                Rua
                            </label>
                            <input type="text" placeholder="Rua do paraná" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mb-6"></input>
                            <div className="flex mb-6">
                                <div className="mr-5">
                                    <label className="text-sm text-grey1 font-medium">
                                        Número
                                    </label>
                                    <input type="number" placeholder="1029" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mt-[0.3125rem]"></input>
                                </div>
                                <div>
                                    <label className="text-sm text-grey1 font-medium">
                                        Complemento
                                    </label>
                                    <input type="text" placeholder="Apart 12" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mt-[0.3125rem]"></input>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
                <div className="modal-footer flex justify-end">
                    <button type="button" className="w-[9.6875rem] h-[3rem] bg-grey6 rounded font-semibold text-grey2 mr-[0.3125rem]">
                        Cancelar
                    </button>
                    <button type="button" className="w-[12.0625rem] h-[3rem] bg-brand1 rounded font-semibold text-whiteFixed">
                        Salvar alterações
                    </button>
                </div>
            </div>
        </div>
    )
}
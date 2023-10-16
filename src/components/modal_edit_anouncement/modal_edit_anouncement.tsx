export const Modal_edit_anouncement = () => {
    return (
        <div className="modal-wrapper w-full h-full bg-modalWrapper fixed top-0 left-0 flex justify-center overflow-auto">
            <div className="modal w-[32.5rem] h-[78.625rem] bg-whiteFixed rounded-lg py-4 px-6 mt-[5rem] mb-[5rem]">
                <div className="modal-header flex justify-between mb-[1.0625rem]">
                    <h2 className="font-lexend text-grey1 text-base font-medium">
                        Editar anúncio
                    </h2>
                    <button type="button" className="text-[25px] font-lexend text-grey4">
                        x
                    </button>
                </div>
                <div className="modal-main">
                    <form>
                        <fieldset className="flex flex-col">
                            <legend className="text-sm text-[#000] font-medium mb-6">
                                Informações do veículo
                            </legend>
                            <label className="text-sm text-grey1 font-medium mb-[0.3125rem]">
                                Marca
                            </label>
                            <input type="text" placeholder="Chevrolet" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mb-6"></input>
                            <label className="text-sm text-grey1 font-medium mb-[0.3125rem]">
                                Modelo
                            </label>
                            <input type="text" placeholder="Camaro ss 6.2 v8 16v" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mb-6"></input>
                            <div className="flex mb-6">
                                <div className="mr-5">
                                    <label className="text-sm text-grey1 font-medium">
                                        Ano
                                    </label>
                                    <input type="number" placeholder="2018" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mt-[0.3125rem]"></input>
                                </div>
                                <div>
                                    <label className="text-sm text-grey1 font-medium">
                                        Combustível
                                    </label>
                                    <input type="text" placeholder="Gasolina/Etanol" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mt-[0.3125rem]"></input>
                                </div>
                            </div>
                            <div className="flex mb-6">
                                <div className="mr-5">
                                    <label className="text-sm text-grey1 font-medium">
                                        Quilometragem
                                    </label>
                                    <input type="number" placeholder="30.000" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mt-[0.3125rem]"></input>
                                </div>
                                <div>
                                    <label className="text-sm text-grey1 font-medium">
                                        Cor
                                    </label>
                                    <input type="text" placeholder="Branco" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mt-[0.3125rem]"></input>
                                </div>
                            </div>
                            <div className="flex mb-6">
                                <div className="mr-5">
                                    <label className="text-sm text-grey1 font-medium">
                                        Preço tabela FIPE
                                    </label>
                                    <input type="text" placeholder="R$ 48.000,00" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mt-[0.3125rem]"></input>
                                </div>
                                <div>
                                    <label className="text-sm text-grey1 font-medium">
                                        Preço
                                    </label>
                                    <input type="text" placeholder="R$ 50.000,00" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mt-[0.3125rem]"></input>
                                </div>
                            </div>
                            <label className="text-sm text-grey1 font-medium mb-[0.3125rem]">
                                Descrição
                            </label>
                            <textarea className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mb-6 resize-none">

                            </textarea>
                            <div className="mb-6">
                                <label className="text-sm text-grey1 font-medium">
                                    Publicado
                                </label>
                                <div className="flex mt-[0.3125rem]">
                                    <button type="button" className="w-[50%] h-[3rem] rounded font-semibold border-2 border-grey4 text-grey0 mr-[0.3125rem]">
                                        Sim
                                    </button>
                                    <button type="button" className="w-[50%] h-[3rem] bg-brand1 rounded font-semibold text-whiteFixed">
                                        Não
                                    </button>
                                </div>
                            </div>
                            <label className="text-sm text-grey1 font-medium mb-[0.3125rem]">
                                Imagem da capa
                            </label>
                            <input type="url" placeholder="https://image.com" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mb-6"></input>
                            <label className="text-sm text-grey1 font-medium mb-[0.3125rem]">
                                1° Imagem da galeria
                            </label>
                            <input type="url" placeholder="https://image.com" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mb-6"></input>
                            <label className="text-sm text-grey1 font-medium mb-[0.3125rem]">
                                2° Imagem da galeria
                            </label>
                            <input type="url" placeholder="https://image.com" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mb-6"></input>
                            <button type="button" className="w-[70%] py-3 px-5 bg-brand4 text-brand1 text-sm font-medium rounded mb-6">
                                Adicionar campo para imagem da galeria
                            </button>
                        </fieldset>
                    </form>
                </div>
                <div className="modal-footer flex justify-end">
                    <button type="button" className="w-[9.6875rem] h-[3rem] bg-grey6 rounded font-semibold text-grey2 mr-[0.3125rem]">
                        Cancelar
                    </button>
                    <button type="button" className="w-[12.0625rem] h-[3rem] bg-brand1 rounded font-semibold text-whiteFixed">
                        Criar anúncio
                    </button>
                </div>
            </div>
        </div>
    )
}
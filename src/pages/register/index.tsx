import { Footer } from "../../components/footer/footer"
import { Header_home } from "../../components/header_home/header_home"

export const Register = () => {
    return (
        <>
            <Header_home>
            </Header_home>
            <main className="w-full flex justify-center items-center bg-grey8">
                <div className="bg-grey10 w-[34.625rem] rounded mt-[2.875rem] mb-[2.875rem]">
                    <form className="w-full h-full py-11 px-12 flex justify-center items-center">
                        <fieldset className="w-full flex flex-col">
                            <legend className="font-lexend text-2xl font-medium mb-8">
                                Cadastro
                            </legend>
                            <h3 className="text-sm font-medium text-[#000000] mb-6">
                                Informações pessoais
                            </h3>
                            <label className="text-sm text-grey1 font-medium mb-6">
                                Nome
                            </label>
                            <input type="text" placeholder="Ex: Samuel Leão" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mb-6"></input>
                            <label className="text-sm text-grey1 font-medium mb-6">
                                Email
                            </label>
                            <input type="email" placeholder="Ex: samuel@kenzie.com.br" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mb-6"></input>
                            <label className="text-sm text-grey1 font-medium mb-6">
                                CPF
                            </label>
                            <input type="text" placeholder="000.000.000-00" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mb-6"></input>
                            <label className="text-sm text-grey1 font-medium mb-6">
                                Celular
                            </label>
                            <input type="tel" placeholder="(DDD) 90000-0000" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mb-6"></input>
                            <label className="text-sm text-grey1 font-medium mb-6">
                                Data de nascimento
                            </label>
                            <input type="date" placeholder="00/00/00" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mb-6"></input>
                            <label className="text-sm text-grey1 font-medium mb-6">
                                Descrição
                            </label>
                            <textarea placeholder="Digitar descrição" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mb-6"></textarea>
                            <h3 className="text-sm font-medium text-[#000000] mb-6">
                                Informações de endereço
                            </h3>
                            <label className="text-sm text-grey1 font-medium mb-6">
                                CEP
                            </label>
                            <input type="text" placeholder="00000.000" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mb-6"></input>
                            <div className="flex">
                                <div className="mr-1 flex flex-col">
                                    <label className="text-sm text-grey1 font-medium mb-6">
                                        Estado
                                    </label>
                                    <input type="text" placeholder="Digitar Estado" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mb-6"></input>
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-sm text-grey1 font-medium mb-6">
                                        Cidade
                                    </label>
                                    <input type="text" placeholder="Digitar cidade" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mb-6"></input>
                                </div>
                            </div>
                            <label className="text-sm text-grey1 font-medium mb-6">
                                Rua
                            </label>
                            <input type="text" placeholder="Digitar rua" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mb-6"></input>
                            <div className="flex">
                                <div className="mr-1 flex flex-col">
                                    <label className="text-sm text-grey1 font-medium mb-6">
                                        Número
                                    </label>
                                    <input type="number" placeholder="Digitar número" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mb-6"></input>
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-sm text-grey1 font-medium mb-6">
                                        Complemento
                                    </label>
                                    <input type="text" placeholder="Ex: apart 307" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mb-6"></input>
                                </div>
                            </div>
                            <label className="text-sm text-grey1 font-medium mb-6">
                                Tipo de conta
                            </label>
                            <div className="mb-6">
                                <button type="button" className="h-[3rem] w-[49%] bg-brand1 rounded font-semibold text-whiteFixed mr-1">
                                    Comprador
                                </button>
                                <button type="button" className="h-[3rem] w-[49%] rounded font-semibold border-[2px] border-grey4 text-grey0">
                                    Anunciante
                                </button>
                            </div>
                            <label className="text-sm text-grey1 font-medium mb-6">
                                Senha
                            </label>
                            <input type="password" placeholder="Digitar senha" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mb-6"></input>
                            <label className="text-sm text-grey1 font-medium mb-6">
                                Confirmar senha
                            </label>
                            <input type="password" placeholder="Digitar senha" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mb-6"></input>
                            <button type="button" className="h-[3rem] bg-brand1 rounded font-semibold text-whiteFixed">
                                Finalizar cadastro
                            </button>
                        </fieldset>
                    </form>
                </div>
            </main>
            <Footer>
            </Footer>
        </>
    )
}
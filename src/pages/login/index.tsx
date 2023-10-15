import { Footer } from "../../components/footer/footer"
import { Header_home } from "../../components/header_home/header_home"

export const Login = () => {
    return (
        <>
            <Header_home></Header_home>
            <main className="w-full h-screen flex justify-center items-center bg-grey8">
                <div className="bg-grey10 w-[25.625rem] h-[36.875rem] rounded">
                    <form className="w-full h-full py-11 px-12 flex justify-center items-center">
                        <fieldset className="w-full flex flex-col">
                            <legend className="font-lexend text-2xl font-medium mb-8">
                                Login
                            </legend>
                            <label className="text-sm text-grey1 font-medium mb-2.5">
                                Email
                            </label>
                            <input type="email" placeholder="Digitar email" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mb-[1.5rem]"></input>
                            <label className="text-sm text-grey1 font-medium mb-2.5">
                                Senha
                            </label>
                            <input type="password" placeholder="Digitar senha" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mb-[0.5625rem]"></input>
                            <span className="text-sm font-medium text-grey2 self-end mb-[1.3125rem]">
                                Esqueci minha senha
                            </span>
                            <button type="button" className="h-[3rem] bg-brand1 rounded font-semibold text-whiteFixed">
                                Entrar
                            </button>
                            <span className="my-6 text-sm font-normal text-grey2 self-center">
                                Ainda não possui conta?
                            </span>
                            <button type="button" className="h-[3rem] rounded font-semibold border-[2px] border-grey4 text-grey0">
                                Cadastrar
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
import { Footer } from "../../components/footer/footer"
import { Header_home } from "../../components/header_home/header_home"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "../../schemas/login_schema";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { Link } from "react-router-dom"

export const Login = () => {
    const { userLogin } = useContext(UserContext);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginFormSchema)
    })

    const submit = (formData: any) => {
        userLogin(formData)
    }

    return (
        <>
            <Header_home />
            <main className="w-full h-screen flex justify-center items-center bg-grey8">
                <div className="bg-grey10 w-[25.625rem] h-[36.875rem] rounded">
                    <form onSubmit={handleSubmit(submit)} className="w-full h-full py-11 px-12 flex justify-center items-center">
                        <fieldset className="w-full flex flex-col">
                            <legend className="font-lexend text-2xl font-medium mb-8">
                                Login
                            </legend>
                            <label className="text-sm text-grey1 font-medium mb-2.5">
                                Email
                            </label>
                            <input {...register("email")} type="email" placeholder="Digitar email" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mb-[1.5rem]"></input>
                            {errors.email && <span className="text-sm text-alert1 mb-6">{errors.email.message}</span>}
                            <label className="text-sm text-grey1 font-medium mb-2.5">
                                Senha
                            </label>
                            <input {...register("password")} type="password" placeholder="Digitar senha" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mb-[0.5625rem]"></input>
                            {errors.password && <span className="text-sm text-alert1 mb-6">{errors.password.message}</span>}
                            <span className="text-sm font-medium text-grey2 self-end mb-[1.3125rem]">
                                Esqueci minha senha
                            </span>
                            <button type="submit" className="h-[3rem] bg-brand1 rounded font-semibold text-whiteFixed">
                                Entrar
                            </button>
                            <Link to="/user" className="my-6 text-sm font-normal text-grey2 self-center">
                                Ainda não possui conta?
                            </Link>
                            <Link to="/user" type="button" className="h-[3rem] flex justify-center items-center rounded font-semibold border-[2px] border-grey4 text-grey0">
                                Cadastrar
                            </Link>
                        </fieldset>
                    </form>
                </div>
            </main>
            <Footer />
        </>
    )
}
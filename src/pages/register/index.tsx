/* eslint-disable @typescript-eslint/no-explicit-any */
import { Footer } from "../../components/footer/footer"
import { Header_home } from "../../components/header_home/header_home"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "../../schemas/register_schema";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export const Register = () => {
    const { userRegister } = useContext(UserContext);
    const [advertiser, setAdvertiser] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(registerFormSchema)
    })

    const submit = (formData: any) => {
        if (advertiser) {
            formData.typeAccount = 'Anunciante'
        } else {
            formData.typeAccount = 'Comprador'
        }

        const number = parseFloat(formData.number);
        formData.number = number

        userRegister(formData)
    }

    return (
        <>
            <Header_home />
            <main className="w-full flex justify-center items-center bg-grey8">
                <div className="bg-grey10 w-[34.625rem] rounded mt-[2.875rem] mb-[2.875rem]">
                    <form onSubmit={handleSubmit(submit)} className="w-full h-full py-11 px-12 flex justify-center items-center" noValidate>
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
                            <input {...register("name")} type="text" placeholder="Ex: Samuel Leão" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mb-6"></input>
                            {errors.name && <span className="text-sm text-alert1 mb-6">{errors.name.message}</span>}
                            <label className="text-sm text-grey1 font-medium mb-6">
                                Email
                            </label>
                            <input {...register("email")} type="email" placeholder="Ex: samuel@kenzie.com.br" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mb-6"></input>
                            {errors.email && <span className="text-sm text-alert1 mb-6">{errors.email.message}</span>}
                            <label className="text-sm text-grey1 font-medium mb-6">
                                CPF
                            </label>
                            <input {...register("cpf")} type="text" placeholder="000.000.000-00" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mb-6"></input>
                            {errors.cpf && <span className="text-sm text-alert1 mb-6">{errors.cpf.message}</span>}
                            <label className="text-sm text-grey1 font-medium mb-6">
                                Celular
                            </label>
                            <input {...register("tel")} type="tel" placeholder="(DDD) 90000-0000" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mb-6"></input>
                            {errors.tel && <span className="text-sm text-alert1 mb-6">{errors.tel.message}</span>}
                            <label className="text-sm text-grey1 font-medium mb-6">
                                Data de nascimento
                            </label>
                            <input {...register("birth")} type="date" placeholder="00/00/00" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mb-6"></input>
                            {errors.birth && <span className="text-sm text-alert1 mb-6">{errors.birth.message}</span>}
                            <label className="text-sm text-grey1 font-medium mb-6">
                                Descrição
                            </label>
                            <textarea {...register("description")} placeholder="Digitar descrição" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mb-6"></textarea>
                            <h3 className="text-sm font-medium text-[#000000] mb-6">
                                Informações de endereço
                            </h3>
                            <label className="text-sm text-grey1 font-medium mb-6">
                                CEP
                            </label>
                            <input {...register("cep")} type="text" placeholder="00000.000" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mb-6"></input>
                            {errors.cep && <span className="text-sm text-alert1 mb-6">{errors.cep.message}</span>}
                            <div className="flex">
                                <div className="mr-1 flex flex-col">
                                    <label className="text-sm text-grey1 font-medium mb-6">
                                        Estado
                                    </label>
                                    <input {...register("state")} type="text" placeholder="Digitar Estado" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mb-6"></input>
                                    {errors.state && <span className="text-sm text-alert1 mb-6">{errors.state.message}</span>}
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-sm text-grey1 font-medium mb-6">
                                        Cidade
                                    </label>
                                    <input {...register("city")} type="text" placeholder="Digitar cidade" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mb-6"></input>
                                    {errors.city && <span className="text-sm text-alert1 mb-6">{errors.city.message}</span>}
                                </div>
                            </div>
                            <label className="text-sm text-grey1 font-medium mb-6">
                                Rua
                            </label>
                            <input {...register("street")} type="text" placeholder="Digitar rua" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mb-6"></input>
                            <div className="flex">
                                <div className="mr-1 flex flex-col">
                                    <label className="text-sm text-grey1 font-medium mb-6">
                                        Número
                                    </label>
                                    <input {...register("number")} type="number" placeholder="Digitar número" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mb-6"></input>
                                    {errors.number && <span className="text-sm text-alert1 mb-6">{errors.number.message}</span>}
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-sm text-grey1 font-medium mb-6">
                                        Complemento
                                    </label>
                                    <input {...register("complement")} type="text" placeholder="Ex: apart 307" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mb-6"></input>
                                </div>
                            </div>
                            <label className="text-sm text-grey1 font-medium mb-6">
                                Tipo de conta
                            </label>
                            <div className="mb-6">
                                <button type="button" onClick={() => setAdvertiser(false)} className={!advertiser
                                    ? "h-[3rem] w-[49%] bg-brand1 rounded font-semibold text-whiteFixed mr-1"
                                    : "h-[3rem] w-[49%] rounded font-semibold border-[2px] border-grey4 text-grey0"}>
                                    Comprador
                                </button>
                                <button type="button" onClick={() => setAdvertiser(true)} className={advertiser
                                    ? "h-[3rem] w-[49%] bg-brand1 rounded font-semibold text-whiteFixed mr-1"
                                    : "h-[3rem] w-[49%] rounded font-semibold border-[2px] border-grey4 text-grey0"}>
                                    Anunciante
                                </button>
                            </div>
                            <label className="text-sm text-grey1 font-medium mb-6">
                                Senha
                            </label>
                            <input {...register("password")} type="password" placeholder="Digitar senha" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mb-6"></input>
                            {errors.password && <span className="text-sm text-alert1 mb-6">{errors.password.message}</span>}
                            <label className="text-sm text-grey1 font-medium mb-6">
                                Confirmar senha
                            </label>
                            <input {...register("confirm")} type="password" placeholder="Digitar senha" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mb-6"></input>
                            {errors.confirm && <span className="text-sm text-alert1 mb-6">{errors.confirm.message}</span>}
                            <button type="submit" className="h-[3rem] bg-brand1 rounded font-semibold text-whiteFixed">
                                Finalizar cadastro
                            </button>
                        </fieldset>
                    </form>
                </div>
            </main >
            <Footer />
        </>
    )
}
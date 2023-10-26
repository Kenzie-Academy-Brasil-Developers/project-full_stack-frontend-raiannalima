import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { editFormSchema } from "../../schemas/register_schema";
import { UserContext } from "../../providers/UserContext";
import { useContext } from "react";

export const Modal_edit_perfil = () => {
    const { closeModalEditUser, userEdit, user } = useContext(UserContext);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(editFormSchema)
    })

    const submit = (formData: any) => {
        const number = parseFloat(formData.number);
        console.log(formData)
        formData.number = number
        userEdit(formData)
    }

    return (
        <div className="modal-wrapper z-[3000] w-full h-full bg-modalWrapper fixed top-0 left-0 flex justify-center overflow-auto">
            <div className="modal w-[32.5rem] h-[50.625rem] bg-whiteFixed rounded-lg py-4 px-6 mt-[5rem] mb-[5rem]">
                <div className="modal-header flex justify-between mb-[1.0625rem]">
                    <h2 className="font-lexend text-grey1 text-base font-medium">
                        Editar perfil
                    </h2>
                    <button onClick={closeModalEditUser} type="button" className="text-[25px] font-lexend text-grey4">
                        x
                    </button>
                </div>
                <div className="modal-main">
                    <form onSubmit={handleSubmit(submit)}>
                        <fieldset className="flex flex-col">
                            <legend className="text-sm text-[#000] font-medium mb-6">
                                Informações pessoais
                            </legend>
                            <label className="text-sm text-grey1 font-medium mb-[0.3125rem]">
                                Nome
                            </label>
                            <input {...register("name")} defaultValue={user?.name} type="text" placeholder="Samuel Leão" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mb-6"></input>
                            <label className="text-sm text-grey1 font-medium mb-[0.3125rem]">
                                Email
                            </label>
                            <input {...register("email")} defaultValue={user?.email} type="text" placeholder="samuel@kenzie.com.br" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mb-6"></input>
                            <label className="text-sm text-grey1 font-medium mb-[0.3125rem]">
                                CPF
                            </label>
                            <input {...register("cpf")} defaultValue={user?.cpf} type="number" placeholder="900.880.090-00" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mb-6"></input>
                            <label className="text-sm text-grey1 font-medium mb-[0.3125rem]">
                                Celular
                            </label>
                            <input {...register("tel")} defaultValue={user?.tel} type="number" placeholder="(084) 90909-9092" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mb-6"></input>
                            <label className="text-sm text-grey1 font-medium mb-[0.3125rem]">
                                Data de nascimento
                            </label>
                            <input {...register("birth")} defaultValue={user?.birth} type="date" placeholder="09/12/99" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mb-6"></input>
                            <label className="text-sm text-grey1 font-medium mb-[0.3125rem]">
                                Descrição
                            </label>
                            <textarea {...register("description")} className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mb-6 resize-none">

                            </textarea>
                        </fieldset>
                        <div className="modal-footer flex">
                            <button onClick={closeModalEditUser} type="button" className="w-[9.375rem] h-[3rem] bg-grey6 rounded font-semibold text-grey2 mr-[0.3125rem]">
                                Cancelar
                            </button>
                            <button type="button" className="w-[9.375rem] h-[3rem] bg-alert2 rounded font-semibold text-alert1 mr-[0.3125rem]">
                                Excluir Perfil
                            </button>
                            <button type="submit" className="w-[9.375rem] h-[3rem] bg-brand1 rounded font-semibold text-whiteFixed">
                                Salvar alterações
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
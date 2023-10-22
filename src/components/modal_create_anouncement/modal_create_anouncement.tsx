/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import { anouncementFormSchema } from "../../schemas/anouncement_schema";
import { useForm } from "react-hook-form";
import { useState } from "react";
import trash from "../../assets/trash.svg";

export const Modal_create_anouncement = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(anouncementFormSchema),
    });

    const submit = (formData: any) => {
        const year = parseFloat(formData.year);
        formData.year = year;

        const mileage = parseFloat(formData.mileage);
        formData.mileage = mileage;

        const price_fipe = parseFloat(formData.price_fipe);
        formData.price_fipe = price_fipe;

        const price = parseFloat(formData.price);
        formData.price = price;

        const formDataToSend = {
            ...formData,
            images: additionalImages.map((_, index) => formData.images[index]),
        };

        console.log(formDataToSend);
    };

    const [additionalImages, setAdditionalImages] = useState<string[]>([]);

    const addImageField = () => {
        setAdditionalImages([...additionalImages, ""]);
    };

    const removeImageField = (index: number) => {
        const updatedImages = [...additionalImages];
        updatedImages.splice(index, 1);
        setAdditionalImages(updatedImages);
    };

    return (
        <div className="modal-wrapper w-full h-full bg-modalWrapper fixed top-0 left-0 flex justify-center overflow-auto">
            <div className="modal w-[32.5rem] h-[84.625rem] bg-whiteFixed rounded-lg py-4 px-6 mt-[5rem] mb-[5rem]">
                <div className="modal-header flex justify-between mb-[1.0625rem]">
                    <h2 className="font-lexend text-grey1 text-base font-medium">
                        Criar anúncio
                    </h2>
                    <button type="button" className="text-[25px] font-lexend text-grey4">
                        x
                    </button>
                </div>
                <div className="modal-main">
                    <form onSubmit={handleSubmit(submit)}>
                        <fieldset className="flex flex-col">
                            <legend className="text-sm text-[#000] font-medium mb-6">
                                Informações do veículo
                            </legend>
                            <label className="text-sm text-grey1 font-medium mb-[0.3125rem]">
                                Marca
                            </label>
                            <input {...register("brand")} type="text" placeholder="Chevrolet" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mb-6"></input>
                            {errors.brand && <span className="text-sm text-alert1 mb-6">{errors.brand.message}</span>}
                            <label className="text-sm text-grey1 font-medium mb-[0.3125rem]">
                                Modelo
                            </label>
                            <input {...register("model")} type="text" placeholder="Camaro ss 6.2 v8 16v" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mb-6"></input>
                            {errors.model && <span className="text-sm text-alert1 mb-6">{errors.model.message}</span>}
                            <div className="flex mb-6">
                                <div className="mr-5">
                                    <label className="text-sm text-grey1 font-medium">
                                        Ano
                                    </label>
                                    <input {...register("year")} type="number" placeholder="2018" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mt-[0.3125rem]"></input>
                                    {errors.year && <span className="text-sm text-alert1 mb-6">{errors.year.message}</span>}
                                </div>
                                <div>
                                    <label className="text-sm text-grey1 font-medium">
                                        Combustível
                                    </label>
                                    <input {...register("fuel")} type="text" placeholder="Gasolina/Etanol" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mt-[0.3125rem]"></input>
                                    {errors.fuel && <span className="text-sm text-alert1 mb-6">{errors.fuel.message}</span>}
                                </div>
                            </div>
                            <div className="flex mb-6">
                                <div className="mr-5">
                                    <label className="text-sm text-grey1 font-medium">
                                        Quilometragem
                                    </label>
                                    <input {...register("mileage")} type="number" placeholder="30.000" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mt-[0.3125rem]"></input>
                                    {errors.mileage && <span className="text-sm text-alert1 mb-6">{errors.mileage.message}</span>}
                                </div>
                                <div>
                                    <label className="text-sm text-grey1 font-medium">
                                        Cor
                                    </label>
                                    <input {...register("color")} type="text" placeholder="Branco" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mt-[0.3125rem]"></input>
                                    {errors.color && <span className="text-sm text-alert1 mb-6">{errors.color.message}</span>}
                                </div>
                            </div>
                            <div className="flex mb-6">
                                <div className="mr-5">
                                    <label className="text-sm text-grey1 font-medium">
                                        Preço tabela FIPE
                                    </label>
                                    <input {...register("price_fipe")} type="text" placeholder="R$ 48.000,00" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mt-[0.3125rem]"></input>
                                    {errors.price_fipe && <span className="text-sm text-alert1 mb-6">{errors.price_fipe.message}</span>}
                                </div>
                                <div>
                                    <label className="text-sm text-grey1 font-medium">
                                        Preço
                                    </label>
                                    <input {...register("price")} type="text" placeholder="R$ 50.000,00" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mt-[0.3125rem]"></input>
                                    {errors.price && <span className="text-sm text-alert1 mb-6">{errors.price.message}</span>}
                                </div>
                            </div>
                            <label className="text-sm text-grey1 font-medium mb-[0.3125rem]">
                                Descrição
                            </label>
                            <textarea {...register("description")} className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mb-6 resize-none">

                            </textarea>
                            <label className="text-sm text-grey1 font-medium mb-[0.3125rem]">
                                Imagem da capa
                            </label>
                            <input {...register("cover_image")} type="url" placeholder="https://image.com" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mb-6"></input>
                            {errors.cover_image && <span className="text-sm text-alert1 mb-6">{errors.cover_image.message}</span>}
                            <label className="text-sm text-grey1 font-medium mb-[0.3125rem]">
                                1° Imagem da galeria
                            </label>
                            <input {...register("image_url_1")} type="url" placeholder="https://image.com" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mb-6"></input>
                            {errors.image_url_1 && <span className="text-sm text-alert1 mb-6">{errors.image_url_1.message}</span>}
                            <label className="text-sm text-grey1 font-medium mb-[0.3125rem]">
                                2° Imagem da galeria
                            </label>
                            <input {...register("image_url_2")} type="url" placeholder="https://image.com" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mb-6"></input>
                            {errors.image_url_2 && <span className="text-sm text-alert1 mb-6">{errors.image_url_2.message}</span>}
                            {additionalImages.map((_image, index) => (
                                <div key={index}>
                                    <label className="text-sm text-grey1 font-medium mb-[0.3125rem]">{`${index + 1
                                        }° Imagem da galeria`}</label>
                                    <input
                                        {...register(`images[${index}].url`)}
                                        type="url"
                                        placeholder={`https://image.com/${index + 1}`}
                                        className="w-[90%] border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mb-6 mr-[27px]"
                                    />
                                    {index === additionalImages.length - 1 && (
                                        <button
                                            type="button"
                                            onClick={() => removeImageField(index)}
                                        >
                                            <img src={trash} className="text-[#4529E6] w-[20px] h-[20px]"></img>
                                        </button>
                                    )}
                                </div>
                            ))}
                            <button
                                type="button"
                                className="w-[70%] py-3 px-5 bg-brand4 text-brand1 text-sm font-medium rounded mb-6"
                                onClick={addImageField}
                            >
                                Adicionar campo para imagem da galeria
                            </button>
                        </fieldset>
                        <div className="modal-footer flex justify-end">
                            <button type="button" className="w-[9.6875rem] h-[3rem] bg-grey6 rounded font-semibold text-grey2 mr-[0.3125rem]">
                                Cancelar
                            </button>
                            <button type="submit" className="w-[12.0625rem] h-[3rem] bg-brand1 rounded font-semibold text-whiteFixed">
                                Criar anúncio
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}






{/* <input {...register("images")} type="url" placeholder="https://image.com" className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mb-6"></input>
                        {errors.image_url && <span className="text-sm text-alert1 mb-6">{errors.image_url.message}</span>}
                        <button type="button" className="w-[70%] py-3 px-5 bg-brand4 text-brand1 text-sm font-medium rounded mb-6">
                            Adicionar campo para imagem da galeria
                        </button> */}
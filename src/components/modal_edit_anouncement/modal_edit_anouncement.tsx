/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AnouncementContext } from "../../providers/AnouncementContext";
import { useFieldArray } from "react-hook-form";
import { anouncementFormSchema } from "../../schemas/anouncement_schema";
import trash from "../../assets/trash.svg";

export const Modal_edit_anouncement = () => {
    const { closeModalEdit, removeAnouncement, currentAnouncement, editAnouncement } =
        useContext(AnouncementContext);
    const [published, setPublished] = useState(true);

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(anouncementFormSchema),
    });

    const { fields, append, remove } = useFieldArray({ control, name: "images" });

    const submit = (formData: any) => {
        console.log(published);
        const year = parseFloat(formData.year);
        formData.year = year;

        const mileage = parseFloat(formData.mileage);
        formData.mileage = mileage;

        const price_fipe = parseFloat(formData.price_fipe);
        formData.price_fipe = price_fipe;

        const price = parseFloat(formData.price);
        formData.price = price;

        const { images, image_url_1, image_url_2, ...rest } = formData;

        let newImages = [image_url_1, image_url_2];

        const pickImages =
            images?.map((image) => {
                return image.image_url!;
            }) || null;

        if (pickImages) {
            newImages = [...newImages, ...pickImages];
        }

        const arrayFinalImages = newImages.map((image) => {
            return { image_url: image };
        });

        const formDataFinal = { ...rest, images: arrayFinalImages };
        console.log(formDataFinal);
        // createAnouncement(formDataFinal);

        editAnouncement(currentAnouncement!.id, formDataFinal)
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
            <div className="modal w-[32.5rem] h-[78.625rem] bg-whiteFixed rounded-lg py-4 px-6 mt-[5rem] mb-[5rem]">
                <div className="modal-header flex justify-between mb-[1.0625rem]">
                    <h2 className="font-lexend text-grey1 text-base font-medium">
                        Editar anúncio
                    </h2>
                    <button
                        onClick={closeModalEdit}
                        type="button"
                        className="text-[25px] font-lexend text-grey4"
                    >
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
                            <input
                                {...register("brand")}
                                defaultValue={currentAnouncement?.brand}
                                type="text"
                                placeholder="Chevrolet"
                                className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mb-6"
                            ></input>
                            <label className="text-sm text-grey1 font-medium mb-[0.3125rem]">
                                Modelo
                            </label>
                            <input
                                {...register("model")}
                                defaultValue={currentAnouncement?.model}
                                type="text"
                                placeholder="Camaro ss 6.2 v8 16v"
                                className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mb-6"
                            ></input>
                            <div className="flex mb-6">
                                <div className="mr-5">
                                    <label className="text-sm text-grey1 font-medium">Ano</label>
                                    <input
                                        {...register("year")}
                                        defaultValue={currentAnouncement?.year}
                                        type="number"
                                        placeholder="2018"
                                        className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mt-[0.3125rem]"
                                    ></input>
                                </div>
                                <div>
                                    <label className="text-sm text-grey1 font-medium">
                                        Combustível
                                    </label>
                                    <input
                                        {...register("fuel")}
                                        defaultValue={currentAnouncement?.fuel}
                                        type="text"
                                        placeholder="Gasolina/Etanol"
                                        className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mt-[0.3125rem]"
                                    ></input>
                                </div>
                            </div>
                            <div className="flex mb-6">
                                <div className="mr-5">
                                    <label className="text-sm text-grey1 font-medium">
                                        Quilometragem
                                    </label>
                                    <input
                                        {...register("mileage")}
                                        defaultValue={currentAnouncement?.mileage}
                                        type="number"
                                        placeholder="30.000"
                                        className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mt-[0.3125rem]"
                                    ></input>
                                </div>
                                <div>
                                    <label className="text-sm text-grey1 font-medium">Cor</label>
                                    <input
                                        {...register("color")}
                                        defaultValue={currentAnouncement?.color}
                                        type="text"
                                        placeholder="Branco"
                                        className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mt-[0.3125rem]"
                                    ></input>
                                </div>
                            </div>
                            <div className="flex mb-6">
                                <div className="mr-5">
                                    <label className="text-sm text-grey1 font-medium">
                                        Preço tabela FIPE
                                    </label>
                                    <input
                                        {...register("price_fipe")}
                                        defaultValue={currentAnouncement?.price_fipe}
                                        type="text"
                                        placeholder="R$ 48.000,00"
                                        className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mt-[0.3125rem]"
                                    ></input>
                                </div>
                                <div>
                                    <label className="text-sm text-grey1 font-medium">
                                        Preço
                                    </label>
                                    <input
                                        {...register("price")}
                                        defaultValue={currentAnouncement?.price}
                                        type="text"
                                        placeholder="R$ 50.000,00"
                                        className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mt-[0.3125rem]"
                                    ></input>
                                </div>
                            </div>
                            <label className="text-sm text-grey1 font-medium mb-[0.3125rem]">
                                Descrição
                            </label>
                            <textarea
                                {...register("description")}
                                className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mb-6 resize-none"
                            ></textarea>
                            <div className="mb-6">
                                <label className="text-sm text-grey1 font-medium">
                                    Publicado
                                </label>
                                <div className="flex mt-[0.3125rem]">
                                    <button
                                        type="button"
                                        // className="w-[50%] h-[3rem] rounded font-semibold border-2 border-grey4 text-grey0 mr-[0.3125rem]"
                                        className={
                                            published!
                                                ? "h-[3rem] w-[49%] bg-brand1 rounded font-semibold text-whiteFixed mr-1"
                                                : "h-[3rem] w-[49%] rounded font-semibold border-[2px] border-grey4 text-grey0"
                                        }
                                        onClick={() => setPublished(true)}
                                    >
                                        Sim
                                    </button>
                                    <button
                                        type="button"
                                        // className="w-[50%] h-[3rem] bg-brand1 rounded font-semibold text-whiteFixed"
                                        className={
                                            published
                                                ? "h-[3rem] w-[49%] rounded font-semibold border-[2px] border-grey4 text-grey0"
                                                : "h-[3rem] w-[49%] bg-brand1 rounded font-semibold text-whiteFixed mr-1"
                                        }
                                        onClick={() => setPublished(false)}
                                    >
                                        Não
                                    </button>
                                </div>
                            </div>
                            <label className="text-sm text-grey1 font-medium mb-[0.3125rem]">
                                Imagem da capa
                            </label>
                            <input
                                {...register("cover_image")}
                                defaultValue={currentAnouncement?.cover_image}
                                type="url"
                                placeholder="https://image.com"
                                className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mb-6"
                            ></input>
                            <label className="text-sm text-grey1 font-medium mb-[0.3125rem]">
                                1° Imagem da galeria
                            </label>
                            <input
                                {...register("image_url_1")}
                                type="url"
                                placeholder="https://image.com"
                                className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mb-6"
                            ></input>
                            <label className="text-sm text-grey1 font-medium mb-[0.3125rem]">
                                2° Imagem da galeria
                            </label>
                            <input
                                {...register("image_url_2")}
                                type="url"
                                placeholder="https://image.com"
                                className="border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mb-6"
                            ></input>
                            {fields.map((_image, index) => (
                                <div key={index}>
                                    <label className="text-sm text-grey1 font-medium mb-[0.3125rem]">{`${index + 3
                                        }° Imagem da galeria`}</label>
                                    <input
                                        {...register(`images[${index}].image_url`)}
                                        type="url"
                                        placeholder={`https://image.com/${index + 3}`}
                                        className="w-[90%] border-[2px] border-grey7 bg-transparent rounded px-4 py-2.5 mb-6 mr-[27px]"
                                    />
                                    {index === fields.length - 1 && (
                                        <button type="button" onClick={() => remove(index)}>
                                            <img
                                                src={trash}
                                                className="text-[#4529E6] w-[20px] h-[20px]"
                                            ></img>
                                        </button>
                                    )}
                                </div>
                            ))}
                            <button
                                type="button"
                                className="w-[70%] py-3 px-5 bg-brand4 text-brand1 text-sm font-medium rounded mb-6"
                                onClick={() => append({ image_url: "" })}
                            >
                                Adicionar campo para imagem da galeria
                            </button>
                        </fieldset>
                        <div className="modal-footer flex justify-end">
                            <button
                                type="button"
                                className="w-[9.375rem] h-[3rem] bg-grey6 rounded font-semibold text-grey2 mr-[0.3125rem]"
                                onClick={closeModalEdit}
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={() => removeAnouncement(currentAnouncement!.id)}
                                type="button"
                                className="w-[9.375rem] h-[3rem] bg-alert2 rounded font-semibold text-alert1 mr-[0.3125rem]"
                            >
                                Excluir anúncio
                            </button>
                            <button
                                type="submit"
                                className="w-[9.375rem] h-[3rem] bg-brand1 rounded font-semibold text-whiteFixed"
                            >
                                Salvar alterações
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
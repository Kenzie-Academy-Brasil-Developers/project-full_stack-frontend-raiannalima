import { z } from "zod";

const anouncementSchema = z.object({
    brand: z.string().max(50).nonempty("A marca é obrigatória."),
    model: z.string().max(50).nonempty("O modelo é obrigatório."),
    year: z.number(),
    fuel: z.string().max(150).nonempty("O combustível é obrigatório."),
    mileage: z.number(),
    color: z.string().max(50).nonempty("A cor é obrigatória."),
    price_fipe: z.number(),
    price: z.number(),
    description: z.string(),
    cover_image: z.string().nonempty("A imagem é obrigatória."),
    images: z.array(z.object({ image_url: z.string().nonempty("A imagem é obrigatória.") }))
})

const anouncementFormSchema = z.object({
    brand: z.string().max(50).nonempty("A marca é obrigatória."),
    model: z.string().max(50).nonempty("O modelo é obrigatório."),
    year: z.string().nonempty("O ano é obrigatório."),
    fuel: z.string().max(150).nonempty("O combustível é obrigatório."),
    mileage: z.string().nonempty("A quilometragem é obrigatória."),
    color: z.string().max(50).nonempty("A cor é obrigatória."),
    price_fipe: z.string().nonempty("O preço da tabela fipe é obrigatório."),
    price: z.string().nonempty("O preço é obrigatório."),
    description: z.string().optional(),
    cover_image: z.string().nonempty("A imagem é obrigatória."),
    image_url_1: z.string().nonempty("Campo obrigatório.").url("O dado necessita ser uma url."),
    image_url_2: z.string().nonempty("Campo obrigatório.").url("O dado necessita ser uma url."),
    images: z.object({ image_url: z.string().url("O dado necessita ser uma url.").optional(), }).array()
})

export type TAnouncementFormData = z.infer<typeof anouncementSchema>;

export { anouncementSchema, anouncementFormSchema }
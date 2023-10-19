import { z } from "zod";

const registerSchema = z.object({
    name: z.string().max(50).nonempty("O nome é obrigatório."),
    email: z.string().nonempty("O e-mail é obrigatório.").email("Forneça um e-mail válido."),
    cpf: z.string().min(11, "O cpf deve ter no mínimo 11 digítos.").max(11, "O cpf deve ter no máximo 11 dígitos.").nonempty("O cpf é obrigatório."),
    tel: z.string().min(10, "O telefone deve conter no mínimo 10 digítos.").max(12, "O telefone deve contar no máximo 12 dígitos."),
    birth: z.string().nonempty("A data de nascimento é obrigatória."),
    description: z.string().max(300),
    cep: z.string().min(8, "O CEP deve ter no mínimo 8 digítos.").nonempty("O CEP é obrigatório."),
    state: z.string().max(100).nonempty("O estado é obrigatório."),
    city: z.string().max(100).nonempty("A cidade é obrigatória."),
    street: z.string().max(150),
    number: z.number(),
    complement: z.string().max(100),
    typeAccount: z.enum(['Comprador', 'Anunciante']),
    password: z
        .string()
        .min(8, "A senha precisa conter pelo menos 8 caracteres.")
        .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número."),
    confirm: z.string().min(1, "A confirmação de senha é obrigatória."),
}).refine(({ password, confirm }) => password === confirm, {
    message: "As senhas precisam corresponder.",
    path: ["confirm"]
})

const registerFormSchema = z.object({
    name: z.string().max(50).nonempty("O nome é obrigatório."),
    email: z.string().nonempty("O e-mail é obrigatório.").email("Forneça um e-mail válido."),
    cpf: z.string().min(11, "O cpf deve ter no mínimo 11 digítos.").max(11, "O cpf deve ter no máximo 11 dígitos.").nonempty("O cpf é obrigatório."),
    tel: z.string().min(10, "O telefone deve conter no mínimo 10 digítos.").max(12, "O telefone deve contar no máximo 12 dígitos."),
    birth: z.string().nonempty("A data de nascimento é obrigatória."),
    description: z.string().max(300),
    cep: z.string().min(8, "O CEP deve ter no mínimo 8 digítos.").nonempty("O CEP é obrigatório."),
    state: z.string().max(100).nonempty("O estado é obrigatório."),
    city: z.string().max(100).nonempty("A cidade é obrigatória."),
    street: z.string().max(150),
    number: z.string(),
    complement: z.string().max(100),
    password: z
        .string()
        .min(8, "A senha precisa conter pelo menos 8 caracteres.")
        .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número."),
    confirm: z.string().min(1, "A confirmação de senha é obrigatória."),
}).refine(({ password, confirm }) => password === confirm, {
    message: "As senhas precisam corresponder.",
    path: ["confirm"]
})

export type TRegisterFormData = z.infer<typeof registerSchema>;

export { registerSchema, registerFormSchema }

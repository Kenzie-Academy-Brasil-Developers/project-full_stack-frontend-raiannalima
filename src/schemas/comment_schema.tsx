import { z } from "zod";

export const commentFormSchema = z.object({
    email: z.string().nonempty("Não é possível criar um comentário vazio."),
});

export type TcommentFormData = z.infer<typeof commentFormSchema>;
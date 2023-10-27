import { z } from "zod";

export const commentFormSchema = z.object({
    comment: z.string().nonempty("Não é possível criar um comentário vazio."),
});

export type TCommentFormData = z.infer<typeof commentFormSchema>;
import * as z from "zod";

export const CreateCategorySchema = z.object({
    name: z
        .string()
        .min(1, { message: "Name is required"}),
})
.required();

export type CreateCategoryDTO = z.infer<typeof CreateCategorySchema>;

export const CreateSubCategorySchema = z.object({
    name: z
        .string()
        .min(1, { message: "Name is required"}),
    super_category_id: z
        .string()
        .min(1, {message: "Category's id is required"})
        .transform(id => parseInt(id))
        .refine(id => !isNaN(id)
        , { message: "Invalid category's Id"}),
})
.required();

export type CreateSubCategoryDTO = z.infer<typeof CreateSubCategorySchema>;
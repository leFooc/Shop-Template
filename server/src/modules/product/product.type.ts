import * as z from "zod";

export const CreateColorSchema = z.object({
    name: z
        .string()
        .min(1, { message: "Name is required" }),
    display_value: z
        .string()
        .optional()
})
.required();

export type CreateColorDTO = z.infer<typeof CreateColorSchema>;

export const ColorSchema = z.object({
    name: z
        .string()
        .optional(),
    display_value: z
        .string()
        .optional()
})
.required();

export type ColorDTO = z.infer<typeof ColorSchema>;

export const CreateSizeSchema = z.object({
    name: z
        .string()
        .min(1, { message: "Name is required" })
})
.required();

export type CreateSizeDTO = z.infer<typeof CreateSizeSchema>;

export const SizeSchema = z.object({
    name: z
        .string()
        .optional()
})
.required();

export type SizeDTO = z.infer<typeof SizeSchema>;
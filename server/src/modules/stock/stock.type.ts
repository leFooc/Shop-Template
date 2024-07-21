import * as z from "zod";

export const CreateShopSchema = z.object({
    name: z
        .string()
        .min(1, { message: "Name is required"}),
    location: z
        .string()
        .optional()
        .transform(location => location?.length === 0 ? undefined : location),
})
.required();

export type CreateShopDTO = z.infer<typeof CreateShopSchema>;

export const ShopSchema = z.object({
    name: z
        .string()
        .optional(),
    location: z
        .string()
        .optional()
        .transform(location => location?.length === 0 ? undefined : location),
})
.required();

export type ShopDTO = z.infer<typeof ShopSchema>;
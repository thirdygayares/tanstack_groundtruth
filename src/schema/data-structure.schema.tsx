import {z} from "zod";


export const DataStructureResponseSchema = z.object({
    names: z.array(z.string()),
});

export type DataStructureResponse = z.infer<typeof DataStructureResponseSchema>
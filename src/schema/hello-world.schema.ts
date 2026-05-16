import {z} from "zod";

export const HelloWorldResponseSchema = z.object({
  message: z.string(),
  createdAt: z.string(),
});

export type HelloWorldResponse = z.infer<typeof HelloWorldResponseSchema>;
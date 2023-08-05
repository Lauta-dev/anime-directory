import { object, z } from "zod";

const validate = z.object({
  name: z.string(),
  type: z.string(),
  id: z.number().int().min(1)
})


export const validateData = (object) => validate.safeParse(object)
export const validateOneData = (object) => validate.partial().safeParse(object)
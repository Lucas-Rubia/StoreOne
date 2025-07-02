import { z } from "zod";

export const formValidation = z.object({
    zip: z
    .string()
    .length(8, "Cep Invalido"),

    street: z
  .string()
  .min(1, "Campo Obrigatório")
  .max(30, "Campo só pode conter até 30 caracteres"),

  number: z
    .string()
    .min(1, "Campo Obrigatório")
    .max(5, "Campo só pode conter números de até 8 caracteres"),

  complement: z
    .string()
    .max(30, "Campo só pode conter até 30 caracteres")
    .optional(),

  Neighborhood: z
    .string()
    .min(3, "Campo Obrigatório")
    .max(30, "Campo só pode conter até 30 caracteres"),

  city: z
    .string()
    .min(3, "Campo Obrigatório")
    .max(30, "Campo só pode conter até 30 caracteres"),
    
  UF: z
    .string()
    .min(2, "Campo Obrigatório")
    .max(2, "Campo só pode conter 2 caracteres"),
})


export type FormValidationFromType = z.infer<typeof formValidation>
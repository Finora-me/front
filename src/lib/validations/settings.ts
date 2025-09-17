// src/lib/validations/settings.ts
import { z } from "zod"

// Validação para os dados pessoais
export const userProfileSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().regex(/^\(\d{2}\) \d \d{4}-\d{4}$/, "Formato inválido. Use: (99) 9 9999-9999"),
  cpf: z.string().regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "Formato: 000.000.000-00"),
})

export type UserProfileFormData = z.infer<typeof userProfileSchema>

// Validação para a mudança de senha
export const changePasswordSchema = z.object({
  currentPassword: z.string().min(1, "Senha atual é obrigatória"),
  newPassword: z.string().min(6, "Nova senha deve ter pelo menos 6 caracteres"),
  confirmPassword: z.string().min(1, "Confirmação de senha é obrigatória"),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "As senhas não coincidem",
  path: ["confirmPassword"],
})

export type ChangePasswordFormData = z.infer<typeof changePasswordSchema>

export const categorySchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  type: z.enum(["income", "expense"], {
    errorMap: () => ({ message: "Selecione um tipo" }),
  }),
  color: z.string().min(1, "Selecione uma cor"),
})

export type CategoryFormData = z.infer<typeof categorySchema>
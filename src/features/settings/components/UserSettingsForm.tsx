// src/features/settings/components/UserSettingsForm.tsx
'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { userProfileSchema, changePasswordSchema, UserProfileFormData, ChangePasswordFormData } from '@/lib/validations/settings'
import { mockUser } from '@/services/mock/auth'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { MaskedInput } from '@/components/ui/masked-input'
import { ArrowRight } from 'lucide-react'

// Subcomponente para os campos de formulário para evitar repetição e manter o código limpo
function FormField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-medium text-[10px] leading-3 uppercase text-[#084335]">
        {label}
      </label>
      {children}
    </div>
  )
}

export function UserSettingsForm() {
  const {
    register: registerProfile,
    handleSubmit: handleProfileSubmit,
    setValue: setProfileValue,
    formState: { errors: profileErrors },
  } = useForm<UserProfileFormData>({
    resolver: zodResolver(userProfileSchema),
    defaultValues: { ...mockUser }
  })

  const {
    register: registerPassword,
    formState: { errors: passwordErrors },
  } = useForm<ChangePasswordFormData>({
    resolver: zodResolver(changePasswordSchema),
  })

  const onProfileSubmit = (data: UserProfileFormData & ChangePasswordFormData) => {
    console.log("Formulário submetido:", data)
    alert("Dados salvos com sucesso! (mock)")
  }

  const inputStyles = "h-10 border-[#0D8562] rounded-md text-sm text-[#0D8562] placeholder:text-[#0D8562]/70"

  return (
    <div className="bg-white border border-[#EBEEEF] rounded-md p-8">
      <form onSubmit={handleProfileSubmit(onProfileSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <FormField label="Nome">
            <Input {...registerProfile('name')} error={profileErrors.name?.message} className={inputStyles} />
          </FormField>
          <FormField label="Email">
            <Input {...registerProfile('email')} type="email" error={profileErrors.email?.message} className={inputStyles} />
          </FormField>
          <FormField label="Telefone">
            <MaskedInput mask="phone" error={profileErrors.phone?.message} onChange={(value) => setProfileValue('phone', value)} defaultValue={mockUser.phone} className={inputStyles} />
          </FormField>
          <FormField label="CPF">
            <MaskedInput mask="cpf" error={profileErrors.cpf?.message} onChange={(value) => setProfileValue('cpf', value)} defaultValue={mockUser.cpf} className={inputStyles} />
          </FormField>
          <FormField label="Nova Senha">
            <Input {...registerPassword('newPassword')} type="password" placeholder="********" error={passwordErrors.newPassword?.message} className={inputStyles} />
          </FormField>
          <FormField label="Confirmar Nova Senha">
            <Input {...registerPassword('confirmPassword')} type="password" placeholder="********" error={passwordErrors.confirmPassword?.message} className={inputStyles} />
          </FormField>
        </div>
        <div className="flex justify-end mt-8">
          <Button type="submit" className="bg-[#084335] hover:bg-[#084335]/90 text-white font-medium text-sm px-4 py-2.5 rounded-md h-10 flex items-center gap-2">
            Salvar
            <ArrowRight size={16} />
          </Button>
        </div>
      </form>
    </div>
  )
}
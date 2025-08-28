'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { registerSchema, type RegisterFormData } from '@/lib/validations/auth'
import { useAuthStore } from '@/stores/auth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { MaskedInput } from '@/components/ui/masked-input'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from "lucide-react"

export function RegisterForm() {
  const router = useRouter()
  const { register: registerUser, isLoading, error, clearError } = useAuthStore()

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  })

  const onSubmit = async (data: RegisterFormData) => {
    clearError()

    try {
      await registerUser(data)
      router.push('/dashboard')
    } catch (error) {
      // Error já é tratado pelo store
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <Image
            src="/finorame.png"
            alt="Logo do Finora.me"
            width={100}
            height={100}
            className="mx-auto"
          />
        </div>

        <Card>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center">
                <h1 className="text-2xl font-semibold text-finora-green-600">
                  Vamos dar os primeiros passos! 💸
                </h1>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {error && (
                  <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
                    {error}
                  </div>
                )}

                <div>
                  <label className="block text-[10px] font-small text-finora-green-600 mb-1">
                    NOME
                  </label>
                  <Input
                    {...register('name')}
                    placeholder="Insira seu nome..."
                    error={errors.name?.message}
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-small text-finora-green-600 mb-1">
                    EMAIL
                  </label>
                  <Input
                    {...register('email')}
                    type="email"
                    placeholder="seu_email@gmail.com"
                    error={errors.email?.message}
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-small text-finora-green-600 mb-1">
                    TELEFONE
                  </label>
                  <MaskedInput
                    mask="phone"
                    placeholder="(99) 9 9999-9999"
                    error={errors.phone?.message}
                    onChange={(value) => setValue('phone', value)}
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-small text-finora-green-600 mb-1">
                    CPF
                  </label>
                  <MaskedInput
                    mask="cpf"
                    placeholder="123.123.123-12"
                    error={errors.cpf?.message}
                    onChange={(value) => setValue('cpf', value)}
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-small text-finora-green-600 mb-1">
                    SENHA
                  </label>
                  <Input
                    {...register('password')}
                    type="password"
                    placeholder="••••••••"
                    error={errors.password?.message}
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-small text-finora-green-600 mb-1">
                    CONFIRMAR SENHA
                  </label>
                  <Input
                    {...register('confirmPassword')}
                    type="password"
                    placeholder="••••••••"
                    error={errors.confirmPassword?.message}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <Link
                    href="/login"
                    className="text-finora-green-600 text-sm font-size-[11px]"
                  >
                    Já tem conta?
                  </Link>

                  <Button
                    type="submit"
                    className="w-[120px] h-[40px] bg-finora-green-600"
                    size="sm"
                    isLoading={isLoading}
                  >
                    {isLoading ? 'Cadastrando...' :
                      <div className='flex items-center gap-2'>
                        Cadastrar
                        <ArrowRight size={12} />
                      </div>
                    }
                  </Button>
                </div>

              </form>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { loginSchema, type LoginFormData } from '@/lib/validations/auth'
import { useAuthStore } from '@/stores/auth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image';
import { ArrowRight } from "lucide-react"


export function LoginForm() {
  const router = useRouter()
  const { login, isLoading, error, clearError } = useAuthStore()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginFormData) => {
    clearError()

    try {
      await login(data)
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
                  Bem-vindo de volta! 👋
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
                    SENHA
                  </label>
                  <Input
                    {...register('password')}
                    type="password"
                    placeholder="••••••••"
                    error={errors.password?.message}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-between text-sm gap-4">
                    <Link
                      href="/forgot-password"
                      className="text-finora-green-600 font-size-[11px]"
                    >
                      Esqueceu a senha?
                    </Link>
                    <Link
                      href="/cadastro"
                      className="text-finora-green-600 font-size-[11px]"
                    >
                      Cadastre-se
                    </Link>
                  </div>

                  <Button
                    type="submit"
                    className="w-[97px] h-[40px] bg-finora-green-600"
                    size="sm"
                    isLoading={isLoading}
                  >
                    {isLoading ? 'Entrando...' :
                      <div className='flex items-center gap-2'>
                        Entrar
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
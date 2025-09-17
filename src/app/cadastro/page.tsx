import { RegisterForm } from '@/features/auth/components/register-form'

export default function RegisterPage() {
  return <RegisterForm />
}// src/app/settings/page.tsx
import { UserSettingsForm } from '@/features/settings/components/UserSettingsForm'
import { CategoryManager } from '@/features/settings/components/CategoryManager'

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-finora-primary">Conta e Configurações</h1>
        {/* Um subtítulo pode ser adicionado aqui se desejado */}
      </div>
      
      <UserSettingsForm />
      <CategoryManager />
    </div>
  )
}
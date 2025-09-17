// src/app/settings/page.tsx
import { UserSettingsForm } from '@/features/settings/components/UserSettingsForm'
import { CategoryManager } from '@/features/settings/components/CategoryManager'

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-[#4C4C66] opacity-90" style={{ fontFamily: 'Helvetica Neue' }}>
          Conta e Configurações
        </h1>
      </div>
      
      <UserSettingsForm />
      <CategoryManager />
    </div>
  )
}
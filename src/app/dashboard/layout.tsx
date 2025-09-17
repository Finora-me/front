// src/app/dashboard/layout.tsx
import { Header } from '@/components/Header'
import { SideNav } from '@/components/SideNav'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* A barra lateral fica fixa na tela */}
      <SideNav />

      {/* A área de conteúdo principal tem uma margem à esquerda 
          exatamente da largura da barra lateral (w-64 -> ml-64) */}
      <main className="ml-64">
        <Header />
        {/* O padding agora é aplicado diretamente aqui, no container do conteúdo */}
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  )
}
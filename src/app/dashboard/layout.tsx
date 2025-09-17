// src/app/dashboard/layout.tsx
import { Header } from '../../components/Header' // Ajuste o caminho se necessário
import { SideNav } from '../../components/SideNav' // Ajuste o caminho se necessário

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <SideNav />
      <div className="flex flex-1 flex-col">
        <Header />
        {/* O <main> agora tem o padding e ocupa o espaço restante para o conteúdo rolável */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  )
}

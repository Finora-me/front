// src/components/layout/Header.tsx
import { Bell, LayoutGrid, Search } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function Header() {
  // Dados mockados para o cabeçalho
  const userName = "Pixelz Warrios"
  const notificationCount = 15

  return (
    <header className="flex items-center justify-between p-6 bg-white">
      <div>
        <h1 className="text-3xl font-bold text-finora-primary">Dashboard</h1>
        <p className="text-gray-500">Vamos ver como esta suas finanças? 🤑</p>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm">
          <Search className="h-5 w-5 text-gray-500" />
        </Button>
        <Button variant="ghost" size="sm">
          <LayoutGrid className="h-5 w-5 text-gray-500" />
        </Button>
        <div className="relative">
          <Button variant="ghost" size="sm">
            <Bell className="h-5 w-5 text-gray-500" />
            {notificationCount > 0 && (
              <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                {notificationCount}
              </span>
            )}
          </Button>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-finora-primary">
            {/* Usando iniciais como placeholder para a imagem do perfil */}
            {userName.substring(0, 1)}
          </div>
          <span className="text-sm font-medium text-finora-primary">{userName} ▼</span>
        </div>
      </div>
    </header>
  )
}
// src/components/layout/SideNav.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Settings } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/settings', label: 'Conta e Configurações', icon: Settings },
]

export function SideNav() {
  const pathname = usePathname()

  return (
    // 1. Fundo E5F4E4 e dimensões corrigidas
    <aside className="w-64 h-screen fixed top-0 left-0 bg-finora-background-green p-6 flex flex-col border-r border-gray-200">
      {/* 2. Layout do Logo + Título */}
      <div className="relative mb-12 flex items-center h-[50px]">
        <Image
          src="/finorame.png"
          alt="Finora.me Logo"
          width={50}
          height={50}
        />
        <span 
            className="absolute left-[58px] font-medium text-lg text-finora-primary"
            style={{ fontFamily: 'Inter, sans-serif' }}
        >
            Finora.me
        </span>
      </div>

      <nav>
        <ul className="space-y-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <li key={link.href} className="relative"> {/* Container para o indicador */}
                {/* 3. Indicador de item ativo (bolinha verde cortada) */}
                {isActive && (
                  <div className="absolute left-[-36px] top-0 h-full flex items-center">
                      <div className="h-6 w-6 bg-finora-green-400 rounded-full"/>
                  </div>
                )}
                <Link
                  href={link.href}
                  className={cn(
                    'flex items-center gap-3 rounded-md px-4 py-3 text-sm font-medium transition-colors',
                    // 4. Cores de texto para ativo e inativo, SEM mudar o fundo do item
                    isActive
                      ? 'text-finora-green-400' // Green 004
                      : 'text-finora-primary-light hover:text-finora-primary' // Dark 002 (aproximado)
                  )}
                >
                  <link.icon className="h-5 w-5" />
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}
// src/app/dashboard/page.tsx
'use client'

import { useState } from 'react'
import { BalanceChart } from '@/features/dashboard/components/BalanceChart'
import { BalanceSummary } from '@/features/dashboard/components/BalanceSummary'
import { HistoryList } from '@/features/dashboard/components/HistoryList'
import { TransactionForm } from '@/features/dashboard/components/TransactionForm'
import { cn } from '@/lib/utils'

export default function DashboardPage() {
  const [isHistoryExpanded, setHistoryExpanded] = useState(false)

  const handleToggleHistory = () => {
    setHistoryExpanded(prevState => !prevState)
  }

  return (
    // A grade base com 3 colunas e 2 linhas implícitas
    <div className="grid grid-cols-3 gap-6">
      
      {/* O formulário sempre ocupa as 2 primeiras colunas da primeira linha */}
      <div className="col-span-2">
        <TransactionForm />
      </div>

      {/* O histórico ocupa a 3ª coluna. 
          Quando expandido, ele se estende por 2 linhas (row-span-2),
          assumindo o controle vertical da sua coluna. */}
      <div className={cn(
        "transition-all duration-300",
        isHistoryExpanded ? "row-span-2" : "row-span-1"
      )}>
        <HistoryList 
          isExpanded={isHistoryExpanded}
          onToggleExpand={handleToggleHistory}
        />
      </div>
      
      {/* O conteúdo principal do dashboard (saldos e gráfico) 
          ocupa as 2 primeiras colunas da segunda linha.
          Ele será "empurrado" naturalmente pela grade. */}
      <div className="col-span-2 flex flex-col gap-6">
        <BalanceSummary />
        <BalanceChart />
      </div>

    </div>
  )
}
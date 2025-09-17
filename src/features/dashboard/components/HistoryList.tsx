// src/features/dashboard/components/HistoryList.tsx
'use client'

import { mockTransactions } from '@/services/mock/transactions'
import { cn } from '@/lib/utils'
import { X } from 'lucide-react'

interface HistoryListProps {
  isExpanded: boolean;
  onToggleExpand: () => void;
}

const INITIAL_ITEMS_TO_SHOW = 4

export function HistoryList({ isExpanded, onToggleExpand }: HistoryListProps) {
  const transactionsToShow = isExpanded
    ? mockTransactions
    : mockTransactions.slice(0, INITIAL_ITEMS_TO_SHOW)

  return (
    // Adicionado h-full para que o componente preencha o espaço do row-span
    <div className="w-full h-full bg-white p-6 rounded-lg transition-all duration-300 flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-sans text-xs font-bold uppercase tracking-wider text-finora-primary">
          HISTÓRICO
        </h2>
        <button
          onClick={onToggleExpand}
          className="font-sans text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
        >
          {isExpanded ? <X className="h-4 w-4" /> : 'VER MAIS'}
        </button>
      </div>
      <ul className="space-y-5">
        {transactionsToShow.map((transaction) => (
          <li key={transaction.id} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-3">
              <div className={cn('w-5 h-5 border rounded-md', transaction.categoryColor)} />
              <span className="font-sans text-xs text-finora-primary-light">
                {transaction.description}
              </span>
            </div>
            <div className="flex items-center gap-4 text-right">
              <span
                className={cn(
                  'font-sans text-xs font-bold w-20',
                  transaction.type === 'income' ? 'text-green-500' : 'text-finora-accent-red'
                )}
              >
                {transaction.type === 'income' ? '+ ' : '- '}
                R$ {Math.abs(transaction.amount).toFixed(2).replace('.', ',')}
              </span>
              <span className="font-sans text-[11px] text-finora-primary-light opacity-50">
                {new Date(transaction.date).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: '2-digit' })}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
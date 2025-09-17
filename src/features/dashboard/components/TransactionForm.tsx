'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

type TransactionType = 'income' | 'expense'

export function TransactionForm() {
  const [transactionType, setTransactionType] = useState<TransactionType>('income')

  const isIncome = transactionType === 'income'

  const dynamicInputClasses = cn(
    'border rounded-lg bg-white placeholder:text-sm',
    {
      'border-finora-green-100 text-finora-green-200 placeholder:text-finora-green-200 focus:border-finora-green-300 focus:ring-finora-green-300': isIncome,
      'border-finora-accent-red text-finora-accent-red placeholder:text-finora-accent-red focus:border-red-600 focus:ring-red-600': !isIncome,
    }
  )

  return (
    <div className="bg-white p-6 rounded-lg">
      <form className="space-y-4 font-sans">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <select
              value={transactionType}
              onChange={(e) => setTransactionType(e.target.value as TransactionType)}
              className={cn(
                dynamicInputClasses,
                'appearance-none w-full h-10 px-4 text-sm'
              )}
            >
              <option value="income">Receita</option>
              <option value="expense">Despesa</option>
            </select>
            <ChevronDown className={cn(
                "absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none",
                isIncome ? "text-finora-green-300" : "text-finora-accent-red"
            )} />
          </div>

          <div className="relative">
              <select className={cn(dynamicInputClasses, 'appearance-none w-full h-10 px-4 text-sm')}>
                <option>Salário</option>
                <option>Alimentação</option>
                <option>Investimentos</option>
              </select>
              <ChevronDown className={cn(
                "absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none",
                isIncome ? "text-finora-green-300" : "text-finora-accent-red"
            )} />
          </div>
        </div>
        
        <Input 
          placeholder={isIncome ? "Ex: Salário recebido" : "Ex: Compras do mês"}
          className={dynamicInputClasses} 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            type="text"
            placeholder="R$ 0,00"
            className={dynamicInputClasses}
          />
          <div className="relative">
            <Input
              type="date"
              className={cn(dynamicInputClasses, 'block w-full h-10')}
            />
          </div>
        </div>
        
        <Button type="submit" className="w-full h-[40px] bg-finora-primary hover:bg-finora-primary-light text-base font-normal">
          Cadastrar
        </Button>
      </form>
    </div>
  )
}
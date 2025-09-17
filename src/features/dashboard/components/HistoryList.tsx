// src/features/dashboard/components/HistoryList.tsx
import { Card, CardContent } from '@/components/ui/card'
import { mockTransactions } from '@/services/mock/transactions'
import { cn } from '@/lib/utils'

// Mostra apenas os 4 primeiros itens
const transactionsToShow = mockTransactions.slice(0, 4);

export function HistoryList() {
  return (
    // Aumentamos a largura para `max-w-md` para dar mais espaço
    <Card className="w-full max-w-md">
      <CardContent>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#4C4C66]">
            Histórico
          </h2>
          <button className="text-xs font-bold text-[#3279CC] cursor-pointer">
            VER MAIS
          </button>
        </div>
        <ul className="space-y-5">
          {transactionsToShow.map((transaction) => (
            <li key={transaction.id} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-3">
                <div className={cn('w-5 h-5 border rounded-full', transaction.categoryColor)} />
                <span  className="text-xs text-[#6F6C99]">
                  {transaction.description}
                </span>
              </div>
              <div className="flex items-center gap-4 text-right">
                <span
                  
                  className={cn(
                    'text-[11px] font-bold w-20',
                    transaction.type === 'income' ? 'text-[#2BB596]' : 'text-[#E3507A]'
                  )}
                >
                  {transaction.type === 'income' ? '+ R$' : '- R$'} {Math.abs(transaction.amount).toFixed(2).replace('.', ',')}
                </span>
                <span  className="text-[11px] text-[#6F6C99] opacity-50">
                  {new Date(transaction.date).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: '2-digit' })}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
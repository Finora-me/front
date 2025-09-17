// src/features/dashboard/components/BalanceSummary.tsx
import { Card, CardContent } from '@/components/ui/card'
import { mockTransactions } from '@/services/mock/transactions'
import { cn } from '@/lib/utils'
import { ArrowDownCircle, ArrowUpCircle, Landmark } from 'lucide-react'

// Componente para um card individual para reutilização
function SummaryCard({
  title,
  value,
  percentage,
  icon: Icon,
  color,
}: {
  title: string
  value: number
  percentage: number
  icon: React.ElementType
  color: string
}) {
  return (
    <Card className={cn('text-white', color)}>
      <CardContent className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-white/20 p-3 rounded-full">
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm">{title}</p>
            <p className="text-2xl font-bold">
              R$ {value.toFixed(2).replace('.', ',')}
            </p>
            <p className="text-xs opacity-80">
              +{percentage.toFixed(1).replace('.', ',')}%
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}


export function BalanceSummary() {
  // Calculando os saldos a partir dos dados mockados
  const totalBalance = mockTransactions.reduce((acc, t) => acc + t.amount, 0)
  const totalIncome = mockTransactions
    .filter((t) => t.type === 'income')
    .reduce((acc, t) => acc + t.amount, 0)
  const totalExpense = mockTransactions
    .filter((t) => t.type === 'expense')
    .reduce((acc, t) => acc + t.amount, 0)

  // Dados mocados para as porcentagens
  const percentageChange = 12.5

  return (
    <section>
      <h2 className="text-sm font-semibold text-gray-500 mb-2">SALDOS</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SummaryCard
          title="Saldo Total"
          value={totalBalance}
          percentage={percentageChange}
          icon={Landmark}
          color="bg-finora-green-300"
        />
        <SummaryCard
          title="Saídas"
          value={Math.abs(totalExpense)}
          percentage={percentageChange}
          icon={ArrowDownCircle}
          color="bg-finora-accent-red"
        />
        <SummaryCard
          title="Entradas"
          value={totalIncome}
          percentage={percentageChange}
          icon={ArrowUpCircle}
          color="bg-finora-accent-cyan"
        />
      </div>
    </section>
  )
}
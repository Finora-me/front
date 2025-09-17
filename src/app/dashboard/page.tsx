import { BalanceChart } from '@/features/dashboard/components/BalanceChart'
import { BalanceSummary } from '@/features/dashboard/components/BalanceSummary'
import { HistoryList } from '@/features/dashboard/components/HistoryList'
import { TransactionForm } from '@/features/dashboard/components/TransactionForm'

export default function DashboardPage() {
  return (
    // 1. Criamos uma grade com 3 colunas para nos dar flexibilidade de proporção.
    <div className="grid grid-cols-3 gap-6">
      
      {/* --- PRIMEIRA ROW --- */}

      {/* Formulário: Ocupa as 2 primeiras colunas da grade. */}
      <div className="col-span-2">
        <TransactionForm />
      </div>

      {/* Histórico: Ocupa a 3ª coluna e se estende por 2 linhas para ficar na lateral. */}
      <div className="row-span-2">
        <HistoryList />
      </div>
      
      {/* --- SEGUNDA ROW --- */}

      {/* Conteúdo do Dashboard: Ocupa as 2 primeiras colunas, abaixo do formulário. */}
      <div className="col-span-4 flex flex-col gap-6">
        <BalanceSummary />
        <BalanceChart />
      </div>

    </div>
  )
}
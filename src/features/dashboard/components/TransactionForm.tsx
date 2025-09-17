// src/features/dashboard/components/TransactionForm.tsx
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { CalendarIcon } from 'lucide-react'

export function TransactionForm() {
  return (
    <Card className="flex-1">
      <CardContent>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {/* Estes selects seriam componentes reutilizáveis. 
              Por simplicidade, usaremos inputs por enquanto.
            */}
            <Input placeholder="Receita" />
            <Input placeholder="Salário" />
          </div>
          <Input placeholder="Salário recebido." />
          <div className="grid grid-cols-2 gap-4">
            <Input type="text" placeholder="R$ 99,99" />
            <div className="relative">
              <Input type="text" placeholder="08/17/2025" className="pr-10" />
              <CalendarIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <Button type="submit" className="w-full bg-finora-primary hover:bg-finora-primary-light">
            Cadastrar
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
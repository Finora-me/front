// src/services/mock/transactions.ts
import { Transaction } from '@/types/transaction'

// Note que categoryColor agora usa classes de borda do Tailwind
export const mockTransactions: Transaction[] = [
  {
    id: '1',
    description: 'Salário',
    amount: 4000,
    date: '2025-08-26',
    type: 'income',
    category: 'Salário',
    categoryColor: 'border-finora-green-300', // Verde
  },
  {
    id: '2',
    description: 'Coxinha',
    amount: -5.00,
    date: '2025-08-26',
    type: 'expense',
    category: 'Alimentação',
    categoryColor: 'border-finora-accent-red', // Vermelho
  },
  {
    id: '3',
    description: 'Suco',
    amount: -3.00,
    date: '2025-08-26',
    type: 'expense',
    category: 'Alimentação',
    categoryColor: 'border-finora-accent-red', // Vermelho
  },
  {
    id: '4',
    description: 'XRP',
    amount: 20.00,
    date: '2025-08-26',
    type: 'income',
    category: 'Investimentos',
    categoryColor: 'border-finora-accent-cyan', // Ciano
  },
  // --- Itens adicionais para a lista expandida ---
  {
    id: '5',
    description: 'Cinema',
    amount: -45.00,
    date: '2025-08-25',
    type: 'expense',
    category: 'Lazer',
    categoryColor: 'border-yellow-500', // Amarelo
  },
  {
    id: '6',
    description: 'Livro de React',
    amount: -95.00,
    date: '2025-08-24',
    type: 'expense',
    category: 'Educação',
    categoryColor: 'border-purple-500', // Roxo
  },
  {
    id: '7',
    description: 'Freela Website',
    amount: 1200.00,
    date: '2025-08-23',
    type: 'income',
    category: 'Renda Extra',
    categoryColor: 'border-finora-green-300', // Verde
  },
  {
    id: '8',
    description: 'Gasolina',
    amount: -150.00,
    date: '2025-08-22',
    type: 'expense',
    category: 'Transporte',
    categoryColor: 'border-orange-500', // Laranja
  },
  {
    id: '9',
    description: 'Salário',
    amount: 4000,
    date: '2025-08-26',
    type: 'income',
    category: 'Salário',
    categoryColor: 'border-finora-green-300', // Verde
  },
  {
    id: '10',
    description: 'Coxinha',
    amount: -5.00,
    date: '2025-08-26',
    type: 'expense',
    category: 'Alimentação',
    categoryColor: 'border-finora-accent-red', // Vermelho
  },
  {
    id: '11',
    description: 'Suco',
    amount: -3.00,
    date: '2025-08-26',
    type: 'expense',
    category: 'Alimentação',
    categoryColor: 'border-finora-accent-red', // Vermelho
  },
  {
    id: '12',
    description: 'XRP',
    amount: 20.00,
    date: '2025-08-26',
    type: 'income',
    category: 'Investimentos',
    categoryColor: 'border-finora-accent-cyan', // Ciano
  },
  // --- Itens adicionais para a lista expandida ---
  {
    id: '13',
    description: 'Cinema',
    amount: -45.00,
    date: '2025-08-25',
    type: 'expense',
    category: 'Lazer',
    categoryColor: 'border-yellow-500', // Amarelo
  },
  {
    id: '14',
    description: 'Livro de React',
    amount: -95.00,
    date: '2025-08-24',
    type: 'expense',
    category: 'Educação',
    categoryColor: 'border-purple-500', // Roxo
  },
  {
    id: '15',
    description: 'Freela Website',
    amount: 1200.00,
    date: '2025-08-23',
    type: 'income',
    category: 'Renda Extra',
    categoryColor: 'border-finora-green-300', // Verde
  },
  {
    id: '16',
    description: 'Gasolina',
    amount: -150.00,
    date: '2025-08-22',
    type: 'expense',
    category: 'Transporte',
    categoryColor: 'border-orange-500', // Laranja
  },
]
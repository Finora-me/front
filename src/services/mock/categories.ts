// src/services/mock/categories.ts
import { Category } from '@/types/category';

export const mockCategories: Category[] = [
  { id: '1', name: 'Salário', type: 'income', color: 'bg-green-500' },
  { id: '2', name: 'Alimentação', type: 'expense', color: 'bg-red-500' },
  { id: '3', name: 'Investimentos', type: 'income', color: 'bg-blue-500' },
  { id: '4', name: 'Transporte', type: 'expense', color: 'bg-orange-500' },
  { id: '5', name: 'Lazer', type: 'expense', color: 'bg-yellow-500' },
  { id: '6', name: 'Renda Extra', type: 'income', color: 'bg-teal-500' },
];
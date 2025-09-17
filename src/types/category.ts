// src/types/category.ts
export interface Category {
  id: string;
  name: string;
  type: 'income' | 'expense';
  color: string; // ex: 'bg-red-500'
}
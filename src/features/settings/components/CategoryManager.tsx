// src/features/settings/components/CategoryManager.tsx
'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { categorySchema, CategoryFormData } from '@/lib/validations/settings'
import { mockCategories } from '@/services/mock/categories'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { X, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const colorOptions = [
  'bg-green-500', 'bg-cyan-500', 'bg-purple-600', 'bg-red-500', 
  'bg-[#084335]', 'bg-[#F5A623]', 'bg-[#A55F77]', 'bg-[#FF2D55]',
  'bg-[#AF52DE]', 'bg-[#2C2C2C]'
]

export function CategoryManager() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    reset
  } = useForm<CategoryFormData>({
    resolver: zodResolver(categorySchema),
  })

  const selectedColor = watch('color')
  const inputStyles = "h-10 border-[#0D8562] rounded-md text-sm text-[#0D8562] placeholder:text-[#0D8562]/70"

  const onCategorySubmit = (data: CategoryFormData) => {
    console.log("Nova categoria:", data)
    alert(`Categoria "${data.name}" criada com sucesso! (mock)`)
    reset()
  }
  
  const handleDeleteCategory = (categoryId: string, categoryName: string) => {
    if (confirm(`Tem certeza que deseja excluir a categoria "${categoryName}"?`)) {
        console.log("Excluir categoria com ID:", categoryId)
        alert(`Categoria "${categoryName}" excluída! (mock)`)
    }
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-[#4C4C66] opacity-90 mb-4" style={{ fontFamily: 'Helvetica Neue' }}>
        Cadastrar categoria 📌
      </h2>
      <div className="bg-white border border-[#EBEEEF] rounded-md p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {/* Coluna de Criar Categoria */}
          <form onSubmit={handleSubmit(onCategorySubmit)} className="space-y-4">
            <div>
              <label className="block text-[10px] font-medium uppercase text-[#084335] mb-1">Nome da Categoria</label>
              <Input {...register('name')} error={errors.name?.message} className={inputStyles} />
            </div>
            <div>
              <label className="block text-[10px] font-medium uppercase text-[#084335] mb-1">Tipo</label>
              <select {...register('type')} className={cn(inputStyles, "w-full")}>
                  <option value="">Selecione...</option>
                  <option value="income">Receita</option>
                  <option value="expense">Despesa</option>
              </select>
              {errors.type && <p className="text-sm text-red-600 mt-1">{errors.type.message}</p>}
            </div>
            <div>
                <input {...register('color')} type="radio" className="hidden" />
                <div className="flex flex-wrap items-center gap-3">
                    {colorOptions.map(color => (
                        <button
                            key={color}
                            type="button"
                            onClick={() => setValue('color', color, { shouldValidate: true })}
                            className={cn(
                                "w-7 h-7 rounded-full cursor-pointer transition-all",
                                color,
                                selectedColor === color && "ring-2 ring-offset-2 ring-black"
                            )}
                        />
                    ))}
                </div>
                {errors.color && <p className="text-sm text-red-600 mt-1">{errors.color.message}</p>}
            </div>
          </form>

          {/* Coluna de Categorias Existentes */}
          <div className="space-y-2">
            <h3 className="block text-[10px] font-medium uppercase text-[#084335]">Suas categorias</h3>
            <div className="flex flex-wrap gap-2 p-4 border border-[#EBEEEF] rounded-md min-h-[150px] content-start">
              {mockCategories.map(category => (
                <div key={category.id} className={cn("flex items-center gap-2 text-white text-base font-normal px-3 py-1.5 rounded-lg h-8", category.color)}>
                  <span>{category.name}</span>
                  <button onClick={() => handleDeleteCategory(category.id, category.name)} className="opacity-70 hover:opacity-100">
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-8">
            <Button onClick={handleSubmit(onCategorySubmit)} className="bg-[#084335] hover:bg-[#084335]/90 text-white font-medium text-sm px-4 py-2.5 rounded-md h-10 flex items-center gap-2">
                Criar
                <ArrowRight size={16} />
            </Button>
        </div>
      </div>
    </div>
  )
}
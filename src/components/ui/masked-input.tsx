import { InputHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface MaskedInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  error?: string
  mask: 'phone' | 'cpf'
  onChange?: (value: string) => void
}

const MaskedInput = forwardRef<HTMLInputElement, MaskedInputProps>(
  ({ className, mask, error, onChange, ...props }, ref) => {

    const applyMask = (value: string, maskType: string) => {
      const cleanValue = value.replace(/\D/g, '')

      if (maskType === 'phone') {
        if (cleanValue.length <= 11) {
          return cleanValue
            .replace(/^(\d{2})(\d{1})(\d{4})(\d{4}).*/, '($1) $2 $3-$4')
            .substring(0, 16)
        }
        return cleanValue.substring(0, 11)
          .replace(/^(\d{2})(\d{1})(\d{4})(\d{4}).*/, '($1) $2 $3-$4')
      }

      if (maskType === 'cpf') {
        return cleanValue
          .replace(/^(\d{3})(\d{3})(\d{3})(\d{2}).*/, '$1.$2.$3-$4')
          .substring(0, 14)
      }

      return value
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const maskedValue = applyMask(e.target.value, mask)
      e.target.value = maskedValue
      onChange?.(maskedValue)
    }

    return (
      <div className="space-y-1">
        <input
          {...props}
          ref={ref}
          className={cn(
            'flex h-10 w-full rounded-md border border-finora-green-500 bg-white px-3 py-2 text-sm text-finora-green-600 placeholder:text-finora-green-600 focus:border-finora-green-600 focus:outline-none focus:ring-1 focus:ring-finora-green-600 disabled:cursor-not-allowed disabled:opacity-50',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
            className
          )}
          onChange={handleChange}
        />
        {error && (
          <p className="text-sm text-red-600">{error}</p>
        )}
      </div>
    )
  }
)

MaskedInput.displayName = 'MaskedInput'

export { MaskedInput }
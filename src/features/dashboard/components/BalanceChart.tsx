'use client'

import { mockChartData } from '@/services/mock/chart-data'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const legendItems = [
    { color: '#2DB261', label: 'Saldo' },
    { color: '#E3507A', label: 'Gastos' },
    { color: '#00C7BE', label: 'Investimentos' },
]

export function BalanceChart() {
  const data = mockChartData

  return (
    <div className="bg-white p-6 rounded-lg">
      <div className="flex justify-start items-center gap-6 mb-4">
          {legendItems.map(item => (
              <div key={item.label} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}/>
                  <span className="text-sm text-gray-600">{item.label}</span>
              </div>
          ))}
          <button className="ml-auto text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-md">
            + Adicionar Categoria
          </button>
      </div>

      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
            <XAxis dataKey="time" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value.toLocaleString('pt-BR')}`} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#ffffff', 
                border: '1px solid #cccccc', 
                borderRadius: '8px',
              }} 
              labelStyle={{ fontWeight: 'bold' }}
            />
            <Line type="monotone" dataKey="saldo" stroke="#2DB261" strokeWidth={3} dot={false} />
            <Line type="monotone" dataKey="gastos" stroke="#E3507A" strokeWidth={3} dot={false} />
            <Line type="monotone" dataKey="investimentos" stroke="#00C7BE" strokeWidth={3} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
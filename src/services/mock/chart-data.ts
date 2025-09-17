// src/services/mock/chart-data.ts
export interface ChartDataPoint {
  time: string
  saldo: number
  gastos: number
  investimentos: number
}

export const mockChartData: ChartDataPoint[] = [
  { time: '10:59PM', saldo: 3000, gastos: 2400, investimentos: 1800 },
  { time: '11:59PM', saldo: 3200, gastos: 2210, investimentos: 2050 },
  { time: '12:59AM', saldo: 3100, gastos: 2290, investimentos: 1900 },
  { time: '1:59AM', saldo: 3500, gastos: 2000, investimentos: 2400 },
  { time: '2:59AM', saldo: 3490, gastos: 2181, investimentos: 2300 },
  { time: '3:59AM', saldo: 3700, gastos: 2500, investimentos: 2600 },
  { time: '4:59AM', saldo: 4000, gastos: 2300, investimentos: 2800 },
  { time: '5:59AM', saldo: 4200, gastos: 3000, investimentos: 2900 },
  { time: '6:59AM', saldo: 4800, gastos: 3200, investimentos: 3500 },
  { time: '7:59AM', saldo: 5100, gastos: 3400, investimentos: 3700 },
]
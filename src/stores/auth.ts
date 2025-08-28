import { create } from 'zustand'
import { AuthState, LoginCredentials, RegisterCredentials } from '@/types/auth'
import { authService } from '@/services/api/auth'
import { User } from '@/types/user'

interface AuthActions {
  login: (credentials: LoginCredentials) => Promise<void>
  register: (credentials: RegisterCredentials) => Promise<void>
  logout: () => Promise<void>
  clearError: () => void
  setUser: (user: User) => void
}

type AuthStore = AuthState & AuthActions

export const useAuthStore = create<AuthStore>((set, get) => ({
  // Estado inicial
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,

  // Actions
  login: async (credentials) => {
    set({ isLoading: true, error: null })
    
    try {
      const response = await authService.login(credentials)
      
      set({
        user: response.user,
        isAuthenticated: true,
        isLoading: false,
      })
      
      // Aqui salvaríamos o token no cookie httpOnly
      // Por enquanto, vamos simular
      localStorage.setItem('finora_token', response.token)
      
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'Erro desconhecido',
        isLoading: false,
      })
    }
  },
  
register: async (credentials) => {
  set({ isLoading: true, error: null })
  
  try {
    const response = await authService.register(credentials)
    
    set({
      user: response.user,
      isAuthenticated: true,
      isLoading: false,
    })
    
    // Salva o token temporariamente no localStorage
    localStorage.setItem('finora_token', response.token)
    
  } catch (error) {
    set({
      error: error instanceof Error ? error.message : 'Erro desconhecido',
      isLoading: false,
    })
  }
},

  logout: async () => {
    set({ isLoading: true })
    
    try {
      await authService.logout()
      localStorage.removeItem('finora_token')
      
      set({
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
      })
    } catch (error) {
      set({ isLoading: false })
    }
  },

  clearError: () => set({ error: null }),
  
  setUser: (user) => set({ user, isAuthenticated: true }),
}))
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
      
      // ANTES: localStorage.setItem('finora_token', response.token)
      // AGORA: Salvamos o token em um cookie que o servidor pode ler.
      document.cookie = `finora_token=${response.token}; path=/; max-age=86400;` // max-age=86400 significa que o cookie expira em 1 dia (86400 segundos)
      
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
      document.cookie = 'finora_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;' // Linha para remover o cookie
      
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
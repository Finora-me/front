import { User } from "./user"

export interface LoginCredentials {
  email: string
  password: string
}

export interface AuthResponse {
  user: User
  token: string
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
}

export interface RegisterCredentials {
  name: string
  email: string
  phone: string
  cpf: string
  password: string
  confirmPassword: string
}

export interface RegisterResponse {
  user: User
  token: string
}
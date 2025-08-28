import { AuthResponse, LoginCredentials } from "@/types/auth"
import { User } from "@/types/user"

// Dados mockados do usuário
const mockUser: User = {
  id: "1",
  name: "Cauê Foyth",
  email: "caue@gmail.com",
  phone: "+55 (000) 00000-0000",
  cpf: "123.123.123-12",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}

// Simula delay de requisição
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const mockAuthService = {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    await delay(1000) // Simula latência
    
    // Validação simples para o mock
    if (credentials.email === mockUser.email && credentials.password === "123456") {
      return {
        user: mockUser,
        token: "mock_jwt_token_12345",
      }
    }
    
    throw new Error("Email ou senha incorretos")
  },

  async logout(): Promise<void> {
    await delay(500)
    // Simula logout
  },

  async getCurrentUser(): Promise<User> {
    await delay(800)
    return mockUser
  }
}
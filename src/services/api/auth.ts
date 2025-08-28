import { LoginCredentials, AuthResponse, RegisterCredentials, RegisterResponse } from "@/types/auth"
import { mockAuthService } from "../mock/auth"
import { User } from "@/types/user"

// Esta será nossa interface que futuramente apontará para APIs reais
export const authService = {
  login: (credentials: LoginCredentials): Promise<AuthResponse> => 
    mockAuthService.login(credentials),
    
  register: (credentials: RegisterCredentials): Promise<RegisterResponse> => 
    mockAuthService.register(credentials),
    
  logout: (): Promise<void> => 
    mockAuthService.logout(),
    
  getCurrentUser: (): Promise<User> => 
    mockAuthService.getCurrentUser(),
}
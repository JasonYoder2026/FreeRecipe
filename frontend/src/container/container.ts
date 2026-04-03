import { InjectionToken } from "@angular/core";
import { AuthService } from "../services/authService";
import { AuthRepository } from "../repositories/authRepository";

export const AUTH_SERVICE = new InjectionToken<AuthService>('AUTH_SERVICE');

import { InjectionToken } from "@angular/core";
import { AuthService } from "../services/authService";

export const AUTH_SERVICE = new InjectionToken<AuthService>('AUTH_SERVICE');

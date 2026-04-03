import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationResponse, AuthService, SignupCredentials } from '../services/authService.js';
import { firstValueFrom } from 'rxjs';
import { environment } from '../environments/environment.js';

@Injectable()
export class AuthRepository implements AuthService {
  private baseUrl = environment.apiUrl + '/auth';

  constructor(private http: HttpClient) { }

  async signup(signupCredentials: SignupCredentials): Promise<AuthenticationResponse> {
    try {
      const res = await firstValueFrom(
        this.http.post(`${this.baseUrl}/register`, signupCredentials, { observe: 'response' })
      );

      switch (res.status) {
        case 201:
          return AuthenticationResponse.success;
        default:
          return AuthenticationResponse.failure;
      }

    } catch (err: any) {
      switch (err.status) {
        case 409:
          return AuthenticationResponse.emailAlreadyInUse;
        case 400:
          return AuthenticationResponse.missingFields;
        case 500:
          return AuthenticationResponse.serverError;
        default:
          return AuthenticationResponse.failure;
      }
    }
  }
}

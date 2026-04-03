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
    const response$ = this.http.post<AuthenticationResponse>(`${this.baseUrl}/register`, signupCredentials);
    return await firstValueFrom(response$);
  }
}

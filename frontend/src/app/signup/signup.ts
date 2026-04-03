import { Component, Inject } from '@angular/core';
import { AuthService, SignupCredentials } from '../../services/authService.js';
import { AUTH_SERVICE } from '../../container/container.js';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [FormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  constructor(
    @Inject(AUTH_SERVICE) private authService: AuthService
  ) {}

  creds: SignupCredentials = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  async signUp(creds: SignupCredentials) {
    try {
      const response = await this.authService.signup(creds);
      console.log('Signup successful:', response);
    } catch (error) {
      console.error('Signup failed:', error);
    }
  }
}

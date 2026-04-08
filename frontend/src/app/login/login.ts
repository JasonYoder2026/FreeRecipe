import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import { AuthService, AuthenticationResponse, SignupCredentials } from '../../services/authService.js';
import { AUTH_SERVICE } from '../../container/container.js';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(
    @Inject(AUTH_SERVICE) private authService: AuthService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) { }

  message: string = '';
  messageType: 'success' | 'error' | '' = '';
  isLoading: boolean = false;
  email: string = '';
  password: string = '';

  async login(email: string, password: string) {
    this.isLoading = true;
    this.message = '';
    this.messageType = '';
    this.cdr.detectChanges();

    try {
      const response = await this.authService.login(email, password);

      switch (response) {
        case AuthenticationResponse.success:
          setTimeout(() => {
            this.router.navigate(['/home']);
          }, 1500);
          break;

        case AuthenticationResponse.missingFields:
          this.message = 'Please fill in all required fields.';
          this.messageType = 'error';
          break;

        case AuthenticationResponse.serverError:
          this.message = 'Server error occurred. Please try again later.';
          this.messageType = 'error';
          break;

        case AuthenticationResponse.failure:
        default:
          this.message = 'Signup failed. Please try again.';
          this.messageType = 'error';
          break;
      }

      this.cdr.detectChanges();
    } catch (error) {
      console.error('Signup failed:', error);
      this.message = 'An unexpected error occurred. Please try again.';
      this.messageType = 'error';
      this.cdr.detectChanges();
    } finally {
      this.isLoading = false;
      this.cdr.detectChanges();
    }
  }
}

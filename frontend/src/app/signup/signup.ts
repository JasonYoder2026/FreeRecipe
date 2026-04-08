import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import { AuthService, SignupCredentials, AuthenticationResponse } from '../../services/authService.js';
import { AUTH_SERVICE } from '../../container/container.js';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [FormsModule, CommonModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  constructor(
    @Inject(AUTH_SERVICE) private authService: AuthService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) { }

  creds: SignupCredentials = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  message: string = '';
  messageType: 'success' | 'error' | '' = '';
  isLoading: boolean = false;

  async signUp(creds: SignupCredentials) {
    this.isLoading = true;
    this.message = '';
    this.messageType = '';
    this.cdr.detectChanges();

    if (creds.password !== creds.confirmPassword) {
      this.message = 'Passwords do not match.';
      this.messageType = 'error';
      this.isLoading = false;
      this.cdr.detectChanges();
      return;
    }

    try {
      const response = await this.authService.signup(creds);

      switch (response) {
        case AuthenticationResponse.success:
          setTimeout(() => {
            this.router.navigate(['/home']);
          }, 1500);
          break;

        case AuthenticationResponse.emailAlreadyInUse:
          this.message = 'This email is already registered. Please use a different email or sign in.';
          this.messageType = 'error';
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

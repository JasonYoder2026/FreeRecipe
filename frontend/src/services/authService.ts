export interface AuthService {
  signup(signupCredentials: SignupCredentials): Promise<AuthenticationResponse>;
}

export interface SignupCredentials {
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
  email: string;
}

export enum AuthenticationResponse {
  success,
  failure,
  invalidPermissions,
  invalidCredentials,
  emailAlreadyInUse,
  missingFields,
  serverError
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    signUp(payload: any) {
        return this.http.post('http://localhost:5000/v1/auth/register', payload);
    }

    login(payload: any) {
        return this.http.post('http://localhost:5000/v1/auth/login', payload);
    }

    emailConfirmation(validationToken: string) {
        return this.http.post(`http://localhost:5000/v1/auth/confirmRegister?evldr=${validationToken}`, {});
    }

    recoverPassword(payload: any) {
        return this.http.post(`http://localhost:5000/v1/auth/forgotPassword`, payload);
    }

    createNewPassword(payload: any) {
        return this.http.post(`http://localhost:5000/v1/auth/updateForgottenPassword?evldr=${payload.newPasswordToken}`, payload.password);
    }

  constructor(private http: HttpClient) { }
}

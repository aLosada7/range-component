import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    signUp(payload: any) {
        return this.http.post('http://localhost:5000/v1/auth/register', payload);
    }

  constructor(private http: HttpClient) { }
}

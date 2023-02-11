import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {
  }

  login(credentials: any) {
    return this.http.post('/api/authenticate',
      JSON.stringify(credentials));
  }

  logout() {
  }

  isLoggedIn() {
    return false;
  }
}


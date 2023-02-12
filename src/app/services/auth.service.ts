import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {
  }

  login(credentials: any) {
    return this.http.post('/api/authenticate',
      JSON.stringify(credentials))
      .pipe(map(res => {
        if (res != undefined) {
          let val = Object.values(res);
          let token = val[0];
          if (token) {
            localStorage.setItem("token", token);
            return true;
          }
        }
        return false;
      }))
  }

  logout() {
  }

  isLoggedIn() {
    return false;
  }
}


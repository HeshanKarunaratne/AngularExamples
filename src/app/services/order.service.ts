import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable()
export class OrderService {

  constructor(private http: HttpClient) {
  }

  getOrders() {
    let token = localStorage.getItem('token')
    let httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token
      })
    };
    return this.http.get('/api/orders', httpOptions);
  }
}

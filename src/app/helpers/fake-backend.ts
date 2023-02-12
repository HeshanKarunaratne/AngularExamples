import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()

export class fakeBackendFactory implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const { url, method, headers, body } = request;
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1vc2ggSGFtZWRhbmkiLCJhZG1pbiI6dHJ1ZX0.1dm4jAzSnmfPFNKXAz36Iq6I1upjQ3jW1kTfv5cx2XA';

    if (url.endsWith('/api/authenticate') && method === 'POST')
      return authenticate();
    else if (url.endsWith('/api/orders') && method === 'GET')
      return getOrders();
    else
      return next.handle(request);

    function authenticate() {
      const { email, password } = JSON.parse(body);
      if (email === 'mosh@domain.com' && password === '1234')
        return of(new HttpResponse({
          status: 200,
          body: { token: token }
        }))
      else
        return of(new HttpResponse({ status: 200 }))
    }

    function getOrders() {
      if (request.headers.get('Authorization') === 'Bearer ' + token)
        return of(new HttpResponse({
          status: 200,
          body: [1, 2, 3]
        }))
      else
        return of(new HttpResponse({ status: 401 }))
    }

  }
}
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { environment } from '../../../environments/environment';
import { mockRandomValues } from '../services/mockRandomValues';
import { mockFixedValues } from '../services/mockFixedValues';

@Injectable({
    providedIn: 'root'
})
export class HttpRequestInterceptorMock implements HttpInterceptor {
    constructor() {}

    intercept(request: HttpRequest<any>, next: HttpHandler):
              Observable<HttpEvent<any>> {
        if (request.url && request.url.indexOf(`${environment.apiUrl}/randomValues`) > -1) {
            return of(new HttpResponse({ status: 200, body: mockRandomValues }));
        } else if (request.url && request.url.indexOf(`${environment.apiUrl}/fixedValues`) > -1) {
            return of(new HttpResponse({ status: 200, body: mockFixedValues }));
        }

        return next.handle(request);
    }
}

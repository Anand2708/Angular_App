import { AuthService } from './auth/services/auth.service';
import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { CommonService } from './shared/services/common.service';

@Injectable()
export class HttpAuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService,private commonService: CommonService ) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


        let token = this.authService.token ? this.authService.token : null;
        if (token) {
            request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
        }
        if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }
        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {

                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                console.error(error.message);
                this.commonService.hideSpinner()
                return throwError(error);
            }));
    }
}

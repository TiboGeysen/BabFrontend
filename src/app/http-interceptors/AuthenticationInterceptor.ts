import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { AuthenticationService } from '../user/authentication.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InjectableAnimationEngine } from '@angular/platform-browser/animations/src/providers';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

    constructor(private authService: AuthenticationService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.authService.token.length) {
            const clonedRequest = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${this.authService.token}`)
            });
            return next.handle(clonedRequest);
        }
        return next.handle(req);
    }
}

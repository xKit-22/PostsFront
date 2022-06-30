import { Injectable } from '@angular/core'
import {
   HttpRequest,
   HttpHandler,
   HttpEvent,
   HttpInterceptor,
} from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
   constructor() {}

   intercept(
      request: HttpRequest<any>,
      next: HttpHandler
   ): Observable<HttpEvent<any>> {
      console.log(1)
      const token = localStorage.getItem('token')
      if (token) {
         request = request.clone({
            setHeaders: { 'x-access-token': token },
         })
      }

      return next.handle(request)
   }
}

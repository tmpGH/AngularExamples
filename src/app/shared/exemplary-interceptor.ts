import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { of, Observable } from 'rxjs';

export class ExemplaryInterceptor implements HttpInterceptor {

  private message = 'Interceptor has handled http message';

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.LogUsage();
    //return of(null);
    return next.handle(req);
  }

  private LogUsage() {
    console.log(this.message);
  }
}

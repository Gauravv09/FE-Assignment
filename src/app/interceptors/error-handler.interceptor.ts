
import { Injectable } from '@angular/core';
import {
  HttpInterceptorFn,
  HttpRequest,
  HttpHandlerFn,
  HttpErrorResponse
} from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn) => {
  const router = inject(Router);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401 || error.status === 403) {
        router.navigate(['/auth-timeout']);
      } else if (error.status === 503) {
        router.navigate(['/service-unavailable']);
      } else {
        console.error('Unhandled error:', error.status, error.message);
      }
      return throwError(() => error);
    })
  );
};


import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { errorInterceptor } from './app/interceptors/error-handler.interceptor';
import { LoadingInterceptor } from './app/interceptors/loading.interceptor';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';


bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(
      withInterceptors([
        errorInterceptor,
        LoadingInterceptor
      ])
    ),
    provideRouter(routes)
  ]
});

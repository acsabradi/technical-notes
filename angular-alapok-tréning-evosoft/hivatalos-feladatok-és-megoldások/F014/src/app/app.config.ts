import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { todoReducer } from './todo/store/todo.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideStore({}), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })]
};

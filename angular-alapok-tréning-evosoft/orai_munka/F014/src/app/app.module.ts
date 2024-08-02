import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule, provideStore } from '@ngrx/store';
import { appEffects, appStore } from './store/store';
import { provideEffects } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule
  ],
  providers: [
    provideStore(appStore),
 //   provideEffects(appEffects)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

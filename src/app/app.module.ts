import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthService } from './auth/login/auth.service';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './shared/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    // LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    AuthService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

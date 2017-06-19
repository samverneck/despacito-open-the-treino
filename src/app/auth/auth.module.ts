import { AppModule } from './../app.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    // LoginComponent,
  ],
  declarations: [LoginComponent, AuthComponent]
})

// @NgModule({
//   imports: [
//     AppModule,
//   ],
// })
export class AuthModule { }

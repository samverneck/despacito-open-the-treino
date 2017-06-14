import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// SOLUÇÃO

// // import { LoginComponent } from './auth/login/login.component';
// //import { BrowserModule } from '@angular/platform-browser';
// //import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';

// import { AuthService } from './auth/login/auth.service';
// import { LoginComponent } from './auth/login/login.component';
// import { FormsModule } from '@angular/forms';
// // import { HttpModule } from '@angular/http';

// @NgModule({
//   declarations: [
//     AppComponent,
//     LoginComponent,
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     FormsModule,
//   ],
//   providers: [
//     AuthService,
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

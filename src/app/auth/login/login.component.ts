import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
// export class LoginComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
export class LoginComponent implements OnInit {

  // private usuario: Usuario = new Usuario();

  // constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  fazerLogin() {
    console.log(this.fazerLogin());
  }
}
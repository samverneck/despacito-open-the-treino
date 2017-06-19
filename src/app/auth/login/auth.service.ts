import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  login(email: string, senha: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (email && senha && this.validarEmail(email)) {
        resolve(true)
      }
      reject(false)
    })
  }

  private validarEmail(email: string): boolean {
    // tslint:disable
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // tslint:enable
    return re.test(email);
  }

}

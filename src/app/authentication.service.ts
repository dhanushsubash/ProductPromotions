import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthenticationService {

  result: Observable<boolean>;
  isValidUser: boolean;
  constructor() { }

  getIsValidUser() {
    return this.isValidUser;
  }

  authenticate(userName: string, passWord: string): Observable< boolean > {
    this.result = new Observable<false>();
    this.isValidUser = false;
    if(userName === 'dk' && passWord === 'asD123') {
      this.result = new Observable<true>();
      this.isValidUser = true;
    }

    return this.result;
  }
  
}

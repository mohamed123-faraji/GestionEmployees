import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthentServiceService {

  constructor(public authent:AngularFireAuth) { }

  login(email:string,password:string){
    return new Promise((resolve, reject) =>
    this.authent.auth.signInWithEmailAndPassword(email, password).then(
      (res) => {
        resolve(res);
      },
      (error: { message: string }) => {
        reject(error);
        console.error(error.message);
      }
    )
  );
  }
  getauth()
  {
    return this.authent.authState.map(auth=>auth);
  }
  logout()
  {
    this.authent.auth.signOut();
  }
  register(email:string,password:string){
    return new Promise((resolve, reject) =>
    this.authent.auth.createUserWithEmailAndPassword(email, password).then(
      (res) => {
        resolve(res);
      },
      (error: { message: string }) => {
        reject(error);
        console.error(error.message);
      }
    )
  );
  }
}

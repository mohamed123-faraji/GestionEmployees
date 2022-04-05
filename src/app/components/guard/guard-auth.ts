import { Injectable } from '@angular/core';
import { Router ,CanActivate} from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'
@Injectable()
export class AuthGard implements CanActivate {

  constructor(public afaut:AngularFireAuth,
    public router:Router,
) { }

  
  canActivate():Observable<boolean>
  {
      return this.afaut.authState.map(auth=>{
          if(!auth){this.router.navigate(['/login']);
        return false;}
        else
        return true;
      });
  }
}

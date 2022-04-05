import { Injectable } from '@angular/core';
import { Router ,CanActivate} from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { SettingsService } from 'src/app/services/settings.service';

@Injectable()
export class RegisterGard implements CanActivate {

  constructor(public afaut:AngularFireAuth,
    public router:Router,
    public settingservice:SettingsService
) { }

  
  canActivate():boolean
  {
      if(this.settingservice.getSetting().isregisterOpen)
      {
          return true;
      }
      else{
          this.router.navigate(['/login']);
          return false;
      }
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesModule, FlashMessagesService } from 'flash-messages-angular';
import { AuthentServiceService } from 'src/app/services/authent-service.service';
import { SettingsService } from 'src/app/services/settings.service';

import 'rxjs/add/operator/map'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
islogin:boolean | undefined;
isuserLogin:any;
EnableRegister:boolean | undefined;
  constructor(public authservice:AuthentServiceService,
    public router:Router,
    public flashMessage:FlashMessagesService,
    public setttingservice:SettingsService) { }
   

  ngOnInit(): void {
    this.authservice.getauth().subscribe(auth=>{
      if(auth){
        this.islogin=true;
        this.isuserLogin=auth.email;
      }
      else this.islogin=false;
    });
    this.EnableRegister=this.setttingservice.getSetting().isregisterOpen;
  }
  logOut(){
    this.authservice.logout();
    this.flashMessage.show("You are logged out",{cssClass:'alert-success',timeout:6000});
    this.router.navigate(['/login']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesModule, FlashMessagesService } from 'flash-messages-angular';
import { AuthentServiceService } from 'src/app/services/authent-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
email:string="";
password:string="";
  constructor(
    public authservice:AuthentServiceService,
    public router:Router,
    public flashMessage:FlashMessagesService
  ) { }

  ngOnInit(): void {
  }
mysbmit()
{
  this.authservice.login(this.email,this.password).then((res:any)=>{
    this.flashMessage.show("You are logged in",{cssClass:'alert-success',timeout:6000});
    this.router.navigate(['/']);
  }).catch((err:any)=>{
    this.flashMessage.show(err.message,{cssClass:'alert-danger',timeout:6000});
    this.router.navigate(['/login']); 
});

}
}
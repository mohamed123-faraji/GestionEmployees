import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesModule, FlashMessagesService } from 'flash-messages-angular';
import { AuthentServiceService } from 'src/app/services/authent-service.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
email:string="";
password:string="";
  constructor(  public authservice:AuthentServiceService,
    public router:Router,
    public flashMessage:FlashMessagesService) { }

  ngOnInit(): void {
  }
  mysbmit()
  {
    this.authservice.register(this.email,this.password).then((res:any)=>{
      this.flashMessage.show("register successfuly",{cssClass:'alert-success',timeout:6000});
      this.router.navigate(['/']);
    }).catch((err:any)=>{
      this.flashMessage.show(err.message,{cssClass:'alert-danger',timeout:6000});
      this.router.navigate(['/inscription']); 
  });
  
  }
}

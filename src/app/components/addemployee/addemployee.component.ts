import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'flash-messages-angular';
import { concat } from 'rxjs';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.scss']
})
export class AddemployeeComponent implements OnInit {
  employee:Employee={
    firstName:"",
    lastName:"",
    email:"",
    country:"",
    city:"",
    phone:0,
    salair:0,
    userName:"",


  };
  disableedsalar:boolean=true;
  constructor(public flashMssage:FlashMessagesService,
    public router:Router,
    public empservice:EmployeeService,
    public settingservice:SettingsService) { }
 

  ngOnInit(): void {
    this.disableedsalar=this.settingservice.getSetting().disableedsalar;
  }

  mysbmit(f:NgForm){
    if(this.disableedsalar){
     f.value.salair=0;
    }
      if (!f.valid) {
         this.flashMssage.show("please write correct infos",{cssClass:'alert-danger',timeout:6000});
          this.router.navigate(['add-employee']);
        
      }
      else {
        this.empservice.addEmployee(f.value);
        this.flashMssage.show("a new employee is added successfully",{cssClass:'alert-success',timeout:6000});
        this.router.navigate(['/']);
      }
    }
  


}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { FlashMessagesModule, FlashMessagesService } from 'flash-messages-angular';
import { Observable } from 'rxjs';
import {map } from 'rxjs/operators';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { SettingsService } from 'src/app/services/settings.service';
@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.scss']
})
export class EditemployeeComponent implements OnInit {
id:string="";
employee:Employee={
  userName:"",
  firstName:"",
  lastName:"",
  country:"",
  city:"",
  email:"",
  phone:0,
  salair:0
};
disableedsalaredit:boolean=false;
  constructor(public empservice:EmployeeService,
    public router:Router,
    public activitrouter:ActivatedRoute,
    public flashMessage:FlashMessagesService,
    public setttingservice:SettingsService) { }
  

  ngOnInit(): void {
    this.id=this.activitrouter.snapshot.params['id'];
    this.empservice.getEmployee(this.id).valueChanges().subscribe((action:any) => {
     this.employee=action;
    });
    this.disableedsalaredit=this.setttingservice.getSetting().isSalaryEditable;
  }
    mysbmit(f:NgForm){
      
        if (!f.valid) {
           this.flashMessage.show("please write correct infos",{cssClass:'alert-danger',timeout:6000});
            this.router.navigate(['edit-employee/'+this.id]);
          
        }
        else {
          this.empservice.updatEmployee(this.id,f.value);
          this.flashMessage.show("update employee successfully",{cssClass:'alert-success',timeout:6000});
          this.router.navigate(['employee/'+this.id]);
        }
  }

}

import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { FlashMessagesModule, FlashMessagesService } from 'flash-messages-angular';
import { Observable } from 'rxjs';
import {map } from 'rxjs/operators';
import { EmployeeService } from 'src/app/services/employee.service';

import {Employee} from '../../employee';
@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.scss']
})
export class EmployeeInfoComponent implements OnInit {
id:string="";
employee:Employee={};
issalary:boolean=false;
updatesalary:boolean=false;
showupdatesalary:boolean=false;

  constructor(public empservice:EmployeeService,
    public router:Router,
    public activitrouter:ActivatedRoute,
    public flashMessage:FlashMessagesService) {}

  ngOnInit(): void {
   this.id=this.activitrouter.snapshot.params['id'];
   this.empservice.getEmployee(this.id).valueChanges().subscribe((action:any) => {
     if(action.salair>0){this.issalary=true;}
    this.employee=action;
   });
  }
delete(id:string){
  if(confirm("Are you sure de delete employee!(")){
    this.empservice.deleteEmp(this.id);
    this.flashMessage.show("delete employee successflly!",{cssClass:'alert-success',timeout:6000});
    this.router.navigate(['/'+this.id]);
  }
}
updataesalaryinput(id:string){
  this.empservice.updatEmployee(this.id,this.employee);
  this.flashMessage.show("update salary successflly!",{cssClass:'alert-success',timeout:6000});
  this.router.navigate(['/emplpyee/'+this.id]);
}
}

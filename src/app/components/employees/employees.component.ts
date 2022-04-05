import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { EmployeeService } from 'src/app/services/employee.service';

import {Employee} from '../../employee';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  Allemp!:any[];
  totalemp: number =0;
  
  // products!: { title: string; }[] | any;
  totalsalarysum:number | undefined;
  constructor(public emp:EmployeeService) { 
     this.emp.getAll().subscribe(products => {
      this.Allemp = products; 
  
      this.getEmployeeinf();
    });
    
  }
  
  
  
  ngOnInit() {
  
//   this.emp.getEmployees().valueChanges().subscribe((data)=>{
//  this.Allemp=data;
// this.getEmployees();
//    });
  
  }
   getEmployeeinf(){
   
 let totalsalair:number=0;
 let total=0;
 for (let index = 0; index < this.Allemp.length; index++) {
 totalsalair += this.Allemp[index].data.salair;
 total += 1;
   
 }
 this.totalsalarysum=totalsalair;
 this.totalemp=total;

  }
}
  

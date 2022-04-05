import { Injectable } from '@angular/core';
 import { AngularFireDatabase, AngularFireList,AngularFireObject } from 'angularfire2/database';
 import { map } from 'rxjs/operators';

import { Observable } from 'rxjs';
import { Employee } from '../employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
employees:AngularFireList<any> ;

employee:AngularFireObject<any>| undefined;
  constructor(private af:AngularFireDatabase) {
     this.employees=this.af.list('/employees/employees') ;
    
   }
   //recupere les donnes de base de donnes valeur et key
   getAll()
   {
    //  this.employees = this.af.list('/employees/employees');
 return this.af.list('/employees/employees').snapshotChanges().pipe(map((action:any) => {
      return action.map((a:any) => {
        const key = a.payload.key;
        const data = a.payload.val();
        return {data, key};
      })
    }));
   }
 
   getEmployee(id:string)
   {
 this.employee = this.af.object('/employees/employees/'+id) ;
 return this.employee;
   }
   updatEmployee(id:string,employee:Employee){
   return this.employees.update(id,employee);
   }
   addEmployee(employee:Employee){
     return this.employees.push(employee);
}
deleteEmp(id:string)
{
  return this.employees.remove(id);
}

}
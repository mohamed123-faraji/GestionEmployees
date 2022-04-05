import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule ,Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule,NgForm,ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule, FirebaseApp, FirebaseNameOrConfigToken, FirebaseOptionsToken } from "angularfire2";
import { AngularFireDatabase } from 'angularfire2/database';
// import { AngularFirestoreModule, FirestoreSettingsToken } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { FlashMessagesModule } from 'node_modules/flash-messages-angular';

import { AppComponent } from './app.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { EmployeeInfoComponent } from './components/employee-info/employee-info.component';
import { AddemployeeComponent } from './components/addemployee/addemployee.component';
import { EditemployeeComponent } from './components/editemployee/editemployee.component';
import { DeleteemployeeComponent } from './components/deleteemployee/deleteemployee.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidbarComponent } from './components/sidbar/sidbar.component';
import { LoginComponent } from './components/login/login.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { SettingComponent } from './components/setting/setting.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EmployeeService } from './services/employee.service';
import { environment } from 'src/environments/environment';
import { initializeApp } from "firebase/app";
import { EmployeesComponent } from './components/employees/employees.component';
import { AuthentServiceService } from './services/authent-service.service';
import { AuthGard } from './components/guard/guard-auth';
import { SettingsService } from './services/settings.service';
import { RegisterGard } from './components/guard/gaurd-setting';


export const firebaseConfig = {
 
    apiKey: "AIzaSyAJ57eYb3DLgp_13h5aDk9Mei5Ap0yk2bY",
    authDomain: "employesmanagement1.firebaseapp.com",
    projectId: "employesmanagement1",
    storageBucket: "employesmanagement1.appspot.com",
    messagingSenderId: "277831694644",
    appId: "1:277831694644:web:89771dd5f561396f3f4d61",
    measurementId: "G-EX78PH4NY2"
  
};


const appRoute:Routes=[
  {path:'',component:DashbordComponent,canActivate:[AuthGard]},
  {path:'login',component:LoginComponent},
  {path:'inscription',component:InscriptionComponent,canActivate:[RegisterGard]},
  {path:'employee/:id',component:EmployeeInfoComponent,canActivate:[AuthGard]},
  {path:'add-employee',component:AddemployeeComponent,canActivate:[AuthGard]},
  {path:'edit-employee/:id',component:EditemployeeComponent,canActivate:[AuthGard]},
  {path:'settings',component:SettingComponent,canActivate:[AuthGard]},
  {path:'**',component:PageNotFoundComponent}

  ];

@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    EmployeeInfoComponent,
    AddemployeeComponent,
    EditemployeeComponent,
    DeleteemployeeComponent,
    NavbarComponent,
    SidbarComponent,
    EmployeesComponent,
    LoginComponent,
    InscriptionComponent,
    SettingComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    FlashMessagesModule.forRoot()
    
  ],
  providers: [
    AngularFireAuth, 
    AngularFireDatabase,
    AuthentServiceService ,
    EmployeeService,
    AuthGard,
    SettingsService,
    RegisterGard
    
   

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'flash-messages-angular';
import { SettingsService } from 'src/app/services/settings.service';
import { settings } from '../../settings';


@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
setting:settings={
  isregisterOpen:true,
    disableedsalar:true,
    isSalaryEditable:true
};
  constructor(public router:Router,
    public flashMessage:FlashMessagesService,
    public setttingservice:SettingsService) { }

  ngOnInit(): void {
    this.setting=this.setttingservice.getSetting();
  }
  mysbmit(fo:NgForm){
    this.setting.disableedsalar=fo.value.disableedsalar;
    this.setting.isSalaryEditable=fo.value.isSalaryEditable;
    this.setting.isregisterOpen=fo.value.disableedsalar;
this.setttingservice.setSetting(this.setting);
    this.flashMessage.show("saved new settings successuffly",{cssClass:'alert-success',timeout:6000});
     this.router.navigate(['/settings']);
  }
}

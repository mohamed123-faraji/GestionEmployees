import { Injectable } from '@angular/core';
import { settings } from '../settings';
@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  settings:settings={
    isregisterOpen:true,
    disableedsalar:true,
    isSalaryEditable:true
  }
  constructor() { }
  getSetting()
{
  return this.settings;
}
setSetting(setting:settings)
{
   this.settings.disableedsalar=setting.disableedsalar;
   this.settings.isSalaryEditable=setting.isSalaryEditable;
   this.settings.isregisterOpen=setting.isregisterOpen;
   
}
}

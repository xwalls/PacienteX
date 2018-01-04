import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HelpListPage } from './help-list';

@NgModule({
  declarations: [
    HelpListPage,
  ],
  imports: [
    IonicPageModule.forChild(HelpListPage),
  ],
})
export class HelpListPageModule {}

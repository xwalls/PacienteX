import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsultationDetailsPage } from './consultation-details';

@NgModule({
  declarations: [
    ConsultationDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsultationDetailsPage),
  ],
})
export class ConsultationDetailsPageModule {}

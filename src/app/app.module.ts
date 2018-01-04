import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TestPage } from '../pages/test/test';
import { HelpListPage } from '../pages/help-list/help-list';
import { ConsultationDetailsPage } from '../pages/consultation-details/consultation-details';
import { HelpTextPage } from '../pages/help-text/help-text';
import { HelpServiceProvider } from '../providers/help-service/help-service';

import { ModalTestPage } from '../pages/modal-test/modal-test';
import { ModalPage } from '../pages/modal/modal';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TestPage,
    ConsultationDetailsPage,
    HelpListPage,
    HelpTextPage,
    ModalTestPage,
    ModalPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TestPage,
    ConsultationDetailsPage,
    HelpListPage,
    HelpTextPage,
    ModalTestPage,
    ModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HelpServiceProvider
  ]
})
export class AppModule {}

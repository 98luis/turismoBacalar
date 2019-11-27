import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

export const firebase = {
  apiKey: 'AIzaSyBAU4WxF6DZUZwLHeVVcELSzzzVI8YzqKE',
  authDomain: 'turismobacalar-c599d.firebaseapp.com',
  databaseURL: 'https://turismobacalar-c599d.firebaseio.com',
  projectId: 'turismobacalar-c599d',
  storageBucket: 'turismobacalar-c599d.appspot.com',
  messagingSenderId: '435258259847',
  appId: '1:435258259847:web:d8e848e63f8d15791bbb22'
};
// import { firebase } from '../environments/environment';
// import * as firebase from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';

// Uso de la camara plugin
import {Camera} from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  AngularFireModule.initializeApp(firebase, 'turismobacalar'),
  AngularFireAuthModule,
  AngularFirestoreModule
],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    WebView,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

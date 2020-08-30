import {NgModule} from '@angular/core';

import {AppComponent} from './component/app/app.component';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavigationComponent} from './component/navigation/navigation.component';
import {CoreModule} from './module/core/core.module';
import {AppRoutingModule} from './module/routing/app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


/* Add Amplify imports */
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import Amplify from 'aws-amplify';
import {Theorie01Module} from './module/theorie-01/theorie01.module';
import {AWS_MOBILE} from '../aws-exports';

/* Configure Amplify resources */
Amplify.configure(AWS_MOBILE);

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
  ],
  imports: [
    CoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    AmplifyUIAngularModule,
    AppRoutingModule,
    Theorie01Module,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

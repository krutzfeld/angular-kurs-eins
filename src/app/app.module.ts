import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UebungEinsModule} from './module/uebung-eins/uebung-eins.module';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavigationComponent } from './component/navigation/navigation.component';
import {CoreModule} from './module/core/core.module';
import {AppRoutingModule} from './module/routing/app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
    ],
    imports: [
        CoreModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        UebungEinsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

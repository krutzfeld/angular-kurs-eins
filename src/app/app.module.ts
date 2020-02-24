import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UebungEinsModule} from './uebung-eins/uebung-eins.module';
import {CoreModule} from './core/core.module';
import {AppRoutingModule} from './routing/app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
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

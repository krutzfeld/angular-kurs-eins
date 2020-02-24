import {NgModule} from '@angular/core';
import {UebungEinsComponent} from './component/uebung-eins.component';
import {UeEinsRoutingModule} from './routing/ue-eins-routing.module';
import {CoreModule} from '../core/core.module';

@NgModule(
    {
        declarations: [
            UebungEinsComponent
        ],
        imports: [
            CoreModule,
            UeEinsRoutingModule
        ],
        providers: [],
    }
)
export class UebungEinsModule{

}

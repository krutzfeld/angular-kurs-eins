import {NgModule} from '@angular/core';
import {UebungEinsComponent} from './component/uebung-eins.component';
import {UeEinsRoutingModule} from './routing/ue-eins-routing.module';
import {CoreModule} from '../core/core.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {UebungEinsHilfeComponent} from './uebung-eins-hilfe/uebung-eins-hilfe.component';

@NgModule(
    {
        declarations: [
            UebungEinsComponent,
            UebungEinsHilfeComponent
        ],
        imports: [
            CoreModule,
            UeEinsRoutingModule,
            NgbModule
        ],
        providers: [],
    }
)
export class UebungEinsModule{

}

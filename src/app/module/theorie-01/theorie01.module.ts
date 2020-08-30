import {NgModule} from '@angular/core';
import {VariablenLektionComponent} from './component/variablen-lektion.component';
import {CoreModule} from '../core/core.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Theory01RoutingModule} from './routing/theorie-01-routing.module';

@NgModule(
    {
        declarations: [
            VariablenLektionComponent
        ],
        imports: [
            CoreModule,
            Theory01RoutingModule,
            NgbModule
        ],
        providers: [],
    }
)
export class Theorie01Module{

}

import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {THEORIE_01_ROUTES} from './theorie-01.constant';

@NgModule({
    imports: [
        RouterModule.forChild(THEORIE_01_ROUTES)
    ],
    exports: [RouterModule]
})
export class Theory01RoutingModule {
}

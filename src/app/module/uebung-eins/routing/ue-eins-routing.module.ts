import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {UE_EINS_ROUTES} from './ue-eins.constant';

@NgModule({
    imports: [
        RouterModule.forChild(UE_EINS_ROUTES)
    ],
    exports: [RouterModule]
})
export class UeEinsRoutingModule {
}

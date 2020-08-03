import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {START_WITH_JAVASCRIPT_ROUTES} from './start-with-javascript-routes.constant';

@NgModule({
    imports: [
        RouterModule.forChild(START_WITH_JAVASCRIPT_ROUTES)
    ],
    exports: [RouterModule]
})
export class StartWithJavascriptRoutingModule {
}

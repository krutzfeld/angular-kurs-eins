import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {APP_ROUTES} from './app-routes.constant';


@NgModule({
    imports: [
        RouterModule.forRoot(APP_ROUTES)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

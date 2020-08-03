import {Routes} from '@angular/router';

export const APP_ROUTES: Routes = [
    {
        path: 'uebung-eins',
        loadChildren: () => import('../uebung-eins/uebung-eins.module').then(m => m.UebungEinsModule)
    },
    {
        path: 'start-with-js-course',
        loadChildren: () => import('../start-with-javascript/start-with-javascript.module').then(m => m.StartWithJavascriptModule)
    }
];

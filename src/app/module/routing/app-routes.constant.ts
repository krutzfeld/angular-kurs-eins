import {Routes} from '@angular/router';

export const APP_ROUTES: Routes = [
    {
        path: 'uebung-eins',
        loadChildren: () => import('../uebung-eins/uebung-eins.module').then(m => m.UebungEinsModule)
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    }
];

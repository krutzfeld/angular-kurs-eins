import {Routes} from '@angular/router';

export const APP_ROUTES: Routes = [
    {
        path: 'theorie-01',
        loadChildren: () => import('../theorie-01/theorie01.module').then(m => m.Theorie01Module)
    },
    {
        path: '',
        redirectTo: 'theorie-01',
        pathMatch: 'full'
    }
];

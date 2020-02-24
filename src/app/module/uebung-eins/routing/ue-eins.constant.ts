import {Routes} from '@angular/router';
import {UebungEinsComponent} from '../component/uebung-eins.component';
import {UebungEinsHilfeComponent} from '../uebung-eins-hilfe/uebung-eins-hilfe.component';

export const UE_EINS_ROUTES: Routes = [
    {
        path: '',
        component: UebungEinsComponent
    },
    {
        path: 'hilfe',
        component: UebungEinsHilfeComponent
    }
];

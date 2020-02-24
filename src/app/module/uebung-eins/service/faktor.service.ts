import {Injectable} from '@angular/core';
import {uebungEins} from '../../../../uebung/uebung-eins';

@Injectable({
    providedIn: 'root'
})
export class FaktorService {

    constructor() {
    }

    berechneProdukt(faktor1: number, faktor2: number, eingabeProdukt: number): boolean {
        return uebungEins(faktor1, faktor2, eingabeProdukt);
    }

}

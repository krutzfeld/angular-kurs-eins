import {Component, OnInit} from '@angular/core';
import {FaktorService} from './faktor.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styles: []
})
export class AppComponent implements OnInit {
    faktor1: number;
    faktor2: number;
    produktEingabe: number;
    isCorrect: boolean;

    constructor(private faktor: FaktorService, private _snackBar: MatSnackBar) {

    }

    ngOnInit(): void {
        this.faktor1 = Math.floor(Math.random() * 10);
        this.faktor2 = Math.floor(Math.random() * 10);
    }

    onSubmit() {
        this.isCorrect = this.faktor.berechneProdukt(this.faktor1, this.faktor2, this.produktEingabe);
        this.handleCorrect(this.isCorrect);
    }

    openSnackBar(message: string) {
        this._snackBar.open(message, null, {
            duration: 2000,
        });
    }

    private handleCorrect(isCorrect: boolean) {
        let msg;
        if (isCorrect) {
            msg = 'Das ist korrekt';
        } else {
            msg = 'Das ist falsch';
        }
        this.openSnackBar(msg);
    }
}

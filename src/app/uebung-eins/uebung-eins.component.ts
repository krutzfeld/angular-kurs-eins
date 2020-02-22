import { Component, OnInit } from '@angular/core';
import {FaktorService} from '../faktor.service';

@Component({
  selector: 'app-uebung-eins',
  templateUrl: './uebung-eins.component.html',
  styleUrls: ['./uebung-eins.component.css']
})
export class UebungEinsComponent implements OnInit {

  faktor1: number;
  faktor2: number;
  produktEingabe: number;
  isCorrect: boolean;

  constructor(private faktor: FaktorService) {

  }

  ngOnInit(): void {
    this.faktor1 = Math.floor(Math.random() * 10);
    this.faktor2 = Math.floor(Math.random() * 10);
  }

  onSubmit() {
    this.isCorrect = this.faktor.berechneProdukt(this.faktor1, this.faktor2, this.produktEingabe);
    this.handleCorrect(this.isCorrect);
  }


  private handleCorrect(isCorrect: boolean) {
    let msg;
    if (isCorrect) {
      msg = 'Das ist korrekt';
    } else {
      msg = 'Das ist falsch';
    }
  }

}

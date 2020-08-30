import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-variablen-eins',
  templateUrl: './variablen-lektion.component.html',
  styleUrls: ['./variablen-lektion.component.css']
})
export class VariablenLektionComponent implements OnInit {

  faktor1: number;
  faktor2: number;
  produktEingabe: number;
  isCorrect: boolean;

  constructor() {

  }

  ngOnInit(): void {
    this.initialize();
  }

  onSubmit() {
  }

  public initialize() {
    this.isCorrect = null;
    this.faktor1 = Math.floor(Math.random() * 10) + 1;
    this.faktor2 = Math.floor(Math.random() * 10) + 1;
  }
}

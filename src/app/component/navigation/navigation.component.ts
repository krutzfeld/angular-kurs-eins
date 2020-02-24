import { Component, OnInit } from '@angular/core';
import {Route, Routes} from '@angular/router';
import {UE_EINS_ROUTES} from '../../module/uebung-eins/routing/ue-eins.constant';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  navItems: Route[] = UE_EINS_ROUTES;

  ngOnInit(): void {
  }

}

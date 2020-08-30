import {Component, OnInit} from '@angular/core';
import {Route} from '@angular/router';
import {THEORIE_01_ROUTES} from '../../module/theorie-01/routing/theorie-01.constant';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  navItems: Route[] = THEORIE_01_ROUTES;

  ngOnInit(): void {
  }

}

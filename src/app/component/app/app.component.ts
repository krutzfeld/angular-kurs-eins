import {Component, OnInit} from '@angular/core';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './../../../aws-exports';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styles: []
})
export class AppComponent implements OnInit {
    ngOnInit(): void {
      Amplify.configure(awsconfig);
    }
}

import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    NgbModule
  ]
})
export class CoreModule {
}

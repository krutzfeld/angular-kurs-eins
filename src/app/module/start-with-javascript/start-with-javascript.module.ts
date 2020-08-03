import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseEntryComponent } from './course-entry/course-entry.component';
import {StartWithJavascriptRoutingModule} from './routing/start-with-javascript-routing.module';

@NgModule({
  declarations: [CourseEntryComponent],
  imports: [
    CommonModule,
    StartWithJavascriptRoutingModule
  ]
})
export class StartWithJavascriptModule { }

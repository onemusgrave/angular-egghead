import { NgModule } from '@angular/core';
import { WidgetOne } from './widgets-one.component';
import { WidgetTwo } from './widgets-two.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports:[CommonModule],
  declarations:[WidgetOne, WidgetTwo],
  exports:[WidgetOne, WidgetTwo, CommonModule]
})
export class WidgetsModule{}
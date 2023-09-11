import { NgModule } from '@angular/core';
import { GhibliUiComponent } from './ghibli-ui.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [
    GhibliUiComponent,
    ButtonComponent
  ],
  imports: [
  ],
  exports: [
    GhibliUiComponent
  ]
})
export class GhibliUiModule { }

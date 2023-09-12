import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ButtonComponent, NavbarComponent],
  exports: [ButtonComponent, NavbarComponent],
})
export class UiLibModule {}

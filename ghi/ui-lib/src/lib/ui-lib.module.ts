import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ButtonComponent, NavbarComponent, FooterComponent],
  exports: [ButtonComponent, NavbarComponent],
})
export class UiLibModule {}

import { Component, Input } from '@angular/core';

const getVariants = (...args: string[]) => ['navbar', ...args].filter(Boolean);

@Component({
  selector: 'ghi-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Input()
  type: 'default' | 'secondary' | 'third' = 'default';

  public get navbar(): string[] {
    return getVariants('navbar', this.type);
  }
}

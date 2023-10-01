import { Component, Input } from '@angular/core';

const getVariants = (...args: string[]) => ['footer', ...args].filter(Boolean);

@Component({
  selector: 'ghi-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  @Input()
  type: 'default' | 'secondary' | 'third' = 'default';

  public get navbar(): string[] {
    return getVariants('footer', this.type);
  }
}

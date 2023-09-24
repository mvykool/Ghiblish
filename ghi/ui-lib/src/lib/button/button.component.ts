import { Component, Input } from '@angular/core';

const getStyles = (...args: string[]) => ['button', ...args].filter(Boolean);

@Component({
  selector: 'ghi-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input()
  textArea: string = '';

  @Input()
  type: 'primary' | 'secondary' | 'third' | 'fourth' = 'primary';

  @Input()
  size: 'regular' | 'big' | 'small' = 'regular';

  public get classes(): string[] {
    return getStyles('button', this.type, this.size);
  }
}

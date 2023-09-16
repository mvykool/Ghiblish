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
  type: 'primary' | 'secondary' | 'third' = 'primary';

  public get classes(): string[] {
    return getStyles(this.type);
  }
}

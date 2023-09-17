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


  @Input()
  size: 'default' | 'big' | 'small' = 'default';


public get classes(): string[] {
  const typeClass = this.type ? `type-${this.type}` : ''; // Add a class based on the 'type' property
  const sizeClass = this.size ? `size-${this.size}` : ''; // Add a class based on the 'size' property
  return [typeClass, sizeClass];
}

};

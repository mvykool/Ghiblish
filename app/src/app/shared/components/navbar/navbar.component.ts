import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgFor],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() links: string[] = [''];
  @Output() linkClicked = new EventEmitter<string>();

  onLinkClick(link: string): void {
    this.linkClicked.emit(link);
  }
}

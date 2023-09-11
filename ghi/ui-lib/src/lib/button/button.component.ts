import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ghi-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input('text') text: string = ''


  ngOnInit(): void {}
}

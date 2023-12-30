import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './services/api-service.service';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { BannerComponent } from './shared/components/banner/banner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, RouterOutlet, HttpClientModule, NavbarComponent, BannerComponent]
})
export class AppComponent implements OnInit {
  title = 'app';
  navLinks = ['home', 'contact', 'about us', 'settings'];
  bgImage = 'https://i.pinimg.com/originals/30/21/d8/3021d8083f73885b573df97483de918d.jpg';
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getData().subscribe(data => {
      console.log(data);
    })
  }
}

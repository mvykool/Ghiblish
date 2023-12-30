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
  bgImage = 'https://wallpapercosmos.com/w/full/2/a/b/1198591-3840x2160-desktop-4k-studio-ghibli-background-photo.jpg';
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getData().subscribe(data => {
      console.log(data);
    })
  }
}

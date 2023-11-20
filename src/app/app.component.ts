import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './sharedcompoents/navbar/navbar.component';
import { HomeComponent } from './sharedcompoents/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { EgyptComponent } from './sharedcompoents/Egypt/egypt/egypt.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,NavbarComponent,HomeComponent, RouterLink, RouterLinkActive,HttpClientModule,EgyptComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sameh';
}

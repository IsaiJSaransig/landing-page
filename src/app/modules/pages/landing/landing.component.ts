import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ContentComponent } from '../../components/content/content.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [HeaderComponent, ContentComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}

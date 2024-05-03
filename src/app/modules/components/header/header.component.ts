import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    const hamburgerMenu = this.elementRef.nativeElement.querySelector('.hamburger-menu');
    hamburgerMenu.addEventListener('click', () => {
      hamburgerMenu.classList.toggle('active');
    });
  }
}

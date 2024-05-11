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

  ngOnInit(): void {
    this.toggleNav();
  }

  toggleNav() {
    const nav = this.elementRef.nativeElement.querySelector('nav');
    nav.style.display = nav.style.display === 'none' ? 'block' : 'none';
  }

  closeNav() {
    const nav = this.elementRef.nativeElement.querySelector('nav');
    nav.style.display = 'none';
  }
}

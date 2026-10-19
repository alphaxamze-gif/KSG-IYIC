import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  protected readonly menuOpen = signal(false);

  protected readonly navItems = [
    { label: 'Home', path: '/' },
    { label: 'About us', path: '/about-us' },
    { label: 'Programs', path: '/youth-skills-programs' },
    { label: 'Youth spaces', path: '/ksg-iyic-hub-youth-spaces' },
    { label: 'Gallery', path: '/ksg-iyic-gallery' },
    { label: 'Volunteer', path: '/become-a-volunteer' },
    { label: 'Contact', path: '/contact-us' },
  ];

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }
}

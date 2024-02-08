// navbar.component.spec.ts

import { TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {

  let component: NavbarComponent;

  beforeEach(() => {
    component = new NavbarComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy(); 
  });
  
  
  it('should have navbar-brand with correct text', () => {
    const fixture = TestBed.createComponent(NavbarComponent);
    fixture.detectChanges();
    const brand = fixture.nativeElement.querySelector('.navbar-brand');
    expect(brand.textContent).toContain('RepoHunt');
  });

  it('should have bg-gray-900 class', () => {
    const fixture = TestBed.createComponent(NavbarComponent);
    fixture.detectChanges();
    const navbar = fixture.nativeElement.querySelector('nav');
    expect(navbar.classList).toContain('bg-gray-900');
  });

});
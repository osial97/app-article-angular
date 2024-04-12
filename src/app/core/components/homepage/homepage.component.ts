import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  setCategory(cat: string) {
    localStorage.setItem('articleCategory', cat);
  }
}

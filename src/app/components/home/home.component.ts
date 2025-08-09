import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(public router: Router) { }
  handleClick(val: string) {
    if (val == 'clockBack') {
      this.router.navigate(['/clock']);
    }
    if (val == 'Admin') {
      this.router.navigate(['/login']);
    }
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListUserComponent } from './components/list-user/list-user.component';
import { AddUserComponent } from './components/add-user/add-user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListUserComponent, AddUserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'list-user';
  
}

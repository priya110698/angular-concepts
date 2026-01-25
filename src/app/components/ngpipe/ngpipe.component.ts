import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { maskPhone } from '../../pipes/maskPhone';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-ngpipe',
  standalone: true,
  imports: [CommonModule, maskPhone, HttpClientModule],
  templateUrl: './ngpipe.component.html',
  styleUrl: './ngpipe.component.scss'
})
export class NgpipeComponent {

  today = new Date();
  name = "Priyanka deivasikamani";
  users: any;
  data: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.users = this.http.get<any[]>('https://jsonplaceholder.typicode.com/users');

    this.data = interval(1000).pipe(
      tap(value => console.log('Emitted:', value))
    );

    this.data.subscribe();

  }

}

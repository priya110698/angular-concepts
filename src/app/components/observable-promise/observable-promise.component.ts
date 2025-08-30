import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-observable-promise',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './observable-promise.component.html',
  styleUrl: './observable-promise.component.scss'
})
export class ObservablePromiseComponent {
  promise!: Promise<Response>;

  private sub?: Subscription;

  constructor(private http: HttpClient) { }


  ngOnInit() {

    // Promise → Only ONE value (login success response)
    const loginPromise = fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ username: "Priya", password: "1234" })
    }).then(res => res.json());

    loginPromise.then(user => console.log("Logged in user:", user));

  }
}

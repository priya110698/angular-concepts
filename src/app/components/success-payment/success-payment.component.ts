import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-success-payment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './success-payment.component.html',
  styleUrl: './success-payment.component.scss'
})
export class SuccessPaymentComponent {

  amnt = 0;
  payment = false;
  constructor(public activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRouter.queryParams.subscribe((routeData: any) => {
      console.log("routeData", routeData);
      if (routeData) {
        this.payment = routeData['payment'] === '"success"';
        this.amnt = routeData['amnt'];
        console.log(routeData['payment']);
      }
    });
  }

}

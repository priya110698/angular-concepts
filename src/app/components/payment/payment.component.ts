import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare var Razorpay: any;
@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {
  successscreen: boolean = false;
  amount: number = 0;

  constructor() { }

  ngOnInit() {
  }

  payWithRazorpay() {
    this.amount = 50000;
    const options = {
      "key": "rzp_test_1DP5mmOlF5G5ag", // Enter the Key ID generated from the Dashboard
      "amount": this.amount * 100, // Amount is in currency subunits. Default is INR. 50000 = INR 500.
      "currency": "INR",
      "name": "Your Company Name",
      "description": "Test Transaction",
      "image": "https://your-logo-url",
      "order_id": "", // Pass the order ID created on your server if applicable
      "handler": this.paymentSuccessHandler.bind(this),
      "prefill": {
        "name": "Customer Name",
        "email": "customer.email@example.com",
        "contact": "9999999999"
      },
      "theme": {
        "color": "#3399cc"
      }
    };

    const rzp1 = new Razorpay(options);
    rzp1.open();
  }

  // Handle payment success
  paymentSuccessHandler(response: any) {
    console.log(response);
    // Redirect after successful payment - Change this to your desired route
    if (this.amount >= 100000) {
      window.location.href = `/success?payment="success"&amnt=${this.amount}`;
    } else {
      window.location.href = `/success?payment="success"`;
    }
  }

}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {
  @Input() userData: any;
  @Output() backClicked = new EventEmitter<void>();


  constructor() { }
  ngOnInit() {
    console.log("userData", this.userData);
  }

  onBackClick() {
    this.backClicked.emit();
  }
}

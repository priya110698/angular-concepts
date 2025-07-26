import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngpipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngpipe.component.html',
  styleUrl: './ngpipe.component.scss'
})
export class NgpipeComponent {

  today = new Date();

}

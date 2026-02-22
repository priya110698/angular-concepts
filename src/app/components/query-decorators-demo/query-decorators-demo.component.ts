import { Component } from '@angular/core';
import { QueryShellComponent } from '../query-shell/query-shell.component';

@Component({
  selector: 'app-query-decorators-demo',
  standalone: true,
  imports: [QueryShellComponent],
  templateUrl: './query-decorators-demo.component.html',
  styleUrl: './query-decorators-demo.component.scss'
})
export class QueryDecoratorsDemoComponent {}

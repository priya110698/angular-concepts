import { AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-query-shell',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './query-shell.component.html',
  styleUrl: './query-shell.component.scss'
})
export class QueryShellComponent implements AfterViewInit, AfterContentInit {
  @ViewChild('viewInput') viewInput?: ElementRef<HTMLInputElement>;
  @ViewChildren('viewItem') viewItems?: QueryList<ElementRef<HTMLLIElement>>;

  @ContentChild('projectedTitle') projectedTitle?: ElementRef<HTMLElement>;
  @ContentChildren('projectedItem', { descendants: true }) projectedItems?: QueryList<ElementRef<HTMLElement>>;

  summary = {
    viewChild: '',
    viewChildrenCount: 0,
    contentChild: '',
    contentChildrenCount: 0
  };

  ngAfterViewInit(): void {
    this.summary.viewChild = this.viewInput?.nativeElement.value ?? 'Not found';
    this.summary.viewChildrenCount = this.viewItems?.length ?? 0;
  }

  ngAfterContentInit(): void {
    this.summary.contentChild = this.projectedTitle?.nativeElement.textContent?.trim() ?? 'Not found';
    this.summary.contentChildrenCount = this.projectedItems?.length ?? 0;
  }
}

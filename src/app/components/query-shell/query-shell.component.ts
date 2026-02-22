import { AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, Input, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-query-shell',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './query-shell.component.html',
  styleUrl: './query-shell.component.scss'
})
export class QueryShellComponent implements AfterViewInit, AfterContentInit {
  @Input() panelTitle = 'User management workspace';
  @Input() panelDescription = 'Real-world query decorators usage inside an admin screen.';
  @Input() searchPlaceholder = 'Search records';
  @Input() rowActions: string[] = ['View', 'Edit', 'Deactivate'];

  @ViewChild('searchInput') searchInput?: ElementRef<HTMLInputElement>;
  @ViewChildren('rowActionButton') rowActionButtons?: QueryList<ElementRef<HTMLButtonElement>>;

  @ContentChild('bulkActionPrimary') bulkActionPrimary?: ElementRef<HTMLButtonElement>;
  @ContentChildren('quickLink', { descendants: true }) quickLinks?: QueryList<ElementRef<HTMLAnchorElement>>;

  summary = {
    viewChild: '',
    viewChildrenCount: 0,
    contentChild: '',
    contentChildrenCount: 0
  };

  ngAfterViewInit(): void {
    this.summary.viewChild = this.searchInput?.nativeElement.placeholder ?? 'Search input unavailable';
    this.summary.viewChildrenCount = this.rowActionButtons?.length ?? 0;
  }

  ngAfterContentInit(): void {
    this.summary.contentChild = this.bulkActionPrimary?.nativeElement.textContent?.trim() ?? 'Primary bulk action unavailable';
    this.summary.contentChildrenCount = this.quickLinks?.length ?? 0;
  }
}

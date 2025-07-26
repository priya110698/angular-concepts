import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgpipeComponent } from './ngpipe.component';

describe('NgpipeComponent', () => {
  let component: NgpipeComponent;
  let fixture: ComponentFixture<NgpipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgpipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgpipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

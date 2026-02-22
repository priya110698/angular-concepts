import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { UppercaseDirective } from './upper-case.directive';

@Component({
  standalone: true,
  imports: [UppercaseDirective],
  template: '<input appUppercase />'
})
class TestHostComponent {}

describe('UppercaseDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directive = fixture.debugElement.query(By.directive(UppercaseDirective));
    expect(directive).toBeTruthy();
  });

  it('should apply uppercase host binding style', () => {
    const input = fixture.nativeElement.querySelector('input') as HTMLInputElement;
    expect(input.style.textTransform).toBe('uppercase');
  });

  it('should transform input value to uppercase', () => {
    const input = fixture.nativeElement.querySelector('input') as HTMLInputElement;

    input.value = 'john doe';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(input.value).toBe('JOHN DOE');
  });
});

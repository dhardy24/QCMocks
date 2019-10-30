import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteFieldDisplayComponent } from './quote-field-display.component';

describe('QuoteFieldDisplayComponent', () => {
  let component: QuoteFieldDisplayComponent;
  let fixture: ComponentFixture<QuoteFieldDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteFieldDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteFieldDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteInfoSelectComponent } from './quote-info-select.component';

describe('QuoteInfoSelectComponent', () => {
  let component: QuoteInfoSelectComponent;
  let fixture: ComponentFixture<QuoteInfoSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteInfoSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteInfoSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

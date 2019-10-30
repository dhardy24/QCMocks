import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleHeaderComponent } from './rule-header.component';

describe('RuleHeaderComponent', () => {
  let component: RuleHeaderComponent;
  let fixture: ComponentFixture<RuleHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuleHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

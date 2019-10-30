import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleSetAddComponent } from './rule-set-add.component';

describe('RuleSetAddComponent', () => {
  let component: RuleSetAddComponent;
  let fixture: ComponentFixture<RuleSetAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuleSetAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleSetAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

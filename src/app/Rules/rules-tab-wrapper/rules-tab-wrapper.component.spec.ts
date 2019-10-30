import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesTabWrapperComponent } from './rules-tab-wrapper.component';

describe('RulesTabComponent', () => {
  let component: RulesTabWrapperComponent;
  let fixture: ComponentFixture<RulesTabWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RulesTabWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesTabWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

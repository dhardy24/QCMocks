import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsTabWrapperComponent } from './reports-tab.component';

describe('ReportsTabComponent', () => {
  let component: ReportsTabWrapperComponent;
  let fixture: ComponentFixture<ReportsTabWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsTabWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsTabWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

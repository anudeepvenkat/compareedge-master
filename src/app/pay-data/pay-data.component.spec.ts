import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayDataComponent } from './pay-data.component';

describe('PayDataComponent', () => {
  let component: PayDataComponent;
  let fixture: ComponentFixture<PayDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

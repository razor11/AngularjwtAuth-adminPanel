import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductlistPendingAprovalComponent } from './productlist-pending-aproval.component';

describe('ProductlistPendingAprovalComponent', () => {
  let component: ProductlistPendingAprovalComponent;
  let fixture: ComponentFixture<ProductlistPendingAprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductlistPendingAprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductlistPendingAprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

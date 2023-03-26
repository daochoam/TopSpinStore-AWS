import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetProductsComponent } from './set-products.component';

describe('SetProductsComponent', () => {
  let component: SetProductsComponent;
  let fixture: ComponentFixture<SetProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

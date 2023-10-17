import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesBoxComponent } from './categories-box.component';

describe('CategoriesBoxComponent', () => {
  let component: CategoriesBoxComponent;
  let fixture: ComponentFixture<CategoriesBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriesBoxComponent]
    });
    fixture = TestBed.createComponent(CategoriesBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFavButtonComponent } from './add-fav-button.component';

describe('AddFavButtonComponent', () => {
  let component: AddFavButtonComponent;
  let fixture: ComponentFixture<AddFavButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFavButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFavButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

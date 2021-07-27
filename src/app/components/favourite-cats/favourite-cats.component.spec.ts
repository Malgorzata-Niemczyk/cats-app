import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteCatsComponent } from './favourite-cats.component';

describe('FavouriteCatsComponent', () => {
  let component: FavouriteCatsComponent;
  let fixture: ComponentFixture<FavouriteCatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouriteCatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteCatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCatDetailsComponent } from './my-cat-details.component';

describe('MyCatDetailsComponent', () => {
  let component: MyCatDetailsComponent;
  let fixture: ComponentFixture<MyCatDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCatDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCatDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

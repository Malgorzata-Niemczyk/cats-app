import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCatDialogComponent } from './add-cat-dialog.component';

describe('AddCatDialogComponent', () => {
  let component: AddCatDialogComponent;
  let fixture: ComponentFixture<AddCatDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCatDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCatDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

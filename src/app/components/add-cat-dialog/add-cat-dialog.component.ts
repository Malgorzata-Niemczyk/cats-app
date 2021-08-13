import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-cat-dialog',
  templateUrl: './add-cat-dialog.component.html',
  styleUrls: ['./add-cat-dialog.component.scss']
})
export class AddCatDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<AddCatDialogComponent>,
  ) { }

  ngOnInit(): void {
  }

  @HostListener("keydown.esc") 
  public onEscape() {
    this.dialogRef.close();
  }

  newCatForm = new FormGroup({
    'ID': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(6)]),
    'Name': new FormControl(null, [Validators.required]),
    'Origin': new FormControl(null, [Validators.required]),
    'Temperament': new FormControl(null, [Validators.required]),
    'Weight': new FormControl(null, [Validators.required, Validators.min(1), Validators.max(100)]),
    'Life_span': new FormControl(null, [Validators.required]),
    'Description': new FormControl(null, [Validators.required, Validators.maxLength(500)])
  })

  onAddNewCat() {
    if (this.newCatForm.valid) {
      const newCatData = this.newCatForm.value;

      console.log('submitted', newCatData);

    }

  }
}

import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CatsService } from 'src/app/services/cats.service';
import { NewCatsCollectionService } from 'src/app/services/new-cats-collection.service';

@Component({
  selector: 'app-add-cat-dialog',
  templateUrl: './add-cat-dialog.component.html',
  styleUrls: ['./add-cat-dialog.component.scss']
})
export class AddCatDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<AddCatDialogComponent>,
    private catsService: CatsService,
    private newCatsCollectionService: NewCatsCollectionService
  ) { }

  ngOnInit(): void {
  }

  @HostListener("keydown.esc") 
  public onEscape() {
    this.dialogRef.close();
  }

  newCatForm = new FormGroup({
    'Name': new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    'Origin': new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    'Temperament': new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z, ]*')]),
    'Weight': new FormControl(null, [Validators.required, Validators.min(1), Validators.max(100), Validators.pattern('[0-9- ]*')]),
    'Life_span': new FormControl(null, [Validators.required, Validators.pattern('[0-9- ]*')]),
    'Description': new FormControl(null, [Validators.required, Validators.maxLength(150), Validators.pattern('[a-zA-Z,-. ]*')])
  })

  onAddNewCat() {
    if (!this.newCatForm.valid) {
      return;
    }

    const newCatData = this.newCatForm.value;

    this.catsService.addCat(newCatData).subscribe();
    this.newCatsCollectionService.addNewCat(newCatData);
      
    console.log('submitted', newCatData);
    console.log(localStorage);
      
    this.dialogRef.close();
  }
}

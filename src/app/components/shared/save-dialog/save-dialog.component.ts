import { Component, HostListener, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CatsService } from 'src/app/services/cats.service';
import { NewCatsCollectionService } from 'src/app/services/new-cats-collection.service';
import { NewCat } from 'src/app/models/new-cat-data';

@Component({
  selector: 'save-dialog',
  templateUrl: './save-dialog.component.html',
  styleUrls: ['./save-dialog.component.scss']
})
export class SaveDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<SaveDialogComponent>,
    private catsService: CatsService,
    private newCatsCollectionService: NewCatsCollectionService,
    @Inject(MAT_DIALOG_DATA) public newCat: NewCat
  ) { }

  ngOnInit(): void {
  }

  @HostListener("keydown.esc") 
  public onEscape() {
    this.dialogRef.close();
  }

  newCatForm = new FormGroup({
    'name': new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    'origin': new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    'temperament': new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z, ]*')]),
    'weight': new FormControl(null, [Validators.required, Validators.min(1), Validators.max(100), Validators.pattern('[0-9- ]*')]),
    'lifeSpan': new FormControl(null, [Validators.required, Validators.pattern('[0-9- ]*')]),
    'description': new FormControl(null, [Validators.required, Validators.maxLength(150), Validators.pattern('[a-zA-Z\'":;,-. ]*')])
  })

  onAddNewCat() {
    if (!this.newCatForm.valid) {
      return;
    }

    const newCatData = this.newCatForm.value;

    this.catsService.addCat(newCatData).subscribe();
    this.newCatsCollectionService.addNewCat(newCatData);
      
    this.dialogRef.close();
  }
}

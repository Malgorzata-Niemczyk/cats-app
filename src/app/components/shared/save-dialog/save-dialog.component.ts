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
  alert = false;
  editedCatsArr: NewCat[];

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
    'name': new FormControl(this.newCat.name, [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    'origin': new FormControl(this.newCat.origin, [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    'temperament': new FormControl(this.newCat.temperament, [Validators.required, Validators.pattern('[a-zA-Z, ]*')]),
    'weight': new FormControl(this.newCat.weight, [Validators.required, Validators.min(1), Validators.max(100), Validators.pattern('[0-9- ]*')]),
    'lifeSpan': new FormControl(this.newCat.lifeSpan, [Validators.required, Validators.pattern('[0-9- ]*')]),
    'description': new FormControl(this.newCat.description, [Validators.required, Validators.maxLength(150), Validators.pattern('[a-zA-Z\'":;,-. ]*')])
  })

  onHandleSubmit() {
    if (!this.newCatForm.valid) {
      return; 
    }

    switch(this.newCat.actionTitle) {
      case 'Add Cat': 
        this.onSaveAddNewCat();
        break;
      case 'Edit Cat':
        this.onSaveEditNewCat();
    }


    this.dialogRef.close();
  }

  onSaveAddNewCat() {
    this.catsService.addCat(this.newCatForm.value).subscribe(() => {
      try {
        this.alert = true;
      } catch(error) {
        console.log(error);
      }
    });

    this.newCatsCollectionService.addNewCat(this.newCatForm.value);
  }

  onSaveEditNewCat() {
    
  }


}

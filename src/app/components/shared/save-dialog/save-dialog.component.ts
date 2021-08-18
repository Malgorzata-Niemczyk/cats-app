import { Component, HostListener, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CatsService } from 'src/app/services/cats.service';
import { NewCatsCollectionService } from 'src/app/services/new-cats-collection.service';
import { NewCat } from 'src/app/models/new-cat-data';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormErrorStateMatcher } from '../../error-state-matcher';


@Component({
  selector: 'save-dialog',
  templateUrl: './save-dialog.component.html',
  styleUrls: ['./save-dialog.component.scss'],
  providers: [
    { provide: ErrorStateMatcher, useClass: FormErrorStateMatcher }
  ]
})
export class SaveDialogComponent {
  alert = false;
  editedCatsArr: NewCat[];

  constructor(
    private dialogRef: MatDialogRef<SaveDialogComponent>,
    private catsService: CatsService,
    private newCatsCollectionService: NewCatsCollectionService,
    @Inject(MAT_DIALOG_DATA) public newCat: NewCat
  ) { }

  @HostListener("keydown.esc") 
  public onEscape() {
    this.dialogRef.close();
  }

  newCatForm = new FormGroup({
    name: new FormControl(this.newCat.name, [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')]),
    origin: new FormControl(this.newCat.origin, [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')]),
    temperament: new FormControl(this.newCat.temperament, [Validators.required, Validators.minLength(4), Validators.pattern('[a-zA-Z, ]*')]),
    weight: new FormControl(this.newCat.weight, [Validators.required, Validators.min(1), Validators.max(100), Validators.pattern('[0-9- ]*')]),
    lifeSpan: new FormControl(this.newCat.lifeSpan, [Validators.required, Validators.pattern('[0-9- ]*')]),
    description: new FormControl(this.newCat.description, [Validators.required, Validators.minLength(10), Validators.maxLength(150), Validators.pattern('[a-zA-Z\'":;,-. ]*')]),
    id: new FormControl(this.newCat.id)
  })

  onHandleSubmit(): void {
    if (!this.newCatForm.valid) {
      return; 
    }

    switch(this.newCat.actionTitle) {
      case 'Add Cat': 
        this.onSaveAddNewCat();
        break;
      case 'Edit Cat':
        this.onSaveEditNewCat();
        break;
      default:
        break;
    }

    this.dialogRef.close();
  }

  onSaveAddNewCat(): void {
    this.catsService.addCat(this.newCatForm.value).subscribe(() => {
      try {
        this.alert = true;
      } catch(error) {
        console.log(error);
      }
    });

    this.newCatsCollectionService.addNewCat(this.newCatForm.value);
  }

  onSaveEditNewCat(): void {
    this.newCatsCollectionService.updateNewCat(this.newCatForm.value);
  }

}

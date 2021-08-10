import { Component, Inject, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cat } from 'src/app/models/cat';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent implements OnInit {

  constructor( 
    private localStorageService: LocalStorageService,
    private dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Cat
  ) { }

  ngOnInit(): void {
    this.getFavouriteCat();
  }

  getFavouriteCat() {
    console.log(this.data);
    return this.data;
  }

  deleteFavouriteCatFromLS(id: string) {
    id = this.data.id;
    this.localStorageService.deleteFavouriteCatFromLS(this.localStorageService.keyName, id);
    this.dialogRef.close();
  }

  // deleteAllFavouriteCatsFromLS() {
  //   this.localStorageService.deleteAllItemsFromLS(this.localStorageService.keyName);
  //   this.dialogRef.close();
  // }

}

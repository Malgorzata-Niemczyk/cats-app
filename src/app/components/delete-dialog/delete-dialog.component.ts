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
    this.data;
    console.log('selected cat', this.data);
  }

  deleteFavouriteCatFromLS(event: Event) {
    // this.localStorageService.deleteFavouriteCatFromLS(this.localStorageService.keyName, id);
    // this.dialogRef.close();
  }

}

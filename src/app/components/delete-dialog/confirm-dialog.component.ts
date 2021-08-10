import { Component, Inject, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { modalData } from 'src/app/models/modalData';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

  constructor( 
    private localStorageService: LocalStorageService,
    private dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public modalData: modalData
  ) { }

  ngOnInit(): void {
    this.getModalData();
  }

  getModalData() {
    console.log(this.modalData);
    return this.modalData;
  }
  
  dialogAction() {
    switch(this.modalData.name) {
      case 'deleteCat':
        this.localStorageService.deleteFavouriteCatFromLS(this.localStorageService.keyName, this.modalData.selectedCat.id);
        break;
      case 'deleteAllCats':
        this.localStorageService.deleteAllItemsFromLS(this.localStorageService.keyName);
        break;
      default:
        break;
    }
    this.dialogRef.close();
  }

}

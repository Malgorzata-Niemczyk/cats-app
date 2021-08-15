import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddCatDialogComponent } from '../components/add-cat-dialog/add-cat-dialog.component';
import { NewCat } from '../models/save-modal-data';


@Injectable({
  providedIn: 'root'
})
export class SaveDialogService {

  constructor(private dialog: MatDialog) { }

  public openDialog(data: NewCat): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.width = '460px';
    dialogConfig.data = data;

    this.dialog.open(AddCatDialogComponent, dialogConfig);
  }

}
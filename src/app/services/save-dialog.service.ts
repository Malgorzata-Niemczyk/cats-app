import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SaveDialogComponent } from '../components/shared/save-dialog/save-dialog.component';
import { NewCat } from '../models/new-cat-data';


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

    this.dialog.open(SaveDialogComponent, dialogConfig);
  }

}
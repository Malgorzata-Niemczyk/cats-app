import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import { AddCatDialogComponent } from '../components/add-cat-dialog/add-cat-dialog.component';
import { SaveModalData } from '../models/save-modal-data';


@Injectable({
  providedIn: 'root'
})
export class SaveDialogService {

  constructor(private dialog: MatDialog) { }

  dialogRef: MatDialogRef<AddCatDialogComponent>;

  public openDialog(data: SaveModalData): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.width = '450px';
    dialogConfig.data = data;

    this.dialogRef = this.dialog.open(AddCatDialogComponent, dialogConfig)
  }

}
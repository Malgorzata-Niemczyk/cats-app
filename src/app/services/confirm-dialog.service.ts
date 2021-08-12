import { Injectable } from '@angular/core';
import { ConfirmDialogData } from '../models/confirm-modal-data';
import { ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';
import { MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';


@Injectable({
  providedIn: 'root'
})
export class ConfirmDialogService {

  constructor(private dialog: MatDialog) { }

  dialogRef: MatDialogRef<ConfirmDialogComponent>;

  public openDialog(data: ConfirmDialogData): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.width = '390px';
    dialogConfig.data = data;

    this.dialogRef = this.dialog.open(ConfirmDialogComponent, dialogConfig)
  }

}

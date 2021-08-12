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

  public open(options: ConfirmDialogData) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.width = '390px';
    dialogConfig.height = '230px';

    dialogConfig.data = {
        name: options.name,
        title: options.title,
        description: options.description,
        confirmButtonText: options.confirmButtonText,
        cancelButtonText: options.cancelButtonText,
        confirmationCallback: options.confirmationCallback
    }

    this.dialogRef = this.dialog.open(ConfirmDialogComponent, dialogConfig)
  }

}

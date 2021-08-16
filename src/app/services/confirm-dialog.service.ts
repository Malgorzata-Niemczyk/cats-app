import { Injectable } from '@angular/core';
import { ConfirmDialogData } from '../models/confirm-modal-data';
import { ConfirmDialogComponent } from '../components/shared/confirm-dialog/confirm-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';


@Injectable({
  providedIn: 'root'
})
export class ConfirmDialogService {

  constructor(private dialog: MatDialog) { }

  public openDialog(data: ConfirmDialogData): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.width = '390px';
    dialogConfig.data = data;

    this.dialog.open(ConfirmDialogComponent, dialogConfig)
  }

}

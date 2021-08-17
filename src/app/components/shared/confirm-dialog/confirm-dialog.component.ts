import { Component, HostListener, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmDialogData } from 'src/app/models/confirm-modal-data';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {

  constructor( 
    private dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public confirmDialogData: ConfirmDialogData
  ) { }

  
  @HostListener("keydown.esc") 
  public onEscape() {
    this.dialogRef.close();
  }
  
  handleConfirmDialogSubmit(): void {
    this.confirmDialogData.confirmationCallback();
    this.dialogRef.close();
  }


}

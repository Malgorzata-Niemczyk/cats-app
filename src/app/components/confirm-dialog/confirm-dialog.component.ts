import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { modalData } from 'src/app/models/modalData';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

  constructor( 
    private dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public modalData: modalData
  ) { }

  ngOnInit(): void {
    this.dialogRef.keydownEvents().subscribe(event => {
      if (event.key === "Escape") {
        this.dialogRef.close();
      }
    })
  }
  
  handleConfirmDialogSubmit() {
    this.modalData.confirmationCallback();
    this.dialogRef.close();
  }

}

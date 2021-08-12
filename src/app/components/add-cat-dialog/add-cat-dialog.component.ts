import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-cat-dialog',
  templateUrl: './add-cat-dialog.component.html',
  styleUrls: ['./add-cat-dialog.component.scss']
})
export class AddCatDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<AddCatDialogComponent>,
  ) { }

  ngOnInit(): void {
  }

  @HostListener("keydown.esc") 
  public onEscape() {
    this.dialogRef.close();
  }

}

import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Cat } from 'src/app/models/cat';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component'; 

@Component({
  selector: 'app-favourite-cats',
  templateUrl: './favourite-cats.component.html',
  styleUrls: ['./favourite-cats.component.scss']
})
export class FavouriteCatsComponent implements OnInit {
  favouriteCats: Cat[];
  displayedColumns: string[] = ['position', 'breed', 'origin', 'delete', 'info'];
  favCatsData$ = this.localStorageService.favCats$;

  constructor(
    private localStorageService: LocalStorageService,
    private dialogRef: MatDialog
  ) { }

  ngOnInit(): void {
    this.getFavouriteCatsFromLS();
  }

  getFavouriteCatsFromLS() {
    this.favouriteCats = this.localStorageService.getStorage(this.localStorageService.keyName);
  }

  openDeleteCatDialog(event: Event, id: string) {
    event.stopPropagation();

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.width = '420px';
    dialogConfig.height = '180px';

    this.dialogRef.open(DeleteDialogComponent, dialogConfig);
    console.log(id);
  }

  openDeleteAllCatsModal() {
    // if (window.confirm('Are your sure you want to delete all records?')) {
    //     this.localStorageService.deleteAllItemsFromLS(this.localStorageService.keyName);
    // }
  }
  
}

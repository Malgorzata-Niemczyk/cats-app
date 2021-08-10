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
    const selectedFavCat = this.favouriteCats.find(selectedCat => selectedCat.id === id);

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.width = '420px';
    dialogConfig.height = '180px';
    dialogConfig.data = selectedFavCat;

    this.dialogRef.open(DeleteDialogComponent, dialogConfig);
  }

  openDeleteAllCatsDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.width = '420px';
    dialogConfig.height = '180px';
    dialogConfig.data = this.favouriteCats;

    this.dialogRef.open(DeleteDialogComponent, dialogConfig);
  }
  
}

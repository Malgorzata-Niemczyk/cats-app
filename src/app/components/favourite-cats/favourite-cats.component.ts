import { Component, OnInit } from '@angular/core';
import { FavouriteCatsService } from 'src/app/services/favourite-cats.service';
import { Cat } from 'src/app/models/cat';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-favourite-cats',
  templateUrl: './favourite-cats.component.html',
  styleUrls: ['./favourite-cats.component.scss']
})
export class FavouriteCatsComponent implements OnInit {
  favouriteCats: Cat[];
  displayedColumns: string[] = ['position', 'breed', 'origin', 'delete', 'info'];
  favCatsData$: Observable<Cat[]> = this.favouriteCatsService.favCats$;

  constructor(
    private favouriteCatsService: FavouriteCatsService,
    private dialogRef: MatDialog
  ) { }

  ngOnInit(): void {
    this.getFavouriteCatsFromLS();
  }

  getFavouriteCatsFromLS() {
    this.favouriteCats = this.favouriteCatsService.getFavouriteCats();
  }

  openDeleteCatDialog(event: Event, id: string) {
    event.stopPropagation();
    const selectedFavCat = this.favouriteCats.find(selectedCat => selectedCat.id === id);
    if (selectedFavCat === undefined) {
      return;
    }

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.width = '390px';
    dialogConfig.height = '230px';
    dialogConfig.data = {
      name: 'deleteCat',
      title: 'Removal Confirmation',
      description: `Are you sure you want to remove the following cat: ${selectedFavCat.name}?`,
      confirmButtonText: 'Delete Item',
      cancelButtonText: 'Cancel',
      confirmationCallback: () => {
        this.favouriteCatsService.deleteFavouriteCat(id);
      }
    };

    this.dialogRef.open(ConfirmDialogComponent, dialogConfig);
  }

  openDeleteAllCatsDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.width = '390px';
    dialogConfig.height = '230px';
    dialogConfig.data = {
      name: 'deleteAllCats',
      title: 'Removal Confirmation',
      description: `Are you sure you want to delete all your favourite cats?`,
      confirmButtonText: 'Delete All',
      cancelButtonText: 'Cancel',
      confirmationCallback: () => {
        this.favouriteCatsService.deleteAllFavouriteCats();
      }
    };;

    this.dialogRef.open(ConfirmDialogComponent, dialogConfig);
  }

}

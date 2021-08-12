import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Cat } from 'src/app/models/cat';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component'; 

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
    dialogConfig.width = '390px';
    dialogConfig.height = '230px';
    dialogConfig.data = {
      name: 'deleteCat',
      title: 'Are you sure you want to delete this record?',
      description: `If you continue, the cat with the breed of ${selectedFavCat?.name} will be deleted.`,
      actionButtonText: 'Delete Item',
      selectedCat: selectedFavCat,
      callBackMethod: () => {
        this.performDeleteFavCatFromLS(dialogConfig.data.selectedCat.id);
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
      title: 'Are you sure you want to delete all the records?',
      description: `If you continue, all your favourite cats will be deleted.`,
      actionButtonText: 'Delete All',
      catsFavCollection: this.favouriteCats,
      callBackMethod: () => {
        this.performDeleteAllFavCatsFromLS();
      }
    };;

    this.dialogRef.open(ConfirmDialogComponent, dialogConfig);
  }


  performDeleteFavCatFromLS(id: string): void {
    this.localStorageService.deleteFavouriteCatFromLS(this.localStorageService.keyName, id);
  }

  performDeleteAllFavCatsFromLS(): void {
    this.localStorageService.deleteAllItemsFromLS(this.localStorageService.keyName);
  }
  
}

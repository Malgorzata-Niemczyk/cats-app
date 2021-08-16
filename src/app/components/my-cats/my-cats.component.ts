import { Component, OnInit } from '@angular/core';
import { SaveDialogService } from 'src/app/services/save-dialog.service';
import { NewCatsCollectionService } from 'src/app/services/new-cats-collection.service';
import { NewCat } from 'src/app/models/save-modal-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-cats',
  templateUrl: './my-cats.component.html',
  styleUrls: ['./my-cats.component.scss']
})
export class MyCatsComponent implements OnInit {
  myCats: NewCat[];
  myCatsData$: Observable<NewCat[]>;
  displayedColumns: string[] = ['position', 'breed', 'origin', 'delete', 'info'];
  
  constructor(
    private saveDialogService: SaveDialogService,
    private newCatsCollectionService: NewCatsCollectionService
    ) { }
    
    ngOnInit(): void {
    this.getMyCats();
    this.myCatsData$ = this.newCatsCollectionService.myCatsList$;
  }

  getMyCats(): void {
    this.myCats = this.newCatsCollectionService.getNewCats();
  }

  openAddCatDialog(): void {
    const options: NewCat = {
      name: `Breed's name`,
      temperament: 'Temperament',
      weight: 'Weight (kg)',
      lifeSpan: 'Average life span',
      origin: 'Origin',
      description: 'Description'
    }
    
    this.saveDialogService.openDialog(options);
  } 

}

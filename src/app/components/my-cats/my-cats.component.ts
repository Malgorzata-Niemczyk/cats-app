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
  myCatsData$: Observable<NewCat[]> = this.newCatsCollectionService.myCatsList$;

  constructor(
    private saveDialogService: SaveDialogService,
    private newCatsCollectionService: NewCatsCollectionService
    ) { }

  ngOnInit(): void {
    this.getMyCats();
  }

  getMyCats(): void {
    this.myCats = this.newCatsCollectionService.getNewCats();
  }

  openAddCatDialog(): void {
    const options = {
      id: 'ID',
      name: 'Name',
      temperament: 'Name',
      weight: 'Weight(kg)',
      life_span: 'Average life span',
      origin: 'Origin',
      description: 'Description'
    }
    
    this.saveDialogService.openDialog(options);
  } 

}

import { Component, OnInit } from '@angular/core';
import { NewCat } from 'src/app/models/new-cat-data';
import { ActivatedRoute } from '@angular/router';
import { NewCatsCollectionService } from 'src/app/services/new-cats-collection.service';

@Component({
  selector: 'app-my-cat-details',
  templateUrl: './my-cat-details.component.html',
  styleUrls: ['./my-cat-details.component.scss']
})
export class MyCatDetailsComponent implements OnInit {
  newCat: NewCat;

  constructor(
    private route: ActivatedRoute,
    private newCatsCollectionService: NewCatsCollectionService
  ) { }

  ngOnInit(): void {
    this.getSelectedNewCat();
  }

  getSelectedNewCat(): void {
    const id: any = this.route.snapshot.paramMap.get('id');
    this.newCat = this.newCatsCollectionService.getNewCat(id);
  }
  
  capitalizeWords(string: string) {
    return string.replace(/(?:^|\s)\S/g, (string: string) => string.toUpperCase());
  };

}

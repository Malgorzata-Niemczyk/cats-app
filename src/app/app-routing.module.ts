import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CatsListComponent } from './components/cats-list/cats-list.component';
import { CatDetailsComponent } from './components/cat-details/cat-details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FavouriteCatsComponent } from './components/favourite-cats/favourite-cats.component';
import { MyCatsComponent } from './components/my-cats/my-cats.component';
import { MyCatDetailsComponent } from './components/my-cat-details/my-cat-details.component';

const appRoutes: Routes = [
  { path: 'cats', component: CatsListComponent },
  { path: 'cat/:id', component: CatDetailsComponent },
  { path: 'favourites', component: FavouriteCatsComponent},
  { path: 'my-cats', component: MyCatsComponent},
  { path: 'my-cats/:id', component: MyCatDetailsComponent },
  { path: "", redirectTo: '/cats', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

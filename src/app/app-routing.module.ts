import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CatsListComponent } from './components/cats-list/cats-list.component';
import { CatDetailsComponent } from './components/cat-details/cat-details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'cats', component: CatsListComponent },
  { path: 'cat/:id', component: CatDetailsComponent },
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

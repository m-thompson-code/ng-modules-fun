import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NamesComponent } from './names.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: NamesComponent,
  }
];

@NgModule({
  declarations: [
    NamesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class NamesModule { }

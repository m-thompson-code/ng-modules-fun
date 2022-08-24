import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NamesService } from '../services/names/names.service';
import { NeatoComponent } from '../components/neato/neato.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../names/names.module').then(m => m.NamesModule),
  }
];

@NgModule({
  providers: [
    NamesService,
    {
      provide: 'cool',
      useValue: NeatoComponent,
    }
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ForwardsModule { }

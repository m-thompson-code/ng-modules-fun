import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BackwardsNamesService } from '../services/backwards-names/backwards-names.service';
import { NamesService } from '../services/names/names.service';
import { FarOutComponent } from '../components/far-out/far-out.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../names/names.module').then(m => m.NamesModule),
  }
];

@NgModule({
  providers: [
    {
      provide: NamesService,
      useClass: BackwardsNamesService
    },
    {
      provide: 'cool',
      useValue: FarOutComponent,
    },
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class BackwardsModule { }

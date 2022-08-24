import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'names',
    loadChildren: () => import('./forwards/forwards.module').then(m => m.ForwardsModule),
  },
  {
    path: 'backwards',
    loadChildren: () => import('./backwards/backwards.module').then(m => m.BackwardsModule),
  }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

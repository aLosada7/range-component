import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Exercise1PageComponent } from './exercises/containers/exercise1-page/exercise1-page.component';
import { Exercise2PageComponent } from './exercises/containers/exercise2-page/exercise2-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'exercise1',
    pathMatch: 'full'
  },
  { path: 'exercise1', component: Exercise1PageComponent },
  { path: 'exercise2', component: Exercise2PageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

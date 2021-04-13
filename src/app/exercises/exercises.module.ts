import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Exercise1PageComponent } from './containers/exercise1-page/exercise1-page.component';
import { Exercise2PageComponent } from './containers/exercise2-page/exercise2-page.component';
import { RangeComponent } from './components/range/range.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, HammerModule } from '@angular/platform-browser';

export const COMPONENTS = [
    Exercise1PageComponent,
    Exercise2PageComponent,
    RangeComponent
]
@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HammerModule
  ],
  exports: [
    COMPONENTS
  ]
})
export class ExercisesModule { }

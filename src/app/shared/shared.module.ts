import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material'
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { VerticalStepperComponent } from './components/vertical-stepper/vertical-stepper.component';

export const COMPONENTS = [
    VerticalStepperComponent
]
@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    TranslateModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    TranslateModule,
    MaterialModule,
    ReactiveFormsModule,
    COMPONENTS
  ]
})
export class SharedModule { }

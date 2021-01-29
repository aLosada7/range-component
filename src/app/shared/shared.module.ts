import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material'
import { ReactiveFormsModule } from '@angular/forms';
import { VerticalStepperComponent } from './components/vertical-stepper/vertical-stepper.component';

export const COMPONENTS = [
    VerticalStepperComponent
]
@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    COMPONENTS
  ]
})
export class SharedModule { }

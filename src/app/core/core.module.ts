import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

export const COMPONENTS = [
    ToolbarComponent
]


@NgModule({
  declarations: [COMPONENTS],
  imports: [
    SharedModule,
    CommonModule
  ],
  exports: [
    COMPONENTS
  ]
})
export class CoreModule { }

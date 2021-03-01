import { DashboardRouting } from './dashboard-routing.module';
import { DashboardPageComponent } from './containers/dashboard-page/dashboard-page.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export const COMPONENTS = [
    DashboardPageComponent
]

@NgModule({
    declarations: [COMPONENTS],
    imports: [
        SharedModule,
        DashboardRouting
    ]
})
export class DashboardModule { }

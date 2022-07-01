import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modulos
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';

import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';



@NgModule({
  declarations: [
    Grafica1Component,
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    FormsModule,
    ComponentsModule,
    // NgChartsModule
  ],
  exports: [
    Grafica1Component,
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
  ]
})
export class PagesModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraphicalSummaryComponent } from './graphical-summary/graphical-summary.component';

const routes: Routes = [
  {
    path: 'home',
    component: DashboardComponent,
    pathMatch: 'full'
  },
  {
    path: 'graphs',
    component: GraphicalSummaryComponent,
  },
  {
    path: '**',
    redirectTo: 'home'
    // component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

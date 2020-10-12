import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobdetailComponent } from './pages/jobdetail/jobdetail.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'job/:id', component: JobdetailComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

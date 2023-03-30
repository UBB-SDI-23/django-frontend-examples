import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './common/home/home.component';
import { AddComponent } from './features/courses/add/add.component';
import { DetailsComponent } from './features/courses/components/details/details.component';
import { OverviewComponent } from './features/courses/components/overview/overview.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "courses",
    component: OverviewComponent
  },
  {
    path: "courses/add",
    component: AddComponent
  },
  {
    path: "courses/:id",
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

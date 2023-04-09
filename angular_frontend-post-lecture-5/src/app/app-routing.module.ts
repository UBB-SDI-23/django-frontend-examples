import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './features/courses/pages/add.course/add.course.component';
import { CourseDetailsComponent } from './features/courses/pages/course.details/course.details.component';
import { CoursesOverviewComponent } from './features/courses/pages/courses.overview/courses.overview.component';
import { HomeComponent } from './home/home.component';
import { EditCourseComponent } from './features/courses/pages/edit.course/edit.course.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: 'courses',
    component: CoursesOverviewComponent
  },
  {
    path:'courses/add',
    component: AddCourseComponent
  },
  {
    path: 'courses/:id',
    component: CourseDetailsComponent
  },
  {
    path:'courses/edit/:id',
    component: EditCourseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

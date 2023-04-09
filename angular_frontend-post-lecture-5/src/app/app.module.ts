import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesOverviewComponent } from './features/courses/pages/courses.overview/courses.overview.component';
import { HomeComponent } from './home/home.component';
import { CourseDetailsComponent } from './features/courses/pages/course.details/course.details.component';
import { CoursesTableComponent } from './features/courses/components/courses.table/courses.table.component';
import { AddCourseComponent } from './features/courses/pages/add.course/add.course.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmComponent } from './features/common/components/confirm/confirm.component';
import { EditCourseComponent } from './features/courses/pages/edit.course/edit.course.component';
import { CourseFormComponent } from './features/courses/components/course.form/course.form.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesOverviewComponent,
    HomeComponent,
    CourseDetailsComponent,
    CoursesTableComponent,
    AddCourseComponent,
    ConfirmComponent,
    EditCourseComponent,
    CourseFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

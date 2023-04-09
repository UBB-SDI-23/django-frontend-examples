import { Component, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/common/services/api.service';
import { AddEditCourseDto } from '../../models/couse.model';

@Component({
  selector: 'app-add-course',
  templateUrl: './add.course.component.html',
  styleUrls: ['./add.course.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddCourseComponent {
  constructor(private apiSvc: ApiService, private router: Router, private snackBar: MatSnackBar) {}

  onSubmit(course: AddEditCourseDto): void {
    this.apiSvc.addCourse(course)
      .subscribe(result => {
        console.log(result);
        this.snackBar.open("Course added successfully", "ok", {duration: 5000});
        this.router.navigateByUrl('courses');
      },
      (err) => console.log(err));
  }
}

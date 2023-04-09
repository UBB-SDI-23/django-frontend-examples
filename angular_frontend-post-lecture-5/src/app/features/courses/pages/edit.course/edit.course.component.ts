import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/common/services/api.service';
import { AddEditCourseDto } from '../../models/couse.model';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit.course.component.html',
  styleUrls: ['./edit.course.component.css']
})
export class EditCourseComponent implements OnInit {
  constructor(
      private apiSvc: ApiService, 
      private router: Router, 
      private route: ActivatedRoute, 
      private snackBar: MatSnackBar
  ){}

  course: AddEditCourseDto = {
    name: '',
    description: '',
    teacher_id: null
  };

  ngOnInit(): void {
     this.route.params.subscribe(params => {
      const courseId = params['id'];
      this.apiSvc.getCourse(courseId).subscribe(result => {
        this.course = {
            id: result.id,
            name: result.name,
            description: result.description,
            teacher_id: result.teacher.id
        }
      });
    })
  }

  onSubmit(course: AddEditCourseDto): void {
    this.apiSvc.editCourse(course)
      .subscribe(result => {
        console.log(result);
        this.snackBar.open("Course edited successfully", "ok", {duration: 5000});
        this.router.navigateByUrl('courses');
      },
      (err) => console.log(err));
  }
}

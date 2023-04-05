import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/common/services.api.service.service';
import { AddCourseDto, Course } from '../components/overview/models/courses.models';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  name?: string;
  description?: string;
  teacher_id?: number;

  constructor(private apiSvc: ApiService, private router: Router) {}

  addCourse(){
    if (this.name && this.description && this.teacher_id) {
      const course: AddCourseDto = {
        name: this.name,
        description: this.description,
        teacher_id: this.teacher_id
      }
      this.apiSvc.addCourse(course).subscribe((result: Course) => {
        this.router.navigateByUrl('courses');
      },
      (err) => {console.log(err)}
      )
    }

  }
}

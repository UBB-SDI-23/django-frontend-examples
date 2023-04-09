import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { AddEditCourseDto } from '../../models/couse.model';

@Component({
  selector: 'app-course-form',
  templateUrl: './course.form.component.html',
  styleUrls: ['./course.form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CourseFormComponent {
    @Input() course: AddEditCourseDto = {
      name: '',
      description: '',
      teacher_id: null
    };
    // if you name it 'submit', it will fire twice, because of the name conflict
    @Output() formSubmit = new EventEmitter<AddEditCourseDto>();
}

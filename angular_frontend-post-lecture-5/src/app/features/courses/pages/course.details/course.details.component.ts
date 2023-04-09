import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params, Route } from '@angular/router';
import { ApiService } from 'src/app/common/services/api.service';
import { Course } from 'src/app/features/courses/models/couse.model';

@Component({
  selector: 'app-details',
  templateUrl: './course.details.component.html',
  styleUrls: ['./course.details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CourseDetailsComponent implements OnInit{
  course?: Course;

  constructor(private apiSvc: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log('details')
    this.route.params.subscribe(params => {
      const courseId = params['id'];
      this.apiSvc.getCourse(courseId).subscribe(result => this.course = result);
    })
  }
}

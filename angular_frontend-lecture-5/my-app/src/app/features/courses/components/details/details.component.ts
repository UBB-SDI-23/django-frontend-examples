import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/common/services.api.service.service';
import { Course } from '../overview/models/courses.models';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  courseId?: string;
  course?: Course;

  constructor(private apiSvc: ApiService, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.courseId = params['id']
      this.apiSvc.getCourse(this.courseId!).subscribe((course: Course) => {
        this.course = course;
      })
    });


  }
}

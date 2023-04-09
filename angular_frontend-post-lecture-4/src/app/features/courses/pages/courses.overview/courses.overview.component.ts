import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from 'src/app/common/services/api.service';
import { Course } from 'src/app/features/courses/models/couse.model';

@Component({
  selector: 'app-overview',
  templateUrl: './courses.overview.component.html',
  styleUrls: ['./courses.overview.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CoursesOverviewComponent implements OnInit {
  courses: Course[] = [];

  constructor(private apiSvc: ApiService) { }

  ngOnInit(): void {
    this.refreshTable();
  }

  refreshTable(): void {
    this.apiSvc.getCourses().subscribe(result => this.courses = result);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/common/services.api.service.service';
import { Course } from './models/courses.models';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  courses: Course[] = [];

  constructor(private apiSvc: ApiService,
    private router: Router) {}

  ngOnInit(): void {
    this.apiSvc.getCourses().subscribe((courses: Course[]) => {
      this.courses = courses;
    });
  }

  goToDetails(courseId: string){
    this.router.navigateByUrl(`courses/${courseId}`)
  }

  goToAdd() {
    this.router.navigateByUrl(`courses/add`);
  }
}

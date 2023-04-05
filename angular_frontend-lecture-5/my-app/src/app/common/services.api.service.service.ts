import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddCourseDto, Course } from '../features/courses/components/overview/models/courses.models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://ec2-16-170-133-85.eu-north-1.compute.amazonaws.com/api';
  constructor(private http: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.http.get(`${this.baseUrl}/courses/`) as Observable<Course[]>;
  }

  getCourse(courseId: string): Observable<Course>
  {
    return this.http.get(`${this.baseUrl}/courses/${courseId}`) as Observable<Course>;
  }

  addCourse(course: AddCourseDto): Observable<Course> {
    return this.http.post(`${this.baseUrl}/courses/`, course) as Observable<Course>
  }
}

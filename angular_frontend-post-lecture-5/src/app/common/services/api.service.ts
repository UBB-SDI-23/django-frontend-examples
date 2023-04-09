import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddEditCourseDto, Course } from 'src/app/features/courses/models/couse.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://127.0.0.1:8000/api';

  constructor(private httpClient: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.httpClient.get(`${this.baseUrl}/courses`) as Observable<Course[]>;
  }

  getCourse(courseId: string): Observable<Course> {
    return this.httpClient.get(`${this.baseUrl}/courses/${courseId}`) as Observable<Course>;
  }

  addCourse(course: AddEditCourseDto) : Observable<Course> {
    return this.httpClient.post(`${this.baseUrl}/courses/`, course) as Observable<Course>;
  }

  editCourse(course: AddEditCourseDto) : Observable<Course> {
    return this.httpClient.put(`${this.baseUrl}/courses/${course.id}/`, course) as Observable<Course>;
  }

  deleteCourse(courseId: number): Observable<{}> {
    return this.httpClient.delete(`${this.baseUrl}/courses/${courseId}/`) as Observable<{}>;
  }
}

import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/common/services/api.service';
import { ConfirmComponent } from 'src/app/features/common/components/confirm/confirm.component';
import { Course } from 'src/app/features/courses/models/couse.model';

@Component({
  selector: 'app-courses-table',
  templateUrl: './courses.table.component.html',
  styleUrls: ['./courses.table.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CoursesTableComponent {
  @Input() courses: Course[] = [];
  @Output() refresh = new EventEmitter<void>();

  constructor(private router: Router, private apiSvc: ApiService, private snackBar: MatSnackBar,
    private matDialog: MatDialog) {}

  navigateToDetailsPage(course: Course): void {
    this.router.navigateByUrl(`/courses/${course.id}`);
  }

  navigateToEditPage(course: Course): void {
    this.router.navigateByUrl(`/courses/edit/${course.id}`);
  }

  deleteCourse(course: Course): void {
    const dialogRef = this.matDialog.open(ConfirmComponent, {
      data: {
        title:"Delete", 
        message: "Are you sure?"
      },
      width: '250px',
      height: '150px',
      // the default value sets the focus on the first tabbable element, 
      // i.e. the 'No' button
      autoFocus: 'dialog'
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.apiSvc.deleteCourse(course.id).subscribe(() => {
          this.snackBar.open("Course succesfully deleted", "ok", {duration: 5000});
            this.refresh.emit();
        })
      }
    });
  }
}

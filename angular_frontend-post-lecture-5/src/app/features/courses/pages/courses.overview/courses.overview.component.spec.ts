import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesOverviewComponent } from './courses.overview.component';

describe('OverviewComponent', () => {
  let component: CoursesOverviewComponent;
  let fixture: ComponentFixture<CoursesOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

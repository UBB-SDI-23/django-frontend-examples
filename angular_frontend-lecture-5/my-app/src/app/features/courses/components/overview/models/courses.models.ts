export interface Course {
    id: string;
    name: string;
    description: string;
    teacherName: string;
}

export interface AddCourseDto {
    name: string;
    description: string;
    teacher_id: number;
}
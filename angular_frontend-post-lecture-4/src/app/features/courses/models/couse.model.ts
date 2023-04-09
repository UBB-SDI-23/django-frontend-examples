export interface Course {
    id: number;
    name: string;
    description: string;
    teacher: Teacher;
}

export interface Teacher {
    id: number;
    name: string;
    email: string;
    address: string;
}

export interface AddEditCourseDto {
    id?: number;
    name: string;
    description: string;
    teacher_id?: number;
}
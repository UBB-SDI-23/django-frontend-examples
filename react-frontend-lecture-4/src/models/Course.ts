import { Student } from "./Student";
import { Teacher } from "./Teacher";

export interface Course {
	id: number;
	name: string;
	description: string;
	teacher: Teacher;
	students: Student[];
}

import { useEffect, useState } from "react";
import { Course } from "../../models/Course";

export const CourseShowAll = () => {
	const [courses, setCourses] = useState([]);

	useEffect(() => {
		fetch("http://127.0.0.1:8000/api/courses/")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setCourses(data);
			});
	}, []);

	if (courses.length === 0) {
		return <div>No courses</div>;
	}

	return (
		<div className="App">
			<h1>Courses list</h1>
			<table>
				<tr>
					<th>#</th>
					<th>Course name</th>
					<th>Description</th>
					<th>Teacher</th>
				</tr>
				{courses.map((course: Course, index) => (
					<tr key={index}>
						<td>{index}</td>
						<td>{course.name}</td>
						<td>{course.description}</td>
						<td>{course.teacher.name}</td>
					</tr>
				))}
			</table>
		</div>
	);
};

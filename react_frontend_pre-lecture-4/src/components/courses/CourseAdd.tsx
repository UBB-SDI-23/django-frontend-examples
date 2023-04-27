import {
	Autocomplete,
	Button,
	Card,
	CardActions,
	CardContent,
	IconButton,
	TextField,
} from "@mui/material";
import { Container } from "@mui/system";
import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BACKEND_API_URL } from "../../constants";
import { Course } from "../../models/Course";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import axios from "axios";
import { Teacher } from "../../models/Teacher";
import { debounce } from "lodash";

export const CourseAdd = () => {
	const navigate = useNavigate();

	const [course, setCourse] = useState<Course>({
		name: "",
		description: "",
		teacher_id: 1, // TODO: also read the teacher_id from the form (NOT from the user!)
	});

	const [teachers, setTeachers] = useState<Teacher[]>([]);

	const fetchSuggestions = async (query: string) => {
		try {
			const response = await axios.get<Teacher[]>(
				`${BACKEND_API_URL}/teachers/autocomplete?query=${query}`
			);
			const data = await response.data;

			setTeachers(data);
		} catch (error) {
			console.error("Error fetching suggestions:", error);
		}
	};

	const debouncedFetchSuggestions = useCallback(debounce(fetchSuggestions, 500), []);

	useEffect(() => {
		return () => {
			debouncedFetchSuggestions.cancel();
		};
	}, [debouncedFetchSuggestions]);

	const addCourse = async (event: { preventDefault: () => void }) => {
		event.preventDefault();
		try {
			await axios.post(`${BACKEND_API_URL}/courses/`, course);
			navigate("/courses");
		} catch (error) {
			console.log(error);
		}
	};

	const handleInputChange = (event: any, value: any, reason: any) => {
		console.log("input", value, reason);

		if (reason === "input") {
			debouncedFetchSuggestions(value);
		}
	};

	return (
		<Container data-testid="test-add-container">
			<Card>
				<CardContent>
					<IconButton component={Link} sx={{ mr: 3 }} to={`/courses`}>
						<ArrowBackIcon />
					</IconButton>{" "}
					<form onSubmit={addCourse}>
						<TextField
							data-testid="test-name-input"
							id="name"
							label="Name"
							variant="outlined"
							fullWidth
							sx={{ mb: 2 }}
							onChange={(event) => setCourse({ ...course, name: event.target.value })}
						/>
						<TextField
							data-testid="test-description-input"
							id="description"
							label="Description"
							variant="outlined"
							fullWidth
							sx={{ mb: 2 }}
							onChange={(event) => setCourse({ ...course, description: event.target.value })}
						/>

						<Autocomplete
							data-testid="test-teacher-input"
							id="teacher_id"
							options={teachers}
							getOptionLabel={(option) => `${option.name} - ${option.email}`}
							renderInput={(params) => <TextField {...params} label="Teacher" variant="outlined" />}
							filterOptions={(x) => x}
							onInputChange={handleInputChange}
							onChange={(event, value) => {
								if (value) {
									console.log(value);
									setCourse({ ...course, teacher_id: value.id });
								}
							}}
						/>

						<Button data-testid="test-add-btn" type="submit">
							Add Course
						</Button>
					</form>
				</CardContent>
				<CardActions></CardActions>
			</Card>
		</Container>
	);
};

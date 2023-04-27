import mockCourse from "../fixtures/one-course.json";

describe("Courses", () => {
	describe("When clicking + icon button", () => {
		it("should load courses/add page", () => {
			cy.intercept("GET", "**/api/courses", {
				fixture: "courses.json",
			});
			cy.visit("http://localhost:5173/courses/");
			cy.get('[data-testid="test-add-new-course"]').click();
			cy.get('[data-testid="test-add-container"]').should("exist");
		});

		describe("on completing and submitting valid form", () => {
			it("should return to courses page", () => {
				cy.intercept("POST", "**/api/courses", {
					fixture: "one-course.json",
				});
				cy.intercept("GET", "**/api/courses", {
					fixture: "courses.json",
				});

				cy.visit("http://localhost:5173/courses/add");
				cy.get('[data-testid="test-name-input"]').type(mockCourse.name);
				cy.get('[data-testid="test-description-input"]').type(mockCourse.description);
				cy.get('[data-testid="test-teacher-input"]').type(mockCourse.teacher.name);
				cy.get('[data-testid="test-add-btn"]').click({ force: true });

				cy.get('[data-testid="test-all-courses-container"]').should("exist");
			});
		});
	});
});

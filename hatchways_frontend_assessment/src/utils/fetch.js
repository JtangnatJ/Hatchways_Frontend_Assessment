export const fetchStudents = async () => {
    const response = await fetch("https://api.hatchways.io/assessment/students");
    const data = await response.json();
    const updatedStudents = data.students.map((student) => {
        const fullName = student.firstName + " " + student.lastName
        student.fullName = fullName.toUpperCase();
        return student;
    });

    return updatedStudents;
};


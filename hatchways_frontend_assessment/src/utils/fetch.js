export const fetchStudents = async (query) => {
    const response = await fetch(query);
    const body = await response.json();
    return body;
}
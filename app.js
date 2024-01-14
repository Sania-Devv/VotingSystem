function addCourse() {
    // Get course name from input field
    const courseInput = document.getElementById("courseInput");
    const course = courseInput.value.trim();

    // Check if course name is empty
    if (!course) {
        alert("Please enter a course name.");
        return;
    }

    // Create list item for course
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.innerHTML = `
        <span>${course}</span>
        <span class="float-end">Votes: 0</span>
        <button type="button" class="btn btn-success btn-sm" onclick="voteCourse(this)">Vote</button> 
    `;

    // Append list item to course list
    const courseList = document.getElementById("courseList");
    courseList.appendChild(li);

    // Clear course input field
    courseInput.value = "";
}

function voteCourse(button) {
    const voteCountSpan = button.previousElementSibling;
    const voteCount = parseInt(voteCountSpan.textContent.split(": ")[1]);
    voteCountSpan.textContent = `Votes: ${voteCount + 1}`;
}

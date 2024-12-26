const subjectsConfig = {
    python: {
        name: 'Python',
        components: [
            { name: 'Quiz 1', id: 'quiz1', max: 100 },
            { name: 'OPPE 1', id: 'pe1', max: 100 },
            { name: 'OPPE 2', id: 'pe2', max: 100 },
            { name: 'End Term', id: 'endterm', max: 100 },
            { name: 'GA Average', id: 'gaa1', max: 100 },
            { name: 'GRPA Average', id: 'gaa2', max: 100 },
            { name: 'Bonus', id: 'bonus', max: 2 },
        ]
    },
    stat1: {
        name: 'Statistics 1',
        components: [
            { name: 'Quiz 1', id: 'quiz1', max: 100 },
            { name: 'Quiz 2', id: 'quiz2', max: 100 },
            { name: 'End Term', id: 'endterm', max: 100 },
            { name: 'GA Average', id: 'gaa', max: 100 },
            { name: 'Activity score', id: 'act', max: 5 },
            { name: 'Bonus', id: 'bonus', max: 2 }
        ]
    },
    stat2: {
        name: 'Statistics 2',
        components: [
            { name: 'Quiz 1', id: 'quiz1', max: 100 },
            { name: 'Quiz 2', id: 'quiz2', max: 100 },
            { name: 'End Term', id: 'endterm', max: 100 },
            { name: 'GA Average', id: 'gaa', max: 100 },
            { name: 'Activity score', id: 'act', max: 5 },
            { name: 'Bonus', id: 'bonus', max: 2 }
        ]
    },
    math1: {
        name: 'Mathematics 1',
        components: [
            { name: 'Quiz 1', id: 'quiz1', max: 100 },
            { name: 'Quiz 2', id: 'quiz2', max: 100 },
            { name: 'End Term', id: 'endterm', max: 100 },
            { name: 'GA Average', id: 'gaa', max: 100 },
            { name: 'Bonus', id: 'bonus', max: 2 }
        ]
    },
    math2: {
        name: 'Mathematics 2',
        components: [
            { name: 'Quiz 1', id: 'quiz1', max: 100 },
            { name: 'Quiz 2', id: 'quiz2', max: 100 },
            { name: 'End Term', id: 'endterm', max: 100 },
            { name: 'GA Average', id: 'gaa', max: 100 },
            { name: 'Bonus', id: 'bonus', max: 2 }
        ]
    },
    english1: {
        name: 'English 1',
        components: [
            { name: 'Quiz 1', id: 'quiz1', max: 100 },
            { name: 'Quiz 2', id: 'quiz2', max: 100 },
            { name: 'End Term', id: 'endterm', max: 100 },
            { name: 'GA Average', id: 'gaa', max: 100 },
            { name: 'Bonus', id: 'bonus', max: 2 }
        ]
    },
    english2: {
        name: 'English 2',
        components: [
            { name: 'Quiz 1', id: 'quiz1', max: 100 },
            { name: 'Quiz 2', id: 'quiz2', max: 100 },
            { name: 'End Term', id: 'endterm', max: 100 },
            { name: 'GA Average', id: 'gaa', max: 100 },
            { name: 'Bonus', id: 'bonus', max: 2 }
        ]
    },
    ct: {
        name: 'Computational Thinking',
        components: [
            { name: 'Quiz 1', id: 'quiz1', max: 100 },
            { name: 'Quiz 2', id: 'quiz2', max: 100 },
            { name: 'End Term', id: 'endterm', max: 100 },
            { name: 'GA Average', id: 'gaa', max: 100 },
            { name: 'Bonus', id: 'bonus', max: 2 }
        ]
    },
};

// Function to update the form based on selected subject
function updateForm() {
    const subject = document.getElementById('subject').value;
    const form = document.getElementById('subjectForm');
    const subjectConfig = subjectsConfig[subject];

    form.innerHTML = ''; // Clear the form first

    // Generate input fields based on the selected subject
    subjectConfig.components.forEach(component => {
        form.innerHTML += `
            <input type="number" id="${component.id}" placeholder="${component.name}" required 
                min="0" max="${component.max}">
        `;

        // Add input event listener to each component for real-time capping
        const inputField = document.getElementById(component.id);
        inputField.addEventListener('input', function() {
            // Cap the score as user types
            let value = parseFloat(inputField.value);

            if (isNaN(value)) value = 0; // In case the input is empty or invalid

            // Cap value within the specified min/max range
            value = Math.min(Math.max(value, 0), component.max);

            // Update the input field with the capped value
            inputField.value = value;
        });
    });
}

// Initial call to set up the form for the default subject (Python)
updateForm();

// Function to calculate the final grade
    

        // Loop through components and calculate the final grade
            function calculateGrade() {
                const subject = document.getElementById('subject').value;
                const subjectConfig = subjectsConfig[subject];
                let finalGrade = 0;

                // Initialize all components to zero if not entered
                let quiz1 = 0, quiz2 = 0, endterm = 0, gaa = 0, bonus = 0, activity = 0, pe1 = 0, pe2 = 0, gaa1 = 0, gaa2 = 0;

                // Loop through components and calculate the final grade
                subjectConfig.components.forEach(component => {
                    let value = parseFloat(document.getElementById(component.id).value);

                    // If the value is empty or invalid, set it to zero
                    if (isNaN(value)) {
                        value = 0;
                    }

                    // Cap the value within the specified min/max range
                    value = Math.min(Math.max(value, 0), component.max);

                    // Assign values to specific variables for subject-specific logic
                    if (component.id === 'quiz1') quiz1 = value;
                    if (component.id === 'quiz2') quiz2 = value;
                    if (component.id === 'endterm') endterm = value;
                    if (component.id === 'gaa') gaa = value;
                    if (component.id === 'bonus') bonus = value;
                    if (component.id === 'act') activity = value;
                    if (component.id === 'gaa1') gaa1 = value;
                    if (component.id === 'gaa2') gaa2 = value;
                    if (component.id === 'pe1') pe1 = value;
                    if (component.id === 'pe2') pe2 = value;

                    // Add the capped value to the final grade
                    finalGrade += value;
                });

    // Handle Python-specific grading formula:
    if (subject === 'python') {
        const maxPE = Math.max(pe1, pe2);
        const minPE = Math.min(pe1, pe2);

        finalGrade = 0.1 * gaa1 + 0.1 * gaa2 + 0.1 * quiz1 + 0.4 * endterm + 0.25 * maxPE + 0.15 * minPE + bonus;
    } else {
        const maxQuiz = Math.max(quiz1, quiz2);
        const term1 = 0.6 * endterm + 0.2 * maxQuiz;
        const term2 = 0.4 * endterm + 0.2 * quiz1 + 0.3 * quiz2;

        // Choose the best of the two terms
        finalGrade = 0.1 * gaa + Math.max(term1, term2) + bonus + activity;
    }

    // Cap the grade at 100
    finalGrade = Math.min(finalGrade, 100);

    // Display the final grade
    document.getElementById('finalGrade').textContent = finalGrade.toFixed(2);

    // Determine letter grade
    let letterGrade = '';
    if (finalGrade >= 89) {
        letterGrade = 'S';
    } else if (finalGrade >= 79) {
        letterGrade = 'A';
    } else if (finalGrade >= 69) {
        letterGrade = 'B';
    } else if (finalGrade >= 59) {
        letterGrade = 'C';
    } else if (finalGrade >= 49) {
        letterGrade = 'D';
    } else if (finalGrade >= 39) {
        letterGrade = 'E';
    } else {
        letterGrade = 'F(fail)';
    }

    // Display the letter grade
    document.getElementById('letterGrade').textContent = letterGrade;
}

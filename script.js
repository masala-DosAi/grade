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
    // Add other subjects as needed...
};

function updateForm() {
    const subject = document.getElementById('subject').value;
    const form = document.getElementById('subjectForm');
    const subjectConfig = subjectsConfig[subject];

    // Clear the form
    form.innerHTML = '';

    // Generate input fields based on the selected subject
    subjectConfig.components.forEach(component => {
        const inputField = `
            <div>
                
                <input 
                    type="number" 
                    id="${component.id}" 
                    placeholder="${component.name}" 
                    required 
                    min="0" 
                    max="${component.max}" 
                    oninput="this.value = Math.min(Math.max(this.value, 0), ${component.max})">
            </div>
        `;
        form.innerHTML += inputField;
    });
}

function calculateGrade() {
    const subject = document.getElementById('subject').value;
    const subjectConfig = subjectsConfig[subject];
    let finalGrade = 0;

    // Initialize variables
    let quiz1 = 0, quiz2 = 0, endterm = 0, gaa = 0, bonus = 0, activity = 0, pe1 = 0, pe2 = 0, gaa1 = 0, gaa2 = 0;

    // Loop through components and calculate the final grade
    subjectConfig.components.forEach(component => {
        let value = parseFloat(document.getElementById(component.id).value) || 0;
        value = Math.min(Math.max(value, 0), component.max);

        // Assign specific values for subject logic
        switch (component.id) {
            case 'quiz1': quiz1 = value; break;
            case 'quiz2': quiz2 = value; break;
            case 'endterm': endterm = value; break;
            case 'gaa': gaa = value; break;
            case 'bonus': bonus = value; break;
            case 'act': activity = value; break;
            case 'gaa1': gaa1 = value; break;
            case 'gaa2': gaa2 = value; break;
            case 'pe1': pe1 = value; break;
            case 'pe2': pe2 = value; break;
        }
    });

    // Subject-specific logic
    if (subject === 'python') {
        const maxPE = Math.max(pe1, pe2);
        const minPE = Math.min(pe1, pe2);
        finalGrade = 0.1 * gaa1 + 0.1 * gaa2 + 0.1 * quiz1 + 0.4 * endterm + 0.25 * maxPE + 0.15 * minPE + bonus;
    } else {
        const maxQuiz = Math.max(quiz1, quiz2);
        const term1 = 0.6 * endterm + 0.2 * maxQuiz;
        const term2 = 0.4 * endterm + 0.2 * quiz1 + 0.3 * quiz2;
        finalGrade = 0.1 * gaa + Math.max(term1, term2) + bonus + activity;
    }

    finalGrade = Math.min(finalGrade, 100); // Cap final grade at 100

    // Determine and display grades
    document.getElementById('finalGrade').textContent = finalGrade.toFixed(2);
    const letterGrade = finalGrade >= 89 ? 'S' :
                        finalGrade >= 79 ? 'A' :
                        finalGrade >= 69 ? 'B' :
                        finalGrade >= 59 ? 'C' :
                        finalGrade >= 49 ? 'D' :
                        finalGrade >= 39 ? 'E' : 'F (fail)';
    document.getElementById('letterGrade').textContent = letterGrade;
}

// Initialize form on page load
updateForm();

const subjectsByLevel = {
    foundation: ["ct", "python", "stat1", "stat2", "math1", "math2", "english1", "english2"],
    dip_programming: ["pdsa","dbms","mad1","java","sc","mad2"],
    dip_datascience:["mlf","mlt","mlp","bdm","tds"]
};

const subjectsConfig = {
    python: {
        name: 'python',
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

    pdsa: {
        name: 'PDSA',
        components: [
            { name: 'Quiz 1', id: 'quiz1', max: 100 },
            { name: 'Quiz 2', id: 'quiz2', max: 100 },
            { name: 'oppe', id: 'pe1', max: 100 },
            { name: 'End Term', id: 'endterm', max: 100 },
            { name: 'GA Average', id: 'gaa1', max: 100 },
            { name: 'Bonus', id: 'bonus', max: 2 }
        ]
    },
    dbms: {
        name: 'DBMS',
        components: [
            { name: 'Quiz 1', id: 'quiz1', max: 100 },
            { name: 'Quiz 2', id: 'quiz2', max: 100 },
            { name: 'oppe', id: 'pe1', max: 100 },
            { name: 'End Term', id: 'endterm', max: 100 },
            { name: 'GA Average', id: 'gaa1', max: 100 },
            { name: 'Bonus', id: 'bonus', max: 2 }
        ]
    },
    mad1: {
        name: 'MAD1',
        components: [
            { name: 'Quiz 1', id: 'quiz1', max: 100 },
            { name: 'Quiz 2', id: 'quiz2', max: 100 },
            { name: 'End Term', id: 'endterm', max: 100 },
            { name: 'GA Average', id: 'gaa1', max: 100 },
            { name: 'lab GA avg', id: 'gaa2', max: 100 },
            { name: 'Bonus', id: 'bonus', max: 2 }
        ]
    },
    java: {
        name: 'JAVA',
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

    sc: {
        name: 'SC',
        components: [
            { name: 'Quiz 1', id: 'quiz1', max: 100 },
            { name: 'End Term', id: 'endterm', max: 100 },
            { name: 'OPPE', id: 'pe1', max: 100 },
            { name: 'BPT', id: 'pe2', max: 100 },
            { name: 'GA Average', id: 'gaa', max: 100 },
            { name: 'Bonus', id: 'bonus', max: 2 }
        ]
    },
    mad2:  {
        name: 'MAD2',
        components: [
            { name: 'Quiz 1', id: 'quiz1', max: 100 },
            { name: 'Quiz 2', id: 'quiz2', max: 100 },
            { name: 'End Term', id: 'endterm', max: 100 },
            { name: 'GA Average', id: 'gaa1', max: 100 },
            { name: 'lab GA avg', id: 'gaa2', max: 100 },
            { name: 'Bonus', id: 'bonus', max: 2 }
        ]
    },
    mlf: {
        name: 'ML foundation',
        components: [
            { name: 'Quiz 1', id: 'quiz1', max: 100 },
            { name: 'Quiz 2', id: 'quiz2', max: 100 },
            { name: 'End Term', id: 'endterm', max: 100 },
            { name: 'GA Average', id: 'gaa1', max: 100 },
            { name: 'Bonus', id: 'bonus', max: 2 },
        ]
    },
    mlt: {
        name: 'ML techniques',
        components: [
            { name: 'Quiz 1', id: 'quiz1', max: 100 },
            { name: 'Quiz 2', id: 'quiz2', max: 100 },
            { name: 'End Term', id: 'endterm', max: 100 },
            { name: 'GA Average MCQ', id: 'gaa1', max: 100 },
            { name: 'Bonus', id: 'bonus', max: 2 },
        ]
    },
    mlp: {
        name: 'ML practice',
        components: [
            { name: 'Quiz 1', id: 'quiz1', max: 100 },
            { name: 'OPPE 1', id: 'pe1', max: 100 },
            { name: 'OPPE 2', id: 'pe2', max: 100 },
            { name: 'End Term', id: 'endterm', max: 100 },
            { name: 'GA Average', id: 'gaa1', max: 100 },
            { name: 'NPE1', id: 'npe1', max: 100 },
            { name: 'NPE2', id: 'npe2', max: 100 },
            { name: 'Bonus', id: 'bonus', max: 2 },
        ]
    },
    bdm: {
        name: 'Business Data mang.',
        components: [
            { name: 'Quiz 2', id: 'quiz2', max: 100 },
            { name: 'ROE', id: 'pe1', max: 100 },
            { name: 'End Term', id: 'endterm', max: 100 },
            { name: 'GA Average', id: 'gaa1', max: 100 },
            { name: 'Bonus', id: 'bonus', max: 2 },
        ]
    },
    tds: {
        name: 'tools in DS',
        components: [
            { name: 'ROE', id: 'pe1', max: 100 },
            { name: 'P1', id: 'p1', max: 100 },
            { name: 'P2', id: 'p2', max: 100 },
            { name: 'End Term', id: 'endterm', max: 100 },
            { name: 'GA Average', id: 'gaa1', max: 100 },
            { name: 'Bonus', id: 'bonus', max: 2 },
        ]
    },

};

function updateSubjects() {
    const level = document.getElementById("level").value;
    const subjectSelect = document.getElementById("subject");

    subjectSelect.innerHTML = '<option value="">Select Subject</option>'; // Reset options

    if (subjectsByLevel[level]) {
        subjectsByLevel[level].forEach(subjectKey => {
            let option = document.createElement("option");
            option.value = subjectKey;
            option.textContent = subjectsConfig[subjectKey]?.name || subjectKey;
            subjectSelect.appendChild(option);
        });
    }
}

// Updates the form with input fields based on the selected subject
function updateForm() {
    const subject = document.getElementById("subject").value;
    const form = document.getElementById("subjectForm");

    form.innerHTML = ""; // Clear previous inputs

    if (!subject || !subjectsConfig[subject]) return; // Prevent errors

    subjectsConfig[subject].components.forEach(component => {
        const inputDiv = document.createElement("div");
        const input = document.createElement("input");

        input.type = "number";
        input.id = component.id;
        input.placeholder = component.name;
        input.required = true;
        input.min = 0;
        input.max = component.max;
        input.oninput = function() {
            this.value = Math.min(Math.max(this.value, 0), component.max);
        };

        inputDiv.appendChild(input);
        form.appendChild(inputDiv);
    });
}

function calculateGrade() {
    const subject = document.getElementById("subject").value;
    
    if (!subject || !subjectsConfig[subject]) {
        alert("Please select a valid subject.");
        return;
    }

    const subjectConfig = subjectsConfig[subject];
    let finalGrade = 0;

    let npe1=0,p1=0,p2=0, npe2=0 ,quiz1 = 0, quiz2 = 0, endterm = 0, gaa = 0, bonus = 0, activity = 0, pe1 = 0, pe2 = 0, gaa1 = 0, gaa2 = 0;

    subjectConfig.components.forEach(component => {
        let value = parseFloat(document.getElementById(component.id)?.value) || 0;
        value = Math.min(Math.max(value, 0), component.max);

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
            case 'npe1':npe1=value;break;
            case 'npe2':npe2=value;break;
            case 'p1':p1=value;break;
            case 'p2':p2=value;break;
        }
    });

    // Apply subject-specific formulas
    if (subject === 'python') {
        const maxPE = Math.max(pe1, pe2);
        const minPE = Math.min(pe1, pe2);
        finalGrade = 0.1 * gaa1 + 0.1 * gaa2 + 0.1 * quiz1 + 0.4 * endterm + 0.25 * maxPE + 0.15 * minPE + bonus;
    } 
    else if (subject === 'pdsa') {
        finalGrade = 0.1 * gaa1 + 0.4 * endterm + 0.2 * pe1 + Math.max(0.2 * Math.max(quiz1, quiz2), 0.15 * quiz1 + 0.15 * quiz2) + bonus;
    } 
    else if (subject === 'dbms') {
        finalGrade = 0.1 * gaa1 + 0.2 * pe1 + Math.max(0.45 * endterm + 0.15 * Math.max(quiz1, quiz2), 0.4 * endterm + (0.10 * quiz1 + 0.20 * quiz2)) + bonus;
    }
    else if(subject ==='mad1'){
        finalGrade= 0.15*gaa2 + 0.05*gaa1 +Math.max(0.35*endterm +0.2*quiz1+0.25*quiz2,0.4*endterm+0.3*Math.max(quiz1,quiz2))+bonus;
    }
    else if(subject==='java'){
        finalGrade=0.1*gaa1 +0.3*endterm +0.2*Math.max(pe1,pe2) +Math.max(0.25*Math.max(quiz1,quiz2),0.15*quiz1+0.25*quiz2)+bonus;
    }
    else if(subject==='sc'){
        finalGrade=0.10*gaa1 + 0.2*quiz1 +0.3*pe1 +0.3*endterm +0.1*pe2+bonus;

    }
    else if(subject==='mad2'){
        finalGrade=0.05*gaa1 + 0.05*gaa2 + Math.max(0.35*endterm +0.25*quiz1 +0.3*quiz2,0.5*endterm +0.3*Math.max(quiz1,quiz2))+bonus;
    }
    else if(subject==='mlt'){
        finalGrade=0.1*gaa1 +Math.max(0.25*quiz1+0.25*quiz2,0.4*Math.max(quiz1,quiz2))+bonus;

    }
    else if(subject==='mlp'){
        finalGrade=0.1*gaa1 + 0.35*endterm +0.20*pe1 +0.20*pe2 +0.15*quiz1 +Math.max(0.025*npe1,0.025*npe2)+bonus;
    }
    else if(subject==='bdm'){
        finalGrade=0.3*gaa1+ 0.2*quiz2+0.20*pe1 +0.3*endterm+bonus;


    }
    else if(subject==="tds"){
        finalGrade=0.15*gaa1+0.2*pe1+0.2*p1+0.2*p2+0.25*endterm+bonus;

    }
    else {
        
        const maxQuiz = Math.max(quiz1, quiz2);
        const term1 = 0.6 * endterm + 0.2 * maxQuiz;
        const term2 = 0.4 * endterm + 0.2 * quiz1 + 0.3 * quiz2;
        finalGrade = 0.1 * gaa + Math.max(term1, term2) + bonus + activity;
    }

    // Ensure final grade does not exceed 100
    finalGrade = Math.min(finalGrade, 100);

    // Display results
    document.getElementById('finalGrade').textContent = finalGrade.toFixed(2);
    
    const letterGrade = finalGrade >= 89 ? 'S' :
                        finalGrade >= 79 ? 'A' :
                        finalGrade >= 69 ? 'B' :
                        finalGrade >= 59 ? 'C' :
                        finalGrade >= 49 ? 'D' :
                        finalGrade >= 39 ? 'E' : 'U (fail)';
    
    document.getElementById('letterGrade').textContent = letterGrade;
}
document.getElementById("level").addEventListener("change", updateSubjects);
document.getElementById("subject").addEventListener("change", updateForm);
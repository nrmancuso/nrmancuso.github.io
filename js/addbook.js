let submitButton = document.getElementById("submit-button");
let semesterCodeField = document.getElementById("semestercode");
let courseNumberField = document.getElementById("coursenumber");
let courseNameField = document.getElementById("coursename");
let courseLeadCodeField = document.getElementById("courseleadcode");
let courseLeadNameField = document.getElementById("courseleadname");
let ISBNField = document.getElementById("isbn");
let titleField = document.getElementById("title");
let authorField = document.getElementById("author");
let notesField = document.getElementById("notes");

function setAddBookListener(db) {




    submitButton.addEventListener("click", ev => {


        if(allFieldsPassTests()) {

            let semesterCode, courseNumber, courseName, courseLeadCode,
                courseLeadName, ISBN, title, author, notes;


            semesterCodeField ? semesterCode = semesterCodeField.value : semesterCode = "";
            courseNumberField ? courseNumber = courseNumberField.value : courseNumber = "";
            courseNameField ? courseName = courseNameField.value : courseName = "";
            courseLeadCodeField ? courseLeadCode = courseLeadCodeField.value : courseLeadCode = "";
            courseLeadNameField ? courseLeadName = courseLeadNameField.value : courseLeadName = "";
            ISBNField ? ISBN = ISBNField.value : ISBN = "";
            titleField ? title = titleField.value : title = "";
            authorField ? author = authorField.value : author = "";
            notesField ? notes = notesField.value : notes = "";


            db.collection("library").doc(ISBN).set({
                semestercode: semesterCode,
                coursenumber: courseNumber,
                coursename: courseName,
                courseleadcode: courseLeadCode,
                courseleadname: courseLeadName,
                ISBN: ISBN,
                title: title,
                author: author,
                notes: notes

            })
                .then(function () {
                    console.log("Document created!")
                })
                .catch(function (error) {
                    console.error("Error writing document: ", error);
                });

            function sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            }

            async function demo() {
                console.log('Taking a break...');
                await sleep(750);
                console.log('.75 seconds later');
                location.replace("../index.html");

            }

            demo();
        }
    });

}

function allFieldsPassTests() {

    return (semesterCodeFieldCheck() &&
        courseNumberFieldCheck() &&
        courseNameFieldCheck() &&
        courseLeadCodeFieldCheck() &&
        courseLeadNameFieldCheck() &&
        titleFieldCheck() &&
        authorFieldCheck() &&
        notesFieldCheck() &&
        ISBNFieldCheck())
}

function semesterCodeFieldCheck() {

    let length = 0;
    let semesterCode = semesterCodeField.value;

    if (!isNaN(semesterCode) && semesterCode > 1) {
        length = Math.ceil(Math.log10(semesterCodeField.value));

        if(length ===6) {
            return true;
        }

    } else if(semesterCode === "") {
        return true;
    }
    else {
        alert("Semester code field must be in the form YYYY{51, 52, 53}, ex: '201951'");
        return false;
    }


}

function courseNumberFieldCheck() {


    if (courseNumberField.value.length === 6 || courseNumberField.value.length ===0) {
        return true;
    } else {
        alert("Course number field must be in the form XXXDDD, ex: 'CSC264'")
    }
}

function courseNameFieldCheck() {

    if (courseNameField.value.length <= 50) {
        return true;
    } else {
        alert("Course name must be less than 50 characters!");
    }
}

function courseLeadCodeFieldCheck() {

    if (courseLeadCodeField.value.length === 3 || courseLeadCodeField.value.length === 0) {
        return true;
    } else {
        alert("Course lead code must be exactly 3 characters!");
    }
}

function courseLeadNameFieldCheck() {

    if (courseLeadNameField.value.length <= 25) {
        return true;
    } else {
        alert("Course lead name must be less than or equal to 25 characters!");
    }
}

function titleFieldCheck() {

    if (titleField.value.length <= 50) {
        return true;
    } else {
        alert("Book title must be less than or equal to 50 characters!");
    }
}

function authorFieldCheck() {

    if (authorField.value.length <= 50) {
        return true;
    } else {
        alert("Author name must be less than or equal to 50 characters!");
    }
}

function notesFieldCheck() {

    if (notesField.value.length <= 50) {
        return true;
    } else {
        alert("Notes must be less than or equal to 50 characters!");
    }
}

function ISBNFieldCheck() {

    if (ISBNField.value.length === 13 || ISBNField.value.length === 9) {
        return true;
    } else {
        alert("Unique ISBN must be exactly 9 or 13 characters!");
    }
}


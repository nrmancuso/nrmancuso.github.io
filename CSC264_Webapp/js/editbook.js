

let semesterCode = document.getElementById("semestercode");
let courseNumber = document.getElementById("coursenumber");
let courseName = document.getElementById("coursename");
let courseLeadCode = document.getElementById("courseleadcode");
let courseLeadName = document.getElementById("courseleadname");
let ISBN = document.getElementById("isbn");
ISBN.setAttribute("readonly","readonly");
let title = document.getElementById("title");
let author = document.getElementById("author");
let notes = document.getElementById("notes");


if (semesterCode) semesterCode.value = sessionStorage.getItem("semestercode");
if(courseNumber) courseNumber.value = sessionStorage.getItem("coursenumber");
if (courseName) courseName.value = sessionStorage.getItem("coursename");
if (courseLeadCode) courseLeadCode.value = sessionStorage.getItem("courseleadcode");
if (courseLeadName) courseLeadName.value = sessionStorage.getItem("courseleadname");
if (ISBN) ISBN.value = sessionStorage.getItem("isbn");
if (title) title.value = sessionStorage.getItem("title");
if (author) author.value = sessionStorage.getItem("author");
if (notes) notes.value = sessionStorage.getItem("notes");
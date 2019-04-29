const tableSectionElement = document.getElementById("tbody");

// create element & render card
function renderEntries(doc) {
    let tableRowElement = document.createElement("TR");

    let editBox = document.createElement('td');
    editBox.setAttribute("class", "center");

    let pencilImg = document.createElement("img");
    pencilImg.setAttribute("src", "img/pencil.png");
    pencilImg.style.cursor = "pointer";
    editBox.appendChild(pencilImg);

    let trashImg = document.createElement("img");
    trashImg.setAttribute("src", "img/trashicon.png");
    trashImg.style.cursor = "pointer";
    editBox.appendChild(trashImg);

    let title = document.createElement('td');
    let author = document.createElement('td');
    let semesterCode = document.createElement('td');
    let ISBN = document.createElement('td');
    let courseLeadCode = document.createElement('td');
    let courseLeadName = document.createElement('td');
    let courseName = document.createElement('td');
    let courseNumber = document.createElement('td');
    let notes = document.createElement('td');


    ISBN.textContent = doc.data().ISBN;
    title.textContent = doc.data().title;
    author.textContent = doc.data().author;
    semesterCode.textContent = doc.data().semestercode;
    courseLeadCode.textContent = doc.data().courseleadcode;
    courseName.textContent = doc.data().coursename;
    courseNumber.textContent = doc.data().coursenumber;
    courseLeadName.textContent = doc.data().courseleadname;
    notes.textContent = doc.data().notes;

    pencilImg.addEventListener("click", ev => {

        //Check if user is logged in
        var user = firebase.auth().currentUser;

        if (user) {
            //Get cell info
            const row = pencilImg.parentNode.parentNode;

            let rowElementArray = [];

            for (let i = 1, col; col = row.cells[i]; i++) {
                //console.log(col.innerText);
                rowElementArray[i - 1] = col.innerText;
            }

            //Add elements to session storage
            sessionStorage.setItem("semestercode", rowElementArray[2]);
            sessionStorage.setItem("coursenumber", rowElementArray[7]);
            sessionStorage.setItem("coursename", rowElementArray[6]);
            sessionStorage.setItem("courseleadcode", rowElementArray[4]);
            sessionStorage.setItem("courseleadname", rowElementArray[5]);
            sessionStorage.setItem("isbn", rowElementArray[3]);
            sessionStorage.setItem("title", rowElementArray[0]);
            sessionStorage.setItem("author", rowElementArray[1]);
            sessionStorage.setItem("notes", rowElementArray[8]);

            //Open edit page
            location.replace("html/editbook.html");

        } else {
            alert("Must be logged in to do that!")
        }

    });

    trashImg.addEventListener("click", ev => {

        //let libraryRef = db.collection("library");

        var user = firebase.auth().currentUser;
        let ISBNofBookToDelete;
        let confirmDelete;

        if (user) {
            confirmDelete = confirm("Are you sure you want to delete this entry?");
        }

        if (user && confirmDelete) {
            //Get cell info
            const row = pencilImg.parentNode.parentNode;

            let rowElementArray = [];

            for (let i = 1, col; col = row.cells[i]; i++) {
                //console.log(col.innerText);
                rowElementArray[i - 1] = col.innerText;
            }

            ISBNofBookToDelete = rowElementArray[3];

            //console.log(ISBNofBookToDelete);

            db.collection("library").doc(ISBNofBookToDelete)
                .delete()
                .then(function () {
                    console.log("Document successfully deleted!");
                }).catch(function (error) {
                console.error("Error removing document: ", error);
            });

        } else if (!confirmDelete) {
            return;
        } else {
            alert("Must be logged in to do that!")
        }

    });


    tableRowElement.appendChild(editBox);
    tableRowElement.appendChild(title);
    tableRowElement.appendChild(author);
    tableRowElement.appendChild(semesterCode);
    tableRowElement.appendChild(ISBN);
    tableRowElement.appendChild(courseLeadCode);
    tableRowElement.appendChild(courseLeadName);
    tableRowElement.appendChild(courseName);
    tableRowElement.appendChild(courseNumber);
    tableRowElement.appendChild(notes);

    //console.log(tableRowElement.valueOf());

    tableRowElement.id = doc.data().ISBN;

    tableSectionElement.appendChild(tableRowElement);
}

/*//getting data
    db.collection('library').get().then(snapshot => {
        snapshot.docs.forEach(doc => {
            renderEntries(doc);
        });
    });*/

// real-time listener
db.collection('library').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        //console.log(change.doc.data());
        if (change.type === 'added') {
            renderEntries(change.doc);
        } else if (change.type === 'removed') {
            let docToRemove  = document.getElementById(change.doc.id);
            docToRemove.parentNode.removeChild(docToRemove);

        }
    });
});


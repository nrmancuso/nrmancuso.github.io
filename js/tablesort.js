titleHeader = document.getElementById('titleheader');
authorHeader = document.getElementById('authorheader');
semesterCodeHeader = document.getElementById('semestercodeheader');
isbnHeader = document.getElementById('isbnheader');
courseLeadCodeHeader = document.getElementById('courseleadcodeheader');
courseLeadNameHeader = document.getElementById('courseleadnameheader');
courseNameHeader = document.getElementById('coursenameheader');
courseNumberHeader = document.getElementById('coursenumberheader');

titleHeader.style.cursor = "pointer";
authorHeader.style.cursor = "pointer";
semesterCodeHeader.style.cursor = "pointer";
isbnHeader.style.cursor = "pointer";
courseLeadCodeHeader.style.cursor = "pointer";
courseLeadNameHeader.style.cursor = "pointer";
courseNameHeader.style.cursor = "pointer";
courseNumberHeader.style.cursor = "pointer";


titleHeader.addEventListener("click", ev => {
    sortTable(1);
});

authorHeader.addEventListener("click", ev => {
    sortTable(2);
});

semesterCodeHeader.addEventListener("click", ev => {
    sortTable(3);

});

isbnHeader.addEventListener("click", ev => {
    sortTable(4);

});

courseLeadCodeHeader.addEventListener("click", ev => {
    sortTable(5);

});

courseLeadNameHeader.addEventListener("click", ev => {
    sortTable(6);

});

courseNameHeader.addEventListener("click", ev => {
    sortTable(7);

});

courseNumberHeader.addEventListener("click", ev => {
    sortTable(8);

});

function sortTable(n) {
    let table, rows, switching, i, x, y, switchFlag, dir, counter = 0;

    table = document.getElementById("tbody");

    switching = true;

    dir = "ascending";

    //keep sorting until sorted!
    while (switching) {

        switching = false;
        rows = table.rows;

        for (i = 0; i < (rows.length - 1); i++) {

            switchFlag = false;

            x = rows[i].getElementsByTagName("td")[n];
            y = rows[i + 1].getElementsByTagName("td")[n];
            //Check which direction we should sort in!
            if (dir === "ascending") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    //compare elements!
                    switchFlag = true;
                    break;
                }
            } else if (dir === "descending") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    //compare elements!
                    switchFlag = true;
                    break;
                }
            }
        }
        if (switchFlag) {
            //OK, we need to check if we're done
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            // Counter:
            counter++;
        } else {
            //Gotta put this in here if we're descending
            if (counter === 0 && dir === "ascending") {
                dir = "descending";
                switching = true;
            }
        }
    }
}
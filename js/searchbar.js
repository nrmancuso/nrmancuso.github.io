function search() {

  // Declare variables
    let input, filter, row, i, txtValue;
    input = document.getElementById('searchTerms');
    filter = input.value.toUpperCase();
    let table = document.getElementById("tbody");
    let tableRow = table.getElementsByTagName('tr');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; row = table.rows[i]; i++) {

        //Just look at the entire row as a string so we don't
        // have to look through each row element!
        txtValue = row.textContent || row.innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tableRow[i].style.display = "";
        } else {
            tableRow[i].style.display = "none";
        }
    }
}




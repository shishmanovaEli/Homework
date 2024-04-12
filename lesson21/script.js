function addCustomar() {
    var firtsName = document.getElementById('first_name').value;
    var lastName = document.getElementById('last_name').value;
    var address = document.getElementById('address').value;

    var table = document.getElementById('table');
    var newRow = table.insertRow(-1);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);

    cell1.innerHTML = firtsName;
    cell2.innerHTML = lastName;
    cell3.innerHTML = address;

}

function removeLastEvent() {
    var table = document.getElementById('table');
    var rowCount = table.rows.length;

    if (rowCount > 1) {
        table.deleteRow(rowCount - 1);
    } else {
        alert("No entries to remove!");
    }
}
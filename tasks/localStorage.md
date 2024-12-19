To store your data in `localStorage` and update it when the user makes edits, you need to follow these steps:

### 1. **Fetch data using AJAX and store it in a variable**
   This is your current setup where you're fetching the data and displaying it in a DataTable. Once the data is retrieved, you'll save it in the `localStorage` for persistence across sessions.

### 2. **Display the fetched data in the DataTable**
   You're already displaying the data in the DataTable. When the data is retrieved from the AJAX request, you should store it both in a JavaScript variable and in `localStorage`.

### 3. **Save data to `localStorage` initially**
   After fetching the data, save it to `localStorage`:

```javascript
// Assume data is fetched via AJAX and stored in 'data' variable
$.ajax({
    url: 'your-api-endpoint',
    method: 'GET',
    success: function(data) {
        // Store the data in a variable
        let tableData = data; // The data you get from the server

        // Store it in localStorage as a JSON string
        localStorage.setItem('tableData', JSON.stringify(tableData));

        // Initialize the DataTable with this data
        $('#example').DataTable({
            data: tableData,
            columns: [
                { data: 'name' },  // Adjust columns to your actual data structure
                { data: 'age' },
                { data: 'address' }
            ]
        });
    }
});
```

### 4. **Edit data in the DataTable**
   When the user edits a row, capture the changes and update the variable. Then, update the data in `localStorage`.

   Assuming you allow users to click on a row to edit it:

```javascript
// Example: Handling row click to edit data
$('#example tbody').on('click', 'tr', function() {
    var data = $('#example').DataTable().row(this).data();
    
    // Assuming you're opening an edit form to modify the data
    // Pre-fill the edit form with the data from the clicked row
    $('#editForm').find('input[name="name"]').val(data.name);
    $('#editForm').find('input[name="age"]').val(data.age);
    $('#editForm').find('input[name="address"]').val(data.address);
    
    // On form submit, update the table data and localStorage
    $('#editForm').on('submit', function(e) {
        e.preventDefault();

        // Get the updated values from the form
        var updatedData = {
            name: $('#editForm').find('input[name="name"]').val(),
            age: $('#editForm').find('input[name="age"]').val(),
            address: $('#editForm').find('input[name="address"]').val()
        };

        // Update the data in the table
        data.name = updatedData.name;
        data.age = updatedData.age;
        data.address = updatedData.address;

        // Update the DataTable with the new data
        var table = $('#example').DataTable();
        table.row($(this).parents('tr')).data(data).draw();

        // Update the localStorage with the modified data
        let updatedTableData = table.rows().data().toArray(); // Get all rows of data
        localStorage.setItem('tableData', JSON.stringify(updatedTableData));
    });
});
```

### 5. **Load data from `localStorage` when the page loads**
   When the page is refreshed, check if there's data in `localStorage` and load it into the DataTable:

```javascript
$(document).ready(function() {
    // Check if there's saved data in localStorage
    let storedData = localStorage.getItem('tableData');
    let tableData = storedData ? JSON.parse(storedData) : []; // If data exists, parse it; else, default to an empty array

    // Initialize the DataTable with stored data (or empty if nothing in localStorage)
    $('#example').DataTable({
        data: tableData,
        columns: [
            { data: 'name' },  // Adjust columns to your actual data structure
            { data: 'age' },
            { data: 'address' }
        ]
    });
});
```

### 6. **Handle `localStorage` limits**
   Keep in mind that `localStorage` has size limitations (usually around 5MB). If your data grows too large, consider using IndexedDB or another storage method.

### 7. **Consider using `sessionStorage`**
   If you only want to store the data for the current session (and it's okay to lose the data once the browser is closed), you can use `sessionStorage` instead of `localStorage`. The approach is the same, just change `localStorage` to `sessionStorage`.

---

### Recap of the Steps:
1. **Fetch data via AJAX** and save it to a variable.
2. **Store the data in `localStorage`** after fetching.
3. **Display the data in a DataTable.**
4. **Allow users to edit data** in the DataTable.
5. **Update the data in the table and `localStorage`** when the user saves changes.
6. **Load data from `localStorage`** when the page is reloaded.

This ensures that the user's changes persist even after they refresh the page or reopen the browser.

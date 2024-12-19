$(document).ready(function() {
    var myTable;
    var tableData;

    // Step 1: Check if data exists in localStorage
    if (localStorage.getItem('tableData')) {
        // Retrieve the stored data if available
        tableData = JSON.parse(localStorage.getItem('tableData'));
        initializeTable(tableData);
    } else {
        // If no data in localStorage, fetch from the JSON file
        $.ajax({
            url: './json.json', // Update this to your actual JSON file or API endpoint
            method: 'GET',
            success: function(data) {
                tableData = data.data; // Assuming your JSON has a "data" property
                localStorage.setItem('tableData', JSON.stringify(tableData)); // Save to localStorage
                initializeTable(tableData);
            }
        });
    }

    // Step 2: Initialize the DataTable
    function initializeTable(data) {
        myTable = $("#myTable").DataTable({
            data: data,
            columns: [
                { data: "Name" },
                { data: "Ext" },
                { data: "City" },
                { data: "Start Date" },
                { data: "Completion" },
                {
                    mData: null,
                    bSortable: false,
                    mRender: function() {
                        return `<button class="btn btn-info btn-sm">Edit</button>`;
                    }
                }
            ],
            columnDefs: [
                {
                    targets: [0, 1, 2, 3, 4],
                    render: function(data) {
                        return `<span class="form-control">${data}</span>`;
                    }
                }
            ]
        });
    }

    var rowIndex;
    var rowData;

    // Step 3: Handle row click to edit data
    $("#myTable").on("click", ".btn", function() {
        var row = $(this).closest("tr");
        rowIndex = myTable.row(row).index();
        rowData = myTable.row(rowIndex).data();

        // Edit each cell in the row
        row.find("td").each(function(index) {
            var cell = $(this);
            var cellValue = cell.text();

            if (index < 5) {
                // Convert the cell data into an input field
                cell.html(`<input type="text" class="form-control" value="${cellValue}" />`);
            } else {
                // Add Save and Cancel buttons for the last cell (action column)
                cell.html(`
                    <div class="action_btn" style="display:flex;">
                        <button class="savebtn" id="save_btn">Save</button>
                        <button class="cancelbtn" id="cancel_btn">Cancel</button>
                    </div>
                `);
            }
        });
    });

    // Step 4: Save button click event
    $("#myTable").on("click", "#save_btn", function() {
        var row = $(this).closest("tr");
        row.find("td").each(function(index) {
            var cell = $(this);

            if (index < 5) {
                // Get updated value from input field
                var inputValue = cell.find("input").val();
                rowData[Object.keys(rowData)[index]] = inputValue;

                // Update the DataTable cell
                cell.html(`<span class="form-control">${inputValue}</span>`);
            } else {
                // Replace action buttons with the Edit button
                cell.html(`<button class="btn btn-info btn-sm">Edit</button>`);
            }
        });

        // Step 5: Update data in localStorage
        let updatedTableData = myTable.rows().data().toArray(); // Get all rows of data
        localStorage.setItem('tableData', JSON.stringify(updatedTableData));

        // Manually update the DataTable row
        myTable.row(rowIndex).data(rowData).invalidate(); // Invalidate and refresh the specific row data
    });

    // Step 6: Cancel button click event
    $("#myTable").on("click", "#cancel_btn", function() {
        var row = $(this).closest("tr");

        row.find("td").each(function(index) {
            var cell = $(this);
            var originalValue = rowData[Object.keys(rowData)[index]];

            if (index < 5) {
                // Restore original value in cell
                cell.html(`<span class="form-control">${originalValue}</span>`);
            } else {
                // Replace action buttons with the Edit button
                cell.html(`<button class="btn btn-info btn-sm">Edit</button>`);
            }
        });
    });
});

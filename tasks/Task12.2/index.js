$(document).ready(function () {
  var myTable = $("#myTable").DataTable({
    ajax: {
      url: "./json.json",
    },
    columns: [
      { data: "Name" },
      { data: "Ext" },
      { data: "City" },
      { data: "Start Date" },
      { data: "Completion" },
      {
        "mData": null,
        "bSortable": false,
        "mRender": function(data, type, full) {
          return `<button class="btn btn-info btn-sm">  Edit </button>`;
        }
      },
    ], 
    columnDefs: [{
      targets: [0, 1, 2, 3, 4],
      render: function(data, type, row){
        return `<span class="formcontrol">${data}</span>`
      }
    }]
  });
});


$('#myTable').on('click', '.btn', function () {
    var full = $(this).closest('tr').text();
    console.log(full);
});
















// $(document).ready(function () {
//   var myTable = $("#myTable").DataTable({
//     ajax: {
//       url: "./json.json", // replace with your JSON file URL
//     },
//     columns: [
//       { data: "Name" },
//       { data: "Ext" },
//       { data: "City" },
//       { data: "Start Date" },
//       { data: "Completion" },
//       {
//         // Add "Edit" button in the last column
//         data: null,
//         defaultContent: '<button class="editBtn">Edit</button>',
//         orderable: false, // Disable sorting for the Edit column
//       },
//     ],
//     columnDefs: [{
//       targets: [0, 1, 2, 3, 4],
//       render: function(data, type, row){
//         return `<span class="formcontrol">${data}</span>`;
//       }
//     }]
//   });

//   // Handle the click event on the "Edit" button
//   $('#myTable tbody').on('click', '.editBtn', function () {
//     var row = myTable.row($(this).closest('tr')); // Get the row
//     var rowData = row.data(); // Get the row data
    
//     // Change the cells to input fields
//     var rowNode = $(row.node());
//     rowNode.find('td').each(function (index) {
//       var cell = $(this);
//       var column = myTable.column(index); // Get the column index

//       // Skip the "Edit" button column
//       if (index !== 5) {
//         var originalData = rowData[column.index()];
//         var inputHtml = `<input type="text" class="edit-input" value="${originalData}">`;
//         cell.html(inputHtml); // Replace the cell content with an input field
//       }
//     });

//     // Change the "Edit" button to a "Save" button
//     $(this).text('Save').removeClass('editBtn').addClass('saveBtn');

//     // Handle the "Save" button click
//     rowNode.on('click', '.saveBtn', function () {
//       var updatedData = {};

//       rowNode.find('td').each(function (index) {
//         var cell = $(this);
//         var input = cell.find('.edit-input');
        
//         if (input.length) {
//           // Get the updated value from the input field
//           var updatedValue = input.val();
//           updatedData[myTable.settings()[0].aoColumns[index].data] = updatedValue;
//         }
//       });

//       // Update the DataTable row with the new data
//       row.data(updatedData).draw();

//       // Reset the button back to "Edit"
//       $(this).text('Edit').removeClass('saveBtn').addClass('editBtn');
//     });
//   });
// });

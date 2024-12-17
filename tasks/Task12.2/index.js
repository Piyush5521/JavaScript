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
      // add action buttons
      {
        mData: null,
        bSortable: false,
        mRender: function (data, type, full) {
          return `<button class="btn btn-info btn-sm">Edit</button>`;
        },
      },
    ],
    columnDefs: [
      {
        targets: [0, 1, 2, 3, 4],
        render: function (data, type, row) {
          return `<span class="form-control">${data}</span>`;
        },
      },
    ],
  });

  $("#myTable").on("click", ".btn", function () {
    var full = $(this).closest("tr");
    var fullvalue = myTable.row(full).data();
    
    var arr = Object.values(fullvalue);

    // console.log(fullvalue);
    full.find("td").each(function (item) {
      var cell = $(this);

      // console.log(cell.html());

      var celltext = cell.html();

      var abc = $(celltext).text();
      // console.log(abc);

      if (item < 5) {
        cell.html(`<input type="text" class="formcontrol" value="${abc}"/>`);
      } else {
        cell.html(
          `<div class="action_btn" style="display:flex;"><button class="savebtn" id="save_btn">Save</button> <button class="cancelbtn" id="cancel_btn">Cancel</button> </div>`
        );
      }
    });

    full.find("#save_btn").on("click", function () {
      full.find("td input").each(function (i, data) {
        // var updatedData = full.find('td input').val();
        // console.log(data);
        var replaceInput = data;
        var ud = $(data).val();
        arr[i] = ud;
       
        $(replaceInput).replaceWith(`<span class="form-control">${ud}</span>`);
      });
      $("#save_btn").closest("td").replaceWith(`<td><button class="btn btn-info btn-sm">Edit</button></td>`);
      console.log(arr);
    });


    full.find("#cancel_btn").on("click", function () {
      
      full.find("td").each(function (index) {
          var cell = $(this);
          // console.log(cell.html());
  
          if (index < 5 && index < arr.length) { 
              cell.html(`<span>${arr[index]}</span>`);
          } else {
              cell.replaceWith('<td><button class="btn btn-info btn-sm">Edit</button></td>');
          }
      });
  });
  });
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

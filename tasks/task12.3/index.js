$(document).ready(function() {
  var myTable;
  var tableData;

  if (localStorage.getItem('tableData')) {
      tableData = JSON.parse(localStorage.getItem('tableData'));
      initializeTable(tableData);
  } else {

      $.ajax({
          url: './json.json',
          method: 'GET',
          success: function(data) {
              tableData = data.data; 
              localStorage.setItem('tableData', JSON.stringify(tableData)); 
              initializeTable(tableData);
          }
      });
  }


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

  $("#myTable").on("click", ".btn", function() {
      var row = $(this).closest("tr");
      rowIndex = myTable.row(row).index();
      rowData = myTable.row(rowIndex).data();

      row.find("td").each(function(index) {
          var cell = $(this);
          var cellValue = cell.text();

          if (index < 5) {

              cell.html(`<input type="text" class="form-control" value="${cellValue}" />`);
          } else {

              cell.html(`
                  <div class="action_btn" style="display:flex;">
                      <button class="savebtn" id="save_btn">Save</button>
                      <button class="cancelbtn" id="cancel_btn">Cancel</button>
                  </div>
              `);
          }
      });
  });


  $("#myTable").on("click", "#save_btn", function() {
      var row = $(this).closest("tr");
      row.find("td").each(function(index) {
          var cell = $(this);

          if (index < 5) {
              var inputValue = cell.find("input").val();
              rowData[Object.keys(rowData)[index]] = inputValue;

              cell.html(`<span class="form-control">${inputValue}</span>`);
          } else {
              cell.html(`<button class="btn btn-info btn-sm">Edit</button>`);
          }
      });

      var updatedTableData = myTable.rows().data().toArray(); 
      localStorage.setItem('tableData', JSON.stringify(updatedTableData));

      myTable.clear().rows.add(updatedTableData).draw();
  });

  $("#myTable").on("click", "#cancel_btn", function() {
      var row = $(this).closest("tr");

      row.find("td").each(function(index) {
          var cell = $(this);
          var originalValue = rowData[Object.keys(rowData)[index]];

          if (index < 5) {
              cell.html(`<span class="form-control">${originalValue}</span>`);
          } else {
              cell.html(`<button class="btn btn-info btn-sm">Edit</button>`);
          }
      });
  });
});

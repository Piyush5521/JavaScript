$(document).ready(function () {
  var myTable;
  var datataken;

  if (localStorage.getItem("dataTaken")) {
    datataken = JSON.parse(localStorage.getItem("dataTaken"));
    datatablehere(datataken);
  } else {
    $.ajax({
      url: "./json.json",
      success: function (data) {
        datataken = data.data;
        localStorage.setItem("dataTaken", JSON.stringify(datataken));
        datatablehere(datataken);
      },
    });
  }
  function datatablehere(data) {
    myTable = $("#myTable").DataTable({
      data: datataken,
      columns: [
        { data: "Name" },
        { data: "Ext" },
        { data: "City" },
        { data: "Start Date" },
        { data: "Completion" },
        // Add action field
        {
          mData: null,
          bSortable: false,
          mRender: function () {
            return `<button class="btn btn-info btn-sm">Edit</button>`;
          },
        },
      ],
      columnDefs: [
        {
          targets: [0, 1, 2, 3, 4],
          render: function (data) {
            return `<span class="form-control">${data}</span>`;
          },
        },
      ],
    });
  }

  var rowindex;
  var rowData;

  // Edit button
  $("#myTable").on("click", ".btn", function () {
    var full = $(this).closest("tr");

    rowindex = myTable.row(full).index();
    rowData = myTable.row(rowindex).data();

    full.find("td").each(function (item) {
      var cell = $(this);
      var celltext = cell.html();

      var abc = $(celltext).text();

      if (item < 5) {
        cell.html(`<input type="text" class="formcontrol" value="${abc}"/>`);
      } else {
        cell.html(
          `<div class="action_btn" style="display:flex;">
            <button class="savebtn" id="save_btn">Save</button> 
            <button class="cancelbtn" id="cancel_btn">Cancel</button> 
          </div>`
        );
      }
    });
  });

  // Save buton
  $("#myTable").on("click", "#save_btn", function () {
    var full = $(this).closest("tr");

    full.find("td").each(function (item) {
      var cell = $(this);

      if (item < 5) {
        var inputValue = cell.find("input").val();
        rowData[Object.keys(rowData)[item]] = inputValue;

        cell.html(`<span class="form-control">${inputValue}</span>`);
      } else {
        cell.html(`<button class="btn btn-info btn-sm">Edit</button>`);
      }
    });
    let updateTableData = myTable.rows().data().toArray();
    localStorage.setItem("dataTaken", JSON.stringify(updateTableData));

    myTable.row(rowIndex).data(rowData).invalidate();
  });

  //  cancel button
  $("#myTable").on("click", "#cancel_btn", function () {
    var full = $(this).closest("tr");

    full.find("td").each(function (item) {
      var cell = $(this);
      var originalValue = rowData[Object.keys(rowData)[item]];

      if (item < 5) {
        cell.html(`<span class="form-control">${originalValue}</span>`);
      } else {
        cell.html(`<button class="btn btn-info btn-sm">Edit</button>`);
      }
    });
  });
});

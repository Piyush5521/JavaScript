$(document).ready(function () {
  var myTable;
  var datataken;

  const rajasthanCities = [
    "Jaipur",
    "Udaipur",
    "Jodhpur",
    "Kota",
    "Ajmer",
    "Bikaner",
    "Alwar",
    "Sikar",
    "Pali",
    "Churu",
    "Nagaur",
    "Barmer",
    "Tonk",
    "Jhunjhunu",
    "Banswara",
    "Dungarpur",
    "Sirohi",
    "Rajasmand",
    "Bhilwara",
    "Hanumangarh",
    "Rajsamand",
    "Chittorgarh",
    "Jaisalmer",
    "Sawai Madhopur",
    "Dholpur",
    "Kishangarh",
    "Sri Ganganagar",
    "Merta City",
    "Beawar",
    "Nimbahera",
    "Pali",
    "Dausa",
    "Bhilwara",
  ];

  if (localStorage.getItem("datataken")) {
    datataken = JSON.parse(localStorage.getItem("datataken"));
  } else {
    $.ajax({
      url: "./json.json",
      success: function (data) {
        datataken = data.data;
        localStorage.setItem("datataken", JSON.stringify(datataken));
      },
    });
  }
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
        if (item === 2) {
          cell.html(`
                   <label for="cities">Select City: </label>

                    <select name="cities" id="city">
                    ${rajasthanCities.map((city) => [
                      ` <option value="${city}"> ${city}</option>`,
                    ])}
                    </select>
                `);   
        } else if( item === 3) {
            cell.html(`
                    <input type="date" value="2024-12-25" id="myDate">
                `)
        }
        else {
          cell.html(`<input type="text" class="form-control" value="${abc}"/>`);
        }
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
        if (item === 2) {
          var selectedCity = cell.find("select").val();
          cell.html(`<span class="form-control">${selectedCity}</span>`);
          rowData[Object.keys(rowData)[item]] = selectedCity;
        } 
        else if(item === 3) {
            var selectedDate =  cell.find("#myDate").val();
            cell.html(`<span class="form-control">${selectedDate}</span>`);
            rowData[Object.keys(rowData)[item]] = selectedDate;
        }
        else {
          var inputValue = cell.find("input").val();
          rowData[Object.keys(rowData)[item]] = inputValue;

          cell.html(`<span class="form-control">${inputValue}</span>`);
        }
      } else {
        cell.html(`<button class="btn btn-info btn-sm">Edit</button>`);
      }
    });
    let updaterow = myTable.rows().data().toArray();
    console.log(updaterow);
    localStorage.setItem("datataken", JSON.stringify(updaterow));
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

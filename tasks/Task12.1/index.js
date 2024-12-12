let tables = $("#display_data");

const fetchData = async () => {
  const response = await fetch("json.json");
  const data = await response.json();

  var str = "";

  $.each(data, function (key, value) {
    str += `<tr><td class="fieldName"> ${value.Name}</td>
            <td class="fieldExt">${value["Ext."]}</td>
            <td class="fieldCity">${value.City}</td>
            <td class="fieldStartDate"> ${value["Start Date"]} </td>
            <td class="fieldCompletion">${value.Completion}</td>
            </tr>`;
  });

  tables.html(str);

  let table = new DataTable('#myTable')
//   $(document).ready(function() {
//     $(table).dataTable( {
//         "pagingType": "simple_incremental_bootstrap"
//     });
//   });

    //   $(document).ready(function() {
    //       $('#myTable').dataTable( {
    //           "pagingType": "bootstrap_input"
    //       } );
    //   });

    $(document).ready(function() {
        $(table).dataTable( {
            "sPaginationType": "listbox"
        } );
    } );

};
fetchData();



//   $(document).ready(function() {
//       $('#myTable').dataTable( {
//           "pagingType": "bootstrap_input"
//       } );
//   });


//   $("#myTable").DataTable({
//     columnDefs: [
//       {
//         targets: 3,
//         render: DataTable.render.moment("YYYY/DD/MM", "Do MMM YYYY"),
//       },
//     ],
//   });
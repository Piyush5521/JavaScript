const tables = $("#display_data");

const fetchData = async () => {
  const response = await fetch("json.json");
  const data = await response.json();

  let str = "";

  $.each(data, function (key, value) {
    str += `<tr><td class="fieldName"> ${value.Name}</td>
              <td class="fieldExt">${value["Ext."]}</td>
              <td class="fieldCity">${value.City}</td>
              <td class="fieldStartDate"> ${value["Start Date"]} </td>
              <td class="fieldCompletion">${value.Completion}</td>
            </tr>`;
  });

  // Append the rows to the table body
  tables.html(str);

  // Initialize DataTable (apply it to the table with ID myTable)
  $('#myTable').DataTable({
    "sPaginationType": "listbox" // Selectbox pagination type
  });
};

fetchData();

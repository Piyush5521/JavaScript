$(document).ready(function () {
  var editor = $("#myTable").DataTable({
    ajax: {
      url: "./json.json",
    },
    columns: [
      { data: "Name" },
      { data: "Ext" },
      { data: "City" },
      { data: "Start Date" },
      { data: "Completion" },
    ],
  });
});

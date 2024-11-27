const fetchData = async () => {
    try {
        const response = await fetch("data.json");
        const data = await response.json();

        const outputDiv = document.getElementById("row");

        // Clear the existing content (if any)
        outputDiv.innerHTML = "";

        data.forEach((item, index) => {
            // Create a new div element with class "col" for each item
            const colDiv = document.createElement("div");
            colDiv.classList.add("col");

            let formattedData = ""; 

            // Loop through each key in the item
            for (const key in item) {
                if (item.hasOwnProperty(key)) {
                    if (key === "url") {
                        // If the key is 'url', wrap it in an anchor tag with target="_blank" for opening in a new tab
                        formattedData += `<a href="${item[key]}" target="_blank">View</a><br>`;
                    } else {
                        formattedData += `<b>${key}:</b>  ${item[key]}<br>`;
                    }
                }
            }

            // Add the formatted data to the new div
            colDiv.innerHTML = formattedData;

            // Append the new div to the output container
            outputDiv.appendChild(colDiv);
        });

        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
fetchData();

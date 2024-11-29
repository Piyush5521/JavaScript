// -2Qm6doTWeDl4sfJCj3mArnrfHcSdjvnPSd35zi5Uj4
function fetchImages(){
var searchfor = $("#searchfor");
var query = searchfor.val().toLowerCase();

fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=-2Qm6doTWeDl4sfJCj3mArnrfHcSdjvnPSd35zi5Uj4`)

.then(function(response) {
    return response.json();
})

.then(function(data){

    let display = document.querySelector(".row");

    let store = "";

    const images = data.results;

    // If images exist, loop through them and create image elements
    if (images && images.length > 0) {
        images.forEach(image => {
            store += `
                <div class="col"> 
                    <img class="image" src=' ${image.urls.raw}' width="300px"> 
                </div> 
            `;
        });
    } else {
        store = "No images found.";
    }

    display.innerHTML = store;
})

}







// function fetchImages() {
//     // Get the value of the search query using native JavaScript
//     var searchfor = document.getElementById("searchfor");
//     var query = searchfor.value.trim();

//     // Check if the query is not empty
//     if (!query) {
//         alert("Please enter a search term.");
//         return;
//     }

//     // Clear any previous images
//     let display = document.querySelector(".row");
//     display.innerHTML = "";

//     // Perform the fetch operation to the Unsplash API
//     fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=-2Qm6doTWeDl4sfJCj3mArnrfHcSdjvnPSd35zi5Uj4`)
//         .then(function(response) {
//             if (!response.ok) {
//                 throw new Error("Network response was not ok");
//             }
//             return response.json();
//         })
//         .then(function(data) {
//             let store = "";
//             const images = data.results;

//             // If images exist, loop through them and create image elements
//             if (images && images.length > 0) {
//                 images.forEach(image => {
//                     store += `
//                         <div class="col"> 
//                             <img class="image" src="${image.urls.raw}" width="300px"> 
//                         </div>
//                     `;
//                 });
//             } else {
//                 store = "<p>No images found for your search term.</p>";
//             }

//             // Update the display area with the fetched images or a no-results message
//             display.innerHTML = store;
//         })
//         .catch(function(error) {
//             console.error("Error fetching images:", error);
//             display.innerHTML = "<p>There was an error fetching the images. Please try again later.</p>";
//         });
// }

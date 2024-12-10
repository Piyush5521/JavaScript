// -2Qm6doTWeDl4sfJCj3mArnrfHcSdjvnPSd35zi5Uj4

function fetchImages() {
  let searchfor = $("#searchfor");
  let query = searchfor.val().toLowerCase();
  fetch(
    `https://api.unsplash.com/search/photos?query=${query}&client_id=-2Qm6doTWeDl4sfJCj3mArnrfHcSdjvnPSd35zi5Uj4`
  )
    .then(function (response) {
      return response.json();
    })

    .then(function (data) {
      let display = $(".row");

      let store = "";

      const images = data.results;
      
      if (images && images.length > 0) {
        images.forEach((image) => {
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
    });
}

function debounce(cb) {
  let timeout;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb();
    }, 1000);
  };
}

$("#searchfor").on("input", debounce(fetchImages));

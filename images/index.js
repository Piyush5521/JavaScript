let CardImage = $(".card");

const fetchData = async () => {
    const response = await fetch("images.json");
    const data = await response.json();

    const displayImages = (data) => {
        let str = "";
        data.map((item) => {
            str += `<img src="${item.url}" alt="${item.category} class="img" style="margin-right:5px;">`;
        });

        CardImage.html(str);
    }

    displayImages(data);

    $("#car_btn").on("click", function(){
        const filteredData = data.filter((item) => item.category === "car");
        displayImages(filteredData);
    })

    $("#animal_btn").on("click", function(){
        const filteredData = data.filter((item) => item.category === "animal");
        displayImages(filteredData);
    })
}

fetchData();

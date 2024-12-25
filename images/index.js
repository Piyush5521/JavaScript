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

    $("#travel_btn").on("click", function(){
        const filteredData = data.filter((item) => item.category === "travel");
        displayImages(filteredData);
    })

    $("#mountain_btn").on("click", function(){
        const filteredData = data.filter((item) => item.category === "mountain");
        displayImages(filteredData);
    })

        const debounce = (func, delay) => {
        let timeoutId;
        return function(...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func.apply(this, args), delay);
        };
    };

    const searchImages = (query) => {
        const filteredData = data.filter((item) => item.category.toLowerCase().includes(query.toLowerCase()));
        displayImages(filteredData);
    };

    $("#searchfor").on("input", debounce(function() {
        const query = $(this).val();
        searchImages(query);
    }, 1000)); 

}

fetchData();

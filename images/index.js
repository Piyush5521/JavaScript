let CardImage = $(".card");

const fetchData = async () => {
    const response = await fetch("images.json");
    const data = await response.json();

    let str = "";
    data.map((item) => {
        str += `<img src="${item.url}" alt="${item.category} class="img" style="margin-right:5px; width:300px;">`;
    });

    CardImage.html(str);
}

fetchData();

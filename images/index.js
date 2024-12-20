let CardImage = $(".card");

const fetchData = async () => {
    const response = await fetch("images.json");
    const data = await response.json();

    let str = "";
    data.map((item) => {
        str += `<img src="${item.url}" alt="${item.category} width="100px" style="margin-right:5px">`;
    });

    CardImage.html(str);
}

fetchData();

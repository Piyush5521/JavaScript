let CardImage = $(".card");

// Modal elements
const modal = $("#imageModal");
const modalImage = $("#modalImage");
const downloadBtn = $("#downloadBtn");
const closeModal = $("#closeModal");

const fetchData = async () => {
    const response = await fetch("images.json");
    const data = await response.json();

    const displayImages = (data) => {
        let str = "";
        data.map((item) => {
            // Display category's first value on hover
            str += `<div class="image-container">
                        <img src="${item.url}" alt="${item.category.join(', ')}" class="img" style="margin-right:5px;" data-category="${item.category[0]}" data-url="${item.url}">
                    </div>`;
        });

        CardImage.html(str);
    }

    displayImages(data);

    // Handle category filter buttons
    $("#car_btn").on("click", function(){
        const filteredData = data.filter((item) => item.category.includes("car"));
        displayImages(filteredData);
    });

    $("#animal_btn").on("click", function(){
        const filteredData = data.filter((item) => item.category.includes("animal"));
        displayImages(filteredData);
    });

    $("#travel_btn").on("click", function(){
        const filteredData = data.filter((item) => item.category.includes("travel"));
        displayImages(filteredData);
    });

    $("#mountain_btn").on("click", function(){
        const filteredData = data.filter((item) => item.category.includes("mountain"));
        displayImages(filteredData);
    });

    // Debounced search function
    const debounce = (func, delay) => {
        let timeoutId;
        return function(...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func.apply(this, args), delay);
        };
    };

    const searchImages = (query) => {
        const filteredData = data.filter((item) => 
            item.category.some(cat => cat.toLowerCase().includes(query.toLowerCase()))
        );
        displayImages(filteredData);
    };

    $("#searchfor").on("input", debounce(function() {
        const query = $(this).val();
        searchImages(query);
    }, 1000));

    // Hover effect to display the first category
    $(document).on("mouseenter", ".img", function() {
        const category = $(this).data("category");
        $(this).attr("title", category);  // Show category on hover
    });

    // Image click to open in modal
    $(document).on("click", ".img", function() {
        const imageUrl = $(this).data("url");
        modalImage.attr("src", imageUrl);  // Set image in modal
        downloadBtn.attr("href", imageUrl);  // Set download link
        modal.show();  // Show modal
    });

    // Close modal
    closeModal.on("click", function() {
        modal.hide();  // Hide modal
    });

    // Close modal when clicking outside of the modal content
    $(window).on("click", function(event) {
        if (event.target === modal[0]) {
            modal.hide();
        }
    });
}

fetchData();

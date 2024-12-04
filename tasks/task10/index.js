var input = $("#input");

var blogs = $("#blogs");

var data = [];

fetch("https://jsonplaceholder.typicode.com/posts")

.then(function(response){
    return response.json();
})  

.then(function(store){

    data = store;
    var blogCard = "";

    for(let blog of store){

        blogCard += `
            <div class="card">
            <div class="numbers">${blog.id}</div>
            <div class="title">
                ${blog.title}
            </div>
            <div class="body">
                ${blog.body}
            </div>
            </div>
            <br>
        `
    }

    $(blogs).html(blogCard);
})

function search(){

    var inputValue = input.val().toLowerCase();
    var findData = data.filter(item => item.title.toLowerCase().includes(inputValue));
    
    var sd = findData.map(item => item.title );

    $(blogs).html(sd);
}


function filter_data(callback){
    
    let timeout;
    
    return () => {
        clearTimeout(timeout);
        timeout =  setTimeout(() => {
            callback();
        }, 1000)
    }
}

$(input).on("input", filter_data(search));




/*

var input = $("#input");
var blogs = $("#blogs");
var data = [];


function renderBlogs(blogsData) {
    var blogCard = "";
    for (let blog of blogsData) {
        blogCard += `
            <div class="card">
                <div class="numbers">${blog.id}</div>
                <div class="title">${blog.title}</div>
                <div class="body">${blog.body}</div>
            </div>
            <br>
        `;
    }
    $(blogs).html(blogCard);
}

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(function(response){
    return response.json();
  })
  .then(function(store){
    data = store;
    // Initial rendering of all blogs
    renderBlogs(store);
  });

function search() {
    var inputValue = input.val().toLowerCase();

    // Filter data based on the input value
    var findData = data.filter(item => item.title.toLowerCase().includes(inputValue));

    // Render the filtered blogs
    renderBlogs(findData);
}


function filter_data(callback){
    let timeout;

    return () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            callback();
        }, 1000);
    }
}


$(input).on("input", filter_data(search));

*/
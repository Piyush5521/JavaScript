var input = $("#input");

var defaultText = $("#default");
var debounceText = $("#debounce");
var throttleText = $("throttle");

const updateDebounceText = debounce((text) => {
  debounceText.text(text);
});

input.on("input", function (e) {
  defaultText.text(e.target.value);
  updateDebounceText(e.target.value);
});

function debounce(cb, delay = 1000) {
  return (...args) => {
    setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

function callback (name, images) {
    console.log(name + images);
}

debounce(callback("sandeep", "books"), 2000);


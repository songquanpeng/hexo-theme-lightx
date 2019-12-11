function loadPoetry() {
  $.get("https://v1.jinrishici.com/all.json", function(poetry) {
    $("#poetry").text(poetry.content);
  });
}

function init() {}


document.addEventListener("DOMContentLoaded", function(event) {
  init();
  loadPoetry();
});

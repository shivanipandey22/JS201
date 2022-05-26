var arr = [
  "https://bit.ly/38hBebQ",
  "https://bit.ly/3Gl0pH3",
  "https://bit.ly/3LroEpf",
  "https://bit.ly/3JkIPDp",
  "https://bit.ly/3gGxa5G",
  "https://bit.ly/3wQVjhy",
  "https://bit.ly/3sZ0evL",
  "https://bit.ly/3GLAGpI",
  "https://bit.ly/3BklFue",
];

var i = 0;

setInterval(function () {
  // console.log("movie")
  document.querySelector("#slideshow").innerHTML = "";

  var image1 = document.createElement("img");

  var arr_img = arr;

  //   var slideShow = document.getElementById("slideshow");

  if (i === arr_img.length) {
    i = 0;
  }
  image1.src = arr[i];
  i++;
  document.querySelector("#slideshow").append(image1);
}, 3000);

// <--------------------------       Movie Display        ------------------------------>
let moviedata = JSON.parse(localStorage.getItem("movies"))
// console.log(moviedata);
display(moviedata)

function display(moviedata) {
  moviedata.map(function (elem) {
    let card = document.createElement("div")
    card.setAttribute("id","div")

    let poster = document.createElement("img");
    poster.src = elem.Poster;

    let title = document.createElement("h5");
    title.textContent = elem.Title;

    let year = document.createElement("h5");
    year.textContent = elem.Year;

    let ratId = document.createElement("h5");
    ratId.textContent = `imdbID: ${elem.imdbID}`

    card.append(poster, title, year, ratId);

    document.querySelector("#movies").append(card);
  });
}


// <--------------------------Movie Data------------------------>
var moviearr = [
  {
    Title: "Ivan Ironman Stewart's Super Off Road",
    Year: "1989",
    imdbID: "tt0162408",
    Poster: "https://m.media-amazon.com/images/M/MV5BZDMwMWUyNDAtZmM3Ny00ZGM2LTg5MTItYmZiNzM1NzAyNGJmXkEyXkFqcGdeQXVyNzg5OTk2OA@@._V1_SX300.jpg"
  },
  {
    Title: "Hulk",
    Year: "2003",
    imdbID: "tt0286716",
    Poster: "https://m.media-amazon.com/images/M/MV5BMzQwZDg1MGEtN2E5My00ZDJlLWI4MzItM2U2MjJhYzlkNmEzXkEyXkFqcGdeQXVyNDAxNjkxNjQ@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
  },
  {
    Title: "Avengers Assemble",
    Year: "2012",
    imdbID: "tt2455546",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTY0NTUyMDQwOV5BMl5BanBnXkFtZTgwNjAwMTA0MDE@._V1_SX300.jpg"
  },
  {
    Title: "Thor",
    Year: "2011",
    imdbID: "tt0800369",
    Poster: "https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"
  },
  {
    Title: "Almighty Thor",
    Year: "2011",
    imdbID: "tt1792794",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTcwNjI5MTAzNF5BMl5BanBnXkFtZTcwNTcyOTIwNQ@@._V1_SX300.jpg"
  },
  {
    Title: "Krrish 3",
    Year: "2013",
    imdbID: "tt1029231",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjI0MzU3MTM1Ml5BMl5BanBnXkFtZTgwOTk2MjQ0MDE@._V1_SX300.jpg"
  },
  {
    Title: "RRR",
    Year: "2022",
    imdbID: "tt8178634",
    Poster: "https://m.media-amazon.com/images/M/MV5BODUwNDNjYzctODUxNy00ZTA2LWIyYTEtMDc5Y2E5ZjBmNTMzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
  },
  {
    Title: "Mickey Mouse",
    Year: "1999",
    imdbID: "tt0130121",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTkyODU0MTA1MF5BMl5BanBnXkFtZTcwNzEzODcxMQ@@._V1_.jpg"
  },
]

localStorage.setItem("movies", JSON.stringify(moviearr));

// <----------------------slideshow ------------------------->


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
    card.setAttribute("id", "div")

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

function sortfunc() {
  console.log("sort is working");
  var sortedData = document.getElementById("sort").value;
  if (sortedData == "sort-lh") {
    let x = moviedata.sort(function (a, b) {
      // console.log("x is",x)
      if (a.imdbID > b.imdbID) {
        return 1;
      }
      if (a.imdbID < b.imdbID) {
        return -1;
      }
      return 0;
    });
    // console.log(x);
    display(x);
  }

  if (sortedData == "sort-hl") {
    // console.log(temp.Search)
    let x = moviedata.sort(function (a, b) {
      if (a.imdbID < b.imdbID) {
        return 1;
      }
      if (a.imdbID > b.imdbID) {
        return -1;
      }
      return 0;
    });
    // console.log(x);
    display(x);
  }

  display(moviedata);
}







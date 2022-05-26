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
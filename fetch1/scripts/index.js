//fetch 

async function fetchData(){
    let moviename = document.getElementById("entermovie").value;
    try {
       
       let res = await fetch (`http://www.omdbapi.com/?apikey=b20d1415&s=${moviename}`) 
       if (res) {
        let data = await res.json()
        console.log("data:",data)
        display(data)
       } else {
           console.log("Oops,Movie not found")
       }
    } catch (error) {
        console.log("error",error.message)
    }
}
 //to append data
function display (data){
    document.querySelector("#movie").innerHTML = "";
    data.Search.map(function (el) {      
    var div = document.createElement("div")

    var image =  document.createElement("img");
    image.src=el.Poster
    
    var title =  document.createElement("h2")
    title.textContent= el.Title 

    var year =  document.createElement("h5")
    year.textContent= `Year of Release : ${el.Year}`

    
    var imdbRating =  Math.floor(Math.random() * (10 - 5 + 1) + 5);
   

    if (imdbRating > 8.5) {
    var recommended = document.createElement("p");
    recommended.textContent = "#Recommended to Watch";
    div.append(image,title,year,imdbRating, recommended);
    } else {
    div.append(image,title,year,imdbRating);
    }
    document.querySelector("#movie").append(div)
})
}


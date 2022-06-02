//fetch 

async function fetchData(){
    let moviename = document.getElementById("entermovie").value;
    try {
       
       let res = await fetch (`http://www.omdbapi.com/?apikey=b20d1415&t=${moviename}`) 
        let data = await res.json()
       console.log("data:",data)
       display(data)
    } catch (error) {
        console.log("error")
    }
}
 //to append data
function display (data){
    var div = document.createElement("div")

    var image =  document.createElement("img");
    image.src=data.Poster
    
    var title =  document.createElement("h2")
    title.textContent= data.Title 

    var year =  document.createElement("h5")
    year.textContent= `Year of Release : ${data.Year}`

    var rating =  document.createElement("h5")
    rating.textContent= `imdbRating :${data.imdbRating}`;
    
    div.append(image,title,year,rating)

    document.querySelector("#movie").append(div)



}




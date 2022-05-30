// Add the coffee to local storage with key "coffee"
 var bucket=[]
async function getCoffeeData (){
    try{
        let coffeeList = await fetch("https://masai-mock-api.herokuapp.com/coffee/menu");

        let data1= await coffeeList.json();
        console.log("data1 :",data1)

        getData(data1)
    }
    catch(error){
        console.log("error:",error);
    }
}
getCoffeeData()

function getData(coffeedata){
coffeedata.menu.data.map(function(item){

     var card=document.createElement("div")

 let image=document.createElement("img")
 image.src=item.image

    let title=document.createElement("p")
    title.textContent=item.title

    let price=document.createElement("p")
    price.textContent=item.price

    let btn=document.createElement("button")
    btn.textContent="Add to Bucket"
    btn.onclick=function(event){
addTobucket(item)
        localStorage.setItem("bucket",card)
    }
    

    card.append(image,title,price,btn)
    document.querySelector("#coffee").append(card);

    })

    function addTobucket(item){
        let bucketprod=JSON.parse(localStorage.getItem("bucketItem"))
        bucket.push(item)
        localStorage.setItem("bucketItem",JSON.stringify(bucket))
    }
}
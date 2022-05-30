
// On clicking remove button the item should be removed from DOM as well as localstorage.
let bucketcart=JSON.parse(localStorage.getItem("bucketItem"))

bucket(bucketcart);
function bucket(bucket){

    bucket.map(function(item){

let card=document.createElement("div")
card.setAttribute("id","cont")

let image=document.createElement("img")
image.src=item.image

let title=document.createElement("p")
title.textContent =item.title

let price=document.createElement("p")
price.textContent =item.price

card.append(image,title,price)
document.querySelector("#bucket").append(card)

})
}

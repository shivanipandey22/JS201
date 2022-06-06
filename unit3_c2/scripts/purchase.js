var purchase=JSON.parse(localStorage.getItem("purchase"))
console.log(purchase)
function display(){
    purchase.map(function(elem){
        var card=document.createElement("div")

        var name=document.createElement("h4")
        name.innerText=elem.name

        var image=document.createElement("img")
        image.src=elem.image

        var price=document.createElement("p")
        price.innerText=elem.price

        card.append(name,image,price)
        document.querySelector("#purchased_vouchers").append(card)
    })
}
display(purchase)
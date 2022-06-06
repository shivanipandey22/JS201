async function voucher(){
    try{
        let res= await fetch("https://masai-vouchers-api.herokuapp.com/api/vouchers")
        let data= await res.json();

        console.log(data);
        displayvoucher(data)
    }
    catch(error){
        console.log(error);
    }
}
voucher()
var purchasearr =[]
function displayvoucher(data){

    data[0].vouchers.map(function(elem){
        var card=document.createElement("div")

        var name=document.createElement("h4")
        name.innerText=elem.name

        var image=document.createElement("img")
        image.src=elem.image

        var price=document.createElement("p")
        price.innerText=elem.price 

        var btn=document.createElement("button")
        btn.innerText="BUY NOW"
        btn.addEventListener("click",function(){
            let user=JSON.parse(localStorage.getItem("user"))
            user.map(function(e){
                if(e.amount >=elem.price){
                    alert("Hurray! purchase successful")
                    purchasearr.push(elem)
                    localStorage.setItem("purchase",JSON.stringify(purchasearr))
                }
                else{
                    alert("Sorry! insufficient balance")
                }
                console.log(purchasearr)
            })
        })
        card.append(name,image,price,btn)
        document.querySelector("#voucher_list").append(card)

    })
}
function userbalance(user){
    console.log(user)
    user.map(function(e){
        let h1=document.createElement("h4")
        h1.innerText=e.amount;
        document.querySelector("#wallet_balance").append(h1)
    })
}
userbalance(user)
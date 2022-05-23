 
let data=JSON.parse(localStorage.getItem("products")) || [];
console.log(data)
 display(data);

 function display(data){
     
    //  let container=document.getElementById("container");
    
     data.map(function(el){
         let card=document.createElement("card");
         let img=document.createElement("img");
         img.src=el.image;
         let price=document.createElement("price");
         price.innerText=el.price;
         let type=document.createElement("type");
         type.innerText=el.type;
         let desc=document.createElement("desc");
         desc.innerText=el.desc;

         card.append(img,price,type,desc);
        document.querySelector("#all_products").append(card);

      });
      
 }
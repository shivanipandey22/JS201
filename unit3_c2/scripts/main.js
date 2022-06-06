document.querySelector("form").addEventListener("submit",signup);
var signed = JSON.parse(localStorage.getItem("userLogin")) || [];

function signup(event) {
    event.preventDefault();

var name= document.querySelector("#name").value;

var email= document.querySelector("#email").value;

var address= document.querySelector("#address").value;

var amount= document.querySelector("#amount").value;

var obj={
    name:name,
    email:email,
    address:address,
    amount:amount,
}
signed.push(obj);
localStorage.setItem("user",JSON.stringify(signed));

console.log(signed);
window.location.href="index.html";

}
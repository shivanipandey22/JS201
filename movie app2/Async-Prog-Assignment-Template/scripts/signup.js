var userarr=[]
function signup(event){
    event.preventDefault();
    let form=document.getElementById("signup");
    // console.log("yes")
    var name = document.querySelector("#name").value;
    var mobile= document.querySelector("#mobile").value;
    var email= document.querySelector("#email").value;
    var pass = document.querySelector("#pass").value;
    var cnfpass = document.querySelector("#cnfpass").value;

    var userData={
        name:name ,
        mobile:mobile,
        email:email,
        pass:pass,
        cnfpass:cnfpass

    }
    userarr.push(userData);
    localStorage.setItem("userData",JSON.stringify(userarr))

    if(name==""||email==""||pass==""||cnfpass==""||mobile==""){
        alert("Please enter all the credentials");
    }
    else if(pass.length<6){
        alert("password length must be greater than 6 digit");
    }
   else if(mobile.length<10){
        alert("Enter a valid mobile number");
    }
  else if(pass!==cnfpass){
        alert("Password not matched");
    }
    else{
alert("signup Successfull");

window.location.href="login.html";
    }
}




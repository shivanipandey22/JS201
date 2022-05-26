document.querySelector("form").addEventListener("submit", login);
    var regdUser = JSON.parse(localStorage.getItem("userData"));
    console.log(regdUser);

    function login(event) {
        event.preventDefault();

        var emailuser = document.querySelector("#email").value;
        var password = document.querySelector("#pass").value;

        var flag = false;
        for (var i = 0; i < regdUser.length; i++) {
            if (regdUser[i].email == emailuser && regdUser[i].pass == password) {
                flag = true;
                break;
            }
        }
        if (flag == true) {
            alert("Login successful");
            window.location.href = "index.html";
        }
        else {
            alert("wrong credential");
        }
    }
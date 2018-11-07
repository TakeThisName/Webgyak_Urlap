
function UserCheck(){
    // 8-25 karakter, nem kezdődhet számmal + ERR üzenet
    document.getElementById("usernameERR").innerHTML = "";
    var userName = document.getElementById("username").value;
    userName = userName.trim();
    
    if (userName.length > 7 && userName.length < 26){
        if (isFinite(userName[0])){
            document.getElementById("usernameERR").innerHTML = "Nem kezdődhet számmal!";
        }
    }
    else {
        document.getElementById("usernameERR").innerHTML = "8 és 25 karakter között";
    }
    
    //console.log(userName.length);
}

function RegForm(){
    form = document.getElementsByTagName("input");
    return form;
}

function UserCheck_2(urlap){
    console.log(urlap[0].value);
}

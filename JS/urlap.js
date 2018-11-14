
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

function PasswChk(){
    var passw = document.getElementById("password").value;
    var passw_b = document.getElementById("password2").value;
    document.getElementById(("passwERR")).innerHTML = "";
    document.getElementById(("passwERR2")).innerHTML = "";
    var cn = 0;
    var ck = 0;
    var csz = 0;
    
    // min 8 karakter
    if (passw.length < 8)
        document.getElementById("passwERR").innerHTML = "Min 8 karakter!";
    
    // kis- nagybetű
    for (var i = 0; i < passw.length; i++){
        if (passw[i] === passw[i].toUpperCase())
            cn++;
        if (passw[i] === passw[i].toLowerCase())
            ck++;
        if (!isNaN(passw[i]))
            csz++;
    }
    if (cn == 0)
        document.getElementById("passwERR").innerHTML = "Nagy betűk is kellenek!";
    if (ck == 0)
        document.getElementById("passwERR").innerHTML = "Kis betűk is kellenek!";
    
    // szám
    if (csz == 0)
        document.getElementById("passwERR").innerHTML = "Számok és betűk is kellenek!";
    // egyezés
    if (passw != passw_b)
        document.getElementById("passwERR2").innerHTML = "A jelszavak nem egyeznek!";
    
    
}

function RegForm(){
    form = document.getElementsByTagName("input");
    return form;
}

function UserCheck_2(urlap){
    console.log(urlap[0].value);
}

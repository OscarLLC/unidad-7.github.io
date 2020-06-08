let user = "oscar";
let password = "12345";

function receiveData(keyboarUser, keyboarPassword){
    if(keyboarUser === user && keyboarPassword === password){
        return true;
    }else{
        return false;
    }
}

function login(){
    let usuario = document.getElementById("input-user").value;
    let clave = document.getElementById("input-password").value;
    if(receiveData(usuario,clave)){
        window.location.href="file:///C:/Users/Oscar%20Lopez/Documents/Proyects/Unidad-7/src/home.html";
    }else{
        alert("usuario o contraseña incorrectos...!");
    }
}


function validate(){
    if(userName || password === ""){
        alert("Todos los campos son obligatios");
        return false;
    }
}
let user = "oscar";
let password = "123";

function recibirData(keyboarUser, keyboarPassword){
    if(keyboarUser === user && keyboarPassword){
        return true;
    }else{
        return false;
    }
}

function login(){
    let usuario = document.getElementById("input-user").value;
    let clave = document.getElementById("input-password").value;
    if(recibirData(usuario,clave)){
        window.location.href="file:///C:/Users/Oscar%20Lopez/Documents/Proyects/Unidad-7/index.html";
    }else{
        alert("error usuario o contraseña incorrectos..!")
    }
}
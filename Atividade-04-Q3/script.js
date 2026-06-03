const usuario = document.getElementById("usuario");
const senha = document.getElementById("senha");
const btnEntrar = document.getElementById("btnEntrar");

btnEntrar.addEventListener("click", function(){

    if(usuario.value === "admin" && senha.value === "admin"){

        sessionStorage.setItem("token", "jwt123");
        alert("Login realizado com sucesso!");

    }else{

        alert("Usuário ou senha inválidos!");

    }

});
const personagem = document.getElementById("personagem");
const obstaculo = document.getElementById("obstaculo");

function jump() {
    if(personagem.classList != "jump"){

        personagem.classList.add("jump");

    setTimeout(function(){
        personagem.classList.remove("jump");
    }, 300);
    }
}

let umVivo = setInterval(function () {
     
    let persoTop = parseInt(window.getComputedStyle(personagem).getPropertyValue("top"));
    let cactoEsquerda = parseInt(
        window.getComputedStyle(obstaculo).getPropertyValue("left")
        );

        if(cactoEsquerda <30 && cactoEsquerda > 0 && persoTop >=130){
            alert("You lost!");
        }
}, 10);

document.addEventListener("keydown", function (event){
    jump();
});
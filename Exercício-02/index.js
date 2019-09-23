const gato = document.querySelectorAll(".item__imagem")

    gato.forEach (function(gatineo) {
        gatineo.addEventListener("click", function(evento) {
            evento.target.classList.add("Esconder")
            // evento.target.style.display("none")
        })
    })
 












// (let i = 0; i < gato.length; i++) {
        
//  }


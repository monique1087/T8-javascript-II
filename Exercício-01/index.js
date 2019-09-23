const aluna = ["Adriana", "Ana", "Barbara1", "Barbara2", "Carolzinha", 
"Carolzona", "Priscila1", "Priscila2", "Cecília", "Telma", "Rosana"]

function criarAluna() {

    for (let i = 0; i < aluna.length; i++) {
        let li = document.createElement("li")
        
        listaAlunas.appendChild(li)
        li.textContent = aluna[i]
    }
}
let listaAlunas = document.getElementById("lista-alunas")

criarAluna()

const meuTitulo = document.querySelector(".titulo")

meuTitulo.addEventListener("click", function () {
    console.log("monique")
})




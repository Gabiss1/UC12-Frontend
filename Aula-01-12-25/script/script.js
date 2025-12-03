document.addEventListener("DOMContentLoaded", ()=>{
    const btn_click = document.getElementById("btnEntrarFruta");
    const paragrafo = document.getElementById("contagem");
    const btnLista = document.getElementById("btnNovaLista");
    const btnApagar = document.getElementById("btnApagar");
    const btnTema = document.getElementById("btnTema");

    const body = document.querySelector("body");
    const sectionListas = document.querySelector("#lugarDasListas");

    let counter = 0;

    btn_click.addEventListener("click", ()=>{
        counter++;
        paragrafo.textContent = `Você comeu ${counter} ${counter > 1 ? "Maracujás" : "Maracujá"}!`;
        if (counter > 70) {
            paragrafo.textContent = `Você comeu muitos Maracujázes!`;   
        }
    });

    btnLista.addEventListener("click", ()=>{
        let frutas = ["Maracujá", "Maçã", "Banana", "Mirtilo", "Framboesa", "Tomate", "Abacaxí", "Abacate", "Lucca", "Dragon Fruit"]
        const total = 3;
        const listinha = document.createElement("ol")
        sectionListas.appendChild(listinha)  

        for (let i = 0; i < total; i++) {
            const fruta = document.createElement("li");
            fruta.textContent = frutas[Math.floor(Math.random()*frutas.length)];
            listinha.appendChild(fruta)
        }
        // const listaFrutas = document.createElement("p");
        // listaFrutas.textContent = "Frutas e Frutas e Frutas";
        // body.appendChild(listaFrutas);
    });

    btnApagar.addEventListener("click", ()=>{
        sectionListas.lastChild.remove();
    })

    btnTema.addEventListener("click", ()=>{
        body.classList.toggle("light");
        body.classList.toggle("dark");
    })
})
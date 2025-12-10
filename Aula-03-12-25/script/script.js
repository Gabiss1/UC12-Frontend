document.addEventListener("DOMContentLoaded", ()=>{
    const btnVisibilidade = document.getElementById("btnVisibilidade")
    const textoDaleste = document.getElementById("texto")
    const mudaFundo = document.getElementById("corFundo")
    const body = document.querySelector("body")
    const section3 = document.querySelector("#atividade-3")
    const digitar = document.getElementById("ondeVaiDigitar")
    const aparecer = document.getElementById("ondeVaiAparecer")
    const btnAddItem = document.getElementById("btnAddItem")
    const inputElemento = document.getElementById('meuInput');
    const lista = document.getElementById("lista")

    btnVisibilidade.addEventListener("click", ()=>{
        textoDaleste.classList.toggle('hide');
        // section3.classList.toggle("visivel")
        // section3.classList.toggle("invisivel")
    })

    mudaFundo.addEventListener("mouseover", ()=>{
        mudaFundo.classList.toggle("fundoDiferente");
        mudaFundo.classList.toggle("fundoPadrao");
    })

    mudaFundo.addEventListener("mouseout", ()=>{
        mudaFundo.classList.toggle("fundoDiferente");
        mudaFundo.classList.toggle("fundoPadrao");
    })

    digitar.addEventListener("keyup", (event)=>{
        const teclaDeCaractere = /^.$/u.test(event.key);
        const teclaModificadora = !event.ctrlKey && !event.metaKey && !event.altKey;

        if (teclaDeCaractere && teclaModificadora) {
            aparecer.textContent += event.key.replace(/[^a-zA-Z0-9]/g, '')
        }

        if (event.key == "Backspace") {
            aparecer.textContent = aparecer.textContent.toString().slice(0, aparecer.textContent.length-1)
            console.log(aparecer.textContent.length-1)
        }

        if (event.key == " ") {
            aparecer.textContent += " "
            console.log("Espaço")
        }
    })

    btnAddItem.addEventListener("click", ()=>{
        const itemLista = document.createElement("li");
        const valorDigitado = inputElemento.value;

        itemLista.textContent = valorDigitado

        lista.appendChild(itemLista)
        console.log(valorDigitado)
    })
})

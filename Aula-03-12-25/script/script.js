document.addEventListener("DOMContentLoaded", ()=>{
    const btnVisibilidade = document.getElementById("btnVisibilidade")
    const textoDaleste = document.getElementById("texto")
    const mudaFundo = document.getElementById("corFundo")
    const body = document.querySelector("body")
    const section3 = document.querySelector("#atividade-3")
    const digitar = document.getElementById("ondeVaiDigitar")
    const aparecer = document.getElementById("ondeVaiAparecer")

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

    digitar.addEventListener("keyup", ()=>{
        console.log(digitar.textContent.toString())
        aparecer.textContent = digitar.textContent.toString();
    })
})

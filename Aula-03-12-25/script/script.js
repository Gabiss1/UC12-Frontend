document.addEventListener("DOMContentLoaded", ()=>{
    const btnVisibilidade = document.getElementById("btnVisibilidade")
    const textoDaleste = document.getElementById("texto")
    const body = document.querySelector("body")
    const section3 = document.querySelector("test")

    btnVisibilidade.addEventListener("click", ()=>{
        
        section3.classList.toggle("invisivel")
        section3.classList.toggle("visivel")
    })
})
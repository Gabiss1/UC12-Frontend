const botao = document.getElementById("btnBuscar")
const divFavs = document.getElementById("favoritos")

let favoritos = JSON.parse(localStorage.getItem("favoritos")) || []

atualizarFavoritos()
// Trocar categoria para Entradas
function trocarCategoria(idCategoria) {
  document.getElementById("promocoes").hidden = true;
  document.getElementById("entradas").hidden = true;
  document.getElementById("peixes").hidden = true;
  document.getElementById("fMar").hidden = true;
  document.getElementById("carnes").hidden = true;
  document.getElementById("bebidas").hidden = true;
  document.getElementById("sobremesas").hidden = true;
  document.getElementById(idCategoria).removeAttribute("hidden");
}

document.getElementById("catEntradas").addEventListener("click", function() {
  trocarCategoria("entradas");
});
document.getElementById("navEntradas").addEventListener("click", function() {
  trocarCategoria("entradas");
});

document.getElementById("catPeixes").addEventListener("click", function() {
  trocarCategoria("peixes");
});
document.getElementById("navPeixes").addEventListener("click", function() {
  trocarCategoria("peixes");
});

document.getElementById("catFMar").addEventListener("click", function() {
  trocarCategoria("fMar");
});
document.getElementById("navFMar").addEventListener("click", function() {
  trocarCategoria("fMar");
});

document.getElementById("catCarnes").addEventListener("click", function() {
  trocarCategoria("carnes");
});
document.getElementById("navCarnes").addEventListener("click", function() {
  trocarCategoria("carnes");
});

document.getElementById("catBebidas").addEventListener("click", function() {
  trocarCategoria("bebidas");
});
document.getElementById("navBebidas").addEventListener("click", function() {
  trocarCategoria("bebidas");
});

document.getElementById("catSobremesas").addEventListener("click", function() {
  trocarCategoria("sobremesas");
});
document.getElementById("navSobremesas").addEventListener("click", function() {
  trocarCategoria("sobremesas");
});

document.getElementById("logo").addEventListener("click", function() {
  trocarCategoria("promocoes");
});
document.getElementById("navPromocoes").addEventListener("click", function() {
  trocarCategoria("promocoes");
});

document.getElementById("navLogo").addEventListener("click", function() {
  trocarCategoria("promocoes");
});

// Trocar categoria para Entradas
document.getElementById("catEntradas").addEventListener("click", function() {
  document.getElementById("maisPedidos").hidden = true;
  document.getElementById("sobremesas").hidden = true;
  document.getElementById("peixes").hidden = true;
  document.getElementById("fMar").hidden = true;
  document.getElementById("carnes").hidden = true;
  document.getElementById("bebidas").hidden = true;
  document.getElementById("entradas").removeAttribute("hidden");
});

// Trocar categoria para Peixes
document.getElementById("catPeixes").addEventListener("click", function() {
  document.getElementById("maisPedidos").hidden = true;
  document.getElementById("entradas").hidden = true;
  document.getElementById("sobremesas").hidden = true;
  document.getElementById("fMar").hidden = true;
  document.getElementById("carnes").hidden = true;
  document.getElementById("bebidas").hidden = true;
  document.getElementById("peixes").removeAttribute("hidden");
});

// Trocar categoria para Frutos do Mar
document.getElementById("catFMar").addEventListener("click", function() {
  document.getElementById("maisPedidos").hidden = true;
  document.getElementById("entradas").hidden = true;
  document.getElementById("peixes").hidden = true;
  document.getElementById("sobremesas").hidden = true;
  document.getElementById("carnes").hidden = true;
  document.getElementById("bebidas").hidden = true;
  document.getElementById("fMar").removeAttribute("hidden");
});

// Trocar categoria para Carnes
document.getElementById("catCarnes").addEventListener("click", function() {
  document.getElementById("maisPedidos").hidden = true;
  document.getElementById("entradas").hidden = true;
  document.getElementById("peixes").hidden = true;
  document.getElementById("fMar").hidden = true;
  document.getElementById("sobremesas").hidden = true;
  document.getElementById("bebidas").hidden = true;
  document.getElementById("carnes").removeAttribute("hidden");
});

// Trocar categoria para Bebidas
document.getElementById("catBebidas").addEventListener("click", function() {
  document.getElementById("maisPedidos").hidden = true;
  document.getElementById("entradas").hidden = true;
  document.getElementById("peixes").hidden = true;
  document.getElementById("fMar").hidden = true;
  document.getElementById("carnes").hidden = true;
  document.getElementById("sobremesas").hidden = true;
  document.getElementById("bebidas").removeAttribute("hidden");
});

// Trocar categoria para sobremesas
document.getElementById("catSobremesas").addEventListener("click", function() {
  document.getElementById("maisPedidos").hidden = true;
  document.getElementById("entradas").hidden = true;
  document.getElementById("peixes").hidden = true;
  document.getElementById("fMar").hidden = true;
  document.getElementById("carnes").hidden = true;
  document.getElementById("bebidas").hidden = true;
  document.getElementById("sobremesas").removeAttribute("hidden");
});

// Trocar categoria para Mais Pedidos
document.getElementById("logo").addEventListener("click", function() {
  document.getElementById("sobremesas").hidden = true;
  document.getElementById("entradas").hidden = true;
  document.getElementById("peixes").hidden = true;
  document.getElementById("fMar").hidden = true;
  document.getElementById("carnes").hidden = true;
  document.getElementById("bebidas").hidden = true;
  document.getElementById("maisPedidos").removeAttribute("hidden");
});
// Trocar categoria para sobremesas (teste)
document.getElementById("catSobremesas").addEventListener("click", function() {
  document.getElementById("maisPedidos").hidden = true;
  document.getElementById("sobremesas").removeAttribute("hidden");
});
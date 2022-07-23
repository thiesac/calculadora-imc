function calcular() {
  let peso = parseFloat(document.getElementById("peso").value);
  let altura = parseFloat(document.getElementById("altura").value);

  imc = peso / (altura * altura);
  alert(imc.toFixed(2));
  limparCampos();
}

function limparCampos() {
  document.getElementById("peso").value = "";
  document.getElementById("altura").value = "";
}

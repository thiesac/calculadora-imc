function calcular() {
  let peso = document.getElementById("peso").value;
  let altura = document.getElementById("altura").value;

  if (peso == "" || altura == "") {
    alert("Preencha todos os campos");
  } else {
    peso = parseFloat(peso);
    altura = parseFloat(altura);
    imc = peso / (altura * altura);
    alert(imc.toFixed(2));
    limparCampos();
  }
}

function limparCampos() {
  document.getElementById("peso").value = "";
  document.getElementById("altura").value = "";
}

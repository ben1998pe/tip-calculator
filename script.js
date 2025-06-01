function calcularPropina() {
  const bill = parseFloat(document.getElementById("bill").value);
  const tipPercent = parseFloat(document.getElementById("tip").value);
  const people = parseInt(document.getElementById("people").value) || 1;

  if (isNaN(bill) || isNaN(tipPercent) || bill <= 0 || tipPercent < 0) {
    alert("Por favor, ingresa valores válidos.");
    return;
  }

  const tipAmount = bill * (tipPercent / 100);
  const total = bill + tipAmount;
  const porPersona = total / people;

  document.getElementById("resultados").innerHTML = `
    <p>Propina total: <strong>S/ ${tipAmount.toFixed(2)}</strong></p>
    <p>Total a pagar: <strong>S/ ${total.toFixed(2)}</strong></p>
    <p>Total por persona: <strong>S/ ${porPersona.toFixed(2)}</strong></p>
  `;
}

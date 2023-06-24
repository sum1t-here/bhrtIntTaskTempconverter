function convertTemperature() {
  const inputTemp = parseFloat(document.getElementById("inputTemp").value);
  const inputUnit = document.getElementById("inputUnit").value;
  const outputUnit = document.getElementById("outputUnit").value;
  let outputTemp;

  if (inputUnit === "celsius" && outputUnit === "fahrenheit") {
    outputTemp = (inputTemp * 9) / 5 + 32;
  } else if (inputUnit === "fahrenheit" && outputUnit === "celsius") {
    outputTemp = ((inputTemp - 32) * 5) / 9;
  } else {
    outputTemp = inputTemp;
  }

  document.getElementById("outputTemp").value = outputTemp.toFixed(2);
}

function convertTemp() {
  const temp = parseFloat(document.getElementById("tempInput").value);
  const unit = document.getElementById("unitSelect").value;
  const resultDiv = document.getElementById("result");

  if (isNaN(temp)) {
    resultDiv.textContent = "Please enter a valid number!";
    return;
  }

  let converted = "";
  switch (unit) {
    case "celsius":
      converted = `Fahrenheit: ${(temp * 9/5 + 32).toFixed(2)} °F | Kelvin: ${(temp + 273.15).toFixed(2)} K`;
      break;
    case "fahrenheit":
      converted = `Celsius: ${((temp - 32) * 5/9).toFixed(2)} °C | Kelvin: ${(((temp - 32) * 5/9) + 273.15).toFixed(2)} K`;
      break;
    case "kelvin":
      converted = `Celsius: ${(temp - 273.15).toFixed(2)} °C | Fahrenheit: ${((temp - 273.15) * 9/5 + 32).toFixed(2)} °F`;
      break;
  }

  resultDiv.textContent = converted;
}
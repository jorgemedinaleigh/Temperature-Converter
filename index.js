//Temperature Converter

const temperatureTextBox = document.getElementById("temperatureTextBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temperature;

function convert()
{
    if(toFahrenheit.checked)
    {
        temperature = Number(temperatureTextBox.value);
        temperature = temperature * 9/5 +32;
        result.textContent = temperature.toFixed(1) + "°F";
        
    }
    else if(toCelsius.checked)
    {
        temperature = Number(temperatureTextBox.value);
        temperature = (temperature - 32) * 5/9;
        result.textContent = temperature.toFixed(1) + "°C";
    }
    else
    {
        result.textContent = "Please select a unit to convert to.";
    }

}
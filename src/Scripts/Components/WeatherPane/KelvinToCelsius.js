export default function KelvinToCelsius(kelvin){
    return Math.round((kelvin - 273.15))
}

function CelsiusToFahrenheit(celcius){
    //console.log("hi")
    return Math.round((celcius * 9/5) + 32)
}

function FahrenheitToCelsius(fahrenheit){
    //console.log("hi")
    return Math.round((fahrenheit - 32) *5/9)
}

export {
    KelvinToCelsius,
    CelsiusToFahrenheit,
    FahrenheitToCelsius
}
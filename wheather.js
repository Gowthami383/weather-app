const form = document.getElementById("form");
const latitudeInput = document.getElementById("latitude");
const longitudeInput = document.getElementById("longitude");
const resultContainer = document.getElementById("result");
const aqiResult = document.getElementById("aqi");
const coResult = document.getElementById("co");
const no2Result = document.getElementById("no2");
const o3Result = document.getElementById("o3");
const so2Result = document.getElementById("so2");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const latitude = latitudeInput.value;
    const longitude = longitudeInput.value;
    const url = 'https://air-quality.p.rapidapi.com/history/airquality?lon=-78.638&lat=35.779';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'c05f96e1d8msh7fbb62bcab866b6p1e15cbjsnc89680011400',
            'x-rapidapi-host': 'air-quality.p.rapidapi.com'
        }
    };
    
    fetch(url,options)
        .then(response=>response.json())
        .then(result=>{
            console.log(result);
            let readings = result.data[0];
            console.log(readings);
            aqiResult.textContent=readings.aqi;
            coResult.textContent=readings.co;
            no2Result.textContent=readings.no2;
            o3Result.textContent=readings.o3;
            so2Result.textContent=readings.so2;
            resultContainer.style.display = 'flex';
        })
});
    

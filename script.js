let city = document.getElementById("city");
let type = document.getElementById("type");
let temp = document.getElementById("temp");
let image = document.getElementById("img");
let input = document.getElementById("inp");
let API_key = "82fb6a0ec9740dba5f2831dd7549fe77";

const data = async function(search){
    let getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}&units=Metric`)
    console.log(getData);
    let jsonData =await getData.json();
    console.log(jsonData);
    console.log(jsonData.name);

    if(jsonData.cod == 400){
        alert("please enter correct location")
        image.src="error.png";
        city.innerHTML="";
        temp.innerHTML="";
        type.innerHTML="";
    }
    city.innerHTML=jsonData.name;
    temp.innerHTML=Math.floor(jsonData.main.temp)+"°C";
    type.innerHTML=jsonData.weather[0].main;


    if(type.innerHTML == "Clouds"){
        image.src="CLOUDS.png"
    }else if(type.innerHTML == "Clear"){
        image.src="clears.jpg"
    }else if(type.innerHTML == "Rain"){
        image.src="rain.png"
    }else if(type.innerHTML == "Snow"){
        image.src="snow.jpg"
    }else if(type.innerHTML == "Haze"){
        image.src="dust.jpg"
    }else if(type.innerHTML == "Mist"){
        image.src="mist.png"
    }
    input.value=""
}

function myFun(){
    search=input.value;
    data(search)
}

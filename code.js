const loc = document.getElementById("location");
const enter = document.getElementById("enter");
const locationName= document.getElementById("location_name")
const temp= document.getElementById("temp");
const apikey="8a9eb755194a4b579c0141453251204";
const scale = document.querySelector(".scale");
const feelsLike=document.getElementById("feels_like");


 function enter_Location(){
        if(loc && loc.value.length!==0){
            let firstLetter=loc.value.slice(0,1);
            console.log(firstLetter);
            let location=firstLetter.toUpperCase()+loc.value.slice(1,);
            localStorage.setItem("location",location);
       window.location.assign('./weather.html');
        
    }
    else if(loc.value.length===0){
        document.querySelector(".error").style.visibility="visible";
        document.querySelector(".error").style.color="red";
    }
    

}  


if(locationName){

    let city= localStorage.getItem("location");


  async function get_weather(){
    try{
    const response = await fetch("https://api.weatherapi.com/v1/forecast.json?key="+apikey+"&q="+city+"&aqi=no");
    const data = await response.json();

    console.log(data);

    
    console.log(data.forecast.forecastday[0].hour);
    const country= data.location.country;
    const temp_c= data.current.temp_c;
    const temp_f= data.current.temp_f;
    const is_day=data.current.is_day;
    const uv = data.current.uv;
    const wind = data.current.wind_kph;
    const localtime = data.location.localtime;
    const feels_like_c=data.current.feelslike_c;
    const feels_like_f=data.current.feelslike_f;
    const condition= data.current.condition.text;
    
    const moon = data.forecast.forecastday[0].astro.is_moon_up;
    const sunrise = data.forecast.forecastday[0].astro.sunrise;
    const sunset= data.forecast.forecastday[0].astro.sunset;

    const date = new Date(localtime);
    const dayname= date.toLocaleDateString("en-US", { weekday: "long" });
    const month = new Date(localtime);
    const monthname = month.toLocaleDateString("en-US", { month: "long" });

    document.getElementById("time").textContent = localtime.slice(11,);
    document.getElementById("date").innerHTML+=dayname+","+localtime.slice(8,10)+","+monthname;
    locationName.textContent=city+","+country;
    temp.textContent=temp_c+"°C";
    feelsLike.textContent= "feels like: "+feels_like_c+"°C";
    document.querySelector(".uv").innerHTML+="uv:"+uv;
    document.querySelector(".wind_speed").innerHTML+=wind+"kph";
    document.querySelector(".sunrise").innerHTML+=sunrise;
    document.querySelector(".sunset").innerHTML+=sunset;

    let timenow=Number(localtime.slice(11,13));

   
    console.log(timenow);

if(moon==1){
    document.querySelector(".moon").style.visibility="visible";
    document.body.style.backgroundColor="rgba(0,0,128,0.89)";
}
else{
    document.body.style.backgroundColor="rgba(246,189,115)";
    document.querySelector(".moon").style.visibility="hidden";
}


if(condition=="Sunny" ){
    document.querySelector(".sun").style.visibility="visible";
    }
 

   
   else if(condition=="Partly cloudy"|| condition==="cloudy"){
        document.querySelector(".cloud").style.visibility="visible";
        document.querySelector(".moon").style.visibility="hidden";
        document.querySelector(".sun").style.visibility="hidden";

    }

   else  if(condition=="rainy" || condition=="Patchy light drizzle" || condition==="Patchy rain nearby"){
        document.querySelector(".raincloud").style.visibility="visible";
        document.querySelector(".moon").style.visibility="hidden";
        document.querySelector(".sun").style.visibility="hidden";
    }
    else{
        document.querySelector(".sun").style.visibility="hidden";
        document.querySelector(".raincloud").style.visibility="hidden";
        document.querySelector(".cloud").style.visibility="hidden";
    }
  

    
 


let nb=1;
const now= document.getElementById("timenow");
now.innerHTML=timenow;
if(timenow<12){
   
    now.innerHTML+=" AM";
    now.innerHTML+="<br>";
   now.innerHTML+=temp_c+" °C";
}
else{
   now.innerHTML+=" PM";
    now.innerHTML+="<br>";
    now.innerHTML+=temp_c+" °C";
}

// HOURLY WITH TEMP SIGN NOT CHANGED

 for(let i=timenow+1;i<=timenow+12;i++){
    
let hour = i%24;
const element = document.getElementById("timenow+"+nb);
const time = data.forecast.forecastday[0].hour[hour].time.slice(11,13);
const tempperhour_c=data.forecast.forecastday[0].hour[hour].temp_c;

element.innerHTML=time;

if(hour<12){
    element.innerHTML+=" AM";
    element.innerHTML+="<br>";
    element.innerHTML+=tempperhour_c+" °C";
}
else{
    element.innerHTML+=" PM";
    element.innerHTML+="<br>";
    element.innerHTML+=tempperhour_c+" °C";
}
nb++;
 }

// WHEN CHANGED THE DEGREE WE CHANGE EVERYTHIONG AGAIN
 scale.addEventListener('change', function () {

    if(scale.checked){
               feelsLike.textContent= "feels like: "+feels_like_f+"°F";
               temp.textContent= temp_f+"°F";

               now.innerHTML=timenow;

               if(timenow<12){
                  
                   now.innerHTML+=" AM";
                   now.innerHTML+="<br>";
                  now.innerHTML+=temp_f+" °F";
               }
               else{
                  now.innerHTML+=" PM";
                   now.innerHTML+="<br>";
                   now.innerHTML+=temp_f+" °F";
               }
               

               let nb=1;
               for(let i=timenow+1;i<=timenow+12;i++){
    
                let hour = i%24;
                const element = document.getElementById("timenow+"+nb);
                const time = data.forecast.forecastday[0].hour[hour].time.slice(11,13);
                const tempperhour_f=data.forecast.forecastday[0].hour[hour].temp_f;
                
                element.textContent=time;
                
                if(hour<12){
                    element.innerHTML+=" AM";
                    element.innerHTML+="<br>";
                    element.innerHTML+=tempperhour_f+" °F";
                }
                else{
                    element.innerHTML+=" PM";
                    element.innerHTML+="<br>";
                    element.innerHTML+=tempperhour_f+" °F";
                }
                nb++;
                 }
               

    }
    else{
       feelsLike.textContent= "feels like: "+feels_like_c+"°C";
       temp.textContent= temp_c+"°C";

       now.innerHTML=timenow;
    if(timenow<12){
   
      now.innerHTML=" AM";
      now.innerHTML+="<br>";
      now.innerHTML+=temp_c+" °C";
   }
    else{
     now.innerHTML+=" PM";
     now.innerHTML+="<br>";
     now.innerHTML+=temp_c+" °C";
    }


let nb=1;
       for(let i=timenow+1;i<=timenow+12;i++){
    
        let hour = i%24;
        const element = document.getElementById("timenow+"+nb);
        const time = data.forecast.forecastday[0].hour[hour].time.slice(11,13);
        const tempperhour_c=data.forecast.forecastday[0].hour[hour].temp_c;
        
        element.textContent=time;
        
        if(hour<12){
            element.innerHTML+=" AM";
            element.innerHTML+="<br>";
            element.innerHTML+=tempperhour_c+" °C";
        }
        else{
            element.innerHTML+=" PM";
            element.innerHTML+="<br>";
            element.innerHTML+=tempperhour_c+" °C";
        }
        nb++;
         }

    }
   });




console.log(condition);



    }
    catch(error){
console.log(error);
    }
}
get_weather();



}
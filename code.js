const loc = document.getElementById("location");
const enter = document.getElementById("enter");
const locationName= document.getElementById("location_name")
const temp= document.getElementById("temp");
const apikey="8a9eb755194a4b579c0141453251204";
const scale = document.querySelector(".scale");
const feelsLike=document.getElementById("feels_like");
const sun = `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 30 30"><path fill="#f4ee00" d="M4.37 14.62c0-.24.08-.45.25-.62c.17-.16.38-.24.6-.24h2.04c.23 0 .42.08.58.25c.15.17.23.37.23.61s-.07.44-.22.61s-.35.25-.58.25H5.23c-.23 0-.43-.08-.6-.25a.83.83 0 0 1-.26-.61m2.86 6.93c0-.23.08-.43.23-.61l1.47-1.43c.15-.16.35-.23.59-.23s.44.08.6.23s.24.34.24.57c0 .24-.08.46-.24.64L8.7 22.14q-.615.48-1.23 0a.8.8 0 0 1-.24-.59m0-13.84c0-.23.08-.43.23-.61c.2-.17.41-.25.64-.25c.22 0 .42.08.59.24l1.43 1.47c.16.15.24.35.24.59q0 .36-.24.6c-.24.24-.36.24-.6.24s-.44-.08-.59-.24L7.47 8.32a.84.84 0 0 1-.24-.61m2.55 6.91c0-.93.23-1.8.7-2.6s1.1-1.44 1.91-1.91s1.67-.7 2.6-.7c.7 0 1.37.14 2.02.42c.64.28 1.2.65 1.66 1.12c.47.47.84 1.02 1.11 1.66s.41 1.32.41 2.02c0 .94-.23 1.81-.7 2.61s-1.1 1.43-1.9 1.9s-1.67.7-2.61.7s-1.81-.23-2.61-.7s-1.43-1.1-1.9-1.9c-.45-.81-.69-1.68-.69-2.62m1.7 0c0 .98.34 1.81 1.03 2.5c.68.69 1.51 1.04 2.49 1.04s1.81-.35 2.5-1.04s1.04-1.52 1.04-2.5c0-.96-.35-1.78-1.04-2.47c-.69-.68-1.52-1.02-2.5-1.02c-.97 0-1.8.34-2.48 1.02c-.7.69-1.04 1.51-1.04 2.47m2.66 7.78c0-.24.08-.44.25-.6s.37-.24.6-.24c.24 0 .45.08.61.24s.24.36.24.6v1.99c0 .24-.08.45-.25.62s-.37.25-.6.25s-.44-.08-.6-.25a.85.85 0 0 1-.25-.62zm0-15.5V4.86c0-.23.08-.43.25-.6S14.76 4 15 4s.43.08.6.25s.25.37.25.6V6.9c0 .23-.08.42-.25.58s-.37.23-.6.23s-.44-.08-.6-.23s-.26-.35-.26-.58m5.52 13.18c0-.23.08-.42.23-.56c.15-.16.34-.23.56-.23c.24 0 .44.08.6.23l1.46 1.43c.16.17.24.38.24.61s-.08.43-.24.59q-.6.465-1.2 0l-1.42-1.42a.97.97 0 0 1-.23-.65m0-10.92c0-.25.08-.45.23-.59l1.42-1.47a.84.84 0 0 1 .59-.24c.24 0 .44.08.6.25c.17.17.25.37.25.6c0 .25-.08.46-.24.62l-1.46 1.43q-.27.24-.6.24c-.23 0-.41-.08-.56-.24s-.23-.36-.23-.6m2.26 5.46c0-.24.08-.44.24-.62q.24-.24.57-.24h2.02c.23 0 .43.09.6.26s.26.37.26.6s-.09.43-.26.6s-.37.25-.6.25h-2.02c-.23 0-.43-.08-.58-.25s-.23-.36-.23-.6"/></svg>`;
const rain =`<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 30 30"><path fill="#2003d7" d="M4.64 16.91c0-1.15.36-2.17 1.08-3.07a4.82 4.82 0 0 1 2.73-1.73c.31-1.36 1.02-2.48 2.11-3.36s2.34-1.31 3.75-1.31c1.38 0 2.6.43 3.68 1.28s1.78 1.95 2.1 3.29h.32c.89 0 1.72.22 2.48.65s1.37 1.03 1.81 1.78s.67 1.58.67 2.47c0 .88-.21 1.69-.63 2.44s-1 1.35-1.73 1.8s-1.53.69-2.4.71c-.13 0-.2-.06-.2-.17v-1.33c0-.12.07-.18.2-.18c.85-.04 1.58-.38 2.18-1.02s.9-1.39.9-2.26s-.33-1.62-.98-2.26s-1.42-.96-2.31-.96h-1.61c-.12 0-.18-.06-.18-.17l-.08-.58a4.08 4.08 0 0 0-1.39-2.71c-.82-.73-1.76-1.09-2.85-1.09s-2.05.36-2.85 1.09a4.02 4.02 0 0 0-1.36 2.71l-.07.53c0 .12-.07.19-.2.19l-.53.03c-.83.1-1.53.46-2.1 1.07s-.85 1.33-.85 2.16c0 .87.3 1.62.9 2.26s1.33.98 2.18 1.02c.11 0 .17.06.17.18v1.33c0 .11-.06.17-.17.17c-1.34-.06-2.47-.57-3.4-1.53s-1.37-2.1-1.37-3.43m5.35 6.69c0-.04.01-.11.04-.2l1.63-5.77a.837.837 0 0 1 1.02-.56c.24.04.42.17.54.37s.15.42.08.67l-1.63 5.73c-.12.43-.4.64-.82.64c-.04 0-.07-.01-.11-.02c-.06-.02-.09-.03-.1-.03a.83.83 0 0 1-.49-.33a.9.9 0 0 1-.16-.5m2.62 2.81l2.44-8.77c.04-.19.14-.34.3-.44s.32-.15.49-.15q.135 0 .27.03c.22.06.38.19.49.39s.13.41.07.64l-2.43 8.78c-.04.17-.13.31-.29.43s-.32.18-.51.18c-.09 0-.18-.02-.25-.05c-.2-.05-.37-.18-.52-.39c-.11-.18-.13-.39-.06-.65m4.13-2.79c0-.04.01-.11.04-.23l1.63-5.77a.83.83 0 0 1 .3-.44c.15-.1.3-.15.46-.15c.08 0 .17.01.26.03c.21.06.36.16.46.31s.15.31.15.47c0 .03-.01.08-.02.14s-.02.1-.02.12l-1.63 5.73c-.04.19-.13.35-.28.46s-.32.17-.51.17l-.24-.05a.8.8 0 0 1-.46-.32a.9.9 0 0 1-.14-.47"/></svg>`;
const cloud =`<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 30 30"><path fill="#3f3e46" d="M4.61 16.88c0-1.15.36-2.17 1.08-3.07s1.63-1.48 2.74-1.73c.31-1.37 1.02-2.49 2.11-3.37s2.35-1.32 3.76-1.32c1.38 0 2.61.43 3.69 1.28s1.78 1.95 2.1 3.29h.33c.9 0 1.73.22 2.49.65s1.37 1.03 1.81 1.79s.67 1.58.67 2.48a4.94 4.94 0 0 1-2.36 4.25c-.73.45-1.54.69-2.41.72H9.41c-1.34-.06-2.47-.57-3.4-1.53c-.93-.95-1.4-2.1-1.4-3.44m1.71 0c0 .87.3 1.62.9 2.26s1.33.98 2.19 1.03H20.6c.86-.04 1.59-.39 2.19-1.03c.61-.64.91-1.4.91-2.26c0-.88-.33-1.63-.98-2.27s-1.42-.96-2.32-.96h-1.6c-.11 0-.17-.06-.17-.18l-.07-.57c-.11-1.08-.58-1.99-1.4-2.72s-1.77-1.1-2.86-1.1s-2.05.37-2.85 1.1c-.81.73-1.27 1.64-1.37 2.72l-.08.57c0 .12-.07.18-.2.18h-.53c-.84.1-1.54.46-2.1 1.07s-.85 1.33-.85 2.16"/></svg>`;
const thunder =`<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 30 30"><path fill="#271b91" d="M4.63 16.91q0 1.665.99 2.97c.99 1.305 1.52 1.47 2.58 1.79l-.66 1.68c-.03.14.02.22.14.22h2.13l-.98 4.3h.28l3.92-5.75c.04-.04.04-.09.01-.14s-.08-.07-.15-.07h-2.18l2.48-4.64c.07-.14.02-.22-.14-.22h-2.94c-.09 0-.17.05-.23.15l-1.07 2.87c-.71-.18-1.3-.57-1.77-1.16s-.7-1.26-.7-2.01c0-.83.28-1.55.85-2.17c.57-.61 1.27-.97 2.1-1.07l.53-.07c.13 0 .2-.06.2-.18l.07-.51c.11-1.08.56-1.99 1.37-2.72s1.76-1.1 2.85-1.1s2.04.37 2.85 1.1c.82.73 1.28 1.64 1.4 2.72l.07.58c0 .11.06.17.18.17h1.6c.91 0 1.68.32 2.32.95s.97 1.4.97 2.28c0 .85-.3 1.59-.89 2.21s-1.33.97-2.2 1.04c-.13 0-.2.06-.2.18v1.37c0 .11.07.17.2.17c1.33-.04 2.46-.55 3.39-1.51s1.39-2.11 1.39-3.45c0-.9-.22-1.73-.67-2.49a4.9 4.9 0 0 0-1.81-1.8c-.77-.44-1.6-.66-2.5-.66h-.31c-.33-1.33-1.04-2.42-2.11-3.26s-2.3-1.27-3.68-1.27c-1.41 0-2.67.44-3.76 1.31s-1.79 1.99-2.1 3.36c-1.11.26-2.02.83-2.74 1.73s-1.08 1.95-1.08 3.1m8.14 9.71c0 .39.19.65.58.77c.01 0 .05 0 .11.01s.11.01.14.01c.17 0 .33-.05.49-.15s.27-.26.32-.48l2.25-8.69c.06-.24.04-.45-.07-.65a.83.83 0 0 0-.5-.39l-.26-.03c-.16 0-.32.05-.47.15a.74.74 0 0 0-.31.45l-2.26 8.72c-.01.1-.02.19-.02.28m4.16-3.06c0 .13.03.26.1.38c.14.22.31.37.51.44c.11.03.21.05.3.05s.2-.02.32-.08q.315-.135.42-.57l1.44-5.67c.03-.14.05-.23.05-.27c0-.15-.05-.3-.16-.45s-.26-.26-.46-.32l-.26-.03c-.17 0-.33.05-.47.15a.82.82 0 0 0-.3.45l-1.46 5.7c0 .02 0 .05-.01.11c-.02.05-.02.08-.02.11"/></svg>`;
const snow =`<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 30 30"><path fill="#fff" d="M4.64 16.95c0-1.16.35-2.18 1.06-3.08s1.62-1.48 2.74-1.76q.465-2.04 2.1-3.36c1.635-1.32 2.34-1.31 3.75-1.31c1.38 0 2.6.43 3.68 1.28s1.78 1.95 2.1 3.29h.32c.89 0 1.72.22 2.48.66s1.37 1.04 1.81 1.8s.67 1.59.67 2.48c0 1.32-.46 2.47-1.39 3.42c-.92.96-2.05 1.46-3.38 1.5c-.13 0-.2-.06-.2-.17v-1.33c0-.12.07-.18.2-.18c.85-.04 1.58-.38 2.18-1.02s.9-1.38.9-2.23c0-.89-.32-1.65-.97-2.3s-1.42-.97-2.32-.97h-1.61c-.12 0-.18-.06-.18-.17l-.08-.58c-.11-1.08-.58-1.99-1.39-2.72c-.82-.73-1.76-1.1-2.85-1.1c-1.1 0-2.05.37-2.86 1.11s-1.27 1.65-1.37 2.75l-.06.5c0 .12-.07.19-.2.19l-.53.07c-.83.07-1.53.41-2.1 1.04s-.85 1.35-.85 2.19c0 .85.3 1.59.9 2.23s1.33.97 2.18 1.02c.11 0 .17.06.17.18v1.33c0 .11-.06.17-.17.17c-1.34-.04-2.47-.54-3.4-1.5c-.87-.96-1.33-2.11-1.33-3.43M11 21.02c0-.22.08-.42.24-.58s.35-.24.59-.24c.23 0 .43.08.59.24s.24.36.24.58q0 .36-.24.6c-.16.17-.35.25-.59.25c-.23 0-.43-.08-.59-.25a.8.8 0 0 1-.24-.6m0 3.63q0-.36.24-.6c.16-.15.35-.23.58-.23s.43.08.59.23c.16.16.24.35.24.59s-.08.43-.24.59s-.35.23-.59.23a.84.84 0 0 1-.59-.23a.8.8 0 0 1-.23-.58m3.19-1.7c0-.23.08-.44.25-.62q.24-.24.57-.24c.23 0 .43.09.6.26s.26.37.26.6s-.08.43-.25.6s-.37.25-.61.25c-.23 0-.42-.08-.58-.25s-.24-.37-.24-.6m0-3.62c0-.23.08-.43.25-.6q.27-.24.57-.24c.24 0 .44.08.61.25a.8.8 0 0 1 .25.6c0 .23-.08.43-.25.59s-.37.24-.61.24c-.23 0-.42-.08-.58-.24a.85.85 0 0 1-.24-.6m0 7.28c0-.23.08-.43.25-.61q.24-.24.57-.24c.24 0 .44.08.61.25s.25.37.25.6s-.08.43-.25.59s-.37.24-.61.24a.824.824 0 0 1-.82-.83m3.22-5.59c0-.22.08-.41.25-.58s.37-.25.6-.25s.43.08.59.24s.24.36.24.58q0 .36-.24.6c-.16.17-.35.25-.59.25s-.44-.08-.6-.25a.82.82 0 0 1-.25-.59m0 3.63c0-.22.08-.42.25-.6c.16-.15.36-.23.6-.23s.43.08.59.23s.23.35.23.59s-.08.43-.23.59c-.16.16-.35.23-.59.23q-.36 0-.6-.24a.76.76 0 0 1-.25-.57"/></svg>`;
const fog =`<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 30 30"><path fill="#fff" d="M2.62 21.05c0-.24.08-.45.25-.61q.255-.24.63-.24h18.67a.82.82 0 0 1 .85.85c0 .23-.08.43-.25.58c-.17.16-.37.23-.6.23H3.5c-.25 0-.46-.08-.63-.23a.76.76 0 0 1-.25-.58m2.62-3.14c0-.24.09-.44.26-.6c.15-.15.35-.23.59-.23h18.67c.23 0 .42.08.58.24s.23.35.23.59s-.08.44-.23.6c-.16.17-.35.25-.58.25H6.09c-.24 0-.44-.08-.6-.25a.82.82 0 0 1-.25-.6m.13-2.39c0 .09.05.13.15.13h1.43c.06 0 .13-.05.2-.16c.24-.52.59-.94 1.06-1.27s.99-.52 1.55-.56l.55-.07c.11 0 .17-.06.17-.18l.07-.5c.11-1.08.56-1.98 1.37-2.7q1.215-1.08 2.85-1.08c1.08 0 2.02.36 2.83 1.07c.8.71 1.26 1.61 1.37 2.68l.08.57c0 .11.07.17.2.17h1.59c.64 0 1.23.17 1.76.52s.92.8 1.18 1.37c.07.11.14.16.21.16h1.43c.12 0 .17-.07.14-.23c-.29-1.02-.88-1.86-1.74-2.51c-.87-.65-1.86-.97-2.97-.97h-.32q-.495-1.995-2.1-3.27c-1.605-1.275-2.28-1.27-3.65-1.27c-1.4 0-2.64.44-3.73 1.32s-1.78 2-2.09 3.36c-.85.2-1.6.6-2.24 1.21s-1.09 1.33-1.34 2.18v-.04c-.01 0-.01.03-.01.07m1.61 8.59c0-.24.09-.43.26-.59c.15-.15.35-.23.6-.23h18.68c.24 0 .44.08.6.23c.17.16.25.35.25.58c0 .24-.08.44-.25.61s-.37.25-.6.25H7.84c-.23 0-.43-.09-.6-.26a.77.77 0 0 1-.26-.59"/></svg>`;

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
    const response = await fetch("https://api.weatherapi.com/v1/forecast.json?key="+apikey+"&q="+city+"&days=5&aqi=no");
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

    const now= document.getElementById("timenow0");
    const cond_now= document.getElementById("condition0");
    const temp_now= document.getElementById("temp0");

    document.getElementById("time").innerHTML = localtime.slice(11,);
    document.getElementById("date").innerHTML+=dayname+","+localtime.slice(8,10)+","+monthname;
    locationName.textContent=city+","+country;
    temp.textContent=temp_c+"°C";
    feelsLike.textContent= "feels like: "+feels_like_c+"°C";
    document.querySelector(".uv").innerHTML+="uv:"+uv;
    document.querySelector(".wind_speed").innerHTML+=wind+"kph";
    document.querySelector(".sunrise").innerHTML+=sunrise;
    document.querySelector(".sunset").innerHTML+=sunset;

    let timenow=Number(localtime.slice(11,13));

   
   

if(moon==1 && is_day==0){
    document.querySelector(".moon").style.visibility="visible";

    document.querySelector(".sun").style.visibility="hidden";
}
else{
    
    document.querySelector(".moon").style.visibility="hidden";
}


if(condition=="Sunny" ){
    document.querySelector(".sun").style.visibility="visible";
    cond_now.innerHTML=sun;
    }


   else if(condition=="Partly cloudy"|| condition==="cloudy" || condition=="Clear" || condition=="Overcast"){
        document.querySelector(".cloud").style.visibility="visible";
        document.querySelector(".moon").style.visibility="hidden";
        document.querySelector(".sun").style.visibility="hidden";
        cond_now.innerHTML=cloud;
    }

   else  if(condition=="rainy" || condition=="Patchy light drizzle" || condition==="Patchy rain nearby" || condition=="Light rain"){
        document.querySelector(".raincloud").style.visibility="visible";
        document.querySelector(".moon").style.visibility="hidden";
        document.querySelector(".sun").style.visibility="hidden";
        cond_now.innerHTML=rain;
    }
    else if(condition.includes("thunder")){
        cond_now.innerHTML=thunder;
    }
    else if(condition.includes("Fog") || condition.includes("Mist")){
        cond_now.innerHTML=fog;
    }
    else if(condition.includes("snow")){
        cond_now.innerHTML=snow;    
    }
    else{
        document.querySelector(".sun").style.visibility="hidden";
        document.querySelector(".raincloud").style.visibility="hidden";
        document.querySelector(".cloud").style.visibility="hidden";
    }
  

    
 


let nb=1;
temp_now.innerHTML=temp_c+"°C";
temp_now.style.position="relative";
temp_now.style.top="-70px";
temp_now.style.left="20px";


now.style.color="rgba(255,255,255,0.6)";
now.style.fontSize="20px";
now.style.textAlign="center";
now.style.fontFamily="B612";
cond_now.style.position="relative";
cond_now.style.top="-30px";
cond_now.style.left="30px";


if(timenow<12){
   
    now.innerHTML=localtime.slice(11,)+" AM";
  
   
}
else{
    now.innerHTML=localtime.slice(11,13)-12+localtime.slice(13,)+" PM";
   
}

// HOURLY WITH TEMP SIGN NOT CHANGED
let day =0;
 for(let i=timenow+1;i<=timenow+12;i++){
    
let hour = i%24;
if(hour==0){
    day++;
}
const element = document.getElementById("timenow+"+nb);
const icon= document.getElementById("condition+"+nb);
const time = data.forecast.forecastday[0].hour[hour].time.slice(11,13);
const tempperhour_c=data.forecast.forecastday[day].hour[hour].temp_c;
const conditionperhour=data.forecast.forecastday[day].hour[hour].condition.text;

console.log(conditionperhour);


element.style.color="rgba(255,255,255,0.6)";
element.style.fontSize="20px";
element.style.textAlign="center";
element.style.fontFamily="B612";
icon.style.top="-30px";
icon.style.left="30px";
icon.style.position="relative";
document.getElementById("temp+"+nb).style.position="relative";
document.getElementById("temp+"+nb).style.top="-70px";
document.getElementById("temp+"+nb).style.left="25px";



if(conditionperhour==="Sunny"){
      icon.innerHTML=sun;
    }

   else if(conditionperhour=="Partly cloudy"||conditionperhour=="cloudy" || conditionperhour=="Clear " || conditionperhour=="Cloudy " || conditionperhour=="Overcast " || conditionperhour=="Partly Cloudy "|| conditionperhour=="Partly Cloudy"){
       icon.innerHTML=cloud;

    }
    else if(conditionperhour.includes("thunder")){
        icon.innerHTML=thunder;
    }
    else if(conditionperhour.includes("Fog") || conditionperhour.includes("Mist")){
        icon.innerHTML=fog;
    }
    else if(conditionperhour.includes("snow")){
        icon.innerHTML=snow;    
    }


   else  if(conditionperhour=="rainy" || conditionperhour=="Patchy light drizzle" || conditionperhour=="Patchy rain nearby" || conditionperhour==="cloudy" || conditionperhour=="Light rain" || conditionperhour=="Light drizzle" || conditionperhour=="Light rain shower"){
      icon.innerHTML=rain;
    }
    
// i just realized now that when it becomes the second day im still accessing the same day information
//  i will fix it later 
// i wanna check to see if the temp is right acc to the hour of the day 
// the week  snot yet done correctly

if(hour<12){
    element.innerHTML=time+" AM";
    
}
else if(hour==12){
    element.innerHTML=time+" PM";
    
}
else{
    element.innerHTML=time-12+" PM";
   
 
}
document.getElementById("temp+"+nb).innerHTML=tempperhour_c+"°C";
nb++;

 }

for(let j=0;j<data.forecast.forecastday.length;j++){
    const date= new Date(data.forecast.forecastday[j].date);
    const week= date.toLocaleDateString("en-US", { weekday: "long" });
    const tempperday_c=data.forecast.forecastday[j].day.avgtemp_c;
    const conditionperday=data.forecast.forecastday[0].day.condition.text;
    const day =document.getElementById("dayname"+(j+1));

    day.innerHTML=week;
    day.style.top="-15px";
   

    if(conditionperday==="Sunny"){
        day.innerHTML+=sun;
      }
  
     else if(conditionperday=="Partly cloudy"||conditionperday=="cloudy" || conditionperday=="Clear " || conditionperday=="Cloudy " || conditionperday=="Overcast " || conditionperday=="Partly Cloudy "){
         day.innerHTML+=cloud;
  
      }
      else if(conditionperday.includes("thunder")){
        day.innerHTML+=thunder;
    }
    else if(conditionperday.includes("Fog") || conditionperday.includes("Mist")){
        day.innerHTML+=fog;
    }
    else if(conditionperday.includes("snow")){
        day.innerHTML+=snow;    
    }
  
     else  if(conditionperday=="rainy" || conditionperday=="Patchy light drizzle" || conditionperday=="Patchy rain nearby" || conditionperday==="cloudy" || conditionperday=="Light rain" || conditionperday=="Light drizzle"|| conditionperday=="Light rain shower"){ 
        day.innerHTML+=rain;
      }
      document.getElementById("daytemp"+(j+1)).innerHTML=tempperday_c+"°C";
// i want to edit it later not finished yet
}






// WHEN CHANGED THE DEGREE WE CHANGE EVERYTHIONG AGAIN
// i want to make it a function so as to not repeat the code again and again
scale.addEventListener('change', function () {

    if(scale.checked){
               feelsLike.textContent= "feels like: "+feels_like_f+"°F";
               temp.textContent= temp_f+"°F";

               
               temp_now.innerHTML=temp_f+"°F";
               if(timenow<12){
                  
                   now.innerHTML=localtime.slice(11,)+" AM";
                
               }
               else{
                   now.innerHTML=localtime.slice(11,13)-12+localtime.slice(13,)+" PM";
                  
               }
               

               let nb=1;
               let day=0;
               for(let i=timenow+1;i<=timenow+12;i++){
    
    
                let hour = i%24;
                if(hour==0){
                    day++;
                }
                const element = document.getElementById("timenow+"+nb);
                const time = data.forecast.forecastday[0].hour[hour].time.slice(11,13);
                const tempperhour_f=data.forecast.forecastday[day].hour[hour].temp_f;
                
               
              
                document.getElementById("temp+"+nb).innerHTML=tempperhour_f+"°F";
                nb++;
                
                 }


                 for(let j=0;j<data.forecast.forecastday.length;j++){
                    
                
                    const tempperday_f=data.forecast.forecastday[j].day.avgtemp_f;
            
                
                      document.getElementById("daytemp"+(j+1)).innerHTML=tempperday_f+"°C";
               
                 }
    }

    else{
       feelsLike.textContent= "feels like: "+feels_like_c+"°C";
       temp.textContent= temp_c+"°C";

       temp_now.innerHTML=temp_c+"°C";
    if(timenow<12){
   
      now.innerHTML=localtime.slice(11,)+" AM";
     
   }
    else{
     now.innerHTML=localtime.slice(11,13)-12+localtime.slice(13,)+" PM";
     
    }


let nb=1;
let day=0;
       for(let i=timenow+1;i<=timenow+12;i++){
        let hour = i%24;
    if(hour==0){
        day++;  
    }
        
        const element = document.getElementById("timenow+"+nb);
        const time = data.forecast.forecastday[0].hour[hour].time.slice(11,13);
        const tempperhour_c=data.forecast.forecastday[day].hour[hour].temp_c;
        
        
        document.getElementById("temp+"+nb).innerHTML=tempperhour_c+"°C";
        nb++;
        
         }
         for(let j=0;j<data.forecast.forecastday.length;j++){
                    
                
            const tempperday_c=data.forecast.forecastday[j].day.avgtemp_c;
    
        
              document.getElementById("daytemp"+(j+1)).innerHTML=tempperday_c+"°C";
       
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
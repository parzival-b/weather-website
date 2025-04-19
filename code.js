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
    
    const response = await fetch("https://api.weatherapi.com/v1/current.json?key="+apikey+"&q="+city+"&aqi=no");
   
    const data = await response.json();
    console.log(data);

    const country= data.location.country;
    const temp_c= data.current.temp_c;
    const temp_f= data.current.temp_f;
    const is_day=data.current.is_day;
    const uv = data.current.uv;
    const wind = data.current.wind_kph;
    const localtime = data.location.localtime;
    const feels_like_c=data.current.feelslike_c;
    const feels_like_f=data.current.feelslike_f;
    const sunny= data.current.condition.text;
    const cloudy= data.current.cloud;


    document.getElementById("time").textContent = localtime.slice(11,);
  
    locationName.textContent=city+","+country;
    temp.textContent=temp_c+"°C";
    feelsLike.textContent= "feels like: "+feels_like_c;

    if(data.current.is_day==0){
        document.body.style.backgroundColor="rgba(0,0,128,0.89)";
        document.querySelector(".moon").style.visibility="visible";
        document.querySelector(".sun").style.visibility="hidden";
       
    }
    else{
        document.body.style.backgroundColor="rgba(246,189,115)";
        document.querySelector(".moon").style.visibility="hidden";
        document.querySelector(".sun").style.visibility="visible";
    }


if(sunny=="Sunny" ){
    document.querySelector(".cloud").style.visibility="hidden";
    document.querySelector(".sun").style.visibility="visible";
    }
    else{

        document.querySelector(".sun").style.visibility="hidden";
    }

   
    if(cloudy==0){
        document.querySelector(".cloud").style.visibility="hidden";
    }
    else{
        document.querySelector(".sun").style.visibility="hidden";
        document.querySelector(".cloud").style.visibility="visible";
    }


  

    
    scale.addEventListener('change', function () {

 if(scale.checked){
            feelsLike.textContent= "feels like: "+feels_like_f;
            temp.textContent= temp_f+"°F";
 }
 else{
    feelsLike.textContent= "feels like: "+feels_like_c;
    temp.textContent= temp_c+"°C";
 }
});


console.log(sunny);




}
get_weather();



}

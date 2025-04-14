const loc = document.getElementById("location");
const enter = document.getElementById("enter");
const locationName= document.getElementById("location_name")
const temp= document.getElementById("temp");
const apikey="8a9eb755194a4b579c0141453251204";
const scale = document.querySelector(".scale");



 function enter_Location(){
        if(loc && loc.value.length!==0){
            localStorage.setItem("location",loc.value);
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

    if(data.current.is_day==0){
        document.body.style.backgroundColor="rgba(0,0,128,0.89)";
       
    }
    else{
        document.body.style.backgroundColor="rgba(246,189,115)";
    }
    



    locationName.textContent=city+","+country;
    temp.textContent=data.current.temp_c+"°C";
    
    scale.addEventListener('change', function () {

 if(scale.checked){
            
            temp.textContent= temp_f+"°F";
 }
 else{
    temp.textContent= temp_c+"°C";
 }
});













}
get_weather();



}

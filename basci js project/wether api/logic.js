let city_value = document.getElementById("city_value");
let button = document.getElementById("result_button");
let container = document.getElementById("container_div");
container.style.display="none";
document.getElementById("loader").style.display="none";



function close(){

  container.style.display="none";
  document.getElementById("city_name").innerText="City";
}
button.addEventListener("click",(e)=>{
  
  e.preventDefault();
  close();
  setTimeout(async()=>{
    try{
      let city= city_value.value;
      console.log(city);
      if(city == ""){
        document.getElementById("city_name").innerText="Enter City Name";
        document.getElementById("loader").style.display="none";
      }else{
      let api_key =`c7543ce09fa17464bc7449b207e8e654`;
      let api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
      let response = await fetch(api_url);
      let data =await response.json();
      // console.log(data);
      document.getElementById("city_name").innerText=data.name;
      let icon_value = data.weather[0].icon;
      let img = document.getElementById("img");
      
      img.setAttribute("src",`https://openweathermap.org/img/wn/${icon_value}@2x.png`);
      let temp = data.main.temp;
      document.getElementById("temp_number").innerText=temp;
      document.getElementById("main").innerText=data.weather[0].main;
      document.getElementById("span1").innerText=" "+data.weather[0].description;
      document.getElementById("span2").innerText=" "+data.main.humidity + "%";
      document.getElementById("span3").innerText=" "+data.wind.speed + " meter/sec";
      document.getElementById("span4").innerText=" "+data.wind.deg + "";
      document.getElementById("span5").innerText=" "+data.sys.sunrise+ " UTC";
      document.getElementById("span6").innerText=" "+data.sys.sunset + " UTC";
      let container = document.getElementById("container_div").style.display="block";
      document.getElementById("loader").style.display="none";
      }
    }
  
    catch(e){
      document.getElementById("city_name").innerText="City is Not Found";
      document.getElementById("loader").style.display="none";
    }
  
  },1000);

})

button.addEventListener("click",()=>{
  document.getElementById("loader").style.display="flex";
})
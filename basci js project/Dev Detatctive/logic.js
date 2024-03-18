let toggle = document.getElementById("toggle");
let indicater = document.getElementById("circule");
let serchbox = document.getElementById("serchbox");
let input_value = document.getElementById("text1");
let body= document.getElementsByTagName("body");
let result_box=document.getElementsByClassName("resultbox");


let button = document.getElementById("serch");
let username = document.getElementById("username");
let created_at = document.getElementById("user_date");
let user_bio = document.getElementById("user_bio");
let  public_repos= document.getElementById("p_repos");
let followers  = document.getElementById("followers");
let following  = document.getElementById("following");
let city  = document.getElementById("city");
let avtar_div = document.getElementById("avtar_div");
let user_account_link = document.getElementById("user_account_link");
let twitter = document.getElementById("twitter");
let company = document.getElementById("company");
let blog = document.getElementById("blog");


let light_mode = true;
let black_mode = false;

document.getElementById("resultbox").style.display="none";
document.getElementById("error_box").style.display="none";

toggle.addEventListener("click",()=>{ 
     if(light_mode){
         black_mode = true;
         light_mode = false;
         indicater.style.backgroundImage= "url('half-moon.png')";
         indicater.style.transform='translateX(156%)';
         toggle.style.backgroundColor="black"
         toggle.style.border = " 2px solid skyblue"
          
          serchbox.classList.add("darkmod_class2");
          input_value.classList.add("darkmod_class2");
          body[0].classList.add("darkmod_class");
          result_box[0].classList.add("darkmod_class2");
          user_bio.classList.add("font_clolor");
          document.getElementsByClassName("user_content1")[0].classList.add("font_clolor");
          document.getElementsByClassName("user_content2")[0].classList.add("font_clolor");
          document.getElementsByClassName("img")[0].classList.add("img_div");
     }else{
      black_mode = false;
      light_mode = true;
        indicater.style.backgroundImage= "url('sunny.png')";
        indicater.style.transform='translateX(0%)';
        toggle.style.backgroundColor="skyblue"
        toggle.style.border = " 2px solid black"
        serchbox.classList.remove("darkmod_class2");
        input_value.classList.remove("darkmod_class2");
        body[0].classList.remove("darkmod_class");
        result_box[0].classList.remove("darkmod_class2");
        user_bio.classList.remove("font_clolor");
        document.getElementsByClassName("user_content1")[0].classList.remove("font_clolor");
        document.getElementsByClassName("user_content2")[0].classList.remove("font_clolor");
        document.getElementsByClassName("img")[0].classList.remove("img_div");
     }
})





button.addEventListener("click",async()=>{
          // let input_value = document.getElementById("text1").value;
          document.getElementById("resultbox").style.display="none";
          document.getElementById("error_box").style.display="none";
           console.log(input_value.value);
           let url= `https://api.github.com/users/${input_value.value}`;
           let data =await fetch(url);
           let response = await data.json();
          console.log(response);
          if(response.message != "Not Found"){
          username.innerText=response.login;
          let string_date = response.created_at;
          let ss = string_date.substring(0,10);
          user_date.innerText=ss;

          if(response.bio === null){
             response.bio = "Bio is not available"
          }
          user_bio.innerText=response.bio;
          public_repos.innerText=response.public_repos;
          followers.innerText=response.followers;
          following.innerText=response.following;
          let imgurl = response.avatar_url;
          avtar_div.style.backgroundImage = `url('${imgurl}')`;
          let account_url = response.html_url;
          user_account_link.innerHTML = `<a href="${account_url}">@${response.login}</a>`;
          

         
          if(response.location){
            
            city.innerHTML=`<i class="ri-map-pin-line"></i>&nbsp;&nbsp;${response.location}`;
          }else{
            city.innerHTML=`<i class="ri-map-pin-line"></i>&nbsp;&nbsp;Not Available`;
          }

          
          if(response.twitter_username){
            twitter.innerHTML=`<i class="ri-twitter-line"></i>&nbsp;&nbsp;${response.twitter_username}`;
          }else{
            
            twitter.innerHTML=`<i class="ri-twitter-line"></i>&nbsp;&nbsp;Not Available`;
          }



          if(response.company){
            company.innerHTML=`<i class="ri-community-line"></i>&nbsp;&nbsp;${response.company}`;
          }else{
          company.innerHTML=`<i class="ri-community-line"></i>&nbsp;&nbsp;Not Available`;
          }

          if(response.blog==""){
            blog.innerHTML=`<i class="ri-news-line"></i>&nbsp;&nbsp;Not Available`;
          }else{
          blog.innerHTML=`<i class="ri-news-line"></i>&nbsp;&nbsp;<a href="${response.blog}">Blogs Link</a>`;
          }

           document.getElementById("resultbox").style.display="flex";
        }
        else{
         
          document.getElementById("error_box").style.display="flex";

        }
 }) 
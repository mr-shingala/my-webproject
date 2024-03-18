let input_word = document.getElementsByTagName("form");
let info_container = document.getElementById("info-container").style.display="none";

input_word[0].addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("info-container").style.display="none";
  document.getElementById("not_found").style.visibility="hidden"

  let input_value = input_word[0].elements[0].value;
  
  reove_oldinfo();
  serchinput(input_value);

})

async function serchinput(word) {
  try{

  
  let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
  let data2 = await response.json();

  let word_text = document.getElementById("word")
  word_text.innerText = data2[0].word;



  for (const i of data2[0].phonetics) {
     
    console.log(i);
    if(i.audio != ''){
      let audio = document.createElement("audio");
      audio.setAttribute("controls", "")
      audio.setAttribute("src", i.audio)
      audio_parent.append(audio);
    }
    
  

  }

  let defination_text = document.getElementById("defination");
  defination_text.innerText = ((data2[0].meanings[0].definitions[0].definition == "undefine") ? "not found" : data2[0].meanings[0].definitions[0].definition);

  let ol = document.getElementById("ol") 
  

  var synonyms;
    for (const i of data2[0].meanings[0].synonyms) {
      synonyms = document.createElement("li");
      synonyms.setAttribute("class","litag")
      synonyms.innerText = i;
      ol.append(synonyms);
     
      
    }
  let p_tag_synonyms=document.getElementById("synonyms");

((ol.children.length == 0)?p_tag_synonyms.innerText+=" not found":ol.children);

   let a_tag = document.getElementsByTagName('a');
   let link_url= data2[0].sourceUrls[0];;
   a_tag[0].setAttribute("href",link_url);
   document.getElementById("info-container").style.display="block";
  

  }

catch(error){
   
document.getElementById("not_found").style.visibility="visible";

  }

}

 function reove_oldinfo(){
    
  let ol = document.getElementById("ol");
  ol.innerHTML="";
  let p_tag_synonyms=document.getElementById("synonyms");
  p_tag_synonyms.innerText="synonyms: ";
  let audio = document.getElementById("audio_parent");
  audio.innerHTML="";

  
    

 }
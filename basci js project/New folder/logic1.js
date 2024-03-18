let text = document.getElementsByTagName("textarea")[0];
let speech = new SpeechSynthesisUtterance();
let select = document.getElementsByTagName("select")[0]
let voices  = []

window.speechSynthesis.onvoiceschanged = () =>{
      voices = window.speechSynthesis.getVoices();
      speech.voice=voices[0];
      
      for (const e of voices) {
     
       let b = document.createElement("option");
       b.innerText = e.name;
       b.value = e.name;
       select.append(b);
      }
      
}

select.addEventListener("change", () => {

      // const selectedVoiceName = select.value;
      // const selectedVoice = voices.find(voice => voice.name === selectedVoiceName);
      // console.log(selectedVoice)
      // if (selectedVoice) {
      //     speech.voice = selectedVoice;
      // } else {
      //     console.error("Selected voice not found in the voices array.");
      // }
      let selectvalue = select.value;
      let  selectvoice = voices.find(voice => voice.name === selectvalue);
      speech.voice=selectvoice;

 
})

console.log(voices);
document.getElementsByTagName("button")[0].addEventListener("click",()=>{
      document.getElementsByTagName("button")[0].style.backgroundColor = "red";
      document.getElementsByTagName("button")[0].style.color = "white";
         console.log();
         speech.text = text.value;
         window.speechSynthesis.speak(speech);
      setTimeout(()=>{
            document.getElementsByTagName("button")[0].style.backgroundColor = "white";
            document.getElementsByTagName("button")[0].style.color = "red";
      },500)
        
})

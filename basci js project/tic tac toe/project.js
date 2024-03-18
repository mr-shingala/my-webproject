let a = document.getElementsByClassName("box");
let g = document.getElementById("tern-info");
let g1 = document.getElementById("tern-info1");
let g2 = document.getElementById("result");
let g3 = document.getElementById("image");
let b = Array.from(a)
let turnX = true;
let count = 1;
let r = [
 [0, 1, 2],
 [3, 4, 5],
 [6, 7, 8],
 [0, 3, 6],
 [1, 4, 7],
 [2, 5, 8],
 [0, 4, 8],
 [2, 4, 6]
]

function winner() {
 for (const i of r) {
  var v1 = b[i[0]].innerHTML;
  var v2 = b[i[1]].innerHTML;
  var v3 = b[i[2]].innerHTML;

  if (v1 != "" && v2 != "" && v3 != "") {
   if (v1 === v2 && v2 === v3) {
    g2.style.display = "block";
    g3.style.display = "block";
    count++;
    console.log(count);
   }

  }
 }
}


b.forEach(function (box) {



 box.addEventListener('click', function () {
 if(!(count == 2)){
  if (turnX) {
   box.innerHTML = "x";
   turnX = false;
   g.innerHTML = "Now player x turn";
   g1.innerHTML = "Next is player 0 turn";
  } else {
   box.innerHTML = "0";
   turnX = true;
   g.innerHTML = "Now player 0 turn";
   g1.innerHTML = "Next is player x turn";
  }
  winner();
 }

 });

})


let g4 = document.getElementById("reset").addEventListener('click',function(){    
  for (const box of b) {
 box.innerHTML="";
  turnX=true;
  count=1;
  g2.style.display = "none";
  g3.style.display = "none";
}}
);

   

    
 




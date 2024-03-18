let inputfiled = document.getElementById("input-1");
let text = document.getElementById("equation");
let button = document.getElementsByTagName("button");
let count = 1;


Array.from(button).forEach((a) => {
 a.addEventListener("click", () => {
  console.log(a.innerText)
  let string = "";
  let value = a.innerText;
  if (value == '%') {
   value = "%"
  }
  if (value == '÷') {
   value = "/"
  }
  if (value == '×') {
   value = "*"
  }
  if (value == '−') {
   value = "-"
  }
  
  if (value == "=") {
   string = inputfiled.value;
   console.log(string);
   text.innerText=string;
   inputfiled.value = "";
   let ans = eval(`${string}`);
   console.log(ans);
   inputfiled.value = ans;
   count++;
   console.log(count);
  }
  else if (value == 'AC') {
   inputfiled.value = "";
   text.innerText="";
  }
  else if (value == '') {
   let sub_string = `${inputfiled.value}`;
   let len = sub_string.length - 1;
   inputfiled.value = sub_string.substring(0, len);
  }
  else {
   console.log(count);
   if (count >= 2) {
    inputfiled.value = "";
    text.innerText="";
    count = 1;
   }
   inputfiled.value += value;
  }

 })
});

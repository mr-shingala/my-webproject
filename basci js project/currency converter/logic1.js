
//from
let a = document.getElementById("fromOption");
let d;
let e;
let f = document.getElementById("img1");
let img_url;

for (const key in countryList) {
  let b = document.createElement("option");
  b.innerText = key;
  b.value = key;
  a.append(b);

}

a.addEventListener("change", () => {
  d = a.value;
  e = countryList[`${d}`];
  img_url = `https://flagsapi.com/${e}/flat/64.png`;
  f.setAttribute("src", img_url);
})


//-------------------------------------------------------------------
//to

let c = document.getElementById("toOption");

let d1;
let e1;
let f1 = document.getElementById("img2");
let img_url1;

for (const key in countryList) {
  let b = document.createElement("option");
  b.innerText = key;
  b.value = key;
  c.append(b);

}

c.addEventListener("change", () => {
  d1 = c.value;
  e1 = countryList[`${d1}`];
  img_url1 = `https://flagsapi.com/${e1}/flat/64.png`;
  f1.setAttribute("src", img_url1);
})

//-------------------------------------------------------------------
let bt = document.getElementById("result_bt")
let url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies"
let new_url;
let output;
let data;



bt.addEventListener("click", async (e) => {
  e.preventDefault();
  new_url = `${url}/${d.toLowerCase()}/${d1.toLowerCase()}.json`;

  output = await fetch(new_url);
  data = await output.json();
  let final_value = data[`${d1.toLowerCase()}`];
  let user_inputvalue = document.getElementById("amount").value;
  let messages = document.getElementById("result");
  let final_res = final_value * user_inputvalue;
  messages.innerText = `${user_inputvalue} ${d} = ${final_res} ${d1}`

})























setInterval(() => {
 let d = new Date();
 let h = d.getHours();
 let m = d.getMinutes();
 let s = d.getSeconds();
 
 let hrotation = ((30 * h) + (m / 2));
 let m_rotation = (6 * m);
 let s_rotation = (6 * s);

let a = document.getElementById("second")
a.style.transform=`rotate(${s_rotation}deg)`;

let b = document.getElementById("hou")
b.style.transform=`rotate(${hrotation}deg)`;


let c = document.getElementById("min")
c.style.transform=`rotate(${m_rotation}deg)`;

}, 1000);

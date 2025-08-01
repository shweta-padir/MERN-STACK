// let div=document.createElement("div");
// let h1=document.createElement("h1");
// let para=document.createElement("p");
// h1.innerText="i am in a div";
// para.innerText="me too!";
// div.append(h1);
// div.append(para);
// div.classList.add("div");
// document.querySelector("body").append(div);
let input=document.createElement("input");
let button=document.createElement("button");
button.innerText="click me";
input.setAttribute("placeholder","username");
button.setAttribute("id","btn");
document.querySelector("body").prepend(button);
document.querySelector("body").prepend(input);
let btn=document.querySelector("#btn");
btn.classList.add("btn");
let h1=document.createElement("h1");
h1.innerText="DOM Practice";
h1.classList.add("h1");
document.querySelector("body").prepend(h1);

//Ans
let p=document.createElement("p");
p.innerHTML="Apna College <b>Delta</b> Practice";
document.querySelector("body").append(p);
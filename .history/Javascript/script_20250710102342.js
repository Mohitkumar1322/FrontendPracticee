let p =document.getElementById("demo");
console.dir(p);


let chanege=document.getElementById("demo");


// let classChange=document.getElementsByClassName("heading");
// console.log(classChange[1].innerText);

let tagsManipulation=document.getElementsByTagName("h2");
console.log(tagsManipulation.length);



let querySelector=document.querySelector(".para");
querySelector.forEach(el => console.log(el.innerText));


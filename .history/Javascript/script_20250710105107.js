let p =document.getElementById("demo");
console.dir(p);


let chanege=document.getElementById("demo");


// let classChange=document.getElementsByClassName("heading");
// console.log(classChange[1].innerText);

let tagsManipulation=document.getElementsByTagName("h2");
console.log(tagsManipulation.length);



let querySelector=document.querySelector(".para");
let changingContent=document.getElementsByClassName("para")[0].innerText = "Hi, My self Mohit kumar I am third year btecch student !";
console.log(changingContent);


let box=document.getElementById("box");
box.style.backgroundColor="red";
box.style.width="200px";        
box.innerHTML="<i>This is a box</i>";

console.log(box );

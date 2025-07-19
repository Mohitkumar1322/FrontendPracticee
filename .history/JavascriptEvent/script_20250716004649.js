function sayHello() {
    const selectElement = document.getElementById("options");
    const selectedValue = selectElement.value;
    alert("Hello! You selected option " + selectedValue);
    console.log("Selected option: " + selectedValue);
}
let btn = document.querySelector("#mybtn");
btn.addEventListener("click",function(){
    //alert("Button clicked!");
    console.log();

});

let form = document.querySelector("form");

let inputs = document.querySelectorAll("input");

form.addEventListener("submit", function(dets) {
    dets.preventDefault(); // Prevent the default form submission this will stop the page from reloading
    console.log(inputs[0].value);
    console.log(inputs[1].value);
    console.log(inputs[2].value);
    console.log(inputs[3].value);
    console.log(inputs[4].value);
    // You can also access the form data using FormData API
});


// 3hours
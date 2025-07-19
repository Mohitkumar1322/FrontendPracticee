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

form.addEventListener("submit", function(dets) {
    dets.preventDefault(); // Prevent the default form submission
});
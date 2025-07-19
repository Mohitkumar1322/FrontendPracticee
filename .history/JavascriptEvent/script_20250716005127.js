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

// let form = document.querySelector("form");

// let inputs = document.querySelectorAll("input");

// form.addEventListener("submit", function(dets) {
//     dets.preventDefault(); // Prevent the default form submission this will stop the page from reloading
//     let card=document.querySelector("div");
//     card.classList.add("card");

//     let profile = document.createElement("div");
//     profile.classList.add("profile");

//     card.appendChild(profile);
    
//     // You can also access the form data using FormData API
// });


// // 3hours card creation after form submession

let form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent reload

    // Get form values
    let name = form.elements["name"].value;
    let age = form.elements["age"].value;
    let email = form.elements["email"].value;
    let profilePic = form.elements[3].value; // 4th input (no name)

    // Create card container
    let card = document.createElement("div");
    card.classList.add("cards");

    // Create profile pic section
    let profile = document.createElement("div");
    profile.classList.add("profile");

    let img = document.createElement("img");
    img.src = profilePic || "https://via.placeholder.com/80"; // fallback image
    img.alt = "profile";
    img.style.width = "80px";
    img.style.height = "80px";
    img.style.borderRadius = "50%";
    profile.appendChild(img);

    // Create name div
    let nameDiv = document.createElement("div");
    nameDiv.classList.add("name");
    nameDiv.innerText = name || "Anonymous";

    // Title
    let titleDiv = document.createElement("div");
    titleDiv.classList.add("title");
    titleDiv.innerText = "Age: " + (age || "N/A");

    // Bio
    let bioDiv = document.createElement("div");
    bioDiv.classList.add("bio");
    bioDiv.innerText = "Email: " + (email || "N/A");

    // Append all to card
    card.appendChild(profile);
    card.appendChild(nameDiv);
    card.appendChild(titleDiv);
    card.appendChild(bioDiv);

    // Append card to body (or another container)
    document.body.appendChild(card);

    // Optional: reset form
    form.reset();
});

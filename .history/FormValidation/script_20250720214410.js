let name=document.querySelector('#name');
let form =document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault();
    let nameValue = name.value.trim();
    if(nameValue === ''){
        alert('Name cannot be empty');
        return;
    }
    if(nameValue.length < 3){
        alert('Name must be at least 3 characters long');
        return;
    }
    alert('Form submitted successfully!');
}
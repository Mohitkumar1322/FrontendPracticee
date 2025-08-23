// console.log("one");
// console.log("two");
// console.log("three");
//here we are using synchronisation one by one first onw will execute then two and then three
//this is synchronous code execution


// function hello(){
//     console.log("hello");
// }
// setTimeout(hello, 2000); // this will execute after 2 seconds
// console.log("one");


// console.log("one");
// // this will execute immediately

// setTimeout(() => {
//     console.log("two");
// }, 2000);
// //setTimeout is an asynchronous function that will execute after 2 seconds and running parallelly with the rest of the code

// console.log("three");

// this will execute immediately
// here we are using asynchronous code execution

//callbacks

// function sum(a , b){
//     console.log(a + b);
// }

// function calculate(a, b, callback){
//     // here we are passing the sum function as a callback
//     callback(a, b);
// }

// calculate(5, 10, sum);
// here we are passing the sum function as a callback to the calculate function
// this is a simple example of callback function


// callback hell

// function getData(dataId,getNextDAta){ // take 2 sec
//     setTimeout(() => {
//         console.log("Fetching data for ID:", dataId);
//         if (getNextDAta) {
//             getNextDAta(); // call the next function if provided
//         }
//     }, 2000);
// }

//example of instagram first check username then password then otp it will take time to execute each step after some time 
// here we are using callback hell for instagram login
// getData(1);
// getData(3 ,()=>{
//     getData(4,()=>{
//         getData(5,()=>{
//             getData(6,()=>{
//                 console.log("All data fetched successfully");
//             });
//         });
//     });
// });

//this above code is complex and difficult to read so this is calll callback hell


// promise in hinglish  is a way to handle asynchronous operations in JavaScript. It allows you to write cleaner and more manageable code compared to callbacks. A promise can be in one of three states: 
// pending, fulfilled, or rejected.


// let promise = new Promise((resolve, reject) => {
//     // Simulating an asynchronous operation
//     setTimeout(() => {
//         const success = false; // Change this to false to simulate an error
//         if (success) {
//             resolve("Operation was successful!");
//         } else {
//             reject("Operation failed.");
//         }
//     }, 2000);
// });

// const getPromiseData =()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("Fetching data...");
//         // resolve("Data fetched successfully!");
//         reject("Data fetching failed.");
//     });
// };

// let promise = getPromiseData();
// promise.then((data) => {
//     console.log("Promise resolved:", data);
// });

// promise.catch((error) => {
//     console.error("Promise rejected:", error);
// });



// //promise chaining
// // getPromiseData()
// getPromiseData().then((data) => {
//     console.log("First then:", data);   
//     return "Data processed successfully!";
// }).then((processedData) => {    
//     console.log("Second then:", processedData);
// }).catch((error) => {   
//     console.error("Error in promise chain:", error);
// }).finally(() => {
//     console.log("Promise chain completed.");
// });


function api(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
             // Change this to false to simulate an error
            console.log("Fetching data from API...");
            resolve(200);
        }, 2000);
    });
}
async function getDataUser(){
    await api()
}

function getData(dataId) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Fetching data...", dataId);
            resolve("Data fetched successfully!");
        }, 2000);   
    });
};

async function getAllData(){
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
    await getData(5);
    await getData(6);
    console.log("All data fetched successfully");
}
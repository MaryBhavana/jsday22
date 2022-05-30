

console.log("Working....");

// const handleSubmit = () =>
// {
//     const username = document.getElementById('name').value;
//     console.log(username);
//     const email = document.getElementById('email').value;
//     console.log(email);
//     const phone = document.getElementById('no').value;
//     console.log(phone);
//     const address = document.getElementById('addr').value;
//     console.log(address);
//     localStorage.setItem("username",username);
//     sessionStorage.setItem("username",username);
//     localStorage.setItem("email",email);
//     sessionStorage.setItem("email",email);
//     localStorage.setItem("phone",phone);
//     sessionStorage.setItem("phone",phone);
//     localStorage.setItem("address",address);
//     sessionStorage.setItem("address",address);

// }
//  //stores all the data in the local system 
// const showDetails = () =>
// {
//     const sd = localStorage.getItem("username");
//     console.log(sd);
// }

//type error   syntax error   reference error

// const value = () = {

// }

//const a 3;-------syntax error

// const b=20;
// console.log(b());------type error


//sumbols are always guaranteed to be unique//
let sym1  = Symbol("Sun");
let sym2  = Symbol("Sun");
console.log(sym1 === sym2);

/* TDZ - Its a place where the let and const variables 
reside as long as they are not declared. It also has a 
default value of undefined only but if we try to access 
them, then will get ReferenceError.*/

//IIFE - Immediately Invoked Function Expressions - 
(()=>{
    const david = "David";

})();

const david = "David";

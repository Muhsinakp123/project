// document.querySelector("form").addEventListener("submit",function(e){
//     e.preventDefault();
//     alert("Your message has been sent"); 
//     this.reset(); 
// });


// const name=document.getElementById("name").value;
// const email=document.getElementById("email").value;
// const phone=document.getElementById("phone").value;
// const aboutproject=document.getElementById("aboutproject").value;





 function getValue(e) {

  e.preventDefault()


//   const inputElement = document.getElementById("email");
//   const inputValue = inputElement.value;

//   console.log("Email:" ,inputValue);
//   console.log("name:" ,inputValu);

//   const formData = {
//     name: 'sarath',
//     email: 'sasa',
//     phone: '9387495',
//     about: 'fasjdlfkdslkf las dflkjas df'
//   }

//   console.log(formData)
  
// }

const formData = {
  name:document.getElementById("name").value,
  email:document.getElementById("email").value,
  phone:document.getElementById("phone").value,
  aboutProject:document.getElementById("aboutproject").value,
}
  console.log(formData)
}




//  form.addEventListener('click', function(event) {
        
//     });

//      form.addEventListener('click', function(event) {
//         if (event.target.tagName === 'INPUT') {
//             alert('You Must Enter Your Name');
        
//         }
//     });

//     function validate(){
//   var name = document.getElementById("name").value;
//   var email = document.getElementById("email").value;
//   var phone = document.getElementById("phone").value;
//   var aboutproject = document.getElementById("aboutproject").value;
//   var error_message = document.getElementById("error_message");
  
//   error_message.style.padding = "10px";
  
//   var text;
//   if(name.length < 5){
//     text = "Please Enter valid Name";
//     error_message.innerHTML = text;
//     return false;
//   }
  
//   if(isNaN(phone) || phone.length != 10){
//     text = "Please Enter valid Phone Number";
//     error_message.innerHTML = text;
//     return false;
//   }
//   if(email.indexOf("@") == -1 || email.length < 6){
//     text = "Please Enter valid Email";
//     error_message.innerHTML = text;
//     return false;
//   }
//   if(aboutproject.length <= 140){
//     text = "Please Enter More Than 140 Characters";
//     error_message.innerHTML = text;
//     return false;
//   }
//   alert("Form Submitted Successfully!");
//   return true;
// }


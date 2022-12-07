// Add your code here
const formData ={
    name: "Steve",
    email : "steve@steve.com",
}
function submitData() {

 fetch("http://localhost:3000/users", {
   method: "POST",
   headers: {
     "Content-Type": "application/json",
     Accept: "application/json",
   },
   body: JSON.stringify(formData),
 })
   .then((response) => response.json())
   .then((data) => {
     console.log(data);
     document.body.innerHTML += `<p>${data.id}</p>`;
   })
   .catch((error) => {
       alert("Bad things!");
     console.log(error.message);
     document.body.innerHTML += `<p>${error.message}</p>`;
   });
}
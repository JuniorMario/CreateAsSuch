
function SetValues() {    
    const fname = document.getElementById("fname").value 
    const lname = document.getElementById("lname").value
    document.getElementById("demo").innerHTML = "Succeed Mr." + lname

}

function Register() {
    window.setTimeout(function(){ alert("Redirecting..."); }, 5000);
     window.location.href = "/"
    
}

function createPost() {
    console.log("TO BE IMPLEMENTED")

}
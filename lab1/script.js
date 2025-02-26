let massageSpan = document.getElementsByClassName("massage")[0];
massageSpan.textContent = "Hello World!";
function showStudentName(name){
    console.log("Student name:" + name);
}

let button = document.getElementsByClassName("mybutton")[0];
button.onclick = function(){
    showStudentName("Kasianenko Anastasiia");
}
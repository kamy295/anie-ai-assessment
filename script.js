//geting the elements by ID;
let students = document.getElementById("students");
let lesson = document.getElementById("lesson");
let settings = document.getElementById("settings");


//adding event listner to handle click event;
students.addEventListener('click', ()=> alert("You have clicked Students"));
lesson.addEventListener('click', ()=> alert("You have clicked Lesson Plan"));
settings.addEventListener('click', ()=> alert("You have clicked Settings"));
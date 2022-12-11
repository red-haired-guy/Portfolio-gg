const education = document.querySelector('#c1');
const skills = document.querySelector('#c2');
const hobbies = document.querySelector('#c3');

function showEducation(){
  education.style.display = "block";
  skills.style.display = "none";
  hobbies.style.display = "none";
}
function showSkills(){
  education.style.display = "none";
  skills.style.display = "block";
  hobbies.style.display = "none";
}
function showHobbies(){
  education.style.display = "none";
  skills.style.display = "none";
  hobbies.style.display = "block";
}
// here we select all links by using querySelectorAll 
const links = document.querySelectorAll('a ul li')
// then we make  loop to add eventlistener => click
// when the  thing is clicked it will fair the  function clickHandler
for(const link of links){
  link.addEventListener('click',clickHandler())
}
// here we defien the function
function clickHandler(e) {
  e.preventDefault();
  //on the top of the section
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
// here we do the scroll
// i don't know if that clear or not? yesssss hey 
// 
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}
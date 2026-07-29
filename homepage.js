/*=========================================
APEX CAPITAL
HOMEPAGE.JS
=========================================*/

//==============================
// MOBILE MENU
//==============================

function toggleMenu(){

const menu=document.getElementById("navMenu");

menu.classList.toggle("active");

}

//==============================
// CHALLENGE SELECTION
//==============================

function selectPlan(account,price){

localStorage.setItem("selectedAccount",account);
localStorage.setItem("selectedPrice",price);

window.location.href="register.html";

}

//==============================
// HELP ME CHOOSE
//==============================

function helpChoose(){

const capital=prompt(
"What account size are you interested in?\n\nExample: 5K, 10K, 25K, 50K, 100K or 200K"
);

if(!capital) return;

const value=capital.toUpperCase();

if(value==="5K"){

alert("Recommended:\n\n5K Evaluation\nPerfect for beginners.");

}

else if(value==="10K"){

alert("Recommended:\n\n10K Evaluation\nA great balance of cost and funding.");

}

else if(value==="25K"){

alert("Recommended:\n\n25K Evaluation\nIdeal for growing traders.");

}

else if(value==="50K"){

alert("Recommended:\n\n50K Evaluation\nOur most popular challenge.");

}

else if(value==="100K"){

alert("Recommended:\n\n100K Evaluation\nProfessional funding level.");

}

else if(value==="200K"){

alert("Recommended:\n\n200K Evaluation\nMaximum funding opportunity.");

}

else{

alert("Please enter:\n5K, 10K, 25K, 50K, 100K or 200K");

}

}

//==============================
// FAQ
//==============================

const faqButtons=document.querySelectorAll(".faq-question");

faqButtons.forEach(function(button){

button.addEventListener("click",function(){

const answer=this.nextElementSibling;

if(answer.style.display==="block"){

answer.style.display="none";

}else{

document.querySelectorAll(".faq-answer").forEach(function(item){

item.style.display="none";

});

answer.style.display="block";

}

});

});

//==============================
// CLOSE MENU AFTER CLICK
//==============================

document.querySelectorAll(".nav-links a").forEach(function(link){

link.addEventListener("click",function(){

const menu=document.getElementById("navMenu");

menu.classList.remove("active");

});

});

//==============================
// HERO BUTTONS
//==============================

document.querySelectorAll(".primary").forEach(function(button){

button.addEventListener("click",function(){

document.getElementById("challenges").scrollIntoView({

behavior:"smooth"

});

});

});

//==============================
// FREE TRIAL
//==============================

document.querySelectorAll(".secondary").forEach(function(button){

button.addEventListener("click",function(e){

e.preventDefault();

alert(
"Your Free Trial feature will be available after connecting Supabase."
);

});

});

//==============================
// ACTIVE NAVIGATION
//==============================

window.addEventListener("scroll",function(){

const sections=document.querySelectorAll("section");

const links=document.querySelectorAll(".nav-links a");

let current="";

sections.forEach(function(section){

const top=section.offsetTop-120;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

links.forEach(function(link){

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

//==============================
// FADE IN ON SCROLL
//==============================

const observer=new IntersectionObserver(function(entries){

entries.forEach(function(entry){

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll(".card,.stat-box,.help-box,.faq-item").forEach(function(item){

item.style.opacity="0";
item.style.transform="translateY(40px)";
item.style.transition=".6s";

observer.observe(item);

});

console.log("Apex Capital Homepage Loaded Successfully");

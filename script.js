
// APEX CAPITAL V2 JAVASCRIPT


function toggleMenu(){

const menu = document.getElementById("navMenu");

menu.classList.toggle("show");

}


function helpChoose(){

let choice = prompt(
"Choose your trading style:\n\n1 - Beginner\n2 - Experienced\n3 - Professional"
);


if(choice=="1"){

alert(
"We recommend the $5K or $10K challenge. Focus on discipline and risk management."

);

}


else if(choice=="2"){

alert(
"We recommend the $25K or $50K challenge. Good balance between opportunity and risk."
);

}

else if(choice=="3"){

alert(
"We recommend the $100K or $200K challenge. Built for experienced traders."
);

}


else{

alert(
"Please choose 1, 2, or 3."
);


}

}

document.querySelectorAll(".faq-question").forEach(button=>{

button.addEventListener("click",()=>{

const answer=button.nextElementSibling;

answer.classList.toggle("show");

});

});
function selectPlan(plan, price){

document.getElementById("selected-plan").innerHTML =
"$" + plan + " Evaluation";

document.getElementById("plan-price").innerHTML =
"$" + price;

document.getElementById("total-price").innerHTML =
"$" + price;

}
function selectPlan(plan, price){

localStorage.setItem("plan", plan);
localStorage.setItem("price", price);

window.location.href = "checkout.html";

}
function selectPlan(plan, price){

    localStorage.setItem("plan", plan);
    localStorage.setItem("price", price);

    window.location.href = "checkout.html";

}
function goToPayment(){

window.location.href = "payment.html";

}

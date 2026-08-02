/*=========================================
APEX CAPITAL
SCRIPT.JS - PART 1
=========================================*/

//==============================
// TRADER INFORMATION
//==============================

const SUPABASE_URL = "https://qfnbsxfqwizhbzyknsvz.supabase.co";

const SUPABASE_KEY = "sb_publishable_50oc2WjubT5Rzx0Ct-LExw_hhziExmJ";

const supabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);
accountSize: 100000,

balance: 100000,

equity: 100000,

profit: 0,

phase: "Phase 1",

status: "ACTIVE",

challenge: "$100K Evaluation",

profitTarget: 8,

dailyLoss: 5,

maxLoss: 10,

tradingDays: 0,

minimumDays: 5,

rewardDays: 14

};

//==============================
// LOAD DASHBOARD
//==============================

window.onload = async function () {

    const { data } = await supabase.auth.getUser();

    if (!data.user) {
        window.location.href = "login.html";
        return;
    }

    const { data: traderData } = await supabase
        .from("traders")
        .select("*")
        .eq("id", data.user.id)
        .single();

    if (traderData) {
        trader.name = traderData.full_name;
    }

    loadDashboard();
};

//==============================
// UPDATE DASHBOARD
//==============================

function loadDashboard(){

setText("welcome-name",trader.name);

setText("dashboard-balance",
"$"+number(trader.balance));

setText("dashboard-equity",
"$"+number(trader.equity));

setText("dashboard-profit",
profitText());

setText("challenge-type",
trader.challenge);

setText("account-status",
trader.status);

}

//==============================
// HELPERS
//==============================

function setText(id,value){

const element=document.getElementById(id);

if(element){

element.innerHTML=value;

}

}

function number(value){

return value.toLocaleString();

}

function profitText(){

if(trader.profit>=0){

return "+$"+number(trader.profit);

}

return "-$"+number(Math.abs(trader.profit));

}

//==============================
// NOTIFICATIONS
//==============================

function showNotification(message){

alert(message);

}

//==============================
// QUICK ACTION BUTTONS
//==============================

function startChallenge(){

window.location.href="challenges.html";

}

function requestReward(){

window.location.href="rewards.html";

}

function openCertificates(){

window.location.href="certificates.html";

}

function manageProfile(){

window.location.href="profile.html";

}

//==============================
// BUTTON EVENTS
//==============================

document.addEventListener("DOMContentLoaded",function(){

const primaryButton=document.querySelector(".primary-btn");

if(primaryButton){

primaryButton.addEventListener("click",function(){

requestReward();

});

}

const actionButtons=document.querySelectorAll(".action-btn");

actionButtons.forEach(function(button){

const text=button.textContent.toLowerCase();

if(text.includes("challenge")){

button.addEventListener("click",function(e){

e.preventDefault();

startChallenge();

});

}

if(text.includes("reward")){

button.addEventListener("click",function(e){

e.preventDefault();

requestReward();

});

}

if(text.includes("certificate")){

button.addEventListener("click",function(e){

e.preventDefault();

openCertificates();

});

}

if(text.includes("profile")){

button.addEventListener("click",function(e){

e.preventDefault();

manageProfile();

});

}

});

});

//==============================
// SIMULATE ACCOUNT UPDATES
//==============================

function updateProfit(amount){

trader.profit=amount;

trader.equity=trader.balance+amount;

setText("dashboard-profit",profitText());

setText("dashboard-equity",
"$"+number(trader.equity));

}

setTimeout(function(){

updateProfit(2450);

},2000);

//==============================
// PROGRESS BAR
//==============================

function updateProgress(percent){

const progress=document.querySelector(".progress-fill");

if(progress){

progress.style.width=percent+"%";

}

const progressText=document.querySelector(".progress-text");

if(progressText){

progressText.innerHTML=

"You're only <strong>"+

(100-percent)+

"%</strong> away from completing Phase 1.";

}

}

updateProgress(68);

//==============================
// LIVE DATE & TIME
//==============================

function updateClock(){

const now=new Date();

const options={

weekday:"long",

day:"numeric",

month:"long",

year:"numeric",

hour:"2-digit",

minute:"2-digit"

};

const clock=document.getElementById("live-date");

if(clock){

clock.innerHTML=now.toLocaleString("en-UG",options);

}

}

setInterval(updateClock,1000);

updateClock();

//==============================
// SEARCH
//==============================

const searchBox=document.querySelector(".top-actions input");

if(searchBox){

searchBox.addEventListener("keyup",function(){

const value=this.value.toLowerCase();

console.log("Searching:",value);

});

}

//==============================
// SIDEBAR ACTIVE LINK
//==============================

const links=document.querySelectorAll(".sidebar a");

links.forEach(function(link){

link.addEventListener("click",function(){

links.forEach(function(item){

item.classList.remove("active");

});

this.classList.add("active");

});

});

//==============================
// DASHBOARD READY
//==============================

console.log("Apex Capital Dashboard Loaded Successfully");

/*=========================================
END OF SCRIPT.JS
=========================================*/

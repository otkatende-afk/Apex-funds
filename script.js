/*=========================================
APEX CAPITAL
SCRIPT.JS
PART 1
=========================================*/

//==============================
// SUPABASE
//==============================

const SUPABASE_URL =
"https://qfnbsxfqwizhbzyknsvz.supabase.co";

const SUPABASE_KEY =
"sb_publishable_50oc2WjubT5Rzx0Ct-LExw_hhziExmJ";

const supabase =
window.supabase.createClient(
SUPABASE_URL,
SUPABASE_KEY
);

//==============================
// TRADER OBJECT
//==============================

const trader={

name:"",

email:"",

accountSize:100000,

balance:100000,

equity:100000,

profit:0,

phase:"Phase 1",

status:"ACTIVE",

challenge:"$100K Evaluation",

profitTarget:8,

dailyLoss:5,

maxLoss:10,

tradingDays:0,

minimumDays:5,

rewardDays:14

};

//==============================
// START DASHBOARD
//==============================

window.onload=function(){

startDashboard();

};

//==============================
// LOAD USER
//==============================

async function startDashboard(){

const {data:{user}}=
await supabase.auth.getUser();

if(!user){

window.location.href="login.html";

return;

}

const {data,error}=await supabase

.from("traders")

.select("*")

.eq("id",user.id)

.single();

if(error){

console.log(error);

return;

}

trader.name=data.full_name;

trader.email=data.email;

loadDashboard();

}
//==============================
// LOAD DASHBOARD
//==============================

function loadDashboard(){

setText("welcome-name",trader.name);

setText(
"dashboard-balance",
"$"+number(trader.balance)
);

setText(
"dashboard-equity",
"$"+number(trader.equity)
);

setText(
"dashboard-profit",
profitText()
);

setText(
"challenge-type",
trader.challenge
);

setText(
"account-status",
trader.status
);

const avatar=document.getElementById("avatar");

if(avatar && trader.name!=""){

avatar.innerHTML=
trader.name.charAt(0).toUpperCase();

}

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

return Number(value).toLocaleString();

}

function profitText(){

if(trader.profit>=0){

return "+$"+number(trader.profit);

}

return "-$"+
number(Math.abs(trader.profit));

}

//==============================
// NOTIFICATIONS
//==============================

function showNotification(message){

alert(message);

}

//==============================
// UPDATE PROFIT
//==============================

function updateProfit(amount){

trader.profit=amount;

trader.equity=
trader.balance+amount;

setText(
"dashboard-profit",
profitText()
);

setText(
"dashboard-equity",
"$"+number(trader.equity)
);

}
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

clock.innerHTML=

now.toLocaleString("en-UG",options);

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

console.log("Searching:",this.value);

});

}

//==============================
// QUICK ACTIONS
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

document.addEventListener("DOMContentLoaded",function(){

const primaryButton=document.querySelector(".primary-btn");

if(primaryButton){

primaryButton.addEventListener("click",function(){

requestReward();

});

}

});
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
// LOGOUT
//==============================

async function logout(){

await supabase.auth.signOut();

window.location.href="login.html";

}

const logoutLink=document.querySelector(
'a[href="login.html"]'
);

if(logoutLink){

logoutLink.addEventListener("click",async function(e){

e.preventDefault();

await logout();

});

}

//==============================
// SIMULATE PROFIT
//==============================

setTimeout(function(){

updateProfit(2450);

},2000);

//==============================
// DASHBOARD READY
//==============================

console.log("Apex Capital Dashboard Loaded Successfully");

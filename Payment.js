function showPayment(type, element){

document.querySelectorAll(".method-card").forEach(card=>{
card.classList.remove("active");
});

element.classList.add("active");

const form=document.getElementById("payment-form");

if(type==="mtn"){

form.innerHTML=`
<h3>MTN Mobile Money</h3>

<label>Phone Number</label>
<input type="tel" placeholder="077XXXXXXXX">

<label>Account Name</label>
<input type="text" placeholder="Full Name">

<button class="pay-now">Pay with MTN</button>
`;

}

if(type==="airtel"){

form.innerHTML=`
<h3>Airtel Money</h3>

<label>Phone Number</label>
<input type="tel" placeholder="070XXXXXXXX">

<label>Account Name</label>
<input type="text" placeholder="Full Name">

<button class="pay-now">Pay with Airtel</button>
`;

}

if(type==="card"){

form.innerHTML=`
<h3>Visa / Mastercard</h3>

<label>Card Number</label>
<input type="text" placeholder="1234 5678 9012 3456">

<label>Expiry Date</label>
<input type="text" placeholder="MM/YY">

<label>CVV</label>
<input type="password" placeholder="123">

<button class="pay-now">Pay by Card</button>
`;

}

if(type==="crypto"){

form.innerHTML=`
<h3>Crypto Payment</h3>

<p>Send payment using Bitcoin, Ethereum or USDT.</p>

<button class="pay-now">Continue</button>
`;

}

}

// =====================================
// APEX CAPITAL PAYMENT.JS
// =====================================

// Change payment form when a method is selected
function showPayment(type, element) {

    // Remove active from all payment cards
    const cards = document.querySelectorAll(".method-card");

    cards.forEach(function(card) {
        card.classList.remove("active");
    });

    // Make selected card active
    if (element) {
        element.classList.add("active");
    }

    const form = document.querySelector(".payment-form");

    if (!form) {
        console.error("Payment form not found.");
        return;
    }

    // MTN MOBILE MONEY
    if (type === "mtn") {

        form.innerHTML = `
            <h3>📱 MTN Mobile Money</h3>

            <p>Enter your MTN number to continue.</p>

            <label>MTN Phone Number</label>

            <input
                type="tel"
                id="mtn-number"
                placeholder="077XXXXXXXX"
            >

            <button class="pay-now" onclick="processPayment('mtn')">
                Pay with MTN
            </button>
        `;
    }


    // AIRTEL MONEY
    if (type === "airtel") {

        form.innerHTML = `
            <h3>📱 Airtel Money</h3>

            <p>Enter your Airtel number to continue.</p>

            <label>Airtel Phone Number</label>

            <input
                type="tel"
                id="airtel-number"
                placeholder="070XXXXXXXX"
            >

            <button class="pay-now" onclick="processPayment('airtel')">
                Pay with Airtel
            </button>
        `;
    }


    // VISA / MASTERCARD
    if (type === "card") {

        form.innerHTML = `
            <h3>💳 Visa / Mastercard</h3>

            <p>Enter your card details.</p>

            <label>Card Number</label>

            <input
                type="text"
                id="card-number"
                placeholder="1234 5678 9012 3456"
            >

            <label>Expiry Date</label>

            <input
                type="text"
                id="card-expiry"
                placeholder="MM/YY"
            >

            <label>CVV</label>

            <input
                type="password"
                id="card-cvv"
                placeholder="123"
            >

            <button class="pay-now" onclick="processPayment('card')">
                Pay with Card
            </button>
        `;
    }


    // CRYPTO
    if (type === "crypto") {

        form.innerHTML = `
            <h3>₿ Crypto Payment</h3>

            <p>
                Pay using Bitcoin, USDT or Ethereum.
            </p>

            <button
                class="pay-now"
                onclick="processPayment('crypto')"
            >
                Continue with Crypto
            </button>
        `;
    }

}


// =====================================
// PROCESS PAYMENT
// =====================================

function processPayment(method) {

    console.log("Payment method:", method);

    if (method === "mtn") {

        const number = document.getElementById("mtn-number");

        if (!number || !number.value.trim()) {
            alert("Please enter your MTN phone number.");
            return;
        }

    }


    if (method === "airtel") {

        const number = document.getElementById("airtel-number");

        if (!number || !number.value.trim()) {
            alert("Please enter your Airtel phone number.");
            return;
        }

    }


    if (method === "card") {

        const card = document.getElementById("card-number");
        const expiry = document.getElementById("card-expiry");
        const cvv = document.getElementById("card-cvv");

        if (
            !card.value.trim() ||
            !expiry.value.trim() ||
            !cvv.value.trim()
        ) {
            alert("Please complete your card details.");
            return;
        }

    }


    alert(
        "Payment gateway is not connected yet.\n\n" +
        "Selected method: " + method.toUpperCase()
    );

}

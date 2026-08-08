// ===============================
// APEX CAPITAL PAYMENT SYSTEM
// ===============================

function showPayment(method, selectedCard) {

    // Remove active class from all payment cards
    const cards = document.querySelectorAll(".method-card");

    cards.forEach(function(card) {
        card.classList.remove("active");
    });

    // Highlight selected card
    if (selectedCard) {
        selectedCard.classList.add("active");
    }

    // Find payment form
    const paymentForm = document.querySelector(".payment-form");

    if (!paymentForm) {
        console.log("Payment form not found");
        return;
    }

    // MTN
    if (method === "mtn") {

        paymentForm.innerHTML = `
            <h3>MTN Mobile Money</h3>

            <p>Pay instantly using MTN Mobile Money.</p>

            <label>Phone Number</label>
            <input
                type="tel"
                placeholder="077XXXXXXX"
                id="mtn-phone"
            >

            <label>Account Name</label>
            <input
                type="text"
                placeholder="Your full name"
                id="mtn-name"
            >

            <label>Email Address</label>
            <input
                type="email"
                placeholder="your@email.com"
                id="mtn-email"
            >

            <button class="pay-now-btn" onclick="processPayment('mtn')">
                Pay $599 →
            </button>
        `;

        return;
    }

    // AIRTEL
    if (method === "airtel") {

        paymentForm.innerHTML = `
            <h3>Airtel Money</h3>

            <p>Pay securely using Airtel Money.</p>

            <label>Phone Number</label>
            <input
                type="tel"
                placeholder="070XXXXXXX"
                id="airtel-phone"
            >

            <label>Account Name</label>
            <input
                type="text"
                placeholder="Your full name"
                id="airtel-name"
            >

            <label>Email Address</label>
            <input
                type="email"
                placeholder="your@email.com"
                id="airtel-email"
            >

            <button class="pay-now-btn" onclick="processPayment('airtel')">
                Pay $599 →
            </button>
        `;

        return;
    }

    // CARD
    if (method === "card") {

        paymentForm.innerHTML = `
            <h3>Visa / Mastercard</h3>

            <p>Pay securely using your debit or credit card.</p>

            <label>Card Number</label>
            <input
                type="text"
                placeholder="1234 5678 9012 3456"
                maxlength="19"
            >

            <div class="payment-fields">

                <div>
                    <label>Expiry Date</label>
                    <input
                        type="text"
                        placeholder="MM/YY"
                    >
                </div>

                <div>
                    <label>CVV</label>
                    <input
                        type="password"
                        placeholder="123"
                        maxlength="4"
                    >
                </div>

            </div>

            <label>Cardholder Name</label>
            <input
                type="text"
                placeholder="Name on card"
            >

            <button class="pay-now-btn" onclick="processPayment('card')">
                Pay $599 →
            </button>
        `;

        return;
    }

    // CRYPTO
    if (method === "crypto") {

        paymentForm.innerHTML = `
            <h3>Crypto Payment</h3>

            <p>Select your preferred cryptocurrency.</p>

            <select id="crypto-type">

                <option value="btc">
                    Bitcoin (BTC)
                </option>

                <option value="usdt">
                    Tether (USDT)
                </option>

                <option value="eth">
                    Ethereum (ETH)
                </option>

            </select>

            <div class="crypto-info">

                <h4>Payment Address</h4>

                <p>
                    Payment address will appear after you continue.
                </p>

            </div>

            <button class="pay-now-btn" onclick="processPayment('crypto')">
                Continue to Payment →
            </button>
        `;

        return;
    }
}


// ===============================
// PAYMENT BUTTON
// ===============================

function processPayment(method) {

    alert(
        "Payment method selected: " +
        method.toUpperCase() +
        "\n\nPayment processing will be connected next."
    );

}


// ===============================
// PAGE READY
// ===============================

console.log("Apex Capital Payment System Loaded");

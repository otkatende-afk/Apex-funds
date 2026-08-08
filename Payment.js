// ========================================
// APEX CAPITAL - PAYMENT.JS
// ========================================

function showPayment(method, element) {

    // Remove active class from all payment cards
    const cards = document.querySelectorAll(".method-card");

    cards.forEach(function(card) {
        card.classList.remove("active");
    });

    // Make the clicked card active
    if (element) {
        element.classList.add("active");
    }

    // Find payment form
    const paymentForm = document.querySelector(".payment-form");

    if (!paymentForm) {
        console.log("Payment form not found");
        return;
    }

    // Payment content
    let title = "";
    let description = "";
    let formHTML = "";

    if (method === "mtn") {

        title = "MTN Mobile Money";

        description = "Pay instantly using MTN Mobile Money.";

        formHTML = `
            <h3>MTN Mobile Money</h3>

            <p>Enter your MTN number to continue.</p>

            <input
                type="tel"
                id="mtn-number"
                placeholder="07XXXXXXXX"
                maxlength="10"
            >

            <button class="payment-submit"
                onclick="processPayment('mtn')">
                Continue with MTN
            </button>
        `;

    }

    else if (method === "airtel") {

        title = "Airtel Money";

        description = "Fast and secure Airtel Money payment.";

        formHTML = `
            <h3>Airtel Money</h3>

            <p>Enter your Airtel number to continue.</p>

            <input
                type="tel"
                id="airtel-number"
                placeholder="07XXXXXXXX"
                maxlength="10"
            >

            <button class="payment-submit"
                onclick="processPayment('airtel')">
                Continue with Airtel
            </button>
        `;

    }

    else if (method === "card") {

        title = "Visa / Mastercard";

        description = "Pay securely using your bank card.";

        formHTML = `
            <h3>Visa / Mastercard</h3>

            <p>Enter your card details.</p>

            <input
                type="text"
                placeholder="Cardholder Name"
            >

            <input
                type="text"
                placeholder="Card Number"
                maxlength="19"
            >

            <div class="card-row">

                <input
                    type="text"
                    placeholder="MM/YY"
                    maxlength="5"
                >

                <input
                    type="password"
                    placeholder="CVV"
                    maxlength="4"
                >

            </div>

            <button class="payment-submit"
                onclick="processPayment('card')">
                Continue to Card Payment
            </button>
        `;

    }

    else if (method === "crypto") {

        title = "Crypto";

        description = "Pay using Bitcoin, USDT or Ethereum.";

        formHTML = `
            <h3>Crypto Payment</h3>

            <p>Select your cryptocurrency.</p>

            <select id="crypto-type">

                <option value="bitcoin">
                    Bitcoin (BTC)
                </option>

                <option value="usdt">
                    USDT
                </option>

                <option value="ethereum">
                    Ethereum (ETH)
                </option>

            </select>

            <button class="payment-submit"
                onclick="processPayment('crypto')">
                Continue with Crypto
            </button>
        `;

    }

    paymentForm.innerHTML = formHTML;
}


// ========================================
// PROCESS PAYMENT
// ========================================

function processPayment(method) {

    if (method === "mtn") {

        const number = document.getElementById("mtn-number");

        if (!number || number.value.trim() === "") {

            alert("Please enter your MTN Mobile Money number.");

            return;
        }

        alert(
            "MTN Mobile Money selected.\n\n" +
            "Payment integration will be connected here."
        );

    }

    else if (method === "airtel") {

        const number = document.getElementById("airtel-number");

        if (!number || number.value.trim() === "") {

            alert("Please enter your Airtel Money number.");

            return;
        }

        alert(
            "Airtel Money selected.\n\n" +
            "Payment integration will be connected here."
        );

    }

    else if (method === "card") {

        alert(
            "Card payment selected.\n\n" +
            "Payment gateway will be connected here."
        );

    }

    else if (method === "crypto") {

        const crypto = document.getElementById("crypto-type");

        alert(
            "Crypto selected: " +
            crypto.value.toUpperCase() +
            "\n\n" +
            "Crypto payment gateway will be connected here."
        );

    }

}

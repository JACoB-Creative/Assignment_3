document.addEventListener('DOMContentLoaded', function () {
    const paymentForm = document.getElementById('payment-form');

    function validateInput(input, regex, errorMessage) {
        const value = input.value.trim();
        const errorSpan = input.nextElementSibling;

        if (!regex.test(value)) {
            input.classList.add('invalid');
            input.classList.remove('valid');
            errorSpan.style.display = 'block';
            errorSpan.textContent = errorMessage;
            return false;
        } else {
            input.classList.remove('invalid');
            input.classList.add('valid');
            errorSpan.style.display = 'none';
            return true;
        }
    }

    function attachValidation(input, regex, errorMessage) {
        input.addEventListener('input', function () {
            validateInput(input, regex, errorMessage);
        });
    }

    const cardNumberInput = paymentForm.querySelector('input[name="card-number"]');
    const nameOnCardInput = paymentForm.querySelector('input[name="name-on-card"]');
    const expireDateInput = paymentForm.querySelector('input[name="expire-date"]');
    const cvvInput = paymentForm.querySelector('input[name="cvv"]');

    attachValidation(cardNumberInput, /^\d{16}$/, 'Please supply a valid card number');
    attachValidation(nameOnCardInput, /^[a-zA-Z\s]+$/, 'Please supply a valid name');
    attachValidation(expireDateInput, /^(0[1-9]|1[0-2])\/\d{2}$/, 'Please supply a valid expire date');
    attachValidation(cvvInput, /^\d{3,4}$/, 'Please supply a valid CVV');

    window.validateForm = function () {
        const isCardNumberValid = validateInput(cardNumberInput, /^\d{16}$/, 'Please supply a valid card number');
        const isNameOnCardValid = validateInput(nameOnCardInput, /^[a-zA-Z\s]+$/, 'Please supply a valid name');
        const isExpireDateValid = validateInput(expireDateInput, /^(0[1-9]|1[0-2])\/\d{2}$/, 'Please supply a valid expire date');
        const isCvvValid = validateInput(cvvInput, /^\d{3,4}$/, 'Please supply a valid CVV');

        return isCardNumberValid && isNameOnCardValid && isExpireDateValid && isCvvValid;
    };
});

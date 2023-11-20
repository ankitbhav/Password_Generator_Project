document.addEventListener('DOMContentLoaded', function () {
    const generateBtn = document.getElementById('generateBtn');
    const copyBtn = document.getElementById('copyBtn');
    const generatedPasswordInput = document.getElementById('generatedPassword');
    const passwordLengthInput = document.getElementById('passwordLength');
    const uppercaseCheckbox = document.getElementById('uppercase');
    const lowercaseCheckbox = document.getElementById('lowercase');
    const numbersCheckbox = document.getElementById('numbers');
    const symbolsCheckbox = document.getElementById('symbols');

    generateBtn.addEventListener('click', generatePassword);
    copyBtn.addEventListener('click', copyToClipboard);

    function generatePassword() {
        const length = parseInt(passwordLengthInput.value);
        const uppercase = uppercaseCheckbox.checked;
        const lowercase = lowercaseCheckbox.checked;
        const numbers = numbersCheckbox.checked;
        const symbols = symbolsCheckbox.checked;

        generatedPasswordInput.value = generateRandomPassword(length, uppercase, lowercase, numbers, symbols);
    }

    function generateRandomPassword(length, uppercase, lowercase, numbers, symbols) {
        let charset = '';
        if (uppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (lowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
        if (numbers) charset += '0123456789';
        if (symbols) charset += '!@#$%^&*()_+[]{}|;:,.<>?';

        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset.charAt(randomIndex);
        }

        return password;
    }

    function copyToClipboard() {
        generatedPasswordInput.select();
        document.execCommand('copy');
    }
});

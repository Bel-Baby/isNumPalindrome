//Given a positive integer, write a function that returns true if the given number is a palindrome, else false. For example, 12321 is a palindrome, but 1451 is not a palindrome.

const check = document.querySelector("#check");

const reversedInt = () => {
    const reversedInt = int.value.split("").reverse().join("");
    return reversedInt;
}

const checkForPalindrome = (intVal) => {
    const reversedIntVal = reversedInt();
    if (reversedIntVal === intVal) {
        return true
    } else {
        return false
    }
}

const runPalindomechecker = () => {
    const int = document.querySelector("#int");
    const output = document.querySelector("#output");
    output.textContent = checkForPalindrome(int.value).toString();
}

check.addEventListener("click", runPalindomechecker);
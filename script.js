//Given a positive integer, write a function that returns true if the given number is a palindrome, else false. For example, 12321 is a palindrome, but 1451 is not a palindrome.

const int = document.querySelector("#int");
const check = document.querySelector("#check");
const output = document.querySelector("#output");

const checkForPalindrome = () => {
    const intVal = int.value ;
    const reversedInt = intVal.split("").reverse().join("");
    const isIntPalindromeOrNot = reversedInt === intVal ? "true" : "false";

    output.textContent = isIntPalindromeOrNot;
}

check.addEventListener("click", checkForPalindrome);
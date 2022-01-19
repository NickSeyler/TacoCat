//get the string from the user
function getInput() {
    let userStr = document.getElementById("userStr").value;

    let isPalindrome = checkPalindrome(userStr);

    displayData(isPalindrome);
}

//Input: String
//Return: Boolean
//Check for palindrome
function checkPalindrome(str) {
    let modifiedStr = "";
    let revStr = "";

    //remove special characters
    for (let i = 0; i < str.length; i++){
        if ((/[0-9a-zA-Z]/).test(str[i])){
            modifiedStr += str[i].toLowerCase();
        }
    }

    for (let i = modifiedStr.length - 1; i >= 0; i--) {
        revStr += modifiedStr[i];
    }

    return revStr == modifiedStr;
}

//Input: Boolean
//Return: None
//Display whether or not the item is a palindrome
function displayData(isPalindrome) {

    if (isPalindrome){
        document.getElementById("alertPalindromeMessage").innerHTML = `Yes, it's a palindrome!`;
        document.getElementById("alertPalindrome").classList.remove("alert-danger");
        document.getElementById("alertPalindrome").classList.add("alert-success");
    }
    else{
        document.getElementById("alertPalindromeMessage").innerHTML = `No, it's not a palindrome!`;
        document.getElementById("alertPalindrome").classList.remove("alert-success");
        document.getElementById("alertPalindrome").classList.add("alert-danger");
    }
    document.getElementById("alertPalindrome").classList.remove("d-none");
}
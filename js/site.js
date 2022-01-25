//get the input from the user
function getInput() {
    let userStr = document.getElementById("userStr").value;

    let returnObj = checkPalindrome(userStr);

    displayData(returnObj);
}

//Expected Input: String
//Expected Return: Objected {String, String, Boolean}
//Check for palindrome
function checkPalindrome(str) {
    let modifiedStr = "";
    let revStr = "";
    let isPalindrome = false;
    let returnObj = {};

    //remove special characters
    for (let i = 0; i < str.length; i++){
        if ((/[0-9a-zA-Z]/).test(str[i])){
            modifiedStr += str[i].toLowerCase();
        }
    }

    for (let i = modifiedStr.length - 1; i >= 0; i--) {
        revStr += modifiedStr[i];
    }

    isPalindrome = revStr == modifiedStr;

    returnObj["userStr"] = str;
    returnObj["revStr"] = revStr;
    returnObj["isPalindrome"] = isPalindrome;

    return returnObj;
}

//Expected Input: Object {String, String, Boolean}
//Expected Return: None
//Display whether or not the string is a palindrome
function displayData(obj) {

    if (obj["isPalindrome"]){
        document.getElementById("alertPalindromeMessage").innerHTML = `Yes, ${obj["userStr"]} is a palindrome!
            <br/> Reversed String: ${obj["revStr"]}`;
        document.getElementById("alertPalindrome").classList.remove("alert-danger");
        document.getElementById("alertPalindrome").classList.add("alert-success");
    }
    else{
        document.getElementById("alertPalindromeMessage").innerHTML = `No, ${obj["userStr"]} is not a palindrome!
            <br/> Reversed String: ${obj["revStr"]}`;
        document.getElementById("alertPalindrome").classList.remove("alert-success");
        document.getElementById("alertPalindrome").classList.add("alert-danger");
    }
    document.getElementById("alertPalindrome").classList.remove("d-none");
}
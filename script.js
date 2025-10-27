var password = document.getElementById("password");
var generate = document.getElementById("generate");
var characters = document.getElementById("characters");
var uppercase = document.getElementById("uppercase");
var lowercase = document.getElementById("lowercase");
var numbers = document.getElementById("numbers");
var symbols = document.getElementById("symbols");
var copy = document.getElementById("copy");

var length = 12,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";

function generatePassword() {
    var retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

generate.onclick = function() {
    password.value = generatePassword();
}

copy.onclick = function() {
    password.select();
    document.execCommand("copy");
    alert("Password copied to clipboard");
}

characters.onchange = function() {
    length = characters.value;
}

uppercase.onchange = function() {
    if (uppercase.checked) {
        charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else {
        charset = charset.replace("ABCDEFGHIJKLMNOPQRSTUVWXYZ", "");
    }
}

lowercase.onchange = function() {
    if (lowercase.checked) {
        charset += "abcdefghijklmnopqrstuvwxyz";
    } else {
        charset = charset.replace("abcdefghijklmnopqrstuvwxyz", "");
    }
}

numbers.onchange = function() {
    if (numbers.checked) {
        charset += "0123456789";
    } else {
        charset = charset.replace("0123456789", "");
    }
}
symbols.onchange = function() {
    if (symbols.checked) {
        charset += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    } else {
        charset = charset.replace("!@#$%^&*()_+~`|}{[]:;?><,./-=", "");
    }
}


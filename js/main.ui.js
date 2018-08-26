var splashPort = document.getElementById("splashPort");
var accountPort = document.getElementById("accountPort");
var todoListport = document.getElementById("todoListport");
var friendsPort = document.getElementById("friendsPort");
var settingsPort = document.getElementById("settingsPort");

var createAccountPort = document.getElementById("createAccountPort");
var loginPort = document.getElementById("loginPort");

accountPort.style.display = "none";
todoListport.style.display = "none";
friendsPort.style.display = "none";
settingsPort.style.display = "none";

function init() {
    document.getElementById("logoLarge").style.opacity = "1";
    setTimeout( function () {
        if(localStorage.testLogStateOne) {
            todoListport.style.display = "block";
        } else {
            accountPort.style.display = "block";
        }
    }, 2000)
    setTimeout( function () {
        splashPort.style.opacity = "0";
    }, 2500)
    setTimeout( function () {
        splashPort.style.display = "none";
    },3000)
}

function shouLoginPort() {
    createAccountPort.style.opacity = "0";
    loginPort.style.display = "block"
    setTimeout( function () {
        createAccountPort.style.display = "none"
    }, 500)
    setTimeout( function () {
        loginPort.style.opacity = "1";
    }, 1000)
}
function shouCrtPort() {
    loginPort.style.opacity = "0";
    setTimeout( function () {
        createAccountPort.style.display = "block"
        loginPort.style.display = "none"
    }, 500)
    setTimeout( function () {
        createAccountPort.style.opacity = "1";
    }, 1000)
}

function checkFormContentRegist() {
    var attMailV = document.getElementById("attMail").value;
    var attNameV = document.getElementById("attName").value;
    var attPassV = document.getElementById("attPass").value;
    var attPassCheckV = document.getElementById("attPassCheck").value;
    console.log(attMailV.length);
    console.log(attNameV.length);
    console.log(attPassV.length);
    console.log(attPassCheckV.length);
    if( attMailV.length != 0 && attNameV.length != 0 && attPassV.length != 0 && attPassCheckV.length != 0 ) {
        if( attPassV == attPassCheckV ) {
            document.getElementById("registSubmitBtn").disabled = false;
        } else {
            document.getElementById("registSubmitBtn").disabled = true;
        }
    } else {
        document.getElementById("registSubmitBtn").disabled = true;
    }
}

function checkFormContentLogin() {
    var lgAttEmV = document.getElementById("lgAttEm").value;
    var lgAttPsw = document.getElementById("lgAttPsw").value;
    var attPassCheckV = document.getElementById("attPassCheck").value;

    if( lgAttEm.length != 0 && lgAttPsw.length != 0 ) {
        document.getElementById("loginSubmitBtn").disabled = false;
    } else {
        document.getElementById("loginSubmitBtn").disabled = true;
    }
}

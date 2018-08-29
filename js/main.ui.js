var splashPort = document.getElementById("splashPort");
var accountPort = document.getElementById("accountPort");
var todoListport = document.getElementById("todoListport");

var createAccountPort = document.getElementById("createAccountPort");
var loginPort = document.getElementById("loginPort");

var listBottomMenuBtnSelected = document.getElementById("listBottomMenuBtnSelected");
var listBottomMenuBtnNotSelected = document.getElementById("listBottomMenuBtnNotSelected");
var friendsBottomMenuBtnSelected = document.getElementById("friendsBottomMenuBtnSelected");
var friendsBottomMenuBtnNotSelected = document.getElementById("friendsBottomMenuBtnNotSelected");
var activityBottomMenuBtnSelected = document.getElementById("activityBottomMenuBtnSelected");
var activityBottomMenuBtnNotSelected = document.getElementById("activityBottomMenuBtnNotSelected");

accountPort.style.display = "none";
todoListport.style.display = "none";

var listport = document.getElementById("listport");
var friendsport = document.getElementById("friendsport");
var activityport = document.getElementById("activityport");

function init() {
    document.getElementById("logoLarge").style.opacity = "1";
    document.getElementById("allListPort").style.height = (window.innerHeight - 70 - 74) + "px";
    document.getElementById("noListsMade").style.height = (window.innerHeight - 70 - 199) + "px";
    setTimeout( function () {
        if(localStorage.testLogStateOne) {
            if( localStorage.testLogStateOne == "loggedIn" ) {
                todoListport.style.display = "block";
            } else {
                todoListport.style.display = "none";
            }
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

//third party modal execScript
// Get the modal
var modal = document.getElementById('newListTypeSelect');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
function newList() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function selectWindow(mode) {
    if( mode == "list" ) {
        listport.style.display = "block";
        friendsport.style.display = "none";
        activityport.style.display = "none";

        listBottomMenuBtnSelected.style.display = "inline-block";
        listBottomMenuBtnNotSelected.style.display = "none";
        friendsBottomMenuBtnSelected.style.display = "none";
        friendsBottomMenuBtnNotSelected.style.display = "inline-block";
        activityBottomMenuBtnSelected.style.display = "none";
        activityBottomMenuBtnNotSelected.style.display = "inline-block";
    } else if ( mode == "friends" ) {
        listport.style.display = "none";
        friendsport.style.display = "block";
        activityport.style.display = "none";

        listBottomMenuBtnSelected.style.display = "none";
        listBottomMenuBtnNotSelected.style.display = "inline-block";
        friendsBottomMenuBtnSelected.style.display = "inline-block";
        friendsBottomMenuBtnNotSelected.style.display = "none";
        activityBottomMenuBtnSelected.style.display = "none";
        activityBottomMenuBtnNotSelected.style.display = "inline-block";
    } else if ( mode == "activity" ) {
        listport.style.display = "none";
        friendsport.style.display = "none";
        activityport.style.display = "block";

        listBottomMenuBtnSelected.style.display = "none";
        listBottomMenuBtnNotSelected.style.display = "inline-block";
        friendsBottomMenuBtnSelected.style.display = "none";
        friendsBottomMenuBtnNotSelected.style.display = "inline-block";
        activityBottomMenuBtnSelected.style.display = "inline-block";
        activityBottomMenuBtnNotSelected.style.display = "none";
    }
}

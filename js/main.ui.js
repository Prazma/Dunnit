var splashPort = document.getElementById("splashPort");
var accountPort = document.getElementById("accountPort");
var todoListport = document.getElementById("todoListport");

var assignDesArray = [];

var newTDcontentCreator = document.getElementById("newTDcontentCreator");

var createSubmittionTDlist = document.getElementById("createSubmittionTDlist");

var registSubmitBtn = document.getElementById("registSubmitBtn");

var addedUsersList = document.getElementById("addedUsersList");

var friendSearchAndAddModal = document.getElementById("friendSearchAndAddModal");

var newListTypeSelect = document.getElementById("newListTypeSelect");

var createAccountPort = document.getElementById("createAccountPort");
var loginPort = document.getElementById("loginPort");

var listBottomMenuBtnSelected = document.getElementById("listBottomMenuBtnSelected");
var listBottomMenuBtnNotSelected = document.getElementById("listBottomMenuBtnNotSelected");
var friendsBottomMenuBtnSelected = document.getElementById("friendsBottomMenuBtnSelected");
var friendsBottomMenuBtnNotSelected = document.getElementById("friendsBottomMenuBtnNotSelected");
var activityBottomMenuBtnSelected = document.getElementById("activityBottomMenuBtnSelected");
var activityBottomMenuBtnNotSelected = document.getElementById("activityBottomMenuBtnNotSelected");

var editButtonContent = '<img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDUyOC44OTkgNTI4Ljg5OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTI4Ljg5OSA1MjguODk5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTMyOC44ODMsODkuMTI1bDEwNy41OSwxMDcuNTg5bC0yNzIuMzQsMjcyLjM0TDU2LjYwNCwzNjEuNDY1TDMyOC44ODMsODkuMTI1eiBNNTE4LjExMyw2My4xNzdsLTQ3Ljk4MS00Ny45ODEgICBjLTE4LjU0My0xOC41NDMtNDguNjUzLTE4LjU0My02Ny4yNTksMGwtNDUuOTYxLDQ1Ljk2MWwxMDcuNTksMTA3LjU5bDUzLjYxMS01My42MTEgICBDNTMyLjQ5NSwxMDAuNzUzLDUzMi40OTUsNzcuNTU5LDUxOC4xMTMsNjMuMTc3eiBNMC4zLDUxMi42OWMtMS45NTgsOC44MTIsNS45OTgsMTYuNzA4LDE0LjgxMSwxNC41NjVsMTE5Ljg5MS0yOS4wNjkgICBMMjcuNDczLDM5MC41OTdMMC4zLDUxMi42OXoiIGZpbGw9IiM5MDkwOTAiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />';
var viewButtonContent = '<img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ4OC44NSA0ODguODUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ4OC44NSA0ODguODU7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij4KPGc+Cgk8cGF0aCBkPSJNMjQ0LjQyNSw5OC43MjVjLTkzLjQsMC0xNzguMSw1MS4xLTI0MC42LDEzNC4xYy01LjEsNi44LTUuMSwxNi4zLDAsMjMuMWM2Mi41LDgzLjEsMTQ3LjIsMTM0LjIsMjQwLjYsMTM0LjIgICBzMTc4LjEtNTEuMSwyNDAuNi0xMzQuMWM1LjEtNi44LDUuMS0xNi4zLDAtMjMuMUM0MjIuNTI1LDE0OS44MjUsMzM3LjgyNSw5OC43MjUsMjQ0LjQyNSw5OC43MjV6IE0yNTEuMTI1LDM0Ny4wMjUgICBjLTYyLDMuOS0xMTMuMi00Ny4yLTEwOS4zLTEwOS4zYzMuMi01MS4yLDQ0LjctOTIuNyw5NS45LTk1LjljNjItMy45LDExMy4yLDQ3LjIsMTA5LjMsMTA5LjMgICBDMzQzLjcyNSwzMDIuMjI1LDMwMi4yMjUsMzQzLjcyNSwyNTEuMTI1LDM0Ny4wMjV6IE0yNDguMDI1LDI5OS42MjVjLTMzLjQsMi4xLTYxLTI1LjQtNTguOC01OC44YzEuNy0yNy42LDI0LjEtNDkuOSw1MS43LTUxLjcgICBjMzMuNC0yLjEsNjEsMjUuNCw1OC44LDU4LjhDMjk3LjkyNSwyNzUuNjI1LDI3NS41MjUsMjk3LjkyNSwyNDguMDI1LDI5OS42MjV6IiBmaWxsPSIjOTA5MDkwIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />';

var editStateWindow = '<div class="userAddport" id="userRestSelectPort" style="display: block;"><div class="colKing">このユーザーとの共有範囲を選択</div><button type="button" class="colBtn upper" onclick="changeRest('+"join"+')"><span class="colHeading">参加者</span><br><span class="colDescription">このユーザーはリストに参加することができます。</span></button><button type="button" class="colBtn under" onclick="changeRest('+"view"+')"><span class="colHeading">閲覧者</span><br><spam class="colDescription">このユーザーはToDoリストでのアクティビティー、進捗状況をみることができます。</spam></button></div>';

var todoListCreatePort = document.getElementById("todoListCreatePort");

accountPort.style.display = "none";
todoListport.style.display = "none";

var listport = document.getElementById("listport");
var accountManagementPort = document.getElementById("accountManagementPort");
var activityport = document.getElementById("activityport");

function init() {
    document.getElementById("logoLarge").style.opacity = "1";
    document.getElementById("allListPort").style.height = (window.innerHeight - 70 - 89) + "px";
    document.getElementById("noListsMade").style.height = (window.innerHeight - 70 - 214) + "px";
    document.getElementById("tdListsWrapper").style.height = (window.innerHeight - 70 - 89) + "px";
    document.getElementById("tdContentWrap").style.height = (window.innerHeight - 70 - 89 - 85 - 26) + "px";
    document.getElementById("todoListCreatePort").style.height = (window.innerHeight - 54) + "px";
    document.getElementById("listContent").style.height = (window.innerHeight - 54) + "px";
    document.getElementById("createProgressWrapper").style.height = (window.innerHeight - 61 - 54 -30) + "px";
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
var spanTwo = document.getElementsByClassName("close")[1];
var spanThree = document.getElementsByClassName("close")[2];

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
//end third party modal execScript

function selectWindow(mode) {
    if( mode == "list" ) {
        listport.style.display = "block";
        accountPort.style.display = "none";
        activityport.style.display = "none";

        listBottomMenuBtnSelected.style.display = "inline-block";
        listBottomMenuBtnNotSelected.style.display = "none";
        friendsBottomMenuBtnSelected.style.display = "none";
        friendsBottomMenuBtnNotSelected.style.display = "inline-block";
        activityBottomMenuBtnSelected.style.display = "none";
        activityBottomMenuBtnNotSelected.style.display = "inline-block";
    } else if ( mode == "friends" ) {
        listport.style.display = "none";
        accountManagementPort.style.display = "block";
        activityport.style.display = "none";

        listBottomMenuBtnSelected.style.display = "none";
        listBottomMenuBtnNotSelected.style.display = "inline-block";
        friendsBottomMenuBtnSelected.style.display = "inline-block";
        friendsBottomMenuBtnNotSelected.style.display = "none";
        activityBottomMenuBtnSelected.style.display = "none";
        activityBottomMenuBtnNotSelected.style.display = "inline-block";
    } else if ( mode == "activity" ) {
        listport.style.display = "none";
        accountManagementPort.style.display = "none";
        activityport.style.display = "block";

        listBottomMenuBtnSelected.style.display = "none";
        listBottomMenuBtnNotSelected.style.display = "inline-block";
        friendsBottomMenuBtnSelected.style.display = "none";
        friendsBottomMenuBtnNotSelected.style.display = "inline-block";
        activityBottomMenuBtnSelected.style.display = "inline-block";
        activityBottomMenuBtnNotSelected.style.display = "none";
    }
}

function createToDoList() {
    modal.style.display = "none";
    todoListCreatePort.style.display = "block";
}

var addFriendsSmallModal = document.getElementById("addFriendsSmallModal");
function openSmallFriendAddTool() {
    addFriendsSmallModal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == addFriendsSmallModal) {
        addFriendsSmallModal.style.display = "none";
    }
}

spanTwo.onclick = function () {
    addFriendsSmallModal.style.display = "none";
}

spanThree.onclick = function () {
    newTDcontentCreator.style.display = "none";
}

function cancelToDoListCreation() {
    todoListCreatePort.style.display = "none";
}

function shouFSAAM() {
    friendSearchAndAddModal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == friendSearchAndAddModal) {
        friendSearchAndAddModal.style.display = "none";
    }
}

window.onclick = function(event) {
    if (event.target == newTDcontentCreator) {
        newTDcontentCreator.style.display = "none";
    }
}

function openRestSelect() {
    document.getElementById("userRestSelectPort").style.display = "block";
}
function changeRest(mode) {
    if( mode == "join") {
        document.getElementById("thisUserRest").innerHTML = "参加者";
        document.getElementById("userRestSelectPort").style.display = "none";
    } else if( mode == "view" ) {
        document.getElementById("thisUserRest").innerHTML = "閲覧者";
        document.getElementById("userRestSelectPort").style.display = "none";
    }
}
function updateSharedFriendsList() {
    if( sharedAccountsPreDatabaseToDoList.length != 0 ) {
        document.getElementById("noSharedUserElement").style.display = "none";
        addedUsersList.style.display = "block";

        addedUsersList.innerHTML = "";
        for( i=0; i<sharedAccountsPreDatabaseToDoList.length; i++ ) {
            if( sharedAccountsPreDatabaseToDoList[i].split("!")[1] == "参加者" ) {
                addedUsersList.innerHTML += '<div class="userManagementWrapper"><div class="userManagementWrapperChild"><span class="sharedUserName">' + nmeCont[emaCont.indexOf(sharedAccountsPreDatabaseToDoList[i].split("!")[0])] + '</span><br><span class="sharedUserClass">'+ sharedAccountsPreDatabaseToDoList[i].split("!")[1] +'</span></div><button class="editBtn">'+editButtonContent+'</button><br><button class="btnDelete" onclick="removeUserForShareList('+i+')">削除</button></div>';
            } else {
                addedUsersList.innerHTML += '<div class="userManagementWrapper"><div class="userManagementWrapperChild"><span class="sharedUserName">' + nmeCont[emaCont.indexOf(sharedAccountsPreDatabaseToDoList[i].split("!")[0])] + '</span><br><span class="sharedUserClass">'+ sharedAccountsPreDatabaseToDoList[i].split("!")[1] +'</span></div><button class="editBtn">'+viewButtonContent+'</button><br><button class="btnDelete" onclick="removeUserForShareList('+i+')">削除</button></div>';
            }
        }
    } else {
        document.getElementById("noSharedUserElement").style.display = "block";
        addedUsersList.innerHTML = "";
        addedUsersList.style.display = "none";
    }
}
function removeUserForShareList(number) {
    sharedAccountsEmailOnly.splice(number,1);
    sharedAccountsPreDatabaseToDoList.splice(number,1);
    updateSharedFriendsList()
}
function createTDlistAvialable(ele) {
    if( ele.value.length != 0 ) {
        createSubmittionTDlist.disabled = false;
    } else {
        createSubmittionTDlist.disabled = true;
    }
}
var closeBtnContent = '<img height="20px" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ljk3MSA0Ny45NzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ3Ljk3MSA0Ny45NzE7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij4KPGc+Cgk8cGF0aCBkPSJNMjguMjI4LDIzLjk4Nkw0Ny4wOTIsNS4xMjJjMS4xNzItMS4xNzEsMS4xNzItMy4wNzEsMC00LjI0MmMtMS4xNzItMS4xNzItMy4wNy0xLjE3Mi00LjI0MiwwTDIzLjk4NiwxOS43NDRMNS4xMjEsMC44OCAgIGMtMS4xNzItMS4xNzItMy4wNy0xLjE3Mi00LjI0MiwwYy0xLjE3MiwxLjE3MS0xLjE3MiwzLjA3MSwwLDQuMjQybDE4Ljg2NSwxOC44NjRMMC44NzksNDIuODVjLTEuMTcyLDEuMTcxLTEuMTcyLDMuMDcxLDAsNC4yNDIgICBDMS40NjUsNDcuNjc3LDIuMjMzLDQ3Ljk3LDMsNDcuOTdzMS41MzUtMC4yOTMsMi4xMjEtMC44NzlsMTguODY1LTE4Ljg2NEw0Mi44NSw0Ny4wOTFjMC41ODYsMC41ODYsMS4zNTQsMC44NzksMi4xMjEsMC44NzkgICBzMS41MzUtMC4yOTMsMi4xMjEtMC44NzljMS4xNzItMS4xNzEsMS4xNzItMy4wNzEsMC00LjI0MkwyOC4yMjgsMjMuOTg2eiIgZmlsbD0iI0ZGRkZGRiIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" />';
function openToDoList(idoi) {
    document.getElementById("listContent").style.display = "block";
    document.getElementById("tdTitle").innerHTML = idoi + '<button class="backBtn" onclick="closeTdShouPort()">'+ closeBtnContent+'</button>';
    updateTDlistElements();
}
function closeTdShouPort() {
    document.getElementById("listContent").style.display = "none";
}
var checkDataSub = [];
var checkData = [];
function openNewTDcontent() {
    document.getElementById("userListWrapper").innerHTML = "";
    document.getElementById("newTDcontentCreator").style.display = "block";
    for(i=0;i<todoListPeopleDatasets.length;i++){
        if( todoListPeopleDatasets[i].split("%")[0] == document.getElementById("tdTitle").innerHTML.split("<")[0] ){
            for(o=0;o<todoListPeopleDatasets[i].split("%")[1].split("#").length;o++){
                if(todoListPeopleDatasets[i].split("%")[1].split("#")[o].split("!")[1]=="参加者"){
                    document.getElementById("userListWrapper").innerHTML += "<div class='takepee'><button class='checkBtn' onclick='checkUsr("+'"'+todoListPeopleDatasets[i].split("%")[1].split("#")[o].split("!")[0]+'"'+",this)'></button><div class='userLabel'>" + nmeCont[emaCont.indexOf(todoListPeopleDatasets[i].split("%")[1].split("#")[o].split("!")[0])] + "</div></div>";
                    checkDataSub.push(todoListPeopleDatasets[i].split("%")[1].split("#")[o].split("!")[0]);
                    checkData.push("false");
                }
            }
        }
    }
}
function closeCreatorWizardTD() {
    document.getElementById("newTDcontentCreator").style.display = "none";
}
function resetTDcreateport() {
    document.getElementById("listNameInputElement").value = "";
    document.getElementById("TDlistDescription").value = "";
    document.getElementById("createSubmittionTDlist").disabled = true;
    sharedAccountsPreDatabaseToDoList = [];
    sharedAccountsEmailOnly = [];
    updateSharedFriendsList();
}
function checkIfThisFilled(ele) {
    if( ele.value.length != 0 ) {
        document.getElementById("createToDoElementSubmitter").disabled = false;
    } else {
        document.getElementById("createToDoElementSubmitter").disabled = true;
    }
}
function checkUsr(ema,ele) {
    if( checkData[checkDataSub.indexOf(ema)] == "false" ) {
        ele.style.background = "#9cc9ff";
        checkData[checkDataSub.indexOf(ema)] = "true";
    } else {
        ele.style.background = "#fff";
        checkData[checkDataSub.indexOf(ema)] = "false";
    }
}
function updateTDlistElements() {
    if( tdListElementTitle.length != 0 ) {
        document.getElementById("noTDlistContent").style.display = "block";
        document.getElementById("tdContentWrap").innerHTML = "";
        var selectedThingTitle = document.getElementById("tdTitle").innerHTML.split("<")[0];
        for( i=0;i<tdListElementTitle.length;i++) {
            if( tdListElementRealTitle[i] == selectedThingTitle ) {
                document.getElementById("tdContentWrap").style.display = "block";
                document.getElementById("noTDlistContent").style.display = "none";
                document.getElementById("tdContentWrap").innerHTML += '<div class="taskColDiv"><button class="checkBtn specialII" onclick="checkThisForShou(this)"></button><div class="taskColTopHeading"><span>'+tdListElementTitle[i]+'</span></div><div class="completeBoard"><span>達成度（<span id="forShouPerc">0</span>％）</span><div class="progressWrapper"><div class="progressContent" id="shouPC"></div></div><div style="display: none;" id="successSpan" class="completeWrap"><span>達成しました</span></div></div><button class="btn memberBtn">メンバー</button></div>';
            }
        }
    } else {
        document.getElementById("noTDlistContent").style.display = "block";
    }
}
function checkThisForShou(ele) {
    ele.style.background = "#dde3ea";
    document.getElementById("forShouPerc").innerHTML = "50";
    document.getElementById("shouPC").style.width = "50%";
    document.getElementById("noActivityWrapper").style.display = "none";
    document.getElementById("activityList").style.display = "block";
    document.getElementById("successSpan").style.display = "block";
}

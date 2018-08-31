var mifriends = [];

var todoListPeopleDatasets = [];

var addShareUserBtn = document.getElementById("addShareUserBtn");

var attMail = document.getElementById("attMail");
var attName = document.getElementById("attName");
var attPass = document.getElementById("attPass");

var allTDlistArray = [];

//TDlist data arrays below
var tdListElementTitle = [];
var tdListElementMembers = [];
var tdListElementDesc = [];
var tdListElementRealTitle = [];

var addUserTip = document.getElementById("addUserTip");

var friendAddEmail = document.getElementById("friendAddEmail");

var addFriendBtn = document.getElementById("addFriendBtn");

var accountManagementPort = document.getElementById("accountManagementPort");

var friendsList = document.getElementById("friendsList");

var lgAttEm = document.getElementById("lgAttEm");
var lgAttPsw = document.getElementById("lgAttPsw");

var mailUseOrNot = document.getElementById("mailUseOrNot");

var noFriendsMadeForNormal = document.getElementById("noFriendsMadeForNormal");

var settingsImgContent = '<img height="20px" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMS4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI2OC43NjUgMjY4Ljc2NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjY4Ljc2NSAyNjguNzY1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCI+CjxnIGlkPSJTZXR0aW5ncyI+Cgk8Zz4KCQk8cGF0aCBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7IiBkPSJNMjY3LjkyLDExOS40NjFjLTAuNDI1LTMuNzc4LTQuODMtNi42MTctOC42MzktNi42MTcgICAgYy0xMi4zMTUsMC0yMy4yNDMtNy4yMzEtMjcuODI2LTE4LjQxNGMtNC42ODItMTEuNDU0LTEuNjYzLTI0LjgxMiw3LjUxNS0zMy4yMzFjMi44ODktMi42NDEsMy4yNC03LjA2MiwwLjgxNy0xMC4xMzMgICAgYy02LjMwMy04LjAwNC0xMy40NjctMTUuMjM0LTIxLjI4OS0yMS41Yy0zLjA2My0yLjQ1OC03LjU1Ny0yLjExNi0xMC4yMTMsMC44MjVjLTguMDEsOC44NzEtMjIuMzk4LDEyLjE2OC0zMy41MTYsNy41MjkgICAgYy0xMS41Ny00Ljg2Ny0xOC44NjYtMTYuNTkxLTE4LjE1Mi0yOS4xNzZjMC4yMzUtMy45NTMtMi42NTQtNy4zOS02LjU5NS03Ljg0OWMtMTAuMDM4LTEuMTYxLTIwLjE2NC0xLjE5Ny0zMC4yMzItMC4wOCAgICBjLTMuODk2LDAuNDMtNi43ODUsMy43ODYtNi42NTQsNy42ODljMC40MzgsMTIuNDYxLTYuOTQ2LDIzLjk4LTE4LjQwMSwyOC42NzJjLTEwLjk4NSw0LjQ4Ny0yNS4yNzIsMS4yMTgtMzMuMjY2LTcuNTc0ICAgIGMtMi42NDItMi44OTYtNy4wNjMtMy4yNTItMTAuMTQxLTAuODUzYy04LjA1NCw2LjMxOS0xNS4zNzksMTMuNTU1LTIxLjc0LDIxLjQ5M2MtMi40ODEsMy4wODYtMi4xMTYsNy41NTksMC44MDIsMTAuMjE0ICAgIGM5LjM1Myw4LjQ3LDEyLjM3MywyMS45NDQsNy41MTQsMzMuNTNjLTQuNjM5LDExLjA0Ni0xNi4xMDksMTguMTY1LTI5LjI0LDE4LjE2NWMtNC4yNjEtMC4xMzctNy4yOTYsMi43MjMtNy43NjIsNi41OTcgICAgYy0xLjE4MiwxMC4wOTYtMS4xOTYsMjAuMzgzLTAuMDU4LDMwLjU2MWMwLjQyMiwzLjc5NCw0Ljk2MSw2LjYwOCw4LjgxMiw2LjYwOGMxMS43MDItMC4yOTksMjIuOTM3LDYuOTQ2LDI3LjY1LDE4LjQxNSAgICBjNC42OTgsMTEuNDU0LDEuNjc4LDI0LjgwNC03LjUxNCwzMy4yM2MtMi44NzUsMi42NDEtMy4yNCw3LjA1NS0wLjgxNywxMC4xMjZjNi4yNDQsNy45NTMsMTMuNDA5LDE1LjE5LDIxLjI1OSwyMS41MDggICAgYzMuMDc5LDIuNDgxLDcuNTU5LDIuMTMxLDEwLjIyOC0wLjgxYzguMDQtOC44OTMsMjIuNDI3LTEyLjE4NCwzMy41MDEtNy41MzZjMTEuNTk5LDQuODUyLDE4Ljg5NSwxNi41NzUsMTguMTgxLDI5LjE2NyAgICBjLTAuMjMzLDMuOTU1LDIuNjcsNy4zOTgsNi41OTUsNy44NWM1LjEzNSwwLjU5OSwxMC4zMDEsMC44OTgsMTUuNDgxLDAuODk4YzQuOTE3LDAsOS44MzUtMC4yNywxNC43NTItMC44MTcgICAgYzMuODk3LTAuNDMsNi43ODQtMy43ODYsNi42NTMtNy42OTZjLTAuNDUxLTEyLjQ1NCw2Ljk0Ni0yMy45NzMsMTguMzg2LTI4LjY1N2MxMS4wNTktNC41MTcsMjUuMjg2LTEuMjExLDMzLjI4MSw3LjU3MiAgICBjMi42NTcsMi44OSw3LjA0NywzLjIzOSwxMC4xNDIsMC44NDhjOC4wMzktNi4zMDQsMTUuMzQ5LTEzLjUzNCwyMS43NC0yMS40OTRjMi40OC0zLjA3OSwyLjEzLTcuNTU5LTAuODAzLTEwLjIxMyAgICBjLTkuMzUzLTguNDctMTIuMzg4LTIxLjk0Ni03LjUyOS0zMy41MjRjNC41NjgtMTAuODk5LDE1LjYxMi0xOC4yMTcsMjcuNDkxLTE4LjIxN2wxLjY2MiwwLjA0MyAgICBjMy44NTMsMC4zMTMsNy4zOTgtMi42NTUsNy44NjUtNi41ODhDMjY5LjA0NCwxMzkuOTE3LDI2OS4wNTgsMTI5LjYzOSwyNjcuOTIsMTE5LjQ2MXogTTEzNC41OTUsMTc5LjQ5MSAgICBjLTI0LjcxOCwwLTQ0LjgyNC0yMC4xMDYtNDQuODI0LTQ0LjgyNGMwLTI0LjcxNywyMC4xMDYtNDQuODI0LDQ0LjgyNC00NC44MjRjMjQuNzE3LDAsNDQuODIzLDIwLjEwNyw0NC44MjMsNDQuODI0ICAgIEMxNzkuNDE4LDE1OS4zODUsMTU5LjMxMiwxNzkuNDkxLDEzNC41OTUsMTc5LjQ5MXoiIGZpbGw9IiM5MDkwOTAiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />';

var sharedAccountsPreDatabaseToDoList = [];
var sharedAccountsEmailOnly = [];

function addFriendToList() {
    if( addShareUserBtn.value == "共有するユーザーを追加" ) {
        sharedAccountsPreDatabaseToDoList.push(document.getElementById("shareSetEmail").value + "!" + document.getElementById("thisUserRest").innerHTML);
        sharedAccountsEmailOnly.push(document.getElementById("shareSetEmail").value);
        document.getElementById("addFriendsSmallModal").style.display = "none";
        document.getElementById("shareSetEmail").value = "";
        checkEmailState(document.getElementById("shareSetEmail"));
        updateSharedFriendsList();
    } else {

    }
}


var db = new Firebase("https://pcboy-8cbb8.firebaseio.com/");
var emaCont = [];
var pswCont = [];
var nmeCont = [];

mailUseOrNot.style.display = "none";
document.getElementById("loginError").style.display = "none";

function registAcc() {
    var usrAtt = attMail.value;
    var pswAtt = attPass.value;
    var nmeAtt = attName.value;
    if( emaCont.indexOf(usrAtt) == -1 ) {
        db.push({type:"accountData",ema:usrAtt,psw:pswAtt,nme:nmeAtt});
        accountPort.style.display = "none";
        todoListport.style.display = "block";
    } else {
        mailUseOrNot.style.display = "block";
    }
}

function loginUsr() {
    var usrAtt = lgAttEm.value;
    var pswAtt = lgAttPsw.value;
    if( emaCont.indexOf(usrAtt) != -1 && pswCont.indexOf(pswAtt) != -1 ) {
        localStorage.loggedUserName = usrAtt;
        localStorage.testLogStateOne = "loggedIn";
        accountPort.style.display = "none";
        todoListport.style.display = "block";

    } else {
        document.getElementById("loginError").style.display = "block";
    }
}

var startListening = function() {
	db.on('child_added', function(snapshot) {
        var vax = snapshot.val();
        if(vax.type == "accountData") {
            emaCont.push(vax.ema);
            pswCont.push(vax.psw);
            nmeCont.push(vax.nme);
        } else if (vax.type == "tdlist") {
            if( vax.owner == localStorage.loggedUserName ) {
                document.getElementById("noListsMade").style.display = "none";
                document.getElementById("tdListsWrapper").innerHTML += "<div class='wrapKing'><div class='listColBtn'><div class='listButtonContentWrapperOne'>"+vax.name+"</div><button class='openBtn' onclick='openToDoList("+'"'+vax.name+'"'+")'>開く</button><button class='settingsBtn' onclick='openSettings("+'"'+vax.name+'"'+")'>"+settingsImgContent+"</button></div><br><div class='ew'>あなたの達成度（％）</span><br><div class='progressWrapper'><div class='progressContent'></div></div><span class='ew'>全員の達成度（％）</span><br><div class='progressWrapper'><div class='progressContent'></div></div></div>";
                todoListPeopleDatasets.push(vax.name+"%"+vax.members);
                allTDlistArray.push();
            }
        } else if (vax.type == "tdContentData") {
            if ( vax.accountTarget == localStorage.loggedUserName ) {
                tdListElementTitle.push(vax.taskTitle);
                tdListElementMembers.push(vax.members);
                tdListElementDesc.push(vax.taskDescription);
                tdListElementRealTitle.push(vax.listID);
                updateTDlistElements();
            }
        }
	});
}
startListening();

function checkEmailState(ele) {
    if( ele.value.length != 0 && emaCont.indexOf(ele.value) != -1 && ele.value != localStorage.loggedUserName && sharedAccountsEmailOnly.indexOf(ele.value) == -1 ) {
        addUserTip.innerHTML = "<strong>" + nmeCont[emaCont.indexOf(ele.value)] + "</strong>さんのアカウントで間違えないですか？";
        addShareUserBtn.disabled = false;
        addShareUserBtn.value = "共有するユーザーを追加";
    } else if( ele.value.length == 0 ) {
        addUserTip.innerHTML = "ToDoリストを共有するユーザーのメールアドレスを入力してください。";
        addShareUserBtn.value = "共有するユーザーを追加";
        addShareUserBtn.disabled = true;
    } else if( emaCont.indexOf(ele.value) == -1 ) {
        addUserTip.innerHTML = "このメールアドレスはまだ登録されていません。";
        addShareUserBtn.disabled = false;
        addShareUserBtn.value = "メールで招待する"
    } else if( ele.value == localStorage.loggedUserName ) {
        addUserTip.innerHTML = "自分のアカウントを追加することはできません。";
        addShareUserBtn.value = "共有するユーザーを追加";
        addShareUserBtn.disabled = true;
    } else if( sharedAccountsEmailOnly.indexOf(ele.value) != -1 ) {
        addUserTip.innerHTML = "このアカウントは追加済みです。";
        addShareUserBtn.value = "共有するユーザーを追加";
        addShareUserBtn.disabled = true;
    }
}

function addFriendServerPlease() {
    if( addFriendBtn.innerHTML == "友達を追加する" ) {
        db.push({type:"friendConnectionData",target:localStorage.loggedUserName,who:friendAddEmail.value});
        friendSearchAndAddModal.style.display = "none";
    }
}

function createNewTDsubmit() {
    var listName = document.getElementById("listNameInputElement").value;
    var listOwner = localStorage.loggedUserName;
    var memberString = sharedAccountsPreDatabaseToDoList.join("#");
    var listId = localStorage.loggedUserName + "$" + listName;
    var listDescription = document.getElementById("TDlistDescription").value;
    db.push({type:"tdlist",name:listName,members:memberString,listId:listId,listDescription:listDescription,owner:listOwner});
    var nCont = listOwner + "がリスト「"+listName+"」を"+sharedAccountsEmailOnly.join("、")+"に共有しました。";
    db.push({type:"notification",content:nCont})
    todoListCreatePort.style.display = "none";
    resetTDcreateport();
}
function createNewElementToTD() {
    var listID = document.getElementById("tdTitle").innerHTML.split("<")[0];
    var title = document.getElementById("whatToDo").value;
    var description = document.getElementById("newTDdesc").value;
    var members = "";
    for(i=0;i<checkDataSub.length;i++) {
        var members = members+checkDataSub[i]+"*"+checkData[i];
    }
    closeCreatorWizardTD();
    db.push({type:"tdContentData",taskTitle:title,taskDescription:newTDdesc,members:members,accountTarget:localStorage.loggedUserName,listID:listID});
}

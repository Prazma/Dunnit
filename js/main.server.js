var mifriends = [];

var addShareUserBtn = document.getElementById("addShareUserBtn");

var attMail = document.getElementById("attMail");
var attName = document.getElementById("attName");
var attPass = document.getElementById("attPass");

var addUserTip = document.getElementById("addUserTip");

var friendAddEmail = document.getElementById("friendAddEmail");

var addFriendBtn = document.getElementById("addFriendBtn");

var accountManagementPort = document.getElementById("accountManagementPort");

var friendsList = document.getElementById("friendsList");

var lgAttEm = document.getElementById("lgAttEm");
var lgAttPsw = document.getElementById("lgAttPsw");

var mailUseOrNot = document.getElementById("mailUseOrNot");

var noFriendsMadeForNormal = document.getElementById("noFriendsMadeForNormal");

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
                document.getElementById("tdListsWrapper").innerHTML += "<div class='listColBtn'><div class='listButtonContentWrapperOne'>"+vax.name+"</div><button class='openBtn' onclick='openToDoList("+")'>開く</button></div>";
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
    todoListCreatePort.style.display = "none";
}

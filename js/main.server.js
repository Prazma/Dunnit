var attMail = document.getElementById("attMail");
var attName = document.getElementById("attName");
var attPass = document.getElementById("attPass");

var accountPort = document.getElementById("accountPort");

var lgAttEm = document.getElementById("lgAttEm");
var lgAttPsw = document.getElementById("lgAttPsw");

var mailUseOrNot = document.getElementById("mailUseOrNot");

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
        accountPort.style.opacity = "0";
        setTimeout( function () {
            accountPort.style.display = "none";
        }, 500)
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
        accountPort.style.opacity = "0";
        setTimeout( function () {
            accountPort.style.display = "none";
        }, 500)
    } else {
        document.getElementById("loginError").style.display = "block";
    }
}

var startListening = function() {
	db.on('child_added', function(snapshot) {
        var vax = snapshot.val();
        if(vax.type = "aci") {
            emaCont.push(vax.ema);
            pswCont.push(vax.psw);
            nmeCont.push(vax.nme);
        } else if (vax.type="listData") {

        }
	});
}
startListening();

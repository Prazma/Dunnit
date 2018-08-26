var attMail = document.getElementById("attMail");
var attName = document.getElementById("attName");
var attPass = document.getElementById("attPass");

var mailUseOrNot = document.getElementById("mailUseOrNot");

var db = new Firebase("https://pcboy-8cbb8.firebaseio.com/");
var emaCont = [];
var pswCont = [];

mailUseOrNot.style.display = "none";

function registAcc() {
    var usrAtt = attMail.value;
    var pswAtt = attPass.value;
    if( attMail.indexOf(usrAtt) != -1 ) {
        
    } else {
        mailUseOrNot.style.display = "block";
    }
}

function loginUsr() {

}

var startListening = function() {
	db.on('child_added', function(snapshot) {
        var vax = snapshot.val();
        if(vax.type = "aci") {
            emaCont.push(vax.ema);
            pswCont.push(vax.psw);
        } else if (vax.type="listData") {

        }
	});
}
startListening();

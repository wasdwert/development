/*Snackbar*/
function Snackbar(text, barclass, time, timeclass) {
    var el = document.createElement("div");
    el.className = barclass;
    var y = document.getElementById("snackbar-container");
    el.innerHTML = text;
    y.append(el);
    el.className = timeclass;
    setTimeout(function(){ el.className = el.className.replace(timeclass, "snackbar none"); }, time);
}

/* Tutorial? Modal*/
// Get the modal
var modaltutorial = document.getElementById("m_tutorial");

// Get the button that opens the modal
var btntutorial = document.getElementById("NewGame");

// Get the <span> element that closes the modal
var spantutorial_yes = document.getElementById("Button_Modal_Tutorial_Yes");
var spantutorial_no = document.getElementById("Button_Modal_Tutorial_No");

// When the user clicks on the button, open the modal
btntutorial.onclick = function() {
    modaltutorial.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spantutorial_yes.onclick = function() {
    $(document).ready(function(){
        $('.startscreen').hide();
        $('.game').show();
    }); 
    startup();
    modaltutorial.style.display = "none";
}

spantutorial_no.onclick = function() {
    $(document).ready(function(){
        $('.startscreen').hide();
        $('.game').show();
    }); 
    startup();
    modaltutorial.style.display = "none";
}

/* New Game, Sure? Modal*/
// Get the modal
var modalnewgame = document.getElementById("m_newgame");

// Get the button that opens the modal
var btnnewgame = document.getElementById("NewGame2");

// Get the <span> element that closes the modal
var spannewgame_no = document.getElementById("Button_Modal_NewGame_No");
var spannewgame_yes = document.getElementById("Button_Modal_NewGame_Yes");

// When the user clicks on the button, open the modal
btnnewgame.onclick = function() {
    modalnewgame.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spannewgame_no.onclick = function() {
    modalnewgame.style.display = "none";
}

spannewgame_yes.onclick = function() {
    modalnewgame.style.display = "none";
    localStorage.clear(); //LocalStorage cleared
    modaltutorial.style.display = "block";
}

/* Edit Name Modal*/
// Get the modal
var modalname = document.getElementById("m_name");

// Get the button that opens the modal
var btnname = document.getElementById("EditName");

// Get the <span> element that closes the modal
var spanname_cancel = document.getElementById("Button_Modal_Name_Cancel");
var spanname_change = document.getElementById("Button_Modal_Name_Change");

// When the user clicks on the button, open the modal
btnname.onclick = function() {
    modalname.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanname_cancel.onclick = function() {
    modalname.style.display = "none";
}

spanname_change.onclick = function() {
    ChangeName();
    modalname.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
    if (event.target == modalname) {
        modalname.style.display = "none";
    }
}) 

/* Change Position Modal*/
// Get the modal
var modalchange = document.getElementById("m_position");

// Get the button that opens the modal
var btnchange = document.getElementById("ChangePosition");

// Get the <span> element that closes the modal
var spanchange_cancel = document.getElementById("Button_Modal_Position_Close");
var spanchange_change = document.getElementById("Button_Modal_Position_Change");

// When the user clicks on the button, open the modal
btnchange.onclick = function() {
    if (SearchBonsaiShowing().growing==1) {
        Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Changing position of a growing bonsai isn't possible", "snackbar_attention", 3000, "snackbar_attention show3s");  
    }
    else {
        if (document.getElementById("positionn_place").value==00 || document.getElementById("positionn_place").value==0) {
            Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Choose a position first", "snackbar_attention", 3000, "snackbar_attention show3s"); 
        }
        else {
            if (SearchBonsaiReplacement().growing==1) {
                Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Can not switch with a growing bonsai", "snackbar_attention", 3000, "snackbar_attention show3s"); 
            }
            else {
                document.getElementById("bonsaiold_nr").innerText = "#"+state.bonsai_showing;
                document.getElementById("bonsaiold_name").innerText = SearchBonsaiShowing().name.toLocaleString('en', {minimumFractionDigits: 0});
                document.getElementById("bonsaiold_type").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, SearchBonsaiShowing(), "50", "50");
                document.getElementById("BonsaiOld").style.backgroundImage= fetchbonsaitreequality(SearchBonsaiShowing());
                document.getElementById("bonsaiold_level").innerText = SearchBonsaiShowing().level.toLocaleString('en', {minimumFractionDigits: 0});
                document.getElementById("bonsaiold_cp").innerHTML = SearchBonsaiShowing().foliage+SearchBonsaiShowing().branches+SearchBonsaiShowing().trunk+SearchBonsaiShowing().roots;
                
                document.getElementById("bonsainew_nr").innerText = "#"+document.getElementById("positionn_place").value;
                document.getElementById("bonsainew_name").innerText = SearchBonsaiReplacement().name.toLocaleString('en', {minimumFractionDigits: 0});
                document.getElementById("bonsainew_type").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, SearchBonsaiReplacement(), "50", "50");
                document.getElementById("BonsaiNew").style.backgroundImage= fetchbonsaitreequality(SearchBonsaiReplacement());
                document.getElementById("bonsainew_level").innerText = SearchBonsaiReplacement().level.toLocaleString('en', {minimumFractionDigits: 0});
                document.getElementById("bonsainew_cp").innerHTML = SearchBonsaiReplacement().foliage+SearchBonsaiReplacement().branches+SearchBonsaiReplacement().trunk+SearchBonsaiReplacement().roots;
                
                modalchange.style.display = "block";
            }
        }
    }
}
    
// When the user clicks on <span> (x), close the modal
spanchange_cancel.onclick = function() {
    modalchange.style.display = "none";
}

spanchange_change.onclick = function() {
    ChangePosition();
    modalchange.style.display = "none";
}

/* Contests Modal*/
// Get the modal
var modalcontests = document.getElementById("m_contests");

// Get the button that opens the modal
//var btncontests = document.getElementById("XXX");

// Get the <span> element that closes the modal
var spancontestsenter = document.getElementById("Button_Modal_Contests_Enter");
var spancontestscancel = document.getElementById("Button_Modal_Contests_Cancel");
var spancontestsbonsaia = document.getElementById("Button_Modal_Contests_BonsaiA");
var spancontestsbonsaib = document.getElementById("Button_Modal_Contests_BonsaiB");
var spancontestsbonsaic = document.getElementById("Button_Modal_Contests_BonsaiC");
var spancontestsbonsaid = document.getElementById("Button_Modal_Contests_BonsaiD");
var spancontestsbonsaie = document.getElementById("Button_Modal_Contests_BonsaiE");
var spancontestsbonsaif = document.getElementById("Button_Modal_Contests_BonsaiF");
var spancontestsbonsaig = document.getElementById("Button_Modal_Contests_BonsaiG");
var spancontestsbonsaih = document.getElementById("Button_Modal_Contests_BonsaiH");
var spancontestsbonsaii = document.getElementById("Button_Modal_Contests_BonsaiI");
var spancontestsbonsaij = document.getElementById("Button_Modal_Contests_BonsaiJ");

// When the user clicks on the button, open the modal
//btncontests.onclick = function() {
//    modalcontests.style.display = "block";
//}

// When the user clicks on <span> (x), close the modal
spancontestsenter.onclick = function() {
    if (contests.bonsaichoosen==0) {
        Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Choose a bonsai first!", "snackbar_attention", 3000, "snackbar_attention show3s");
    }
    else if (resources.money<contests.entryprice) {
        Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough money for entry fee", "snackbar_attention", 3000, "snackbar_attention show3s");
    }
    else {
        resources.money -=contests.entryprice;
        document.getElementById("money").innerHTML = resources.money;
        document.getElementById("money_mobile").innerHTML = resources.money;
        document.getElementById("money_mobilexs").innerHTML = resources.money;
        modalcontests.style.display = "none";
        x_contests = 1;
        contests.visible=0;
        document.getElementById("menu_contests").value=x_contests;       
        $('#menu_contests').trigger('change');
        contests_result();
        modalcontests_r.style.display = "block";
        document.getElementById('modal_contests_result_competition').scrollTop =0;
    }
}

spancontestscancel.onclick = function() {
    modalcontests.style.display = "none";
    contests.bonsaichoosen=0;
    contests.bonsaichoosenx=0;
    x_contests = 1;
    contests.visible=0;
    document.getElementById("menu_contests").value=x_contests;       
    $('#menu_contests').trigger('change');
}

spancontestsbonsaia.onclick = function() {
    contests_choosebonsai(contests.z=1);
}
spancontestsbonsaib.onclick = function() {
    contests_choosebonsai(contests.z=2);   
}
spancontestsbonsaic.onclick = function() {
    contests_choosebonsai(contests.z=3);  
}
spancontestsbonsaid.onclick = function() {
    contests_choosebonsai(contests.z=4);   
}
spancontestsbonsaie.onclick = function() {
    contests_choosebonsai(contests.z=5);  
}
spancontestsbonsaif.onclick = function() {
    contests_choosebonsai(contests.z=6);   
}
spancontestsbonsaig.onclick = function() {
    contests_choosebonsai(contests.z=7);   
}
spancontestsbonsaih.onclick = function() {
    contests_choosebonsai(contests.z=8);   
}
spancontestsbonsaii.onclick = function() {
    contests_choosebonsai(contests.z=9);  
}
spancontestsbonsaij.onclick = function() {
    contests_choosebonsai(contests.z=10);      
}

/* Contests Modal*/
// Get the modal
var modalcontests_r = document.getElementById("m_contests_result");

// Get the button that opens the modal
//var btncontests = document.getElementById("XXX");

// Get the <span> element that closes the modal
var spancontests_rresult = document.getElementById("Button_Modal_Contests_Result");

// When the user clicks on the button, open the modal
//btncontests_r.onclick = function() {
//    modalcontests_r.style.display = "block";
//}

// When the user clicks on <span> (x), close the modal

spancontests_rresult.onclick = function() {
    modalcontests_r.style.display = "none";
    contests.bonsaichoosen=0;
    contests.bonsaichoosenx=0;
}
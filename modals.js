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

/* Milestone Modal*/
// Get the modal
var modalmilestone = document.getElementById("m_milestone");

// Get the button that opens the modal
//var btnmilestone = document.getElementById("XXX");

// Get the <span> element that closes the modal
var spanmilestoneclose = document.getElementById("Button_Modal_Milestone");

// When the user clicks on the button, open the modal
//btnmilestone.onclick = function() {
//    modalmilestone.style.display = "block";
//}

// When the user clicks on <span> (x), close the modal
spanmilestoneclose.onclick = function() {
    modalmilestone.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
    if (event.target == modalmilestone) {
        modalmilestone.style.display = "none";
    }
}) 

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
        document.getElementById("snack_message").innerText = "Changing position of a growing bonsai isn't possible";
        var snackb = document.getElementById("snackbar");
        snackb.className = "show";
        setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);  
  
    }
    else {
        if (document.getElementById("positionn_place").value==00 || document.getElementById("positionn_place").value==0) {
            document.getElementById("snack_message").innerText = "Choose a position first";
            var snackb = document.getElementById("snackbar");
            snackb.className = "show";
            setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);  
        }
        else {
            if (SearchBonsaiReplacement().growing==1) {
                document.getElementById("snack_message").innerText = "Can not switch with a growing bonsai";
                var snackb = document.getElementById("snackbar");
                snackb.className = "show";
                setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);  
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

/* Milestone Contests*/
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
    if (bonsaichoosen==0) {
        document.getElementById("snack_message").innerText = "Choose a bonsai first";
        var snackb = document.getElementById("snackbar");
        snackb.className = "show";
        setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 1000);
    
    }
    else {
        modalcontests.style.display = "none";
    
        x_contests = 1;
        document.getElementById("menu_contests").value=x_contests;       
        $('#menu_contests').trigger('change');
        contests_bonsaiunavailable();
    }
}

spancontestscancel.onclick = function() {
    modalcontests.style.display = "none";
    bonsaichoosen=0;
    x_contests = 1;
    document.getElementById("menu_contests").value=x_contests;       
    $('#menu_contests').trigger('change');
    contests_bonsaiunavailable();
}

spancontestsbonsaia.onclick = function() {
    contests_choosebonsai(x=1);
}
spancontestsbonsaib.onclick = function() {
    contests_choosebonsai(x=2);   
}
spancontestsbonsaic.onclick = function() {
    contests_choosebonsai(x=3);  
}
spancontestsbonsaid.onclick = function() {
    contests_choosebonsai(x=4);   
}
spancontestsbonsaie.onclick = function() {
    contests_choosebonsai(x=5);  
}
spancontestsbonsaif.onclick = function() {
    contests_choosebonsai(x=6);   
}
spancontestsbonsaig.onclick = function() {
    contests_choosebonsai(x=7);   
}
spancontestsbonsaih.onclick = function() {
    contests_choosebonsai(x=8);   
}
spancontestsbonsaii.onclick = function() {
    contests_choosebonsai(x=9);  
}
spancontestsbonsaij.onclick = function() {
    contests_choosebonsai(x=10);      
}
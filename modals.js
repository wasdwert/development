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

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
    if (event.target == modaltutorial) {
        modaltutorial.style.display = "none";
    }
}) 


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

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
    if (event.target == modalnewgame) {
        modalnewgame.style.display = "none";
    }
}) 

/* Edit Name Modal*/
// Get the modal
var modalname = document.getElementById("m_name");

// Get the button that opens the modal
var btnname = document.getElementById("EditName");

// Get the <span> element that closes the modal
var spanname = document.getElementById("modal_name_close");
var spannameclose = document.getElementById("Button_Modal_Name");

// When the user clicks on the button, open the modal
btnname.onclick = function() {
    modalname.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanname.onclick = function() {
    modalname.style.display = "none";
}

spannameclose.onclick = function() {
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
var spanchange = document.getElementById("modal_position_close");
var spanchangeclose = document.getElementById("Button_Modal_Position");

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
                document.getElementById("bonsaiold_type").innerHTML = fetchbonsaiimage(SearchBonsaiShowing());
                document.getElementById("BonsaiOld").style.backgroundImage= fetchbonsairarity(SearchBonsaiShowing());
                document.getElementById("bonsaiold_level").innerText = SearchBonsaiShowing().level.toLocaleString('en', {minimumFractionDigits: 0});
                document.getElementById("bonsaiold_cp").innerHTML = SearchBonsaiShowing().foliage+SearchBonsaiShowing().branches+SearchBonsaiShowing().trunk+SearchBonsaiShowing().roots;
                
                document.getElementById("bonsainew_nr").innerText = "#"+document.getElementById("positionn_place").value;
                document.getElementById("bonsainew_name").innerText = SearchBonsaiReplacement().name.toLocaleString('en', {minimumFractionDigits: 0});
                document.getElementById("bonsainew_type").innerHTML = fetchbonsaiimage(SearchBonsaiReplacement());
                document.getElementById("BonsaiNew").style.backgroundImage= fetchbonsairarity(SearchBonsaiReplacement());
                document.getElementById("bonsainew_level").innerText = SearchBonsaiReplacement().level.toLocaleString('en', {minimumFractionDigits: 0});
                document.getElementById("bonsainew_cp").innerHTML = SearchBonsaiReplacement().foliage+SearchBonsaiReplacement().branches+SearchBonsaiReplacement().trunk+SearchBonsaiReplacement().roots;
                
                modalchange.style.display = "block";
            }
        }
    }
}
    
// When the user clicks on <span> (x), close the modal
spanchange.onclick = function() {
    modalchange.style.display = "none";
}

spanchangeclose.onclick = function() {
    ChangePosition();
    modalchange.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
    if (event.target == modalchange) {
        modalchange.style.display = "none";
    }
}) 
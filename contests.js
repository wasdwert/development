function club_ttg01_request1() {
    
    contests_bonsaiunavailable();
    modalcontests.style.display = "block";
    
}

function contests_bonsaiunavailable() {
    if (x_contests==1) {
        contests_bonsaiunavailable2(bonsai001, Button_Modal_Contests_BonsaiA, "Button_Modal_Contests_BonsaiA", x=1);
        contests_bonsaiunavailable2(bonsai002, Button_Modal_Contests_BonsaiB, "Button_Modal_Contests_BonsaiB", x=2);
        contests_bonsaiunavailable2(bonsai003, Button_Modal_Contests_BonsaiC, "Button_Modal_Contests_BonsaiC", x=3);
        contests_bonsaiunavailable2(bonsai004, Button_Modal_Contests_BonsaiD, "Button_Modal_Contests_BonsaiD", x=4);
        contests_bonsaiunavailable2(bonsai005, Button_Modal_Contests_BonsaiE, "Button_Modal_Contests_BonsaiE", x=5);
        contests_bonsaiunavailable2(bonsai006, Button_Modal_Contests_BonsaiF, "Button_Modal_Contests_BonsaiF", x=6);
        contests_bonsaiunavailable2(bonsai007, Button_Modal_Contests_BonsaiG, "Button_Modal_Contests_BonsaiG", x=7);
        contests_bonsaiunavailable2(bonsai008, Button_Modal_Contests_BonsaiH, "Button_Modal_Contests_BonsaiH", x=8);
        contests_bonsaiunavailable2(bonsai009, Button_Modal_Contests_BonsaiI, "Button_Modal_Contests_BonsaiI", x=9);
        contests_bonsaiunavailable2(bonsai010, Button_Modal_Contests_BonsaiJ, "Button_Modal_Contests_BonsaiJ", x=10);
    }
    else if (x_contests==11) {
        contests_bonsaiunavailable2(bonsai011, Button_Modal_Contests_BonsaiA, "Button_Modal_Contests_BonsaiA", x=1);
        contests_bonsaiunavailable2(bonsai012, Button_Modal_Contests_BonsaiB, "Button_Modal_Contests_BonsaiB", x=2);
        contests_bonsaiunavailable2(bonsai013, Button_Modal_Contests_BonsaiC, "Button_Modal_Contests_BonsaiC", x=3);
        contests_bonsaiunavailable2(bonsai014, Button_Modal_Contests_BonsaiD, "Button_Modal_Contests_BonsaiD", x=4);
        contests_bonsaiunavailable2(bonsai015, Button_Modal_Contests_BonsaiE, "Button_Modal_Contests_BonsaiE", x=5);
        contests_bonsaiunavailable2(bonsai016, Button_Modal_Contests_BonsaiF, "Button_Modal_Contests_BonsaiF", x=6);
        contests_bonsaiunavailable2(bonsai017, Button_Modal_Contests_BonsaiG, "Button_Modal_Contests_BonsaiG", x=7);
        contests_bonsaiunavailable2(bonsai018, Button_Modal_Contests_BonsaiH, "Button_Modal_Contests_BonsaiH", x=8);
        contests_bonsaiunavailable2(bonsai019, Button_Modal_Contests_BonsaiI, "Button_Modal_Contests_BonsaiI", x=9);
        contests_bonsaiunavailable2(bonsai020, Button_Modal_Contests_BonsaiJ, "Button_Modal_Contests_BonsaiJ", x=10);
    }
}

function contests_bonsaiunavailable2(bonsaixx, a, b, x) {
    if (bonsaixx.id==0) {
        a.className = "Button_Modal_Contests_Unavailable";
        document.getElementById(b).innerText = "Empty"; 
    }
    else if (bonsaixx.growing==1) {
        a.className = "Button_Modal_Contests_Unavailable";
        document.getElementById(b).innerText = "Currently growing"; 
    }
    else if (bonsaichoosen==x) {}
    else {
        a.className = "Button_Modal_Position_Class";
        document.getElementById(b).innerText = "Choose"; 
    }    
}

function contests_choosebonsai(x) {
    if (bonsaichoosen==0) {
        bonsaichoosen=x;
        if (bonsaichoosen==1) {
            Button_Modal_Contests_BonsaiA.className = "Button_Modal_Contests_Choosen";
            document.getElementById("Button_Modal_Contests_BonsaiA").innerText = "Choosen"; 
        }
        if (bonsaichoosen==2) {
            Button_Modal_Contests_BonsaiB.className = "Button_Modal_Contests_Choosen";
            document.getElementById("Button_Modal_Contests_BonsaiB").innerText = "Choosen"; 
        }
        if (bonsaichoosen==3) {
            Button_Modal_Contests_BonsaiC.className = "Button_Modal_Contests_Choosen";
            document.getElementById("Button_Modal_Contests_BonsaiC").innerText = "Choosen"; 
        }
        if (bonsaichoosen==4) {
            Button_Modal_Contests_BonsaiD.className = "Button_Modal_Contests_Choosen";
            document.getElementById("Button_Modal_Contests_BonsaiD").innerText = "Choosen"; 
        }
        if (bonsaichoosen==5) {
            Button_Modal_Contests_BonsaiE.className = "Button_Modal_Contests_Choosen";
            document.getElementById("Button_Modal_Contests_BonsaiE").innerText = "Choosen"; 
        }
        if (bonsaichoosen==6) {
            Button_Modal_Contests_BonsaiF.className = "Button_Modal_Contests_Choosen";
            document.getElementById("Button_Modal_Contests_BonsaiF").innerText = "Choosen"; 
        }
        if (bonsaichoosen==7) {
            Button_Modal_Contests_BonsaiG.className = "Button_Modal_Contests_Choosen";
            document.getElementById("Button_Modal_Contests_BonsaiG").innerText = "Choosen"; 
        }
        if (bonsaichoosen==8) {
            Button_Modal_Contests_BonsaiH.className = "Button_Modal_Contests_Choosen";
            document.getElementById("Button_Modal_Contests_BonsaiH").innerText = "Choosen"; 
        }
        if (bonsaichoosen==9) {
            Button_Modal_Contests_BonsaiI.className = "Button_Modal_Contests_Choosen";
            document.getElementById("Button_Modal_Contests_BonsaiI").innerText = "Choosen"; 
        }
        if (bonsaichoosen==10) {
            Button_Modal_Contests_BonsaiJ.className = "Button_Modal_Contests_Choosen";
            document.getElementById("Button_Modal_Contests_BonsaiJ").innerText = "Choosen"; 
        }
    }
    else {
        if (bonsaichoosen==x) {
            if (x==1) {
                Button_Modal_Contests_BonsaiA.className = "Button_Modal_Position_Class";
                document.getElementById("Button_Modal_Contests_BonsaiA").innerText = "Choose"; 
                bonsaichoosen=0;
            }
            if (x==2) {
                Button_Modal_Contests_BonsaiB.className = "Button_Modal_Position_Class";
                document.getElementById("Button_Modal_Contests_BonsaiB").innerText = "Choose"; 
                bonsaichoosen=0;
            }
            if (x==3) {
                Button_Modal_Contests_BonsaiC.className = "Button_Modal_Position_Class";
                document.getElementById("Button_Modal_Contests_BonsaiC").innerText = "Choose"; 
                bonsaichoosen=0;
            }
            if (x==4) {
                Button_Modal_Contests_BonsaiD.className = "Button_Modal_Position_Class";
                document.getElementById("Button_Modal_Contests_BonsaiD").innerText = "Choose"; 
                bonsaichoosen=0;
            }
            if (x==5) {
                Button_Modal_Contests_BonsaiE.className = "Button_Modal_Position_Class";
                document.getElementById("Button_Modal_Contests_BonsaiE").innerText = "Choose"; 
                bonsaichoosen=0;
            }
            if (x==6) {
                Button_Modal_Contests_BonsaiF.className = "Button_Modal_Position_Class";
                document.getElementById("Button_Modal_Contests_BonsaiF").innerText = "Choose"; 
                bonsaichoosen=0;
            }
            if (x==7) {
                Button_Modal_Contests_BonsaiG.className = "Button_Modal_Position_Class";
                document.getElementById("Button_Modal_Contests_BonsaiG").innerText = "Choose"; 
                bonsaichoosen=0;
            }
            if (x==8) {
                Button_Modal_Contests_BonsaiH.className = "Button_Modal_Position_Class";
                document.getElementById("Button_Modal_Contests_BonsaiH").innerText = "Choose"; 
                bonsaichoosen=0;
            }
            if (x==9) {
                Button_Modal_Contests_BonsaiI.className = "Button_Modal_Position_Class";
                document.getElementById("Button_Modal_Contests_BonsaiI").innerText = "Choose"; 
                bonsaichoosen=0;
            }
            if (x==10) {
                Button_Modal_Contests_BonsaiJ.className = "Button_Modal_Position_Class";
                document.getElementById("Button_Modal_Contests_BonsaiJ").innerText = "Choose"; 
                bonsaichoosen=0;
            }
        }
        else {
            document.getElementById("snack_message").innerText = "Can only choose one bonsai";
            var snackb = document.getElementById("snackbar");
            snackb.className = "show";
            setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 1000);
        }
    }
}


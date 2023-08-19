function club_ttg01_request1() {
    
    contests_bonsaiunavailable();
    modalcontests.style.display = "block";
    
}

function contests_bonsaiunavailable() {
    if (x_contests==1) {
        contests_bonsaiunavailable2(bonsai001, Button_Modal_Contests_BonsaiA, "Button_Modal_Contests_BonsaiA", constestsx=1);
        contests_bonsaiunavailable2(bonsai002, Button_Modal_Contests_BonsaiB, "Button_Modal_Contests_BonsaiB", constestsx=2);
        contests_bonsaiunavailable2(bonsai003, Button_Modal_Contests_BonsaiC, "Button_Modal_Contests_BonsaiC", constestsx=3);
        contests_bonsaiunavailable2(bonsai004, Button_Modal_Contests_BonsaiD, "Button_Modal_Contests_BonsaiD", constestsx=4);
        contests_bonsaiunavailable2(bonsai005, Button_Modal_Contests_BonsaiE, "Button_Modal_Contests_BonsaiE", constestsx=5);
        contests_bonsaiunavailable2(bonsai006, Button_Modal_Contests_BonsaiF, "Button_Modal_Contests_BonsaiF", constestsx=6);
        contests_bonsaiunavailable2(bonsai007, Button_Modal_Contests_BonsaiG, "Button_Modal_Contests_BonsaiG", constestsx=7);
        contests_bonsaiunavailable2(bonsai008, Button_Modal_Contests_BonsaiH, "Button_Modal_Contests_BonsaiH", constestsx=8);
        contests_bonsaiunavailable2(bonsai009, Button_Modal_Contests_BonsaiI, "Button_Modal_Contests_BonsaiI", constestsx=9);
        contests_bonsaiunavailable2(bonsai010, Button_Modal_Contests_BonsaiJ, "Button_Modal_Contests_BonsaiJ", constestsx=10);
    }
    else if (x_contests==11) {
        contests_bonsaiunavailable2(bonsai011, Button_Modal_Contests_BonsaiA, "Button_Modal_Contests_BonsaiA", constestsx=1);
        contests_bonsaiunavailable2(bonsai012, Button_Modal_Contests_BonsaiB, "Button_Modal_Contests_BonsaiB", constestsx=2);
        contests_bonsaiunavailable2(bonsai013, Button_Modal_Contests_BonsaiC, "Button_Modal_Contests_BonsaiC", constestsx=3);
        contests_bonsaiunavailable2(bonsai014, Button_Modal_Contests_BonsaiD, "Button_Modal_Contests_BonsaiD", constestsx=4);
        contests_bonsaiunavailable2(bonsai015, Button_Modal_Contests_BonsaiE, "Button_Modal_Contests_BonsaiE", constestsx=5);
        contests_bonsaiunavailable2(bonsai016, Button_Modal_Contests_BonsaiF, "Button_Modal_Contests_BonsaiF", constestsx=6);
        contests_bonsaiunavailable2(bonsai017, Button_Modal_Contests_BonsaiG, "Button_Modal_Contests_BonsaiG", constestsx=7);
        contests_bonsaiunavailable2(bonsai018, Button_Modal_Contests_BonsaiH, "Button_Modal_Contests_BonsaiH", constestsx=8);
        contests_bonsaiunavailable2(bonsai019, Button_Modal_Contests_BonsaiI, "Button_Modal_Contests_BonsaiI", constestsx=9);
        contests_bonsaiunavailable2(bonsai020, Button_Modal_Contests_BonsaiJ, "Button_Modal_Contests_BonsaiJ", constestsx=10);
    }
}

function contests_bonsaiunavailable2(bonsaixx, a, b, x) {
    if (bonsaichoosen==x) {
        if (bonsaichoosenx==x_contests) {}
        else {
            a.className = "Button_Modal_Position_Class";
            document.getElementById(b).innerText = "Choose"; 
            bonsaichoosen=0;
            bonsaichoosenx=0;
            if (bonsaixx.id==0) {
                a.className = "Button_Modal_Contests_Unavailable";
                document.getElementById(b).innerText = "Empty"; 
            }
            else if (bonsaixx.growing==1) {
                a.className = "Button_Modal_Contests_Unavailable";
                document.getElementById(b).innerText = "Growing"; 
            }
            else {
                a.className = "Button_Modal_Position_Class";
                document.getElementById(b).innerText = "Choose"; 
            } 
        }
    }
    else if (bonsaixx.id==0) {
        a.className = "Button_Modal_Contests_Unavailable";
        document.getElementById(b).innerText = "Empty"; 
    }
    else if (bonsaixx.growing==1) {
        a.className = "Button_Modal_Contests_Unavailable";
        document.getElementById(b).innerText = "Growing"; 
    }
    else {
        a.className = "Button_Modal_Position_Class";
        document.getElementById(b).innerText = "Choose"; 
    }    
}

function contests_choosebonsai(constestsx) {
    if (x_contests==1) {
        if (constestsx==1) {
            contests_choosebonsai2(bonsai001, constestsx);
        }
        else if (constestsx==2) {
            contests_choosebonsai2(bonsai002, constestsx);
        }
        else if (constestsx==3) {
            contests_choosebonsai2(bonsai003, constestsx);
        }
        else if (constestsx==4) {
            contests_choosebonsai2(bonsai004, constestsx);
        }
        else if (constestsx==5) {
            contests_choosebonsai2(bonsai005, constestsx);
        }
        else if (constestsx==6) {
            contests_choosebonsai2(bonsai006, constestsx);
        }
        else if (constestsx==7) {
            contests_choosebonsai2(bonsai007, constestsx);
        }
        else if (constestsx==8) {
            contests_choosebonsai2(bonsai008, constestsx);
        }
        else if (constestsx==9) {
            contests_choosebonsai2(bonsai009, constestsx);
        }
        else if (constestsx==10) {
            contests_choosebonsai2(bonsai010, constestsx);
        }
    }
    else if (x_contests==11) {
        if (constestsx==1) {
            contests_choosebonsai2(bonsai011, constestsx);            
        }
        else if (constestsx==2) {
            contests_choosebonsai2(bonsai012, constestsx);
        }
        else if (constestsx==3) {
            contests_choosebonsai2(bonsai013, constestsx);
        }
        else if (constestsx==4) {
            contests_choosebonsai2(bonsai014, constestsx);
        }
        else if (constestsx==5) {
            contests_choosebonsai2(bonsai015, constestsx);
        }
        else if (constestsx==6) {
            contests_choosebonsai2(bonsai016, constestsx);
        }
        else if (constestsx==7) {
            contests_choosebonsai2(bonsai017, constestsx);
        }
        else if (constestsx==8) {
            contests_choosebonsai2(bonsai018, constestsx);
        }
        else if (constestsx==9) {
            contests_choosebonsai2(bonsai019, constestsx);
        }
        else if (constestsx==10) {
            contests_choosebonsai2(bonsai020, constestsx);
        }
    }
}
        
function contests_choosebonsai2(bonsaixx, constestsx) {
    if (bonsaixx.id==0 || bonsaixx.growing==1) {}
    else {
        if (bonsaichoosen==0) {
            bonsaichoosen=constestsx;
            bonsaichoosenx=x_contests;
            if (bonsaichoosen==1) {
                contests_choosebonsai3a(Button_Modal_Contests_BonsaiA, "Button_Modal_Contests_BonsaiA");
            }
            if (bonsaichoosen==2) {
                contests_choosebonsai3a(Button_Modal_Contests_BonsaiB, "Button_Modal_Contests_BonsaiB"); 
            }
            if (bonsaichoosen==3) {
                contests_choosebonsai3a(Button_Modal_Contests_BonsaiC, "Button_Modal_Contests_BonsaiC"); 
            }
            if (bonsaichoosen==4) {
                contests_choosebonsai3a(Button_Modal_Contests_BonsaiD, "Button_Modal_Contests_BonsaiD"); 
            }
            if (bonsaichoosen==5) {
                contests_choosebonsai3a(Button_Modal_Contests_BonsaiE, "Button_Modal_Contests_BonsaiE");
            }
            if (bonsaichoosen==6) {
                contests_choosebonsai3a(Button_Modal_Contests_BonsaiF, "Button_Modal_Contests_BonsaiF");
            }
            if (bonsaichoosen==7) {
                contests_choosebonsai3a(Button_Modal_Contests_BonsaiG, "Button_Modal_Contests_BonsaiG");
            }
            if (bonsaichoosen==8) {
                contests_choosebonsai3a(Button_Modal_Contests_BonsaiH, "Button_Modal_Contests_BonsaiH");
            }
            if (bonsaichoosen==9) {
                contests_choosebonsai3a(Button_Modal_Contests_BonsaiI, "Button_Modal_Contests_BonsaiI");
            }
            if (bonsaichoosen==10) {
                contests_choosebonsai3a(Button_Modal_Contests_BonsaiJ, "Button_Modal_Contests_BonsaiJ");
            }
        }
        else {
            if (bonsaichoosen==constestsx) {
                if (constestsx==1) {
                    contests_choosebonsai3b(Button_Modal_Contests_BonsaiA, "Button_Modal_Contests_BonsaiA");
                }
                if (constestsx==2) {
                    contests_choosebonsai3b(Button_Modal_Contests_BonsaiB, "Button_Modal_Contests_BonsaiB");
                }
                if (constestsx==3) {
                    contests_choosebonsai3b(Button_Modal_Contests_BonsaiC, "Button_Modal_Contests_BonsaiC");
                }
                if (constestsx==4) {
                    contests_choosebonsai3b(Button_Modal_Contests_BonsaiD, "Button_Modal_Contests_BonsaiD");
                }
                if (constestsx==5) {
                    contests_choosebonsai3b(Button_Modal_Contests_BonsaiE, "Button_Modal_Contests_BonsaiE");
                }
                if (constestsx==6) {
                    contests_choosebonsai3b(Button_Modal_Contests_BonsaiF, "Button_Modal_Contests_BonsaiF");
                }
                if (constestsx==7) {
                    contests_choosebonsai3b(Button_Modal_Contests_BonsaiG, "Button_Modal_Contests_BonsaiG");
                }
                if (constestsx==8) {
                    contests_choosebonsai3b(Button_Modal_Contests_BonsaiH, "Button_Modal_Contests_BonsaiH");
                }
                if (constestsx==9) {
                    contests_choosebonsai3b(Button_Modal_Contests_BonsaiI, "Button_Modal_Contests_BonsaiI");
                }
                if (constestsx==10) {
                    contests_choosebonsai3b(Button_Modal_Contests_BonsaiJ, "Button_Modal_Contests_BonsaiJ");
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
}

function contests_choosebonsai3a(a, b) {
    a.className = "Button_Modal_Contests_Choosen";
    document.getElementById(b).innerText = "Choosen";
}

function contests_choosebonsai3b(a, b) {
    a.className = "Button_Modal_Position_Class";
    document.getElementById(b).innerText = "Choose"; 
    bonsaichoosen=0;
    bonsaichoosenx=0;
}
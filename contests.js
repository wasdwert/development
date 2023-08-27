function club_ttg01_request1() {
    contests.visible=1;
    contests.id="TTG01_R1";
    menu_contests_change();
    
    document.getElementById("modal_contests_title").innerText = "Club Raundo - First Request";
    document.getElementById("modal_contests_explanation").innerHTML = "The clubs first request is the following:<br>- A bonsai that comes for the treetype group 'Raundo'.";
    
    modalcontests.style.display = "block";
    document.getElementById('modal_contests_overflow').scrollTop =0;
}

function club_ttg01_request2() {
    contests.visible=1;
    contests.id="TTG01_R2";
    menu_contests_change();
    
    document.getElementById("modal_contests_title").innerText = "Club Raundo - Second Request";
    document.getElementById("modal_contests_explanation").innerHTML = "The clubs second request is as follows:<br>- A bonsai that comes for the treetype group 'Raundo'.<br>- The bonsais combined points (CP) must be at least 10.";
    
    modalcontests.style.display = "block";
    document.getElementById('modal_contests_overflow').scrollTop =0;
}

function club_ttg01_request3() {
    contests.visible=1;
    contests.id="TTG01_R3";
    menu_contests_change();
    document.getElementById('modal_contests_overflow').scrollTop =0;
    
    document.getElementById("modal_contests_title").innerText = "Club Raundo - Third Request";
    document.getElementById("modal_contests_explanation").innerHTML = "The clubs third and last request is:<br>- A bonsai that comes for the treetype group 'Raundo'.<br>- The nature isn't allowed to prefer any subcategorie.<br>- A foliage of at least 10.";
    
    modalcontests.style.display = "block";
    document.getElementById('modal_contests_overflow').scrollTop =0;
}

function club_ttg01_competition1() {
    contests.visible=1;
    contests.id="TTG01_C1";
    menu_contests_change();
    document.getElementById('modal_contests_overflow').scrollTop =0;
    
    document.getElementById("modal_contests_title").innerText = "Club Raundo - Competition: Beginner";
    document.getElementById("modal_contests_explanation").innerHTML = "TBA.";
    
    modalcontests.style.display = "block";
    document.getElementById('modal_contests_overflow').scrollTop =0;
}

function club_ttg01_competition2() {
    contests.visible=1;
    contests.id="TTG01_C2";
    menu_contests_change();
    document.getElementById('modal_contests_overflow').scrollTop =0;
    
    document.getElementById("modal_contests_title").innerText = "Club Raundo - Competition: Advanced";
    document.getElementById("modal_contests_explanation").innerHTML = "TBA.";
    
    modalcontests.style.display = "block";
    document.getElementById('modal_contests_overflow').scrollTop =0;
}

function club_ttg01_competition3() {
    contests.visible=1;
    contests.id="TTG01_C3";
    menu_contests_change();
    document.getElementById('modal_contests_overflow').scrollTop =0;
    
    document.getElementById("modal_contests_title").innerText = "Club Raundo - Competition: Expert";
    document.getElementById("modal_contests_explanation").innerHTML = "TBA.";
    
    modalcontests.style.display = "block";
    document.getElementById('modal_contests_overflow').scrollTop =0;
}

function contests_bonsaiunavailable() {
    if (x_contests==1) {
        contests_bonsaiunavailable2(bonsai001, Button_Modal_Contests_BonsaiA, "Button_Modal_Contests_BonsaiA", contests.z=1);
        contests_bonsaiunavailable2(bonsai002, Button_Modal_Contests_BonsaiB, "Button_Modal_Contests_BonsaiB", contests.z=2);
        contests_bonsaiunavailable2(bonsai003, Button_Modal_Contests_BonsaiC, "Button_Modal_Contests_BonsaiC", contests.z=3);
        contests_bonsaiunavailable2(bonsai004, Button_Modal_Contests_BonsaiD, "Button_Modal_Contests_BonsaiD", contests.z=4);
        contests_bonsaiunavailable2(bonsai005, Button_Modal_Contests_BonsaiE, "Button_Modal_Contests_BonsaiE", contests.z=5);
        contests_bonsaiunavailable2(bonsai006, Button_Modal_Contests_BonsaiF, "Button_Modal_Contests_BonsaiF", contests.z=6);
        contests_bonsaiunavailable2(bonsai007, Button_Modal_Contests_BonsaiG, "Button_Modal_Contests_BonsaiG", contests.z=7);
        contests_bonsaiunavailable2(bonsai008, Button_Modal_Contests_BonsaiH, "Button_Modal_Contests_BonsaiH", contests.z=8);
        contests_bonsaiunavailable2(bonsai009, Button_Modal_Contests_BonsaiI, "Button_Modal_Contests_BonsaiI", contests.z=9);
        contests_bonsaiunavailable2(bonsai010, Button_Modal_Contests_BonsaiJ, "Button_Modal_Contests_BonsaiJ", contests.z=10);
    }
    else if (x_contests==11) {
        contests_bonsaiunavailable2(bonsai011, Button_Modal_Contests_BonsaiA, "Button_Modal_Contests_BonsaiA", contests.z=1);
        contests_bonsaiunavailable2(bonsai012, Button_Modal_Contests_BonsaiB, "Button_Modal_Contests_BonsaiB", contests.z=2);
        contests_bonsaiunavailable2(bonsai013, Button_Modal_Contests_BonsaiC, "Button_Modal_Contests_BonsaiC", contests.z=3);
        contests_bonsaiunavailable2(bonsai014, Button_Modal_Contests_BonsaiD, "Button_Modal_Contests_BonsaiD", contests.z=4);
        contests_bonsaiunavailable2(bonsai015, Button_Modal_Contests_BonsaiE, "Button_Modal_Contests_BonsaiE", contests.z=5);
        contests_bonsaiunavailable2(bonsai016, Button_Modal_Contests_BonsaiF, "Button_Modal_Contests_BonsaiF", contests.z=6);
        contests_bonsaiunavailable2(bonsai017, Button_Modal_Contests_BonsaiG, "Button_Modal_Contests_BonsaiG", contests.z=7);
        contests_bonsaiunavailable2(bonsai018, Button_Modal_Contests_BonsaiH, "Button_Modal_Contests_BonsaiH", contests.z=8);
        contests_bonsaiunavailable2(bonsai019, Button_Modal_Contests_BonsaiI, "Button_Modal_Contests_BonsaiI", contests.z=9);
        contests_bonsaiunavailable2(bonsai020, Button_Modal_Contests_BonsaiJ, "Button_Modal_Contests_BonsaiJ", contests.z=10);
    }
}

function contests_bonsaiunavailable2(bonsaixx, a, b, contestsz) {
    if (contests.bonsaichoosen==contests.z) {
        if (contests.bonsaichoosenx==x_contests) {}
        else {
            contests.bonsaichoosen=0;
            contests.bonsaichoosenx=0;
            if (bonsaixx.id==0) {
                a.className = "Button_Modal_Contests_Unavailable";
                document.getElementById(b).innerText = "Empty"; 
                contests_bonsaiunavailable3(bonsaixx, a, b);
            }
            else if (bonsaixx.growing==1) {
                a.className = "Button_Modal_Contests_Unavailable";
                document.getElementById(b).innerText = "Growing";
                contests_bonsaiunavailable3(bonsaixx, a, b);
            }
            else {
                a.className = "Button_Modal_Position_Class";
                document.getElementById(b).innerText = "Choose";
                contests_bonsaiunavailable3(bonsaixx, a, b);
            } 
        }
    }
    else if (bonsaixx.id==0) {
        a.className = "Button_Modal_Contests_Unavailable";
        document.getElementById(b).innerText = "Empty";
        contests_bonsaiunavailable3(bonsaixx, a, b);
    }
    else if (bonsaixx.growing==1) {
        a.className = "Button_Modal_Contests_Unavailable";
        document.getElementById(b).innerText = "Growing";
        contests_bonsaiunavailable3(bonsaixx, a, b);
    }
    else {
        a.className = "Button_Modal_Position_Class";
        document.getElementById(b).innerText = "Choose";
        contests_bonsaiunavailable3(bonsaixx, a, b);
    }    
}

function contests_bonsaiunavailable3(bonsaixx, a, b) {
    if (contests.id=="TTG01_R1") {
        if (bonsaixx.id==0) {}
        else if (bonsaixx.treetypegroup!==1) {
            a.className = "Button_Modal_Contests_Unavailable";
            document.getElementById(b).innerText = "Unfit"; 
        }
    }
    else if (contests.id=="TTG01_R2") {
        if (bonsaixx.id==0) {}
        else if (bonsaixx.treetypegroup!==1 || bonsaixx.foliage+bonsaixx.branches+bonsaixx.trunk+bonsaixx.roots<10) {
            a.className = "Button_Modal_Contests_Unavailable";
            document.getElementById(b).innerText = "Unfit"; 
        }
    }
    else if (contests.id=="TTG01_R3") {
        if (bonsaixx.id==0) {}
        else if (bonsaixx.treetypegroup!==1 || bonsaixx.nature==2 || bonsaixx.nature==3 || bonsaixx.nature==4 || bonsaixx.nature==6 || bonsaixx.nature==7 || bonsaixx.nature==8 || bonsaixx.nature==10 || bonsaixx.nature==11 || bonsaixx.nature==12 || bonsaixx.nature==14 || bonsaixx.nature==15 || bonsaixx.nature==16 || bonsaixx.foliage<10) {
            a.className = "Button_Modal_Contests_Unavailable";
            document.getElementById(b).innerText = "Unfit"; 
        }
    }
    else {}
} 

function contests_choosebonsai(contestsz) {
    if (x_contests==1) {
        if (contests.z==1) {
            contests_choosebonsai2(bonsai001, contests.z);
        }
        else if (contests.z==2) {
            contests_choosebonsai2(bonsai002, contests.z);
        }
        else if (contests.z==3) {
            contests_choosebonsai2(bonsai003, contests.z);
        }
        else if (contests.z==4) {
            contests_choosebonsai2(bonsai004, contests.z);
        }
        else if (contests.z==5) {
            contests_choosebonsai2(bonsai005, contests.z);
        }
        else if (contests.z==6) {
            contests_choosebonsai2(bonsai006, contests.z);
        }
        else if (contests.z==7) {
            contests_choosebonsai2(bonsai007, contests.z);
        }
        else if (contests.z==8) {
            contests_choosebonsai2(bonsai008, contests.z);
        }
        else if (contests.z==9) {
            contests_choosebonsai2(bonsai009, contests.z);
        }
        else if (contests.z==10) {
            contests_choosebonsai2(bonsai010, contests.z);
        }
    }
    else if (x_contests==11) {
        if (contests.z==1) {
            contests_choosebonsai2(bonsai011, contests.z);            
        }
        else if (contests.z==2) {
            contests_choosebonsai2(bonsai012, contests.z);
        }
        else if (contests.z==3) {
            contests_choosebonsai2(bonsai013, contests.z);
        }
        else if (contests.z==4) {
            contests_choosebonsai2(bonsai014, contests.z);
        }
        else if (contests.z==5) {
            contests_choosebonsai2(bonsai015, contests.z);
        }
        else if (contests.z==6) {
            contests_choosebonsai2(bonsai016, contests.z);
        }
        else if (contests.z==7) {
            contests_choosebonsai2(bonsai017, contests.z);
        }
        else if (contests.z==8) {
            contests_choosebonsai2(bonsai018, contests.z);
        }
        else if (contests.z==9) {
            contests_choosebonsai2(bonsai019, contests.z);
        }
        else if (contests.z==10) {
            contests_choosebonsai2(bonsai020, contests.z);
        }
    }
}
        
function contests_choosebonsai2(bonsaixx, contestsz) {
    if (contests.id=="TTG01_R1") {
        if (bonsaixx.id==0 || bonsaixx.growing==1 || bonsaixx.treetypegroup!==1) {}
        else {
            contests_choosebonsai3();
        }
    }
    else if (contests.id=="TTG01_R2") {
        if (bonsaixx.id==0 || bonsaixx.growing==1 || bonsaixx.treetypegroup!==1 || bonsaixx.foliage+bonsaixx.branches+bonsaixx.trunk+bonsaixx.roots<10) {}
        else {
            contests_choosebonsai3();
        }
    }
    else if (contests.id=="TTG01_R3") {
        if (bonsaixx.id==0 || bonsaixx.growing==1 || bonsaixx.treetypegroup!==1 || bonsaixx.nature==2 || bonsaixx.nature==3 || bonsaixx.nature==4 || bonsaixx.nature==6 || bonsaixx.nature==7 || bonsaixx.nature==8 || bonsaixx.nature==10 || bonsaixx.nature==11 || bonsaixx.nature==12 || bonsaixx.nature==14 || bonsaixx.nature==15 || bonsaixx.nature==16 || bonsaixx.foliage<10) {}
        else {
            contests_choosebonsai3();
        }
    }
    else {
        if (bonsaixx.id==0 || bonsaixx.growing==1) {}
        else {
            contests_choosebonsai3();
        }
    }
}

function contests_choosebonsai3() {
    if (contests.bonsaichoosen==0) {
        contests.bonsaichoosen=contests.z;
        contests.bonsaichoosenx=x_contests;
        if (contests.bonsaichoosen==1) {
            contests_choosebonsai3a(Button_Modal_Contests_BonsaiA, "Button_Modal_Contests_BonsaiA");
        }
        if (contests.bonsaichoosen==2) {
            contests_choosebonsai3a(Button_Modal_Contests_BonsaiB, "Button_Modal_Contests_BonsaiB"); 
        }
        if (contests.bonsaichoosen==3) {
            contests_choosebonsai3a(Button_Modal_Contests_BonsaiC, "Button_Modal_Contests_BonsaiC"); 
        }
        if (contests.bonsaichoosen==4) {
            contests_choosebonsai3a(Button_Modal_Contests_BonsaiD, "Button_Modal_Contests_BonsaiD"); 
        }
        if (contests.bonsaichoosen==5) {
            contests_choosebonsai3a(Button_Modal_Contests_BonsaiE, "Button_Modal_Contests_BonsaiE");
        }
        if (contests.bonsaichoosen==6) {
            contests_choosebonsai3a(Button_Modal_Contests_BonsaiF, "Button_Modal_Contests_BonsaiF");
        }
        if (contests.bonsaichoosen==7) {
            contests_choosebonsai3a(Button_Modal_Contests_BonsaiG, "Button_Modal_Contests_BonsaiG");
        }
        if (contests.bonsaichoosen==8) {
            contests_choosebonsai3a(Button_Modal_Contests_BonsaiH, "Button_Modal_Contests_BonsaiH");
        }
        if (contests.bonsaichoosen==9) {
            contests_choosebonsai3a(Button_Modal_Contests_BonsaiI, "Button_Modal_Contests_BonsaiI");
        }
        if (contests.bonsaichoosen==10) {
            contests_choosebonsai3a(Button_Modal_Contests_BonsaiJ, "Button_Modal_Contests_BonsaiJ");
        }
    }
    else {
        if (contests.bonsaichoosen==contests.z) {
            if (contests.z==1) {
                contests_choosebonsai3b(Button_Modal_Contests_BonsaiA, "Button_Modal_Contests_BonsaiA");
            }
            if (contests.z==2) {
                contests_choosebonsai3b(Button_Modal_Contests_BonsaiB, "Button_Modal_Contests_BonsaiB");
            }
            if (contests.z==3) {
                contests_choosebonsai3b(Button_Modal_Contests_BonsaiC, "Button_Modal_Contests_BonsaiC");
            }
            if (contests.z==4) {
                contests_choosebonsai3b(Button_Modal_Contests_BonsaiD, "Button_Modal_Contests_BonsaiD");
            }
            if (contests.z==5) {
                contests_choosebonsai3b(Button_Modal_Contests_BonsaiE, "Button_Modal_Contests_BonsaiE");
            }
            if (contests.z==6) {
                contests_choosebonsai3b(Button_Modal_Contests_BonsaiF, "Button_Modal_Contests_BonsaiF");
            }
            if (contests.z==7) {
                contests_choosebonsai3b(Button_Modal_Contests_BonsaiG, "Button_Modal_Contests_BonsaiG");
            }
            if (contests.z==8) {
                contests_choosebonsai3b(Button_Modal_Contests_BonsaiH, "Button_Modal_Contests_BonsaiH");
            }
            if (contests.z==9) {
                contests_choosebonsai3b(Button_Modal_Contests_BonsaiI, "Button_Modal_Contests_BonsaiI");
            }
            if (contests.z==10) {
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

function contests_choosebonsai3a(a, b) {
    a.className = "Button_Modal_Contests_Choosen";
    document.getElementById(b).innerText = "Choosen";
}

function contests_choosebonsai3b(a, b) {
    a.className = "Button_Modal_Position_Class";
    document.getElementById(b).innerText = "Choose"; 
    contests.bonsaichoosen=0;
    contests.bonsaichoosenx=0;
}

function contests_result() {
    if (contests.id=="TTG01_R1" || contests.id=="TTG01_R2" || contests.id=="TTG01_R3") {
        contests_result_request();
        if (contests.id=="TTG01_R1") {
            $(document).ready(function(){
                $('#modal_contests_result_request').show();
                $('#modal_contests_result_competition').hide();
            });            
            document.getElementById("modal_contests_result_title").innerText = "Result: Club Raundo - First Request";
            document.getElementById("modal_contests_result_request_result").innerHTML = "The represented bonsai fits the requirements made in our request. Thank you very much.<br>You may proceed with the next request. Two more to go.";
            document.getElementById("modal_contests_result_request_reward").innerText = "3 XP";
            experience(3);
            clubs_leagues.ttg01=1;
            $(document).ready(function(){
                $('#ButtonTTG01_R1').hide();
                $('#ButtonTTG01_R2').show();
                $('#ButtonTTG01_R3').hide();
                $('#ButtonTTG01_C1').hide();
                $('#ButtonTTG01_C2').hide();
                $('#ButtonTTG01_C3').hide();
            });
            contests.bonsaichoosen=0;
            contests.bonsaichoosenx=0;
        }
        else if (contests.id=="TTG01_R2") {
            $(document).ready(function(){
                $('#modal_contests_result_request').show();
                $('#modal_contests_result_competition').hide();
            }); 
            document.getElementById("modal_contests_result_title").innerText = "Result: Club Raundo - Second Request";
            document.getElementById("modal_contests_result_request_result").innerHTML = "Once again the represented bonsai fits the requirements we made. Thank you very much.<br>You may proceed with the next request. One more to go.";
            document.getElementById("modal_contests_result_request_reward").innerText = "5 XP";
            experience(5);
            clubs_leagues.ttg01=2;
            $(document).ready(function(){
                $('#ButtonTTG01_R1').hide();
                $('#ButtonTTG01_R2').hide();
                $('#ButtonTTG01_R3').show();
                $('#ButtonTTG01_C1').hide();
                $('#ButtonTTG01_C2').hide();
                $('#ButtonTTG01_C3').hide();
            });
            contests.bonsaichoosen=0;
            contests.bonsaichoosenx=0;
        }
        else if (contests.id=="TTG01_R3") {
            $(document).ready(function(){
                $('#modal_contests_result_request').show();
                $('#modal_contests_result_competition').hide();
            }); 
            document.getElementById("modal_contests_result_title").innerText = "Result: Club Raundo - Third Request";
            document.getElementById("modal_contests_result_request_result").innerHTML = "Your third represented bonsai, has as usual, fit our requirements. We congratulate you to finishing all our requests.<br>You may proceed now with competing in our competitions.";
            document.getElementById("modal_contests_result_request_reward").innerText = "10 XP";
            experience(10);
            clubs_leagues.ttg01=3;
            $(document).ready(function(){
                $('#ButtonTTG01_R1').hide();
                $('#ButtonTTG01_R2').hide();
                $('#ButtonTTG01_R3').hide();
                $('#ButtonTTG01_C1').show();
                $('#ButtonTTG01_C2').hide();
                $('#ButtonTTG01_C3').hide();
            });
            contests.bonsaichoosen=0;
            contests.bonsaichoosenx=0;
        }
    }
    else if (contests.id=="TTG01_C1" || contests.id=="TTG01_C2" || contests.id=="TTG01_C3") {

        if (contests.id=="TTG01_C1") {
            $(document).ready(function(){
                $('#modal_contests_result_request').hide();
                $('#modal_contests_result_competition').show();
            }); 
            contests.difficulty=1;
            contests_comcalc();
            contests_result_competition();
            document.getElementById("modal_contests_result_title").innerText = "Result: Club Raundo - Competition: Beginner";
            document.getElementById("modal_contests_result_request_result").innerHTML = "TBA";
            document.getElementById("modal_contests_result_request_reward").innerText = "xxx XP";
            //experience(10);
            //clubs_leagues.ttg01=3;
            //$(document).ready(function(){
            //    $('#ButtonTTG01_R1').hide();
            //    $('#ButtonTTG01_R2').hide();
            //    $('#ButtonTTG01_R3').hide();
            //    $('#ButtonTTG01_C1').hide();
            //    $('#ButtonTTG01_C2').hide();
            //    $('#ButtonTTG01_C3').hide();
            //}); 
            contests.bonsaichoosen=0;
            contests.bonsaichoosenx=0;
        }
        else if (contests.id=="TTG01_C2") {
            $(document).ready(function(){
                $('#modal_contests_result_request').hide();
                $('#modal_contests_result_competition').show();
            }); 
            contests.difficulty=2;
            contests_comcalc();
            contests_result_competition();
            document.getElementById("modal_contests_result_title").innerText = "Result: Club Raundo - Competition: Advanced";
            document.getElementById("modal_contests_result_request_result").innerHTML = "TBA";
            document.getElementById("modal_contests_result_request_reward").innerText = "xxx XP";
            //experience(10);
            //clubs_leagues.ttg01=3;
            //$(document).ready(function(){
            //    $('#ButtonTTG01_R1').hide();
            //    $('#ButtonTTG01_R2').hide();
            //    $('#ButtonTTG01_R3').hide();
            //    $('#ButtonTTG01_C1').hide();
            //    $('#ButtonTTG01_C2').hide();
            //    $('#ButtonTTG01_C3').hide();
            //}); 
            contests.bonsaichoosen=0;
            contests.bonsaichoosenx=0;
        }
        else if (contests.id=="TTG01_C3") {
            $(document).ready(function(){
                $('#modal_contests_result_request').hide();
                $('#modal_contests_result_competition').show();
            }); 
            contests.difficulty=3;
            contests_comcalc();
            contests_result_competition();
            document.getElementById("modal_contests_result_title").innerText = "Result: Club Raundo - Competition: Expert";
            document.getElementById("modal_contests_result_request_result").innerHTML = "TBA";
            document.getElementById("modal_contests_result_request_reward").innerText = "xxx XP";
            //experience(10);
            //clubs_leagues.ttg01=3;
            //$(document).ready(function(){
            //    $('#ButtonTTG01_R1').hide();
            //    $('#ButtonTTG01_R2').hide();
            //    $('#ButtonTTG01_R3').hide();
            //    $('#ButtonTTG01_C1').hide();
            //    $('#ButtonTTG01_C2').hide();
            //    $('#ButtonTTG01_C3').hide();
            //}); 
            contests.bonsaichoosen=0;
            contests.bonsaichoosenx=0;
        }
    } 
}

function contests_result_request() {
    if (contests.bonsaichoosenx==1) {
        if (contests.bonsaichoosen==1) {
            contests_result_bonsaixa(bonsai001);
        }
        else if (contests.bonsaichoosen==2) {
            contests_result_bonsaixa(bonsai002);
        }
        else if (contests.bonsaichoosen==3) {
            contests_result_bonsaixa(bonsai003);
        }
        else if (contests.bonsaichoosen==4) {
            contests_result_bonsaixa(bonsai004);
        }
        else if (contests.bonsaichoosen==5) {
            contests_result_bonsaixa(bonsai005);
        }
        else if (contests.bonsaichoosen==6) {
            contests_result_bonsaixa(bonsai006);
        }
        else if (contests.bonsaichoosen==7) {
            contests_result_bonsaixa(bonsai007);
        }
        else if (contests.bonsaichoosen==8) {
            contests_result_bonsaixa(bonsai008);
        }
        else if (contests.bonsaichoosen==9) {
            contests_result_bonsaixa(bonsai009);
        }
        else if (contests.bonsaichoosen==10) {
            contests_result_bonsaixa(bonsai010);
        }
    }
    else if (contests.bonsaichoosenx==11) {
        if (contests.bonsaichoosen==1) {
            contests_result_bonsaixa(bonsai011);
        }
        else if (contests.bonsaichoosen==2) {
            contests_result_bonsaixa(bonsai012);
        }
        else if (contests.bonsaichoosen==3) {
            contests_result_bonsaixa(bonsai013);
        }
        else if (contests.bonsaichoosen==4) {
            contests_result_bonsaixa(bonsai014);
        }
        else if (contests.bonsaichoosen==5) {
            contests_result_bonsaixa(bonsai015);
        }
        else if (contests.bonsaichoosen==6) {
            contests_result_bonsaixa(bonsai016);
        }
        else if (contests.bonsaichoosen==7) {
            contests_result_bonsaixa(bonsai017);
        }
        else if (contests.bonsaichoosen==8) {
            contests_result_bonsaixa(bonsai018);
        }
        else if (contests.bonsaichoosen==9) {
            contests_result_bonsaixa(bonsai019);
        }
        else if (contests.bonsaichoosen==10) {
            contests_result_bonsaixa(bonsai020);
        }
    }
}
function contests_result_bonsaixa(bonsaixx) {
    document.getElementById("bonsaixa_name_contests").innerText = bonsaixx.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaixa_types_contests").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, bonsaixx, "50", "50");
    document.getElementById("ButtonBonsaiXA_contests").style.backgroundImage= fetchbonsaitreequality(bonsaixx);
    document.getElementById("bonsaixa_level_contests").innerText = bonsaixx.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaixa_cp_contests").innerHTML = (Math.round((bonsaixx.foliage+bonsaixx.branches+bonsaixx.trunk+bonsaixx.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
    document.getElementById("bonsaixa_ttg_contests").innerText = treetypegroupname[bonsaixx.treetypegroup];
    document.getElementById("bonsaixa_st_contests").innerText = styletypename[bonsaixx.styletype];
    document.getElementById("bonsaixa_nature_contests").innerText = natures[bonsaixx.nature];
    document.getElementById("bonsaixa_f_contests").innerHTML = bonsaixx.foliage.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaixa_b_contests").innerHTML = bonsaixx.branches.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaixa_t_contests").innerHTML = bonsaixx.trunk.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaixa_r_contests").innerHTML = bonsaixx.roots.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaixa_idstring_contests").innerText = bonsaixx.id_string.toLocaleString('en', {minimumFractionDigits: 0});
}

function contests_result_competition() {
    if (contests.bonsaichoosenx==1) {
        if (contests.bonsaichoosen==1) {
            contests_result_bonsaixb(bonsai001);
        }
        else if (contests.bonsaichoosen==2) {
            contests_result_bonsaixb(bonsai002);
        }
        else if (contests.bonsaichoosen==3) {
            contests_result_bonsaixb(bonsai003);
        }
        else if (contests.bonsaichoosen==4) {
            contests_result_bonsaixb(bonsai004);
        }
        else if (contests.bonsaichoosen==5) {
            contests_result_bonsaixb(bonsai005);
        }
        else if (contests.bonsaichoosen==6) {
            contests_result_bonsaixb(bonsai006);
        }
        else if (contests.bonsaichoosen==7) {
            contests_result_bonsaixb(bonsai007);
        }
        else if (contests.bonsaichoosen==8) {
            contests_result_bonsaixb(bonsai008);
        }
        else if (contests.bonsaichoosen==9) {
            contests_result_bonsaixb(bonsai009);
        }
        else if (contests.bonsaichoosen==10) {
            contests_result_bonsaixb(bonsai010);
        }
    }
    else if (contests.bonsaichoosenx==11) {
        if (contests.bonsaichoosen==1) {
            contests_result_bonsaixb(bonsai011);
        }
        else if (contests.bonsaichoosen==2) {
            contests_result_bonsaixb(bonsai012);
        }
        else if (contests.bonsaichoosen==3) {
            contests_result_bonsaixb(bonsai013);
        }
        else if (contests.bonsaichoosen==4) {
            contests_result_bonsaixb(bonsai014);
        }
        else if (contests.bonsaichoosen==5) {
            contests_result_bonsaixb(bonsai015);
        }
        else if (contests.bonsaichoosen==6) {
            contests_result_bonsaixb(bonsai016);
        }
        else if (contests.bonsaichoosen==7) {
            contests_result_bonsaixb(bonsai017);
        }
        else if (contests.bonsaichoosen==8) {
            contests_result_bonsaixb(bonsai018);
        }
        else if (contests.bonsaichoosen==9) {
            contests_result_bonsaixb(bonsai019);
        }
        else if (contests.bonsaichoosen==10) {
            contests_result_bonsaixb(bonsai020);
        }
    }      
}
function contests_result_bonsaixb(bonsaixx) {
    document.getElementById("bonsaixb_name_contests").innerText = bonsaixx.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaixb_types_contests").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, bonsaixx, "50", "50");
    document.getElementById("ButtonBonsaiXB_contests").style.backgroundImage= fetchbonsaitreequality(bonsaixx);
    document.getElementById("bonsaixb_level_contests").innerText = bonsaixx.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaixb_cp_contests").innerHTML = (Math.round((bonsaixx.foliage+bonsaixx.branches+bonsaixx.trunk+bonsaixx.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
    document.getElementById("bonsaixb_ttg_contests").innerText = treetypegroupname[bonsaixx.treetypegroup];
    document.getElementById("bonsaixb_st_contests").innerText = styletypename[bonsaixx.styletype];
    document.getElementById("bonsaixb_nature_contests").innerText = natures[bonsaixx.nature];
    document.getElementById("bonsaixb_f_contests").innerHTML = bonsaixx.foliage.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaixb_b_contests").innerHTML = bonsaixx.branches.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaixb_t_contests").innerHTML = bonsaixx.trunk.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaixb_r_contests").innerHTML = bonsaixx.roots.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaixb_idstring_contests").innerText = bonsaixx.id_string.toLocaleString('en', {minimumFractionDigits: 0});
    contests_wincalc (bonsaixx);
}
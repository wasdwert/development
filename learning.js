function experience(exp) {
    if (exp<skills.exp_nextlevel) {
        skills.exp_nextlevel= skills.exp_nextlevel-exp;
        document.getElementById("skillexp_left").innerHTML = skills.exp_nextlevel;
    }
    else if (exp>=skills.exp_nextlevel) {
        exp = exp-skills.exp_nextlevel;
        skills.level +=1;
        skills.skillpoints +=2;
        skills.exp_nextlevel= skillexperience[skills.level];
        skills.exp_nextlevel= skills.exp_nextlevel-exp;
        document.getElementById("skilllevel").innerHTML = skills.level;
        document.getElementById("skillexp_left").innerHTML = skills.exp_nextlevel;
        document.getElementById("skillpoints").innerHTML = skills.skillpoints;
        document.getElementById("skillpoints_mobile").innerHTML = skills.skillpoints;
        document.getElementById("skillpoints_mobilexs").innerHTML = skills.skillpoints;
        if (skills.level==1) {
            document.getElementById("skill_compost1_rec1").innerHTML = '<img src="Images/tick.svg" width="20" height="20">';            
        }
        if (skills.level==2) {
            document.getElementById("skill_growing_rec1").innerHTML = '<img src="Images/tick.svg" width="20" height="20">';
            document.getElementById("skill_shaping_rec1").innerHTML = '<img src="Images/tick.svg" width="20" height="20">';
        }
        if (skills.skillpoints>=1) {
            document.getElementById("skill_compost1_rec2").innerHTML = '<img src="Images/tick.svg" width="20" height="20">'; 
            document.getElementById("skill_growing_rec3").innerHTML = '<img src="Images/tick.svg" width="20" height="20">';
            document.getElementById("skill_shaping_rec3").innerHTML = '<img src="Images/tick.svg" width="20" height="20">';
        }
        
        //modalmilestone.style.display = "block";
        
        Snackbar("<img src='Images/skill_white.svg' width='20' height='20'>&nbsp;You reached skill level&nbsp;"+ skills.level +".", "snackbar_skillstone", 6000, "snackbar_skillstone show6s");
    }
}

function learning_countdown() {
    if (worker01.learning == "Patience") {
        worker01.learning_zeit -=1;
        document.getElementById("zeit_worker01").innerHTML = "("+worker01.learning_zeit+"&nbsp;seconds left)"; 
        if (worker01.learning_zeit==0) {
            worker01.learning = 0;
            worker01.busy = 0;
            state.workers_available +=1;
            skills.patience +=1;
            $(document).ready(function(){
                $('#bdcc_r_t111').show();
                $('#bdcc_r_t112').hide();
                $('#Skill_Patience').hide();
                $('#Skill_Patience_Learned').show();
            });
            document.getElementById("Skill_Patience_Button").innerHTML = "Learned";
            document.getElementById("zeit_worker01").innerHTML = "";  
            document.getElementById("worker1_task").innerHTML = '<img src="Images/idle.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Ready for new task'; 
            task013trigger();
        }
    }
}

function learn_treestyles1() {
    if (skills.treestyles1==0) {
        if (equipment.tools1==1) {
            if (equipment.book_styles1==1) {
                skills.treestyles1=1;
                fetchvalues();
                fetchunlocks();
                $(document).ready(function(){
                    $("#menu_style").html("<option value='0'>Choose a style for your bonsai</option><option value='1'>Chokan - Formal Upright Style</option><option value='2'>Moyogi - Informal Upright Style</option><option value='3'>Shakan - Slanting Style</option>");
                    $("#menu_style_mobile").html("<option value='0'>Choose a style for your bonsai</option><option value='1'>Chokan - Formal Upright Style</option><option value='2'>Moyogi - Informal Upright Style</option><option value='3'>Shakan - Slanting Style</option>");
                });
            }
            else {
                Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Need book: Bonsai styles #1 first", "snackbar_attention", 3000, "snackbar_attention show3s");
            }
        }
        else {
            Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Need 'Beginner bonsai tools' first", "snackbar_attention", 3000, "snackbar_attention show3s");
        }
    }
    else {}
}

function learn_treestyles2() {
    if (skills.treestyles2==0) {
        if (equipment.book_styles2==1) {
            skills.treestyles2=1;
            fetchvalues();
            fetchunlocks();
            $(document).ready(function(){
                $("#menu_style").html("<option value='0'>Choose a style for your bonsai</option><option value='1'>Chokan - Formal Upright Style</option><option value='2'>Moyogi - Informal Upright Style</option><option value='3'>Shakan - Slanting Style</option></option><option value='4'>Han-Kengai - Semi-cascade Style</option></option><option value='5'>Sokan - Double Trunk Style</option></option><option value='6'>Kengai - Full Cascade Style</option></option><option value='7'>Kabudachi - Multi-Trunk Style</option>");
                $("#menu_style_mobile").html("<option value='0'>Choose a style for your bonsai</option><option value='1'>Chokan - Formal Upright Style</option><option value='2'>Moyogi - Informal Upright Style</option><option value='3'>Shakan - Slanting Style</option><option value='4'>Han-Kengai - Semi-cascade Style</option></option><option value='5'>Sokan - Double Trunk Style</option></option><option value='6'>Kengai - Full Cascade Style</option></option><option value='7'>Kabudachi - Multi-Trunk Style</option>");
            });
        }
        else {
            Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Need book: Bonsai styles #2 first", "snackbar_attention", 3000, "snackbar_attention show3s");
        }
    }
    else {}
}

function learn_robot1() {
    if (skills.robot1==0) {
        if (skills.level>=0) {
            if (equipment.book_robot1==1) {
                skills.robot1=1;
                fetchvalues();
                fetchunlocks();
            }
            else {}
        }
        else {
            Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Skill level not high enough", "snackbar_attention", 3000, "snackbar_attention show3s");
        }
    }
    else {}
}

function learn_compost1() {
    if (skills.compost1==0) {
        if (skills.level>=1) {
            if (skills.skillpoints>=1) {
                skills.skillpoints-=1;
                skills.compost1=1;
                fetchvalues();
                fetchunlocks();
            }
            else {
                Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough skill points", "snackbar_attention", 3000, "snackbar_attention show3s");
            }
        }
        else {
            Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Skill level not high enough", "snackbar_attention", 3000, "snackbar_attention show3s");
        }
    }
    else {}
}

function learn_growing() {
    if (skills.growing<=8) {
        if (skills.level>1) {
            if (skills.skillpoints>=1) {
                if (equipment.book_growing1==1) {
                    skills.skillpoints-=1;
                    learn_growing2 ();
                    fetchvalues();
                    fetchunlocks();
                }
                else {
                    Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Need book: Growing #1 first", "snackbar_attention", 3000, "snackbar_attention show3s");
                }    
            }
            else {
                Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough skill points", "snackbar_attention", 3000, "snackbar_attention show3s");
            }
        }
        else {
            Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Skill level not high enough", "snackbar_attention", 3000, "snackbar_attention show3s");
        } 
    }
    else if (skills.growing>8 && skills.growing<10) {
        if (skills.level>1) {
            if (skills.skillpoints>=1) {
                if (equipment.book_growing1==1) {
                    skills.skillpoints-=1;
                    learn_growing2 ();
                    fetchvalues();
                    fetchunlocks();
                }
                else {
                    Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Need book: Growing #1 first", "snackbar_attention", 3000, "snackbar_attention show3s");
                }    
            }
            else {
                Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough skill points", "snackbar_attention", 3000, "snackbar_attention show3s");
            }
        }
        else {
            Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Skill level not high enough", "snackbar_attention", 3000, "snackbar_attention show3s");
        }
    }
    else if (skills.growing>9 && skills.growing<=18) {
        
    }  
}

function learn_growing2 () {
    skills.growing +=1;
    learn_growshape (bonsai001);
    learn_growshape (bonsai002);
    learn_growshape (bonsai003);
    learn_growshape (bonsai004);
    learn_growshape (bonsai005);
    learn_growshape (bonsai006);
    learn_growshape (bonsai007);
    learn_growshape (bonsai008);
    learn_growshape (bonsai009);
    learn_growshape (bonsai010);
    learn_growshape (bonsai011);
    learn_growshape (bonsai012);
    learn_growshape (bonsai013);
    learn_growshape (bonsai014);
    learn_growshape (bonsai015);
    learn_growshape (bonsai016);
    learn_growshape (bonsai017);
    learn_growshape (bonsai018);
    learn_growshape (bonsai019);
    learn_growshape (bonsai020);
}

function learn_growshape (bonsaixx) {
    if (bonsaixx.growing==0) {
        bonsaixx.foliage_lp=0;
        bonsaixx.branches_lp=0;
        bonsaixx.trunk_lp=0;
        bonsaixx.roots_lp=0;
        if (bonsaixx.treequality==1) {
            cpdistribution(bonsaixx, level_cp_tq1);
            cpdistributionaftercare(bonsaixx)
        }
        if (bonsaixx.treequality==2) {
            cpdistribution(bonsaixx, level_cp_tq2);
            cpdistributionaftercare(bonsaixx)
        }
        if (bonsaixx.treequality==3) {
            cpdistribution(bonsaixx, level_cp_tq3);
            cpdistributionaftercare(bonsaixx)
        }
    }
}

function learn_shaping() {
    if (skills.shaping<=8) {
        if (skills.level>1) {
            if (skills.skillpoints>=1) {
                if (equipment.book_shaping1==1) {
                    skills.skillpoints-=1;
                    learn_shaping2 ();
                    fetchvalues();
                    fetchunlocks();
                }
                else {
                    Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Need book: Shaping #1 first", "snackbar_attention", 3000, "snackbar_attention show3s");
                }    
            }
            else {
                Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough skill points", "snackbar_attention", 3000, "snackbar_attention show3s");
            }
        }
        else {
            Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Skill level not high enough", "snackbar_attention", 3000, "snackbar_attention show3s");
        } 
    }
    else if (skills.shaping>8 && skills.shaping<10) {
        if (skills.level>1) {
            if (skills.skillpoints>=1) {
                if (equipment.book_shaping1==1) {
                    skills.skillpoints-=1;
                    learn_shaping2 ();
                    fetchvalues();
                    fetchunlocks();
                }
                else {
                    Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Need book: Shaping #1 first", "snackbar_attention", 3000, "snackbar_attention show3s");
                }    
            }
            else {
                Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough skill points", "snackbar_attention", 3000, "snackbar_attention show3s");
            }
        }
        else {
            Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Skill level not high enough", "snackbar_attention", 3000, "snackbar_attention show3s");
        }
    }
    else if (skills.shaping>9 && skills.shaping<=18) {
        
    }  
}

function learn_shaping2 () {
    skills.shaping +=1;
    learn_growshape (bonsai001);
    learn_growshape (bonsai002);
    learn_growshape (bonsai003);
    learn_growshape (bonsai004);
    learn_growshape (bonsai005);
    learn_growshape (bonsai006);
    learn_growshape (bonsai007);
    learn_growshape (bonsai008);
    learn_growshape (bonsai009);
    learn_growshape (bonsai010);
    learn_growshape (bonsai011);
    learn_growshape (bonsai012);
    learn_growshape (bonsai013);
    learn_growshape (bonsai014);
    learn_growshape (bonsai015);
    learn_growshape (bonsai016);
    learn_growshape (bonsai017);
    learn_growshape (bonsai018);
    learn_growshape (bonsai019);
    learn_growshape (bonsai020);
}

function learn_patience() {
    if (skills.patience==0) {
        if (skills.level>=5) {
            if (equipment.book_of_patience==1 & equipment.memory_chips==1) {
                if (worker01.busy==0) {
                    state.workers_available-=1;
                    worker01.busy=1;
                    worker01.learning="Patience";
                    worker01.learning_zeit=300;
                    document.getElementById("zeit_worker01").innerHTML = "("+worker01.learning_zeit+"&nbsp;seconds left)";
                    document.getElementById("worker1_task").innerHTML = '<img src="Images/learning.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Learning';
                    skills.compost=1;
                    document.getElementById("Skill_Patience_Button").innerHTML = "Learning";
                    Button_Skill_Patience.className = "";
                    document.getElementById("Button_Skill_Patience").style.cursor= "auto";
                }
                else {
                    if (state.workers_available>=1) {
                        document.getElementById("snack_message").innerText = "Only you can learn a skill";
                        var snackb = document.getElementById("snackbar");
                        snackb.className = "show";
                        setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 1000);
                    }
                    else {
                        document.getElementById("snack_message").innerText = "You are busy with another task";
                        var snackb = document.getElementById("snackbar");
                        snackb.className = "show";
                        setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 1000);
                    }
                }
            }
            else {
                document.getElementById("snack_message").innerText = "You haven't met all the requirements yet";
                var snackb = document.getElementById("snackbar");
                snackb.className = "show";
                setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 1000);
            }
        }
        else {
            document.getElementById("snack_message").innerText = "You haven't met all the requirements yet";
            var snackb = document.getElementById("snackbar");
            snackb.className = "show";
            setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 1000);
        }
    }
    else {}
}
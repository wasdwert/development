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
        document.getElementById("snack_message").innerHTML = "Reached skill level&nbsp;"+ skills.level +". Congratulations!";
        var snackb = document.getElementById("snackbar");
        snackb.className = "show";
        setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
    }
}

function learning_countdown() {
    if (worker01.learning == "Robot") {
        worker01.learning_zeit -=1;
        document.getElementById("zeit_worker01").innerHTML = "("+worker01.learning_zeit+"&nbsp;seconds left)"; 
        if (worker01.learning_zeit==0) {
            worker01.learning = 0;
            worker01.busy = 0;
            state.workers_available +=1;
            $(document).ready(function(){
                $('#Craft_Robot').show();
                $('#Skill_Robot').hide();
                $('#Skill_Robot_Learned').show();
            });
            document.getElementById("Skill_Robot_Button").innerHTML = "Learned";
            document.getElementById("zeit_worker01").innerHTML = "";  
            document.getElementById("worker1_task").innerHTML = '<img src="Images/idle.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Ready for new task'; 
            
            task004trigger();
        }
    }
    if (worker01.learning == "Compost") {
        worker01.learning_zeit -=1;
        document.getElementById("zeit_worker01").innerHTML = "("+worker01.learning_zeit+"&nbsp;seconds left)"; 
        if (worker01.learning_zeit==0) {
            worker01.learning = 0;
            worker01.busy = 0;
            state.workers_available +=1;
            $(document).ready(function(){
                $('#Craft_Compost').show();
                $('#resources_0').show();
                $('#resources_2').show();
                $('#Skill_Compost').hide();
                $('#Skill_Compost_Learned').show();
            });
            document.getElementById("Skill_Compost_Button").innerHTML = "Learned";
            document.getElementById("zeit_worker01").innerHTML = "";  
            document.getElementById("worker1_task").innerHTML = '<img src="Images/idle.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Ready for new task'; 
        }
    }
    if (worker01.learning == "Growing") {
        worker01.learning_zeit -=1;
        document.getElementById("zeit_worker01").innerHTML = "("+worker01.learning_zeit+"&nbsp;seconds left)"; 
        if (worker01.learning_zeit==0) {
            worker01.learning = 0;
            worker01.busy = 0;
            state.workers_available +=1;
            skills.growing_act = 0;
            skills.growing +=1;
            skills.growing_level +=4;
            document.getElementById("skill_growing_nr").innerHTML = skills.growing+1;
            document.getElementById("skill_growing_nr2").innerHTML = skills.growing+1;
            document.getElementById("skill_growing_level").innerHTML = skills.growing_level;
            document.getElementById("Button_Skill_Growing").innerHTML = "Learn (<span id='skill_growing_time'>300</span>&nbsp;Seconds)";
            document.getElementById("skill_growing_time").innerHTML = skillgrowingtime[skills.growing];
            document.getElementById("zeit_worker01").innerHTML = "";  
            document.getElementById("worker1_task").innerHTML = '<img src="Images/idle.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Ready for new task';
            Button_Skill_Growing.className = "grey";
            document.getElementById("Button_Skill_Growing").style.cursor= "pointer";
            
            resetcpdistribution();
            if (x>=1 & z>=1) {
                Bonsai_Details(SearchBonsaiShowing());
            }
            
            if (bonsai11.foliage+bonsai11.branches+bonsai11.trunk+bonsai11.roots>=30 || bonsai12.foliage+bonsai12.branches+bonsai12.trunk+bonsai12.roots>=30 || bonsai13.foliage+bonsai13.branches+bonsai13.trunk+bonsai13.roots>=30 || bonsai14.foliage+bonsai14.branches+bonsai14.trunk+bonsai14.roots>=30 || bonsai15.foliage+bonsai15.branches+bonsai15.trunk+bonsai15.roots>=30 || bonsai16.foliage+bonsai16.branches+bonsai16.trunk+bonsai16.roots>=30 || bonsai71.foliage+bonsai71.branches+bonsai71.trunk+bonsai71.roots>=30 || bonsai72.foliage+bonsai72.branches+bonsai72.trunk+bonsai72.roots>=30 || bonsai73.foliage+bonsai73.branches+bonsai73.trunk+bonsai73.roots>=30 || bonsai74.foliage+bonsai74.branches+bonsai74.trunk+bonsai74.roots>=30 || bonsai75.foliage+bonsai75.branches+bonsai75.trunk+bonsai75.roots>=30 || bonsai76.foliage+bonsai76.branches+bonsai76.trunk+bonsai76.roots>=30) {
                if (task_triggers.task009<1) {
                    task_triggers.task009 +=1;
                }
            }
            task009trigger();
        }
    }
    if (worker01.learning == "Shaping") {
        worker01.learning_zeit -=1;
        document.getElementById("zeit_worker01").innerHTML = "("+worker01.learning_zeit+"&nbsp;seconds left)"; 
        if (worker01.learning_zeit==0) {
            worker01.learning = 0;
            worker01.busy = 0;
            state.workers_available +=1;
            skills.shaping_act = 0;
            skills.shaping +=1;
            skills.shaping_level +=4;
            document.getElementById("skill_shaping_nr").innerHTML = skills.shaping+1;
            document.getElementById("skill_shaping_nr2").innerHTML = skills.shaping+1;
            document.getElementById("skill_shaping_level").innerHTML = skills.shaping_level;
            document.getElementById("Button_Skill_Shaping").innerHTML = "Learn (<span id='skill_shaping_time'>300</span>&nbsp;Seconds)";
            document.getElementById("skill_shaping_time").innerHTML = skillshapingtime[skills.shaping];
            document.getElementById("zeit_worker01").innerHTML = "";  
            document.getElementById("worker1_task").innerHTML = '<img src="Images/idle.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Ready for new task';
            Button_Skill_Shaping.className = "grey";
            document.getElementById("Button_Skill_Shaping").style.cursor= "pointer";
            
            resetcpdistribution();
            if (x>=1 & z>=1) {
                Bonsai_Details(SearchBonsaiShowing());
            }
            
            if (bonsai11.foliage>=20 || bonsai11.branches>=20 || bonsai11.trunk>=20 || bonsai11.roots>=20 || bonsai12.foliage>=20 || bonsai12.branches>=20 || bonsai12.trunk>=20 || bonsai12.roots>=20 || bonsai13.foliage>=20 || bonsai13.branches>=20 || bonsai13.trunk>=20 || bonsai13.roots>=20 || bonsai14.foliage>=20 || bonsai14.branches>=20 || bonsai14.trunk>=20 || bonsai14.roots>=20 || bonsai15.foliage>=20 || bonsai15.branches>=20 || bonsai15.trunk>=20 || bonsai15.roots>=20 || bonsai16.foliage>=20 || bonsai16.branches>=20 || bonsai16.trunk>=20 || bonsai16.roots>=20 || bonsai71.foliage>=20 || bonsai71.branches>=20 || bonsai71.trunk>=20 || bonsai71.roots>=20 || bonsai72.foliage>=20 || bonsai72.branches>=20 || bonsai72.trunk>=20 || bonsai72.roots>=20 || bonsai73.foliage>=20 || bonsai73.branches>=20 || bonsai73.trunk>=20 || bonsai73.roots>=20 || bonsai74.foliage>=20 || bonsai74.branches>=20 || bonsai74.trunk>=20 || bonsai74.roots>=20 || bonsai75.foliage>=20 || bonsai75.branches>=20 || bonsai75.trunk>=20 || bonsai75.roots>=20 || bonsai76.foliage>=20 || bonsai76.branches>=20 || bonsai76.trunk>=20 || bonsai76.roots>=20) {
                if (task_triggers.task012<1) {
                    task_triggers.task012 +=1;
                }
            }
            task012trigger();
        }
    }
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

function learn_robot() {
    if (skills.robot==0) {
        if (skills.level>=0) {
            if (worker01.busy==0) {
                state.workers_available-=1;
                worker01.busy=1;
                worker01.learning="Robot";
                worker01.learning_zeit=30;
                document.getElementById("zeit_worker01").innerHTML = "("+worker01.learning_zeit+"&nbsp;seconds left)";
                document.getElementById("worker1_task").innerHTML = '<img src="Images/learning.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Learning';
                skills.robot=1;
                document.getElementById("Skill_Robot_Button").innerHTML = "Learning";
                Button_Skill_Robot.className = "";
                document.getElementById("Button_Skill_Robot").style.cursor= "auto";
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
            document.getElementById("snack_message").innerText = "Skill level not high enough";
            var snackb = document.getElementById("snackbar");
            snackb.className = "show";
            setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 1000);
        }
    }
    else {}
}

function learn_compost() {
    if (skills.compost==0) {
        if (skills.level>=1) {
            if (worker01.busy==0) {
                state.workers_available-=1;
                worker01.busy=1;
                worker01.learning="Compost";
                worker01.learning_zeit=60;
                document.getElementById("zeit_worker01").innerHTML = "("+worker01.learning_zeit+"&nbsp;seconds left)";
                document.getElementById("worker1_task").innerHTML = '<img src="Images/learning.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Learning';
                skills.compost=1;
                document.getElementById("Skill_Compost_Button").innerHTML = "Learning";
                Button_Skill_Compost.className = "";
                document.getElementById("Button_Skill_Compost").style.cursor= "auto";
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
            document.getElementById("snack_message").innerText = "Skill level not high enough";
            var snackb = document.getElementById("snackbar");
            snackb.className = "show";
            setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 1000);
        }
    }
    else {}
}

function learn_growing() {
    if (skills.growing_act==0) {
        if (skills.level>=skills.growing_level) {
            if (worker01.busy==0) {
                state.workers_available-=1;
                worker01.busy=1;
                worker01.learning="Growing";
                worker01.learning_zeit=skillgrowingtime[skills.growing];
                document.getElementById("zeit_worker01").innerHTML = "("+worker01.learning_zeit+"&nbsp;seconds left)";
                document.getElementById("worker1_task").innerHTML = '<img src="Images/learning.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Learning';
                skills.growing_act=1;
                document.getElementById("Button_Skill_Growing").innerHTML = "Learning";
                Button_Skill_Growing.className = "";
                document.getElementById("Button_Skill_Growing").style.cursor= "auto";
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
            document.getElementById("snack_message").innerText = "Skill level not high enough";
            var snackb = document.getElementById("snackbar");
            snackb.className = "show";
            setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 1000);
        }    
    }
    else {}
}

function learn_shaping() {
    if (skills.shaping_act==0) {
        if (skills.level>=skills.shaping_level) {
            if (worker01.busy==0) {
                state.workers_available-=1;
                worker01.busy=1;
                worker01.learning="Shaping";
                worker01.learning_zeit=skillshapingtime[skills.shaping];
                document.getElementById("zeit_worker01").innerHTML = "("+worker01.learning_zeit+"&nbsp;seconds left)";
                document.getElementById("worker1_task").innerHTML = '<img src="Images/learning.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Learning';
                skills.shaping_act=1;
                document.getElementById("Button_Skill_Shaping").innerHTML = "Learning";
                Button_Skill_Shaping.className = "";
                document.getElementById("Button_Skill_Shaping").style.cursor= "auto";
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
            document.getElementById("snack_message").innerText = "Skill level not high enough";
            var snackb = document.getElementById("snackbar");
            snackb.className = "show";
            setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 1000);
        }    
    }
    else {}
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
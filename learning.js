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
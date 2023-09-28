function crafting_countdown(worker) {
    if (worker.crafting == "Compost") {
        worker.crafting_zeit -= 1;
        worker.crafting_zeitone -=1;
        if (worker==worker01) {
            document.getElementById("zeit_worker01").innerHTML = "("+timetracker(worker.crafting_zeit)+"&nbsp;left)"; 
        }
        if (worker==worker02) {
            document.getElementById("zeit_worker02").innerHTML = "("+timetracker(worker.crafting_zeit)+"&nbsp;left)"; 
        }  
        if (worker==worker03) {
            document.getElementById("zeit_worker03").innerHTML = "("+timetracker(worker.crafting_zeit)+"&nbsp;left)"; 
        } 
        if (worker.crafting_zeitone==0) {
            resources.compost1 +=1;
            document.getElementById("compost1").innerText = resources.compost1.toLocaleString('en', {minimumFractionDigits: 0}); 
            cr_compost1.producing -=1;
            if (cr_compost1.producing>0) {
                worker.crafting_zeitone = cr_compost1.time_original;
            }
            //task007trigger();
        }
        if (worker.crafting_zeit==0) {
            worker.crafting = 0;
            worker.busy = 0;
            state.workers_available +=1;
            cr_compost1.producing = 0;
            cr_compost1.ongoing = 0;
            if (worker01.crafting==0 & worker01.busy==0) {
                document.getElementById("zeit_worker01").innerHTML = "";  
                document.getElementById("worker1_task").innerHTML = '<img src="Images/idle.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Ready for new task'; 
            }
            if (worker02.crafting==0 & worker02.busy==0) {
                document.getElementById("zeit_worker02").innerHTML = "";  
                document.getElementById("worker2_task").innerHTML = '<img src="Images/idle.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Ready for new task'; 
            }
            if (worker03.crafting==0 & worker03.busy==0) {
                document.getElementById("zeit_worker03").innerHTML = "";  
                document.getElementById("worker3_task").innerHTML = '<img src="Images/idle.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Ready for new task'; 
            }
        }
    }
    if (worker.crafting == "Robot") {
        worker.crafting_zeit -= 1;
        if (worker==worker01) {
            document.getElementById("zeit_worker01").innerHTML = "("+timetracker(worker.crafting_zeit)+"&nbsp;left)"; 
        }
        if (worker==worker02) {
            document.getElementById("zeit_worker02").innerHTML = "("+timetracker(worker.crafting_zeit)+"&nbsp;left)"; 
        }
        if (worker==worker03) {
            document.getElementById("zeit_worker03").innerHTML = "("+timetracker(worker.crafting_zeit)+"&nbsp;left)"; 
        }
        if (worker.crafting_zeit==0) {
            worker.crafting = 0;
            worker.busy = 0;
            state.workers_available +=2;
            state.workers_total +=1;
            if (state.workers_total==2) {
                worker02.busy=0;
                $(document).ready(function() {
                    $('#worker02div').show();
                });
            }
            if (state.workers_total==3) {
                worker03.busy=0;
                $(document).ready(function() {
                    $('#worker03div').show();
                });
            }
            cr_robot1.producing = 0;
            cr_robot1.ongoing = 0;
            if (worker01.crafting==0 & worker01.busy==0) {
                document.getElementById("zeit_worker01").innerHTML = "";  
                document.getElementById("worker1_task").innerHTML = '<img src="Images/idle.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Ready for new task'; 
            }
            if (worker02.crafting==0 & worker02.busy==0) {
                document.getElementById("zeit_worker02").innerHTML = "";  
                document.getElementById("worker2_task").innerHTML = '<img src="Images/idle.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Ready for new task'; 
            }
            if (worker03.crafting==0 & worker03.busy==0) {
                document.getElementById("zeit_worker03").innerHTML = "";  
                document.getElementById("worker3_task").innerHTML = '<img src="Images/idle.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Ready for new task'; 
            }
            
            //task005trigger();
            //task011trigger();
        }
    }
}

var cr_compost1 = {
    q: 1,
    ow: 1,
    ow_original: 1,
    time: 5,
    time_original: 5,
    ongoing: 0,
    producing: 0,
}

var cr_robot1 = {
    ongoing: 0,
    producing: 0,
}

function craft_compost1() {
    if (state.workers_available>0) {
        if (cr_compost1.ongoing==0) {
            if (worker01.busy==0) {
                if (resources.organic_waste>=cr_compost1.ow) {
                    cr_compost1.ongoing=1;
                    state.workers_available -=1;
                    worker01.busy =1;
                    worker01.crafting = "Compost";
                    resources.organic_waste = resources.organic_waste-cr_compost1.ow;
                    document.getElementById("organic_waste").innerHTML = resources.organic_waste;
                    cr_compost1.producing = cr_compost1.q;
                    worker01.crafting_zeit = cr_compost1.time;
                    worker01.crafting_zeitone = cr_compost1.time_original;
                    document.getElementById("zeit_worker01").innerHTML = "("+timetracker(worker01.crafting_zeit)+"&nbsp;left)";
                    document.getElementById("worker1_task").innerHTML = '<img src="Images/crafting.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Crafting'; 
                    
                    cr_compost1.q =1;
                    document.getElementById("cr_compost1_q").innerHTML= cr_compost1.q;
                    cr_compost1.ow = cr_compost1.q*cr_compost1.ow_original;
                    document.getElementById("cr_compost1_ow").innerHTML= cr_compost1.ow;
                    cr_compost1.time = cr_compost1.q*cr_compost1.time_original;
                    document.getElementById("cr_compost1_time").innerHTML= timetracker(cr_compost1.time);
                }
                else {
                    document.getElementById("snack_message").innerText = "Not enough resources";
                    var snackb = document.getElementById("snackbar");
                    snackb.className = "show";
                    setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
                }
            }
            else if (worker02.busy==0) {
                if (resources.organic_waste>=cr_compost1.ow) {
                    cr_compost1.ongoing=1;
                    state.workers_available -=1;
                    worker02.busy =1;
                    worker02.crafting = "Compost";
                    resources.organic_waste = resources.organic_waste-cr_compost1.ow;
                    document.getElementById("organic_waste").innerHTML = resources.organic_waste;
                    cr_compost1.producing = cr_compost1.q;
                    worker02.crafting_zeit = cr_compost1.time;
                    worker02.crafting_zeitone = cr_compost1.time_original;
                    document.getElementById("zeit_worker02").innerHTML = "("+timetracker(worker02.crafting_zeit)+"&nbsp;left)";
                    document.getElementById("worker2_task").innerHTML = '<img src="Images/crafting.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Crafting'; 
                    
                    cr_compost1.q =1;
                    document.getElementById("cr_compost1_q").innerHTML= cr_compost1.q;
                    cr_compost1.ow = cr_compost1.q*cr_compost1.ow_original;
                    document.getElementById("cr_compost1_ow").innerHTML= cr_compost1.ow;
                    cr_compost1.time = cr_compost1.q*cr_compost1.time_original;
                    document.getElementById("cr_compost1_time").innerHTML= timetracker(cr_compost1.time);
                }
                else {
                    document.getElementById("snack_message").innerText = "Not enough resources";
                    var snackb = document.getElementById("snackbar");
                    snackb.className = "show";
                    setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
                }
            }
            else if (worker03.busy==0) {
                console.log ("Here");
                if (resources.organic_waste>=cr_compost1.ow) {
                    console.log ("Here2");
                    cr_compost1.ongoing=1;
                    state.workers_available -=1;
                    worker03.busy =1;
                    worker03.crafting = "Compost";
                    resources.organic_waste = resources.organic_waste-cr_compost1.ow;
                    document.getElementById("organic_waste").innerHTML = resources.organic_waste;
                    cr_compost1.producing = cr_compost1.q;
                    worker03.crafting_zeit = cr_compost1.time;
                    worker03.crafting_zeitone = cr_compost1.time_original;
                    document.getElementById("zeit_worker03").innerHTML = "("+timetracker(worker03.crafting_zeit)+"&nbsp;left)";
                    document.getElementById("worker3_task").innerHTML = '<img src="Images/crafting.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Crafting'; 
                    
                    cr_compost1.q =1;
                    document.getElementById("cr_compost1_q").innerHTML= cr_compost1.q;
                    cr_compost1.ow = cr_compost1.q*cr_compost1.ow_original;
                    document.getElementById("cr_compost1_ow").innerHTML= cr_compost1.ow;
                    cr_compost1.time = cr_compost1.q*cr_compost1.time_original;
                    document.getElementById("cr_compost1_time").innerHTML= timetracker(cr_compost1.time);
                }
                else {
                    document.getElementById("snack_message").innerText = "Not enough resources";
                    var snackb = document.getElementById("snackbar");
                    snackb.className = "show";
                    setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
                }
            }
        }
        else {
                document.getElementById("snack_message").innerText = "Crafting compost already on the way";
                var snackb = document.getElementById("snackbar");
                snackb.className = "show";
                setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
        }
    }
    else {
        document.getElementById("snack_message").innerText = "No workers available";
        var snackb = document.getElementById("snackbar");
        snackb.className = "show";
        setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
    }
}

function craft_robot1() {
    if (state.workers_total<3) { //For later electricity check, for now just a limiter
        if (state.workers_available>0) {
            if (cr_robot1.ongoing==0) {
                if (worker01.busy==0) {
                    if (resources.bolt>=5 & resources.metal>=3 & resources.wire>=2 & resources.board>=1) {
                        cr_robot1.ongoing=1;
                        state.workers_available -=1;
                        worker01.busy =1;
                        worker01.crafting = "Robot";
                        resources.bolt = resources.bolt-5;
                        document.getElementById("bolt").innerHTML = resources.bolt;
                        document.getElementById("shop_bolt").innerText = resources.bolt;
                        resources.metal = resources.metal-3;
                        document.getElementById("metal").innerHTML = resources.metal;
                        document.getElementById("shop_metal").innerText = resources.metal;
                        resources.wire = resources.wire-2;
                        document.getElementById("wire").innerHTML = resources.wire;
                        document.getElementById("shop_wire").innerText = resources.wire;
                        resources.board = resources.board-1;
                        document.getElementById("board").innerHTML = resources.board;
                        document.getElementById("shop_board").innerText = resources.board;
                        cr_robot1.producing = 1;
                        worker01.crafting_zeit = 180;
                        document.getElementById("zeit_worker01").innerHTML = "("+timetracker(worker01.crafting_zeit)+"&nbsp;left)";
                        document.getElementById("worker1_task").innerHTML = '<img src="Images/crafting.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Crafting'; 
                    }
                    else {
                        document.getElementById("snack_message").innerText = "Not enough resources";
                        var snackb = document.getElementById("snackbar");
                        snackb.className = "show";
                        setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
                    }
                }
                else if (worker02.busy==0) {
                    if (resources.bolt>=5 & resources.metal>=3 & resources.wire>=2 & resources.board>=1) {
                        cr_robot1.ongoing=1;
                        state.workers_available -=1;
                        worker02.busy =1;
                        worker02.crafting = "Robot";
                        resources.bolt = resources.bolt-5;
                        document.getElementById("bolt").innerHTML = resources.bolt;
                        document.getElementById("shop_bolt").innerText = resources.bolt;
                        resources.metal = resources.metal-3;
                        document.getElementById("metal").innerHTML = resources.metal;
                        document.getElementById("shop_metal").innerText = resources.metal;
                        resources.wire = resources.wire-2;
                        document.getElementById("wire").innerHTML = resources.wire;
                        document.getElementById("shop_wire").innerText = resources.wire;
                        resources.board = resources.board-1;
                        document.getElementById("board").innerHTML = resources.board;
                        document.getElementById("shop_board").innerText = resources.board;
                        cr_robot1.producing = 1;
                        worker02.crafting_zeit = 180;
                        document.getElementById("zeit_worker02").innerHTML = "("+timetracker(worker02.crafting_zeit)+"&nbsp;left)";
                        document.getElementById("worker2_task").innerHTML = '<img src="Images/crafting.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Crafting'; 
                    }
                    else {
                        document.getElementById("snack_message").innerText = "Not enough resources";
                        var snackb = document.getElementById("snackbar");
                        snackb.className = "show";
                        setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
                    }
                }
                else if (worker03.busy==0) {
                    if (resources.bolt>=5 & resources.metal>=3 & resources.wire>=2 & resources.board>=1) {
                        cr_robot1.ongoing=1;
                        state.workers_available -=1;
                        worker03.busy =1;
                        worker03.crafting = "Robot";
                        resources.bolt = resources.bolt-5;
                        document.getElementById("bolt").innerHTML = resources.bolt;
                        document.getElementById("shop_bolt").innerText = resources.bolt;
                        resources.metal = resources.metal-3;
                        document.getElementById("metal").innerHTML = resources.metal;
                        document.getElementById("shop_metal").innerText = resources.metal;
                        resources.wire = resources.wire-2;
                        document.getElementById("wire").innerHTML = resources.wire;
                        document.getElementById("shop_wire").innerText = resources.wire;
                        resources.board = resources.board-1;
                        document.getElementById("board").innerHTML = resources.board;
                        document.getElementById("shop_board").innerText = resources.board;
                        cr_robot1.producing = 1;
                        worker03.crafting_zeit = 180;
                        document.getElementById("zeit_worker03").innerHTML = "("+timetracker(worker03.crafting_zeit)+"&nbsp;left)";
                        document.getElementById("worker3_task").innerHTML = '<img src="Images/crafting.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Crafting'; 
                    }
                    else {
                        document.getElementById("snack_message").innerText = "Not enough resources";
                        var snackb = document.getElementById("snackbar");
                        snackb.className = "show";
                        setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
                    }
                } 
            }
            else {
                document.getElementById("snack_message").innerText = "Crafting robot already on the way";
                var snackb = document.getElementById("snackbar");
                snackb.className = "show";
                setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
            }
        }
        else {
            document.getElementById("snack_message").innerText = "No workers available";
            var snackb = document.getElementById("snackbar");
            snackb.className = "show";
            setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
        }
    }
    else {
    document.getElementById("snack_message").innerText = "Worker limit reached";
        var snackb = document.getElementById("snackbar");
        snackb.className = "show";
        setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
    }
}

var cr_compost1_m = document.getElementById("cr_compost1_m");
var cr_compost1_p = document.getElementById("cr_compost1_p");

cr_compost1_m.onclick = function() {
    if (cr_compost1.q>1) {
        cr_compost1.q -=1;
        document.getElementById("cr_compost1_q").innerHTML= cr_compost1.q;
        cr_compost1.ow = cr_compost1.q*cr_compost1.ow_original;
        document.getElementById("cr_compost1_ow").innerHTML= cr_compost1.ow;
        cr_compost1.time = cr_compost1.q*cr_compost1.time_original;
        document.getElementById("cr_compost1_time").innerHTML= timetracker(cr_compost1.time);
    }
}

cr_compost1_p.onclick = function() {
    if (cr_compost1.q<=98) {
        cr_compost1.q +=1;
        document.getElementById("cr_compost1_q").innerHTML= cr_compost1.q;
        cr_compost1.ow = cr_compost1.q*cr_compost1.ow_original;
        document.getElementById("cr_compost1_ow").innerHTML= cr_compost1.ow;
        cr_compost1.time = cr_compost1.q*cr_compost1.time_original;
        document.getElementById("cr_compost1_time").innerHTML= timetracker(cr_compost1.time);
    }
}
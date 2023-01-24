/*1 Sekunden Intervallfunktion*/
setInterval(function() {    
    menu_change();
    menu_shop_change();

    if (worker01.expedition>0) {
        worker01.expedition_zeit -= 1;
        document.getElementById("zeit_worker01").innerHTML = "("+worker01.expedition_zeit+"&nbsp;seconds left)";  
        seedling_countdown(worker01);
        if (worker01.expedition==0) {
            document.getElementById("zeit_worker01").innerHTML = "";  
            document.getElementById("worker1_task").innerHTML = '<img src="Images/idle.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Ready for new task'; 
        }
    }
    if (worker02.expedition>0) {
        worker02.expedition_zeit -= 1;
        document.getElementById("zeit_worker02").innerHTML = "("+worker02.expedition_zeit+"&nbsp;seconds left)";  
        seedling_countdown(worker02);
        if (worker02.expedition==0) {
            document.getElementById("zeit_worker02").innerHTML = "";  
            document.getElementById("worker2_task").innerHTML = '<img src="Images/idle.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Ready for new task'; 
        }
    }
    if (worker03.expedition>0) {
        worker03.expedition_zeit -= 1;
        document.getElementById("zeit_worker03").innerHTML = "("+worker03.expedition_zeit+"&nbsp;seconds left)";  
        seedling_countdown(worker03);
        if (worker03.expedition==0) {
            document.getElementById("zeit_worker03").innerHTML = "";  
            document.getElementById("worker3_task").innerHTML = '<img src="Images/idle.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Ready for new task'; 
        }
    }
    
    crafting_countdown(worker01);
    crafting_countdown(worker02);
    crafting_countdown(worker03);
    
    learning_countdown();
    
    if (bonsai11.growing==1) {
        Bonsai_Growing_Intervall(bonsai11);
    }
    if (bonsai12.growing==1) {
        Bonsai_Growing_Intervall(bonsai12);
    }
    if (bonsai13.growing==1) {
        Bonsai_Growing_Intervall(bonsai13);
    }
    if (bonsai14.growing==1) {
        Bonsai_Growing_Intervall(bonsai14);
    }
    if (bonsai15.growing==1) {
        Bonsai_Growing_Intervall(bonsai15);
    }
    if (bonsai16.growing==1) {
        Bonsai_Growing_Intervall(bonsai16);
    }
    if (bonsai71.growing==1) {
        Bonsai_Growing_Intervall(bonsai71);
    }
    if (bonsai72.growing==1) {
        Bonsai_Growing_Intervall(bonsai72);
    }
    if (bonsai73.growing==1) {
        Bonsai_Growing_Intervall(bonsai73);
    }
    if (bonsai74.growing==1) {
        Bonsai_Growing_Intervall(bonsai74);
    }
    if (bonsai75.growing==1) {
        Bonsai_Growing_Intervall(bonsai75);
    }
    if (bonsai76.growing==1){
        Bonsai_Growing_Intervall(bonsai76);
    }
}, 1000)/*1 Sekunden Intervallfunktion*/
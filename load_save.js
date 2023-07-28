var time=0;
var w = new Worker ("interval.js");

window.onload = function () {
    $('#positionn_batch').select2({
            minimumResultsForSearch: Infinity
        });
    $('#menu').select2({
            minimumResultsForSearch: Infinity
        });
    $('#menu_shopping').select2({
            minimumResultsForSearch: Infinity
        });
    $('#neighborhood_time').select2({
            minimumResultsForSearch: Infinity
        });
    $('#cityboundaries_time').select2({
            minimumResultsForSearch: Infinity
        });
    
    menu_change();
    menu_shop_change();
    
    fetchimage_seedling ("a", seedling1);
    fetchimage_seedling ("b", seedling2);
    fetchimage_seedling ("c", seedling3);
    fetchimage_seedling ("d", seedling4);
    fetchimage_seedling ("e", seedling5);
    fetchimage_seedling ("f", seedling6);
    
    //document.getElementById("skill_growing_nr").innerHTML = skills.growing+1;
    //document.getElementById("skill_growing_level").innerHTML = skills.growing_level;
    //document.getElementById("skill_growing_time").innerHTML = skillgrowingtime[skills.growing];
    //document.getElementById("skill_shaping_nr").innerHTML = skills.shaping+1;
    //document.getElementById("skill_shaping_level").innerHTML = skills.shaping_level;
    //document.getElementById("skill_shaping_time").innerHTML = skillshapingtime[skills.shaping];
    
    //document.getElementById("skilllevel").innerHTML = skills.level;
    //document.getElementById("skillexp_left").innerHTML = skills.exp_nextlevel;
    //document.getElementById("money").innerHTML = resources.money;
    //document.getElementById("organic_waste").innerHTML = resources.organic_waste;
    //document.getElementById("compost").innerHTML = resources.compost;
    //document.getElementById("bolt").innerHTML = resources.bolt;
    //document.getElementById("shop_bolt").innerHTML = resources.bolt;
    //document.getElementById("metal").innerHTML = resources.metal;
    //document.getElementById("shop_metal").innerHTML = resources.metal;
    //document.getElementById("wire").innerHTML = resources.wire;
    //document.getElementById("shop_wire").innerHTML = resources.wire;
    //document.getElementById("board").innerHTML = resources.board;
    //document.getElementById("shop_board").innerHTML = resources.board;
    
    w.postMessage('Start');
}

/*1 Sekunden Intervallfunktion*/
w.addEventListener('message', function(e){
    time +=1;
    console.log(time);
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
})/*1 Sekunden Intervallfunktion*/


/*30 Sekunden Autosave Intervall*/
setInterval(function Autosave() {

    document.getElementById("snack_message").innerText = "Game saved";
    var snackb = document.getElementById("snackbar");
    snackb.className = "show";
    setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 1000);

}, 30000)
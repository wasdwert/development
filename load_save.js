var time=0;
var w = new Worker ("interval.js");

window.onload = function () {
    if (localStorage.getItem('state') == null) {

    }
    else {
        $(document).ready(function(){
            $('#NewGame').hide();
            $('#NewGame2').show();
            $('#LoadGame').show();
        });  
    }
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
    
    //crafting_countdown(worker01);
    //crafting_countdown(worker02);
    //crafting_countdown(worker03);
    
    //learning_countdown();
    
    if (bonsai001.growing==1) {
        Bonsai_Growing_Intervall(bonsai001);
    }
    if (bonsai002.growing==1) {
        Bonsai_Growing_Intervall(bonsai002);
    }
    if (bonsai003.growing==1) {
        Bonsai_Growing_Intervall(bonsai003);
    }
    if (bonsai004.growing==1) {
        Bonsai_Growing_Intervall(bonsai004);
    }
    if (bonsai005.growing==1) {
        Bonsai_Growing_Intervall(bonsai005);
    }
    if (bonsai006.growing==1) {
        Bonsai_Growing_Intervall(bonsai006);
    }
    if (bonsai007.growing==1) {
        Bonsai_Growing_Intervall(bonsai007);
    }
    if (bonsai008.growing==1) {
        Bonsai_Growing_Intervall(bonsai008);
    }
    if (bonsai009.growing==1) {
        Bonsai_Growing_Intervall(bonsai009);
    }
    if (bonsai010.growing==1) {
        Bonsai_Growing_Intervall(bonsai010);
    }
    if (bonsai011.growing==1) {
        Bonsai_Growing_Intervall(bonsai011);
    }
    if (bonsai012.growing==1){
        Bonsai_Growing_Intervall(bonsai012);
    }
    if (bonsai013.growing==1){
        Bonsai_Growing_Intervall(bonsai013);
    }
    if (bonsai014.growing==1){
        Bonsai_Growing_Intervall(bonsai014);
    }
    if (bonsai015.growing==1){
        Bonsai_Growing_Intervall(bonsai015);
    }
    if (bonsai016.growing==1){
        Bonsai_Growing_Intervall(bonsai016);
    }
    if (bonsai017.growing==1){
        Bonsai_Growing_Intervall(bonsai017);
    }
    if (bonsai018.growing==1){
        Bonsai_Growing_Intervall(bonsai018);
    }
    if (bonsai019.growing==1){
        Bonsai_Growing_Intervall(bonsai019);
    }
    if (bonsai020.growing==1){
        Bonsai_Growing_Intervall(bonsai020);
    }
})/*1 Sekunden Intervallfunktion*/


/*30 Sekunden Autosave Intervall*/
setInterval(function Autosave() {
    state.zeitsave = Date.now();
    localStorage.setItem('state', JSON.stringify(state));
    
    document.getElementById("snack_message").innerText = "Game saved";
    var snackb = document.getElementById("snackbar");
    snackb.className = "show";
    setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 1000);

}, 30000)

function NewGame() {
    startup(); 
}

function NewGame2() {
    startup(); 
}

function LoadGame() {
    state = JSON.parse(localStorage.getItem('state'));
    statistics = JSON.parse(localStorage.getItem('statistics'));
    worker01 = JSON.parse(localStorage.getItem('worker01'));
    worker02 = JSON.parse(localStorage.getItem('worker02'));
    worker03 = JSON.parse(localStorage.getItem('worker03'));
    exp_area01 = JSON.parse(localStorage.getItem('exp_area01'));
    exp_area02 = JSON.parse(localStorage.getItem('exp_area02'));
    seedling1 = JSON.parse(localStorage.getItem('seedling1'));
    seedling2 = JSON.parse(localStorage.getItem('seedling2'));
    seedling3 = JSON.parse(localStorage.getItem('seedling3'));
    seedling4 = JSON.parse(localStorage.getItem('seedling4'));
    seedling5 = JSON.parse(localStorage.getItem('seedling5'));
    seedling6 = JSON.parse(localStorage.getItem('seedling6'));
    startup();
    
}

function startup() {
    $(document).ready(function(){
        $('.startscreen').hide();
        $('.game').show();
    });  
    
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

function ViewOptions() {
    state.zeitsave = Date.now();
    localStorage.setItem('state', JSON.stringify(state));
    localStorage.setItem('statistics', JSON.stringify(statistics));
    localStorage.setItem('worker01', JSON.stringify(worker01));
    localStorage.setItem('worker02', JSON.stringify(worker02));
    localStorage.setItem('worker03', JSON.stringify(worker03));
    localStorage.setItem('exp_area01', JSON.stringify(exp_area01));
    localStorage.setItem('exp_area02', JSON.stringify(exp_area02));
    localStorage.setItem('seedling1', JSON.stringify(seedling1));
    localStorage.setItem('seedling2', JSON.stringify(seedling2));
    localStorage.setItem('seedling3', JSON.stringify(seedling3));
    localStorage.setItem('seedling4', JSON.stringify(seedling4));
    localStorage.setItem('seedling5', JSON.stringify(seedling5));
    localStorage.setItem('seedling6', JSON.stringify(seedling6));

    document.getElementById("snack_message").innerText = "Game saved";
    var snackb = document.getElementById("snackbar");
    snackb.className = "show";
    setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 1000);

}
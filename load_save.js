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
    if (contests.visible==1) {
        menu_contests_change();
    }
    
    if (worker01.expedition>0) {
        worker01.expedition_zeit -= 1;
        document.getElementById("zeit_worker01").innerHTML = "("+timetracker(worker01.expedition_zeit)+"&nbsp;left)";  
        seedling_countdown(worker01);
        if (worker01.expedition==0) {
            document.getElementById("zeit_worker01").innerHTML = "";  
            document.getElementById("worker1_task").innerHTML = '<img src="Images/idle.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Ready for new task';
            document.getElementById("worker1_task_mobile").innerHTML = '<img src="Images/idle.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Ready';
            document.getElementById("worker1_task_mobilexs").innerHTML = '<img src="Images/idle.svg" width="20" height="20">';   
        }
    }
    if (worker02.expedition>0) {
        worker02.expedition_zeit -= 1;
        document.getElementById("zeit_worker02").innerHTML = "("+timetracker(worker02.expedition_zeit)+"&nbsp;left)";  
        seedling_countdown(worker02);
        if (worker02.expedition==0) {
            document.getElementById("zeit_worker02").innerHTML = "";  
            document.getElementById("worker2_task").innerHTML = '<img src="Images/idle.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Ready for new task'; 
            document.getElementById("worker2_task_mobile").innerHTML = '<img src="Images/idle.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Ready';
            document.getElementById("worker2_task_mobilexs").innerHTML = '<img src="Images/idle.svg" width="20" height="20">'; 
        }
    }
    if (worker03.expedition>0) {
        worker03.expedition_zeit -= 1;
        document.getElementById("zeit_worker03").innerHTML = "("+timetracker(worker03.expedition_zeit)+"&nbsp;left)";  
        seedling_countdown(worker03);
        if (worker03.expedition==0) {
            document.getElementById("zeit_worker03").innerHTML = "";  
            document.getElementById("worker3_task").innerHTML = '<img src="Images/idle.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Ready for new task';
            document.getElementById("worker3_task_mobile").innerHTML = '<img src="Images/idle.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Ready';
            document.getElementById("worker3_task_mobilexs").innerHTML = '<img src="Images/idle.svg" width="20" height="20">';  
        }
    }
    
    crafting_countdown(worker01);
    crafting_countdown(worker02);
    crafting_countdown(worker03);
    
    learning_countdown();
    
    if (bonsai001.growing==1) {
        bonsai001.growing_zeit -=1;
        Bonsai_Growing_Intervall(bonsai001);
    }
    if (bonsai002.growing==1) {
        bonsai002.growing_zeit -=1;
        Bonsai_Growing_Intervall(bonsai002);
    }
    if (bonsai003.growing==1) {
        bonsai003.growing_zeit -=1;
        Bonsai_Growing_Intervall(bonsai003);
    }
    if (bonsai004.growing==1) {
        bonsai004.growing_zeit -=1;
        Bonsai_Growing_Intervall(bonsai004);
    }
    if (bonsai005.growing==1) {
        bonsai005.growing_zeit -=1;
        Bonsai_Growing_Intervall(bonsai005);
    }
    if (bonsai006.growing==1) {
        bonsai006.growing_zeit -=1;
        Bonsai_Growing_Intervall(bonsai006);
    }
    if (bonsai007.growing==1) {
        bonsai007.growing_zeit -=1;
        Bonsai_Growing_Intervall(bonsai007);
    }
    if (bonsai008.growing==1) {
        bonsai008.growing_zeit -=1;
        Bonsai_Growing_Intervall(bonsai008);
    }
    if (bonsai009.growing==1) {
        bonsai009.growing_zeit -=1;
        Bonsai_Growing_Intervall(bonsai009);
    }
    if (bonsai010.growing==1) {
        bonsai010.growing_zeit -=1;
        Bonsai_Growing_Intervall(bonsai010);
    }
    if (bonsai011.growing==1) {
        bonsai011.growing_zeit -=1;
        Bonsai_Growing_Intervall(bonsai011);
    }
    if (bonsai012.growing==1){
        bonsai012.growing_zeit -=1;
        Bonsai_Growing_Intervall(bonsai012);
    }
    if (bonsai013.growing==1){
        bonsai013.growing_zeit -=1;
        Bonsai_Growing_Intervall(bonsai013);
    }
    if (bonsai014.growing==1){
        bonsai014.growing_zeit -=1;
        Bonsai_Growing_Intervall(bonsai014);
    }
    if (bonsai015.growing==1){
        bonsai015.growing_zeit -=1;
        Bonsai_Growing_Intervall(bonsai015);
    }
    if (bonsai016.growing==1){
        bonsai016.growing_zeit -=1;
        Bonsai_Growing_Intervall(bonsai016);
    }
    if (bonsai017.growing==1){
        bonsai017.growing_zeit -=1;
        Bonsai_Growing_Intervall(bonsai017);
    }
    if (bonsai018.growing==1){
        bonsai018.growing_zeit -=1;
        Bonsai_Growing_Intervall(bonsai018);
    }
    if (bonsai019.growing==1){
        bonsai019.growing_zeit -=1;
        Bonsai_Growing_Intervall(bonsai019);
    }
    if (bonsai020.growing==1){
        bonsai020.growing_zeit -=1;
        Bonsai_Growing_Intervall(bonsai020);
    }
    
    if (clubs_leagues.ttg01c1>0) {
        clubs_leagues.ttg01c1-=1;
    }
    if (clubs_leagues.ttg01c2>0) {
        clubs_leagues.ttg01c2-=1;
    }
    if (clubs_leagues.ttg01c3>0) {
        clubs_leagues.ttg01c3-=1;
    }
    if (clubs_leagues.lea01c1>0) {
        clubs_leagues.lea01c1-=1;
    }
    fetchvalues();
    
    autosave +=1;
    if (autosave==30) {
        SaveGame();
        
        Snackbar("<img src='Images/save_white.svg' width='30' height='30'>&nbsp;Game autosaved", "snackbar_information", 3000, "snackbar_information show3s");
        
        autosave=0;
    }
})/*1 Sekunden Intervallfunktion*/


/*30 Sekunden Autosave Intervall*/
function SaveGame() {
    state.zeitsave = Date.now();
    localStorage.setItem('state', JSON.stringify(state));
    localStorage.setItem('statistics', JSON.stringify(statistics));
    localStorage.setItem('bondex', JSON.stringify(bondex));
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('milestones', JSON.stringify(milestones));
    localStorage.setItem('resources', JSON.stringify(resources));
    localStorage.setItem('equipment', JSON.stringify(equipment));
    localStorage.setItem('skills', JSON.stringify(skills));
    localStorage.setItem('clubs_leagues', JSON.stringify(clubs_leagues));
    localStorage.setItem('worker01', JSON.stringify(worker01));
    localStorage.setItem('worker02', JSON.stringify(worker02));
    localStorage.setItem('worker03', JSON.stringify(worker03));
    localStorage.setItem('exp_area01', JSON.stringify(exp_area01));
    localStorage.setItem('exp_area02', JSON.stringify(exp_area02));
    localStorage.setItem('cr_compost1', JSON.stringify(cr_compost1));
    localStorage.setItem('cr_robot1', JSON.stringify(cr_robot1));
    localStorage.setItem('seedling1', JSON.stringify(seedling1));
    localStorage.setItem('seedling2', JSON.stringify(seedling2));
    localStorage.setItem('seedling3', JSON.stringify(seedling3));
    localStorage.setItem('seedling4', JSON.stringify(seedling4));
    localStorage.setItem('seedling5', JSON.stringify(seedling5));
    localStorage.setItem('seedling6', JSON.stringify(seedling6));
    localStorage.setItem('bonsai001', JSON.stringify(bonsai001));
    localStorage.setItem('bonsai002', JSON.stringify(bonsai002));
    localStorage.setItem('bonsai003', JSON.stringify(bonsai003));
    localStorage.setItem('bonsai004', JSON.stringify(bonsai004));
    localStorage.setItem('bonsai005', JSON.stringify(bonsai005));
    localStorage.setItem('bonsai006', JSON.stringify(bonsai006));
    localStorage.setItem('bonsai007', JSON.stringify(bonsai007));
    localStorage.setItem('bonsai008', JSON.stringify(bonsai008));
    localStorage.setItem('bonsai009', JSON.stringify(bonsai009));
    localStorage.setItem('bonsai010', JSON.stringify(bonsai010));
    localStorage.setItem('bonsai011', JSON.stringify(bonsai011));
    localStorage.setItem('bonsai012', JSON.stringify(bonsai012));
    localStorage.setItem('bonsai013', JSON.stringify(bonsai013));
    localStorage.setItem('bonsai014', JSON.stringify(bonsai014));
    localStorage.setItem('bonsai015', JSON.stringify(bonsai015));
    localStorage.setItem('bonsai016', JSON.stringify(bonsai016));
    localStorage.setItem('bonsai017', JSON.stringify(bonsai017));
    localStorage.setItem('bonsai018', JSON.stringify(bonsai018));
    localStorage.setItem('bonsai019', JSON.stringify(bonsai019));
    localStorage.setItem('bonsai020', JSON.stringify(bonsai020));
}

function LoadGame() {
    state = JSON.parse(localStorage.getItem('state'));
    statistics = JSON.parse(localStorage.getItem('statistics'));
    bondex = JSON.parse(localStorage.getItem('bondex'));
    tasks = JSON.parse(localStorage.getItem('tasks'));
    milestones = JSON.parse(localStorage.getItem('milestones'));
    resources = JSON.parse(localStorage.getItem('resources'));
    equipment = JSON.parse(localStorage.getItem('equipment'));
    skills = JSON.parse(localStorage.getItem('skills'));
    clubs_leagues = JSON.parse(localStorage.getItem('clubs_leagues'));
    worker01 = JSON.parse(localStorage.getItem('worker01'));
    worker02 = JSON.parse(localStorage.getItem('worker02'));
    worker03 = JSON.parse(localStorage.getItem('worker03'));
    exp_area01 = JSON.parse(localStorage.getItem('exp_area01'));
    exp_area02 = JSON.parse(localStorage.getItem('exp_area02'));
    cr_compost1 = JSON.parse(localStorage.getItem('cr_compost1'));
    cr_robot1 = JSON.parse(localStorage.getItem('cr_robot1'));
    seedling1 = JSON.parse(localStorage.getItem('seedling1'));
    seedling2 = JSON.parse(localStorage.getItem('seedling2'));
    seedling3 = JSON.parse(localStorage.getItem('seedling3'));
    seedling4 = JSON.parse(localStorage.getItem('seedling4'));
    seedling5 = JSON.parse(localStorage.getItem('seedling5'));
    seedling6 = JSON.parse(localStorage.getItem('seedling6'));
    bonsai001 = JSON.parse(localStorage.getItem('bonsai001'));
    bonsai002 = JSON.parse(localStorage.getItem('bonsai002'));
    bonsai003 = JSON.parse(localStorage.getItem('bonsai003'));
    bonsai004 = JSON.parse(localStorage.getItem('bonsai004'));
    bonsai005 = JSON.parse(localStorage.getItem('bonsai005'));
    bonsai006 = JSON.parse(localStorage.getItem('bonsai006'));
    bonsai007 = JSON.parse(localStorage.getItem('bonsai007'));
    bonsai008 = JSON.parse(localStorage.getItem('bonsai008'));
    bonsai009 = JSON.parse(localStorage.getItem('bonsai009'));
    bonsai010 = JSON.parse(localStorage.getItem('bonsai010'));
    bonsai011 = JSON.parse(localStorage.getItem('bonsai011'));
    bonsai012 = JSON.parse(localStorage.getItem('bonsai012'));
    bonsai013 = JSON.parse(localStorage.getItem('bonsai013'));
    bonsai014 = JSON.parse(localStorage.getItem('bonsai014'));
    bonsai015 = JSON.parse(localStorage.getItem('bonsai015'));
    bonsai016 = JSON.parse(localStorage.getItem('bonsai016'));
    bonsai017 = JSON.parse(localStorage.getItem('bonsai017'));
    bonsai018 = JSON.parse(localStorage.getItem('bonsai018'));
    bonsai019 = JSON.parse(localStorage.getItem('bonsai019'));
    bonsai020 = JSON.parse(localStorage.getItem('bonsai020'));
    
    state.zeitjetzt = Date.now();
    state.zeitsincesave = Math.floor(state.zeitjetzt/1000) - Math.floor(state.zeitsave/1000);
    
    Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Welcome back!<br>&nbsp;You have been "+timetracker(state.zeitsincesave)+" seconds away.", "snackbar_information", 3000, "snackbar_information show3s");
    
    loadcheckup();
    startup();
}

function loadcheckup() {
    bondex_checkup();
    taskstones_checkup();
    
    bonsaicheckup (bonsai001);
    bonsaicheckup (bonsai002);
    bonsaicheckup (bonsai003);
    bonsaicheckup (bonsai004);
    bonsaicheckup (bonsai005);
    bonsaicheckup (bonsai006);
    bonsaicheckup (bonsai007);
    bonsaicheckup (bonsai008);
    bonsaicheckup (bonsai009);
    bonsaicheckup (bonsai010);
    bonsaicheckup (bonsai011);
    bonsaicheckup (bonsai012);
    bonsaicheckup (bonsai013);
    bonsaicheckup (bonsai014);
    bonsaicheckup (bonsai015);
    bonsaicheckup (bonsai016);
    bonsaicheckup (bonsai017);
    bonsaicheckup (bonsai018);
    bonsaicheckup (bonsai019);
    bonsaicheckup (bonsai020);
    workerexpeditioncheckup (worker01, "01", "1");
    workerexpeditioncheckup (worker02, "02", "2");
    workerexpeditioncheckup (worker03, "03", "3");
    
    for (let i = 0; i < state.zeitsincesave; i++) { 
        crafting_countdown(worker01);
        crafting_countdown(worker02);
        crafting_countdown(worker03);
    }
    
    if (clubs_leagues.ttg01c1>0) {
        if (state.zeitsincesave>=clubs_leagues.ttg01c1) {
            clubs_leagues.ttg01c1=0;
        }
        else {
            clubs_leagues.ttg01c1-=state.zeitsincesave;
        }
    }
    if (clubs_leagues.ttg01c2>0) {
        if (state.zeitsincesave>=clubs_leagues.ttg01c2) {
            clubs_leagues.ttg01c2=0;
        }
        else {
            clubs_leagues.ttg01c2-=state.zeitsincesave;
        }
    }
    if (clubs_leagues.ttg01c3>0) {
        if (state.zeitsincesave>=clubs_leagues.ttg01c3) {
            clubs_leagues.ttg01c3=0;
        }
        else {
            clubs_leagues.ttg01c3-=state.zeitsincesave;
        }
    }
    if (clubs_leagues.lea01c1>0) {
        if (state.zeitsincesave>=clubs_leagues.lea01c1) {
            clubs_leagues.lea01c1=0;
        }
        else {
            clubs_leagues.lea01c1-=state.zeitsincesave;
        }
    }
}

function bonsaicheckup (bonsaixx) {
    if (bonsaixx.growing==1) {
        if (state.zeitsincesave>bonsaixx.growing_zeit) {
            bonsaixx.growing_zeit=0;
            Bonsai_Growing_Intervall(bonsaixx);
        }
        else {
            bonsaixx.growing_zeit-=state.zeitsincesave;
            Bonsai_Growing_Intervall(bonsaixx);
        }
    }
}

function workerexpeditioncheckup (worker, a, b) {
    if (worker.expedition>0) {
        if (state.zeitsincesave>worker.expedition_zeit) {
            worker.expedition_zeit = 0; 
            seedling_countdown(worker);
            document.getElementById("zeit_worker"+a).innerHTML = "";  
            document.getElementById("worker"+b+"_task").innerHTML = '<img src="Images/idle.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Ready for new task';
            document.getElementById("worker"+b+"_task_mobile").innerHTML = '<img src="Images/idle.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Ready';
            document.getElementById("worker"+b+"_task_mobilexs").innerHTML = '<img src="Images/idle.svg" width="20" height="20">';   
        }
        else {
            worker.expedition_zeit -=state.zeitsincesave;
            document.getElementById("zeit_worker"+a).innerHTML = "("+timetracker(worker.expedition_zeit)+"&nbsp;left)";
            document.getElementById("worker"+b+"_task").innerHTML = '<img src="Images/expedition.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Expedition'; 
            document.getElementById("worker"+b+"_task_mobile").innerHTML = '<img src="Images/expedition.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Expedition';
            document.getElementById("worker"+b+"_task_mobilexs").innerHTML = '<img src="Images/expedition.svg" width="20" height="20">';
        }
    }
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
    $('#menu_mobile').select2({
            minimumResultsForSearch: Infinity
        });
    $('#menu_mobilexs').select2({
            minimumResultsForSearch: Infinity
        });
    $('#menu_shopping').select2({
            minimumResultsForSearch: Infinity
        });
    $('#menu_shopping_mobile').select2({
            minimumResultsForSearch: Infinity
        });
    $('#menu_style').select2({
            minimumResultsForSearch: Infinity
        });
    $('#menu_style_mobile').select2({
            minimumResultsForSearch: Infinity
        });
    $('#menu_contests').select2({
            minimumResultsForSearch: Infinity
        });
    $('#area01_time').select2({
            minimumResultsForSearch: Infinity
        });
    $('#area02_time').select2({
            minimumResultsForSearch: Infinity
        });
    
    menu_change();
    menu_shop_change();
    menu_contests_change();
    
    if (seedling1.styletype>0) {
        seedling1.styletype=0;
        seedling1.planting_choosen=0;
        document.getElementById("seedlinga_center").style.backgroundColor= "#f1f1f1";
        document.getElementById("seedlinga_center_mobile").style.backgroundColor= "#f1f1f1";
    }
    if (seedling1.treetype>0) {
        seedlinga_center.className = "darker_grey";
        seedlinga_center_mobile.className = "darker_grey";
        document.getElementById("seedlinga_center").style.cursor= "pointer";
        document.getElementById("seedlinga_center_mobile").style.cursor= "pointer";
        document.getElementById("seedlinga_price_sell").innerHTML = seedling1.price;
    }
    fetchimage_seedling ("a", seedling1);
    if (seedling2.styletype>0) {
        seedling2.styletype=0;
        seedling2.planting_choosen=0;
        document.getElementById("seedlingb_center").style.backgroundColor= "#f1f1f1";
        document.getElementById("seedlingb_center_mobile").style.backgroundColor= "#f1f1f1";
    }
    if (seedling2.treetype>0) {
        seedlingb_center.className = "darker_grey";
        seedlingb_center_mobile.className = "darker_grey";
        document.getElementById("seedlingb_center").style.cursor= "pointer";
        document.getElementById("seedlingb_center_mobile").style.cursor= "pointer";
        document.getElementById("seedlingb_price_sell").innerHTML = seedling2.price;
    }
    fetchimage_seedling ("b", seedling2);
    if (seedling3.styletype>0) {
        seedling3.styletype=0;
        seedling3.planting_choosen=0;
        document.getElementById("seedlingc_center").style.backgroundColor= "#f1f1f1";
        document.getElementById("seedlingc_center_mobile").style.backgroundColor= "#f1f1f1";
    }
    if (seedling3.treetype>0) {
        seedlingc_center.className = "darker_grey";
        seedlingc_center_mobile.className = "darker_grey";
        document.getElementById("seedlingc_center").style.cursor= "pointer";
        document.getElementById("seedlingc_center_mobile").style.cursor= "pointer";
        document.getElementById("seedlingc_price_sell").innerHTML = seedling3.price;
    }
    fetchimage_seedling ("c", seedling3);
    if (seedling4.styletype>0) {
        seedling4.styletype=0;
        seedling4.planting_choosen=0;
        document.getElementById("seedlingd_center").style.backgroundColor= "#f1f1f1";
        document.getElementById("seedlingd_center_mobile").style.backgroundColor= "#f1f1f1";
    }
    if (seedling4.treetype>0) {
        seedlingd_center.className = "darker_grey";
        seedlingd_center_mobile.className = "darker_grey";
        document.getElementById("seedlingd_center").style.cursor= "pointer";
        document.getElementById("seedlingd_center_mobile").style.cursor= "pointer";
        document.getElementById("seedlingd_price_sell").innerHTML = seedling4.price;
    }
    fetchimage_seedling ("d", seedling4);
    if (seedling5.styletype>0) {
        seedling5.styletype=0;
        seedling5.planting_choosen=0;
        document.getElementById("seedlinge_center").style.backgroundColor= "#f1f1f1";
        document.getElementById("seedlinge_center_mobile").style.backgroundColor= "#f1f1f1";
    }
    if (seedling5.treetype>0) {
        seedlinge_center.className = "darker_grey";
        seedlinge_center_mobile.className = "darker_grey";
        document.getElementById("seedlinge_center").style.cursor= "pointer";
        document.getElementById("seedlinge_center_mobile").style.cursor= "pointer";
        document.getElementById("seedlinge_price_sell").innerHTML = seedling5.price;
    }
    fetchimage_seedling ("e", seedling5);
    if (seedling6.styletype>0) {
        seedling6.styletype=0;
        seedling6.planting_choosen=0;
        document.getElementById("seedlingf_center").style.backgroundColor= "#f1f1f1";
        document.getElementById("seedlingf_center_mobile").style.backgroundColor= "#f1f1f1";
    }
    if (seedling6.treetype>0) {
        seedlingf_center.className = "darker_grey";
        seedlingf_center_mobile.className = "darker_grey";
        document.getElementById("seedlingf_center").style.cursor= "pointer";
        document.getElementById("seedlingf_center_mobile").style.cursor= "pointer";
        document.getElementById("seedlingf_price_sell").innerHTML = seedling6.price;
    }
    fetchimage_seedling ("f", seedling6);
    
    fetchunlocks();
    fetchvalues();
    
    w.postMessage('Start');
}

function ViewOptions() { //Current Saving Option//
    SaveGame();
    
    Snackbar("<img src='Images/save_white.svg' width='30' height='30'>&nbsp;Game saved", "snackbar_information", 3000, "snackbar_information show3s");
}
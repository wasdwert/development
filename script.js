var state = {
    random_species: 0,
    random_rarity: 0,
    random_nature: 0,
    bonsai_showing: 0,
    workers_total: 1,
    workers_available: 1,
    seedlings: 0,
    seedlings_ontheway: 0,
    workerstandin: 0,
}

var statistics = {
    seedlings_total: 0,
    bonsais_total: 0,
}

var task_triggers = {
    task000: 0,
    task001: 0,
    task002: 0,
    task003: 0,
    task004: 0,
    task005: 0,
    task006: 0,
    task007: 0,
    task008: 0,
    task009: 0,
    task010: 0,
    task011: 0,
    task012: 0,
    task013: 0,
}

var skills = {
    level: 0,
    exp_nextlevel: 20,
    robot: 0,
    compost: 0,
    growing: 0,
    growing_act: 0,
    growing_level: 2,
    shaping: 0,
    shaping_act: 0,
    shaping_level: 4,
    patience: 0,
}

var equipment = {
    backpack: 0,
    book_of_patience: 0,
    memory_chips: 0,
}

var resources = {
    money: 50,
    organic_waste: 0,
    compost: 100,
    bolt: 5,
    metal: 3,
    wire: 2,
    board: 1,
}

var worker01 = {
    busy: 0,
    expedition: 0,
    expedition_zeit: 0,
    expedition_time: 0,
    growing: 0,
    crafting: 0,
    crafting_zeit: 0,
    crafting_zeitone: 0,
    learning: 0,
    learning_zeit: 0,
}

var worker02 = {
    busy: 1,
    expedition: 0,
    expedition_zeit: 0,
    expedition_time: 0,
    growing: 0,
    crafting: 0,
    crafting_zeit: 0,
    crafting_zeitone: 0,
}

var worker03 = {
    busy: 1,
    expedition: 0,
    expedition_zeit: 0,
    expedition_time: 0,
    growing: 0,
    crafting: 0,
    crafting_zeit: 0,
    crafting_zeitone: 0,
}

var exp_area01 = {
    allspecies: 0,
    species01: 0,
    species02: 0,
    species03: 0,
    allpotential: 0,
    potential01: 0,
    potential02: 0,
}

var exp_area02 = {
    allspecies: 0,
    species01: 0,
    species02: 0,
    species03: 0,
    species04: 0,
    allpotential: 0,
    potential01: 0,
    potential02: 0,
    potential03: 0,
}

var x = 1;
var x_shop = 1;
var z = 0;
var snackb = 0;
var newname = "";
var nname = "";
var growtime= 0;
var foliage_new= 0;
var branches_new= 0;
var trunk_new= 0;
var roots_new= 0;
var leftpoints= 0;
var levels= 0;
var time=0;
var lastinterval=0;
var thisinterval=0;
var interval=1000;

window.onload = function () {
    w = new worker ('interval.js');
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
    
    document.getElementById("skill_growing_nr").innerHTML = skills.growing+1;
    document.getElementById("skill_growing_level").innerHTML = skills.growing_level;
    document.getElementById("skill_growing_time").innerHTML = skillgrowingtime[skills.growing];
    document.getElementById("skill_shaping_nr").innerHTML = skills.shaping+1;
    document.getElementById("skill_shaping_level").innerHTML = skills.shaping_level;
    document.getElementById("skill_shaping_time").innerHTML = skillshapingtime[skills.shaping];
    
    document.getElementById("skilllevel").innerHTML = skills.level;
    document.getElementById("skillexp_left").innerHTML = skills.exp_nextlevel;
    document.getElementById("money").innerHTML = resources.money;
    document.getElementById("organic_waste").innerHTML = resources.organic_waste;
    document.getElementById("compost").innerHTML = resources.compost;
    document.getElementById("bolt").innerHTML = resources.bolt;
    document.getElementById("shop_bolt").innerHTML = resources.bolt;
    document.getElementById("metal").innerHTML = resources.metal;
    document.getElementById("shop_metal").innerHTML = resources.metal;
    document.getElementById("wire").innerHTML = resources.wire;
    document.getElementById("shop_wire").innerHTML = resources.wire;
    document.getElementById("board").innerHTML = resources.board;
    document.getElementById("shop_board").innerHTML = resources.board;
    
}

function experience(exp) {
    if (exp<skills.exp_nextlevel) {
        skills.exp_nextlevel= skills.exp_nextlevel-exp;
        document.getElementById("skillexp_left").innerHTML = skills.exp_nextlevel;
    }
    else if (exp>=skills.exp_nextlevel) {
        exp = exp-skills.exp_nextlevel;
        skills.level +=1;
        skills.exp_nextlevel= skillexperience[skills.level];
        skills.exp_nextlevel= skills.exp_nextlevel-exp;
        document.getElementById("skilllevel").innerHTML = skills.level;
        document.getElementById("skillexp_left").innerHTML = skills.exp_nextlevel;
        
        document.getElementById("snack_message").innerHTML = "Reached skill level&nbsp;"+ skills.level +". Congratulations!";
        var snackb = document.getElementById("snackbar");
        snackb.className = "show";
        setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
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

/* Bonsai Growing Intervall*/
function Bonsai_Growing_Intervall(bonsaixx) {
    bonsaixx.growing_zeit -=1;
    if (bonsaixx.growing_zeit==0) {
        statistics.bonsais_total +=1;
        task002trigger();
        levels=bonsaixx.level_new-bonsaixx.level;
        bonsaixx.growing=0;
        bonsaixx.level=bonsaixx.level_new;
        bonsaixx.foliage=bonsaixx.foliage_new;
        bonsaixx.branches=bonsaixx.branches_new;
        bonsaixx.trunk=bonsaixx.trunk_new;
        bonsaixx.roots=bonsaixx.roots_new;
        bonsaixx.price = bonsaixx.level*bonsaixx.treetypegroup*bonsaixx.rarity;
        bonsaixx.level_new +=1;
        bonsaixx.level_lp =0;
        bonsaixx.foliage_lp =0;
        bonsaixx.branches_lp =0;
        bonsaixx.trunk_lp =0;
        bonsaixx.roots_lp =0;
        resources.organic_waste +=levels;
        document.getElementById("organic_waste").innerHTML= resources.organic_waste;
        if (bonsaixx.rarity==1) {
            cpdistribution(bonsaixx, level_cp_r1);
            cpdistributionaftercare(bonsaixx)
            bonsaixx.growing_zeit = grow_time_r1[bonsaixx.level];
            levels =levels*1;
            experience(levels);
        }
        if (bonsaixx.rarity==2) {
            cpdistribution(bonsaixx, level_cp_r2);
            cpdistributionaftercare(bonsaixx)
            bonsaixx.growing_zeit = grow_time_r2[bonsaixx.level];
            levels =levels*2;
            experience(levels);
        }
        if (bonsaixx.rarity==3) {
            cpdistribution(bonsaixx, level_cp_r3);
            cpdistributionaftercare(bonsaixx)
            bonsaixx.growing_zeit = grow_time_r3[bonsaixx.level];
            levels =levels*3;
            experience(levels);
        }
    
        levels=0;
        menu_change();
        menu_shop_change();
        
        task006trigger(bonsaixx);
        task008trigger(bonsaixx);
        if (bonsaixx.foliage+bonsaixx.branches+bonsaixx.trunk+bonsaixx.roots>=30 & skills.growing>=1 & task_triggers.task009<1) {
            task_triggers.task009 +=1;
        }
        task009trigger();
        if (bonsaixx.foliage>=20 || bonsaixx.branches>=20 || bonsaixx.trunk>=20 || bonsaixx.roots>=20) {
            if (skills.shaping>=1 & task_triggers.task012<1) {
                task_triggers.task012 +=1;
            }
        }
        task012trigger();
    }
    
    if (bonsaixx==bonsai11) {
        worker_growing_check(bonsaixx, 1);   
    }
    else if (bonsaixx==bonsai12) {
        worker_growing_check(bonsaixx, 2);   
    }
    else if (bonsaixx==bonsai13) {
        worker_growing_check(bonsaixx, 3);   
    }
    else if (bonsaixx==bonsai14) {
        worker_growing_check(bonsaixx, 4);   
    }
    else if (bonsaixx==bonsai15) {
        worker_growing_check(bonsaixx, 5);   
    }
    else if (bonsaixx==bonsai16) {
        worker_growing_check(bonsaixx, 6);   
    }
    else if (bonsaixx==bonsai71) {
        worker_growing_check(bonsaixx, 7);   
    }
    else if (bonsaixx==bonsai72) {
        worker_growing_check(bonsaixx, 8);   
    }
    else if (bonsaixx==bonsai73) {
        worker_growing_check(bonsaixx, 9);   
    }
    else if (bonsaixx==bonsai74) {
        worker_growing_check(bonsaixx, 10);   
    }
    else if (bonsaixx==bonsai75) {
        worker_growing_check(bonsaixx, 11);   
    }
    else if (bonsaixx==bonsai76) {
        worker_growing_check(bonsaixx, 12);   
    }
    
    if (state.bonsai_showing==1) {
        Bonsai_Growing(bonsai11);  
    }
    else if (state.bonsai_showing==2) {
        Bonsai_Growing(bonsai12);
    }
    else if (state.bonsai_showing==3) {
        Bonsai_Growing(bonsai13);
    }
    else if (state.bonsai_showing==4) {
        Bonsai_Growing(bonsai14);
    }
    else if (state.bonsai_showing==5) {
        Bonsai_Growing(bonsai15);
    }
    else if (state.bonsai_showing==6) {
        Bonsai_Growing(bonsai16);
    }
    else if (state.bonsai_showing==7) {
        Bonsai_Growing(bonsai71);
    }
    else if (state.bonsai_showing==8) {
        Bonsai_Growing(bonsai72);
    }
    else if (state.bonsai_showing==9) {
        Bonsai_Growing(bonsai73);
    }
    else if (state.bonsai_showing==10) {
        Bonsai_Growing(bonsai74);
    }
    else if (state.bonsai_showing==11) {
        Bonsai_Growing(bonsai75);
    }
    else if (state.bonsai_showing==12) {
        Bonsai_Growing(bonsai76);
    }
}

function worker_growing_check(bonsaixx, number) {
    if (worker01.growing==number) {
        if (bonsaixx.growing==1) {
            document.getElementById("zeit_worker01").innerHTML = "("+bonsaixx.growing_zeit+"&nbsp;seconds left)";
            document.getElementById("worker1_task").innerHTML = '<img src="Images/growing.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Growing'; 
        }
        else if (bonsaixx.growing==0) {
            worker01.growing = 0;
            worker01.busy = 0;
            state.workers_available +=1;
            document.getElementById("zeit_worker01").innerHTML = "";  
            document.getElementById("worker1_task").innerHTML = '<img src="Images/idle.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Ready for new task'; 
        }
    }
    else if (worker02.growing==number) {
        if (bonsaixx.growing==1) {
            document.getElementById("zeit_worker02").innerHTML = "("+bonsaixx.growing_zeit+"&nbsp;seconds left)";
            document.getElementById("worker2_task").innerHTML = '<img src="Images/growing.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Growing'; 
        }
        else if (bonsaixx.growing==0) {
            worker02.growing = 0;
            worker02.busy = 0;
            state.workers_available +=1;
            document.getElementById("zeit_worker02").innerHTML = "";  
            document.getElementById("worker2_task").innerHTML = '<img src="Images/idle.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Ready for new task'; 
        }
    }
    else if (worker03.growing==number) {
        if (bonsaixx.growing==1) {
            document.getElementById("zeit_worker03").innerHTML = "("+bonsaixx.growing_zeit+"&nbsp;seconds left)";
            document.getElementById("worker3_task").innerHTML = '<img src="Images/growing.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Growing'; 
        }
        else if (bonsaixx.growing==0) {
            worker03.growing = 0;
            worker03.busy = 0;
            state.workers_available +=1;
            document.getElementById("zeit_worker03").innerHTML = "";  
            document.getElementById("worker3_task").innerHTML = '<img src="Images/idle.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Ready for new task'; 
        }
    }
}

function seedling_countdown(worker) {
    if (worker.expedition_zeit==0) {
        if (seedling1.treetype<1) {
            randommaschine (seedling1, worker);
            fetchimage_seedlinga ();
            document.getElementById("seedlinga_price_sell").innerHTML = seedling1.price;
            document.getElementById("seedlinga_center").style.cursor= "pointer";
            seedlinga_center.className = "darker_grey";
            area_bonsais_found(seedling1, worker);
        }
        else if (seedling2.treetype<1) {
            randommaschine (seedling2, worker);
            fetchimage_seedlingb ();
            document.getElementById("seedlingb_price_sell").innerHTML = seedling2.price;
            document.getElementById("seedlingb_center").style.cursor= "pointer";
            seedlingb_center.className = "darker_grey";
            area_bonsais_found(seedling2, worker);
        }
        else if (seedling3.treetype<1) {
            randommaschine (seedling3, worker);
            fetchimage_seedlingc ();
            document.getElementById("seedlingc_price_sell").innerHTML = seedling3.price;
            document.getElementById("seedlingc_center").style.cursor= "pointer";
            seedlingc_center.className = "darker_grey";
            area_bonsais_found(seedling3, worker);
        }
        else if (seedling4.treetype<1) {
            randommaschine (seedling4, worker);
            fetchimage_seedlingd ();
            document.getElementById("seedlingd_price_sell").innerHTML = seedling4.price;
            document.getElementById("seedlingd_center").style.cursor= "pointer";
            seedlingd_center.className = "darker_grey";
            area_bonsais_found(seedling4, worker);
        }
        else if (seedling5.treetype<1) {
            randommaschine (seedling5, worker);
            fetchimage_seedlinge ();
            document.getElementById("seedlinge_price_sell").innerHTML = seedling5.price;
            document.getElementById("seedlinge_center").style.cursor= "pointer";
            seedlinge_center.className = "darker_grey";
            area_bonsais_found(seedling5, worker);
        }
        else if (seedling6.treetype<1) {
            randommaschine (seedling6, worker);
            fetchimage_seedlingf ();
            document.getElementById("seedlingf_price_sell").innerHTML = seedling6.price;
            document.getElementById("seedlingf_center").style.cursor= "pointer";
            seedlingf_center.className = "darker_grey";
            area_bonsais_found(seedling6, worker);
        }
    worker.expedition = 0;
    worker.busy = 0;
    state.workers_available +=1;
    state.seedlings +=1;
    statistics.seedlings_total +=1;
        
    task001trigger();
        
    task003trigger();
    
    document.getElementById("seedling_number").innerText = state.seedlings.toLocaleString('en', {minimumFractionDigits: 0});  
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

function resetcpdistribution() {
    if (bonsai11.rarity==1) {
        cpdistribution(bonsai11, level_cp_r1);
        cpdistributionaftercare(bonsai11);
    }
    if (bonsai11.rarity==2) {
        cpdistribution(bonsai11, level_cp_r2);
        cpdistributionaftercare(bonsai11);
    }
    if (bonsai11.rarity==3) {
        cpdistribution(bonsai11, level_cp_r3);
        cpdistributionaftercare(bonsai11);
    }
    if (bonsai12.rarity==1) {
        cpdistribution(bonsai12, level_cp_r1);
        cpdistributionaftercare(bonsai12);
    }
    if (bonsai12.rarity==2) {
        cpdistribution(bonsai12, level_cp_r2);
        cpdistributionaftercare(bonsai12);
    }
    if (bonsai12.rarity==3) {
        cpdistribution(bonsai12, level_cp_r3);
        cpdistributionaftercare(bonsai12);
    }
    if (bonsai13.rarity==1) {
        cpdistribution(bonsai13, level_cp_r1);
        cpdistributionaftercare(bonsai13);
    }
    if (bonsai13.rarity==2) {
        cpdistribution(bonsai13, level_cp_r2);
        cpdistributionaftercare(bonsai13);
    }
    if (bonsai13.rarity==3) {
        cpdistribution(bonsai13, level_cp_r3);
        cpdistributionaftercare(bonsai13);
    }
    if (bonsai14.rarity==1) {
        cpdistribution(bonsai14, level_cp_r1);
        cpdistributionaftercare(bonsai14);
    }
    if (bonsai14.rarity==2) {
        cpdistribution(bonsai14, level_cp_r2);
        cpdistributionaftercare(bonsai14);
    }
    if (bonsai14.rarity==3) {
        cpdistribution(bonsai14, level_cp_r3);
        cpdistributionaftercare(bonsai14);
    }
    if (bonsai15.rarity==1) {
        cpdistribution(bonsai15, level_cp_r1);
        cpdistributionaftercare(bonsai15);
    }
    if (bonsai15.rarity==2) {
        cpdistribution(bonsai15, level_cp_r2);
        cpdistributionaftercare(bonsai15);
    }
    if (bonsai15.rarity==3) {
        cpdistribution(bonsai15, level_cp_r3);
        cpdistributionaftercare(bonsai15);
    }
    if (bonsai16.rarity==1) {
        cpdistribution(bonsai16, level_cp_r1);
        cpdistributionaftercare(bonsai16);
    }
    if (bonsai16.rarity==2) {
        cpdistribution(bonsai16, level_cp_r2);
        cpdistributionaftercare(bonsai16);
    }
    if (bonsai16.rarity==3) {
        cpdistribution(bonsai16, level_cp_r3);
        cpdistributionaftercare(bonsai16);
    }
    if (bonsai71.rarity==1) {
        cpdistribution(bonsai71, level_cp_r1);
        cpdistributionaftercare(bonsai71);
    }
    if (bonsai71.rarity==2) {
        cpdistribution(bonsai71, level_cp_r2);
        cpdistributionaftercare(bonsai71);
    }
    if (bonsai71.rarity==3) {
        cpdistribution(bonsai71, level_cp_r3);
        cpdistributionaftercare(bonsai71);
    }
    if (bonsai72.rarity==1) {
        cpdistribution(bonsai72, level_cp_r1);
        cpdistributionaftercare(bonsai72);
    }
    if (bonsai72.rarity==2) {
        cpdistribution(bonsai72, level_cp_r2);
        cpdistributionaftercare(bonsai72);
    }
    if (bonsai72.rarity==3) {
        cpdistribution(bonsai72, level_cp_r3);
        cpdistributionaftercare(bonsai72);
    }
    if (bonsai73.rarity==1) {
        cpdistribution(bonsai73, level_cp_r1);
        cpdistributionaftercare(bonsai73);
    }
    if (bonsai73.rarity==2) {
        cpdistribution(bonsai73, level_cp_r2);
        cpdistributionaftercare(bonsai73);
    }
    if (bonsai73.rarity==3) {
        cpdistribution(bonsai73, level_cp_r3);
        cpdistributionaftercare(bonsai73);
    }
    if (bonsai74.rarity==1) {
        cpdistribution(bonsai74, level_cp_r1);
        cpdistributionaftercare(bonsai74);
    }
    if (bonsai74.rarity==2) {
        cpdistribution(bonsai74, level_cp_r2);
        cpdistributionaftercare(bonsai74);
    }
    if (bonsai74.rarity==3) {
        cpdistribution(bonsai74, level_cp_r3);
        cpdistributionaftercare(bonsai74);
    }
    if (bonsai75.rarity==1) {
        cpdistribution(bonsai75, level_cp_r1);
        cpdistributionaftercare(bonsai75);
    }
    if (bonsai75.rarity==2) {
        cpdistribution(bonsai75, level_cp_r2);
        cpdistributionaftercare(bonsai75);
    }
    if (bonsai75.rarity==3) {
        cpdistribution(bonsai75, level_cp_r3);
        cpdistributionaftercare(bonsai75);
    }
    if (bonsai76.rarity==1) {
        cpdistribution(bonsai76, level_cp_r1);
        cpdistributionaftercare(bonsai76);
    }
    if (bonsai76.rarity==2) {
        cpdistribution(bonsai76, level_cp_r2);
        cpdistributionaftercare(bonsai76);
    }
    if (bonsai76.rarity==3) {
        cpdistribution(bonsai76, level_cp_r3);
        cpdistributionaftercare(bonsai76);
    }
}

function crafting_countdown(worker) {
    if (worker.crafting == "Compost") {
        worker.crafting_zeit -= 1;
        worker.crafting_zeitone -=1;
        if (worker==worker01) {
            document.getElementById("zeit_worker01").innerHTML = "("+worker.crafting_zeit+"&nbsp;seconds left)"; 
        }
        if (worker==worker02) {
            document.getElementById("zeit_worker02").innerHTML = "("+worker.crafting_zeit+"&nbsp;seconds left)"; 
        }  
        if (worker==worker03) {
            document.getElementById("zeit_worker03").innerHTML = "("+worker.crafting_zeit+"&nbsp;seconds left)"; 
        } 
        if (worker.crafting_zeitone==0) {
            resources.compost +=1;
            document.getElementById("compost").innerText = resources.compost.toLocaleString('en', {minimumFractionDigits: 0}); 
            cr_compost.producing -=1;
            if (cr_compost.producing>0) {
                worker.crafting_zeitone = cr_compost.time_original;
            }
            task007trigger();
        }
        if (worker.crafting_zeit==0) {
            worker.crafting = 0;
            worker.busy = 0;
            state.workers_available +=1;
            cr_compost.producing = 0;
            cr_compost.ongoing = 0;
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
            document.getElementById("zeit_worker01").innerHTML = "("+worker.crafting_zeit+"&nbsp;seconds left)"; 
        }
        if (worker==worker02) {
            document.getElementById("zeit_worker02").innerHTML = "("+worker.crafting_zeit+"&nbsp;seconds left)"; 
        }
        if (worker==worker03) {
            document.getElementById("zeit_worker03").innerHTML = "("+worker.crafting_zeit+"&nbsp;seconds left)"; 
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
            cr_robot.producing = 0;
            cr_robot.ongoing = 0;
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
            
            task005trigger();
            task011trigger();
        }
    }
}

function area_bonsais_found(seedlingx, worker) {
    if (worker.expedition==1) {
        if (exp_area01.allspecies==1) {    
        }
        else {
            if (seedlingx.species==1) {
                exp_area01.species01=1;
                document.getElementById("area01_tt01").innerHTML = '<img src="Images/bonsai01_stamp.svg" width="35" height="35">';
                if (exp_area01.species01+exp_area01.species02+exp_area01.species03==3) {
                    exp_area01.allspecies=1;
                }
            }
            else if (seedlingx.species==2) {
                exp_area01.species02=1;
                document.getElementById("area01_tt02").innerHTML = '<img src="Images/bonsai02_stamp.svg" width="35" height="35">';
                if (exp_area01.species01+exp_area01.species02+exp_area01.species03==3) {
                    exp_area01.allspecies=1;
                }
            }
            else if (seedlingx.species==3) {
                exp_area01.species03=1;
                document.getElementById("area01_tt03").innerHTML = '<img src="Images/bonsai03_stamp.svg" width="35" height="35">';
                if (exp_area01.species01+exp_area01.species02+exp_area01.species03==3) {
                    exp_area01.allspecies=1;
                }
            }
        }
        if (exp_area01.allpotential==1) {
            
        }
        else {
            if (seedlingx.rarity==1) {
                exp_area01.potential01=1;
                document.getElementById("area01_po01").innerHTML = '<img src="Images/one_stamp.svg" width="35" height="35">';
                if (exp_area01.potential01+exp_area01.potential02==2) {
                    exp_area01.allpotential=1;
                }    
            }
            else if (seedlingx.rarity==2) {
                exp_area01.potential02=1;
                document.getElementById("area01_po02").innerHTML = '<img src="Images/two_stamp.svg" width="35" height="35">';
                if (exp_area01.potential01+exp_area01.potential02==2) {
                    exp_area01.allpotential=1;
                }  
            }
        }  
    }
    else if (worker.expedition==2) {
        if (exp_area02.allspecies==1) {    
        }
        else {
            if (seedlingx.species==1) {
                exp_area02.species01=1;
                document.getElementById("area02_tt01").innerHTML = '<img src="Images/bonsai01_stamp.svg" width="35" height="35">';
                if (exp_area02.species01+exp_area02.species02+exp_area02.species03+exp_area02.species04==4) {
                    exp_area02.allspecies=1;
                }
            }
            else if (seedlingx.species==2) {
                exp_area02.species02=1;
                document.getElementById("area02_tt02").innerHTML = '<img src="Images/bonsai02_stamp.svg" width="35" height="35">';
                if (exp_area02.species01+exp_area02.species02+exp_area02.species03+exp_area02.species04==4) {
                    exp_area02.allspecies=1;
                }
            }
            else if (seedlingx.species==3) {
                exp_area02.species03=1;
                document.getElementById("area02_tt03").innerHTML = '<img src="Images/bonsai03_stamp.svg" width="35" height="35">';
                if (exp_area02.species01+exp_area02.species02+exp_area02.species03+exp_area02.species04==4) {
                    exp_area02.allspecies=1;
                }
            }
            else if (seedlingx.species==4) {
                exp_area02.species04=1;
                document.getElementById("area02_tt04").innerHTML = '<img src="Images/bonsai04_stamp.svg" width="35" height="35">';
                if (exp_area02.species01+exp_area02.species02+exp_area02.species03+exp_area02.species04==4) {
                    exp_area02.allspecies=1;
                }
            }
        }
        if (exp_area02.allpotential==1) {  
        }
        else {
            if (seedlingx.rarity==1) {
                exp_area02.potential01=1;
                document.getElementById("area02_po01").innerHTML = '<img src="Images/one_stamp.svg" width="35" height="35">';
                if (exp_area02.potential01+exp_area02.potential02+exp_area02.potential03==3) {
                    exp_area02.allpotential=1;
                }    
            }
            else if (seedlingx.rarity==2) {
                exp_area02.potential02=1;
                document.getElementById("area02_po02").innerHTML = '<img src="Images/two_stamp.svg" width="35" height="35">';
                if (exp_area02.potential01+exp_area02.potential02+exp_area02.potential03==3) {
                    exp_area02.allpotential=1;
                }  
            }
            else if (seedlingx.rarity==3) {
                exp_area02.potential03=1;
                document.getElementById("area02_po03").innerHTML = '<img src="Images/three_stamp.svg" width="35" height="35">';
                if (exp_area02.potential01+exp_area02.potential02+exp_area02.potential03==3) {
                    exp_area02.allpotential=1;
                }  
            }
        }
    }
}

function randommaschine(seedlingx, worker) {
    if (statistics.seedlings_total==0) {
        seedlingx.species=1;
        seedlingx.treetype=1;
        seedlingx.treetypegroup=1;
        seedlingx.rarity=1;
        seedlingx.price= seedlingx.treetypegroup*seedlingx.rarity;
        experience(1);
    }
    else if (statistics.seedlings_total==4) {
        seedlingx.species=2;
        seedlingx.treetype=1;
        seedlingx.treetypegroup=1;
        seedlingx.rarity=1;
        seedlingx.price= seedlingx.treetypegroup*seedlingx.rarity;
        experience(1);

    }
    else {
    state.random_species =Math.random(); //Random number between 0 and 1
    state.random_rarity =Math.random();
    if (worker.expedition==1) {
        if (state.random_species>=0.95) {
            seedlingx.species=3;
            seedlingx.treetype=1;
            seedlingx.treetypegroup=1;
        }
        else if (state.random_species>=0.75) {
            seedlingx.species=2;
            seedlingx.treetype=1;
            seedlingx.treetypegroup=1;
        }
        else {
            seedlingx.species=1;
            seedlingx.treetype=1;
            seedlingx.treetypegroup=1;
        }
        if (worker.expedition_time==6) {
            seedlingx.rarity=1;
        }
        else if (worker.expedition_time==30) {
            if (state.random_rarity>=0.85) {
                seedlingx.rarity=2;
            }
            else {
                seedlingx.rarity=1;
            }
        }
        else if (worker.expedition_time==180) {
            if (state.random_rarity>=0.75) {
                seedlingx.rarity=2;
            }
            else {
                seedlingx.rarity=1;
            }
        }
        seedlingx.price= seedlingx.treetypegroup*seedlingx.rarity;
        experience(1);
    }
    else if (worker.expedition==2) {
        if (state.random_species>=0.95)  {
            seedlingx.species=4;
            seedlingx.treetype=2;
            seedlingx.treetypegroup=2;
        }
        else if (state.random_species>=0.80) {
            seedlingx.species=3;
            seedlingx.treetype=1;
            seedlingx.treetypegroup=1;
        }
        else if (state.random_species>=0.50) {
            seedlingx.species=2;
            seedlingx.treetype=1;
            seedlingx.treetypegroup=1;
        }
        else {
            seedlingx.species=1;
            seedlingx.treetype=1;
            seedlingx.treetypegroup=1;
        }
        if (worker.expedition_time==30) {
            if (state.random_rarity>=0.75) {
                seedlingx.rarity=2;
            }
            else {
                seedlingx.rarity=1;
            }
        }
        else if (worker.expedition_time==180) {
            if (state.random_rarity>=0.95) {
                seedlingx.rarity=3;
            }
            else if (state.random_rarity>=0.60) {
                seedlingx.rarity=2;
            }
            else {
                seedlingx.rarity=1;
            }
        }
        else if (worker.expedition_time==1200) {
            if (state.random_rarity>=0.90) {
                seedlingx.rarity=3;
            }
            else if (state.random_rarity>=0.50) {
                seedlingx.rarity=2;
            }
            else {
                seedlingx.rarity=1;
            }
        }
        seedlingx.price= seedlingx.treetypegroup*seedlingx.rarity;
        experience(2);
    }
    }
}

function fetchbonsaiimage_sell(bonsai){
    if (bonsai.treetype==0 & bonsai.rarity==0) {
        return '<img src="Images/b00r00.svg" width="50" height="50">';
    }
    else if (bonsai.treetype==1) {
        if (bonsai.rarity==1) {
            return '<img src="Images/b01r01.svg" width="50" height="50">';
        }
        else if (bonsai.rarity==2) {
            return '<img src="Images/b01r02.svg" width="50" height="50">';
        }
        else if (bonsai.rarity==3) {
            return '<img src="Images/b01r03.svg" width="50" height="50">';
        }
    }
    else if (bonsai.treetype==2) {
        if (bonsai.rarity==1) {
            return '<img src="Images/b02r01.svg" width="50" height="50">';
        }
        else if (bonsai.rarity==2) {
            return '<img src="Images/b02r02.svg" width="50" height="50">';
        }
        else if (bonsai.rarity==3) {
            return '<img src="Images/b02r03.svg" width="50" height="50">';
        }
    }
    else if (bonsai.treetype==3) {
        if (bonsai.rarity==1) {
            return '<img src="Images/b03r01.svg" width="50" height="50">';
        }
        else if (bonsai.rarity==2) {
            return '<img src="Images/b03r02.svg" width="50" height="50">';
        }
        else if (bonsai.rarity==3) {
            return '<img src="Images/b03r03.svg" width="50" height="50">';
        }
    }
}

function fetchimage_seedlinga () {
    document.getElementById("seedlinga_type").innerHTML = fetchbonsaiimage_s(seedling1);
    document.getElementById("seedlinga_type_c").innerHTML = fetchbonsaiimage_s(seedling1);
    
    document.getElementById("seedlinga_sell").style.backgroundImage = fetchbonsairarity_small(seedling1);
    document.getElementById("seedlinga_type_sell").innerHTML = fetchbonsaiimage_s(seedling1);
    
    document.getElementById("seedlinga_right").style.backgroundImage= fetchbonsairarity_small(seedling1);
    document.getElementById("seedlinga_center").style.backgroundImage= fetchbonsairarity(seedling1);
}

function fetchimage_seedlingb () {
    document.getElementById("seedlingb_type").innerHTML = fetchbonsaiimage_s(seedling2);
    document.getElementById("seedlingb_type_c").innerHTML = fetchbonsaiimage_s(seedling2);
    
    document.getElementById("seedlingb_sell").style.backgroundImage = fetchbonsairarity_small(seedling2);
    document.getElementById("seedlingb_type_sell").innerHTML = fetchbonsaiimage_s(seedling2);
    
    document.getElementById("seedlingb_right").style.backgroundImage= fetchbonsairarity_small(seedling2);
    document.getElementById("seedlingb_center").style.backgroundImage= fetchbonsairarity(seedling2);
}

function fetchimage_seedlingc () {
    document.getElementById("seedlingc_type").innerHTML = fetchbonsaiimage_s(seedling3);
    document.getElementById("seedlingc_type_c").innerHTML = fetchbonsaiimage_s(seedling3);
    
    document.getElementById("seedlingc_sell").style.backgroundImage = fetchbonsairarity_small(seedling3);
    document.getElementById("seedlingc_type_sell").innerHTML = fetchbonsaiimage_s(seedling3);
    
    document.getElementById("seedlingc_right").style.backgroundImage= fetchbonsairarity_small(seedling3);
    document.getElementById("seedlingc_center").style.backgroundImage= fetchbonsairarity(seedling3);
}

function fetchimage_seedlingd () {
    document.getElementById("seedlingd_type").innerHTML = fetchbonsaiimage_s(seedling4);
    document.getElementById("seedlingd_type_c").innerHTML = fetchbonsaiimage_s(seedling4);
    
    document.getElementById("seedlingd_sell").style.backgroundImage = fetchbonsairarity_small(seedling4);
    document.getElementById("seedlingd_type_sell").innerHTML = fetchbonsaiimage_s(seedling4);
    
    document.getElementById("seedlingd_right").style.backgroundImage= fetchbonsairarity_small(seedling4);
    document.getElementById("seedlingd_center").style.backgroundImage= fetchbonsairarity(seedling4);
}

function fetchimage_seedlinge () {
    document.getElementById("seedlinge_type").innerHTML = fetchbonsaiimage_s(seedling5);
    document.getElementById("seedlinge_type_c").innerHTML = fetchbonsaiimage_s(seedling5);
    
    document.getElementById("seedlinge_sell").style.backgroundImage = fetchbonsairarity_small(seedling5);
    document.getElementById("seedlinge_type_sell").innerHTML = fetchbonsaiimage_s(seedling5);
    
    document.getElementById("seedlinge_right").style.backgroundImage= fetchbonsairarity_small(seedling5);
    document.getElementById("seedlinge_center").style.backgroundImage= fetchbonsairarity(seedling5);
}

function fetchimage_seedlingf () {
    document.getElementById("seedlingf_type").innerHTML = fetchbonsaiimage_s(seedling6);
    document.getElementById("seedlingf_type_c").innerHTML = fetchbonsaiimage_s(seedling6);
    
    document.getElementById("seedlingf_sell").style.backgroundImage = fetchbonsairarity_small(seedling6);
    document.getElementById("seedlingf_type_sell").innerHTML = fetchbonsaiimage_s(seedling6);
    
    document.getElementById("seedlingf_right").style.backgroundImage= fetchbonsairarity_small(seedling6);
    document.getElementById("seedlingf_center").style.backgroundImage= fetchbonsairarity(seedling6);
}

function fetchbonsaiimage_s(x) {
    if (x.species==0) {
        return '<img src="Images/pot.svg" width="43.75" height="43.75">';
    }
    else if (x.species==1) {
        return '<img src="Images/bonsai01.svg" width="43.75" height="43.75">';
    }
    else if (x.species==2) {
        return '<img src="Images/bonsai02.svg" width="43.75" height="43.75">';
    }
    else if (x.species==3) {
        return '<img src="Images/bonsai03.svg" width="43.75" height="43.75">';
    }
    else {
        return '<img src="Images/bonsai04.svg" width="43.75" height="43.75">';
    }
}

function fetchbonsaiimage(x) {
    if (x.species==0) {
        return '<img src="Images/pot.svg" width="50" height="50">';
    }
    else if (x.species==1) {
        return '<img src="Images/bonsai01.svg" width="50" height="50">';
    }
    else if (x.species==2) {
        return '<img src="Images/bonsai02.svg" width="50" height="50">';
    }
    else if (x.species==3) {
        return '<img src="Images/bonsai03.svg" width="50" height="50">';
    }
    else {
        return '<img src="Images/bonsai04.svg" width="50" height="50">';
    }
}

function fetchbonsaiimage_xl(x) {
    if (x.species==0) {
        return '<img src="Images/pot.svg" width="100" height="100">';
    }
    else if (x.species==1) {
        return '<img src="Images/bonsai01.svg" width="100" height="100">';
    }
    else if (x.species==2) {
        return '<img src="Images/bonsai02.svg" width="100" height="100">';
    }
    else if (x.species==3) {
        return '<img src="Images/bonsai03.svg" width="100" height="100">';
    }
    else {
        return '<img src="Images/bonsai04.svg" width="100" height="100">';
    }
}

function fetchbonsairarity_small(x) {
    if (x.rarity==0) {
        return "url('Images/none_small.svg')";
    }
    else if (x.rarity==1) {
        return "url('Images/one_small.svg')";
    }
    else if (x.rarity==2) {
        return "url('Images/two_small.svg')";
    }
    else if (x.rarity==3) {
        return "url('Images/three_small.svg')";
    }
    else if (x.rarity==4) {
        return "url('Images/four_small.svg')";
    }
    else if (x.rarity==5) {
        return "url('Images/five_small.svg')";
    }
    else if (x.rarity==6) {
        return "url('Images/six_small.svg')";
    }
    else if (x.rarity==7) {
        return "url('Images/seven_small.svg')";
    }
    else if (x.rarity==8) {
        return "url('Images/eight_small.svg')";
    }
    else if (x.rarity==9) {
        return "url('Images/nine_small.svg')";
    }
    else {
        return "url('Images/ten_small.svg')";
    }
}

function fetchbonsairarity(x) {
    if (x.rarity==0) {
        return "url('Images/none.svg')";
    }
    else if (x.rarity==1) {
        return "url('Images/one.svg')";
    }
    else if (x.rarity==2) {
        return "url('Images/two.svg')";
    }
    else if (x.rarity==3) {
        return "url('Images/three.svg')";
    }
    else if (x.rarity==4) {
        return "url('Images/four.svg')";
    }
    else if (x.rarity==5) {
        return "url('Images/five.svg')";
    }
    else if (x.rarity==6) {
        return "url('Images/six.svg')";
    }
    else if (x.rarity==7) {
        return "url('Images/seven.svg')";
    }
    else if (x.rarity==8) {
        return "url('Images/eight.svg')";
    }
    else if (x.rarity==9) {
        return "url('Images/nine.svg')";
    }
    else {
        return "url('Images/ten.svg')";
    }
}

function fetchbonsairarity_big(x) {
    if (x.rarity==0) {
        return "url('Images/none_big.svg')";
    }
    else if (x.rarity==1) {
        return "url('Images/one_big.svg')";
    }
    else if (x.rarity==2) {
        return "url('Images/two_big.svg')";
    }
    else if (x.rarity==3) {
        return "url('Images/three_big.svg')";
    }
    else if (x.rarity==4) {
        return "url('Images/four_big.svg')";
    }
    else if (x.rarity==5) {
        return "url('Images/five_big.svg')";
    }
    else if (x.rarity==6) {
        return "url('Images/six_big.svg')";
    }
    else if (x.rarity==7) {
        return "url('Images/seven_big.svg')";
    }
    else if (x.rarity==8) {
        return "url('Images/eight_big.svg')";
    }
    else if (x.rarity==9) {
        return "url('Images/nine_big.svg')";
    }
    else {
        return "url('Images/ten_big.svg')";
    }
}

function fetchbonsaimenu1() {
    document.getElementById("bonsaia_nr").innerText = "#1";
    document.getElementById("bonsaia_name").innerText = bonsai11.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaia_type").innerHTML = fetchbonsaiimage(bonsai11);
    document.getElementById("ButtonBonsaiA").style.backgroundImage= fetchbonsairarity(bonsai11);
    document.getElementById("bonsaia_level").innerText = bonsai11.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaia_cp").innerHTML = (Math.round((bonsai11.foliage+bonsai11.branches+bonsai11.trunk+bonsai11.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
        
    document.getElementById("bonsaib_nr").innerText = "#2";
    document.getElementById("bonsaib_name").innerText = bonsai12.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaib_type").innerHTML = fetchbonsaiimage(bonsai12);
    document.getElementById("ButtonBonsaiB").style.backgroundImage= fetchbonsairarity(bonsai12);
    document.getElementById("bonsaib_level").innerText = bonsai12.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaib_cp").innerHTML = (Math.round((bonsai12.foliage+bonsai12.branches+bonsai12.trunk+bonsai12.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
        
    document.getElementById("bonsaic_nr").innerText = "#3";
    document.getElementById("bonsaic_name").innerText = bonsai13.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaic_type").innerHTML = fetchbonsaiimage(bonsai13);
    document.getElementById("ButtonBonsaiC").style.backgroundImage= fetchbonsairarity(bonsai13);
    document.getElementById("bonsaic_level").innerText = bonsai13.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaic_cp").innerHTML = (Math.round((bonsai13.foliage+bonsai13.branches+bonsai13.trunk+bonsai13.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
        
    document.getElementById("bonsaid_nr").innerText = "#4";
    document.getElementById("bonsaid_name").innerText = bonsai14.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaid_type").innerHTML = fetchbonsaiimage(bonsai14);
    document.getElementById("ButtonBonsaiD").style.backgroundImage= fetchbonsairarity(bonsai14);
    document.getElementById("bonsaid_level").innerText = bonsai14.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaid_cp").innerHTML = (Math.round((bonsai14.foliage+bonsai14.branches+bonsai14.trunk+bonsai14.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
        
    document.getElementById("bonsaie_nr").innerText = "#5";
    document.getElementById("bonsaie_name").innerText = bonsai15.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaie_type").innerHTML = fetchbonsaiimage(bonsai15);
    document.getElementById("ButtonBonsaiE").style.backgroundImage= fetchbonsairarity(bonsai15);
    document.getElementById("bonsaie_level").innerText = bonsai15.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaie_cp").innerHTML = (Math.round((bonsai15.foliage+bonsai15.branches+bonsai15.trunk+bonsai15.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
        
    document.getElementById("bonsaif_nr").innerText = "#6";
    document.getElementById("bonsaif_name").innerText = bonsai16.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaif_type").innerHTML = fetchbonsaiimage(bonsai16);
    document.getElementById("ButtonBonsaiF").style.backgroundImage= fetchbonsairarity(bonsai16);
    document.getElementById("bonsaif_level").innerText = bonsai16.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaif_cp").innerHTML = (Math.round((bonsai16.foliage+bonsai16.branches+bonsai16.trunk+bonsai16.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
}

function fetchbonsaimenu_shop1() {
    document.getElementById("bonsaia_price_sell").innerText = bonsai11.price.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaia_name_sell").innerText = bonsai11.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaia_type_sell").innerHTML = fetchbonsaiimage_s(bonsai11);
    document.getElementById("ButtonBonsaiA_sell").style.backgroundImage= fetchbonsairarity_small(bonsai11);
    document.getElementById("bonsaia_level_sell").innerText = bonsai11.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaia_cp_sell").innerHTML = (Math.round((bonsai11.foliage+bonsai11.branches+bonsai11.trunk+bonsai11.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
        
    document.getElementById("bonsaib_price_sell").innerText = bonsai12.price.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaib_name_sell").innerText = bonsai12.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaib_type_sell").innerHTML = fetchbonsaiimage_s(bonsai12);
    document.getElementById("ButtonBonsaiB_sell").style.backgroundImage= fetchbonsairarity_small(bonsai12);
    document.getElementById("bonsaib_level_sell").innerText = bonsai12.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaib_cp_sell").innerHTML = (Math.round((bonsai12.foliage+bonsai12.branches+bonsai12.trunk+bonsai12.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
        
    document.getElementById("bonsaic_price_sell").innerText = bonsai13.price.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaic_name_sell").innerText = bonsai13.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaic_type_sell").innerHTML = fetchbonsaiimage_s(bonsai13);
    document.getElementById("ButtonBonsaiC_sell").style.backgroundImage= fetchbonsairarity_small(bonsai13);
    document.getElementById("bonsaic_level_sell").innerText = bonsai13.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaic_cp_sell").innerHTML = (Math.round((bonsai13.foliage+bonsai13.branches+bonsai13.trunk+bonsai13.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
        
    document.getElementById("bonsaid_price_sell").innerText = bonsai14.price.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaid_name_sell").innerText = bonsai14.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaid_type_sell").innerHTML = fetchbonsaiimage_s(bonsai14);
    document.getElementById("ButtonBonsaiD_sell").style.backgroundImage= fetchbonsairarity_small(bonsai14);
    document.getElementById("bonsaid_level_sell").innerText = bonsai14.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaid_cp_sell").innerHTML = (Math.round((bonsai14.foliage+bonsai14.branches+bonsai14.trunk+bonsai14.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
        
    document.getElementById("bonsaie_price_sell").innerText = bonsai15.price.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaie_name_sell").innerText = bonsai15.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaie_type_sell").innerHTML = fetchbonsaiimage_s(bonsai15);
    document.getElementById("ButtonBonsaiE_sell").style.backgroundImage= fetchbonsairarity_small(bonsai15);
    document.getElementById("bonsaie_level_sell").innerText = bonsai15.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaie_cp_sell").innerHTML = (Math.round((bonsai15.foliage+bonsai15.branches+bonsai15.trunk+bonsai15.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
        
    document.getElementById("bonsaif_price_sell").innerText = bonsai16.price.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaif_name_sell").innerText = bonsai16.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaif_type_sell").innerHTML = fetchbonsaiimage_s(bonsai16);
    document.getElementById("ButtonBonsaiF_sell").style.backgroundImage= fetchbonsairarity_small(bonsai16);
    document.getElementById("bonsaif_level_sell").innerText = bonsai16.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaif_cp_sell").innerHTML = (Math.round((bonsai16.foliage+bonsai16.branches+bonsai16.trunk+bonsai16.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
}

function fetchbonsaimenu7() {
    document.getElementById("bonsaia_nr").innerText = "#7";
    document.getElementById("bonsaia_name").innerText = bonsai71.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaia_type").innerHTML = fetchbonsaiimage(bonsai71);
    document.getElementById("ButtonBonsaiA").style.backgroundImage= fetchbonsairarity(bonsai71);
    document.getElementById("bonsaia_level").innerText = bonsai71.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaia_cp").innerHTML = (Math.round((bonsai71.foliage+bonsai71.branches+bonsai71.trunk+bonsai71.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
        
    document.getElementById("bonsaib_nr").innerText = "#8";
    document.getElementById("bonsaib_name").innerText = bonsai72.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaib_type").innerHTML = fetchbonsaiimage(bonsai72);
    document.getElementById("ButtonBonsaiB").style.backgroundImage= fetchbonsairarity(bonsai72);
    document.getElementById("bonsaib_level").innerText = bonsai72.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaib_cp").innerHTML = (Math.round((bonsai72.foliage+bonsai72.branches+bonsai72.trunk+bonsai72.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
        
    document.getElementById("bonsaic_nr").innerText = "#9";
    document.getElementById("bonsaic_name").innerText = bonsai73.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaic_type").innerHTML = fetchbonsaiimage(bonsai73);
    document.getElementById("ButtonBonsaiC").style.backgroundImage= fetchbonsairarity(bonsai73);
    document.getElementById("bonsaic_level").innerText = bonsai73.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaic_cp").innerHTML = (Math.round((bonsai73.foliage+bonsai73.branches+bonsai73.trunk+bonsai73.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
        
    document.getElementById("bonsaid_nr").innerText = "#10";
    document.getElementById("bonsaid_name").innerText = bonsai74.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaid_type").innerHTML = fetchbonsaiimage(bonsai74);
    document.getElementById("ButtonBonsaiD").style.backgroundImage= fetchbonsairarity(bonsai74);
    document.getElementById("bonsaid_level").innerText = bonsai74.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaid_cp").innerHTML = (Math.round((bonsai74.foliage+bonsai74.branches+bonsai74.trunk+bonsai74.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
        
    document.getElementById("bonsaie_nr").innerText = "#11";
    document.getElementById("bonsaie_name").innerText = bonsai75.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaie_type").innerHTML = fetchbonsaiimage(bonsai75);
    document.getElementById("ButtonBonsaiE").style.backgroundImage= fetchbonsairarity(bonsai75);
    document.getElementById("bonsaie_level").innerText = bonsai75.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaie_cp").innerHTML = (Math.round((bonsai75.foliage+bonsai75.branches+bonsai75.trunk+bonsai75.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
        
    document.getElementById("bonsaif_nr").innerText = "#12";
    document.getElementById("bonsaif_name").innerText = bonsai76.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaif_type").innerHTML = fetchbonsaiimage(bonsai76);
    document.getElementById("ButtonBonsaiF").style.backgroundImage= fetchbonsairarity(bonsai76);
    document.getElementById("bonsaif_level").innerText = bonsai76.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaif_cp").innerHTML = (Math.round((bonsai76.foliage+bonsai76.branches+bonsai76.trunk+bonsai76.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
}

function fetchbonsaimenu_shop7() {
    document.getElementById("bonsaia_price_sell").innerText = bonsai71.price.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaia_name_sell").innerText = bonsai71.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaia_type_sell").innerHTML = fetchbonsaiimage_s(bonsai71);
    document.getElementById("ButtonBonsaiA_sell").style.backgroundImage= fetchbonsairarity_small(bonsai71);
    document.getElementById("bonsaia_level_sell").innerText = bonsai71.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaia_cp_sell").innerHTML = (Math.round((bonsai71.foliage+bonsai71.branches+bonsai71.trunk+bonsai71.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
        
    document.getElementById("bonsaib_price_sell").innerText = bonsai72.price.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaib_name_sell").innerText = bonsai72.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaib_type_sell").innerHTML = fetchbonsaiimage_s(bonsai72);
    document.getElementById("ButtonBonsaiB_sell").style.backgroundImage= fetchbonsairarity_small(bonsai72);
    document.getElementById("bonsaib_level_sell").innerText = bonsai72.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaib_cp_sell").innerHTML = (Math.round((bonsai72.foliage+bonsai72.branches+bonsai72.trunk+bonsai72.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
        
    document.getElementById("bonsaic_price_sell").innerText = bonsai73.price.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaic_name_sell").innerText = bonsai73.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaic_type_sell").innerHTML = fetchbonsaiimage_s(bonsai73);
    document.getElementById("ButtonBonsaiC_sell").style.backgroundImage= fetchbonsairarity_small(bonsai73);
    document.getElementById("bonsaic_level_sell").innerText = bonsai73.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaic_cp_sell").innerHTML = (Math.round((bonsai73.foliage+bonsai73.branches+bonsai73.trunk+bonsai73.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
        
    document.getElementById("bonsaid_price_sell").innerText = bonsai74.price.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaid_name_sell").innerText = bonsai74.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaid_type_sell").innerHTML = fetchbonsaiimage_s(bonsai74);
    document.getElementById("ButtonBonsaiD_sell").style.backgroundImage= fetchbonsairarity_small(bonsai74);
    document.getElementById("bonsaid_level_sell").innerText = bonsai74.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaid_cp_sell").innerHTML = (Math.round((bonsai74.foliage+bonsai74.branches+bonsai74.trunk+bonsai74.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
        
    document.getElementById("bonsaie_price_sell").innerText = bonsai75.price.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaie_name_sell").innerText = bonsai75.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaie_type_sell").innerHTML = fetchbonsaiimage_s(bonsai75);
    document.getElementById("ButtonBonsaiE_sell").style.backgroundImage= fetchbonsairarity_small(bonsai75);
    document.getElementById("bonsaie_level_sell").innerText = bonsai75.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaie_cp_sell").innerHTML = (Math.round((bonsai75.foliage+bonsai75.branches+bonsai75.trunk+bonsai75.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
        
    document.getElementById("bonsaif_price_sell").innerText = bonsai76.price.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaif_name_sell").innerText = bonsai76.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaif_type_sell").innerHTML = fetchbonsaiimage_s(bonsai76);
    document.getElementById("ButtonBonsaiF_sell").style.backgroundImage= fetchbonsairarity_small(bonsai76);
    document.getElementById("bonsaif_level_sell").innerText = bonsai76.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaif_cp_sell").innerHTML = (Math.round((bonsai76.foliage+bonsai76.branches+bonsai76.trunk+bonsai76.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
}

function expedition(place) {
    if (state.workers_available>0) {
        if (worker01.busy==0) {
            if (state.seedlings_ontheway<6) {
                state.workers_available -=1;
                worker01.busy =1;
                worker01.expedition=place;
                if (worker01.expedition==1) {
                    worker01.expedition_zeit=document.getElementById("neighborhood_time").value;
                    worker01.expedition_time=document.getElementById("neighborhood_time").value;
                    document.getElementById("zeit_worker01").innerHTML = "("+worker01.expedition_zeit+"&nbsp;seconds left)";
                    document.getElementById("worker1_task").innerHTML = '<img src="Images/expedition.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Expedition'; 
                    state.seedlings_ontheway +=1;
                }
                else if (worker01.expedition==2) {
                    worker01.expedition_zeit=document.getElementById("cityboundaries_time").value;
                    worker01.expedition_time=document.getElementById("cityboundaries_time").value;                    
                    document.getElementById("zeit_worker01").innerHTML = "("+worker01.expedition_zeit+"&nbsp;seconds left)";
                    document.getElementById("worker1_task").innerHTML = '<img src="Images/expedition.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Expedition'; 
                    state.seedlings_ontheway +=1;
                }
            }
            else {
                document.getElementById("snack_message").innerText = "Seedlings full/about to be";
                var snackb = document.getElementById("snackbar");
                snackb.className = "show";
                setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
            }
        } 
        else if (worker02.busy==0) {
            if (state.seedlings_ontheway<6) {
                state.workers_available -=1;
                worker02.busy =1;
                worker02.expedition=place;
                if (worker02.expedition==1) {
                    worker02.expedition_zeit=document.getElementById("neighborhood_time").value;
                    worker02.expedition_time=document.getElementById("neighborhood_time").value;
                    document.getElementById("zeit_worker02").innerHTML = "("+worker02.expedition_zeit+"&nbsp;seconds left)";
                    document.getElementById("worker2_task").innerHTML = '<img src="Images/expedition.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Expedition'; 
                    state.seedlings_ontheway +=1;
                }
                else if (worker02.expedition==2) {
                    worker02.expedition_zeit=document.getElementById("cityboundaries_time").value;
                    worker02.expedition_time=document.getElementById("cityboundaries_time").value;
                    document.getElementById("zeit_worker02").innerHTML = "("+worker02.expedition_zeit+"&nbsp;seconds left)";
                    document.getElementById("worker2_task").innerHTML = '<img src="Images/expedition.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Expedition'; 
                    state.seedlings_ontheway +=1;
                }
            }
            else {
                document.getElementById("snack_message").innerText = "Seedlings full/about to be";
                var snackb = document.getElementById("snackbar");
                snackb.className = "show";
                setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
            }
        }
        else if (worker03.busy==0) {
            if (state.seedlings_ontheway<6) {
                state.workers_available -=1;
                worker03.busy =1;
                worker03.expedition=place;
                if (worker03.expedition==1) {
                    worker03.expedition_zeit=document.getElementById("neighborhood_time").value;
                    worker03.expedition_time=document.getElementById("neighborhood_time").value;
                    document.getElementById("zeit_worker03").innerHTML = "("+worker03.expedition_zeit+"&nbsp;seconds left)";
                    document.getElementById("worker3_task").innerHTML = '<img src="Images/expedition.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Expedition'; 
                    state.seedlings_ontheway +=1;
                }
                else if (worker03.expedition==2) {
                    worker03.expedition_zeit=document.getElementById("cityboundaries_time").value;
                    worker03.expedition_time=document.getElementById("cityboundaries_time").value;                    
                    document.getElementById("zeit_worker03").innerHTML = "("+worker03.expedition_zeit+"&nbsp;seconds left)";
                    document.getElementById("worker3_task").innerHTML = '<img src="Images/expedition.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Expedition'; 
                    state.seedlings_ontheway +=1;
                }
            }
            else {
                document.getElementById("snack_message").innerText = "Seedlings full/about to be";
                var snackb = document.getElementById("snackbar");
                snackb.className = "show";
                setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
            }
        }
    }
    else {
        document.getElementById("snack_message").innerText = "No workers available";
        var snackb = document.getElementById("snackbar");
        snackb.className = "show";
        setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
    }
}

/* Header menu functions */
function ViewTasks() {
    $(document).ready(function(){
        $('.tasks').show();
        $('.expedition').hide();
        $('.crafting').hide();
        $('.learning').hide();
        $('.shopping').hide();
        $('.bonsai_details').hide();
        $('.bonsai_details_seedling').hide();
    });
}

function ViewExpedition() {
    $(document).ready(function(){
        $('.tasks').hide();
        $('.expedition').show();
        $('.crafting').hide();
        $('.learning').hide();
        $('.shopping').hide();
        $('.bonsai_details').hide();
        $('.bonsai_details_seedling').hide();
    });
}

function ViewCrafting() {
    if (task_triggers.task004==2) {
        $(document).ready(function(){
            $('.tasks').hide();
            $('.expedition').hide();
            $('.crafting').show();
            $('.learning').hide();
            $('.shopping').hide();
            $('.bonsai_details').hide();
            $('.bonsai_details_seedling').hide();
        });
    }
    else {}
}

function ViewLearning() {
    if (task_triggers.task003==2) {
        $(document).ready(function(){
            $('.tasks').hide();
            $('.expedition').hide();
            $('.crafting').hide();
            $('.learning').show();
            $('.shopping').hide();
            $('.bonsai_details').hide();
            $('.bonsai_details_seedling').hide();
        });
    }
    else {}
}

function ViewShopping() {
    if (task_triggers.task009==3) {
        $(document).ready(function(){
            $('.tasks').hide();
            $('.expedition').hide();
            $('.crafting').hide();
            $('.learning').hide();
            $('.shopping').show();
            $('.bonsai_details').hide();
            $('.bonsai_details_seedling').hide();
        });
    }
}

/* Bonsai Detail View */
function ViewBonsai_Details(z) {
    if (x==1) {
        if (z==1) {
            if (bonsai11.treetype==0) {
                $(document).ready(function(){
                $('.tasks').hide();
                $('.expedition').hide();
                $('.crafting').hide();
                $('.learning').hide();
                $('.shopping').hide();
                $('.bonsai_details').hide();
                $('.bonsai_details_seedling').show();
                });
                state.bonsai_showing=1;
            }
            else {
                Bonsai_Details(bonsai11); 
                state.bonsai_showing=1;
            }
        }
        else if (z==2) {
            if (bonsai12.treetype==0) {
                $(document).ready(function(){
                $('.tasks').hide();
                $('.expedition').hide();
                $('.crafting').hide();
                $('.learning').hide();
                $('.shopping').hide();
                $('.bonsai_details').hide();
                $('.bonsai_details_seedling').show();
                });
                state.bonsai_showing=2;
            }
            else {
                Bonsai_Details(bonsai12); 
                state.bonsai_showing=2;
            }
        }
        else if (z==3) {
            if (bonsai13.treetype==0) {
                $(document).ready(function(){
                $('.tasks').hide();
                $('.expedition').hide();
                $('.crafting').hide();
                $('.learning').hide();
                $('.shopping').hide();
                $('.bonsai_details').hide();
                $('.bonsai_details_seedling').show();
                });
                state.bonsai_showing=3;
            }
            else {
                Bonsai_Details(bonsai13);
                state.bonsai_showing=3;
            }
        }
        else if (z==4) {
            if (bonsai14.treetype==0) {
                $(document).ready(function(){
                $('.tasks').hide();
                $('.expedition').hide();
                $('.crafting').hide();
                $('.learning').hide();
                $('.shopping').hide();
                $('.bonsai_details').hide();
                $('.bonsai_details_seedling').show();
                });
                state.bonsai_showing=4;
            }
            else {
                Bonsai_Details(bonsai14);
                state.bonsai_showing=4;
            }
        }
        else if (z==5) {
            if (bonsai15.treetype==0) {
                $(document).ready(function(){
                $('.tasks').hide();
                $('.expedition').hide();
                $('.crafting').hide();
                $('.learning').hide();
                $('.shopping').hide();
                $('.bonsai_details').hide();
                $('.bonsai_details_seedling').show();
                });
                state.bonsai_showing=5;
            }
            else {
                Bonsai_Details(bonsai15);
                state.bonsai_showing=5;
            }
        }
        else if (z==6) {
            if (bonsai16.treetype==0) {
                $(document).ready(function(){
                $('.tasks').hide();
                $('.expedition').hide();
                $('.crafting').hide();
                $('.learning').hide();
                $('.shopping').hide();
                $('.bonsai_details').hide();
                $('.bonsai_details_seedling').show();
                });
                state.bonsai_showing=6;
            }
            else {
                Bonsai_Details(bonsai16);
                state.bonsai_showing=6;
            }
        }
    } 
    else if (x==7) {
        if (z==1) {
            if (bonsai71.treetype==0) {
                $(document).ready(function(){
                $('.tasks').hide();
                $('.expedition').hide();
                $('.crafting').hide();
                $('.learning').hide();
                $('.shopping').hide();
                $('.bonsai_details').hide();
                $('.bonsai_details_seedling').show();
                });
                state.bonsai_showing=7;
            }
            else {
                Bonsai_Details(bonsai71);
                state.bonsai_showing=7;
            }
        }
        else if (z==2) {
            if (bonsai72.treetype==0) {
                $(document).ready(function(){
                $('.tasks').hide();
                $('.expedition').hide();
                $('.crafting').hide();
                $('.learning').hide();
                $('.shopping').hide();
                $('.bonsai_details').hide();
                $('.bonsai_details_seedling').show();
                });
                state.bonsai_showing=8;
            }
            else {
                Bonsai_Details(bonsai72);
                state.bonsai_showing=8;
            }
        }
        else if (z==3) {
            if (bonsai73.treetype==0) {
                $(document).ready(function(){
                $('.tasks').hide();
                $('.expedition').hide();
                $('.crafting').hide();
                $('.learning').hide();
                $('.shopping').hide();
                $('.bonsai_details').hide();
                $('.bonsai_details_seedling').show();
                });
                state.bonsai_showing=9;
            }
            else {
                Bonsai_Details(bonsai73);
                state.bonsai_showing=9;
            }
        }
        else if (z==4) {
            if (bonsai74.treetype==0) {
                $(document).ready(function(){
                $('.tasks').hide();
                $('.expedition').hide();
                $('.crafting').hide();
                $('.learning').hide();
                $('.shopping').hide();
                $('.bonsai_details').hide();
                $('.bonsai_details_seedling').show();
                });
                state.bonsai_showing=10;
            }
            else {
                Bonsai_Details(bonsai74);
                state.bonsai_showing=10;
            }
        }
        else if (z==5) {
            if (bonsai75.treetype==0) {
                $(document).ready(function(){
                $('.tasks').hide();
                $('.expedition').hide();
                $('.crafting').hide();
                $('.learning').hide();
                $('.shopping').hide();
                $('.bonsai_details').hide();
                $('.bonsai_details_seedling').show();
                });
                state.bonsai_showing=11;
            }
            else {
                Bonsai_Details(bonsai75);
                state.bonsai_showing=11;
            }
        }
        else if (z==6) {
            if (bonsai76.treetype==0) {
                $(document).ready(function(){
                $('.tasks').hide();
                $('.expedition').hide();
                $('.crafting').hide();
                $('.learning').hide();
                $('.shopping').hide();
                $('.bonsai_details').hide();
                $('.bonsai_details_seedling').show();
                });
                state.bonsai_showing=12;
            }
            else {
                Bonsai_Details(bonsai76);
                state.bonsai_showing=12;
            }
        } 
    }
}

/* Bonsai Detail Loadout */
function Bonsai_Details(bonsaixx) {
    $(document).ready(function(){
        $('.tasks').hide();
        $('.expedition').hide();
        $('.crafting').hide();
        $('.learning').hide();
        $('.shopping').hide();
        $('.bonsai_details').show();
        $('.bonsai_details_seedling').hide();
        });
    Bonsai_Growing(bonsaixx);
    PositionChangeBox();
    $(document).ready(function() {
        $("#positionn_batch").html("<option value='1000'>Select box</option><option value='1001'>Box 1 - Bonsai #01-#06</option><option value='1007'>Box 2 - Bonsai #07-#12</option>");
        $("#positionn_place").html("<option value='00'>Select box first</option>");
        $('#positionn_place2').hide();
    });
}

/* Bonsai Menu Change */
function menu_change() {
    x = document.getElementById("menu").value;
    if (x==1) {
        fetchbonsaimenu1()
    }
    else if (x==7) {
        fetchbonsaimenu7()
    }
}

function menu_shop_change() {
    x_shop = document.getElementById("menu_shopping").value;
    if (x_shop==1) {
        fetchbonsaimenu_shop1()
    }
    else if (x_shop==7) {
        fetchbonsaimenu_shop7()
    }
}

/* Collapsible Menus - Main menu: Opened at start*/
function toggleCollapsibleSectionWithAnimation() {
	this.classList.toggle("active");
	var buttonId = this.id;
	var sectionId = buttonId.replace("button","section");
	var content = document.getElementById(sectionId);
    var mHeight = window.getComputedStyle(content).maxHeight;
	if (mHeight !== "0px"){
        content.style.maxHeight = "0px";
    } 
    else {
        content.style.maxHeight = "100%";
	}
}

/* Collapsible Menus - Main menu: Closed at start*/
function toggleCollapsibleSectionWithAnimation2() {
	this.classList.toggle("active2");
	var buttonId = this.id;
	var sectionId = buttonId.replace("button","section");
	var content = document.getElementById(sectionId);
    var mHeight = window.getComputedStyle(content).maxHeight;
	if (mHeight !== "100%"){
        content.style.maxHeight = "100%";
    } 
    else {
        content.style.maxHeight = "0px";
	}
}

function naturerandom() {
    state.random_nature =Math.random();
    if (state.random_nature>=0.9375) {
        return 1;
    }
    else if (state.random_nature>=0.875) {
        return 2;
    }
    else if (state.random_nature>=0.8125) {
        return 3;
    }
    else if (state.random_nature>=0.75) {
        return 4;
    }
    else if (state.random_nature>=0.6875) {
        return 5;
    }
    else if (state.random_nature>=0.625) {
        return 6;
    }
    else if (state.random_nature>=0.5625) {
        return 7;
    }
    else if (state.random_nature>=0.5) {
        return 8;
    }
    else if (state.random_nature>=0.4375) {
        return 9;
    }
    else if (state.random_nature>=0.375) {
        return 10;
    }
    else if (state.random_nature>=0.3125) {
        return 11;
    }
    else if (state.random_nature>=0.25) {
        return 12;
    }
    else if (state.random_nature>=0.1875) {
        return 13;
    }
    else if (state.random_nature>=0.125) {
        return 14;
    }
    else if (state.random_nature>=0.0625) {
        return 15;
    }
    else {
        return 16;
    }
}

/* Seedling Planting functions */
function ChooseSeedling(x) {
    if (x==1) {
        if (seedling1.treetype==0) {
            document.getElementById("snack_message").innerText = "No seedling available";
            var snackb = document.getElementById("snackbar");
            snackb.className = "show";
            setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
        } 
        else {
            if (seedling2.planting_choosen==1 || seedling3.planting_choosen==1 || seedling4.planting_choosen==1 || seedling5.planting_choosen==1 || seedling6.planting_choosen==1) {
                document.getElementById("snack_message").innerText = "Only one seedling can be choosen to plant";
                var snackb = document.getElementById("snackbar");
                snackb.className = "show";
                setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
                }
            else {
                if (seedling1.planting_choosen==0) {
                    document.getElementById("seedlinga_center").style.backgroundColor= "#bbb";
                    seedlingb_center.className = "";
                    seedlingc_center.className = "";
                    seedlingd_center.className = "";
                    seedlinge_center.className = "";
                    seedlingf_center.className = "";
                    document.getElementById("seedlingb_center").style.cursor= "auto";
                    document.getElementById("seedlingc_center").style.cursor= "auto";
                    document.getElementById("seedlingd_center").style.cursor= "auto";
                    document.getElementById("seedlinge_center").style.cursor= "auto";
                    document.getElementById("seedlingf_center").style.cursor= "auto";
                    seedling1.planting_choosen=1;
                }
                else {
                    document.getElementById("seedlinga_center").style.backgroundColor= "#f1f1f1";
                    if (seedling2.treetype>0) {
                        seedlingb_center.className = "darker_grey";
                        document.getElementById("seedlingb_center").style.cursor= "pointer";
                    }
                    if (seedling3.treetype>0) {
                        seedlingc_center.className = "darker_grey";
                        document.getElementById("seedlingc_center").style.cursor= "pointer";
                    }
                    if (seedling4.treetype>0) {
                        seedlingd_center.className = "darker_grey";
                        document.getElementById("seedlingd_center").style.cursor= "pointer";
                    }
                    if (seedling5.treetype>0) {
                        seedlinge_center.className = "darker_grey";
                        document.getElementById("seedlinge_center").style.cursor= "pointer";
                    }
                    if (seedling6.treetype>0) {
                        seedlingf_center.className = "darker_grey";
                        document.getElementById("seedlingf_center").style.cursor= "pointer";
                    }
                    seedling1.planting_choosen=0;    
                }
            }
        }
    }
    else if (x==2) {
        if (seedling2.treetype==0) {
            document.getElementById("snack_message").innerText = "No seedling available";
            var snackb = document.getElementById("snackbar");
            snackb.className = "show";
            setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
        } 
        else {
            if (seedling1.planting_choosen==1 || seedling3.planting_choosen==1 || seedling4.planting_choosen==1 || seedling5.planting_choosen==1 || seedling6.planting_choosen==1) {
                document.getElementById("snack_message").innerText = "Only one seedling can be choosen to plant";
                var snackb = document.getElementById("snackbar");
                snackb.className = "show";
                setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
                }
            else {
                if (seedling2.planting_choosen==0) {
                    document.getElementById("seedlingb_center").style.backgroundColor= "#bbb";
                    seedlinga_center.className = "";
                    seedlingc_center.className = "";
                    seedlingd_center.className = "";
                    seedlinge_center.className = "";
                    seedlingf_center.className = "";
                    document.getElementById("seedlinga_center").style.cursor= "auto";
                    document.getElementById("seedlingc_center").style.cursor= "auto";
                    document.getElementById("seedlingd_center").style.cursor= "auto";
                    document.getElementById("seedlinge_center").style.cursor= "auto";
                    document.getElementById("seedlingf_center").style.cursor= "auto";
                    seedling2.planting_choosen=1;
                }
                else {
                    document.getElementById("seedlingb_center").style.backgroundColor= "#f1f1f1";
                    if (seedling1.treetype>0) {
                        seedlinga_center.className = "darker_grey";
                        document.getElementById("seedlinga_center").style.cursor= "pointer";
                    }
                    if (seedling3.treetype>0) {
                        seedlingc_center.className = "darker_grey";
                        document.getElementById("seedlingc_center").style.cursor= "pointer";
                    }
                    if (seedling4.treetype>0) {
                        seedlingd_center.className = "darker_grey";
                        document.getElementById("seedlingd_center").style.cursor= "pointer";
                    }
                    if (seedling5.treetype>0) {
                        seedlinge_center.className = "darker_grey";
                        document.getElementById("seedlinge_center").style.cursor= "pointer";
                    }
                    if (seedling6.treetype>0) {
                        seedlingf_center.className = "darker_grey";
                        document.getElementById("seedlingf_center").style.cursor= "pointer";
                    }
                    seedling2.planting_choosen=0;    
                }
            }
        }
    }
    else if (x==3) {
        if (seedling3.treetype==0) {
            document.getElementById("snack_message").innerText = "No seedling available";
            var snackb = document.getElementById("snackbar");
            snackb.className = "show";
            setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
        } 
        else {
            if (seedling1.planting_choosen==1 || seedling2.planting_choosen==1 || seedling4.planting_choosen==1 || seedling5.planting_choosen==1 || seedling6.planting_choosen==1) {
                document.getElementById("snack_message").innerText = "Only one seedling can be choosen to plant";
                var snackb = document.getElementById("snackbar");
                snackb.className = "show";
                setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
                }
            else {
                if (seedling3.planting_choosen==0) {
                    document.getElementById("seedlingc_center").style.backgroundColor= "#bbb";
                    seedlinga_center.className = "";
                    seedlingb_center.className = "";
                    seedlingd_center.className = "";
                    seedlinge_center.className = "";
                    seedlingf_center.className = "";
                    document.getElementById("seedlinga_center").style.cursor= "auto";
                    document.getElementById("seedlingb_center").style.cursor= "auto";
                    document.getElementById("seedlingd_center").style.cursor= "auto";
                    document.getElementById("seedlinge_center").style.cursor= "auto";
                    document.getElementById("seedlingf_center").style.cursor= "auto";
                    seedling3.planting_choosen=1;
                }
                else {
                    document.getElementById("seedlingc_center").style.backgroundColor= "#f1f1f1";
                    if (seedling1.treetype>0) {
                        seedlinga_center.className = "darker_grey";
                        document.getElementById("seedlinga_center").style.cursor= "pointer";
                    }
                    if (seedling2.treetype>0) {
                        seedlingb_center.className = "darker_grey";
                        document.getElementById("seedlingb_center").style.cursor= "pointer";
                    }
                    if (seedling4.treetype>0) {
                        seedlingd_center.className = "darker_grey";
                        document.getElementById("seedlingd_center").style.cursor= "pointer";
                    }
                    if (seedling5.treetype>0) {
                        seedlinge_center.className = "darker_grey";
                        document.getElementById("seedlinge_center").style.cursor= "pointer";
                    }
                    if (seedling6.treetype>0) {
                        seedlingf_center.className = "darker_grey";
                        document.getElementById("seedlingf_center").style.cursor= "pointer";
                    }
                    seedling3.planting_choosen=0; 
                }
            }
        }
    }
    else if (x==4) {
        if (seedling4.treetype==0) {
            document.getElementById("snack_message").innerText = "No seedling available";
            var snackb = document.getElementById("snackbar");
            snackb.className = "show";
            setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
        } 
        else {
            if (seedling1.planting_choosen==1 || seedling2.planting_choosen==1 || seedling3.planting_choosen==1 || seedling5.planting_choosen==1 || seedling6.planting_choosen==1) {
                document.getElementById("snack_message").innerText = "Only one seedling can be choosen to plant";
                var snackb = document.getElementById("snackbar");
                snackb.className = "show";
                setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
                }
            else {
                if (seedling4.planting_choosen==0) {
                    document.getElementById("seedlingd_center").style.backgroundColor= "#bbb";
                    seedlinga_center.className = "";
                    seedlingb_center.className = "";
                    seedlingc_center.className = "";
                    seedlinge_center.className = "";
                    seedlingf_center.className = "";
                    document.getElementById("seedlinga_center").style.cursor= "auto";
                    document.getElementById("seedlingb_center").style.cursor= "auto";
                    document.getElementById("seedlingc_center").style.cursor= "auto";
                    document.getElementById("seedlinge_center").style.cursor= "auto";
                    document.getElementById("seedlingf_center").style.cursor= "auto";
                    seedling4.planting_choosen=1;
                }
                else {
                    document.getElementById("seedlingd_center").style.backgroundColor= "#f1f1f1";
                    if (seedling1.treetype>0) {
                        seedlinga_center.className = "darker_grey";
                        document.getElementById("seedlinga_center").style.cursor= "pointer";
                    }
                    if (seedling2.treetype>0) {
                        seedlingb_center.className = "darker_grey";
                        document.getElementById("seedlingb_center").style.cursor= "pointer";
                    }
                    if (seedling3.treetype>0) {
                        seedlingc_center.className = "darker_grey";
                        document.getElementById("seedlingc_center").style.cursor= "pointer";
                    }
                    if (seedling5.treetype>0) {
                        seedlinge_center.className = "darker_grey";
                        document.getElementById("seedlinge_center").style.cursor= "pointer";
                    }
                    if (seedling6.treetype>0) {
                        seedlingf_center.className = "darker_grey";
                        document.getElementById("seedlingf_center").style.cursor= "pointer";
                    }
                    seedling4.planting_choosen=0;    
                }
            }
        }
    }
    else if (x==5) {
        if (seedling5.treetype==0) {
            document.getElementById("snack_message").innerText = "No seedling available";
            var snackb = document.getElementById("snackbar");
            snackb.className = "show";
            setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
        } 
        else {
            if (seedling1.planting_choosen==1 || seedling2.planting_choosen==1 || seedling3.planting_choosen==1 || seedling4.planting_choosen==1 || seedling6.planting_choosen==1) {
                document.getElementById("snack_message").innerText = "Only one seedling can be choosen to plant";
                var snackb = document.getElementById("snackbar");
                snackb.className = "show";
                setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
                }
            else {
                if (seedling5.planting_choosen==0) {
                    document.getElementById("seedlinge_center").style.backgroundColor= "#bbb";
                    seedlinga_center.className = "";
                    seedlingb_center.className = "";
                    seedlingc_center.className = "";
                    seedlingd_center.className = "";
                    seedlingf_center.className = "";
                    document.getElementById("seedlinga_center").style.cursor= "auto";
                    document.getElementById("seedlingb_center").style.cursor= "auto";
                    document.getElementById("seedlingc_center").style.cursor= "auto";
                    document.getElementById("seedlingd_center").style.cursor= "auto";
                    document.getElementById("seedlingf_center").style.cursor= "auto";
                    seedling5.planting_choosen=1;
                }
                else {
                    document.getElementById("seedlinge_center").style.backgroundColor= "#f1f1f1";
                    if (seedling1.treetype>0) {
                        seedlinga_center.className = "darker_grey";
                        document.getElementById("seedlinga_center").style.cursor= "pointer";
                    }
                    if (seedling2.treetype>0) {
                        seedlingb_center.className = "darker_grey";
                        document.getElementById("seedlingb_center").style.cursor= "pointer";
                    }
                    if (seedling3.treetype>0) {
                        seedlingc_center.className = "darker_grey";
                        document.getElementById("seedlingc_center").style.cursor= "pointer";
                    }
                    if (seedling4.treetype>0) {
                        seedlingd_center.className = "darker_grey";
                        document.getElementById("seedlingd_center").style.cursor= "pointer";
                    }
                    if (seedling6.treetype>0) {
                        seedlingf_center.className = "darker_grey";
                        document.getElementById("seedlingf_center").style.cursor= "pointer";
                    }
                    seedling5.planting_choosen=0;    
                }
            }
        }
    }
    else {
        if (seedling6.treetype==0) {
            document.getElementById("snack_message").innerText = "No seedling available";
            var snackb = document.getElementById("snackbar");
            snackb.className = "show";
            setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
        } 
        else {
            if (seedling1.planting_choosen==1 || seedling2.planting_choosen==1 || seedling3.planting_choosen==1 || seedling4.planting_choosen==1 || seedling5.planting_choosen==1) {
                document.getElementById("snack_message").innerText = "Only one seedling can be choosen to plant";
                var snackb = document.getElementById("snackbar");
                snackb.className = "show";
                setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
                }
            else {
                if (seedling6.planting_choosen==0) {
                    document.getElementById("seedlingf_center").style.backgroundColor= "#bbb";
                    seedlinga_center.className = "";
                    seedlingb_center.className = "";
                    seedlingc_center.className = "";
                    seedlingd_center.className = "";
                    seedlinge_center.className = "";
                    document.getElementById("seedlinga_center").style.cursor= "auto";
                    document.getElementById("seedlingb_center").style.cursor= "auto";
                    document.getElementById("seedlingc_center").style.cursor= "auto";
                    document.getElementById("seedlingd_center").style.cursor= "auto";
                    document.getElementById("seedlinge_center").style.cursor= "auto";
                    seedling6.planting_choosen=1;
                }
                else {
                    document.getElementById("seedlingf_center").style.backgroundColor= "#f1f1f1";
                    if (seedling1.treetype>0) {
                        seedlinga_center.className = "darker_grey";
                        document.getElementById("seedlinga_center").style.cursor= "pointer";
                    }
                    if (seedling2.treetype>0) {
                        seedlingb_center.className = "darker_grey";
                        document.getElementById("seedlingb_center").style.cursor= "pointer";
                    }
                    if (seedling3.treetype>0) {
                        seedlingc_center.className = "darker_grey";
                        document.getElementById("seedlingc_center").style.cursor= "pointer";
                    }
                    if (seedling4.treetype>0) {
                        seedlingd_center.className = "darker_grey";
                        document.getElementById("seedlingd_center").style.cursor= "pointer";
                    }
                    if (seedling5.treetype>0) {
                        seedlinge_center.className = "darker_grey";
                        document.getElementById("seedlinge_center").style.cursor= "pointer";
                    }
                    seedling6.planting_choosen=0;    
                }
            }
        }
    }
}

function PlantSeedling() {
    if (state.workers_available>0) {
        if (worker01.busy==0) {
            if (seedling1.planting_choosen==1) {
                PlantSeedlingPick(seedling1, worker01);
            }
            else if (seedling2.planting_choosen==1) {
                PlantSeedlingPick(seedling2, worker01);
            }
            else if (seedling3.planting_choosen==1) {
                PlantSeedlingPick(seedling3, worker01);
            }
            else if (seedling4.planting_choosen==1) {
                PlantSeedlingPick(seedling4, worker01);
            }
            else if (seedling5.planting_choosen==1) {
                PlantSeedlingPick(seedling5, worker01);
            }
            else if (seedling6.planting_choosen==1) {
                PlantSeedlingPick(seedling6, worker01);
            }
            else {
                document.getElementById("snack_message").innerText = "Choose a seedling to plant first";
                var snackb = document.getElementById("snackbar");
                snackb.className = "show";
                setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
            }
        } 
        else if (worker02.busy==0) {
            if (seedling1.planting_choosen==1) {
                PlantSeedlingPick(seedling1, worker02);
            }
            else if (seedling2.planting_choosen==1) {
                PlantSeedlingPick(seedling2, worker02);
            }
            else if (seedling3.planting_choosen==1) {
                PlantSeedlingPick(seedling3, worker02);
            }
            else if (seedling4.planting_choosen==1) {
                PlantSeedlingPick(seedling4, worker02);
            }
            else if (seedling5.planting_choosen==1) {
                PlantSeedlingPick(seedling5, worker02);
            }
            else if (seedling6.planting_choosen==1) {
                PlantSeedlingPick(seedling6, worker02);
            }
            else {
                document.getElementById("snack_message").innerText = "Choose a seedling to plant first";
                var snackb = document.getElementById("snackbar");
                snackb.className = "show";
                setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
            }
        }
        else if (worker03.busy==0) {
            if (seedling1.planting_choosen==1) {
                PlantSeedlingPick(seedling1, worker03);
            }
            else if (seedling2.planting_choosen==1) {
                PlantSeedlingPick(seedling2, worker03);
            }
            else if (seedling3.planting_choosen==1) {
                PlantSeedlingPick(seedling3, worker03);
            }
            else if (seedling4.planting_choosen==1) {
                PlantSeedlingPick(seedling4, worker03);
            }
            else if (seedling5.planting_choosen==1) {
                PlantSeedlingPick(seedling5, worker03);
            }
            else if (seedling6.planting_choosen==1) {
                PlantSeedlingPick(seedling6, worker03);
            }
            else {
                document.getElementById("snack_message").innerText = "Choose a seedling to plant first";
                var snackb = document.getElementById("snackbar");
                snackb.className = "show";
                setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
            }
        }
    }
    else {
        document.getElementById("snack_message").innerText = "No workers available";
        var snackb = document.getElementById("snackbar");
        snackb.className = "show";
        setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
    }     
}

function PlantSeedlingPick(seedlingX, worker) {
    if (x==1) {
        if (z==1) {
            state.bonsai_showing==1;
            worker.growing = 1;
            PlantSeedlingExecution(bonsai11, seedlingX, worker);
        }
        else if (z==2) {
            state.bonsai_showing==2;
            worker.growing = 2;
            PlantSeedlingExecution(bonsai12, seedlingX, worker);
        }
        else if (z==3) {
            state.bonsai_showing==3;
            worker.growing = 3;
            PlantSeedlingExecution(bonsai13, seedlingX, worker);
        }
        else if (z==4) {
            state.bonsai_showing==4;
            worker.growing = 4;
            PlantSeedlingExecution(bonsai14, seedlingX, worker);
        }
        else if (z==5) {
            state.bonsai_showing==5;
            worker.growing = 5;
            PlantSeedlingExecution(bonsai15, seedlingX, worker);
        }
        else if (z==6) {
            state.bonsai_showing==6;
            worker.growing = 6;
            PlantSeedlingExecution(bonsai16, seedlingX, worker);
        }
    }
    else if (x==7) {
        if (z==1) {
            state.bonsai_showing==7;
            worker.growing = 7;
            PlantSeedlingExecution(bonsai71, seedlingX, worker);
        }
        else if (z==2) {
            state.bonsai_showing==8;
            worker.growing = 8;
            PlantSeedlingExecution(bonsai72, seedlingX, worker);
        }
        else if (z==3) {
            state.bonsai_showing==9;
            worker.growing = 9;
            PlantSeedlingExecution(bonsai73, seedlingX, worker);
        }
        else if (z==4) {
            state.bonsai_showing==10;
            worker.growing = 10;
            PlantSeedlingExecution(bonsai74, seedlingX, worker);
        }
        else if (z==5) {
            state.bonsai_showing==11;
            worker.growing = 11;
            PlantSeedlingExecution(bonsai75, seedlingX, worker);
        }
        else if (z==6) {
            state.bonsai_showing==12;
            worker.growing = 12;
            PlantSeedlingExecution(bonsai76, seedlingX, worker);
        }
    }
}

function PlantSeedlingReset() {
    seedling1.planting_choosen=0;
    document.getElementById("seedlinga_center").style.backgroundColor= "#f1f1f1";
    seedling2.planting_choosen=0;
    document.getElementById("seedlingb_center").style.backgroundColor= "#f1f1f1";
    seedling3.planting_choosen=0;
    document.getElementById("seedlingc_center").style.backgroundColor= "#f1f1f1";
    seedling4.planting_choosen=0;
    document.getElementById("seedlingd_center").style.backgroundColor= "#f1f1f1";    
    seedling5.planting_choosen=0;
    document.getElementById("seedlinge_center").style.backgroundColor= "#f1f1f1";         
    seedling6.planting_choosen=0;
    document.getElementById("seedlingf_center").style.backgroundColor= "#f1f1f1";                 
    if (seedling1.treetype>0) {
        document.getElementById("seedlinga_center").style.cursor= "pointer";
        seedlinga_center.className = "darker_grey";
    }
    if (seedling2.treetype>0) {
        document.getElementById("seedlingb_center").style.cursor= "pointer";
        seedlingb_center.className = "darker_grey";
    } 
    if (seedling3.treetype>0) {
        document.getElementById("seedlingc_center").style.cursor= "pointer";
        seedlingc_center.className = "darker_grey";
    }
    if (seedling4.treetype>0) {
        document.getElementById("seedlingd_center").style.cursor= "pointer";
        seedlingd_center.className = "darker_grey";
    }
    if (seedling5.treetype>0) {
        document.getElementById("seedlinge_center").style.cursor= "pointer";
        seedlinge_center.className = "darker_grey";
    }
    if (seedling6.treetype>0) {
        document.getElementById("seedlingf_center").style.cursor= "pointer";
        seedlingf_center.className = "darker_grey";
    }
}

function PlantSeedlingExecution(bonsaixx, seedlingx, worker) {
    state.workers_available -=1;
    worker.busy = 1;
    bonsaixx.name = speciesname[seedlingx.species];
    bonsaixx.species = seedlingx.species;
    bonsaixx.treetype = seedlingx.treetype;
    bonsaixx.treetypegroup = seedlingx.treetypegroup;
    bonsaixx.rarity = seedlingx.rarity;
    bonsaixx.nature = naturerandom();
    bonsaixx.level = 0;
    bonsaixx.foliage = 0;
    bonsaixx.branches = 0;
    bonsaixx.trunk = 0;
    bonsaixx.roots = 0;
    bonsaixx.growing = 1;
    bonsaixx.price = bonsaixx.level*bonsaixx.treetypegroup*bonsaixx.rarity;
    bonsaixx.level_new +=1;
    if (bonsaixx.rarity==1) {
        bonsaixx.growing_zeit = grow_time_r1[bonsaixx.level];
        cpdistribution(bonsaixx, level_cp_r1)
        cpdistributionaftercare(bonsaixx);
    }
    else if (bonsaixx.rarity==2) {
        bonsaixx.growing_zeit = grow_time_r2[bonsaixx.level];
        cpdistribution(bonsaixx, level_cp_r2)
        cpdistributionaftercare(bonsaixx);
    }
    else if (bonsaixx.rarity==3) {
        bonsaixx.growing_zeit = grow_time_r3[bonsaixx.level];
        cpdistribution(bonsaixx, level_cp_r3)
        cpdistributionaftercare(bonsaixx);
    }
    
    if (worker==worker01) {
        document.getElementById("zeit_worker01").innerHTML = "("+bonsaixx.growing_zeit+"&nbsp;seconds left)";
        document.getElementById("worker1_task").innerHTML = '<img src="Images/growing.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Growing'; 
    }
    else if (worker==worker02) {
        document.getElementById("zeit_worker02").innerHTML = "("+bonsaixx.growing_zeit+"&nbsp;seconds left)";
        document.getElementById("worker2_task").innerHTML = '<img src="Images/growing.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Growing';     
    }
    
    Bonsai_Details(bonsaixx);
    
    menu_change();
    menu_shop_change();
    
    state.seedlings -=1;
    state.seedlings_ontheway -=1;
    document.getElementById("seedling_number").innerText = state.seedlings.toLocaleString('en', {minimumFractionDigits: 0});
    if (seedling1.planting_choosen==1) {
        seedling1.species=0;
        seedling1.treetype=0;
        seedling1.treetypegroup=0;
        seedling1.rarity=0;
        seedling1.price=0;
        document.getElementById("seedlinga_price_sell").innerHTML = seedling1.price;
        document.getElementById("seedlinga_type_sell").innerHTML = fetchbonsaiimage_sell(seedling1);
        fetchimage_seedlinga ();
        document.getElementById("seedlinga_center").style.cursor= "auto"; 
        seedlinga_center.className = "";
        PlantSeedlingReset()
    }
    else if (seedling2.planting_choosen==1) {
        seedling2.species=0;
        seedling2.treetype=0;
        seedling2.treetypegroup=0;
        seedling2.rarity=0;
        seedling2.price=0;
        document.getElementById("seedlingb_price_sell").innerHTML = seedling2.price;
        document.getElementById("seedlingb_type_sell").innerHTML = fetchbonsaiimage_sell(seedling2);
        fetchimage_seedlingb ();
        document.getElementById("seedlingb_center").style.cursor= "auto"; 
        seedlingb_center.className = "";
        PlantSeedlingReset()
    }
    else if (seedling3.planting_choosen==1) {
        seedling3.species=0;
        seedling3.treetype=0;
        seedling3.treetypegroup=0;
        seedling3.rarity=0;
        seedling3.price=0;
        document.getElementById("seedlingc_price_sell").innerHTML = seedling3.price;
        document.getElementById("seedlingc_type_sell").innerHTML = fetchbonsaiimage_sell(seedling3);
        fetchimage_seedlingc ();
        document.getElementById("seedlingc_center").style.cursor= "auto"; 
        seedlingc_center.className = "";
        PlantSeedlingReset()
    }
    else if (seedling4.planting_choosen==1) {
        seedling4.species=0;
        seedling4.treetype=0;
        seedling4.treetypegroup=0;
        seedling4.rarity=0;
        seedling4.price=0;
        document.getElementById("seedlingd_price_sell").innerHTML = seedling4.price;
        document.getElementById("seedlingd_type_sell").innerHTML = fetchbonsaiimage_sell(seedling4);
        fetchimage_seedlingd ();
        document.getElementById("seedlingd_center").style.cursor= "auto"; 
        seedlingd_center.className = "";
        PlantSeedlingReset()
    }
    else if (seedling5.planting_choosen==1) {
        seedling5.species=0;
        seedling5.treetype=0;
        seedling5.treetypegroup=0;
        seedling5.rarity=0;
        seedling5.price=0;
        document.getElementById("seedlinge_price_sell").innerHTML = seedling5.price;
        document.getElementById("seedlinge_type_sell").innerHTML = fetchbonsaiimage_sell(seedling5);
        fetchimage_seedlinge ();
        document.getElementById("seedlinge_center").style.cursor= "auto"; 
        seedlinge_center.className = "";
        PlantSeedlingReset()
    }
    else if (seedling6.planting_choosen==1) {
        seedling6.species=0;
        seedling6.treetype=0;
        seedling6.treetypegroup=0;
        seedling6.rarity=0;
        seedling6.price=0;
        document.getElementById("seedlingf_price_sell").innerHTML = seedling6.price;
        document.getElementById("seedlingf_type_sell").innerHTML = fetchbonsaiimage_sell(seedling6);
        fetchimage_seedlingf ();
        document.getElementById("seedlingf_center").style.cursor= "auto"; 
        seedlingf_center.className = "";
        PlantSeedlingReset()
    }
}

/* Grow bonsai functions */
function GrowBonsaiWorkerPick(bonsaixx) {
    if (state.workers_available>0) {
        if (worker01.busy==0) {
            state.workers_available -=1;
            if (bonsaixx==bonsai11) {
                worker01.growing = 1;  
            }
            else if (bonsaixx==bonsai12) {
                worker01.growing = 2;   
            }
            else if (bonsaixx==bonsai13) {
                worker01.growing = 3;  
            }
            else if (bonsaixx==bonsai14) {
                worker01.growing = 4;   
            }
            else if (bonsaixx==bonsai15) {
                worker01.growing = 5;  
            }
            else if (bonsaixx==bonsai16) {
                worker01.growing = 6;   
            }
            else if (bonsaixx==bonsai71) {
                worker01.growing = 7;  
            }
            else if (bonsaixx==bonsai72) {
                worker01.growing = 8;   
            }
            else if (bonsaixx==bonsai73) {
                worker01.growing = 9;   
            }
            else if (bonsaixx==bonsai74) {
                worker01.growing = 10;  
            }
            else if (bonsaixx==bonsai75) {
                worker01.growing = 11;  
            }
            else if (bonsaixx==bonsai76) {
                worker01.growing = 12;   
            }
            state.workerstandin = 1;
        } 
        else if (worker02.busy==0) {
            state.workers_available -=1;
            if (bonsaixx==bonsai11) {
                worker02.growing = 1;  
            }
            else if (bonsaixx==bonsai12) {
                worker02.growing = 2;   
            }
            else if (bonsaixx==bonsai13) {
                worker02.growing = 3;  
            }
            else if (bonsaixx==bonsai14) {
                worker02.growing = 4;   
            }
            else if (bonsaixx==bonsai15) {
                worker02.growing = 5;  
            }
            else if (bonsaixx==bonsai16) {
                worker02.growing = 6;   
            }
            else if (bonsaixx==bonsai71) {
                worker02.growing = 7;  
            }
            else if (bonsaixx==bonsai72) {
                worker02.growing = 8;   
            }
            else if (bonsaixx==bonsai73) {
                worker02.growing = 9;   
            }
            else if (bonsaixx==bonsai74) {
                worker02.growing = 10;  
            }
            else if (bonsaixx==bonsai75) {
                worker02.growing = 11;  
            }
            else if (bonsaixx==bonsai76) {
                worker02.growing = 12;   
            }
            state.workerstandin = 2;
        }
        else if (worker03.busy==0) {
            state.workers_available -=1;
            if (bonsaixx==bonsai11) {
                worker03.growing = 1;  
            }
            else if (bonsaixx==bonsai12) {
                worker03.growing = 2;   
            }
            else if (bonsaixx==bonsai13) {
                worker03.growing = 3;  
            }
            else if (bonsaixx==bonsai14) {
                worker03.growing = 4;   
            }
            else if (bonsaixx==bonsai15) {
                worker03.growing = 5;  
            }
            else if (bonsaixx==bonsai16) {
                worker03.growing = 6;   
            }
            else if (bonsaixx==bonsai71) {
                worker03.growing = 7;  
            }
            else if (bonsaixx==bonsai72) {
                worker03.growing = 8;   
            }
            else if (bonsaixx==bonsai73) {
                worker03.growing = 9;   
            }
            else if (bonsaixx==bonsai74) {
                worker03.growing = 10;  
            }
            else if (bonsaixx==bonsai75) {
                worker03.growing = 11;  
            }
            else if (bonsaixx==bonsai76) {
                worker03.growing = 12;   
            }
            state.workerstandin = 3;
        }
    }
    else {
        document.getElementById("snack_message").innerText = "No workers available";
        var snackb = document.getElementById("snackbar");
        snackb.className = "show";
        setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
    }
}

function GrowBonsai() {
    if (SearchBonsaiShowing().leftpoints>=0.1) {
        document.getElementById("snack_message").innerHTML = "Distribute all shape points first. &#32;"+ SearchBonsaiShowing().leftpoints.toLocaleString('en', {minimumFractionDigits: 1}) +"&#32; points left.";
        var snackb = document.getElementById("snackbar");
        snackb.className = "show";
        setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
    }
    else {    
        if (SearchBonsaiShowing().growing==0) {
            GrowBonsaiWorkerPick(SearchBonsaiShowing());
            if (state.workerstandin>0) {
                SearchBonsaiShowing().growing = 1;
                
                if (state.workerstandin==1) {
                    worker01.busy = 1;
                    document.getElementById("zeit_worker01").innerHTML = "("+SearchBonsaiShowing().growing_zeit+"&nbsp;seconds left)";
                    document.getElementById("worker1_task").innerHTML = '<img src="Images/growing.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Growing'; 
                    state.workerstandin = 0;
                }
                else if (state.workerstandin==2) {
                    worker02.busy = 1;
                    document.getElementById("zeit_worker02").innerHTML = "("+SearchBonsaiShowing().growing_zeit+"&nbsp;seconds left)";
                    document.getElementById("worker2_task").innerHTML = '<img src="Images/growing.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Growing';
                    state.workerstandin = 0;
                }
                else if (state.workerstandin==3) {
                    worker03.busy = 1;
                    document.getElementById("zeit_worker03").innerHTML = "("+SearchBonsaiShowing().growing_zeit+"&nbsp;seconds left)";
                    document.getElementById("worker3_task").innerHTML = '<img src="Images/growing.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Growing';
                    state.workerstandin = 0;
                }
    
                Bonsai_Details(SearchBonsaiShowing());
    
                menu_change();
                menu_shop_change();
            }
            else {
            }
        }
        else {
            if (resources.compost>0 & SearchBonsaiShowing().growing_zeit>60) {
                SearchBonsaiShowing().growing_zeit -=60;
                resources.compost -=1;
                document.getElementById("compost").innerText = resources.compost.toLocaleString('en', {minimumFractionDigits: 0});
                
                Bonsai_Details(SearchBonsaiShowing());
                SearchWorker();
    
                menu_change();
                menu_shop_change();
            }
            else {
            document.getElementById("snack_message").innerText = "Bonsai already growing";
            var snackb = document.getElementById("snackbar");
            snackb.className = "show";
            setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
            }
        }
    }
}

function SearchWorker() {
    if (SearchBonsaiShowing()==bonsai11) {
        if (worker01.growing==1) {
            document.getElementById("zeit_worker01").innerHTML = "("+SearchBonsaiShowing().growing_zeit+"&nbsp;seconds left)";
        }
        else if (worker02.growing==1) {
            document.getElementById("zeit_worker02").innerHTML = "("+SearchBonsaiShowing().growing_zeit+"&nbsp;seconds left)";
        }
        else if (worker03.growing==1) {
            document.getElementById("zeit_worker03").innerHTML = "("+SearchBonsaiShowing().growing_zeit+"&nbsp;seconds left)";
        }
    }
    if (SearchBonsaiShowing()==bonsai12) {
        if (worker01.growing==2) {
            document.getElementById("zeit_worker01").innerHTML = "("+SearchBonsaiShowing().growing_zeit+"&nbsp;seconds left)";
        }
        else if (worker02.growing==2) {
            document.getElementById("zeit_worker02").innerHTML = "("+SearchBonsaiShowing().growing_zeit+"&nbsp;seconds left)";
        }
        else if (worker03.growing==2) {
            document.getElementById("zeit_worker03").innerHTML = "("+SearchBonsaiShowing().growing_zeit+"&nbsp;seconds left)";
        }
    }
    if (SearchBonsaiShowing()==bonsai13) {
        if (worker01.growing==3) {
            document.getElementById("zeit_worker01").innerHTML = "("+SearchBonsaiShowing().growing_zeit+"&nbsp;seconds left)";
        }
        else if (worker02.growing==3) {
            document.getElementById("zeit_worker02").innerHTML = "("+SearchBonsaiShowing().growing_zeit+"&nbsp;seconds left)";
        }
        else if (worker03.growing==3) {
            document.getElementById("zeit_worker03").innerHTML = "("+SearchBonsaiShowing().growing_zeit+"&nbsp;seconds left)";
        }
    }
    if (SearchBonsaiShowing()==bonsai14) {
        if (worker01.growing==4) {
            document.getElementById("zeit_worker01").innerHTML = "("+SearchBonsaiShowing().growing_zeit+"&nbsp;seconds left)";
        }
        else if (worker02.growing==4) {
            document.getElementById("zeit_worker02").innerHTML = "("+SearchBonsaiShowing().growing_zeit+"&nbsp;seconds left)";
        }
        else if (worker03.growing==4) {
            document.getElementById("zeit_worker03").innerHTML = "("+SearchBonsaiShowing().growing_zeit+"&nbsp;seconds left)";
        }
    }
    if (SearchBonsaiShowing()==bonsai15) {
        if (worker01.growing==5) {
            document.getElementById("zeit_worker01").innerHTML = "("+SearchBonsaiShowing().growing_zeit+"&nbsp;seconds left)";
        }
        else if (worker02.growing==5) {
            document.getElementById("zeit_worker02").innerHTML = "("+SearchBonsaiShowing().growing_zeit+"&nbsp;seconds left)";
        }
        else if (worker03.growing==5) {
            document.getElementById("zeit_worker03").innerHTML = "("+SearchBonsaiShowing().growing_zeit+"&nbsp;seconds left)";
        }
    }
    if (SearchBonsaiShowing()==bonsai16) {
        if (worker01.growing==6) {
            document.getElementById("zeit_worker01").innerHTML = "("+SearchBonsaiShowing().growing_zeit+"&nbsp;seconds left)";
        }
        else if (worker02.growing==6) {
            document.getElementById("zeit_worker02").innerHTML = "("+SearchBonsaiShowing().growing_zeit+"&nbsp;seconds left)";
        }
        else if (worker03.growing==6) {
            document.getElementById("zeit_worker03").innerHTML = "("+SearchBonsaiShowing().growing_zeit+"&nbsp;seconds left)";
        }
    }
    if (SearchBonsaiShowing()==bonsai71) {
        if (worker01.growing==7) {
            document.getElementById("zeit_worker01").innerHTML = "("+SearchBonsaiShowing().growing_zeit+"&nbsp;seconds left)";
        }
        else if (worker02.growing==7) {
            document.getElementById("zeit_worker02").innerHTML = "("+SearchBonsaiShowing().growing_zeit+"&nbsp;seconds left)";
        }
        else if (worker03.growing==7) {
            document.getElementById("zeit_worker03").innerHTML = "("+SearchBonsaiShowing().growing_zeit+"&nbsp;seconds left)";
        }
    }
    if (SearchBonsaiShowing()==bonsai72) {
        if (worker01.growing==8) {
            document.getElementById("zeit_worker01").innerHTML = "("+SearchBonsaiShowing().growing_zeit+"&nbsp;seconds left)";
        }
        else if (worker02.growing==8) {
            document.getElementById("zeit_worker02").innerHTML = "("+SearchBonsaiShowing().growing_zeit+"&nbsp;seconds left)";
        }
        else if (worker03.growing==8) {
            document.getElementById("zeit_worker03").innerHTML = "("+SearchBonsaiShowing().growing_zeit+"&nbsp;seconds left)";
        }
    }
    if (SearchBonsaiShowing()==bonsai73) {
        if (worker01.growing==9) {
            document.getElementById("zeit_worker01").innerHTML = "("+SearchBonsaiShowing().growing_zeit+"&nbsp;seconds left)";
        }
        else if (worker02.growing==9) {
            document.getElementById("zeit_worker02").innerHTML = "("+SearchBonsaiShowing().growing_zeit+"&nbsp;seconds left)";
        }
        else if (worker03.growing==9) {
            document.getElementById("zeit_worker03").innerHTML = "("+SearchBonsaiShowing().growing_zeit+"&nbsp;seconds left)";
        }
    }
    if (SearchBonsaiShowing()==bonsai74) {
        if (worker01.growing==10) {
            document.getElementById("zeit_worker01").innerHTML = "("+SearchBonsaiShowing().growing_zeit+"&nbsp;seconds left)";
        }
        else if (worker02.growing==10) {
            document.getElementById("zeit_worker02").innerHTML = "("+SearchBonsaiShowing().growing_zeit+"&nbsp;seconds left)";
        }
        else if (worker03.growing==10) {
            document.getElementById("zeit_worker03").innerHTML = "("+SearchBonsaiShowing().growing_zeit+"&nbsp;seconds left)";
        }
    }
    if (SearchBonsaiShowing()==bonsai75) {
        if (worker01.growing==11) {
            document.getElementById("zeit_worker01").innerHTML = "("+SearchBonsaiShowing().growing_zeit+"&nbsp;seconds left)";
        }
        else if (worker02.growing==11) {
            document.getElementById("zeit_worker02").innerHTML = "("+SearchBonsaiShowing().growing_zeit+"&nbsp;seconds left)";
        }
        else if (worker03.growing==11) {
            document.getElementById("zeit_worker03").innerHTML = "("+SearchBonsaiShowing().growing_zeit+"&nbsp;seconds left)";
        }
    }
    if (SearchBonsaiShowing()==bonsai76) {
        if (worker01.growing==12) {
            document.getElementById("zeit_worker01").innerHTML = "("+SearchBonsaiShowing().growing_zeit+"&nbsp;seconds left)";
        }
        else if (worker02.growing==12) {
            document.getElementById("zeit_worker02").innerHTML = "("+SearchBonsaiShowing().growing_zeit+"&nbsp;seconds left)";
        }
        else if (worker03.growing==12) {
            document.getElementById("zeit_worker03").innerHTML = "("+SearchBonsaiShowing().growing_zeit+"&nbsp;seconds left)";
        }
    }
}

function cpdistribution(bonsaixx, level_cp_r) {
    if (bonsaixx.level_new<=10) {
        if (level_cp_r[0]==2) {
            bonsaixx.foliage_new = Math.round((((2/4)*naturedistribution(bonsaixx, 1)))* 10) / 10;
            bonsaixx.branches_new = Math.round((((2/4)*naturedistribution(bonsaixx, 2)))* 10) / 10;
            bonsaixx.trunk_new = Math.round((((2/4)*naturedistribution(bonsaixx, 3)))* 10) / 10;
            bonsaixx.roots_new = Math.round((((2/4)*naturedistribution(bonsaixx, 4)))* 10) / 10;
        }
        else {
            cpdistribution2(bonsaixx, level_cp_r, 0);
        }
    }
    else if (bonsaixx.level_new<=20) {
        cpdistribution2(bonsaixx, level_cp_r, 1);
    }
    else if (bonsaixx.level_new<=30) {
        cpdistribution2(bonsaixx, level_cp_r, 2);
    }
    else if (bonsaixx.level_new<=40) {
        cpdistribution2(bonsaixx, level_cp_r, 3);
    }
    else if (bonsaixx.level_new<=50) {
        cpdistribution2(bonsaixx, level_cp_r, 4);
    }
}

function cpdistribution2(bonsaixx, level_cp_r, level_index) {
            bonsaixx.leftpoints = Math.round(((((level_cp_r[level_index]/10)*8)/10)*skills.shaping)* 10) / 10;
            bonsaixx.leftpoints = Math.round((bonsaixx.leftpoints/4)* 10) / 10;
            bonsaixx.leftpoints = Math.round((bonsaixx.leftpoints*4)* 10) / 10;
        if (bonsaixx.leftpoints<0.4 & skills.shaping>0) {
            bonsaixx.leftpoints = 0.4;
        }
        var growingpoints = (Math.round(((((level_cp_r[level_index]/10)*8)/10)*skills.growing)* 10)/ 10)-(Math.round(((((level_cp_r[level_index]/10)*8)/10)*skills.shaping)* 10)/ 10);
        if (growingpoints<0.4 & bonsaixx.leftpoints==0 & skills.growing>0) {
            growingpoints = 0.4;
        }
        if (((level_cp_r[level_index]/10)*2)<2) {
            bonsaixx.foliage_new = Math.round(((((2+growingpoints)/4)*naturedistribution(bonsaixx, 1)))* 10) / 10;
            bonsaixx.branches_new = Math.round(((((2+growingpoints)/4)*naturedistribution(bonsaixx, 2)))* 10) / 10;
            bonsaixx.trunk_new = Math.round(((((2+growingpoints)/4)*naturedistribution(bonsaixx, 3)))* 10) / 10;
            bonsaixx.roots_new = Math.round(((((2+growingpoints)/4)*naturedistribution(bonsaixx, 4)))* 10) / 10;
            if (bonsaixx.leftpoints+(Math.round((((2+growingpoints)/4)*naturedistribution(bonsaixx, 1))* 10) / 10)+(Math.round((((2+growingpoints)/4)*naturedistribution(bonsaixx, 2))* 10) / 10)+(Math.round((((2+growingpoints)/4)*naturedistribution(bonsaixx, 3))* 10) / 10)+(Math.round((((2+growingpoints)/4)*naturedistribution(bonsaixx, 4))* 10) / 10)>level_cp_r[level_index]) {
                growingpoints=level_cp_r[level_index]-bonsaixx.leftpoints;
                bonsaixx.foliage_new = Math.round(((((growingpoints)/4)*naturedistribution(bonsaixx, 1)))* 10) / 10;
                bonsaixx.branches_new = Math.round(((((growingpoints)/4)*naturedistribution(bonsaixx, 2)))* 10) / 10;
                bonsaixx.trunk_new = Math.round(((((growingpoints)/4)*naturedistribution(bonsaixx, 3)))* 10) / 10;
                bonsaixx.roots_new = Math.round(((((growingpoints)/4)*naturedistribution(bonsaixx, 4)))* 10) / 10;
            }
        }
        else {
            bonsaixx.foliage_new = Math.round(((((((level_cp_r[level_index]/10)*2)+growingpoints)/4)*naturedistribution(bonsaixx, 1)))* 10) / 10;
            bonsaixx.branches_new = Math.round(((((((level_cp_r[level_index]/10)*2)+growingpoints)/4)*naturedistribution(bonsaixx, 2)))* 10) / 10;
            bonsaixx.trunk_new = Math.round(((((((level_cp_r[level_index]/10)*2)+growingpoints)/4)*naturedistribution(bonsaixx, 3)))* 10) / 10;
            bonsaixx.roots_new = Math.round(((((((level_cp_r[level_index]/10)*2)+growingpoints)/4)*naturedistribution(bonsaixx, 4)))* 10) / 10;        
        }
}

function cpdistributionaftercare(bonsaixx) {
    bonsaixx.foliage_new +=bonsaixx.foliage;
    bonsaixx.branches_new +=bonsaixx.branches;
    bonsaixx.trunk_new +=bonsaixx.trunk;
    bonsaixx.roots_new +=bonsaixx.roots;
}

function naturedistribution(bonsaixx, fbtr) {
    if (fbtr==1) {
        if (bonsaixx.nature==1 || bonsaixx.nature==3 || bonsaixx.nature==4 || bonsaixx.nature==5 || bonsaixx.nature==7 || bonsaixx.nature==8 || bonsaixx.nature==9 || bonsaixx.nature==11 || bonsaixx.nature==12 || bonsaixx.nature==13) {
        return 1;
        }
        if (bonsaixx.nature==2 || bonsaixx.nature==6 || bonsaixx.nature==10) {
        return 2;
        }
        if (bonsaixx.nature==14 || bonsaixx.nature==15 || bonsaixx.nature==16) {
        return 0;
        }
    }
    if (fbtr==2) {
        if (bonsaixx.nature==1 || bonsaixx.nature==2 || bonsaixx.nature==4 || bonsaixx.nature==5 || bonsaixx.nature==6 || bonsaixx.nature==8 || bonsaixx.nature==9 || bonsaixx.nature==13 || bonsaixx.nature==15 || bonsaixx.nature==16) {
        return 1;
        }
        if (bonsaixx.nature==3 || bonsaixx.nature==7 || bonsaixx.nature==14) {
        return 2;
        }
        if (bonsaixx.nature==10 || bonsaixx.nature==11 || bonsaixx.nature==12) {
        return 0;
        }
    }
    if (fbtr==3) {
        if (bonsaixx.nature==1 || bonsaixx.nature==2 || bonsaixx.nature==3 || bonsaixx.nature==5 || bonsaixx.nature==9 || bonsaixx.nature==10 || bonsaixx.nature==12 || bonsaixx.nature==13 || bonsaixx.nature==14 || bonsaixx.nature==16) {
        return 1;
        }
        if (bonsaixx.nature==4 || bonsaixx.nature==11 || bonsaixx.nature==15) {
        return 2;
        }
        if (bonsaixx.nature==6 || bonsaixx.nature==7 || bonsaixx.nature==8) {
        return 0;
        }
    }
    if (fbtr==4) {
        if (bonsaixx.nature==1 || bonsaixx.nature==5 || bonsaixx.nature==6 || bonsaixx.nature==7 || bonsaixx.nature==9 || bonsaixx.nature==10 || bonsaixx.nature==11 || bonsaixx.nature==13 || bonsaixx.nature==14 || bonsaixx.nature==15) {
        return 1;
        }
        if (bonsaixx.nature==8 || bonsaixx.nature==12 || bonsaixx.nature==16) {
        return 2;
        }
        if (bonsaixx.nature==2 || bonsaixx.nature==3 || bonsaixx.nature==4) {
        return 0;
        }
    }
}

/* Change name functions */
function ChangeName() {
    nname = document.getElementById("nname"); 
    newname = nname.value;
    document.getElementById("nname").innerText = newname;
    nname = newname.length;
    document.getElementById('nname').value = ''
    if (nname==0) {
    }
    else if (nname>14) {
        document.getElementById("snack_message").innerText = "Name to long";
        var snackb = document.getElementById("snackbar");
        snackb.className = "show";
        setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
    }
    else {
        SearchBonsaiShowing().name=newname;
        document.getElementById("bonsai_detail_name").innerHTML = SearchBonsaiShowing().name;
        menu_change();
        menu_shop_change();
    }
}

/* Expedition Menu functions */
function ViewExNeighborhood() {
    $(document).ready(function(){
        $('#neighborhood').show();
        $('#cityboundaries').hide();
    });
}

function ViewExCityBoundaries() {
    $(document).ready(function(){
        $('#neighborhood').hide();
        $('#cityboundaries').show();
    });
}

/* Crafting Menu functions */
function ViewCrCompost() {
    $(document).ready(function(){
        $('#cr_compost').show();
        $('#cr_robot').hide();
    });
}

function ViewCrRobot() {
    $(document).ready(function(){
        $('#cr_compost').hide();
        $('#cr_robot').show();
    });
}

/* Shopping Menu functions */
function ViewShopEquipment() {
    $(document).ready(function(){
        $('#shop_equipment').show();
        $('#shop_resources').hide();
        $('#shop_seedlings').hide();
        $('#shop_bonsais').hide();
    });
}

function ViewShopResources() {
    $(document).ready(function(){
        $('#shop_equipment').hide();
        $('#shop_resources').show();
        $('#shop_seedlings').hide();
        $('#shop_bonsais').hide();
    });
}

function ViewShopSeedlings() {
    $(document).ready(function(){
        $('#shop_equipment').hide();
        $('#shop_resources').hide();
        $('#shop_seedlings').show();
        $('#shop_bonsais').hide();
    });
}

function ViewShopBonsais() {
    $(document).ready(function(){
        $('#shop_equipment').hide();
        $('#shop_resources').hide();
        $('#shop_seedlings').hide();
        $('#shop_bonsais').show();
    });
}

/* Learning Menu functions */
function ViewSkillRobot() {
    $(document).ready(function(){
        $('#skill_robot').show();
        $('#skill_compost').hide();
        $('#skill_growing').hide();
        $('#skill_shaping').hide();
        $('#skill_patience').hide();
    });
}

function ViewSkillCompost() {
    $(document).ready(function(){
        $('#skill_robot').hide();
        $('#skill_compost').show();
        $('#skill_growing').hide();
        $('#skill_shaping').hide();
        $('#skill_patience').hide();
    });
}

function ViewSkillGrowing() {
    $(document).ready(function(){
        $('#skill_robot').hide();
        $('#skill_compost').hide();
        $('#skill_growing').show();
        $('#skill_shaping').hide();
        $('#skill_patience').hide();
    });
}

function ViewSkillShaping() {
    $(document).ready(function(){
        $('#skill_robot').hide();
        $('#skill_compost').hide();
        $('#skill_growing').hide();
        $('#skill_shaping').show();
        $('#skill_patience').hide();
    });
}

function ViewSkillPatience() {
    $(document).ready(function(){
        $('#skill_robot').hide();
        $('#skill_compost').hide();
        $('#skill_growing').hide();
        $('#skill_shaping').hide();
        $('#skill_patience').show();
    });
}

/* Tasks Menu functions */
function ViewT000() {
    $(document).ready(function(){
        $('#t000').show();
        $('#t001').hide();
        $('#t002').hide();
        $('#t003').hide();
        $('#t004').hide();
        $('#t005').hide();
        $('#t006').hide();
        $('#t007').hide();
        $('#t008').hide();
    });
}

function ViewT001() {
    $(document).ready(function(){
        $('#t000').hide();
        $('#t001').show();
        $('#t002').hide();
        $('#t003').hide();
        $('#t004').hide();
        $('#t005').hide();
        $('#t006').hide();
        $('#t007').hide();
        $('#t008').hide();
        $('#t009').hide();
        $('#t010').hide();
        $('#t011').hide();
        $('#t012').hide();
        $('#t013').hide();
        $('#t014').hide();
    });
}

function ViewT002() {
    $(document).ready(function(){
        $('#t000').hide();
        $('#t001').hide();
        $('#t002').show();
        $('#t003').hide();
        $('#t004').hide();
        $('#t005').hide();
        $('#t006').hide();
        $('#t007').hide();
        $('#t008').hide();
        $('#t009').hide();
        $('#t010').hide();
        $('#t011').hide();
        $('#t012').hide();
        $('#t013').hide();
        $('#t014').hide();
    });
}

function ViewT003() {
    $(document).ready(function(){
        $('#t000').hide();
        $('#t001').hide();
        $('#t002').hide();
        $('#t003').show();
        $('#t004').hide();
        $('#t005').hide();
        $('#t006').hide();
        $('#t007').hide();
        $('#t008').hide();
        $('#t009').hide();
        $('#t010').hide();
        $('#t011').hide();
        $('#t012').hide();
        $('#t013').hide();
        $('#t014').hide();
    });
}

function ViewT004() {
    $(document).ready(function(){
        $('#t000').hide();
        $('#t001').hide();
        $('#t002').hide();
        $('#t003').hide();
        $('#t004').show();
        $('#t005').hide();
        $('#t006').hide();
        $('#t007').hide();
        $('#t008').hide();
        $('#t009').hide();
        $('#t010').hide();
        $('#t011').hide();
        $('#t012').hide();
        $('#t013').hide();
        $('#t014').hide();
    });
}

function ViewT005() {
    $(document).ready(function(){
        $('#t000').hide();
        $('#t001').hide();
        $('#t002').hide();
        $('#t003').hide();
        $('#t004').hide();
        $('#t005').show();
        $('#t006').hide();
        $('#t007').hide();
        $('#t008').hide();
        $('#t009').hide();
        $('#t010').hide();
        $('#t011').hide();
        $('#t012').hide();
        $('#t013').hide();
        $('#t014').hide();
    });
}

function ViewT006() {
    $(document).ready(function(){
        $('#t000').hide();
        $('#t001').hide();
        $('#t002').hide();
        $('#t003').hide();
        $('#t004').hide();
        $('#t005').hide();
        $('#t006').show();
        $('#t007').hide();
        $('#t008').hide();
        $('#t009').hide();
        $('#t010').hide();
        $('#t011').hide();
        $('#t012').hide();
        $('#t013').hide();
        $('#t014').hide();
    });
}

function ViewT007() {
    $(document).ready(function(){
        $('#t000').hide();
        $('#t001').hide();
        $('#t002').hide();
        $('#t003').hide();
        $('#t004').hide();
        $('#t005').hide();
        $('#t006').hide();
        $('#t007').show();
        $('#t008').hide();
        $('#t009').hide();
        $('#t010').hide();
        $('#t011').hide();
        $('#t012').hide();
        $('#t013').hide();
        $('#t014').hide();
    });
}

function ViewT008() {
    $(document).ready(function(){
        $('#t000').hide();
        $('#t001').hide();
        $('#t002').hide();
        $('#t003').hide();
        $('#t004').hide();
        $('#t005').hide();
        $('#t006').hide();
        $('#t007').hide();
        $('#t008').show();
        $('#t009').hide();
        $('#t010').hide();
        $('#t011').hide();
        $('#t012').hide();
        $('#t013').hide();
        $('#t014').hide();
    });
}

function ViewT009() {
    $(document).ready(function(){
        $('#t000').hide();
        $('#t001').hide();
        $('#t002').hide();
        $('#t003').hide();
        $('#t004').hide();
        $('#t005').hide();
        $('#t006').hide();
        $('#t007').hide();
        $('#t008').hide();
        $('#t009').show();
        $('#t010').hide();
        $('#t011').hide();
        $('#t012').hide();
        $('#t013').hide();
        $('#t014').hide();
    });
}

function ViewT010() {
    $(document).ready(function(){
        $('#t000').hide();
        $('#t001').hide();
        $('#t002').hide();
        $('#t003').hide();
        $('#t004').hide();
        $('#t005').hide();
        $('#t006').hide();
        $('#t007').hide();
        $('#t008').hide();
        $('#t009').hide();
        $('#t010').show();
        $('#t011').hide();
        $('#t012').hide();
        $('#t013').hide();
        $('#t014').hide();
    });
}

function ViewT011() {
    $(document).ready(function(){
        $('#t000').hide();
        $('#t001').hide();
        $('#t002').hide();
        $('#t003').hide();
        $('#t004').hide();
        $('#t005').hide();
        $('#t006').hide();
        $('#t007').hide();
        $('#t008').hide();
        $('#t009').hide();
        $('#t010').hide();
        $('#t011').show();
        $('#t012').hide();
        $('#t013').hide();
        $('#t014').hide();
    });
}

function ViewT012() {
    $(document).ready(function(){
        $('#t000').hide();
        $('#t001').hide();
        $('#t002').hide();
        $('#t003').hide();
        $('#t004').hide();
        $('#t005').hide();
        $('#t006').hide();
        $('#t007').hide();
        $('#t008').hide();
        $('#t009').hide();
        $('#t010').hide();
        $('#t011').hide();
        $('#t012').show();
        $('#t013').hide();
        $('#t014').hide();
    });
}

function ViewT013() {
    $(document).ready(function(){
        $('#t000').hide();
        $('#t001').hide();
        $('#t002').hide();
        $('#t003').hide();
        $('#t004').hide();
        $('#t005').hide();
        $('#t006').hide();
        $('#t007').hide();
        $('#t008').hide();
        $('#t009').hide();
        $('#t010').hide();
        $('#t011').hide();
        $('#t012').hide();
        $('#t013').show();
        $('#t014').hide();
    });
}

function ViewT014() {
    $(document).ready(function(){
        $('#t000').hide();
        $('#t001').hide();
        $('#t002').hide();
        $('#t003').hide();
        $('#t004').hide();
        $('#t005').hide();
        $('#t006').hide();
        $('#t007').hide();
        $('#t008').hide();
        $('#t009').hide();
        $('#t010').hide();
        $('#t011').hide();
        $('#t012').hide();
        $('#t013').hide();
        $('#t014').show();
    });
}

/* Change position functions */
function PositionChangeBox() {
    $(document).ready(function() {
        $("#positionn_batch").change(function() {
            var val = $(positionn_batch).val();
            if (val == "1000") {
                $('#positionn_place2').hide();
                $("#positionn_place").html("<option value='00'>Select box first</option>");
            } else if (val == "1001") {
                $('#positionn_place2').show();
                if (state.bonsai_showing==1) {
                    $("#positionn_place").html("<option value='0'>Select place1</option><option value='2'>12</option><option value='3'>13</option><option value='4'>14</option><option value='5'>15</option><option value='6'>16</option>");
                }
                else if (state.bonsai_showing==2) {
                    $("#positionn_place").html("<option value='0'>Select place1</option><option value='1'>11</option><option value='3'>13</option><option value='4'>14</option><option value='5'>15</option><option value='6'>16</option>");
                }
                else if (state.bonsai_showing==3) {
                    $("#positionn_place").html("<option value='0'>Select place1</option><option value='1'>11</option><option value='2'>12</option><option value='4'>14</option><option value='5'>15</option><option value='6'>16</option>");
                }
                else if (state.bonsai_showing==4) {
                    $("#positionn_place").html("<option value='0'>Select place1</option><option value='1'>11</option><option value='2'>12</option><option value='3'>13</option><option value='5'>15</option><option value='6'>16</option>");
                }
                else if (state.bonsai_showing==5) {
                    $("#positionn_place").html("<option value='0'>Select place1</option><option value='1'>11</option><option value='2'>12</option><option value='3'>13</option><option value='4'>14</option><option value='6'>16</option>");
                }
                else if (state.bonsai_showing==6) {
                    $("#positionn_place").html("<option value='0'>Select place1</option><option value='1'>11</option><option value='2'>12</option><option value='3'>13</option><option value='4'>14</option><option value='5'>15</option>");
                }
                else {
                    $("#positionn_place").html("<option value='0'>Select place1</option><option value='11'>11</option><option value='12'>12</option><option value='3'>13</option><option value='4'>14</option><option value='5'>15</option><option value='6'>16</option>");
                }
            } else if (val == "1007") {
                $('#positionn_place2').show();
                if (state.bonsai_showing==7) {
                    $("#positionn_place").html("<option value='0'>Select place2</option><option value='8'>72</option><option value='9'>73</option><option value='10'>74</option><option value='11'>75</option><option value='12'>76</option>");
                }
                else if (state.bonsai_showing==8) {
                    $("#positionn_place").html("<option value='0'>Select place2</option><option value='7'>71</option><option value='9'>73</option><option value='10'>74</option><option value='11'>75</option><option value='12'>76</option>");
                }
                else if (state.bonsai_showing==9) {
                    $("#positionn_place").html("<option value='0'>Select place2</option><option value='7'>71</option><option value='8'>72</option><option value='10'>74</option><option value='11'>75</option><option value='12'>76</option>");
                }
                else if (state.bonsai_showing==10) {
                    $("#positionn_place").html("<option value='0'>Select place2</option><option value='7'>71</option><option value='8'>72</option><option value='9'>73</option><option value='11'>75</option><option value='12'>76</option>");
                }
                else if (state.bonsai_showing==11) {
                    $("#positionn_place").html("<option value='0'>Select place2</option><option value='7'>71</option><option value='8'>72</option><option value='9'>73</option><option value='10'>74</option><option value='12'>76</option>");
                }
                else if (state.bonsai_showing==12) {
                    $("#positionn_place").html("<option value='0'>Select place2</option><option value='7'>71</option><option value='8'>72</option><option value='9'>73</option><option value='10'>74</option><option value='11'>75</option>");
                }
                else {
                    $("#positionn_place").html("<option value='0'>Select place2</option><option value='7'>71</option><option value='8'>72</option><option value='9'>73</option><option value='10'>74</option><option value='11'>75</option><option value='12'>76</option>");
                }
            }
        });
        $('#positionn_place').select2({
            templateResult: formatState,
            templateSelection: formatState,
            minimumResultsForSearch: Infinity
        });
    });
}

function formatState (state) {
    if (!state.id) { return state.text; }
    if (state.text=="Select place1" || state.text=="Select place2") {
        var $state = $(
            '<span style="display:flex; align-items:center">Select place</span>'
        );
        return $state;
    }
    else if (state.text=="Select box first") {
        var $state = $(
            '<span style="display:flex; align-items:center">Select box first</span>'
        );
        return $state;
    }
    else {
        if (state.text==11) {
            nr=1;
            formatstateimage(bonsai11);
        }
        if (state.text==12) {
            nr=2;
            formatstateimage(bonsai12);
        }
        if (state.text==13) {
            nr=3;
            formatstateimage(bonsai13);
        }
        if (state.text==14) {
            nr=4;
            formatstateimage(bonsai14);
        }
        if (state.text==15) {
            nr=5;
            formatstateimage(bonsai15);
        }
        if (state.text==16) {
            nr=6;
            formatstateimage(bonsai16);
        }
        if (state.text==71) {
            nr=7;
            formatstateimage(bonsai71);
        }
        if (state.text==72) {
            nr=8;
            formatstateimage(bonsai72);
        }
        if (state.text==73) {
            nr=9;
            formatstateimage(bonsai73);
        }
        if (state.text==74) {
            nr=10;
            formatstateimage(bonsai74);
        }
        if (state.text==75) {
            nr=11;
            formatstateimage(bonsai75);
        }
        if (state.text==76) {
            nr=12;
            formatstateimage(bonsai76);
        }
        var $state = $(
            '<span style="display:flex; align-items:center">#'+ nr +'&nbsp;' + image +'&nbsp;'+ name +'&nbsp;Lv.&nbsp;'+ level +'&nbsp;CP&nbsp;'+ cp +'</span>'
        );
        return $state;
    }
 }

function formatstateimage(bonsaixx) {
    if (bonsaixx.treetype==0) {
        image='<img src="Images/b00r00.svg" width="25" height="25">';
    }
    else if (bonsaixx.treetype==1) {
        if (bonsaixx.rarity==1) {
            image='<img src="Images/b01r01.svg" width="25" height="25">';
        }
        else if (bonsaixx.rarity==2) {
            image='<img src="Images/b01r02.svg" width="25" height="25">';
        }
        else if (bonsaixx.rarity==3) {
            image='<img src="Images/b01r03.svg" width="25" height="25">';
        }
    }
    else if (bonsaixx.treetype==2) {
        if (bonsaixx.rarity==1) {
            image='<img src="Images/b02r01.svg" width="25" height="25">';
        }
        else if (bonsaixx.rarity==2) {
            image='<img src="Images/b02r02.svg" width="25" height="25">';
        }
        else if (bonsaixx.rarity==3) {
            image='<img src="Images/b02r03.svg" width="25" height="25">';
        }
    }
    else if (bonsaixx.treetype==3) {
        if (bonsaixx.rarity==1) {
            image='<img src="Images/b03r01.svg" width="25" height="25">';
        }
        else if (bonsaixx.rarity==2) {
            image='<img src="Images/b03r02.svg" width="25" height="25">';
        }
        else if (bonsaixx.rarity==3) {
            image='<img src="Images/b03r03.svg" width="25" height="25">';
        }
    }
    else if (bonsaixx.treetype==4) {
        if (bonsaixx.rarity==1) {
            image='<img src="Images/b04r01.svg" width="25" height="25">';
        }
        else if (bonsaixx.rarity==2) {
            image='<img src="Images/b04r02.svg" width="25" height="25">';
        }
        else if (bonsaixx.rarity==3) {
            image='<img src="Images/b04r03.svg" width="25" height="25">';
        }
    }
    name=bonsaixx.name;
    level=bonsaixx.level;
    cp=bonsaixx.foliage+bonsaixx.branches+bonsaixx.trunk+bonsaixx.roots;
}

function ChangePosition() {
    bonsaiplaceholder=SearchBonsaiShowing();
    if (x==1) {
        if (z==1) {
            bonsai11=SearchBonsaiReplacement();
        }
        else if (z==2) {
            bonsai12=SearchBonsaiReplacement();
        }
        else if (z==3) {
            bonsai13=SearchBonsaiReplacement();
        }
        else if (z==4) {
            bonsai14=SearchBonsaiReplacement();
        }
        else if (z==5) {
            bonsai15=SearchBonsaiReplacement();
        }
        else if (z==6) {
            bonsai16=SearchBonsaiReplacement();
        }
    }
    else if (x==7) {
        if (z==1) {
            bonsai71=SearchBonsaiReplacement();
        }
        else if (z==2) {
            bonsai72=SearchBonsaiReplacement();
        }
        else if (z==3) {
            bonsai73=SearchBonsaiReplacement();
        }
        else if (z==4) {
            bonsai74=SearchBonsaiReplacement();
        }
        else if (z==5) {
            bonsai75=SearchBonsaiReplacement();
        }
        else if (z==6) {
            bonsai76=SearchBonsaiReplacement();
        }
    }
    if (document.getElementById("positionn_place").value==1) {
        bonsai11=bonsaiplaceholder;
    }
    else if (document.getElementById("positionn_place").value==2) {
        bonsai12=bonsaiplaceholder;
    }
    else if (document.getElementById("positionn_place").value==3) {
        bonsai13=bonsaiplaceholder;
    }
    else if (document.getElementById("positionn_place").value==4) {
        bonsai14=bonsaiplaceholder;
    }
    else if (document.getElementById("positionn_place").value==5) {
        bonsai15=bonsaiplaceholder;
    }
    else if (document.getElementById("positionn_place").value==6) {
        bonsai16=bonsaiplaceholder;
    }
    else if (document.getElementById("positionn_place").value==7) {
        bonsai71=bonsaiplaceholder;
    }
    else if (document.getElementById("positionn_place").value==8) {
        bonsai72=bonsaiplaceholder;
    }
    else if (document.getElementById("positionn_place").value==9) {
        bonsai73=bonsaiplaceholder;
    }
    else if (document.getElementById("positionn_place").value==10) {
        bonsai74=bonsaiplaceholder;
    }
    else if (document.getElementById("positionn_place").value==11) {
        bonsai75=bonsaiplaceholder;
    }
    else if (document.getElementById("positionn_place").value==12) {
        bonsai76=bonsaiplaceholder;
    }
    
    if (SearchBonsaiShowing().treetype==0) {
        $(document).ready(function(){
            $('.tasks').hide();
            $('.expedition').hide();
            $('.crafting').hide();
            $('.learning').hide();
            $('.shopping').hide();
            $('.bonsai_details').hide();
            $('.bonsai_details_seedling').show();
            });
    }
    else {
        Bonsai_Growing(SearchBonsaiShowing());
        $(document).ready(function() {
            $("#positionn_batch").html("<option value='1000'>Select box</option><option value='1001'>Box 1 - Bonsai #01-#06</option><option value='1007'>Box 2 - Bonsai #07-#12</option>");
            $("#positionn_place").html("<option value='00'>Select box first</option>");
        });
    }
    $(document).ready(function() {
        $('#positionn_place2').hide();
    });
    menu_change();
    menu_shop_change();
}

function SearchBonsaiShowing() {
    if (x==1) {
        if (z==1) {
            return bonsai11;
        }
        else if (z==2) {
            return bonsai12;
        }
        else if (z==3) {
            return bonsai13;
        }
        else if (z==4) {
            return bonsai14;
        }
        else if (z==5) {
            return bonsai15;
        }
        else if (z==6) {
            return bonsai16;
        }
    }
    else if (x==7) {
        if (z==1) {
            return bonsai71;
        }
        else if (z==2) {
            return bonsai72;
        }
        else if (z==3) {
            return bonsai73;
        }
        else if (z==4) {
            return bonsai74;
        }
        else if (z==5) {
            return bonsai75;
        }
        else if (z==6) {
            return bonsai76;
        }
    }
}

function SearchBonsaiReplacement() {
    if (document.getElementById("positionn_place").value==1) {
        return bonsai11;
    }
    else if (document.getElementById("positionn_place").value==2) {
        return bonsai12;
    }
    else if (document.getElementById("positionn_place").value==3) {
        return bonsai13;
    }
    else if (document.getElementById("positionn_place").value==4) {
        return bonsai14;
    }
    else if (document.getElementById("positionn_place").value==5) {
        return bonsai15;
    }
    else if (document.getElementById("positionn_place").value==6) {
        return bonsai16;
    }
    else if (document.getElementById("positionn_place").value==7) {
        return bonsai71;
    }
    else if (document.getElementById("positionn_place").value==8) {
        return bonsai72;
    }
    else if (document.getElementById("positionn_place").value==9) {
        return bonsai73;
    }
    else if (document.getElementById("positionn_place").value==10) {
        return bonsai74;
    }
    else if (document.getElementById("positionn_place").value==11) {
        return bonsai75;
    }
    else if (document.getElementById("positionn_place").value==12) {
        return bonsai76;
    }
}

var shop_bolt_sell = document.getElementById("shop_bolt_sell_1");
var shop_bolt_buy = document.getElementById("shop_bolt_buy_1");
var shop_metal_sell = document.getElementById("shop_metal_sell_1");
var shop_metal_buy = document.getElementById("shop_metal_buy_1");
var shop_wire_sell = document.getElementById("shop_wire_sell_1");
var shop_wire_buy = document.getElementById("shop_wire_buy_1");
var shop_board_sell = document.getElementById("shop_board_sell_1");
var shop_board_buy = document.getElementById("shop_board_buy_1");

shop_bolt_sell.onclick = function() {
    if (resources.bolt>=1) {
        resources.money +=1;
        resources.bolt -=1;
        document.getElementById("money").innerText = resources.money;
        document.getElementById("shop_bolt").innerText = resources.bolt;
        document.getElementById("bolt").innerText = resources.bolt;
        }
}

shop_bolt_buy.onclick = function() {
    if (resources.money>=2) {
        resources.money -=2;
        resources.bolt +=1;
        document.getElementById("money").innerText = resources.money;
        document.getElementById("shop_bolt").innerText = resources.bolt;
        document.getElementById("bolt").innerText = resources.bolt;
    }
    else {
        document.getElementById("snack_message").innerText = "Not enough money";
        var snackb = document.getElementById("snackbar");
        snackb.className = "show";
        setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 1000);
    }
}

shop_metal_sell.onclick = function() {
    if (resources.metal>=1) {
        resources.money +=1;
        resources.metal -=1;
        document.getElementById("money").innerText = resources.money;
        document.getElementById("shop_metal").innerText = resources.metal;
        document.getElementById("metal").innerText = resources.metal;
        }
}

shop_metal_buy.onclick = function() {
    if (resources.money>=2) {
        resources.money -=2;
        resources.metal +=1;
        document.getElementById("money").innerText = resources.money;
        document.getElementById("shop_metal").innerText = resources.metal;
        document.getElementById("metal").innerText = resources.metal;
    }
    else {
        document.getElementById("snack_message").innerText = "Not enough money";
        var snackb = document.getElementById("snackbar");
        snackb.className = "show";
        setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 1000);
    }
}

shop_wire_sell.onclick = function() {
    if (resources.wire>=1) {
        resources.money +=2;
        resources.wire -=1;
        document.getElementById("money").innerText = resources.money;
        document.getElementById("shop_wire").innerText = resources.wire;
        document.getElementById("wire").innerText = resources.wire;
        }
}

shop_wire_buy.onclick = function() {
    if (resources.money>=3) {
        resources.money -=3;
        resources.wire +=1;
        document.getElementById("money").innerText = resources.money;
        document.getElementById("shop_wire").innerText = resources.wire;
        document.getElementById("wire").innerText = resources.wire;
    }
    else {
        document.getElementById("snack_message").innerText = "Not enough money";
        var snackb = document.getElementById("snackbar");
        snackb.className = "show";
        setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 1000);
    }
}

shop_board_sell.onclick = function() {
    if (resources.board>=1) {
        resources.money +=2;
        resources.board -=1;
        document.getElementById("money").innerText = resources.money;
        document.getElementById("shop_board").innerText = resources.board;
        document.getElementById("board").innerText = resources.board;
        }
}

shop_board_buy.onclick = function() {
    if (resources.money>=4) {
        resources.money -=4;
        resources.board +=1;
        document.getElementById("money").innerText = resources.money;
        document.getElementById("shop_board").innerText = resources.board;
        document.getElementById("board").innerText = resources.board;
    }
    else {
        document.getElementById("snack_message").innerText = "Not enough money";
        var snackb = document.getElementById("snackbar");
        snackb.className = "show";
        setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 1000);
    }
}

function SellBonsai(bonsai) {
    if (x_shop==1) {
        if (sbonsai==1) {
            SellBonsaiExecution(bonsai11);
        }
        else if (sbonsai==2) {
            SellBonsaiExecution(bonsai12);
        }
        else if (sbonsai==3) {
            SellBonsaiExecution(bonsai13);
        }
        else if (sbonsai==4) {
            SellBonsaiExecution(bonsai14);
        }
        else if (sbonsai==5) {
            SellBonsaiExecution(bonsai15);
        }
        else if (sbonsai==6) {
            SellBonsaiExecution(bonsai16);
        }
    }else if (x_shop==7) {
        if (sbonsai==1) {
            SellBonsaiExecution(bonsai71);
        }
        else if (sbonsai==2) {
            SellBonsaiExecution(bonsai72);
        }
        else if (sbonsai==3) {
            SellBonsaiExecution(bonsai73);
        }
        else if (sbonsai==4) {
            SellBonsaiExecution(bonsai74);
        }
        else if (sbonsai==5) {
            SellBonsaiExecution(bonsai75);
        }
        else if (sbonsai==6) {
            SellBonsaiExecution(bonsai76);
        }
    }
}

function SellBonsaiExecution(bonsaixx) {
    if (bonsaixx.treetype>0) {
        if (bonsaixx.growing==0) {
            resources.money +=bonsaixx.price;
            document.getElementById("money").innerText = resources.money;
            bonsaixx.name="-";
            bonsaixx.species= 0;
            bonsaixx.treetype=0;
            bonsaixx.treetypegroup=0;
            bonsaixx.rarity=0;
            bonsaixx.nature=0;
            bonsaixx.level=0;
            bonsaixx.foliage=0;
            bonsaixx.branches=0;
            bonsaixx.trunk=0;
            bonsaixx.roots=0;
            bonsaixx.level_new=0;
            bonsaixx.foliage_new=0;
            bonsaixx.branches_new=0;
            bonsaixx.trunk_new=0;
            bonsaixx.roots_new=0;
            bonsaixx.leftpoints=0;
            bonsaixx.level_lp=0;
            bonsaixx.foliage_lp=0;
            bonsaixx.branches_lp=0;
            bonsaixx.trunk_lp=0;
            bonsaixx.roots_lp=0;
            bonsaixx.price=0;
            
            menu_change();
            menu_shop_change();
        }
        else {
            document.getElementById("snack_message").innerText = "Can not sell a growing bonsai";
            var snackb = document.getElementById("snackbar");
            snackb.className = "show";
            setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 1000);
        }
    }
}

function SellSeedling(seedlingx) {
    if (seedlingx.treetype>0) {
        resources.money +=seedlingx.price;
        document.getElementById("money").innerText = resources.money;
        seedlingx.species=0;
        seedlingx.treetype=0;
        seedlingx.treetypegroup=0;
        seedlingx.rarity=0;
        seedlingx.price=0;
        state.seedlings -=1;
        state.seedlings_ontheway -=1;
        document.getElementById("seedling_number").innerText = state.seedlings.toLocaleString('en', {minimumFractionDigits: 0});
        if (seedlingx==seedling1) {
        document.getElementById("seedlinga_price_sell").innerHTML = seedling1.price;
        document.getElementById("seedlinga_type_sell").innerHTML = fetchbonsaiimage_sell(seedling1);
        fetchimage_seedlinga ();
        document.getElementById("seedlinga_center").style.cursor= "auto"; 
        seedlinga_center.className = "";
        }
        if (seedlingx==seedling2) {
        document.getElementById("seedlingb_price_sell").innerHTML = seedling2.price;
        document.getElementById("seedlingb_type_sell").innerHTML = fetchbonsaiimage_sell(seedling2);
        fetchimage_seedlingb ();
        document.getElementById("seedlingb_center").style.cursor= "auto"; 
        seedlingb_center.className = "";
        }
        if (seedlingx==seedling3) {
        document.getElementById("seedlingc_price_sell").innerHTML = seedling3.price;
        document.getElementById("seedlingc_type_sell").innerHTML = fetchbonsaiimage_sell(seedling3);
        fetchimage_seedlingc ();
        document.getElementById("seedlingc_center").style.cursor= "auto"; 
        seedlingc_center.className = "";
        }
        if (seedlingx==seedling4) {
        document.getElementById("seedlingd_price_sell").innerHTML = seedling4.price;
        document.getElementById("seedlingd_type_sell").innerHTML = fetchbonsaiimage_sell(seedling4);
        fetchimage_seedlingd ();
        document.getElementById("seedlingd_center").style.cursor= "auto"; 
        seedlingd_center.className = "";
        }
        if (seedlingx==seedling5) {
        document.getElementById("seedlinge_price_sell").innerHTML = seedling5.price;
        document.getElementById("seedlinge_type_sell").innerHTML = fetchbonsaiimage_sell(seedling5);
        fetchimage_seedlinge ();
        document.getElementById("seedlinge_center").style.cursor= "auto"; 
        seedlinge_center.className = "";
        }
        if (seedlingx==seedling6) {
        document.getElementById("seedlingf_price_sell").innerHTML = seedling6.price;
        document.getElementById("seedlingf_type_sell").innerHTML = fetchbonsaiimage_sell(seedling6);
        fetchimage_seedlingf ();
        document.getElementById("seedlingf_center").style.cursor= "auto"; 
        seedlingf_center.className = "";
        }
        PlantSeedlingReset()
    }
}

function BuyBackpack() {
    if (resources.money>=20) {
        resources.money -=20;
        document.getElementById("money").innerText = resources.money;
        equipment.backpack=1;
        document.getElementById("shop_equip_backpack").style.backgroundImage= "url('Images/bought.svg')";
        $(document).ready(function(){
            $('#expedition2').show();
        });
        task010trigger();
    }
}

function BuyBookofPatience() {
    if (resources.money>=25) {
        resources.money -=25;
        document.getElementById("money").innerText = resources.money;
        equipment.book_of_patience=1;
        document.getElementById("shop_equip_bookofpatience").style.backgroundImage= "url('Images/bought.svg')";
    }
}

function BuyMemoryChips() {
    if (resources.money>=40) {
        resources.money -=40;
        document.getElementById("money").innerText = resources.money;
        equipment.memory_chips=1;
        document.getElementById("shop_equip_memorychips").style.backgroundImage= "url('Images/bought.svg')";
    }
}

function learn_robot() {
    if (skills.robot==0) {
        if (skills.level>=0) {
            if (worker01.busy==0) {
                state.workers_available-=1;
                worker01.busy=1;
                worker01.learning="Robot";
                worker01.learning_zeit=3;
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
                worker01.learning_zeit=3;
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
                worker01.learning_zeit=3;
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

function t000() {
    if (task_triggers.task000==1) {
        
    }
    else {}
}

function t001() {
    if (task_triggers.task001==1) {
    $(document).ready(function(){
        $('#collapsible-button-0').show();
        $('#collapsible-section-0').show();
        $('#T001').hide();
        $('#T001C').show();
        $('#T002').show();
        $('#t001').hide();
    });    
    document.getElementById("t001goal").innerText = "Finished";
    document.getElementById("ButtonT001").style.cursor= "auto";
    ButtonT001.className = "";
    task_triggers.task001=2;
    experience(0);
    }
    else {}
}

function t002() {
    if (task_triggers.task002==1) {
    $(document).ready(function(){
        $('#neighborhoodxx').show();
        $('#T002').hide();
        $('#T002C').show();
        $('#T003').show();
        $('#t002').hide();
    });   
    document.getElementById("neighborhoodx").style.marginBottom="180px";
    document.getElementById("t002goal").innerText = "Finished";
    document.getElementById("ButtonT002").style.cursor= "auto";
    ButtonT002.className = "";
    task_triggers.task002=2;
    experience(0);
        
    if (exp_area01.species01+exp_area01.species02+exp_area01.species03==2) {
        if (task_triggers.task002==2 & task_triggers.task003==0) {
        task_triggers.task003=1;
        document.getElementById("t003goal").innerHTML = "Click to finish";  
        document.getElementById("ButtonT003").style.cursor= "pointer";
        ButtonT003.className = "grey";
        
        document.getElementById("snack_message").innerHTML = "Goal for 'Tutorial: Bonsai species and potential' completed.<br> Go to Tasks to complete.";
        var snackb = document.getElementById("snackbar");
        snackb.className = "show";
        setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
        }
    }
    }
    else {}
}

function t003() {
    if (task_triggers.task003==1) {
    $(document).ready(function(){
        $('#T003').hide();
        $('#T003C').show();
        $('#T004').show();
        $('#t003').hide();
    });   
    document.getElementById("ButtonNavigationLearn").innerText = "Learn";
    document.getElementById("ButtonNavigationLearn").style.cursor = "pointer";
    ButtonNavigationLearn.className = "green";
    document.getElementById("t003goal").innerText = "Finished";
    document.getElementById("ButtonT003").style.cursor= "auto";
    ButtonT003.className = "";
    task_triggers.task003=2;
    experience(0);  
    }
    else {}
}

function t004() {
    if (task_triggers.task004==1) {
    $(document).ready(function(){
        $('#T004').hide();
        $('#T004C').show();
        $('#T005').show();
        $('#t004').hide();
    });   
    document.getElementById("ButtonNavigationCraft").innerText = "Craft";
    document.getElementById("ButtonNavigationCraft").style.cursor = "pointer";
    ButtonNavigationCraft.className = "green";
    document.getElementById("t004goal").innerText = "Finished";
    document.getElementById("ButtonT004").style.cursor= "auto";
    ButtonT004.className = "";
    task_triggers.task004=2;
    experience(0);  
    }
    else {}
}

function t005() {
    if (task_triggers.task005==1) {
    $(document).ready(function(){
        $('#bdcc_l_t11').show();
        $('#bdcc_r_t1').show();
        $('#bdcc_r_t11').show();
        $('#bdcc_r_t19').show();
        $('#T005').hide();
        $('#T005C').show();
        $('#T006').show();
        $('#t005').hide();
    });   
    document.getElementById("t005goal").innerText = "Finished";
    document.getElementById("ButtonT005").style.cursor= "auto";
    ButtonT005.className = "";
    task_triggers.task005=2;
    experience(0);  
        
    if (task_triggers.task005==2 & task_triggers.task006==3) {
        task_triggers.task006=4;
        document.getElementById("t006goal").innerHTML = "Click to finish";  
        document.getElementById("ButtonT006").style.cursor= "pointer";
        ButtonT006.className = "grey";
        
        document.getElementById("snack_message").innerHTML = "Goal for 'Tutorial: Bonsai growing' completed.<br> Go to Tasks to complete.";
        var snackb = document.getElementById("snackbar");
        snackb.className = "show";
        setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
    }
    }
    else {}
}

function t006() {
    if (task_triggers.task006==4) {
    $(document).ready(function(){
        $('#Skill_Compost').show();
        $('#youskills').show();
        $('#T006').hide();
        $('#T006C').show();
        $('#T007').show();
        $('#t006').hide();
    });   
    document.getElementById("t006goal").innerText = "Finished";
    document.getElementById("ButtonT006").style.cursor= "auto";
    ButtonT006.className = "";
    task_triggers.task006=5;
    experience(0);     
    }
    else {}
}

function t007() {
    if (task_triggers.task007==4) {
    $(document).ready(function(){
        $('#T007').hide();
        $('#T007C').show();
        $('#T008').show();
        $('#t007').hide();
    });   
    document.getElementById("t007goal").innerText = "Finished";
    document.getElementById("ButtonT007").style.cursor= "auto";
    ButtonT007.className = "";
    task_triggers.task007=5;
    experience(10); //Change later!!! 
        
    if (task_triggers.task007==5 & task_triggers.task008==1) {
        task_triggers.task008=2;
        document.getElementById("t008goal").innerHTML = "Click to finish (Reward: 10 XP)";  
        document.getElementById("ButtonT008").style.cursor= "pointer";
        ButtonT008.className = "grey";
        
        document.getElementById("snack_message").innerHTML = "Goal for 'Tutorial: Level Up Bonsai' completed.<br> Go to Tasks to complete.";
        var snackb = document.getElementById("snackbar");
        snackb.className = "show";
        setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
    }
    }
    else {}
}

function t008() {
    if (task_triggers.task008==2) {
    $(document).ready(function(){
        $('#Skill_Growing').show();
        $('#bdcc_l_t14').show();
        $('#bdcc_r_t12').show();
        $('#T008').hide();
        $('#T008C').show();
        $('#T009').show();
        $('#t008').hide();
    });   
    document.getElementById("t008goal").innerText = "Finished";
    document.getElementById("ButtonT008").style.cursor= "auto";
    ButtonT008.className = "";
    task_triggers.task008=3;
    experience(10); //Change later!!!  
    }
    else {}
}

function t009() {
    if (task_triggers.task009==2) {
    $(document).ready(function(){
        $('#bdcc_l_t12').show();
        $('#ShopEquipment').show();
        $('#ShopSeedlings').show();
        $('#resources_1').show();
        $('#T009').hide();
        $('#T009C').show();
        $('#T010').show();
        $('#t009').hide();
    });   
    document.getElementById("ButtonNavigationShop").innerText = "Shop";
    document.getElementById("ButtonNavigationShop").style.cursor = "pointer";
    ButtonNavigationShop.className = "green";    
    document.getElementById("t009goal").innerText = "Finished";
    document.getElementById("ButtonT009").style.cursor= "auto";
    ButtonT009.className = "";
    task_triggers.task009=3;
    experience(10); //Change later!!!   
    }
    else {}
}

function t010() {
    if (task_triggers.task010==1) {
    $(document).ready(function(){
        $('#ShopResources').show();
        $('#ShopBonsais').show();
        $('#resources_3').show();
        $('#T010').hide();
        $('#T010C').show();
        $('#T011').show();
        $('#t010').hide();
    });           
    document.getElementById("t010goal").innerText = "Finished";
    document.getElementById("ButtonT010").style.cursor= "auto";
    ButtonT010.className = "";
    task_triggers.task010=2;
    experience(10); //Change later!!!   
    }
    else {}
}

function t011() {
    if (task_triggers.task011==1) {
    $(document).ready(function(){
        $('#Skill_Shaping').show();
        $('#bdcc_l_t13').show();
        $('#bdcc_l_t15').show();
        $('#bdcc_r_t13').show();
        $('#T011').hide();
        $('#T011C').show();
        $('#T012').show();
        $('#t011').hide();
    });   
        
        
    document.getElementById("t011goal").innerText = "Finished";
    document.getElementById("ButtonT011").style.cursor= "auto";
    ButtonT011.className = "";
    task_triggers.task011=2;
    experience(10); //Change later!!!   
    }
    else {}
}

function t012() {
    if (task_triggers.task012==2) {
    $(document).ready(function(){
        $('#Skill_Patience').show();
        $('#equipment_patience').show();
        $('#T012').hide();
        $('#T012C').show();
        $('#T013').show();
        $('#t012').hide();
    });   
        
        
    document.getElementById("t012goal").innerText = "Finished";
    document.getElementById("ButtonT012").style.cursor= "auto";
    ButtonT012.className = "";
    task_triggers.task012=3;
    experience(10); //Change later!!!   
    }
    else {}
}

function t013() {
    if (task_triggers.task013==1) {
    $(document).ready(function(){
        $('#T013').hide();
        $('#T013C').show();
        $('#T014').show();
        $('#t013').hide();
    });   
        
        
    document.getElementById("t013goal").innerText = "Finished";
    document.getElementById("ButtonT013").style.cursor= "auto";
    ButtonT013.className = "";
    task_triggers.task013=2;
    experience(10); //Change later!!!   
    }
    else {}
}

function neighborhood_time_change() {
    neighborhood_time = document.getElementById("neighborhood_time").value;
    document.getElementById("neighborhoodtime").innerText = neighborhood_time;
}

function cityboundaries_time_change() {
    cityboundaries_time = document.getElementById("cityboundaries_time").value;
    document.getElementById("cityboundariestime").innerText = cityboundaries_time;
}

function task001trigger() {
    if (statistics.seedlings_total==1) {
        task_triggers.task001=1;
        document.getElementById("t001goal").innerHTML = "Click to finish";  
        document.getElementById("ButtonT001").style.cursor= "pointer";
        ButtonT001.className = "grey";
        
        document.getElementById("snack_message").innerHTML = "Goal for 'Tutorial: Expeditions' completed.<br> Go to Tasks to complete.";
        var snackb = document.getElementById("snackbar");
        snackb.className = "show";
        setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
    } 
}

function task002trigger() {
    if (statistics.bonsais_total==1) {
        task_triggers.task002=1;
        document.getElementById("t002goal").innerHTML = "Click to finish";  
        document.getElementById("ButtonT002").style.cursor= "pointer";
        ButtonT002.className = "grey";
        
        document.getElementById("snack_message").innerHTML = "Goal for 'Tutorial: Plant a bonsai' completed.<br> Go to Tasks to complete.";
        var snackb = document.getElementById("snackbar");
        snackb.className = "show";
        setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
    } 
}

function task003trigger() {
    if (exp_area01.species01+exp_area01.species02+exp_area01.species03==2) {
        if (task_triggers.task002==2 & task_triggers.task003==0) {
        task_triggers.task003=1;
        document.getElementById("t003goal").innerHTML = "Click to finish";  
        document.getElementById("ButtonT003").style.cursor= "pointer";
        ButtonT003.className = "grey";
        
        document.getElementById("snack_message").innerHTML = "Goal for 'Tutorial: Bonsai species and potential' completed.<br> Go to Tasks to complete.";
        var snackb = document.getElementById("snackbar");
        snackb.className = "show";
        setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
        }
    }
}

function task004trigger() {
    task_triggers.task004=1;
    document.getElementById("t004goal").innerHTML = "Click to finish";  
    document.getElementById("ButtonT004").style.cursor= "pointer";
    ButtonT004.className = "grey";
        
    document.getElementById("snack_message").innerHTML = "Goal for 'Tutorial: Learn building robots' completed.<br> Go to Tasks to complete.";
    var snackb = document.getElementById("snackbar");
    snackb.className = "show";
    setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
}

function task005trigger() {
    if (task_triggers.task004==2 & task_triggers.task005==0) {
        task_triggers.task005=1;
        document.getElementById("t005goal").innerHTML = "Click to finish";  
        document.getElementById("ButtonT005").style.cursor= "pointer";
        ButtonT005.className = "grey";
        
        document.getElementById("snack_message").innerHTML = "Goal for 'Tutorial: Craft a robot' completed.<br> Go to Tasks to complete.";
        var snackb = document.getElementById("snackbar");
        snackb.className = "show";
        setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
    }
}

function task006trigger(bonsaixx) {
    if (bonsaixx.level==5 & task_triggers.task006<3) {
            task_triggers.task006 +=1;
    }
    if (task_triggers.task005==2 & task_triggers.task006==3) {
        task_triggers.task006=4;
        document.getElementById("t006goal").innerHTML = "Click to finish";  
        document.getElementById("ButtonT006").style.cursor= "pointer";
        ButtonT006.className = "grey";
        
        document.getElementById("snack_message").innerHTML = "Goal for 'Tutorial: Bonsai growing' completed.<br> Go to Tasks to complete.";
        var snackb = document.getElementById("snackbar");
        snackb.className = "show";
        setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
    }
}

function task007trigger() {
    if (task_triggers.task007<3) {
        task_triggers.task007 +=1;
    }
    if (task_triggers.task006==5 & task_triggers.task007==3) {
        task_triggers.task007=4;
        document.getElementById("t007goal").innerHTML = "Click to finish (Reward: 10 XP)";  
        document.getElementById("ButtonT007").style.cursor= "pointer";
        ButtonT007.className = "grey";
        
        document.getElementById("snack_message").innerHTML = "Goal for 'Tutorial: Compost' completed.<br> Go to Tasks to complete.";
        var snackb = document.getElementById("snackbar");
        snackb.className = "show";
        setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
    }
}

function task008trigger(bonsaixx) {
    if (bonsaixx.level==10 & task_triggers.task008<1) {
        task_triggers.task008 +=1;
    }
    if (task_triggers.task007==5 & task_triggers.task008==1) {
        task_triggers.task008=2;
        document.getElementById("t008goal").innerHTML = "Click to finish (Reward: 10 XP)";  
        document.getElementById("ButtonT008").style.cursor= "pointer";
        ButtonT008.className = "grey";
        
        document.getElementById("snack_message").innerHTML = "Goal for 'Tutorial: Level Up Bonsai' completed.<br> Go to Tasks to complete.";
        var snackb = document.getElementById("snackbar");
        snackb.className = "show";
        setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
    }
}

function task009trigger() {
    if (task_triggers.task008==3 & task_triggers.task009==1) {
        task_triggers.task009=2;
        document.getElementById("t009goal").innerHTML = "Click to finish (Reward: 10 XP)";  
        document.getElementById("ButtonT009").style.cursor= "pointer";
        ButtonT009.className = "grey";
        
        document.getElementById("snack_message").innerHTML = "Goal for 'Tutorial: Growing Skill' completed.<br> Go to Tasks to complete.";
        var snackb = document.getElementById("snackbar");
        snackb.className = "show";
        setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
    }
}

function task010trigger() {
    task_triggers.task010=1;
    document.getElementById("t010goal").innerHTML = "Click to finish";  
    document.getElementById("ButtonT010").style.cursor= "pointer";
    ButtonT010.className = "grey";
        
    document.getElementById("snack_message").innerHTML = "Goal for 'Tutorial: Shopping' completed.<br> Go to Tasks to complete.";
    var snackb = document.getElementById("snackbar");
    snackb.className = "show";
    setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
}

function task011trigger() {
    if (task_triggers.task010==2 & task_triggers.task011==0 & state.workers_total==3) {
        task_triggers.task011=1;
        document.getElementById("t011goal").innerHTML = "Click to finish (Reward: 10 XP)";  
        document.getElementById("ButtonT011").style.cursor= "pointer";
        ButtonT011.className = "grey";
        
        document.getElementById("snack_message").innerHTML = "Goal for 'Tutorial: Shopping #2' completed.<br> Go to Tasks to complete.";
        var snackb = document.getElementById("snackbar");
        snackb.className = "show";
        setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
    }
}


function task012trigger() {
    if (task_triggers.task011==2 & task_triggers.task012==1) {
        task_triggers.task012=2;
        document.getElementById("t012goal").innerHTML = "Click to finish (Reward: 10 XP)";  
        document.getElementById("ButtonT012").style.cursor= "pointer";
        ButtonT012.className = "grey";
        
        document.getElementById("snack_message").innerHTML = "Goal for 'Tutorial: Shaping skill' completed.<br> Go to Tasks to complete.";
        var snackb = document.getElementById("snackbar");
        snackb.className = "show";
        setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
    }
}

function task013trigger() {
    task_triggers.task013=1;
    document.getElementById("t013goal").innerHTML = "Click to finish (Reward: 10 XP)";  
    document.getElementById("ButtonT013").style.cursor= "pointer";
    ButtonT013.className = "grey";
    
    document.getElementById("snack_message").innerHTML = "Goal for 'Tutorial: Patience' completed.<br> Go to Tasks to complete.";
    var snackb = document.getElementById("snackbar");
    snackb.className = "show";
    setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
}
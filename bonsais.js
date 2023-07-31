/* Change name functions */
function ChangeName() {
    nname = document.getElementById("nname"); 
    newname = nname.value;
    document.getElementById("nname").innerText = newname;
    nname = newname.length;
    document.getElementById('nname').value = ''
    if (nname==0) {
    }
    else if (nname>=10) {
        document.getElementById("snack_message").innerText = "Name to long. No more than 9 characters allowed!";
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

function SearchBonsaiShowing() {
    if (x==1) {
        if (z==1) {
            return bonsai001;
        }
        else if (z==2) {
            return bonsai002;
        }
        else if (z==3) {
            return bonsai003;
        }
        else if (z==4) {
            return bonsai004;
        }
        else if (z==5) {
            return bonsai005;
        }
        else if (z==6) {
            return bonsai006;
        }
        else if (z==7) {
            return bonsai007;
        }
        else if (z==8) {
            return bonsai008;
        }
        else if (z==9) {
            return bonsai009;
        }
        else if (z==10) {
            return bonsai010;
        }
    }
    else if (x==11) {
        if (z==1) {
            return bonsai011;
        }
        else if (z==2) {
            return bonsai012;
        }
        else if (z==3) {
            return bonsai013;
        }
        else if (z==4) {
            return bonsai014;
        }
        else if (z==5) {
            return bonsai015;
        }
        else if (z==6) {
            return bonsai016;
        }
        else if (z==7) {
            return bonsai017;
        }
        else if (z==8) {
            return bonsai018;
        }
        else if (z==9) {
            return bonsai019;
        }
        else if (z==10) {
            return bonsai020;
        }
    }
}


    
/* Seedling Planting functions */
function ChooseSeedling(x) {
    if (x==1) {
        ChooseSeedling2(seedling1, seedling2, seedling3, seedling4, seedling5, seedling6, "a", "b", "c", "d", "e", "f", seedlingb_center, seedlingc_center, seedlingd_center, seedlinge_center, seedlingf_center, seedlingb_center_mobile, seedlingc_center_mobile, seedlingd_center_mobile, seedlinge_center_mobile, seedlingf_center_mobile)
    }
    else if (x==2) {
        ChooseSeedling2(seedling2, seedling1, seedling3, seedling4, seedling5, seedling6, "b", "a", "c", "d", "e", "f", seedlinga_center, seedlingc_center, seedlingd_center, seedlinge_center, seedlingf_center, seedlinga_center_mobile, seedlingc_center_mobile, seedlingd_center_mobile, seedlinge_center_mobile, seedlingf_center_mobile)
    }
    else if (x==3) {
        ChooseSeedling2(seedling3, seedling1, seedling2, seedling4, seedling5, seedling6, "c", "a", "b", "d", "e", "f", seedlinga_center, seedlingb_center, seedlingd_center, seedlinge_center, seedlingf_center, seedlinga_center_mobile, seedlingb_center_mobile, seedlingd_center_mobile, seedlinge_center_mobile, seedlingf_center_mobile)
    }
    else if (x==4) {
        ChooseSeedling2(seedling4, seedling1, seedling2, seedling3, seedling5, seedling6, "d", "a", "b", "c", "e", "f", seedlinga_center, seedlingb_center, seedlingc_center, seedlinge_center, seedlingf_center, seedlinga_center_mobile, seedlingb_center_mobile, seedlingc_center_mobile, seedlinge_center_mobile, seedlingf_center_mobile)
    }
    else if (x==5) {
        ChooseSeedling2(seedling5, seedling1, seedling2, seedling3, seedling4, seedling6, "e", "a", "b", "c", "d", "f", seedlinga_center, seedlingb_center, seedlingc_center, seedlingd_center, seedlingf_center, seedlinga_center_mobile, seedlingb_center_mobile, seedlingc_center_mobile, seedlingd_center_mobile, seedlingf_center_mobile)
    }
    else {
        ChooseSeedling2(seedling6, seedling1, seedling2, seedling3, seedling4, seedling5, "e", "a", "b", "c", "d", "e", seedlinga_center, seedlingb_center, seedlingc_center, seedlingd_center, seedlinge_center, seedlinga_center_mobile, seedlingb_center_mobile, seedlingc_center_mobile, seedlingd_center_mobile, seedlinge_center_mobile)
    }
}

function ChooseSeedling2 (seedling1, seedling2, seedling3, seedling4, seedling5, seedling6, a, b, c, d, e, f, seedling1_center, seedling2_center, seedling3_center, seedling4_center, seedling5_center, seedling1_center_mobile, seedling2_center_mobile, seedling3_center_mobile, seedling4_center_mobile, seedling5_center_mobile) {
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
                document.getElementById("seedling"+a+"_center").style.backgroundColor= "#bbb";
                seedling1_center.className = "";
                seedling2_center.className = "";
                seedling3_center.className = "";
                seedling4_center.className = "";
                seedling5_center.className = "";
                document.getElementById("seedling"+b+"_center").style.cursor= "auto";
                document.getElementById("seedling"+c+"_center").style.cursor= "auto";
                document.getElementById("seedling"+d+"_center").style.cursor= "auto";
                document.getElementById("seedling"+e+"_center").style.cursor= "auto";
                document.getElementById("seedling"+f+"_center").style.cursor= "auto";
                document.getElementById("seedling"+a+"_center_mobile").style.backgroundColor= "#bbb";
                seedling1_center_mobile.className = "";
                seedling2_center_mobile.className = "";
                seedling3_center_mobile.className = "";
                seedling4_center_mobile.className = "";
                seedling5_center_mobile.className = "";
                document.getElementById("seedling"+b+"_center_mobile").style.cursor= "auto";
                document.getElementById("seedling"+c+"_center_mobile").style.cursor= "auto";
                document.getElementById("seedling"+d+"_center_mobile").style.cursor= "auto";
                document.getElementById("seedling"+e+"_center_mobile").style.cursor= "auto";
                document.getElementById("seedling"+f+"_center_mobile").style.cursor= "auto";
                seedling1.planting_choosen=1;
            }
            else {
                document.getElementById("seedling"+a+"_center_mobile").style.backgroundColor= "#f1f1f1";
                if (seedling2.treetype>0) {
                    seedlingb_center.className = "darker_grey";
                    document.getElementById("seedling"+b+"_center_mobile").style.cursor= "pointer";
                }
                if (seedling3.treetype>0) {
                    seedlingc_center.className = "darker_grey";
                    document.getElementById("seedling"+c+"_center_mobile").style.cursor= "pointer";
                }
                if (seedling4.treetype>0) {
                    seedlingd_center.className = "darker_grey";
                    document.getElementById("seedling"+d+"_center_mobile").style.cursor= "pointer";
                }
                if (seedling5.treetype>0) {
                    seedlinge_center.className = "darker_grey";
                    document.getElementById("seedling"+e+"_center_mobile").style.cursor= "pointer";
                }
                if (seedling6.treetype>0) {
                    seedlingf_center.className = "darker_grey";
                    document.getElementById("seedling"+f+"_center_mobile").style.cursor= "pointer";
                }
                seedling1.planting_choosen=0;    
            }
        }
    }
}

function PlantSeedling() {
    if (state.workers_available>0) {
        if (worker01.busy==0) {
            PlantSeedling2(worker01);
        } 
        else if (worker02.busy==0) {
            PlantSeedling2(worker02);
        }
        else if (worker03.busy==0) {
            PlantSeedling2(worker03);
        }
    }
    else {
        document.getElementById("snack_message").innerText = "No workers available";
        var snackb = document.getElementById("snackbar");
        snackb.className = "show";
        setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
    }     
}

function PlantSeedling2(worker) {
    if (seedling1.planting_choosen==1) {
        PlantSeedlingPick(seedling1, worker);
    }
    else if (seedling2.planting_choosen==1) {
        PlantSeedlingPick(seedling2, worker);
    }
    else if (seedling3.planting_choosen==1) {
        PlantSeedlingPick(seedling3, worker);
    }
    else if (seedling4.planting_choosen==1) {
        PlantSeedlingPick(seedling4, worker);
    }
    else if (seedling5.planting_choosen==1) {
        PlantSeedlingPick(seedling5, worker);
    }
    else if (seedling6.planting_choosen==1) {
        PlantSeedlingPick(seedling6, worker);
    }
    else {
        document.getElementById("snack_message").innerText = "Choose a seedling to plant first";
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
            PlantSeedlingExecution(bonsai001, seedlingX, worker);
        }
        else if (z==2) {
            state.bonsai_showing==2;
            worker.growing = 2;
            PlantSeedlingExecution(bonsai002, seedlingX, worker);
        }
        else if (z==3) {
            state.bonsai_showing==3;
            worker.growing = 3;
            PlantSeedlingExecution(bonsai003, seedlingX, worker);
        }
        else if (z==4) {
            state.bonsai_showing==4;
            worker.growing = 4;
            PlantSeedlingExecution(bonsai004, seedlingX, worker);
        }
        else if (z==5) {
            state.bonsai_showing==5;
            worker.growing = 5;
            PlantSeedlingExecution(bonsai005, seedlingX, worker);
        }
        else if (z==6) {
            state.bonsai_showing==6;
            worker.growing = 6;
            PlantSeedlingExecution(bonsai006, seedlingX, worker);
        }
        else if (z==7) {
            state.bonsai_showing==7;
            worker.growing = 7;
            PlantSeedlingExecution(bonsai007, seedlingX, worker);
        }
        else if (z==8) {
            state.bonsai_showing==8;
            worker.growing = 8;
            PlantSeedlingExecution(bonsai008, seedlingX, worker);
        }
        else if (z==9) {
            state.bonsai_showing==9;
            worker.growing = 9;
            PlantSeedlingExecution(bonsai009, seedlingX, worker);
        }
        else if (z==10) {
            state.bonsai_showing==10;
            worker.growing = 10;
            PlantSeedlingExecution(bonsai010, seedlingX, worker);
        }
    }
    else if (x==11) {
        if (z==1) {
            state.bonsai_showing==11;
            worker.growing = 11;
            PlantSeedlingExecution(bonsai011, seedlingX, worker);
        }
        else if (z==2) {
            state.bonsai_showing==12;
            worker.growing = 12;
            PlantSeedlingExecution(bonsai012, seedlingX, worker);
        }
        else if (z==3) {
            state.bonsai_showing==13;
            worker.growing = 13;
            PlantSeedlingExecution(bonsai013, seedlingX, worker);
        }
        else if (z==4) {
            state.bonsai_showing==14;
            worker.growing = 14;
            PlantSeedlingExecution(bonsai014, seedlingX, worker);
        }
        else if (z==5) {
            state.bonsai_showing==15;
            worker.growing = 15;
            PlantSeedlingExecution(bonsai015, seedlingX, worker);
        }
        else if (z==6) {
            state.bonsai_showing==16;
            worker.growing = 16;
            PlantSeedlingExecution(bonsai016, seedlingX, worker);
        }
        else if (z==7) {
            state.bonsai_showing==17;
            worker.growing = 17;
            PlantSeedlingExecution(bonsai017, seedlingX, worker);
        }
        else if (z==8) {
            state.bonsai_showing==18;
            worker.growing = 18;
            PlantSeedlingExecution(bonsai018, seedlingX, worker);
        }
        else if (z==9) {
            state.bonsai_showing==19;
            worker.growing = 19;
            PlantSeedlingExecution(bonsai019, seedlingX, worker);
        }
        else if (z==10) {
            state.bonsai_showing==20;
            worker.growing = 20;
            PlantSeedlingExecution(bonsai020, seedlingX, worker);
        }
    }
}

function PlantSeedlingExecution(bonsaixx, seedlingx, worker) {
    state.workers_available -=1;
    worker.busy = 1;
    bonsaixx.name = treetypename[seedlingx.treetype];
    bonsaixx.treetype = seedlingx.treetype;
    bonsaixx.treetypegroup = seedlingx.treetypegroup;
    bonsaixx.treequality = seedlingx.treequality;
    bonsaixx.shiny = seedlingx.shiny;
    bonsaixx.nature = naturerandom();
    bonsaixx.level = 0;
    bonsaixx.foliage = 0;
    bonsaixx.branches = 0;
    bonsaixx.trunk = 0;
    bonsaixx.roots = 0;
    bonsaixx.growing = 1;
    bonsaixx.price = bonsaixx.level*bonsaixx.treetypegroup*bonsaixx.treequality;
    bonsaixx.level_new +=1;
    if (bonsaixx.treequality==1) {
        bonsaixx.growing_zeit = grow_time_tq1[bonsaixx.level];
        cpdistribution(bonsaixx, level_cp_tq1)
        cpdistributionaftercare(bonsaixx);
    }
    else if (bonsaixx.treequality==2) {
        bonsaixx.growing_zeit = grow_time_tq2[bonsaixx.level];
        cpdistribution(bonsaixx, level_cp_tq2)
        cpdistributionaftercare(bonsaixx);
    }
    else if (bonsaixx.treequality==3) {
        bonsaixx.growing_zeit = grow_time_tq3[bonsaixx.level];
        cpdistribution(bonsaixx, level_cp_tq3)
        cpdistributionaftercare(bonsaixx);
    }
    
    if (worker==worker01) {
        document.getElementById("zeit_worker01").innerHTML = "("+bonsaixx.growing_zeit+"&nbsp;seconds left)";
        document.getElementById("worker1_task").innerHTML = '<img src="Images/growing.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Growing';
        document.getElementById("worker1_task_mobile").innerHTML = '<img src="Images/growing.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Growing'; 
        document.getElementById("worker1_task_mobilexs").innerHTML = '<img src="Images/growing.svg" width="20" height="20">'; 
    }
    else if (worker==worker02) {
        document.getElementById("zeit_worker02").innerHTML = "("+bonsaixx.growing_zeit+"&nbsp;seconds left)";
        document.getElementById("worker2_task").innerHTML = '<img src="Images/growing.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Growing'; 
        document.getElementById("worker2_task_mobile").innerHTML = '<img src="Images/growing.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Growing';
        document.getElementById("worker2_task_mobilexs").innerHTML = '<img src="Images/growing.svg" width="20" height="20">';
    }
    else if (worker==worker03) {
        document.getElementById("zeit_worker03").innerHTML = "("+bonsaixx.growing_zeit+"&nbsp;seconds left)";
        document.getElementById("worker3_task").innerHTML = '<img src="Images/growing.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Growing'; 
        document.getElementById("worker3_task_mobile").innerHTML = '<img src="Images/growing.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Growing';
        document.getElementById("worker3_task_mobilexs").innerHTML = '<img src="Images/growing.svg" width="20" height="20">';
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

function cpdistribution(bonsaixx, level_cp_tq) {
    if (bonsaixx.level_new<=10) {
        if (level_cp_tq[0]==2) {
            bonsaixx.foliage_new = Math.round((((2/4)*naturedistribution(bonsaixx, 1)))* 10) / 10;
            bonsaixx.branches_new = Math.round((((2/4)*naturedistribution(bonsaixx, 2)))* 10) / 10;
            bonsaixx.trunk_new = Math.round((((2/4)*naturedistribution(bonsaixx, 3)))* 10) / 10;
            bonsaixx.roots_new = Math.round((((2/4)*naturedistribution(bonsaixx, 4)))* 10) / 10;
        }
        else {
            cpdistribution2(bonsaixx, level_cp_tq, 0);
        }
    }
    else if (bonsaixx.level_new<=20) {
        cpdistribution2(bonsaixx, level_cp_tq, 1);
    }
    else if (bonsaixx.level_new<=30) {
        cpdistribution2(bonsaixx, level_cp_tq, 2);
    }
    else if (bonsaixx.level_new<=40) {
        cpdistribution2(bonsaixx, level_cp_tq, 3);
    }
    else if (bonsaixx.level_new<=50) {
        cpdistribution2(bonsaixx, level_cp_tq, 4);
    }
}

function cpdistribution2(bonsaixx, level_cp_tq, level_index) {
            bonsaixx.leftpoints = Math.round(((((level_cp_tq[level_index]/10)*8)/10)*skills.shaping)* 10) / 10;
            bonsaixx.leftpoints = Math.round((bonsaixx.leftpoints/4)* 10) / 10;
            bonsaixx.leftpoints = Math.round((bonsaixx.leftpoints*4)* 10) / 10;
        if (bonsaixx.leftpoints<0.4 & skills.shaping>0) {
            bonsaixx.leftpoints = 0.4;
        }
        var growingpoints = (Math.round(((((level_cp_tq[level_index]/10)*8)/10)*skills.growing)* 10)/ 10)-(Math.round(((((level_cp_tq[level_index]/10)*8)/10)*skills.shaping)* 10)/ 10);
        if (growingpoints<0.4 & bonsaixx.leftpoints==0 & skills.growing>0) {
            growingpoints = 0.4;
        }
        if (((level_cp_tq[level_index]/10)*2)<2) {
            bonsaixx.foliage_new = Math.round(((((2+growingpoints)/4)*naturedistribution(bonsaixx, 1)))* 10) / 10;
            bonsaixx.branches_new = Math.round(((((2+growingpoints)/4)*naturedistribution(bonsaixx, 2)))* 10) / 10;
            bonsaixx.trunk_new = Math.round(((((2+growingpoints)/4)*naturedistribution(bonsaixx, 3)))* 10) / 10;
            bonsaixx.roots_new = Math.round(((((2+growingpoints)/4)*naturedistribution(bonsaixx, 4)))* 10) / 10;
            if (bonsaixx.leftpoints+(Math.round((((2+growingpoints)/4)*naturedistribution(bonsaixx, 1))* 10) / 10)+(Math.round((((2+growingpoints)/4)*naturedistribution(bonsaixx, 2))* 10) / 10)+(Math.round((((2+growingpoints)/4)*naturedistribution(bonsaixx, 3))* 10) / 10)+(Math.round((((2+growingpoints)/4)*naturedistribution(bonsaixx, 4))* 10) / 10)>level_cp_tq[level_index]) {
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
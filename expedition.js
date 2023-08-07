function expedition(place) {
    if (state.workers_available>0) {
        if (worker01.busy==0) {
            expedition_worker (place, worker01, "worker01", "worker1")
        } 
        else if (worker02.busy==0) {
            expedition_worker (place, worker02, "worker02", "worker2")
        }
        else if (worker03.busy==0) {
            expedition_worker (place, worker03, "worker03", "worker3")
        }
    }
    else {
        document.getElementById("snack_message").innerText = "No workers available";
        var snackb = document.getElementById("snackbar");
        snackb.className = "show";
        setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
    }
}

function expedition_worker (place, worker, worker2, worker3) {
    if (state.seedlings_ontheway<6) {
        state.workers_available -=1;
        worker.busy =1;
        worker.expedition=place;
        if (worker.expedition==1) {
            worker.expedition_zeit=document.getElementById("neighborhood_time").value;
            worker.expedition_time=document.getElementById("neighborhood_time").value;
            document.getElementById("zeit_"+worker2).innerHTML = "("+worker.expedition_zeit+"&nbsp;seconds left)";
            document.getElementById(worker3+"_task").innerHTML = '<img src="Images/expedition.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Expedition'; 
            document.getElementById(worker3+"_task_mobile").innerHTML = '<img src="Images/expedition.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Expedition';
            document.getElementById(worker3+"_task_mobilexs").innerHTML = '<img src="Images/expedition.svg" width="20" height="20">';
            state.seedlings_ontheway +=1;
        }
        else if (worker.expedition==2) {
            worker.expedition_zeit=document.getElementById("cityboundaries_time").value;
            worker.expedition_time=document.getElementById("cityboundaries_time").value;                    
            document.getElementById("zeit"+worker2).innerHTML = "("+worker.expedition_zeit+"&nbsp;seconds left)";
            document.getElementById(worker3+"_task").innerHTML = '<img src="Images/expedition.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Expedition'; 
            document.getElementById(worker3+"_task_mobile").innerHTML = '<img src="Images/expedition.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Expedition';
            document.getElementById(worker3+"_task_mobilexs").innerHTML = '<img src="Images/expedition.svg" width="20" height="20">';
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

function seedling_countdown(worker) {
    if (worker.expedition_zeit==0) {
        if (seedling1.treetype<1) {
            randommaschine (seedling1, worker);
            fetchimage_seedling ("a", seedling1);
            document.getElementById("seedlinga_price_sell").innerHTML = seedling1.price;
            document.getElementById("seedlinga_center").style.cursor= "pointer";
            seedlinga_center.className = "darker_grey";
            document.getElementById("seedlinga_center_mobile").style.cursor= "pointer";
            seedlinga_center_mobile.className = "darker_grey";
            area_bonsais_found(seedling1, worker);
        }
        else if (seedling2.treetype<1) {
            randommaschine (seedling2, worker);
            fetchimage_seedling ("b", seedling2);
            document.getElementById("seedlingb_price_sell").innerHTML = seedling2.price;
            document.getElementById("seedlingb_center").style.cursor= "pointer";
            seedlingb_center.className = "darker_grey";
            document.getElementById("seedlingb_center_mobile").style.cursor= "pointer";
            seedlingb_center_mobile.className = "darker_grey";
            area_bonsais_found(seedling2, worker);
        }
        else if (seedling3.treetype<1) {
            randommaschine (seedling3, worker);
            fetchimage_seedling ("c", seedling3);
            document.getElementById("seedlingc_price_sell").innerHTML = seedling3.price;
            document.getElementById("seedlingc_center").style.cursor= "pointer";
            seedlingc_center.className = "darker_grey";
            document.getElementById("seedlingc_center_mobile").style.cursor= "pointer";
            seedlingc_center_mobile.className = "darker_grey";
            area_bonsais_found(seedling3, worker);
        }
        else if (seedling4.treetype<1) {
            randommaschine (seedling4, worker);
            fetchimage_seedling ("d", seedling4);
            document.getElementById("seedlingd_price_sell").innerHTML = seedling4.price;
            document.getElementById("seedlingd_center").style.cursor= "pointer";
            seedlingd_center.className = "darker_grey";
            document.getElementById("seedlingd_center_mobile").style.cursor= "pointer";
            seedlingd_center_mobile.className = "darker_grey";
            area_bonsais_found(seedling4, worker);
        }
        else if (seedling5.treetype<1) {
            randommaschine (seedling5, worker);
            fetchimage_seedling ("e", seedling5);
            document.getElementById("seedlinge_price_sell").innerHTML = seedling5.price;
            document.getElementById("seedlinge_center").style.cursor= "pointer";
            seedlinge_center.className = "darker_grey";
            document.getElementById("seedlinge_center_mobile").style.cursor= "pointer";
            seedlinge_center_mobile.className = "darker_grey";
            area_bonsais_found(seedling5, worker);
        }
        else if (seedling6.treetype<1) {
            randommaschine (seedling6, worker);
            fetchimage_seedling ("f", seedling6);
            document.getElementById("seedlingf_price_sell").innerHTML = seedling6.price;
            document.getElementById("seedlingf_center").style.cursor= "pointer";
            seedlingf_center.className = "darker_grey";
            document.getElementById("seedlingf_center_mobile").style.cursor= "pointer";
            seedlingf_center_mobile.className = "darker_grey";
            area_bonsais_found(seedling6, worker);
        }
    worker.expedition = 0;
    worker.busy = 0;
    state.workers_available +=1;
    state.seedlings +=1;
    statistics.seedlings_total +=1;
        
    //task001trigger();
        
    //task003trigger();
    
    document.getElementById("seedling_number").innerText = state.seedlings.toLocaleString('en', {minimumFractionDigits: 0});  
    }
}

function randommaschine(seedlingx, worker) {
    if (statistics.seedlings_total==0) {
        seedlingx.treetype=1;
        seedlingx.treetypegroup=1;
        seedlingx.treequality=1;
        seedlingx.shiny=1;
        seedlingx.price= seedlingx.treetypegroup*seedlingx.treequality;
        //experience(1);
    }
    else if (statistics.seedlings_total==3) {
        seedlingx.treetype=2;
        seedlingx.treetypegroup=1;
        seedlingx.treequality=1;
        seedlingx.shiny=1;
        seedlingx.price= seedlingx.treetypegroup*seedlingx.treequality;
        //experience(1);

    }
    else {
    state.random_treetype =Math.random(); //Random number between 0 and 1
    state.random_treequality =Math.random();
    state.random_shiny =Math.random();
    if (worker.expedition==1) {
        if (state.random_treetype>=0.95) { //Random for treetype
            seedlingx.treetype=4;
            seedlingx.treetypegroup=2;
        }
        else if (state.random_treetype>=0.75) {
            seedlingx.treetype=2;
            seedlingx.treetypegroup=1;
        }
        else {
            seedlingx.treetype=1;
            seedlingx.treetypegroup=1;
        }
        if (state.random_shiny>=0.975) { //Random for shiny
            seedlingx.shiny=2;
        }
        else {
            seedlingx.shiny=1;
        }
        if (worker.expedition_time==6) { //Random for treequality
            seedlingx.treequality=1;
        }
        else if (worker.expedition_time==30) {
            if (state.random_treequality>=0.85) {
                seedlingx.treequality=2;
            }
            else {
                seedlingx.treequality=1;
            }
        }
        else if (worker.expedition_time==180) {
            if (state.random_treequality>=0.75) {
                seedlingx.treequality=2;
            }
            else {
                seedlingx.treequality=1;
            }
        }
        seedlingx.price= seedlingx.treetypegroup*seedlingx.treequality;
        //experience(1);
    }
    else if (worker.expedition==2) {
        if (state.random_treetype>=0.99)  { //Random for treetype
            seedlingx.treetype=3;
            seedlingx.treetypegroup=1;
        }
        else if (state.random_treetype>=0.95) {
            seedlingx.treetype=5;
            seedlingx.treetypegroup=2;
        }
        else if (state.random_treetype>=0.80) {
            seedlingx.treetype=4;
            seedlingx.treetypegroup=2;
        }
        else if (state.random_treetype>=0.50) {
            seedlingx.treetype=2;
            seedlingx.treetypegroup=1;
        }
        else {
            seedlingx.treetype=1;
            seedlingx.treetypegroup=1;
        }
        if (state.random_shiny>=0.975) { //Random for shiny
            seedlingx.shiny=2;
        }
        else {
            seedlingx.shiny=1;
        }
        if (worker.expedition_time==30) { //Random for treequality
            if (state.random_treequality>=0.75) {
                seedlingx.treequality=2;
            }
            else {
                seedlingx.treequality=1;
            }
        }
        else if (worker.expedition_time==180) {
            if (state.random_treequality>=0.95) {
                seedlingx.treequality=3;
            }
            else if (state.random_treequality>=0.60) {
                seedlingx.treequality=2;
            }
            else {
                seedlingx.treequality=1;
            }
        }
        else if (worker.expedition_time==1200) {
            if (state.random_treequality>=0.90) {
                seedlingx.treequality=3;
            }
            else if (state.random_treequality>=0.50) {
                seedlingx.treequality=2;
            }
            else {
                seedlingx.treequality=1;
            }
        }
        seedlingx.price= seedlingx.treetypegroup*seedlingx.treequality;
        //experience(2);
    }
    }
}

function area_bonsais_found(seedlingx, worker) {
    if (worker.expedition==1) {
        if (exp_area01.alltreetype==1) {    
        }
        else {
            if (seedlingx.treetype==1) {
                exp_area01.treetype01=1;
                document.getElementById("area01_tt01").innerHTML = '<img src="Images/bonsai01_stamp.svg" width="35" height="35">';
                if (exp_area01.treetype01+exp_area01.treetype02+exp_area01.treetype03==3) {
                    exp_area01.alltreetype=1;
                }
            }
            else if (seedlingx.treetype==2) {
                exp_area01.treetype02=1;
                document.getElementById("area01_tt02").innerHTML = '<img src="Images/bonsai02_stamp.svg" width="35" height="35">';
                if (exp_area01.treetype01+exp_area01.treetype02+exp_area01.treetype03==3) {
                    exp_area01.alltreetype=1;
                }
            }
            else if (seedlingx.treetype==4) {
                exp_area01.treetype03=1;
                document.getElementById("area01_tt03").innerHTML = '<img src="Images/bonsai04_stamp.svg" width="35" height="35">';
                if (exp_area01.treetype01+exp_area01.treetype02+exp_area01.treetype03==3) {
                    exp_area01.alltreetype=1;
                }
            }
        }
        if (exp_area01.alltreequality==1) {
            
        }
        else {
            if (seedlingx.treequality==1) {
                exp_area01.treequality01=1;
                document.getElementById("area01_po01").innerHTML = '<img src="Images/one_stamp.svg" width="35" height="35">';
                if (exp_area01.treequality01+exp_area01.treequality02==2) {
                    exp_area01.alltreequality=1;
                }    
            }
            else if (seedlingx.treequality==2) {
                exp_area01.treequality02=1;
                document.getElementById("area01_po02").innerHTML = '<img src="Images/two_stamp.svg" width="35" height="35">';
                if (exp_area01.treequality01+exp_area01.treequality02==2) {
                    exp_area01.alltreequality=1;
                }  
            }
        }  
    }
    else if (worker.expedition==2) {
        if (exp_area02.alltreetype==1) {    
        }
        else {
            if (seedlingx.treetype==1) {
                exp_area02.treetype01=1;
                document.getElementById("area02_tt01").innerHTML = '<img src="Images/bonsai01_stamp.svg" width="35" height="35">';
                if (exp_area02.treetype01+exp_area02.treetype02+exp_area02.treetype03+exp_area02.treetype04+exp_area02.treetype05==5) {
                    exp_area02.alltreetype=1;
                }
            }
            else if (seedlingx.treetype==2) {
                exp_area02.treetype02=1;
                document.getElementById("area02_tt02").innerHTML = '<img src="Images/bonsai02_stamp.svg" width="35" height="35">';
                if (exp_area02.treetype01+exp_area02.treetype02+exp_area02.treetype03+exp_area02.treetype04+exp_area02.treetype05==5) {
                    exp_area02.alltreetype=1;
                }
            }
            else if (seedlingx.treetype==3) {
                exp_area02.treetype03=1;
                document.getElementById("area02_tt03").innerHTML = '<img src="Images/bonsai03_stamp.svg" width="35" height="35">';
                if (exp_area02.treetype01+exp_area02.treetype02+exp_area02.treetype03+exp_area02.treetype04+exp_area02.treetype05==5) {
                    exp_area02.alltreetype=1;
                }
            }
            else if (seedlingx.treetype==4) {
                exp_area02.treetype04=1;
                document.getElementById("area02_tt04").innerHTML = '<img src="Images/bonsai04_stamp.svg" width="35" height="35">';
                if (exp_area02.treetype01+exp_area02.treetype02+exp_area02.treetype03+exp_area02.treetype04+exp_area02.treetype05==5) {
                    exp_area02.alltreetype=1;
                }
            }
            else if (seedlingx.treetype==5) {
                exp_area02.treetype05=1;
                document.getElementById("area02_tt05").innerHTML = '<img src="Images/bonsai05_stamp.svg" width="35" height="35">';
                if (exp_area02.treetype01+exp_area02.treetype02+exp_area02.treetype03+exp_area02.treetype04+exp_area02.treetype05==5) {
                    exp_area02.alltreetype=1;
                }
            }
        }
        if (exp_area02.alltreequality==1) {  
        }
        else {
            if (seedlingx.treequality==1) {
                exp_area02.treequality01=1;
                document.getElementById("area02_po01").innerHTML = '<img src="Images/one_stamp.svg" width="35" height="35">';
                if (exp_area02.treequality01+exp_area02.treequality02+exp_area02.treequality03==3) {
                    exp_area02.alltreequality=1;
                }    
            }
            else if (seedlingx.treequality==2) {
                exp_area02.treequality02=1;
                document.getElementById("area02_po02").innerHTML = '<img src="Images/two_stamp.svg" width="35" height="35">';
                if (exp_area02.treequality01+exp_area02.treequality02+exp_area02.treequality03==3) {
                    exp_area02.alltreequality=1;
                }  
            }
            else if (seedlingx.treequality==3) {
                exp_area02.treequality03=1;
                document.getElementById("area02_po03").innerHTML = '<img src="Images/three_stamp.svg" width="35" height="35">';
                if (exp_area02.treequality01+exp_area02.treequality02+exp_area02.treequality03==3) {
                    exp_area02.alltreequality=1;
                }  
            }
        }
    }
}
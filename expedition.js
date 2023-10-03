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
        Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;No workers available", "snackbar_attention", 3000, "snackbar_attention show3s");
    }
}

function expedition_worker (place, worker, worker2, worker3) {
    if (state.seedlings_ontheway<6) {
        state.workers_available -=1;
        worker.busy =1;
        worker.expedition=place;
        if (worker.expedition==1) {
            worker.expedition_zeit=document.getElementById("area01_time").value;
            worker.expedition_time=document.getElementById("area01_time").value;
            document.getElementById("zeit_"+worker2).innerHTML = "("+timetracker(worker.expedition_zeit)+"&nbsp;left)";
            document.getElementById(worker3+"_task").innerHTML = '<img src="Images/expedition.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Expedition'; 
            document.getElementById(worker3+"_task_mobile").innerHTML = '<img src="Images/expedition.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Expedition';
            document.getElementById(worker3+"_task_mobilexs").innerHTML = '<img src="Images/expedition.svg" width="20" height="20">';
            state.seedlings_ontheway +=1;
        }
        else if (worker.expedition==2) {
            worker.expedition_zeit=document.getElementById("area02_time").value;
            worker.expedition_time=document.getElementById("area02_time").value;                    
            document.getElementById("zeit_"+worker2).innerHTML = "("+timetracker(worker.expedition_zeit)+"&nbsp;left)";
            document.getElementById(worker3+"_task").innerHTML = '<img src="Images/expedition.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Expedition'; 
            document.getElementById(worker3+"_task_mobile").innerHTML = '<img src="Images/expedition.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Expedition';
            document.getElementById(worker3+"_task_mobilexs").innerHTML = '<img src="Images/expedition.svg" width="20" height="20">';
            state.seedlings_ontheway +=1;
        }
    }
    else {
        Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Seedlings full/about to be", "snackbar_attention", 3000, "snackbar_attention show3s");
    }
}

function seedling_countdown(worker) {
    if (worker.expedition_zeit==0) {
        if (seedling1.treetype<1) {
            randommaschine (seedling1, worker);
            fetchimage_seedling ("a", seedling1);
            document.getElementById("seedlinga_center").style.cursor= "pointer";
            seedlinga_center.className = "darker_grey";
            document.getElementById("seedlinga_center_mobile").style.cursor= "pointer";
            seedlinga_center_mobile.className = "darker_grey";
            area_bonsais_found(seedling1, worker);
            bondex_check(seedling1);
            if (seedling1.shiny==2) {
                statistics.bloomingseedlings_total+=1;
            }
        }
        else if (seedling2.treetype<1) {
            randommaschine (seedling2, worker);
            fetchimage_seedling ("b", seedling2);
            document.getElementById("seedlingb_center").style.cursor= "pointer";
            seedlingb_center.className = "darker_grey";
            document.getElementById("seedlingb_center_mobile").style.cursor= "pointer";
            seedlingb_center_mobile.className = "darker_grey";
            area_bonsais_found(seedling2, worker);
            bondex_check(seedling2);
            if (seedling2.shiny==2) {
                statistics.bloomingseedlings_total+=1;
            }
        }
        else if (seedling3.treetype<1) {
            randommaschine (seedling3, worker);
            fetchimage_seedling ("c", seedling3);
            document.getElementById("seedlingc_center").style.cursor= "pointer";
            seedlingc_center.className = "darker_grey";
            document.getElementById("seedlingc_center_mobile").style.cursor= "pointer";
            seedlingc_center_mobile.className = "darker_grey";
            area_bonsais_found(seedling3, worker);
            bondex_check(seedling3);
            if (seedling3.shiny==2) {
                statistics.bloomingseedlings_total+=1;
            }
        }
        else if (seedling4.treetype<1) {
            randommaschine (seedling4, worker);
            fetchimage_seedling ("d", seedling4);
            document.getElementById("seedlingd_center").style.cursor= "pointer";
            seedlingd_center.className = "darker_grey";
            document.getElementById("seedlingd_center_mobile").style.cursor= "pointer";
            seedlingd_center_mobile.className = "darker_grey";
            area_bonsais_found(seedling4, worker);
            bondex_check(seedling4);
            if (seedling4.shiny==2) {
                statistics.bloomingseedlings_total+=1;
            }
        }
        else if (seedling5.treetype<1) {
            randommaschine (seedling5, worker);
            fetchimage_seedling ("e", seedling5);
            document.getElementById("seedlinge_center").style.cursor= "pointer";
            seedlinge_center.className = "darker_grey";
            document.getElementById("seedlinge_center_mobile").style.cursor= "pointer";
            seedlinge_center_mobile.className = "darker_grey";
            area_bonsais_found(seedling5, worker);
            bondex_check(seedling5);
            if (seedling5.shiny==2) {
                statistics.bloomingseedlings_total+=1;
            }
        }
        else if (seedling6.treetype<1) {
            randommaschine (seedling6, worker);
            fetchimage_seedling ("f", seedling6);
            document.getElementById("seedlingf_center").style.cursor= "pointer";
            seedlingf_center.className = "darker_grey";
            document.getElementById("seedlingf_center_mobile").style.cursor= "pointer";
            seedlingf_center_mobile.className = "darker_grey";
            area_bonsais_found(seedling6, worker);
            bondex_check(seedling6);
            if (seedling6.shiny==2) {
                statistics.bloomingseedlings_total+=1;
            }
        }
        worker.expedition = 0;
        worker.busy = 0;
        state.workers_available +=1;
        state.seedlings +=1;
        statistics.seedlings_total +=1;
        
        taskstones();
        
        //task001trigger();
    
        //task003trigger();
    
        document.getElementById("seedling_number").innerText = state.seedlings.toLocaleString('en', {minimumFractionDigits: 0});  
    }
}

function seedlingprice(seedlingx) {
    if (seedlingx.treetype==1 || seedlingx.treetype==4 || seedlingx.treetype==7 || seedlingx.treetype==10 || seedlingx.treetype==13 || seedlingx.treetype==14 || seedlingx.treetype==18 || seedlingx.treetype==19 || seedlingx.treetype==23 || seedlingx.treetype==24) {
        return Math.ceil(1*(seedlingx.treequality/5)*seedlingx.shiny);
    }
    else if (seedlingx.treetype==2 || seedlingx.treetype==5 || seedlingx.treetype==8 || seedlingx.treetype==11 || seedlingx.treetype==15 || seedlingx.treetype==20 || seedlingx.treetype==25 || seedlingx.treetype==28) {
        return Math.ceil(2*(seedlingx.treequality/5)*seedlingx.shiny);
    }
    else if (seedlingx.treetype==3 || seedlingx.treetype==6 || seedlingx.treetype==9 || seedlingx.treetype==16 || seedlingx.treetype==21 || seedlingx.treetype==26 || seedlingx.treetype==29 || seedlingx.treetype==30) {
        return Math.ceil(3*(seedlingx.treequality/5)*seedlingx.shiny);
    }
    else if (seedlingx.treetype==12 || seedlingx.treetype==17 || seedlingx.treetype==22) {
        return Math.ceil(4*(seedlingx.treequality/5)*seedlingx.shiny);
    }
    else if (seedlingx.treetype==27 || seedlingx.treetype==31 || seedlingx.treetype==32) {
        return Math.ceil(5*(seedlingx.treequality/5)*seedlingx.shiny);
    }
    else if (seedlingx.treetype==33 || seedlingx.treetype==34 || seedlingx.treetype==35) {
        return Math.ceil(6*(seedlingx.treequality/5)*seedlingx.shiny);
    }
}

function randommaschine(seedlingx, worker) {
    if (statistics.seedlings_total==0) {
        seedlingx.treetype=1;
        seedlingx.treetypegroup=1;
        seedlingx.treequality=1;
        seedlingx.shiny=1;
        seedlingx.price= seedlingprice(seedlingx);
        experience(1);
    }
    else if (statistics.seedlings_total==3) {
        seedlingx.treetype=2;
        seedlingx.treetypegroup=1;
        seedlingx.treequality=1;
        seedlingx.shiny=1;
        seedlingx.price= seedlingprice(seedlingx);
        experience(1);

    }
    else {
    state.random_treetype =Math.random(); //Random number between 0 and 1
    state.random_treequality =Math.random();
    state.random_shiny =Math.random();
    if (worker.expedition==1) {
        if (state.random_treetype>=0.76) { //Random for treetype
            seedlingx.treetype=1;
            seedlingx.treetypegroup=1;
        }
        else if (state.random_treetype>=0.66) {
            seedlingx.treetype=2;
            seedlingx.treetypegroup=1;
        }
        else if (state.random_treetype>=0.43) {
            seedlingx.treetype=4;
            seedlingx.treetypegroup=2;
        }
        else if (state.random_treetype>=0.33) {
            seedlingx.treetype=5;
            seedlingx.treetypegroup=2;
        }
        else if (state.random_treetype>=0.10) {
            seedlingx.treetype=7;
            seedlingx.treetypegroup=3;
        }
        else {
            seedlingx.treetype=8;
            seedlingx.treetypegroup=3;
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
            if (state.random_treequality>=0.88) {
                seedlingx.treequality=2;
            }
            else {
                seedlingx.treequality=1;
            }
        }
        else if (worker.expedition_time==180) {
            if (state.random_treequality>=0.98) {
                seedlingx.treequality=3;
            }
            else if (state.random_treequality>=0.78) {
                seedlingx.treequality=2;
            }
            else {
                seedlingx.treequality=1;
            }
        }
        seedlingx.price= seedlingprice(seedlingx);
        experience(1);
    }
    else if (worker.expedition==2) {
        if (state.random_treetype>=0.80)  { //Random for treetype
            seedlingx.treetype=1;
            seedlingx.treetypegroup=1;
        }
        else if (state.random_treetype>=0.76) {
            seedlingx.treetype=3;
            seedlingx.treetypegroup=1;
        }
        else if (state.random_treetype>=0.56) {
            seedlingx.treetype=4;
            seedlingx.treetypegroup=2;
        }
        else if (state.random_treetype>=0.52) {
            seedlingx.treetype=6;
            seedlingx.treetypegroup=2;
        }
        else if (state.random_treetype>=0.48) {
            seedlingx.treetype=9;
            seedlingx.treetypegroup=3;
        }
        else if (state.random_treetype>=0.28) {
            seedlingx.treetype=10;
            seedlingx.treetypegroup=4;
        }
        else if (state.random_treetype>=0.20) {
            seedlingx.treetype=11;
            seedlingx.treetypegroup=4;
        }
        else if (state.random_treetype>=0.12) {
            seedlingx.treetype=13;
            seedlingx.treetypegroup=5;
        }
        else {
            seedlingx.treetype=14;
            seedlingx.treetypegroup=5;
        }
        if (state.random_shiny>=0.975) { //Random for shiny
            seedlingx.shiny=2;
        }
        else {
            seedlingx.shiny=1;
        }
        if (worker.expedition_time==30) { //Random for treequality
            if (state.random_treequality>=0.88) {
                seedlingx.treequality=2;
            }
            else {
                seedlingx.treequality=1;
            }
        }
        else if (worker.expedition_time==180) {
            if (state.random_treequality>=0.98) {
                seedlingx.treequality=3;
            }
            else if (state.random_treequality>=0.78) {
                seedlingx.treequality=2;
            }
            else {
                seedlingx.treequality=1;
            }
        }
        else if (worker.expedition_time==1200) {
            if (state.random_treequality>=0.988) {
                seedlingx.treequality=4;
            }
            else if (state.random_treequality>=0.915) {
                seedlingx.treequality=3;
            }
            else if (state.random_treequality>=0.665) {
                seedlingx.treequality=2;
            }
            else {
                seedlingx.treequality=1;
            }
        }
        seedlingx.price= seedlingprice(seedlingx);
        experience(2);
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
                if (exp_area01.treetype01+exp_area01.treetype02+exp_area01.treetype04+exp_area01.treetype05+exp_area01.treetype07+exp_area01.treetype08==6) {
                    exp_area01.alltreetype=1;
                }
                if (statistics.bondex_bonsai01_discovered==0) {
                    statistics.bondex_bonsai01_discovered=1;
                    statistics.bondex_treetype_discovered+=1;
                    taskstones();
                }                
            }
            else if (seedlingx.treetype==2) {
                exp_area01.treetype02=1;
                document.getElementById("area01_tt02").innerHTML = '<img src="Images/bonsai02_stamp.svg" width="35" height="35">';
                if (exp_area01.treetype01+exp_area01.treetype02+exp_area01.treetype04+exp_area01.treetype05+exp_area01.treetype07+exp_area01.treetype08==6) {
                    exp_area01.alltreetype=1;
                }
                if (statistics.bondex_bonsai02_discovered==0) {
                    statistics.bondex_bonsai02_discovered=1;
                    statistics.bondex_treetype_discovered+=1;
                    taskstones();
                } 
            }
            else if (seedlingx.treetype==4) {
                exp_area01.treetype04=1;
                document.getElementById("area01_tt04").innerHTML = '<img src="Images/bonsai04_stamp.svg" width="35" height="35">';
                if (exp_area01.treetype01+exp_area01.treetype02+exp_area01.treetype04+exp_area01.treetype05+exp_area01.treetype07+exp_area01.treetype08==6) {
                    exp_area01.alltreetype=1;
                }
                if (statistics.bondex_bonsai04_discovered==0) {
                    statistics.bondex_bonsai04_discovered=1;
                    statistics.bondex_treetype_discovered+=1;
                    taskstones();
                } 
            }
            else if (seedlingx.treetype==5) {
                exp_area01.treetype05=1;
                document.getElementById("area01_tt05").innerHTML = '<img src="Images/bonsai05_stamp.svg" width="35" height="35">';
                if (exp_area01.treetype01+exp_area01.treetype02+exp_area01.treetype04+exp_area01.treetype05+exp_area01.treetype07+exp_area01.treetype08==6) {
                    exp_area01.alltreetype=1;
                }
                if (statistics.bondex_bonsai05_discovered==0) {
                    statistics.bondex_bonsai05_discovered=1;
                    statistics.bondex_treetype_discovered+=1;
                    taskstones();
                } 
            }
            else if (seedlingx.treetype==7) {
                exp_area01.treetype07=1;
                document.getElementById("area01_tt07").innerHTML = '<img src="Images/bonsai07_stamp.svg" width="35" height="35">';
                if (exp_area01.treetype01+exp_area01.treetype02+exp_area01.treetype04+exp_area01.treetype05+exp_area01.treetype07+exp_area01.treetype08==6) {
                    exp_area01.alltreetype=1;
                }
                if (statistics.bondex_bonsai07_discovered==0) {
                    statistics.bondex_bonsai07_discovered=1;
                    statistics.bondex_treetype_discovered+=1;
                    taskstones();
                } 
            }
            else if (seedlingx.treetype==8) {
                exp_area01.treetype08=1;
                document.getElementById("area01_tt08").innerHTML = '<img src="Images/bonsai08_stamp.svg" width="35" height="35">';
                if (exp_area01.treetype01+exp_area01.treetype02+exp_area01.treetype04+exp_area01.treetype05+exp_area01.treetype07+exp_area01.treetype08==6) {
                    exp_area01.alltreetype=1;
                }
                if (statistics.bondex_bonsai08_discovered==0) {
                    statistics.bondex_bonsai08_discovered=1;
                    statistics.bondex_treetype_discovered+=1;
                    taskstones();
                } 
            }
        }
        if (exp_area01.alltreequality==1) {
            
        }
        else {
            if (seedlingx.treequality==1) {
                exp_area01.treequality01=1;
                document.getElementById("area01_tq01").innerHTML = '<img src="Images/one_stamp.svg" width="35" height="35">';
                if (exp_area01.treequality01+exp_area01.treequality02+exp_area01.treequality03==3) {
                    exp_area01.alltreequality=1;
                }    
            }
            else if (seedlingx.treequality==2) {
                exp_area01.treequality02=1;
                document.getElementById("area01_tq02").innerHTML = '<img src="Images/two_stamp.svg" width="35" height="35">';
                if (exp_area01.treequality01+exp_area01.treequality02+exp_area01.treequality03==3) {
                    exp_area01.alltreequality=1;
                }  
            }
            else if (seedlingx.treequality==3) {
                exp_area01.treequality03=1;
                document.getElementById("area01_tq03").innerHTML = '<img src="Images/three_stamp.svg" width="35" height="35">';
                if (exp_area01.treequality01+exp_area01.treequality02+exp_area01.treequality03==3) {
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
                if (exp_area02.treetype01+exp_area02.treetype03+exp_area02.treetype04+exp_area02.treetype06+exp_area02.treetype09+exp_area02.treetype10+exp_area02.treetype11+exp_area02.treetype13+exp_area02.treetype14==9) {
                    exp_area02.alltreetype=1;
                }
                if (statistics.bondex_bonsai01_discovered==0) {
                    statistics.bondex_bonsai01_discovered=1;
                    statistics.bondex_treetype_discovered+=1;
                    taskstones();
                } 
            }
            else if (seedlingx.treetype==3) {
                exp_area02.treetype03=1;
                document.getElementById("area02_tt03").innerHTML = '<img src="Images/bonsai03_stamp.svg" width="35" height="35">';
                if (exp_area02.treetype01+exp_area02.treetype03+exp_area02.treetype04+exp_area02.treetype06+exp_area02.treetype09+exp_area02.treetype10+exp_area02.treetype11+exp_area02.treetype13+exp_area02.treetype14==9) {
                    exp_area02.alltreetype=1;
                }
                if (statistics.bondex_bonsai03_discovered==0) {
                    statistics.bondex_bonsai03_discovered=1;
                    statistics.bondex_treetype_discovered+=1;
                    taskstones();
                } 
            }
            else if (seedlingx.treetype==4) {
                exp_area02.treetype04=1;
                document.getElementById("area02_tt04").innerHTML = '<img src="Images/bonsai04_stamp.svg" width="35" height="35">';
                if (exp_area02.treetype01+exp_area02.treetype03+exp_area02.treetype04+exp_area02.treetype06+exp_area02.treetype09+exp_area02.treetype10+exp_area02.treetype11+exp_area02.treetype13+exp_area02.treetype14==9) {
                    exp_area02.alltreetype=1;
                }
                if (statistics.bondex_bonsai04_discovered==0) {
                    statistics.bondex_bonsai04_discovered=1;
                    statistics.bondex_treetype_discovered+=1;
                    taskstones();
                } 
            }
            else if (seedlingx.treetype==6) {
                exp_area02.treetype06=1;
                document.getElementById("area02_tt06").innerHTML = '<img src="Images/bonsai06_stamp.svg" width="35" height="35">';
                if (exp_area02.treetype01+exp_area02.treetype03+exp_area02.treetype04+exp_area02.treetype06+exp_area02.treetype09+exp_area02.treetype10+exp_area02.treetype11+exp_area02.treetype13+exp_area02.treetype14==9) {
                    exp_area02.alltreetype=1;
                }
                if (statistics.bondex_bonsai06_discovered==0) {
                    statistics.bondex_bonsai06_discovered=1;
                    statistics.bondex_treetype_discovered+=1;
                    taskstones();
                } 
            }
            else if (seedlingx.treetype==9) {
                exp_area02.treetype09=1;
                document.getElementById("area02_tt09").innerHTML = '<img src="Images/bonsai09_stamp.svg" width="35" height="35">';
                if (exp_area02.treetype01+exp_area02.treetype03+exp_area02.treetype04+exp_area02.treetype06+exp_area02.treetype09+exp_area02.treetype10+exp_area02.treetype11+exp_area02.treetype13+exp_area02.treetype14==9) {
                    exp_area02.alltreetype=1;
                }
                if (statistics.bondex_bonsai09_discovered==0) {
                    statistics.bondex_bonsai09_discovered=1;
                    statistics.bondex_treetype_discovered+=1;
                    taskstones();
                } 
            }
            else if (seedlingx.treetype==10) {
                exp_area02.treetype10=1;
                document.getElementById("area02_tt10").innerHTML = '<img src="Images/bonsai10_stamp.svg" width="35" height="35">';
                if (exp_area02.treetype01+exp_area02.treetype03+exp_area02.treetype04+exp_area02.treetype06+exp_area02.treetype09+exp_area02.treetype10+exp_area02.treetype11+exp_area02.treetype13+exp_area02.treetype14==9) {
                    exp_area02.alltreetype=1;
                }
                if (statistics.bondex_bonsai10_discovered==0) {
                    statistics.bondex_bonsai10_discovered=1;
                    statistics.bondex_treetype_discovered+=1;
                    taskstones();
                } 
            }
            else if (seedlingx.treetype==11) {
                exp_area02.treetype11=1;
                document.getElementById("area02_tt11").innerHTML = '<img src="Images/bonsai11_stamp.svg" width="35" height="35">';
                if (exp_area02.treetype01+exp_area02.treetype03+exp_area02.treetype04+exp_area02.treetype06+exp_area02.treetype09+exp_area02.treetype10+exp_area02.treetype11+exp_area02.treetype13+exp_area02.treetype14==9) {
                    exp_area02.alltreetype=1;
                }
                if (statistics.bondex_bonsai11_discovered==0) {
                    statistics.bondex_bonsai11_discovered=1;
                    statistics.bondex_treetype_discovered+=1;
                    taskstones();
                } 
            }
            else if (seedlingx.treetype==13) {
                exp_area02.treetype13=1;
                document.getElementById("area02_tt13").innerHTML = '<img src="Images/bonsai13_stamp.svg" width="35" height="35">';
                if (exp_area02.treetype01+exp_area02.treetype03+exp_area02.treetype04+exp_area02.treetype06+exp_area02.treetype09+exp_area02.treetype10+exp_area02.treetype11+exp_area02.treetype13+exp_area02.treetype14==9) {
                    exp_area02.alltreetype=1;
                }
                if (statistics.bondex_bonsai13_discovered==0) {
                    statistics.bondex_bonsai13_discovered=1;
                    statistics.bondex_treetype_discovered+=1;
                    taskstones();
                } 
            }
            else if (seedlingx.treetype==14) {
                exp_area02.treetype14=1;
                document.getElementById("area02_tt14").innerHTML = '<img src="Images/bonsai14_stamp.svg" width="35" height="35">';
                if (exp_area02.treetype01+exp_area02.treetype03+exp_area02.treetype04+exp_area02.treetype06+exp_area02.treetype09+exp_area02.treetype10+exp_area02.treetype11+exp_area02.treetype13+exp_area02.treetype14==9) {
                    exp_area02.alltreetype=1;
                }
                if (statistics.bondex_bonsai14_discovered==0) {
                    console.log(statistics.bondex_treetype_discovered, "H");
                    statistics.bondex_bonsai14_discovered=1;
                    statistics.bondex_treetype_discovered+=1;
                    console.log(statistics.bondex_treetype_discovered, "H");
                    taskstones();
                } 
            }
        }
        if (exp_area02.alltreequality==1) {  
        }
        else {
            if (seedlingx.treequality==1) {
                exp_area02.treequality01=1;
                document.getElementById("area02_tq01").innerHTML = '<img src="Images/one_stamp.svg" width="35" height="35">';
                if (exp_area02.treequality01+exp_area02.treequality02+exp_area02.treequality03+exp_area02.treequality04==4) {
                    exp_area02.alltreequality=1;
                }    
            }
            else if (seedlingx.treequality==2) {
                exp_area02.treequality02=1;
                document.getElementById("area02_tq02").innerHTML = '<img src="Images/two_stamp.svg" width="35" height="35">';
                if (exp_area02.treequality01+exp_area02.treequality02+exp_area02.treequality03+exp_area02.treequality04==4) {
                    exp_area02.alltreequality=1;
                }  
            }
            else if (seedlingx.treequality==3) {
                exp_area02.treequality03=1;
                document.getElementById("area02_tq03").innerHTML = '<img src="Images/three_stamp.svg" width="35" height="35">';
                if (exp_area02.treequality01+exp_area02.treequality02+exp_area02.treequality03+exp_area02.treequality04==4) {
                    exp_area02.alltreequality=1;
                }  
            }
            else if (seedlingx.treequality==4) {
                exp_area02.treequality04=1;
                document.getElementById("area02_tq04").innerHTML = '<img src="Images/four_stamp.svg" width="35" height="35">';
                if (exp_area02.treequality01+exp_area02.treequality02+exp_area02.treequality03+exp_area02.treequality04==4) {
                    exp_area02.alltreequality=1;
                }  
            }
        }
    }
}

function area01_time_change() {
    area01_time = document.getElementById("area01_time").value;
    document.getElementById("area01time").innerHTML = timetracker(area01_time);
}

function area02_time_change() {
    area02_time = document.getElementById("area02_time").value;
    document.getElementById("area02time").innerHTML = timetracker(area02_time);
}
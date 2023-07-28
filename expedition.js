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
            state.seedlings_ontheway +=1;
        }
        else if (worker.expedition==2) {
            worker.expedition_zeit=document.getElementById("cityboundaries_time").value;
            worker.expedition_time=document.getElementById("cityboundaries_time").value;                    
            document.getElementById("zeit"+worker2).innerHTML = "("+worker.expedition_zeit+"&nbsp;seconds left)";
            document.getElementById(worker3+"_task").innerHTML = '<img src="Images/expedition.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Expedition'; 
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
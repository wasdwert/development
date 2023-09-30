var tasks = {
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

var milestones = {
    milestone_bonsaitotal1: 0,
    milestone_seedlingtotal10: 0,
    
    milestone_treetypesdiscovered5: 0,
    milestone_treetypesdiscovered10: 0,
}


function taskstones() {
    if (statistics.bonsais_total==1 && milestones.milestone_bonsaitotal1==0) {
        milestones.milestone_bonsaitotal1=1;
        Snackbar("<img src='Images/milestone_white.svg' width='30' height='30'>&nbsp;Milestone: First bonsai<br>&nbsp;Reward: 1 XP", "snackbar_skillstone", 6000, "snackbar_skillstone show6s");
        document.getElementById("milestone_bonsaitotal1_image").innerHTML = '<img src="Images/milestones/bonsaitotal1.svg" width="50" height="50">';
        document.getElementById("milestone_bonsaitotal1_name").innerHTML = 'First bonsai';
        document.getElementById("milestone_bonsaitotal1_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
        experience(1);
    }
    if (statistics.seedlings_total==10 && milestones.milestone_seedlingtotal10==0) {
        milestones.milestone_seedlingtotal10=1;
        Snackbar("<img src='Images/milestone_white.svg' width='30' height='30'>&nbsp;Milestone: 10 seedlings found<br>&nbsp;Reward: 2 XP", "snackbar_skillstone", 6000, "snackbar_skillstone show6s");
        document.getElementById("milestone_seedlingtotal10_image").innerHTML = '<img src="Images/milestones/seedlingtotal10.svg" width="50" height="50">';
        document.getElementById("milestone_seedlingtotal10_name").innerHTML = '10 seedlings found';
        document.getElementById("milestone_seedlingtotal10_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
        experience(2);
    }
    if (statistics.bondex_treetype_discovered==5 && milestones.milestone_treetypesdiscovered5==0) {
        milestones.milestone_treetypesdiscovered5=1;
        Snackbar("<img src='Images/milestone_white.svg' width='30' height='30'>&nbsp;Milestone: 5 different treetypes found<br>&nbsp;Reward: 3 XP", "snackbar_skillstone", 6000, "snackbar_skillstone show6s");
        document.getElementById("milestone_treetypesdiscovered5_image").innerHTML = '<img src="Images/milestones/treetypesdiscovered5.svg" width="50" height="50">';
        document.getElementById("milestone_treetypesdiscovered5_name").innerHTML = '5 different treetypes found';
        document.getElementById("milestone_treetypesdiscovered5_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
        experience(3);
    }
    if (statistics.bondex_treetype_discovered==10 && milestones.milestone_treetypesdiscovered10==0) {
        milestones.milestone_treetypesdiscovered10=1;
        Snackbar("<img src='Images/milestone_white.svg' width='30' height='30'>&nbsp;Milestone: 10 different treetypes found<br>&nbsp;Reward: 5 XP", "snackbar_skillstone", 6000, "snackbar_skillstone show6s");
        document.getElementById("milestone_treetypesdiscovered10_image").innerHTML = '<img src="Images/milestones/treetypesdiscovered10.svg" width="50" height="50">';
        document.getElementById("milestone_treetypesdiscovered10_name").innerHTML = '10 different treetypes found';
        document.getElementById("milestone_treetypesdiscovered10_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
        experience(5);
    }
}

function taskstones_checkup() {
    if (milestones.milestone_bonsaitotal1==1) {
        document.getElementById("milestone_bonsaitotal1_image").innerHTML = '<img src="Images/milestones/bonsaitotal1.svg" width="50" height="50">';
        document.getElementById("milestone_bonsaitotal1_name").innerHTML = 'First bonsai';
        document.getElementById("milestone_bonsaitotal1_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
    }
    if (milestones.milestone_seedlingtotal10==1) {
        document.getElementById("milestone_seedlingtotal10_image").innerHTML = '<img src="Images/milestones/seedlingtotal10.svg" width="50" height="50">';
        document.getElementById("milestone_seedlingtotal10_name").innerHTML = '10 seedlings found';
        document.getElementById("milestone_seedlingtotal10_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
    }
    if (milestones.milestone_treetypesdiscovered5==1) {
        document.getElementById("milestone_treetypesdiscovered5_image").innerHTML = '<img src="Images/milestones/treetypesdiscovered5.svg" width="50" height="50">';
        document.getElementById("milestone_treetypesdiscovered5_name").innerHTML = '5 different treetypes found';
        document.getElementById("milestone_treetypesdiscovered5_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
    }
    if (milestones.milestone_treetypesdiscovered10==1) {
        document.getElementById("milestone_treetypesdiscovered10_image").innerHTML = '<img src="Images/milestones/treetypesdiscovered10.svg" width="50" height="50">';
        document.getElementById("milestone_treetypesdiscovered10_name").innerHTML = '10 different treetypes found';
        document.getElementById("milestone_treetypesdiscovered10_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
    }
}
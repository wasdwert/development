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
    milestone_bonsaitotal10: 0,
    milestone_bonsaitotal25: 0,
    milestone_bonsaitotal100: 0,
    milestone_bloomingbonsais_total1: 0,
    milestone_bloomingbonsais_total10: 0,
    milestone_bloomingbonsais_total25: 0,
    milestone_bloomingbonsais_total100: 0,
    
    milestone_seedlingtotal10: 0,
    milestone_seedlingtotal25: 0,
    milestone_seedlingtotal100: 0,
    milestone_seedlingtotal250: 0,
    milestone_seedlingtotal1000: 0,
    milestone_bloomingseedlingtotal10: 0,
    milestone_bloomingseedlingtotal25: 0,
    milestone_bloomingseedlingtotal100: 0,
    milestone_bloomingseedlingtotal250: 0,
    milestone_bloomingseedlingtotal1000: 0,
    
    milestone_treetypesdiscovered5: 0,
    milestone_treetypesdiscovered10: 0,
    
    milestone_bonsai01normalst_all: 0,
    milestone_bonsai02normalst_all: 0,
    milestone_bonsai03normalst_all: 0,
    milestone_bonsai04normalst_all: 0,
    milestone_bonsai05normalst_all: 0,
    milestone_bonsai06normalst_all: 0,
    milestone_bonsai07normalst_all: 0,
    milestone_bonsai08normalst_all: 0,
    milestone_bonsai09normalst_all: 0,
    milestone_bonsai10normalst_all: 0,
    milestone_bonsai11normalst_all: 0,
    milestone_bonsai12normalst_all: 0,
    milestone_bonsai13normalst_all: 0,
    milestone_bonsai14normalst_all: 0,
    milestone_bonsai01bloomingst_all: 0,
    milestone_bonsai02bloomingst_all: 0,
    milestone_bonsai03bloomingst_all: 0,
    milestone_bonsai04bloomingst_all: 0,
    milestone_bonsai05bloomingst_all: 0,
    milestone_bonsai06bloomingst_all: 0,
    milestone_bonsai07bloomingst_all: 0,
    milestone_bonsai08bloomingst_all: 0,
    milestone_bonsai09bloomingst_all: 0,
    milestone_bonsai10bloomingst_all: 0,
    milestone_bonsai11bloomingst_all: 0,
    milestone_bonsai12bloomingst_all: 0,
    milestone_bonsai13bloomingst_all: 0,
    milestone_bonsai14bloomingst_all: 0,
}


function taskstones() {
    /*Bonsais Total*/
    if (statistics.bonsais_total==1 && milestones.milestone_bonsaitotal1==0) {
        milestones.milestone_bonsaitotal1=1;
        Snackbar("<img src='Images/milestone_white.svg' width='30' height='30'>&nbsp;Milestone: First bonsai<br>&nbsp;Reward: 1 XP", "snackbar_skillstone", 6000, "snackbar_skillstone show6s");
        document.getElementById("milestone_bonsaitotal1_image").innerHTML = '<img src="Images/milestones/bonsaitotal1.svg" width="50" height="50">';
        document.getElementById("milestone_bonsaitotal1_name").innerHTML = 'First bonsai';
        document.getElementById("milestone_bonsaitotal1_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
        experience(1);
    }
    if (statistics.bonsais_total==10 && milestones.milestone_bonsaitotal10==0) {
        milestones.milestone_bonsaitotal10=1;
        Snackbar("<img src='Images/milestone_white.svg' width='30' height='30'>&nbsp;Milestone: 10 bonsais<br>&nbsp;Reward: 5 XP", "snackbar_skillstone", 6000, "snackbar_skillstone show6s");
        document.getElementById("milestone_bonsaitotal10_image").innerHTML = '<img src="Images/milestones/bonsaitotal10.svg" width="50" height="50">';
        document.getElementById("milestone_bonsaitotal10_name").innerHTML = '10 bonsais';
        document.getElementById("milestone_bonsaitotal10_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
        experience(5);
    }
    if (statistics.bonsais_total==25 && milestones.milestone_bonsaitotal25==0) {
        milestones.milestone_bonsaitotal25=1;
        Snackbar("<img src='Images/milestone_white.svg' width='30' height='30'>&nbsp;Milestone: 25 bonsais<br>&nbsp;Reward: 10 XP", "snackbar_skillstone", 6000, "snackbar_skillstone show6s");
        document.getElementById("milestone_bonsaitotal25_image").innerHTML = '<img src="Images/milestones/bonsaitotal25.svg" width="50" height="50">';
        document.getElementById("milestone_bonsaitotal25_name").innerHTML = '25 bonsais';
        document.getElementById("milestone_bonsaitotal25_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
        experience(10);
    }
    if (statistics.bonsais_total==100 && milestones.milestone_bonsaitotal100==0) {
        milestones.milestone_bonsaitotal100=1;
        Snackbar("<img src='Images/milestone_white.svg' width='30' height='30'>&nbsp;Milestone: 100 bonsais<br>&nbsp;Reward: 25 XP", "snackbar_skillstone", 6000, "snackbar_skillstone show6s");
        document.getElementById("milestone_bonsaitotal100_image").innerHTML = '<img src="Images/milestones/bonsaitotal100.svg" width="50" height="50">';
        document.getElementById("milestone_bonsaitotal100_name").innerHTML = '100 bonsais';
        document.getElementById("milestone_bonsaitotal100_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
        experience(25);
    }
    /*Blooming bonsais Total*/
    if (statistics.bloomingbonsais_total==1 && milestones.milestone_bloomingbonsais_total1==0) {
        milestones.milestone_bloomingbonsais_total1=1;
        Snackbar("<img src='Images/milestone_white.svg' width='30' height='30'>&nbsp;Milestone: First blooming bonsai<br>&nbsp;Reward: 5 XP", "snackbar_skillstone", 6000, "snackbar_skillstone show6s");
        document.getElementById("milestone_bloomingbonsais_total1_image").innerHTML = '<img src="Images/milestones/bloomingbonsais_total1.svg" width="50" height="50">';
        document.getElementById("milestone_bloomingbonsais_total1_name").innerHTML = 'First blooming bonsai';
        document.getElementById("milestone_bloomingbonsais_total1_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
        experience(5);
    }
    if (statistics.bloomingbonsais_total==10 && milestones.milestone_bloomingbonsais_total10==0) {
        milestones.milestone_bloomingbonsais_total1=1;
        Snackbar("<img src='Images/milestone_white.svg' width='30' height='30'>&nbsp;Milestone: 10 blooming bonsais<br>&nbsp;Reward: 10 XP", "snackbar_skillstone", 6000, "snackbar_skillstone show6s");
        document.getElementById("milestone_bloomingbonsais_total10_image").innerHTML = '<img src="Images/milestones/bloomingbonsais_total10.svg" width="50" height="50">';
        document.getElementById("milestone_bloomingbonsais_total10_name").innerHTML = '10 blooming bonsais';
        document.getElementById("milestone_bloomingbonsais_total10_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
        experience(10);
    }
    if (statistics.bloomingbonsais_total==25 && milestones.milestone_bloomingbonsais_total25==0) {
        milestones.milestone_bloomingbonsais_total1=1;
        Snackbar("<img src='Images/milestone_white.svg' width='30' height='30'>&nbsp;Milestone: 25 blooming bonsais<br>&nbsp;Reward: 25 XP", "snackbar_skillstone", 6000, "snackbar_skillstone show6s");
        document.getElementById("milestone_bloomingbonsais_total25_image").innerHTML = '<img src="Images/milestones/bloomingbonsais_total25.svg" width="50" height="50">';
        document.getElementById("milestone_bloomingbonsais_total25_name").innerHTML = '25 blooming bonsais';
        document.getElementById("milestone_bloomingbonsais_total25_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
        experience(25);
    }
    if (statistics.bloomingbonsais_total==100 && milestones.milestone_bloomingbonsais_total100==0) {
        milestones.milestone_bloomingbonsais_total1=1;
        Snackbar("<img src='Images/milestone_white.svg' width='30' height='30'>&nbsp;Milestone: 100 blooming bonsais<br>&nbsp;Reward: 100 XP", "snackbar_skillstone", 6000, "snackbar_skillstone show6s");
        document.getElementById("milestone_bloomingbonsais_total100_image").innerHTML = '<img src="Images/milestones/bloomingbonsais_total100.svg" width="50" height="50">';
        document.getElementById("milestone_bloomingbonsais_total100_name").innerHTML = '100 blooming bonsais';
        document.getElementById("milestone_bloomingbonsais_total100_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
        experience(100);
    }
    /*Seedlings Total*/
    if (statistics.seedlings_total==10 && milestones.milestone_seedlingtotal10==0) {
        milestones.milestone_seedlingtotal10=1;
        Snackbar("<img src='Images/milestone_white.svg' width='30' height='30'>&nbsp;Milestone: 10 seedlings found<br>&nbsp;Reward: 2 XP", "snackbar_skillstone", 6000, "snackbar_skillstone show6s");
        document.getElementById("milestone_seedlingtotal10_image").innerHTML = '<img src="Images/milestones/seedlingtotal10.svg" width="50" height="50">';
        document.getElementById("milestone_seedlingtotal10_name").innerHTML = '10 seedlings found';
        document.getElementById("milestone_seedlingtotal10_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
        experience(2);
    }
    if (statistics.seedlings_total==25 && milestones.milestone_seedlingtotal25==0) {
        milestones.milestone_seedlingtotal25=1;
        Snackbar("<img src='Images/milestone_white.svg' width='30' height='30'>&nbsp;Milestone: 25 seedlings found<br>&nbsp;Reward: 5 XP", "snackbar_skillstone", 6000, "snackbar_skillstone show6s");
        document.getElementById("milestone_seedlingtotal25_image").innerHTML = '<img src="Images/milestones/seedlingtotal25.svg" width="50" height="50">';
        document.getElementById("milestone_seedlingtotal25_name").innerHTML = '25 seedlings found';
        document.getElementById("milestone_seedlingtotal25_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
        experience(5);
    }
    if (statistics.seedlings_total==100 && milestones.milestone_seedlingtotal100==0) {
        milestones.milestone_seedlingtotal100=1;
        Snackbar("<img src='Images/milestone_white.svg' width='30' height='30'>&nbsp;Milestone: 100 seedlings found<br>&nbsp;Reward: 10 XP", "snackbar_skillstone", 6000, "snackbar_skillstone show6s");
        document.getElementById("milestone_seedlingtotal100_image").innerHTML = '<img src="Images/milestones/seedlingtotal100.svg" width="50" height="50">';
        document.getElementById("milestone_seedlingtotal100_name").innerHTML = '100 seedlings found';
        document.getElementById("milestone_seedlingtotal100_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
        experience(10);
    }
    if (statistics.seedlings_total==250 && milestones.milestone_seedlingtotal250==0) {
        milestones.milestone_seedlingtotal250=1;
        Snackbar("<img src='Images/milestone_white.svg' width='30' height='30'>&nbsp;Milestone: 250 seedlings found<br>&nbsp;Reward: 25 XP", "snackbar_skillstone", 6000, "snackbar_skillstone show6s");
        document.getElementById("milestone_seedlingtotal250_image").innerHTML = '<img src="Images/milestones/seedlingtotal250.svg" width="50" height="50">';
        document.getElementById("milestone_seedlingtotal250_name").innerHTML = '250 seedlings found';
        document.getElementById("milestone_seedlingtotal250_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
        experience(25);
    }
    if (statistics.seedlings_total==1000 && milestones.milestone_seedlingtotal1000==0) {
        milestones.milestone_seedlingtotal1000=1;
        Snackbar("<img src='Images/milestone_white.svg' width='30' height='30'>&nbsp;Milestone: 1000 seedlings found<br>&nbsp;Reward: 100 XP", "snackbar_skillstone", 6000, "snackbar_skillstone show6s");
        document.getElementById("milestone_seedlingtotal1000_image").innerHTML = '<img src="Images/milestones/seedlingtotal1000.svg" width="50" height="50">';
        document.getElementById("milestone_seedlingtotal1000_name").innerHTML = '1000 seedlings found';
        document.getElementById("milestone_seedlingtotal1000_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
        experience(100);
    }
    /*Blooming Seedlings Total*/
    if (statistics.bloomingseedlings_total==10 && milestones.milestone_bloomingseedlingtotal10==0) {
        milestones.milestone_bloomingseedlingtotal10=1;
        Snackbar("<img src='Images/milestone_white.svg' width='30' height='30'>&nbsp;Milestone: 10 blooming seedlings found<br>&nbsp;Reward: 10 XP", "snackbar_skillstone", 6000, "snackbar_skillstone show6s");
        document.getElementById("milestone_bloomingseedlingtotal10_image").innerHTML = '<img src="Images/milestones/bloomingseedlingtotal10.svg" width="50" height="50">';
        document.getElementById("milestone_bloomingseedlingtotal10_name").innerHTML = '10 blooming seedlings found';
        document.getElementById("milestone_bloomingseedlingtotal10_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
        experience(10);
    }
    if (statistics.bloomingseedlings_total==25 && milestones.milestone_bloomingseedlingtotal25==0) {
        milestones.milestone_bloomingseedlingtotal25=1;
        Snackbar("<img src='Images/milestone_white.svg' width='30' height='30'>&nbsp;Milestone: 25 blooming seedlings found<br>&nbsp;Reward: 25 XP", "snackbar_skillstone", 6000, "snackbar_skillstone show6s");
        document.getElementById("milestone_bloomingseedlingtotal25_image").innerHTML = '<img src="Images/milestones/bloomingseedlingtotal25.svg" width="50" height="50">';
        document.getElementById("milestone_bloomingseedlingtotal25_name").innerHTML = '25 blooming seedlings found';
        document.getElementById("milestone_bloomingseedlingtotal25_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
        experience(25);
    }
    if (statistics.bloomingseedlings_total==100 && milestones.milestone_bloomingseedlingtotal100==0) {
        milestones.milestone_bloomingseedlingtotal100=1;
        Snackbar("<img src='Images/milestone_white.svg' width='30' height='30'>&nbsp;Milestone: 100 blooming seedlings found<br>&nbsp;Reward: 100 XP", "snackbar_skillstone", 6000, "snackbar_skillstone show6s");
        document.getElementById("milestone_bloomingseedlingtotal100_image").innerHTML = '<img src="Images/milestones/bloomingseedlingtotal100.svg" width="50" height="50">';
        document.getElementById("milestone_bloomingseedlingtotal100_name").innerHTML = '100 blooming seedlings found';
        document.getElementById("milestone_bloomingseedlingtotal100_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
        experience(100);
    }
    if (statistics.bloomingseedlings_total==250 && milestones.milestone_bloomingseedlingtotal250==0) {
        milestones.milestone_bloomingseedlingtotal250=1;
        Snackbar("<img src='Images/milestone_white.svg' width='30' height='30'>&nbsp;Milestone: 250 blooming seedlings found<br>&nbsp;Reward: 250 XP", "snackbar_skillstone", 6000, "snackbar_skillstone show6s");
        document.getElementById("milestone_bloomingseedlingtotal250_image").innerHTML = '<img src="Images/milestones/bloomingseedlingtotal250.svg" width="50" height="50">';
        document.getElementById("milestone_bloomingseedlingtotal250_name").innerHTML = '250 blooming seedlings found';
        document.getElementById("milestone_bloomingseedlingtotal250_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
        experience(250);
    }
    if (statistics.bloomingseedlings_total==1000 && milestones.milestone_bloomingseedlingtotal1000==0) {
        milestones.milestone_bloomingseedlingtotal1000=1;
        Snackbar("<img src='Images/milestone_white.svg' width='30' height='30'>&nbsp;Milestone: 1000 blooming seedlings found<br>&nbsp;Reward: 1000 XP", "snackbar_skillstone", 6000, "snackbar_skillstone show6s");
        document.getElementById("milestone_bloomingseedlingtotal1000_image").innerHTML = '<img src="Images/milestones/bloomingseedlingtotal1000.svg" width="50" height="50">';
        document.getElementById("milestone_bloomingseedlingtotal1000_name").innerHTML = '1000 blooming seedlings found';
        document.getElementById("milestone_bloomingseedlingtotal1000_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
        experience(1000);
    }
    /*Treetypes Discovered*/
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
    /*Normal Bonsais - All Styletypes*/
    if (bondex.bonsai01normal==7 && milestones.milestone_bonsai01normalst_all==0) {
        milestones.milestone_bonsai01normalst_all=1;
        Snackbar("<img src='Images/milestone_white.svg' width='30' height='30'>&nbsp;Milestone: Grown all styletypes for treetype 'Maru'<br>&nbsp;Reward: 5 XP", "snackbar_skillstone", 6000, "snackbar_skillstone show6s");
        document.getElementById("milestone_bonsai01normalst_all_image").innerHTML = '<img src="Images/milestones/bonsai01normalst_all.svg" width="50" height="50">';
        document.getElementById("milestone_bonsai01normalst_all_name").innerHTML = "Grown all styletypes for treetype 'Maru'";
        document.getElementById("milestone_bonsai01normalst_all_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
        experience(5);
    }
    if (bondex.bonsai02normal==7 && milestones.milestone_bonsai02normalst_all==0) {
        milestones.milestone_bonsai02normalst_all=1;
        Snackbar("<img src='Images/milestone_white.svg' width='30' height='30'>&nbsp;Milestone: Grown all styletypes for treetype 'Daen'<br>&nbsp;Reward: 5 XP", "snackbar_skillstone", 6000, "snackbar_skillstone show6s");
        document.getElementById("milestone_bonsai02normalst_all_image").innerHTML = '<img src="Images/milestones/bonsai02normalst_all.svg" width="50" height="50">';
        document.getElementById("milestone_bonsai02normalst_all_name").innerHTML = "Grown all styletypes for treetype 'Daen'";
        document.getElementById("milestone_bonsai02normalst_all_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
        experience(5);
    }
    if (bondex.bonsai03normal==7 && milestones.milestone_bonsai03normalst_all==0) {
        milestones.milestone_bonsai03normalst_all=1;
        Snackbar("<img src='Images/milestone_white.svg' width='30' height='30'>&nbsp;Milestone: Grown all styletypes for treetype 'Yubiwa'<br>&nbsp;Reward: 5 XP", "snackbar_skillstone", 6000, "snackbar_skillstone show6s");
        document.getElementById("milestone_bonsai03normalst_all_image").innerHTML = '<img src="Images/milestones/bonsai03normalst_all.svg" width="50" height="50">';
        document.getElementById("milestone_bonsai03normalst_all_name").innerHTML = "Grown all styletypes for treetype 'Yubiwa'";
        document.getElementById("milestone_bonsai03normalst_all_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
        experience(5);
    }
    if (bondex.bonsai04normal==7 && milestones.milestone_bonsai04normalst_all==0) {
        milestones.milestone_bonsai04normalst_all=1;
        Snackbar("<img src='Images/milestone_white.svg' width='30' height='30'>&nbsp;Milestone: Grown all styletypes for treetype 'Otosu'<br>&nbsp;Reward: 5 XP", "snackbar_skillstone", 6000, "snackbar_skillstone show6s");
        document.getElementById("milestone_bonsai04normalst_all_image").innerHTML = '<img src="Images/milestones/bonsai04normalst_all.svg" width="50" height="50">';
        document.getElementById("milestone_bonsai04normalst_all_name").innerHTML = "Grown all styletypes for treetype 'Otosu'";
        document.getElementById("milestone_bonsai04normalst_all_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
        experience(5);
    }
    if (bondex.bonsai05normal==7 && milestones.milestone_bonsai05normalst_all==0) {
        milestones.milestone_bonsai05normalst_all=1;
        Snackbar("<img src='Images/milestone_white.svg' width='30' height='30'>&nbsp;Milestone: Grown all styletypes for treetype 'Hi'<br>&nbsp;Reward: 5 XP", "snackbar_skillstone", 6000, "snackbar_skillstone show6s");
        document.getElementById("milestone_bonsai05normalst_all_image").innerHTML = '<img src="Images/milestones/bonsai05normalst_all.svg" width="50" height="50">';
        document.getElementById("milestone_bonsai05normalst_all_name").innerHTML = "Grown all styletypes for treetype 'Hi'";
        document.getElementById("milestone_bonsai05normalst_all_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
        experience(5);
    }
    if (bondex.bonsai06normal==7 && milestones.milestone_bonsai06normalst_all==0) {
        milestones.milestone_bonsai06normalst_all=1;
        Snackbar("<img src='Images/milestone_white.svg' width='30' height='30'>&nbsp;Milestone: Grown all styletypes for treetype 'Kumo'<br>&nbsp;Reward: 5 XP", "snackbar_skillstone", 6000, "snackbar_skillstone show6s");
        document.getElementById("milestone_bonsai06normalst_all_image").innerHTML = '<img src="Images/milestones/bonsai06normalst_all.svg" width="50" height="50">';
        document.getElementById("milestone_bonsai06normalst_all_name").innerHTML = "Grown all styletypes for treetype 'Kumo'";
        document.getElementById("milestone_bonsai06normalst_all_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
        experience(5);
    }
    if (bondex.bonsai07normal==7 && milestones.milestone_bonsai07normalst_all==0) {
        milestones.milestone_bonsai07normalst_all=1;
        Snackbar("<img src='Images/milestone_white.svg' width='30' height='30'>&nbsp;Milestone: Grown all styletypes for treetype 'Rokkakkei'<br>&nbsp;Reward: 5 XP", "snackbar_skillstone", 6000, "snackbar_skillstone show6s");
        document.getElementById("milestone_bonsai07normalst_all_image").innerHTML = '<img src="Images/milestones/bonsai07normalst_all.svg" width="50" height="50">';
        document.getElementById("milestone_bonsai07normalst_all_name").innerHTML = "Grown all styletypes for treetype 'Rokkakkei'";
        document.getElementById("milestone_bonsai07normalst_all_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
        experience(5);
    }
    if (bondex.bonsai08normal==7 && milestones.milestone_bonsai08normalst_all==0) {
        milestones.milestone_bonsai08normalst_all=1;
        Snackbar("<img src='Images/milestone_white.svg' width='30' height='30'>&nbsp;Milestone: Grown all styletypes for treetype 'Asutarisuku'<br>&nbsp;Reward: 5 XP", "snackbar_skillstone", 6000, "snackbar_skillstone show6s");
        document.getElementById("milestone_bonsai08normalst_all_image").innerHTML = '<img src="Images/milestones/bonsai08normalst_all.svg" width="50" height="50">';
        document.getElementById("milestone_bonsai08normalst_all_name").innerHTML = "Grown all styletypes for treetype 'Asutarisuku'";
        document.getElementById("milestone_bonsai08normalst_all_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
        experience(5);
    }
    if (bondex.bonsai09normal==7 && milestones.milestone_bonsai09normalst_all==0) {
        milestones.milestone_bonsai09normalst_all=1;
        Snackbar("<img src='Images/milestone_white.svg' width='30' height='30'>&nbsp;Milestone: Grown all styletypes for treetype 'Sunōfurēku'<br>&nbsp;Reward: 5 XP", "snackbar_skillstone", 6000, "snackbar_skillstone show6s");
        document.getElementById("milestone_bonsai09normalst_all_image").innerHTML = '<img src="Images/milestones/bonsai09normalst_all.svg" width="50" height="50">';
        document.getElementById("milestone_bonsai09normalst_all_name").innerHTML = "Grown all styletypes for treetype 'Sunōfurēku'";
        document.getElementById("milestone_bonsai09normalst_all_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
        experience(5);
    }
    if (bondex.bonsai10normal==7 && milestones.milestone_bonsai10normalst_all==0) {
        milestones.milestone_bonsai10normalst_all=1;
        Snackbar("<img src='Images/milestone_white.svg' width='30' height='30'>&nbsp;Milestone: Grown all styletypes for treetype 'Fezā'<br>&nbsp;Reward: 5 XP", "snackbar_skillstone", 6000, "snackbar_skillstone show6s");
        document.getElementById("milestone_bonsai10normalst_all_image").innerHTML = '<img src="Images/milestones/bonsai10normalst_all.svg" width="50" height="50">';
        document.getElementById("milestone_bonsai10normalst_all_name").innerHTML = "Grown all styletypes for treetype 'Fezā'";
        document.getElementById("milestone_bonsai10normalst_all_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
        experience(5);
    }
    if (bondex.bonsai11normal==7 && milestones.milestone_bonsai11normalst_all==0) {
        milestones.milestone_bonsai11normalst_all=1;
        Snackbar("<img src='Images/milestone_white.svg' width='30' height='30'>&nbsp;Milestone: Grown all styletypes for treetype 'Makigai'<br>&nbsp;Reward: 5 XP", "snackbar_skillstone", 6000, "snackbar_skillstone show6s");
        document.getElementById("milestone_bonsai11normalst_all_image").innerHTML = '<img src="Images/milestones/bonsai11normalst_all.svg" width="50" height="50">';
        document.getElementById("milestone_bonsai11normalst_all_name").innerHTML = "Grown all styletypes for treetype 'Makigai'";
        document.getElementById("milestone_bonsai11normalst_all_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
        experience(5);
    }
    if (bondex.bonsai12normal==7 && milestones.milestone_bonsai12normalst_all==0) {
        milestones.milestone_bonsai12normalst_all=1;
        Snackbar("<img src='Images/milestone_white.svg' width='30' height='30'>&nbsp;Milestone: Grown all styletypes for treetype 'Me'<br>&nbsp;Reward: 5 XP", "snackbar_skillstone", 6000, "snackbar_skillstone show6s");
        document.getElementById("milestone_bonsai12normalst_all_image").innerHTML = '<img src="Images/milestones/bonsai12normalst_all.svg" width="50" height="50">';
        document.getElementById("milestone_bonsai12normalst_all_name").innerHTML = "Grown all styletypes for treetype 'Me'";
        document.getElementById("milestone_bonsai12normalst_all_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
        experience(5);
    }
    if (bondex.bonsai13normal==7 && milestones.milestone_bonsai13normalst_all==0) {
        milestones.milestone_bonsai13normalst_all=1;
        Snackbar("<img src='Images/milestone_white.svg' width='30' height='30'>&nbsp;Milestone: Grown all styletypes for treetype 'Sankakkei'<br>&nbsp;Reward: 5 XP", "snackbar_skillstone", 6000, "snackbar_skillstone show6s");
        document.getElementById("milestone_bonsai13normalst_all_image").innerHTML = '<img src="Images/milestones/bonsai13normalst_all.svg" width="50" height="50">';
        document.getElementById("milestone_bonsai13normalst_all_name").innerHTML = "Grown all styletypes for treetype 'Sankakkei'";
        document.getElementById("milestone_bonsai13normalst_all_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
        experience(5);
    }
    if (bondex.bonsai14normal==7 && milestones.milestone_bonsai14normalst_all==0) {
        milestones.milestone_bonsai14normalst_all=1;
        Snackbar("<img src='Images/milestone_white.svg' width='30' height='30'>&nbsp;Milestone: Grown all styletypes for treetype 'Yajirushi'<br>&nbsp;Reward: 5 XP", "snackbar_skillstone", 6000, "snackbar_skillstone show6s");
        document.getElementById("milestone_bonsai14normalst_all_image").innerHTML = '<img src="Images/milestones/bonsai14normalst_all.svg" width="50" height="50">';
        document.getElementById("milestone_bonsai14normalst_all_name").innerHTML = "Grown all styletypes for treetype 'Yajirushi'";
        document.getElementById("milestone_bonsai14normalst_all_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
        experience(5);
    }
    /*Blooming Bonsais - All Styletypes*/
    if (bondex.bonsai01blooming==7 && milestones.milestone_bonsai01bloomingst_all==0) {
        milestones.milestone_bonsai01bloomingst_all=1;
        Snackbar("<img src='Images/milestone_white.svg' width='30' height='30'>&nbsp;Milestone: Grown all styletypes for blooming treetype 'Maru'<br>&nbsp;Reward: 10 XP", "snackbar_skillstone", 6000, "snackbar_skillstone show6s");
        document.getElementById("milestone_bonsai01bloomingst_all_image").innerHTML = '<img src="Images/milestones/bonsai01bloomingst_all.svg" width="50" height="50">';
        document.getElementById("milestone_bonsai01bloomingst_all_name").innerHTML = "Grown all styletypes for blooming treetype 'Maru'";
        document.getElementById("milestone_bonsai01bloomingst_all_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
        experience(10);
    }
    if (bondex.bonsai02blooming==7 && milestones.milestone_bonsai02bloomingst_all==0) {
        milestones.milestone_bonsai02bloomingst_all=1;
        Snackbar("<img src='Images/milestone_white.svg' width='30' height='30'>&nbsp;Milestone: Grown all styletypes for blooming treetype 'Daen'<br>&nbsp;Reward: 10 XP", "snackbar_skillstone", 6000, "snackbar_skillstone show6s");
        document.getElementById("milestone_bonsai02bloomingst_all_image").innerHTML = '<img src="Images/milestones/bonsai02bloomingst_all.svg" width="50" height="50">';
        document.getElementById("milestone_bonsai02bloomingst_all_name").innerHTML = "Grown all styletypes for blooming treetype 'Daen'";
        document.getElementById("milestone_bonsai02bloomingst_all_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
        experience(10);
    }
    if (bondex.bonsai03blooming==7 && milestones.milestone_bonsai03bloomingst_all==0) {
        milestones.milestone_bonsai03bloomingst_all=1;
        Snackbar("<img src='Images/milestone_white.svg' width='30' height='30'>&nbsp;Milestone: Grown all styletypes for blooming treetype 'Yubiwa'<br>&nbsp;Reward: 10 XP", "snackbar_skillstone", 6000, "snackbar_skillstone show6s");
        document.getElementById("milestone_bonsai03bloomingst_all_image").innerHTML = '<img src="Images/milestones/bonsai03bloomingst_all.svg" width="50" height="50">';
        document.getElementById("milestone_bonsai03bloomingst_all_name").innerHTML = "Grown all styletypes for blooming treetype 'Yubiwa'";
        document.getElementById("milestone_bonsai03bloomingst_all_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
        experience(10);
    }
    if (bondex.bonsai04blooming==7 && milestones.milestone_bonsai04bloomingst_all==0) {
        milestones.milestone_bonsai04bloomingst_all=1;
        Snackbar("<img src='Images/milestone_white.svg' width='30' height='30'>&nbsp;Milestone: Grown all styletypes for blooming treetype 'Otosu'<br>&nbsp;Reward: 10 XP", "snackbar_skillstone", 6000, "snackbar_skillstone show6s");
        document.getElementById("milestone_bonsai04bloomingst_all_image").innerHTML = '<img src="Images/milestones/bonsai04bloomingst_all.svg" width="50" height="50">';
        document.getElementById("milestone_bonsai04bloomingst_all_name").innerHTML = "Grown all styletypes for blooming treetype 'Otosu'";
        document.getElementById("milestone_bonsai04bloomingst_all_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
        experience(10);
    }
    if (bondex.bonsai05blooming==7 && milestones.milestone_bonsai05bloomingst_all==0) {
        milestones.milestone_bonsai05bloomingst_all=1;
        Snackbar("<img src='Images/milestone_white.svg' width='30' height='30'>&nbsp;Milestone: Grown all styletypes for blooming treetype 'Hi'<br>&nbsp;Reward: 10 XP", "snackbar_skillstone", 6000, "snackbar_skillstone show6s");
        document.getElementById("milestone_bonsai05bloomingst_all_image").innerHTML = '<img src="Images/milestones/bonsai05bloomingst_all.svg" width="50" height="50">';
        document.getElementById("milestone_bonsai05bloomingst_all_name").innerHTML = "Grown all styletypes for blooming treetype 'Hi'";
        document.getElementById("milestone_bonsai05bloomingst_all_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
        experience(10);
    }
    if (bondex.bonsai06blooming==7 && milestones.milestone_bonsai06bloomingst_all==0) {
        milestones.milestone_bonsai06bloomingst_all=1;
        Snackbar("<img src='Images/milestone_white.svg' width='30' height='30'>&nbsp;Milestone: Grown all styletypes for blooming treetype 'Kumo'<br>&nbsp;Reward: 10 XP", "snackbar_skillstone", 6000, "snackbar_skillstone show6s");
        document.getElementById("milestone_bonsai06bloomingst_all_image").innerHTML = '<img src="Images/milestones/bonsai06bloomingst_all.svg" width="50" height="50">';
        document.getElementById("milestone_bonsai06bloomingst_all_name").innerHTML = "Grown all styletypes for blooming treetype 'Kumo'";
        document.getElementById("milestone_bonsai06bloomingst_all_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
        experience(10);
    }
    if (bondex.bonsai07blooming==7 && milestones.milestone_bonsai07bloomingst_all==0) {
        milestones.milestone_bonsai07bloomingst_all=1;
        Snackbar("<img src='Images/milestone_white.svg' width='30' height='30'>&nbsp;Milestone: Grown all styletypes for blooming treetype 'Rokkakkei'<br>&nbsp;Reward: 10 XP", "snackbar_skillstone", 6000, "snackbar_skillstone show6s");
        document.getElementById("milestone_bonsai07bloomingst_all_image").innerHTML = '<img src="Images/milestones/bonsai07bloomingst_all.svg" width="50" height="50">';
        document.getElementById("milestone_bonsai07bloomingst_all_name").innerHTML = "Grown all styletypes for blooming treetype 'Rokkakkei'";
        document.getElementById("milestone_bonsai07bloomingst_all_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
        experience(10);
    }
    if (bondex.bonsai08blooming==7 && milestones.milestone_bonsai08bloomingst_all==0) {
        milestones.milestone_bonsai08bloomingst_all=1;
        Snackbar("<img src='Images/milestone_white.svg' width='30' height='30'>&nbsp;Milestone: Grown all styletypes for blooming treetype 'Asutarisuku'<br>&nbsp;Reward: 10 XP", "snackbar_skillstone", 6000, "snackbar_skillstone show6s");
        document.getElementById("milestone_bonsai08bloomingst_all_image").innerHTML = '<img src="Images/milestones/bonsai08bloomingst_all.svg" width="50" height="50">';
        document.getElementById("milestone_bonsai08bloomingst_all_name").innerHTML = "Grown all styletypes for blooming treetype 'Asutarisuku'";
        document.getElementById("milestone_bonsai08bloomingst_all_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
        experience(10);
    }
    if (bondex.bonsai09blooming==7 && milestones.milestone_bonsai09bloomingst_all==0) {
        milestones.milestone_bonsai09bloomingst_all=1;
        Snackbar("<img src='Images/milestone_white.svg' width='30' height='30'>&nbsp;Milestone: Grown all styletypes for blooming treetype 'Sunōfurēku'<br>&nbsp;Reward: 10 XP", "snackbar_skillstone", 6000, "snackbar_skillstone show6s");
        document.getElementById("milestone_bonsai09bloomingst_all_image").innerHTML = '<img src="Images/milestones/bonsai09bloomingst_all.svg" width="50" height="50">';
        document.getElementById("milestone_bonsai09bloomingst_all_name").innerHTML = "Grown all styletypes for blooming treetype 'Sunōfurēku'";
        document.getElementById("milestone_bonsai09bloomingst_all_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
        experience(10);
    }
    if (bondex.bonsai10blooming==7 && milestones.milestone_bonsai10bloomingst_all==0) {
        milestones.milestone_bonsai10bloomingst_all=1;
        Snackbar("<img src='Images/milestone_white.svg' width='30' height='30'>&nbsp;Milestone: Grown all styletypes for blooming treetype 'Fezā'<br>&nbsp;Reward: 10 XP", "snackbar_skillstone", 6000, "snackbar_skillstone show6s");
        document.getElementById("milestone_bonsai10bloomingst_all_image").innerHTML = '<img src="Images/milestones/bonsai10bloomingst_all.svg" width="50" height="50">';
        document.getElementById("milestone_bonsai10bloomingst_all_name").innerHTML = "Grown all styletypes for blooming treetype 'Fezā'";
        document.getElementById("milestone_bonsai10bloomingst_all_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
        experience(10);
    }
    if (bondex.bonsai11blooming==7 && milestones.milestone_bonsai11bloomingst_all==0) {
        milestones.milestone_bonsai11bloomingst_all=1;
        Snackbar("<img src='Images/milestone_white.svg' width='30' height='30'>&nbsp;Milestone: Grown all styletypes for blooming treetype 'Makigai'<br>&nbsp;Reward: 10 XP", "snackbar_skillstone", 6000, "snackbar_skillstone show6s");
        document.getElementById("milestone_bonsai11bloomingst_all_image").innerHTML = '<img src="Images/milestones/bonsai11bloomingst_all.svg" width="50" height="50">';
        document.getElementById("milestone_bonsai11bloomingst_all_name").innerHTML = "Grown all styletypes for blooming treetype 'Makigai'";
        document.getElementById("milestone_bonsai11bloomingst_all_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
        experience(10);
    }
    if (bondex.bonsai12blooming==7 && milestones.milestone_bonsai12bloomingst_all==0) {
        milestones.milestone_bonsai12bloomingst_all=1;
        Snackbar("<img src='Images/milestone_white.svg' width='30' height='30'>&nbsp;Milestone: Grown all styletypes for blooming treetype 'Me'<br>&nbsp;Reward: 10 XP", "snackbar_skillstone", 6000, "snackbar_skillstone show6s");
        document.getElementById("milestone_bonsai12bloomingst_all_image").innerHTML = '<img src="Images/milestones/bonsai12bloomingst_all.svg" width="50" height="50">';
        document.getElementById("milestone_bonsai12bloomingst_all_name").innerHTML = "Grown all styletypes for blooming treetype 'Me'";
        document.getElementById("milestone_bonsai12bloomingst_all_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
        experience(10);
    }
    if (bondex.bonsai13blooming==7 && milestones.milestone_bonsai13bloomingst_all==0) {
        milestones.milestone_bonsai13bloomingst_all=1;
        Snackbar("<img src='Images/milestone_white.svg' width='30' height='30'>&nbsp;Milestone: Grown all styletypes for blooming treetype 'Sankakkei'<br>&nbsp;Reward: 10 XP", "snackbar_skillstone", 6000, "snackbar_skillstone show6s");
        document.getElementById("milestone_bonsai13bloomingst_all_image").innerHTML = '<img src="Images/milestones/bonsai13bloomingst_all.svg" width="50" height="50">';
        document.getElementById("milestone_bonsai13bloomingst_all_name").innerHTML = "Grown all styletypes for blooming treetype 'Sankakkei'";
        document.getElementById("milestone_bonsai13bloomingst_all_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
        experience(10);
    }
    if (bondex.bonsai14blooming==7 && milestones.milestone_bonsai14bloomingst_all==0) {
        milestones.milestone_bonsai14bloomingst_all=1;
        Snackbar("<img src='Images/milestone_white.svg' width='30' height='30'>&nbsp;Milestone: Grown all styletypes for blooming treetype 'Yajirushi'<br>&nbsp;Reward: 10 XP", "snackbar_skillstone", 6000, "snackbar_skillstone show6s");
        document.getElementById("milestone_bonsai14bloomingst_all_image").innerHTML = '<img src="Images/milestones/bonsai14bloomingst_all.svg" width="50" height="50">';
        document.getElementById("milestone_bonsai14bloomingst_all_name").innerHTML = "Grown all styletypes for blooming treetype 'Yajirushi'";
        document.getElementById("milestone_bonsai14bloomingst_all_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
        experience(10);
    }
}

function taskstones_checkup() {
    /*Bonsais Total*/
    if (milestones.milestone_bonsaitotal1==1) {
        document.getElementById("milestone_bonsaitotal1_image").innerHTML = '<img src="Images/milestones/bonsaitotal1.svg" width="50" height="50">';
        document.getElementById("milestone_bonsaitotal1_name").innerHTML = 'First bonsai';
        document.getElementById("milestone_bonsaitotal1_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
    }
    if (milestones.milestone_bonsaitotal10==1) {
        document.getElementById("milestone_bonsaitotal10_image").innerHTML = '<img src="Images/milestones/bonsaitotal10.svg" width="50" height="50">';
        document.getElementById("milestone_bonsaitotal10_name").innerHTML = '10 bonsais';
        document.getElementById("milestone_bonsaitotal10_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
    }
    if (milestones.milestone_bonsaitotal25==1) {
        document.getElementById("milestone_bonsaitotal25_image").innerHTML = '<img src="Images/milestones/bonsaitotal25.svg" width="50" height="50">';
        document.getElementById("milestone_bonsaitotal25_name").innerHTML = '25 bonsais';
        document.getElementById("milestone_bonsaitotal25_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
    }
    if (milestones.milestone_bonsaitotal100==1) {
        document.getElementById("milestone_bonsaitotal100_image").innerHTML = '<img src="Images/milestones/bonsaitotal100.svg" width="50" height="50">';
        document.getElementById("milestone_bonsaitotal100_name").innerHTML = '100 bonsais';
        document.getElementById("milestone_bonsaitotal100_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
    }
    /*Blooming bonsais Total*/
    if (milestones.milestone_bloomingbonsais_total1==1) {
        document.getElementById("milestone_bloomingbonsais_total1_image").innerHTML = '<img src="Images/milestones/bloomingbonsais_total1.svg" width="50" height="50">';
        document.getElementById("milestone_bloomingbonsais_total1_name").innerHTML = 'First blooming bonsai';
        document.getElementById("milestone_bloomingbonsais_total1_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
    }
    if (milestones.milestone_bloomingbonsais_total10==1) {
        document.getElementById("milestone_bloomingbonsais_total10_image").innerHTML = '<img src="Images/milestones/bloomingbonsais_total10.svg" width="50" height="50">';
        document.getElementById("milestone_bloomingbonsais_total10_name").innerHTML = '10 blooming bonsais';
        document.getElementById("milestone_bloomingbonsais_total10_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
    }
    if (milestones.milestone_bloomingbonsais_total25==1) {
        document.getElementById("milestone_bloomingbonsais_total25_image").innerHTML = '<img src="Images/milestones/bloomingbonsais_total25.svg" width="50" height="50">';
        document.getElementById("milestone_bloomingbonsais_total25_name").innerHTML = '25 blooming bonsais';
        document.getElementById("milestone_bloomingbonsais_total25_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
    }
    if (milestones.milestone_bloomingbonsais_total100==1) {
        document.getElementById("milestone_bloomingbonsais_total100_image").innerHTML = '<img src="Images/milestones/bloomingbonsais_total100.svg" width="50" height="50">';
        document.getElementById("milestone_bloomingbonsais_total100_name").innerHTML = '100 blooming bonsais';
        document.getElementById("milestone_bloomingbonsais_total100_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
    }
    /*Seedlings Total*/
    if (milestones.milestone_seedlingtotal10==1) {
        document.getElementById("milestone_seedlingtotal10_image").innerHTML = '<img src="Images/milestones/seedlingtotal10.svg" width="50" height="50">';
        document.getElementById("milestone_seedlingtotal10_name").innerHTML = '10 seedlings found';
        document.getElementById("milestone_seedlingtotal10_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
    }
    if (milestones.milestone_seedlingtotal25==1) {
        document.getElementById("milestone_seedlingtotal25_image").innerHTML = '<img src="Images/milestones/seedlingtotal25.svg" width="50" height="50">';
        document.getElementById("milestone_seedlingtotal25_name").innerHTML = '25 seedlings found';
        document.getElementById("milestone_seedlingtotal25_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
    }
    if (milestones.milestone_seedlingtotal100==1) {
        document.getElementById("milestone_seedlingtotal100_image").innerHTML = '<img src="Images/milestones/seedlingtotal100.svg" width="50" height="50">';
        document.getElementById("milestone_seedlingtotal100_name").innerHTML = '100 seedlings found';
        document.getElementById("milestone_seedlingtotal100_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
    }
    if (milestones.milestone_seedlingtotal250==1) {
        document.getElementById("milestone_seedlingtotal250_image").innerHTML = '<img src="Images/milestones/seedlingtotal250.svg" width="50" height="50">';
        document.getElementById("milestone_seedlingtotal250_name").innerHTML = '250 seedlings found';
        document.getElementById("milestone_seedlingtotal250_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
    }
    if (milestones.milestone_seedlingtotal1000==1) {
        document.getElementById("milestone_seedlingtotal1000_image").innerHTML = '<img src="Images/milestones/seedlingtotal1000.svg" width="50" height="50">';
        document.getElementById("milestone_seedlingtotal1000_name").innerHTML = '1000 seedlings found';
        document.getElementById("milestone_seedlingtotal1000_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
    }
    /*Blooming Seedlings Total*/
    if (milestones.milestone_bloomingseedlingtotal10==1) {
        document.getElementById("milestone_bloomingseedlingtotal10_image").innerHTML = '<img src="Images/milestones/bloomingseedlingtotal10.svg" width="50" height="50">';
        document.getElementById("milestone_bloomingseedlingtotal10_name").innerHTML = '10 blooming seedlings found';
        document.getElementById("milestone_bloomingseedlingtotal10_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
    }
    if (milestones.milestone_bloomingseedlingtotal25==1) {
        document.getElementById("milestone_bloomingseedlingtotal25_image").innerHTML = '<img src="Images/milestones/bloomingseedlingtotal25.svg" width="50" height="50">';
        document.getElementById("milestone_bloomingseedlingtotal25_name").innerHTML = '25 blooming seedlings found';
        document.getElementById("milestone_bloomingseedlingtotal25_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
    }
    if (milestones.milestone_bloomingseedlingtotal100==1) {
        document.getElementById("milestone_bloomingseedlingtotal100_image").innerHTML = '<img src="Images/milestones/bloomingseedlingtotal100.svg" width="50" height="50">';
        document.getElementById("milestone_bloomingseedlingtotal100_name").innerHTML = '100 blooming seedlings found';
        document.getElementById("milestone_bloomingseedlingtotal100_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
    }
    if (milestones.milestone_bloomingseedlingtotal250==1) {
        document.getElementById("milestone_bloomingseedlingtotal250_image").innerHTML = '<img src="Images/milestones/bloomingseedlingtotal250.svg" width="50" height="50">';
        document.getElementById("milestone_bloomingseedlingtotal250_name").innerHTML = '250 blooming seedlings found';
        document.getElementById("milestone_bloomingseedlingtotal250_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
    }
    if (milestones.milestone_bloomingseedlingtotal1000==1) {
        document.getElementById("milestone_bloomingseedlingtotal1000_image").innerHTML = '<img src="Images/milestones/bloomingseedlingtotal1000.svg" width="50" height="50">';
        document.getElementById("milestone_bloomingseedlingtotal1000_name").innerHTML = '1000 blooming seedlings found';
        document.getElementById("milestone_bloomingseedlingtotal1000_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
    }
    /*Treetypes Discovered*/
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
    /*Normal Bonsais - All Styletypes*/
    if (milestones.milestone_bonsai01normalst_all==1) {
        document.getElementById("milestone_bonsai01normalst_all_image").innerHTML = '<img src="Images/milestones/bonsai01normalst_all.svg" width="50" height="50">';
        document.getElementById("milestone_bonsai01normalst_all_name").innerHTML = "Grown all styletypes for treetype 'Maru'";
        document.getElementById("milestone_bonsai01normalst_all_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
    }
    if (milestones.milestone_bonsai02normalst_all==1) {
        document.getElementById("milestone_bonsai02normalst_all_image").innerHTML = '<img src="Images/milestones/bonsai02normalst_all.svg" width="50" height="50">';
        document.getElementById("milestone_bonsai02normalst_all_name").innerHTML = "Grown all styletypes for treetype 'Daen'";
        document.getElementById("milestone_bonsai02normalst_all_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
    }
    if (milestones.milestone_bonsai03normalst_all==1) {
        document.getElementById("milestone_bonsai03normalst_all_image").innerHTML = '<img src="Images/milestones/bonsai03normalst_all.svg" width="50" height="50">';
        document.getElementById("milestone_bonsai03normalst_all_name").innerHTML = "Grown all styletypes for treetype 'Yubiwa'";
        document.getElementById("milestone_bonsai03normalst_all_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
    }
    if (milestones.milestone_bonsai04normalst_all==1) {
        document.getElementById("milestone_bonsai04normalst_all_image").innerHTML = '<img src="Images/milestones/bonsai04normalst_all.svg" width="50" height="50">';
        document.getElementById("milestone_bonsai04normalst_all_name").innerHTML = "Grown all styletypes for treetype 'Otosu'";
        document.getElementById("milestone_bonsai04normalst_all_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
    }
    if (milestones.milestone_bonsai05normalst_all==1) {
        document.getElementById("milestone_bonsai05normalst_all_image").innerHTML = '<img src="Images/milestones/bonsai05normalst_all.svg" width="50" height="50">';
        document.getElementById("milestone_bonsai05normalst_all_name").innerHTML = "Grown all styletypes for treetype 'Hi'";
        document.getElementById("milestone_bonsai05normalst_all_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
    }
    if (milestones.milestone_bonsai06normalst_all==1) {
        document.getElementById("milestone_bonsai06normalst_all_image").innerHTML = '<img src="Images/milestones/bonsai06normalst_all.svg" width="50" height="50">';
        document.getElementById("milestone_bonsai06normalst_all_name").innerHTML = "Grown all styletypes for treetype 'Kumo'";
        document.getElementById("milestone_bonsai06normalst_all_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
    }
    if (milestones.milestone_bonsai07normalst_all==1) {
        document.getElementById("milestone_bonsai07normalst_all_image").innerHTML = '<img src="Images/milestones/bonsai07normalst_all.svg" width="50" height="50">';
        document.getElementById("milestone_bonsai07normalst_all_name").innerHTML = "Grown all styletypes for treetype 'Rokkakkei'";
        document.getElementById("milestone_bonsai07normalst_all_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
    }
    if (milestones.milestone_bonsai08normalst_all==1) {
        document.getElementById("milestone_bonsai08normalst_all_image").innerHTML = '<img src="Images/milestones/bonsai08normalst_all.svg" width="50" height="50">';
        document.getElementById("milestone_bonsai08normalst_all_name").innerHTML = "Grown all styletypes for treetype 'Asutarisuku'";
        document.getElementById("milestone_bonsai08normalst_all_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
    }
    if (milestones.milestone_bonsai09normalst_all==1) {
        document.getElementById("milestone_bonsai09normalst_all_image").innerHTML = '<img src="Images/milestones/bonsai09normalst_all.svg" width="50" height="50">';
        document.getElementById("milestone_bonsai09normalst_all_name").innerHTML = "Grown all styletypes for treetype 'Sunōfurēku'";
        document.getElementById("milestone_bonsai09normalst_all_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
    }
    if (milestones.milestone_bonsai10normalst_all==1) {
        document.getElementById("milestone_bonsai10normalst_all_image").innerHTML = '<img src="Images/milestones/bonsai10normalst_all.svg" width="50" height="50">';
        document.getElementById("milestone_bonsai10normalst_all_name").innerHTML = "Grown all styletypes for treetype 'Fezā'";
        document.getElementById("milestone_bonsai10normalst_all_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
    }
    if (milestones.milestone_bonsai11normalst_all==1) {
        document.getElementById("milestone_bonsai11normalst_all_image").innerHTML = '<img src="Images/milestones/bonsai11normalst_all.svg" width="50" height="50">';
        document.getElementById("milestone_bonsai11normalst_all_name").innerHTML = "Grown all styletypes for treetype 'Makigai'";
        document.getElementById("milestone_bonsai11normalst_all_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
    }
    if (milestones.milestone_bonsai12normalst_all==1) {
        document.getElementById("milestone_bonsai12normalst_all_image").innerHTML = '<img src="Images/milestones/bonsai12normalst_all.svg" width="50" height="50">';
        document.getElementById("milestone_bonsai12normalst_all_name").innerHTML = "Grown all styletypes for treetype 'Me'";
        document.getElementById("milestone_bonsai12normalst_all_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
    }
    if (milestones.milestone_bonsai13normalst_all==1) {
        document.getElementById("milestone_bonsai13normalst_all_image").innerHTML = '<img src="Images/milestones/bonsai13normalst_all.svg" width="50" height="50">';
        document.getElementById("milestone_bonsai13normalst_all_name").innerHTML = "Grown all styletypes for treetype 'Sankakkei'";
        document.getElementById("milestone_bonsai13normalst_all_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
    }
    if (milestones.milestone_bonsai14normalst_all==1) {
        document.getElementById("milestone_bonsai14normalst_all_image").innerHTML = '<img src="Images/milestones/bonsai14normalst_all.svg" width="50" height="50">';
        document.getElementById("milestone_bonsai14normalst_all_name").innerHTML = "Grown all styletypes for treetype 'Yajirushi'";
        document.getElementById("milestone_bonsai14normalst_all_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
    }
    /*Blooming Bonsais - All Styletypes*/
    if (milestones.milestone_bonsai01bloomingst_all==1) {
        document.getElementById("milestone_bonsai01bloomingst_all_image").innerHTML = '<img src="Images/milestones/bonsai01bloomingst_all.svg" width="50" height="50">';
        document.getElementById("milestone_bonsai01bloomingst_all_name").innerHTML = "Grown all styletypes for blooming treetype 'Maru'";
        document.getElementById("milestone_bonsai01bloomingst_all_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
    }
    if (milestones.milestone_bonsai02bloomingst_all==1) {
        document.getElementById("milestone_bonsai02bloomingst_all_image").innerHTML = '<img src="Images/milestones/bonsai02bloomingst_all.svg" width="50" height="50">';
        document.getElementById("milestone_bonsai02bloomingst_all_name").innerHTML = "Grown all styletypes for blooming treetype 'Daen'";
        document.getElementById("milestone_bonsai02bloomingst_all_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
    }
    if (milestones.milestone_bonsai03bloomingst_all==1) {
        document.getElementById("milestone_bonsai03bloomingst_all_image").innerHTML = '<img src="Images/milestones/bonsai03bloomingst_all.svg" width="50" height="50">';
        document.getElementById("milestone_bonsai03bloomingst_all_name").innerHTML = "Grown all styletypes for blooming treetype 'Yubiwa'";
        document.getElementById("milestone_bonsai03bloomingst_all_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
    }
    if (milestones.milestone_bonsai04bloomingst_all==1) {
        document.getElementById("milestone_bonsai04bloomingst_all_image").innerHTML = '<img src="Images/milestones/bonsai04bloomingst_all.svg" width="50" height="50">';
        document.getElementById("milestone_bonsai04bloomingst_all_name").innerHTML = "Grown all styletypes for blooming treetype 'Otosu'";
        document.getElementById("milestone_bonsai04bloomingst_all_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
    }
    if (milestones.milestone_bonsai05bloomingst_all==1) {
        document.getElementById("milestone_bonsai05bloomingst_all_image").innerHTML = '<img src="Images/milestones/bonsai05bloomingst_all.svg" width="50" height="50">';
        document.getElementById("milestone_bonsai05bloomingst_all_name").innerHTML = "Grown all styletypes for blooming treetype 'Hi'";
        document.getElementById("milestone_bonsai05bloomingst_all_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
    }
    if (milestones.milestone_bonsai06bloomingst_all==1) {
        document.getElementById("milestone_bonsai06bloomingst_all_image").innerHTML = '<img src="Images/milestones/bonsai06bloomingst_all.svg" width="50" height="50">';
        document.getElementById("milestone_bonsai06bloomingst_all_name").innerHTML = "Grown all styletypes for blooming treetype 'Kumo'";
        document.getElementById("milestone_bonsai06bloomingst_all_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
    }
    if (milestones.milestone_bonsai07bloomingst_all==1) {
        document.getElementById("milestone_bonsai07bloomingst_all_image").innerHTML = '<img src="Images/milestones/bonsai07bloomingst_all.svg" width="50" height="50">';
        document.getElementById("milestone_bonsai07bloomingst_all_name").innerHTML = "Grown all styletypes for blooming treetype 'Rokkakkei'";
        document.getElementById("milestone_bonsai07bloomingst_all_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
    }
    if (milestones.milestone_bonsai08bloomingst_all==1) {
        document.getElementById("milestone_bonsai08bloomingst_all_image").innerHTML = '<img src="Images/milestones/bonsai08bloomingst_all.svg" width="50" height="50">';
        document.getElementById("milestone_bonsai08bloomingst_all_name").innerHTML = "Grown all styletypes for blooming treetype 'Asutarisuku'";
        document.getElementById("milestone_bonsai08bloomingst_all_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
    }
    if (milestones.milestone_bonsai09bloomingst_all==1) {
        document.getElementById("milestone_bonsai09bloomingst_all_image").innerHTML = '<img src="Images/milestones/bonsai09bloomingst_all.svg" width="50" height="50">';
        document.getElementById("milestone_bonsai09bloomingst_all_name").innerHTML = "Grown all styletypes for blooming treetype 'Sunōfurēku'";
        document.getElementById("milestone_bonsai09bloomingst_all_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
    }
    if (milestones.milestone_bonsai10bloomingst_all==1) {
        document.getElementById("milestone_bonsai10bloomingst_all_image").innerHTML = '<img src="Images/milestones/bonsai10bloomingst_all.svg" width="50" height="50">';
        document.getElementById("milestone_bonsai10bloomingst_all_name").innerHTML = "Grown all styletypes for blooming treetype 'Fezā'";
        document.getElementById("milestone_bonsai10bloomingst_all_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
    }
    if (milestones.milestone_bonsai11bloomingst_all==1) {
        document.getElementById("milestone_bonsai11bloomingst_all_image").innerHTML = '<img src="Images/milestones/bonsai11bloomingst_all.svg" width="50" height="50">';
        document.getElementById("milestone_bonsai11bloomingst_all_name").innerHTML = "Grown all styletypes for blooming treetype 'Makigai'";
        document.getElementById("milestone_bonsai11bloomingst_all_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
    }
    if (milestones.milestone_bonsai12bloomingst_all==1) {
        document.getElementById("milestone_bonsai12bloomingst_all_image").innerHTML = '<img src="Images/milestones/bonsai12bloomingst_all.svg" width="50" height="50">';
        document.getElementById("milestone_bonsai12bloomingst_all_name").innerHTML = "Grown all styletypes for blooming treetype 'Me'";
        document.getElementById("milestone_bonsai12bloomingst_all_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
    }
    if (milestones.milestone_bonsai13bloomingst_all==1) {
        document.getElementById("milestone_bonsai13bloomingst_all_image").innerHTML = '<img src="Images/milestones/bonsai13bloomingst_all.svg" width="50" height="50">';
        document.getElementById("milestone_bonsai13bloomingst_all_name").innerHTML = "Grown all styletypes for blooming treetype 'Sankakkei'";
        document.getElementById("milestone_bonsai13bloomingst_all_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
    }
    if (milestones.milestone_bonsai14bloomingst_all==1) {
        document.getElementById("milestone_bonsai14bloomingst_all_image").innerHTML = '<img src="Images/milestones/bonsai14bloomingst_all.svg" width="50" height="50">';
        document.getElementById("milestone_bonsai14bloomingst_all_name").innerHTML = "Grown all styletypes for blooming treetype 'Yajirushi'";
        document.getElementById("milestone_bonsai14bloomingst_all_frame").style.backgroundImage = "url(Images/treequality/milestone_small.svg)";
    }
}
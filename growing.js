/* Bonsai Detail Growing*/
function Bonsai_Growing(bonsaixx) {
    if (bonsaixx.growing==1) {   
        document.getElementById("Button_Grow_Zeit").innerHTML = bonsaixx.growing_zeit;
        document.getElementById("bonsai_detail_treequality").style.backgroundImage = fetchbonsaitreequality_big(bonsaixx);
        document.getElementById("bonsai_detail_name").innerText = bonsaixx.name; 
        document.getElementById("bonsai_detail_type").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, bonsaixx, "100", "100");
        document.getElementById("bonsai_detail_treetype").innerText = treetypename[bonsaixx.treetype];
        document.getElementById("bonsai_detail_nature").innerText = natures[bonsaixx.nature];
        document.getElementById("bonsai_detail_level").innerText = bonsaixx.level.toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("bonsai_detail_cp").innerHTML = (Math.round((bonsaixx.foliage+bonsaixx.branches+bonsaixx.trunk+bonsaixx.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1}); 
        document.getElementById("bonsai_detail_foliage").innerText = bonsaixx.foliage.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("bonsai_detail_branches").innerText = bonsaixx.branches.toLocaleString('en', {minimumFractionDigits: 1});     
        document.getElementById("bonsai_detail_trunk").innerText = bonsaixx.trunk.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("bonsai_detail_roots").innerText = bonsaixx.roots.toLocaleString('en', {minimumFractionDigits: 1});
        
        document.getElementById("bonsai_detail_level2").innerText = bonsaixx.level.toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("bonsai_detail_cp2").innerHTML = (Math.round((bonsaixx.foliage+bonsaixx.branches+bonsaixx.trunk+bonsaixx.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1}); 
        document.getElementById("bonsai_detail_foliage2").innerText = bonsaixx.foliage.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("bonsai_detail_branches2").innerText = bonsaixx.branches.toLocaleString('en', {minimumFractionDigits: 1});    
        document.getElementById("bonsai_detail_trunk2").innerText = bonsaixx.trunk.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("bonsai_detail_roots2").innerText = bonsaixx.roots.toLocaleString('en', {minimumFractionDigits: 1});
        
        document.getElementById("bonsai_detail_level_new2").innerHTML = bonsaixx.level_new.toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("bonsai_detail_cp_new2").innerHTML = (Math.round((bonsaixx.foliage_new+bonsaixx.branches_new+bonsaixx.trunk_new+bonsaixx.roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("bonsai_detail_foliage_new2").innerHTML = bonsaixx.foliage_new.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("bonsai_detail_branches_new2").innerHTML = bonsaixx.branches_new.toLocaleString('en', {minimumFractionDigits: 1});    
        document.getElementById("bonsai_detail_trunk_new2").innerHTML = bonsaixx.trunk_new.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("bonsai_detail_roots_new2").innerHTML = bonsaixx.roots_new.toLocaleString('en', {minimumFractionDigits: 1}); 
        document.getElementById("bonsai_detail_leftpoints").innerHTML = bonsaixx.leftpoints.toLocaleString('en', {minimumFractionDigits: 1});  

        document.getElementById("bonsai_level_leftpoints").innerHTML = (Math.round((bonsaixx.level_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("bonsai_foliage_leftpoints").innerHTML = (Math.round((bonsaixx.foliage_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("bonsai_branches_leftpoints").innerHTML = (Math.round((bonsaixx.branches_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("bonsai_trunk_leftpoints").innerHTML = (Math.round((bonsaixx.trunk_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("bonsai_roots_leftpoints").innerHTML = (Math.round((bonsaixx.roots_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            
        document.getElementById("bonsai_foliage_plus_0").style.backgroundImage = "url('Images/pm0.svg')";
        document.getElementById("bonsai_branches_plus_0").style.backgroundImage = "url('Images/pm0.svg')";
        document.getElementById("bonsai_trunk_plus_0").style.backgroundImage = "url('Images/pm0.svg')";
        document.getElementById("bonsai_roots_plus_0").style.backgroundImage = "url('Images/pm0.svg')";
        document.getElementById("bonsai_foliage_plus_1").style.backgroundImage = "url('Images/pm1.svg')";
        document.getElementById("bonsai_branches_plus_1").style.backgroundImage = "url('Images/pm1.svg')";
        document.getElementById("bonsai_trunk_plus_1").style.backgroundImage = "url('Images/pm1.svg')";
        document.getElementById("bonsai_roots_plus_1").style.backgroundImage = "url('Images/pm1.svg')";
        document.getElementById("bonsai_foliage_plus_10").style.backgroundImage = "url('Images/pm10.svg')";
        document.getElementById("bonsai_branches_plus_10").style.backgroundImage = "url('Images/pm10.svg')";
        document.getElementById("bonsai_trunk_plus_10").style.backgroundImage = "url('Images/pm10.svg')";
        document.getElementById("bonsai_roots_plus_10").style.backgroundImage = "url('Images/pm10.svg')";
        
        document.getElementById("bonsai_foliage_minus_0").style.backgroundImage = "url('Images/pm0.svg')";
        document.getElementById("bonsai_foliage_minus_1").style.backgroundImage = "url('Images/pm1.svg')";
        document.getElementById("bonsai_foliage_minus_10").style.backgroundImage = "url('Images/pm10.svg')";
        document.getElementById("bonsai_branches_minus_0").style.backgroundImage = "url('Images/pm0.svg')";
        document.getElementById("bonsai_branches_minus_1").style.backgroundImage = "url('Images/pm1.svg')";
        document.getElementById("bonsai_branches_minus_10").style.backgroundImage = "url('Images/pm10.svg')";
        document.getElementById("bonsai_trunk_minus_0").style.backgroundImage = "url('Images/pm0.svg')";
        document.getElementById("bonsai_trunk_minus_1").style.backgroundImage = "url('Images/pm1.svg')";
        document.getElementById("bonsai_trunk_minus_10").style.backgroundImage = "url('Images/pm10.svg')";
        document.getElementById("bonsai_roots_minus_0").style.backgroundImage = "url('Images/pm0.svg')";
        document.getElementById("bonsai_roots_minus_1").style.backgroundImage = "url('Images/pm1.svg')";
        document.getElementById("bonsai_roots_minus_10").style.backgroundImage = "url('Images/pm10.svg')";
        
        if (resources.compost>0 & bonsaixx.growing_zeit>60) {
        document.getElementById("Button_Grow").style.cursor= "pointer";
        document.getElementById("Button_Grow").className = "grey";
        document.getElementById("Button_Grow_Text").innerHTML = "Growing:";
     
        document.getElementById("Button_Grow_Zeit").innerHTML = "&nbsp;Give compost (-60 seconds)";
        }
        else {
        document.getElementById("Button_Grow").style.cursor= "auto";
        document.getElementById("Button_Grow").className = "";
        document.getElementById("Button_Grow_Text").innerHTML = "Growing";
     
        document.getElementById("Button_Grow_Zeit").innerHTML = "";
        }
        
        document.getElementById("ChangePosition").style.cursor= "auto";
        document.getElementById("ChangePosition").className = "";
    }
    else {
        document.getElementById("bonsai_detail_treequality").style.backgroundImage = fetchbonsaitreequality_big(bonsaixx);
        document.getElementById("bonsai_detail_name").innerText = bonsaixx.name; 
        document.getElementById("bonsai_detail_type").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, bonsaixx, "100", "100");
        document.getElementById("bonsai_detail_treetype").innerText = treetypename[bonsaixx.treetype];
        document.getElementById("bonsai_detail_nature").innerText = natures[bonsaixx.nature];
        document.getElementById("bonsai_detail_level").innerText = bonsaixx.level.toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("bonsai_detail_cp").innerHTML = (Math.round((bonsaixx.foliage+bonsaixx.branches+bonsaixx.trunk+bonsaixx.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});  
        document.getElementById("bonsai_detail_foliage").innerText = bonsaixx.foliage.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("bonsai_detail_branches").innerText = bonsaixx.branches.toLocaleString('en', {minimumFractionDigits: 1});    
        document.getElementById("bonsai_detail_trunk").innerText = bonsaixx.trunk.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("bonsai_detail_roots").innerText = bonsaixx.roots.toLocaleString('en', {minimumFractionDigits: 1});
        
        document.getElementById("bonsai_detail_level2").innerText = bonsaixx.level.toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("bonsai_detail_cp2").innerHTML = (Math.round((bonsaixx.foliage+bonsaixx.branches+bonsaixx.trunk+bonsaixx.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1}); 
        document.getElementById("bonsai_detail_foliage2").innerText = bonsaixx.foliage.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("bonsai_detail_branches2").innerText = bonsaixx.branches.toLocaleString('en', {minimumFractionDigits: 1});    
        document.getElementById("bonsai_detail_trunk2").innerText = bonsaixx.trunk.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("bonsai_detail_roots2").innerText = bonsaixx.roots.toLocaleString('en', {minimumFractionDigits: 1});
        
        document.getElementById("bonsai_detail_level_new2").innerHTML = bonsaixx.level_new.toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("bonsai_detail_cp_new2").innerHTML = (Math.round((bonsaixx.foliage_new+bonsaixx.branches_new+bonsaixx.trunk_new+bonsaixx.roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("bonsai_detail_foliage_new2").innerHTML = bonsaixx.foliage_new.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("bonsai_detail_branches_new2").innerHTML = bonsaixx.branches_new.toLocaleString('en', {minimumFractionDigits: 1});    
        document.getElementById("bonsai_detail_trunk_new2").innerHTML = bonsaixx.trunk_new.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("bonsai_detail_roots_new2").innerHTML = bonsaixx.roots_new.toLocaleString('en', {minimumFractionDigits: 1}); 
        document.getElementById("bonsai_detail_leftpoints").innerHTML = bonsaixx.leftpoints.toLocaleString('en', {minimumFractionDigits: 1});  

        document.getElementById("bonsai_level_leftpoints").innerHTML = (Math.round((bonsaixx.level_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("bonsai_foliage_leftpoints").innerHTML = (Math.round((bonsaixx.foliage_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("bonsai_branches_leftpoints").innerHTML = (Math.round((bonsaixx.branches_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("bonsai_trunk_leftpoints").innerHTML = (Math.round((bonsaixx.trunk_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("bonsai_roots_leftpoints").innerHTML = (Math.round((bonsaixx.roots_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
        
        if (bonsaixx.leftpoints>0.09) {
            document.getElementById("bonsai_foliage_plus_0").style.backgroundImage = "url('Images/p0.svg')";
            document.getElementById("bonsai_branches_plus_0").style.backgroundImage = "url('Images/p0.svg')";
            document.getElementById("bonsai_trunk_plus_0").style.backgroundImage = "url('Images/p0.svg')";
            document.getElementById("bonsai_roots_plus_0").style.backgroundImage = "url('Images/p0.svg')";
        }
        else {
            document.getElementById("bonsai_foliage_plus_0").style.backgroundImage = "url('Images/pm0.svg')";
            document.getElementById("bonsai_branches_plus_0").style.backgroundImage = "url('Images/pm0.svg')";
            document.getElementById("bonsai_trunk_plus_0").style.backgroundImage = "url('Images/pm0.svg')";
            document.getElementById("bonsai_roots_plus_0").style.backgroundImage = "url('Images/pm0.svg')";
        }
        
        if (bonsaixx.leftpoints>0.99) {
            document.getElementById("bonsai_foliage_plus_1").style.backgroundImage = "url('Images/p1.svg')";
            document.getElementById("bonsai_branches_plus_1").style.backgroundImage = "url('Images/p1.svg')";
            document.getElementById("bonsai_trunk_plus_1").style.backgroundImage = "url('Images/p1.svg')";
            document.getElementById("bonsai_roots_plus_1").style.backgroundImage = "url('Images/p1.svg')";
        }
        else {
            document.getElementById("bonsai_foliage_plus_1").style.backgroundImage = "url('Images/pm1.svg')";
            document.getElementById("bonsai_branches_plus_1").style.backgroundImage = "url('Images/pm1.svg')";
            document.getElementById("bonsai_trunk_plus_1").style.backgroundImage = "url('Images/pm1.svg')";
            document.getElementById("bonsai_roots_plus_1").style.backgroundImage = "url('Images/pm1.svg')";
        }
        
        if (bonsaixx.leftpoints>9.99) {
            document.getElementById("bonsai_foliage_plus_10").style.backgroundImage = "url('Images/p10.svg')";
            document.getElementById("bonsai_branches_plus_10").style.backgroundImage = "url('Images/p10.svg')";
            document.getElementById("bonsai_trunk_plus_10").style.backgroundImage = "url('Images/p10.svg')";
            document.getElementById("bonsai_roots_plus_10").style.backgroundImage = "url('Images/p10.svg')";
        }
        else {
            document.getElementById("bonsai_foliage_plus_10").style.backgroundImage = "url('Images/pm10.svg')";
            document.getElementById("bonsai_branches_plus_10").style.backgroundImage = "url('Images/pm10.svg')";
            document.getElementById("bonsai_trunk_plus_10").style.backgroundImage = "url('Images/pm10.svg')";
            document.getElementById("bonsai_roots_plus_10").style.backgroundImage = "url('Images/pm10.svg')";
        }
        
        if (bonsaixx.foliage_lp>0.09) {
            document.getElementById("bonsai_foliage_minus_0").style.backgroundImage = "url('Images/m0.svg')";
        }
        else {
            document.getElementById("bonsai_foliage_minus_0").style.backgroundImage = "url('Images/pm0.svg')";
        }
        if (bonsaixx.foliage_lp>0.99) {
            document.getElementById("bonsai_foliage_minus_1").style.backgroundImage = "url('Images/m1.svg')";
        }
        else {
            document.getElementById("bonsai_foliage_minus_1").style.backgroundImage = "url('Images/pm1.svg')";
        }
        if (bonsaixx.foliage_lp>9.99) {
            document.getElementById("bonsai_foliage_minus_10").style.backgroundImage = "url('Images/m10.svg')";
        }
        else {
            document.getElementById("bonsai_foliage_minus_10").style.backgroundImage = "url('Images/pm10.svg')";
        }
        if (bonsaixx.branches_lp>0.09) {
            document.getElementById("bonsai_branches_minus_0").style.backgroundImage = "url('Images/m0.svg')";
        }
        else {
            document.getElementById("bonsai_branches_minus_0").style.backgroundImage = "url('Images/pm0.svg')";
        }
        if (bonsaixx.branches_lp>0.99) {
            document.getElementById("bonsai_branches_minus_1").style.backgroundImage = "url('Images/m1.svg')";
        }
        else {
            document.getElementById("bonsai_branches_minus_1").style.backgroundImage = "url('Images/pm1.svg')";
        }
        if (bonsaixx.branches_lp>9.99) {
            document.getElementById("bonsai_branches_minus_10").style.backgroundImage = "url('Images/m10.svg')";
        }
        else {
            document.getElementById("bonsai_branches_minus_10").style.backgroundImage = "url('Images/pm10.svg')";
        }
        if (bonsaixx.trunk_lp>0.09) {
            document.getElementById("bonsai_trunk_minus_0").style.backgroundImage = "url('Images/m0.svg')";
        }
        else {
            document.getElementById("bonsai_trunk_minus_0").style.backgroundImage = "url('Images/pm0.svg')";
        }
        if (bonsaixx.trunk_lp>0.99) {
            document.getElementById("bonsai_trunk_minus_1").style.backgroundImage = "url('Images/m1.svg')";
        }
        else {
            document.getElementById("bonsai_trunk_minus_1").style.backgroundImage = "url('Images/pm1.svg')";
        }
        if (bonsaixx.trunk_lp>9.99) {
            document.getElementById("bonsai_trunk_minus_10").style.backgroundImage = "url('Images/m10.svg')";
        }
        else {
            document.getElementById("bonsai_trunk_minus_10").style.backgroundImage = "url('Images/pm10.svg')";
        }
        if (bonsaixx.roots_lp>0.09) {
            document.getElementById("bonsai_roots_minus_0").style.backgroundImage = "url('Images/m0.svg')";
        }
        else {
            document.getElementById("bonsai_roots_minus_0").style.backgroundImage = "url('Images/pm0.svg')";
        }
        if (bonsaixx.roots_lp>0.99) {
            document.getElementById("bonsai_roots_minus_1").style.backgroundImage = "url('Images/m1.svg')";
        }
        else {
            document.getElementById("bonsai_roots_minus_1").style.backgroundImage = "url('Images/pm1.svg')";
        }
        if (bonsaixx.roots_lp>9.99) {
            document.getElementById("bonsai_roots_minus_10").style.backgroundImage = "url('Images/m10.svg')";
        }
        else {
            document.getElementById("bonsai_roots_minus_10").style.backgroundImage = "url('Images/pm10.svg')";
        }
        
        document.getElementById("Button_Grow").style.cursor= "pointer";
        document.getElementById("Button_Grow").className = "grey";
        document.getElementById("Button_Grow_Text").innerHTML = "Grow&nbsp;";
 
        document.getElementById("Button_Grow_Zeit").innerHTML = "("+bonsaixx.growing_zeit.toLocaleString('en', {minimumFractionDigits: 0})+"&nbsp;seconds)";          

        document.getElementById("ChangePosition").style.cursor= "pointer";
        document.getElementById("ChangePosition").className = "grey";
    }
}

/* Bonsai Growing Leftpoints Distribution Buttons*/
var btn_lm1 = document.getElementById("bonsai_level_minus_1");
var btn_lp1 = document.getElementById("bonsai_level_plus_1");
var btn_fm10 = document.getElementById("bonsai_foliage_minus_10");
var btn_fm1 = document.getElementById("bonsai_foliage_minus_1");
var btn_fm0 = document.getElementById("bonsai_foliage_minus_0");
var btn_fp0 = document.getElementById("bonsai_foliage_plus_0");
var btn_fp1 = document.getElementById("bonsai_foliage_plus_1");
var btn_fp10 = document.getElementById("bonsai_foliage_plus_10");
var btn_bm10 = document.getElementById("bonsai_branches_minus_10");
var btn_bm1 = document.getElementById("bonsai_branches_minus_1");
var btn_bm0 = document.getElementById("bonsai_branches_minus_0");
var btn_bp0 = document.getElementById("bonsai_branches_plus_0");
var btn_bp1 = document.getElementById("bonsai_branches_plus_1");
var btn_bp10 = document.getElementById("bonsai_branches_plus_10");
var btn_tm10 = document.getElementById("bonsai_trunk_minus_10");
var btn_tm1 = document.getElementById("bonsai_trunk_minus_1");
var btn_tm0 = document.getElementById("bonsai_trunk_minus_0");
var btn_tp0 = document.getElementById("bonsai_trunk_plus_0");
var btn_tp1 = document.getElementById("bonsai_trunk_plus_1");
var btn_tp10 = document.getElementById("bonsai_trunk_plus_10");
var btn_rm10 = document.getElementById("bonsai_roots_minus_10");
var btn_rm1 = document.getElementById("bonsai_roots_minus_1");
var btn_rm0 = document.getElementById("bonsai_roots_minus_0");
var btn_rp0 = document.getElementById("bonsai_roots_plus_0");
var btn_rp1 = document.getElementById("bonsai_roots_plus_1");
var btn_rp10 = document.getElementById("bonsai_roots_plus_10");

btn_lm1.onclick = function() {
    if (SearchBonsaiShowing().growing==1) { 
    }
    else {
        if (skills.patience>=1) {
            if (SearchBonsaiShowing().rarity==1) {
                if ((SearchBonsaiShowing().level+1)<SearchBonsaiShowing().level_new) {
                    for (let i = SearchBonsaiShowing().level; i < SearchBonsaiShowing().level_new-1; i++) {growtime += grow_time_r1[i]};
                    SearchBonsaiShowing().growing_zeit= growtime;
                    
                    SearchBonsaiShowing().foliage_lp=0;
                    SearchBonsaiShowing().branches_lp=0;
                    SearchBonsaiShowing().trunk_lp=0;
                    SearchBonsaiShowing().roots_lp=0;
                    for (let i = SearchBonsaiShowing().level; i < SearchBonsaiShowing().level_new-1; i++) {
                        SearchBonsaiShowing().foliage_new=0;
                        SearchBonsaiShowing().branches_new=0;
                        SearchBonsaiShowing().trunk_new=0;
                        SearchBonsaiShowing().roots_new=0;
                        SearchBonsaiShowing().leftpoints=0;
                        if (i+1<=10) {
                            if (level_cp_r1[0]==2) {
                                SearchBonsaiShowing().foliage_new = Math.round((((2/4)*naturedistribution(SearchBonsaiShowing(), 1)))* 10) / 10;
                                SearchBonsaiShowing().branches_new = Math.round((((2/4)*naturedistribution(SearchBonsaiShowing(), 2)))* 10) / 10;
                                SearchBonsaiShowing().trunk_new = Math.round((((2/4)*naturedistribution(SearchBonsaiShowing(), 3)))* 10) / 10;
                                SearchBonsaiShowing().roots_new = Math.round((((2/4)*naturedistribution(SearchBonsaiShowing(), 4)))* 10) / 10;
                            }
                            else {
                                cpdistribution2(SearchBonsaiShowing(), level_cp_r1, 0);
                            }
                        }
                        else if (i+1<=20) {
                            cpdistribution2(SearchBonsaiShowing(), level_cp_r1, 1);
                        }
                        else if (i+1<=30) {
                            cpdistribution2(SearchBonsaiShowing(), level_cp_r1, 2);
                        }
                        else if (i+1<=40) {
                            cpdistribution2(SearchBonsaiShowing(), level_cp_r1, 3);
                        }
                        else if (i+1<=50) {
                            cpdistribution2(SearchBonsaiShowing(), level_cp_r1, 4);
                        }
                        foliage_new +=SearchBonsaiShowing().foliage_new;
                        branches_new +=SearchBonsaiShowing().branches_new;
                        trunk_new +=SearchBonsaiShowing().trunk_new;
                        roots_new +=SearchBonsaiShowing().roots_new;
                        leftpoints +=SearchBonsaiShowing().leftpoints;
                    }
                    SearchBonsaiShowing().foliage_new= foliage_new;
                    SearchBonsaiShowing().branches_new= branches_new;
                    SearchBonsaiShowing().trunk_new= trunk_new;
                    SearchBonsaiShowing().roots_new= roots_new;
                    SearchBonsaiShowing().leftpoints= leftpoints;
                    
                    cpdistributionaftercare(SearchBonsaiShowing());
                    
                    SearchBonsaiShowing().level_new -=1;
                    Bonsai_Growing(SearchBonsaiShowing());
                    growtime=0;
                    foliage_new=0;
                    branches_new=0;
                    trunk_new=0;
                    roots_new=0; 
                    leftpoints=0;
                } 
            }
            if (SearchBonsaiShowing().rarity==2) {
                if ((SearchBonsaiShowing().level+1)<SearchBonsaiShowing().level_new) {
                    for (let i = SearchBonsaiShowing().level; i < SearchBonsaiShowing().level_new-1; i++) {growtime += grow_time_r2[i]};
                    SearchBonsaiShowing().growing_zeit= growtime;
                    
                    SearchBonsaiShowing().foliage_lp=0;
                    SearchBonsaiShowing().branches_lp=0;
                    SearchBonsaiShowing().trunk_lp=0;
                    SearchBonsaiShowing().roots_lp=0;
                    for (let i = SearchBonsaiShowing().level; i < SearchBonsaiShowing().level_new-1; i++) {
                        SearchBonsaiShowing().foliage_new=0;
                        SearchBonsaiShowing().branches_new=0;
                        SearchBonsaiShowing().trunk_new=0;
                        SearchBonsaiShowing().roots_new=0;
                        SearchBonsaiShowing().leftpoints=0;
                        if (i+1<=10) {
                            if (level_cp_r2[0]==2) {
                                SearchBonsaiShowing().foliage_new = Math.round((((2/4)*naturedistribution(SearchBonsaiShowing(), 1)))* 10) / 10;
                                SearchBonsaiShowing().branches_new = Math.round((((2/4)*naturedistribution(SearchBonsaiShowing(), 2)))* 10) / 10;
                                SearchBonsaiShowing().trunk_new = Math.round((((2/4)*naturedistribution(SearchBonsaiShowing(), 3)))* 10) / 10;
                                SearchBonsaiShowing().roots_new = Math.round((((2/4)*naturedistribution(SearchBonsaiShowing(), 4)))* 10) / 10;
                            }
                            else {
                                cpdistribution2(SearchBonsaiShowing(), level_cp_r2, 0);
                            }
                        }
                        else if (i+1<=20) {
                            cpdistribution2(SearchBonsaiShowing(), level_cp_r2, 1);
                        }
                        else if (i+1<=30) {
                            cpdistribution2(SearchBonsaiShowing(), level_cp_r2, 2);
                        }
                        else if (i+1<=40) {
                            cpdistribution2(SearchBonsaiShowing(), level_cp_r2, 3);
                        }
                        else if (i+1<=50) {
                            cpdistribution2(SearchBonsaiShowing(), level_cp_r2, 4);
                        }
                        foliage_new +=SearchBonsaiShowing().foliage_new;
                        branches_new +=SearchBonsaiShowing().branches_new;
                        trunk_new +=SearchBonsaiShowing().trunk_new;
                        roots_new +=SearchBonsaiShowing().roots_new;
                        leftpoints +=SearchBonsaiShowing().leftpoints;
                    }
                    SearchBonsaiShowing().foliage_new= foliage_new;
                    SearchBonsaiShowing().branches_new= branches_new;
                    SearchBonsaiShowing().trunk_new= trunk_new;
                    SearchBonsaiShowing().roots_new= roots_new;
                    SearchBonsaiShowing().leftpoints= leftpoints;
                    
                    cpdistributionaftercare(SearchBonsaiShowing());
                    
                    SearchBonsaiShowing().level_new -=1;
                    Bonsai_Growing(SearchBonsaiShowing());
                    growtime=0;
                    foliage_new=0;
                    branches_new=0;
                    trunk_new=0;
                    roots_new=0; 
                    leftpoints=0;
                } 
            }
            if (SearchBonsaiShowing().rarity==3) {
                if ((SearchBonsaiShowing().level+1)<SearchBonsaiShowing().level_new) {
                    for (let i = SearchBonsaiShowing().level; i < SearchBonsaiShowing().level_new-1; i++) {growtime += grow_time_r3[i]};
                    SearchBonsaiShowing().growing_zeit= growtime;
                    
                    SearchBonsaiShowing().foliage_lp=0;
                    SearchBonsaiShowing().branches_lp=0;
                    SearchBonsaiShowing().trunk_lp=0;
                    SearchBonsaiShowing().roots_lp=0;
                    for (let i = SearchBonsaiShowing().level; i < SearchBonsaiShowing().level_new-1; i++) {
                        SearchBonsaiShowing().foliage_new=0;
                        SearchBonsaiShowing().branches_new=0;
                        SearchBonsaiShowing().trunk_new=0;
                        SearchBonsaiShowing().roots_new=0;
                        SearchBonsaiShowing().leftpoints=0;
                        if (i+1<=10) {
                            if (level_cp_r3[0]==2) {
                                SearchBonsaiShowing().foliage_new = Math.round((((2/4)*naturedistribution(SearchBonsaiShowing(), 1)))* 10) / 10;
                                SearchBonsaiShowing().branches_new = Math.round((((2/4)*naturedistribution(SearchBonsaiShowing(), 2)))* 10) / 10;
                                SearchBonsaiShowing().trunk_new = Math.round((((2/4)*naturedistribution(SearchBonsaiShowing(), 3)))* 10) / 10;
                                SearchBonsaiShowing().roots_new = Math.round((((2/4)*naturedistribution(SearchBonsaiShowing(), 4)))* 10) / 10;
                            }
                            else {
                                cpdistribution2(SearchBonsaiShowing(), level_cp_r3, 0);
                            }
                        }
                        else if (i+1<=20) {
                            cpdistribution2(SearchBonsaiShowing(), level_cp_r3, 1);
                        }
                        else if (i+1<=30) {
                            cpdistribution2(SearchBonsaiShowing(), level_cp_r3, 2);
                        }
                        else if (i+1<=40) {
                            cpdistribution2(SearchBonsaiShowing(), level_cp_r3, 3);
                        }
                        else if (i+1<=50) {
                            cpdistribution2(SearchBonsaiShowing(), level_cp_r3, 4);
                        }
                        foliage_new +=SearchBonsaiShowing().foliage_new;
                        branches_new +=SearchBonsaiShowing().branches_new;
                        trunk_new +=SearchBonsaiShowing().trunk_new;
                        roots_new +=SearchBonsaiShowing().roots_new;
                        leftpoints +=SearchBonsaiShowing().leftpoints;
                    }
                    SearchBonsaiShowing().foliage_new= foliage_new;
                    SearchBonsaiShowing().branches_new= branches_new;
                    SearchBonsaiShowing().trunk_new= trunk_new;
                    SearchBonsaiShowing().roots_new= roots_new;
                    SearchBonsaiShowing().leftpoints= leftpoints;
                    
                    cpdistributionaftercare(SearchBonsaiShowing());
                    
                    SearchBonsaiShowing().level_new -=1;
                    Bonsai_Growing(SearchBonsaiShowing());
                    growtime=0;
                    foliage_new=0;
                    branches_new=0;
                    trunk_new=0;
                    roots_new=0; 
                    leftpoints=0;
                } 
            }
        }
    }
}

btn_lp1.onclick = function() {
    if (SearchBonsaiShowing().growing==1) { 
    }
    else {
        if (skills.patience>=1) {
            if (SearchBonsaiShowing().rarity==1) {
                for (let i = SearchBonsaiShowing().level; i < SearchBonsaiShowing().level_new+1; i++) {growtime += grow_time_r1[i]};
                if (growtime<3600) {
                    SearchBonsaiShowing().growing_zeit= growtime;
                    
                    SearchBonsaiShowing().foliage_lp=0;
                    SearchBonsaiShowing().branches_lp=0;
                    SearchBonsaiShowing().trunk_lp=0;
                    SearchBonsaiShowing().roots_lp=0;
                    for (let i = SearchBonsaiShowing().level; i < SearchBonsaiShowing().level_new+1; i++) {
                        SearchBonsaiShowing().foliage_new=0;
                        SearchBonsaiShowing().branches_new=0;
                        SearchBonsaiShowing().trunk_new=0;
                        SearchBonsaiShowing().roots_new=0;
                        SearchBonsaiShowing().leftpoints=0;
                        if (i+1<=10) {
                            if (level_cp_r1[0]==2) {
                                SearchBonsaiShowing().foliage_new = Math.round((((2/4)*naturedistribution(SearchBonsaiShowing(), 1)))* 10) / 10;
                                SearchBonsaiShowing().branches_new = Math.round((((2/4)*naturedistribution(SearchBonsaiShowing(), 2)))* 10) / 10;
                                SearchBonsaiShowing().trunk_new = Math.round((((2/4)*naturedistribution(SearchBonsaiShowing(), 3)))* 10) / 10;
                                SearchBonsaiShowing().roots_new = Math.round((((2/4)*naturedistribution(SearchBonsaiShowing(), 4)))* 10) / 10;
                            }
                            else {
                                cpdistribution2(SearchBonsaiShowing(), level_cp_r1, 0);
                            }
                        }
                        else if (i+1<=20) {
                            cpdistribution2(SearchBonsaiShowing(), level_cp_r1, 1);
                        }
                        else if (i+1<=30) {
                            cpdistribution2(SearchBonsaiShowing(), level_cp_r1, 2);
                        }
                        else if (i+1<=40) {
                            cpdistribution2(SearchBonsaiShowing(), level_cp_r1, 3);
                        }
                        else if (i+1<=50) {
                            cpdistribution2(SearchBonsaiShowing(), level_cp_r1, 4);
                        }
                        foliage_new +=SearchBonsaiShowing().foliage_new;
                        branches_new +=SearchBonsaiShowing().branches_new;
                        trunk_new +=SearchBonsaiShowing().trunk_new;
                        roots_new +=SearchBonsaiShowing().roots_new;
                        leftpoints +=SearchBonsaiShowing().leftpoints;
                    }
                    SearchBonsaiShowing().foliage_new= foliage_new;
                    SearchBonsaiShowing().branches_new= branches_new;
                    SearchBonsaiShowing().trunk_new= trunk_new;
                    SearchBonsaiShowing().roots_new= roots_new;
                    SearchBonsaiShowing().leftpoints= leftpoints;
                    
                    cpdistributionaftercare(SearchBonsaiShowing());
                    
                    SearchBonsaiShowing().level_new +=1;
                    Bonsai_Growing(SearchBonsaiShowing());
                    growtime=0;
                    foliage_new=0;
                    branches_new=0;
                    trunk_new=0;
                    roots_new=0; 
                    leftpoints=0;
                }
                else {
                    growtime=0;
                }
            }
            if (SearchBonsaiShowing().rarity==2) {
                for (let i = SearchBonsaiShowing().level; i < SearchBonsaiShowing().level_new+1; i++) {growtime += grow_time_r2[i]};
                if (growtime<3600) {
                    SearchBonsaiShowing().growing_zeit= growtime;
                    
                    SearchBonsaiShowing().foliage_lp=0;
                    SearchBonsaiShowing().branches_lp=0;
                    SearchBonsaiShowing().trunk_lp=0;
                    SearchBonsaiShowing().roots_lp=0;
                    for (let i = SearchBonsaiShowing().level; i < SearchBonsaiShowing().level_new+1; i++) {
                        SearchBonsaiShowing().foliage_new=0;
                        SearchBonsaiShowing().branches_new=0;
                        SearchBonsaiShowing().trunk_new=0;
                        SearchBonsaiShowing().roots_new=0;
                        SearchBonsaiShowing().leftpoints=0;
                        if (i+1<=10) {
                            if (level_cp_r2[0]==2) {
                                SearchBonsaiShowing().foliage_new = Math.round((((2/4)*naturedistribution(SearchBonsaiShowing(), 1)))* 10) / 10;
                                SearchBonsaiShowing().branches_new = Math.round((((2/4)*naturedistribution(SearchBonsaiShowing(), 2)))* 10) / 10;
                                SearchBonsaiShowing().trunk_new = Math.round((((2/4)*naturedistribution(SearchBonsaiShowing(), 3)))* 10) / 10;
                                SearchBonsaiShowing().roots_new = Math.round((((2/4)*naturedistribution(SearchBonsaiShowing(), 4)))* 10) / 10;
                            }
                            else {
                                cpdistribution2(SearchBonsaiShowing(), level_cp_r2, 0);
                            }
                        }
                        else if (i+1<=20) {
                            cpdistribution2(SearchBonsaiShowing(), level_cp_r2, 1);
                        }
                        else if (i+1<=30) {
                            cpdistribution2(SearchBonsaiShowing(), level_cp_r2, 2);
                        }
                        else if (i+1<=40) {
                            cpdistribution2(SearchBonsaiShowing(), level_cp_r2, 3);
                        }
                        else if (i+1<=50) {
                            cpdistribution2(SearchBonsaiShowing(), level_cp_r2, 4);
                        }
                        foliage_new +=SearchBonsaiShowing().foliage_new;
                        branches_new +=SearchBonsaiShowing().branches_new;
                        trunk_new +=SearchBonsaiShowing().trunk_new;
                        roots_new +=SearchBonsaiShowing().roots_new;
                        leftpoints +=SearchBonsaiShowing().leftpoints;
                    }
                    SearchBonsaiShowing().foliage_new= foliage_new;
                    SearchBonsaiShowing().branches_new= branches_new;
                    SearchBonsaiShowing().trunk_new= trunk_new;
                    SearchBonsaiShowing().roots_new= roots_new;
                    SearchBonsaiShowing().leftpoints= leftpoints;
                    
                    cpdistributionaftercare(SearchBonsaiShowing());
                    
                    SearchBonsaiShowing().level_new +=1;
                    Bonsai_Growing(SearchBonsaiShowing());
                    growtime=0;
                    foliage_new=0;
                    branches_new=0;
                    trunk_new=0;
                    roots_new=0; 
                    leftpoints=0;
                }
                else {
                    growtime=0;
                }
            }
            if (SearchBonsaiShowing().rarity==3) {
                for (let i = SearchBonsaiShowing().level; i < SearchBonsaiShowing().level_new+1; i++) {growtime += grow_time_r3[i]};
                if (growtime<3600) {
                    SearchBonsaiShowing().growing_zeit= growtime;
                    
                    SearchBonsaiShowing().foliage_lp=0;
                    SearchBonsaiShowing().branches_lp=0;
                    SearchBonsaiShowing().trunk_lp=0;
                    SearchBonsaiShowing().roots_lp=0;
                    for (let i = SearchBonsaiShowing().level; i < SearchBonsaiShowing().level_new+1; i++) {
                        SearchBonsaiShowing().foliage_new=0;
                        SearchBonsaiShowing().branches_new=0;
                        SearchBonsaiShowing().trunk_new=0;
                        SearchBonsaiShowing().roots_new=0;
                        SearchBonsaiShowing().leftpoints=0;
                        if (i+1<=10) {
                            if (level_cp_r3[0]==2) {
                                SearchBonsaiShowing().foliage_new = Math.round((((2/4)*naturedistribution(SearchBonsaiShowing(), 1)))* 10) / 10;
                                SearchBonsaiShowing().branches_new = Math.round((((2/4)*naturedistribution(SearchBonsaiShowing(), 2)))* 10) / 10;
                                SearchBonsaiShowing().trunk_new = Math.round((((2/4)*naturedistribution(SearchBonsaiShowing(), 3)))* 10) / 10;
                                SearchBonsaiShowing().roots_new = Math.round((((2/4)*naturedistribution(SearchBonsaiShowing(), 4)))* 10) / 10;
                            }
                            else {
                                cpdistribution2(SearchBonsaiShowing(), level_cp_r3, 0);
                            }
                        }
                        else if (i+1<=20) {
                            cpdistribution2(SearchBonsaiShowing(), level_cp_r3, 1);
                        }
                        else if (i+1<=30) {
                            cpdistribution2(SearchBonsaiShowing(), level_cp_r3, 2);
                        }
                        else if (i+1<=40) {
                            cpdistribution2(SearchBonsaiShowing(), level_cp_r3, 3);
                        }
                        else if (i+1<=50) {
                            cpdistribution2(SearchBonsaiShowing(), level_cp_r3, 4);
                        }
                        foliage_new +=SearchBonsaiShowing().foliage_new;
                        branches_new +=SearchBonsaiShowing().branches_new;
                        trunk_new +=SearchBonsaiShowing().trunk_new;
                        roots_new +=SearchBonsaiShowing().roots_new;
                        leftpoints +=SearchBonsaiShowing().leftpoints;
                    }
                    SearchBonsaiShowing().foliage_new= foliage_new;
                    SearchBonsaiShowing().branches_new= branches_new;
                    SearchBonsaiShowing().trunk_new= trunk_new;
                    SearchBonsaiShowing().roots_new= roots_new;
                    SearchBonsaiShowing().leftpoints= leftpoints;
                    
                    cpdistributionaftercare(SearchBonsaiShowing());
                    
                    SearchBonsaiShowing().level_new +=1;
                    Bonsai_Growing(SearchBonsaiShowing());
                    growtime=0;
                    foliage_new=0;
                    branches_new=0;
                    trunk_new=0;
                    roots_new=0; 
                    leftpoints=0;
                }
                else {
                    growtime=0;
                }
            }

        }
    }
}

/* Distribution Foliage Buttons*/
btn_fm10.onclick = function() {
    if (SearchBonsaiShowing().growing==1) { 
    }
    else {
        if (SearchBonsaiShowing().foliage_lp>9.99) {
            SearchBonsaiShowing().leftpoints +=10;
            SearchBonsaiShowing().foliage_new -=10;
            SearchBonsaiShowing().foliage_lp -=10;
            document.getElementById("bonsai_foliage_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().foliage_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_foliage_new2").innerHTML = (Math.round((SearchBonsaiShowing().foliage_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});        
            document.getElementById("bonsai_detail_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().leftpoints)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_cp_new2").innerHTML = (Math.round((SearchBonsaiShowing().foliage_new+SearchBonsaiShowing().branches_new+SearchBonsaiShowing().trunk_new+SearchBonsaiShowing().roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            leftpoints_f_buttoncheck_m();
        }
    }
}

btn_fm1.onclick = function() {
    if (SearchBonsaiShowing().growing==1) { 
    }
    else {
        if (SearchBonsaiShowing().foliage_lp>0.99) {
            SearchBonsaiShowing().leftpoints +=1;
            SearchBonsaiShowing().foliage_new -=1;
            SearchBonsaiShowing().foliage_lp -=1;
            document.getElementById("bonsai_foliage_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().foliage_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_foliage_new2").innerHTML = (Math.round((SearchBonsaiShowing().foliage_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});        
            document.getElementById("bonsai_detail_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().leftpoints)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_cp_new2").innerHTML = (Math.round((SearchBonsaiShowing().foliage_new+SearchBonsaiShowing().branches_new+SearchBonsaiShowing().trunk_new+SearchBonsaiShowing().roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            leftpoints_f_buttoncheck_m();
        }
    }
}

btn_fm0.onclick = function() {
    if (SearchBonsaiShowing().growing==1) { 
    }
    else {
        if (SearchBonsaiShowing().foliage_lp>0.09) {
            SearchBonsaiShowing().leftpoints +=0.1;
            SearchBonsaiShowing().foliage_new -=0.1;
            SearchBonsaiShowing().foliage_lp -=0.1;
            document.getElementById("bonsai_foliage_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().foliage_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_foliage_new2").innerHTML = (Math.round((SearchBonsaiShowing().foliage_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});        
            document.getElementById("bonsai_detail_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().leftpoints)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_cp_new2").innerHTML = (Math.round((SearchBonsaiShowing().foliage_new+SearchBonsaiShowing().branches_new+SearchBonsaiShowing().trunk_new+SearchBonsaiShowing().roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            leftpoints_f_buttoncheck_m();
        }
    }
}

function leftpoints_f_buttoncheck_m() {
    if (SearchBonsaiShowing().foliage_lp<9.99) {
        document.getElementById("bonsai_foliage_minus_10").style.backgroundImage = "url('Images/pm10.svg')";
    }
    if (SearchBonsaiShowing().foliage_lp<0.99) {
        document.getElementById("bonsai_foliage_minus_1").style.backgroundImage = "url('Images/pm1.svg')";
    }
    if (SearchBonsaiShowing().foliage_lp<0.09) {
        document.getElementById("bonsai_foliage_minus_0").style.backgroundImage = "url('Images/pm0.svg')";
    }
    if (SearchBonsaiShowing().leftpoints>0.09) {
        document.getElementById("bonsai_foliage_plus_0").style.backgroundImage = "url('Images/p0.svg')";
        document.getElementById("bonsai_branches_plus_0").style.backgroundImage = "url('Images/p0.svg')";
        document.getElementById("bonsai_trunk_plus_0").style.backgroundImage = "url('Images/p0.svg')";
        document.getElementById("bonsai_roots_plus_0").style.backgroundImage = "url('Images/p0.svg')";
    }
    if (SearchBonsaiShowing().leftpoints>0.99) {
        document.getElementById("bonsai_foliage_plus_1").style.backgroundImage = "url('Images/p1.svg')";
        document.getElementById("bonsai_branches_plus_1").style.backgroundImage = "url('Images/p1.svg')";
        document.getElementById("bonsai_trunk_plus_1").style.backgroundImage = "url('Images/p1.svg')";
        document.getElementById("bonsai_roots_plus_1").style.backgroundImage = "url('Images/p1.svg')";
    }
    if (SearchBonsaiShowing().leftpoints>9.99) {
        document.getElementById("bonsai_foliage_plus_10").style.backgroundImage = "url('Images/p10.svg')";
        document.getElementById("bonsai_branches_plus_10").style.backgroundImage = "url('Images/p10.svg')";
        document.getElementById("bonsai_trunk_plus_10").style.backgroundImage = "url('Images/p10.svg')";
        document.getElementById("bonsai_roots_plus_10").style.backgroundImage = "url('Images/p10.svg')";
    }
}

btn_fp0.onclick = function() {
    if (SearchBonsaiShowing().growing==1) { 
    }
    else {
        if (SearchBonsaiShowing().leftpoints>0.09) {
            SearchBonsaiShowing().foliage_lp +=0.1;
            SearchBonsaiShowing().foliage_new +=0.1;
            SearchBonsaiShowing().leftpoints -=0.1;
            document.getElementById("bonsai_foliage_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().foliage_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_foliage_new2").innerHTML = (Math.round((SearchBonsaiShowing().foliage_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});        
            document.getElementById("bonsai_detail_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().leftpoints)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_cp_new2").innerHTML = (Math.round((SearchBonsaiShowing().foliage_new+SearchBonsaiShowing().branches_new+SearchBonsaiShowing().trunk_new+SearchBonsaiShowing().roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            leftpoints_f_buttoncheck_p();
        }
    }
}

btn_fp1.onclick = function() {
    if (SearchBonsaiShowing().growing==1) {
    }
    else {
        if (SearchBonsaiShowing().leftpoints>0.99) {
            SearchBonsaiShowing().foliage_lp +=1;
            SearchBonsaiShowing().foliage_new +=1;
            SearchBonsaiShowing().leftpoints -=1;
            document.getElementById("bonsai_foliage_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().foliage_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_foliage_new2").innerHTML = (Math.round((SearchBonsaiShowing().foliage_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});        
            document.getElementById("bonsai_detail_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().leftpoints)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_cp_new2").innerHTML = (Math.round((SearchBonsaiShowing().foliage_new+SearchBonsaiShowing().branches_new+SearchBonsaiShowing().trunk_new+SearchBonsaiShowing().roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            leftpoints_f_buttoncheck_p();
        }
    }
}

btn_fp10.onclick = function() {
    if (SearchBonsaiShowing().growing==1) { 
    }
    else {
        if (SearchBonsaiShowing().leftpoints>9.99) {
            SearchBonsaiShowing().foliage_lp +=10;
            SearchBonsaiShowing().foliage_new +=10;
            SearchBonsaiShowing().leftpoints -=10;
            document.getElementById("bonsai_foliage_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().foliage_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_foliage_new2").innerHTML = (Math.round((SearchBonsaiShowing().foliage_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});        
            document.getElementById("bonsai_detail_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().leftpoints)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_cp_new2").innerHTML = (Math.round((SearchBonsaiShowing().foliage_new+SearchBonsaiShowing().branches_new+SearchBonsaiShowing().trunk_new+SearchBonsaiShowing().roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            leftpoints_f_buttoncheck_p();
        }
    }
}

function leftpoints_f_buttoncheck_p() {
    if (SearchBonsaiShowing().foliage_lp>9.99) {
        document.getElementById("bonsai_foliage_minus_10").style.backgroundImage = "url('Images/m10.svg')";
    }
    if (SearchBonsaiShowing().foliage_lp>0.99) {
        document.getElementById("bonsai_foliage_minus_1").style.backgroundImage = "url('Images/m1.svg')";
    }
    if (SearchBonsaiShowing().foliage_lp>0.09) {
        document.getElementById("bonsai_foliage_minus_0").style.backgroundImage = "url('Images/m0.svg')";
    }
    if (SearchBonsaiShowing().leftpoints<0.09) {
        document.getElementById("bonsai_foliage_plus_0").style.backgroundImage = "url('Images/pm0.svg')";
        document.getElementById("bonsai_branches_plus_0").style.backgroundImage = "url('Images/pm0.svg')";
        document.getElementById("bonsai_trunk_plus_0").style.backgroundImage = "url('Images/pm0.svg')";
        document.getElementById("bonsai_roots_plus_0").style.backgroundImage = "url('Images/pm0.svg')";
    }
    if (SearchBonsaiShowing().leftpoints<0.99) {
        document.getElementById("bonsai_foliage_plus_1").style.backgroundImage = "url('Images/pm1.svg')";
        document.getElementById("bonsai_branches_plus_1").style.backgroundImage = "url('Images/pm1.svg')";
        document.getElementById("bonsai_trunk_plus_1").style.backgroundImage = "url('Images/pm1.svg')";
        document.getElementById("bonsai_roots_plus_1").style.backgroundImage = "url('Images/pm1.svg')";
    }
    if (SearchBonsaiShowing().leftpoints<9.99) {
        document.getElementById("bonsai_foliage_plus_10").style.backgroundImage = "url('Images/pm10.svg')";
        document.getElementById("bonsai_branches_plus_10").style.backgroundImage = "url('Images/pm10.svg')";
        document.getElementById("bonsai_trunk_plus_10").style.backgroundImage = "url('Images/pm10.svg')";
        document.getElementById("bonsai_roots_plus_10").style.backgroundImage = "url('Images/pm10.svg')";
    }
}

/* Distribution Branches Buttons*/
btn_bm10.onclick = function() {
    if (SearchBonsaiShowing().growing==1) { 
    }
    else {
        if (SearchBonsaiShowing().branches_lp>9.99) {
            SearchBonsaiShowing().leftpoints +=10;
            SearchBonsaiShowing().branches_new -=10;
            SearchBonsaiShowing().branches_lp -=10;
            document.getElementById("bonsai_branches_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().branches_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_branches_new2").innerHTML = (Math.round((SearchBonsaiShowing().branches_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});        
            document.getElementById("bonsai_detail_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().leftpoints)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_cp_new2").innerHTML = (Math.round((SearchBonsaiShowing().foliage_new+SearchBonsaiShowing().branches_new+SearchBonsaiShowing().trunk_new+SearchBonsaiShowing().roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            leftpoints_b_buttoncheck_m();
        }
    }
}

btn_bm1.onclick = function() {
    if (SearchBonsaiShowing().growing==1) { 
    }
    else {
        if (SearchBonsaiShowing().branches_lp>0.99) {
            SearchBonsaiShowing().leftpoints +=1;
            SearchBonsaiShowing().branches_new -=1;
            SearchBonsaiShowing().branches_lp -=1;
            document.getElementById("bonsai_branches_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().branches_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_branches_new2").innerHTML = (Math.round((SearchBonsaiShowing().branches_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});        
            document.getElementById("bonsai_detail_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().leftpoints)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_cp_new2").innerHTML = (Math.round((SearchBonsaiShowing().foliage_new+SearchBonsaiShowing().branches_new+SearchBonsaiShowing().trunk_new+SearchBonsaiShowing().roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            leftpoints_b_buttoncheck_m();
        }
    }
}

btn_bm0.onclick = function() {
    if (SearchBonsaiShowing().growing==1) { 
    }
    else {
        if (SearchBonsaiShowing().branches_lp>0.09) {
            SearchBonsaiShowing().leftpoints +=0.1;
            SearchBonsaiShowing().branches_new -=0.1;
            SearchBonsaiShowing().branches_lp -=0.1;
            document.getElementById("bonsai_branches_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().branches_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_branches_new2").innerHTML = (Math.round((SearchBonsaiShowing().branches_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});        
            document.getElementById("bonsai_detail_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().leftpoints)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_cp_new2").innerHTML = (Math.round((SearchBonsaiShowing().foliage_new+SearchBonsaiShowing().branches_new+SearchBonsaiShowing().trunk_new+SearchBonsaiShowing().roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            leftpoints_b_buttoncheck_m();
        }
    }
}

function leftpoints_b_buttoncheck_m() {
    if (SearchBonsaiShowing().branches_lp<9.99) {
        document.getElementById("bonsai_branches_minus_10").style.backgroundImage = "url('Images/pm10.svg')";
    }
    if (SearchBonsaiShowing().branches_lp<0.99) {
        document.getElementById("bonsai_branches_minus_1").style.backgroundImage = "url('Images/pm1.svg')";
    }
    if (SearchBonsaiShowing().branches_lp<0.09) {
        document.getElementById("bonsai_branches_minus_0").style.backgroundImage = "url('Images/pm0.svg')";
    }
    if (SearchBonsaiShowing().leftpoints>0.09) {
        document.getElementById("bonsai_foliage_plus_0").style.backgroundImage = "url('Images/p0.svg')";
        document.getElementById("bonsai_branches_plus_0").style.backgroundImage = "url('Images/p0.svg')";
        document.getElementById("bonsai_trunk_plus_0").style.backgroundImage = "url('Images/p0.svg')";
        document.getElementById("bonsai_roots_plus_0").style.backgroundImage = "url('Images/p0.svg')";
    }
    if (SearchBonsaiShowing().leftpoints>0.99) {
        document.getElementById("bonsai_foliage_plus_1").style.backgroundImage = "url('Images/p1.svg')";
        document.getElementById("bonsai_branches_plus_1").style.backgroundImage = "url('Images/p1.svg')";
        document.getElementById("bonsai_trunk_plus_1").style.backgroundImage = "url('Images/p1.svg')";
        document.getElementById("bonsai_roots_plus_1").style.backgroundImage = "url('Images/p1.svg')";
    }
    if (SearchBonsaiShowing().leftpoints>9.99) {
        document.getElementById("bonsai_foliage_plus_10").style.backgroundImage = "url('Images/p10.svg')";
        document.getElementById("bonsai_branches_plus_10").style.backgroundImage = "url('Images/p10.svg')";
        document.getElementById("bonsai_trunk_plus_10").style.backgroundImage = "url('Images/p10.svg')";
        document.getElementById("bonsai_roots_plus_10").style.backgroundImage = "url('Images/p10.svg')";
    }
}

btn_bp0.onclick = function() {
    if (SearchBonsaiShowing().growing==1) { 
    }
    else {
        if (SearchBonsaiShowing().leftpoints>0.09) {
            SearchBonsaiShowing().branches_lp +=0.1;
            SearchBonsaiShowing().branches_new +=0.1;
            SearchBonsaiShowing().leftpoints -=0.1;
            document.getElementById("bonsai_branches_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().branches_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_branches_new2").innerHTML = (Math.round((SearchBonsaiShowing().branches_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});        
            document.getElementById("bonsai_detail_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().leftpoints)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_cp_new2").innerHTML = (Math.round((SearchBonsaiShowing().foliage_new+SearchBonsaiShowing().branches_new+SearchBonsaiShowing().trunk_new+SearchBonsaiShowing().roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            leftpoints_b_buttoncheck_p();
        }
    }
}

btn_bp1.onclick = function() {
    if (SearchBonsaiShowing().growing==1) {
    }
    else {
        if (SearchBonsaiShowing().leftpoints>0.99) {
            SearchBonsaiShowing().branches_lp +=1;
            SearchBonsaiShowing().branches_new +=1;
            SearchBonsaiShowing().leftpoints -=1;
            document.getElementById("bonsai_branches_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().branches_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_branches_new2").innerHTML = (Math.round((SearchBonsaiShowing().branches_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});        
            document.getElementById("bonsai_detail_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().leftpoints)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_cp_new2").innerHTML = (Math.round((SearchBonsaiShowing().foliage_new+SearchBonsaiShowing().branches_new+SearchBonsaiShowing().trunk_new+SearchBonsaiShowing().roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            leftpoints_b_buttoncheck_p();
        }
    }
}

btn_bp10.onclick = function() {
    if (SearchBonsaiShowing().growing==1) { 
    }
    else {
        if (SearchBonsaiShowing().leftpoints>9.99) {
            SearchBonsaiShowing().branches_lp +=10;
            SearchBonsaiShowing().branches_new +=10;
            SearchBonsaiShowing().leftpoints -=10;
            document.getElementById("bonsai_branches_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().branches_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_branches_new2").innerHTML = (Math.round((SearchBonsaiShowing().branches_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});        
            document.getElementById("bonsai_detail_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().leftpoints)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_cp_new2").innerHTML = (Math.round((SearchBonsaiShowing().foliage_new+SearchBonsaiShowing().branches_new+SearchBonsaiShowing().trunk_new+SearchBonsaiShowing().roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            leftpoints_b_buttoncheck_p();
        }
    }
}

function leftpoints_b_buttoncheck_p() {
    if (SearchBonsaiShowing().branches_lp>9.99) {
        document.getElementById("bonsai_branches_minus_10").style.backgroundImage = "url('Images/m10.svg')";
    }
    if (SearchBonsaiShowing().branches_lp>0.99) {
        document.getElementById("bonsai_branches_minus_1").style.backgroundImage = "url('Images/m1.svg')";
    }
    if (SearchBonsaiShowing().branches_lp>0.09) {
        document.getElementById("bonsai_branches_minus_0").style.backgroundImage = "url('Images/m0.svg')";
    }
    if (SearchBonsaiShowing().leftpoints<0.09) {
        document.getElementById("bonsai_foliage_plus_0").style.backgroundImage = "url('Images/pm0.svg')";
        document.getElementById("bonsai_branches_plus_0").style.backgroundImage = "url('Images/pm0.svg')";
        document.getElementById("bonsai_trunk_plus_0").style.backgroundImage = "url('Images/pm0.svg')";
        document.getElementById("bonsai_roots_plus_0").style.backgroundImage = "url('Images/pm0.svg')";
    }
    if (SearchBonsaiShowing().leftpoints<0.99) {
        document.getElementById("bonsai_foliage_plus_1").style.backgroundImage = "url('Images/pm1.svg')";
        document.getElementById("bonsai_branches_plus_1").style.backgroundImage = "url('Images/pm1.svg')";
        document.getElementById("bonsai_trunk_plus_1").style.backgroundImage = "url('Images/pm1.svg')";
        document.getElementById("bonsai_roots_plus_1").style.backgroundImage = "url('Images/pm1.svg')";
    }
    if (SearchBonsaiShowing().leftpoints<9.99) {
        document.getElementById("bonsai_foliage_plus_10").style.backgroundImage = "url('Images/pm10.svg')";
        document.getElementById("bonsai_branches_plus_10").style.backgroundImage = "url('Images/pm10.svg')";
        document.getElementById("bonsai_trunk_plus_10").style.backgroundImage = "url('Images/pm10.svg')";
        document.getElementById("bonsai_roots_plus_10").style.backgroundImage = "url('Images/pm10.svg')";
    }
}

/* Distribution Trunk Buttons*/
btn_tm10.onclick = function() {
    if (SearchBonsaiShowing().growing==1) { 
    }
    else {
        if (SearchBonsaiShowing().trunk_lp>9.99) {
            SearchBonsaiShowing().leftpoints +=10;
            SearchBonsaiShowing().trunk_new -=10;
            SearchBonsaiShowing().trunk_lp -=10;
            document.getElementById("bonsai_trunk_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().trunk_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_trunk_new2").innerHTML = (Math.round((SearchBonsaiShowing().trunk_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});        
            document.getElementById("bonsai_detail_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().leftpoints)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_cp_new2").innerHTML = (Math.round((SearchBonsaiShowing().foliage_new+SearchBonsaiShowing().branches_new+SearchBonsaiShowing().trunk_new+SearchBonsaiShowing().roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            leftpoints_t_buttoncheck_m();
        }
    }
}

btn_tm1.onclick = function() {
    if (SearchBonsaiShowing().growing==1) { 
    }
    else {
        if (SearchBonsaiShowing().trunk_lp>0.99) {
            SearchBonsaiShowing().leftpoints +=1;
            SearchBonsaiShowing().trunk_new -=1;
            SearchBonsaiShowing().trunk_lp -=1;
            document.getElementById("bonsai_trunk_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().trunk_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_trunk_new2").innerHTML = (Math.round((SearchBonsaiShowing().trunk_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});        
            document.getElementById("bonsai_detail_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().leftpoints)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_cp_new2").innerHTML = (Math.round((SearchBonsaiShowing().foliage_new+SearchBonsaiShowing().branches_new+SearchBonsaiShowing().trunk_new+SearchBonsaiShowing().roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            leftpoints_t_buttoncheck_m();
        }
    }
}

btn_tm0.onclick = function() {
    if (SearchBonsaiShowing().growing==1) { 
    }
    else {
        if (SearchBonsaiShowing().trunk_lp>0.09) {
            SearchBonsaiShowing().leftpoints +=0.1;
            SearchBonsaiShowing().trunk_new -=0.1;
            SearchBonsaiShowing().trunk_lp -=0.1;
            document.getElementById("bonsai_trunk_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().trunk_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_trunk_new2").innerHTML = (Math.round((SearchBonsaiShowing().trunk_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});        
            document.getElementById("bonsai_detail_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().leftpoints)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_cp_new2").innerHTML = (Math.round((SearchBonsaiShowing().foliage_new+SearchBonsaiShowing().branches_new+SearchBonsaiShowing().trunk_new+SearchBonsaiShowing().roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            leftpoints_t_buttoncheck_m();
        }
    }
}

function leftpoints_t_buttoncheck_m() {
    if (SearchBonsaiShowing().trunk_lp<9.99) {
        document.getElementById("bonsai_trunk_minus_10").style.backgroundImage = "url('Images/pm10.svg')";
    }
    if (SearchBonsaiShowing().trunk_lp<0.99) {
        document.getElementById("bonsai_trunk_minus_1").style.backgroundImage = "url('Images/pm1.svg')";
    }
    if (SearchBonsaiShowing().trunk_lp<0.09) {
        document.getElementById("bonsai_trunk_minus_0").style.backgroundImage = "url('Images/pm0.svg')";
    }
    if (SearchBonsaiShowing().leftpoints>0.09) {
        document.getElementById("bonsai_foliage_plus_0").style.backgroundImage = "url('Images/p0.svg')";
        document.getElementById("bonsai_branches_plus_0").style.backgroundImage = "url('Images/p0.svg')";
        document.getElementById("bonsai_trunk_plus_0").style.backgroundImage = "url('Images/p0.svg')";
        document.getElementById("bonsai_roots_plus_0").style.backgroundImage = "url('Images/p0.svg')";
    }
    if (SearchBonsaiShowing().leftpoints>0.99) {
        document.getElementById("bonsai_foliage_plus_1").style.backgroundImage = "url('Images/p1.svg')";
        document.getElementById("bonsai_branches_plus_1").style.backgroundImage = "url('Images/p1.svg')";
        document.getElementById("bonsai_trunk_plus_1").style.backgroundImage = "url('Images/p1.svg')";
        document.getElementById("bonsai_roots_plus_1").style.backgroundImage = "url('Images/p1.svg')";
    }
    if (SearchBonsaiShowing().leftpoints>9.99) {
        document.getElementById("bonsai_foliage_plus_10").style.backgroundImage = "url('Images/p10.svg')";
        document.getElementById("bonsai_branches_plus_10").style.backgroundImage = "url('Images/p10.svg')";
        document.getElementById("bonsai_trunk_plus_10").style.backgroundImage = "url('Images/p10.svg')";
        document.getElementById("bonsai_roots_plus_10").style.backgroundImage = "url('Images/p10.svg')";
    }
}

btn_tp0.onclick = function() {
    if (SearchBonsaiShowing().growing==1) { 
    }
    else {
        if (SearchBonsaiShowing().leftpoints>0.09) {
            SearchBonsaiShowing().trunk_lp +=0.1;
            SearchBonsaiShowing().trunk_new +=0.1;
            SearchBonsaiShowing().leftpoints -=0.1;
            document.getElementById("bonsai_trunk_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().trunk_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_trunk_new2").innerHTML = (Math.round((SearchBonsaiShowing().trunk_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});        
            document.getElementById("bonsai_detail_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().leftpoints)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_cp_new2").innerHTML = (Math.round((SearchBonsaiShowing().foliage_new+SearchBonsaiShowing().branches_new+SearchBonsaiShowing().trunk_new+SearchBonsaiShowing().roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            leftpoints_t_buttoncheck_p();
        }
    }
}

btn_tp1.onclick = function() {
    if (SearchBonsaiShowing().growing==1) {
    }
    else {
        if (SearchBonsaiShowing().leftpoints>0.99) {
            SearchBonsaiShowing().trunk_lp +=1;
            SearchBonsaiShowing().trunk_new +=1;
            SearchBonsaiShowing().leftpoints -=1;
            document.getElementById("bonsai_trunk_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().trunk_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_trunk_new2").innerHTML = (Math.round((SearchBonsaiShowing().trunk_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});        
            document.getElementById("bonsai_detail_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().leftpoints)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_cp_new2").innerHTML = (Math.round((SearchBonsaiShowing().foliage_new+SearchBonsaiShowing().branches_new+SearchBonsaiShowing().trunk_new+SearchBonsaiShowing().roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            leftpoints_t_buttoncheck_p();
        }
    }
}

btn_tp10.onclick = function() {
    if (SearchBonsaiShowing().growing==1) { 
    }
    else {
        if (SearchBonsaiShowing().leftpoints>9.99) {
            SearchBonsaiShowing().trunk_lp +=10;
            SearchBonsaiShowing().trunk_new +=10;
            SearchBonsaiShowing().leftpoints -=10;
            document.getElementById("bonsai_trunk_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().trunk_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_trunk_new2").innerHTML = (Math.round((SearchBonsaiShowing().trunk_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});        
            document.getElementById("bonsai_detail_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().leftpoints)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_cp_new2").innerHTML = (Math.round((SearchBonsaiShowing().foliage_new+SearchBonsaiShowing().branches_new+SearchBonsaiShowing().trunk_new+SearchBonsaiShowing().roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            leftpoints_t_buttoncheck_p();
        }
    }
}

function leftpoints_t_buttoncheck_p() {
    if (SearchBonsaiShowing().trunk_lp>9.99) {
        document.getElementById("bonsai_trunk_minus_10").style.backgroundImage = "url('Images/m10.svg')";
    }
    if (SearchBonsaiShowing().trunk_lp>0.99) {
        document.getElementById("bonsai_trunk_minus_1").style.backgroundImage = "url('Images/m1.svg')";
    }
    if (SearchBonsaiShowing().trunk_lp>0.09) {
        document.getElementById("bonsai_trunk_minus_0").style.backgroundImage = "url('Images/m0.svg')";
    }
    if (SearchBonsaiShowing().leftpoints<0.09) {
        document.getElementById("bonsai_foliage_plus_0").style.backgroundImage = "url('Images/pm0.svg')";
        document.getElementById("bonsai_branches_plus_0").style.backgroundImage = "url('Images/pm0.svg')";
        document.getElementById("bonsai_trunk_plus_0").style.backgroundImage = "url('Images/pm0.svg')";
        document.getElementById("bonsai_roots_plus_0").style.backgroundImage = "url('Images/pm0.svg')";
    }
    if (SearchBonsaiShowing().leftpoints<0.99) {
        document.getElementById("bonsai_foliage_plus_1").style.backgroundImage = "url('Images/pm1.svg')";
        document.getElementById("bonsai_branches_plus_1").style.backgroundImage = "url('Images/pm1.svg')";
        document.getElementById("bonsai_trunk_plus_1").style.backgroundImage = "url('Images/pm1.svg')";
        document.getElementById("bonsai_roots_plus_1").style.backgroundImage = "url('Images/pm1.svg')";
    }
    if (SearchBonsaiShowing().leftpoints<9.99) {
        document.getElementById("bonsai_foliage_plus_10").style.backgroundImage = "url('Images/pm10.svg')";
        document.getElementById("bonsai_branches_plus_10").style.backgroundImage = "url('Images/pm10.svg')";
        document.getElementById("bonsai_trunk_plus_10").style.backgroundImage = "url('Images/pm10.svg')";
        document.getElementById("bonsai_roots_plus_10").style.backgroundImage = "url('Images/pm10.svg')";
    }
}

/* Distribution Roots Buttons*/
btn_rm10.onclick = function() {
    if (SearchBonsaiShowing().growing==1) { 
    }
    else {
        if (SearchBonsaiShowing().roots_lp>9.99) {
            SearchBonsaiShowing().leftpoints +=10;
            SearchBonsaiShowing().roots_new -=10;
            SearchBonsaiShowing().roots_lp -=10;
            document.getElementById("bonsai_roots_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().roots_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_roots_new2").innerHTML = (Math.round((SearchBonsaiShowing().roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});        
            document.getElementById("bonsai_detail_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().leftpoints)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_cp_new2").innerHTML = (Math.round((SearchBonsaiShowing().foliage_new+SearchBonsaiShowing().branches_new+SearchBonsaiShowing().trunk_new+SearchBonsaiShowing().roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            leftpoints_r_buttoncheck_m();
        }
    }
}

btn_rm1.onclick = function() {
    if (SearchBonsaiShowing().growing==1) { 
    }
    else {
        if (SearchBonsaiShowing().roots_lp>0.99) {
            SearchBonsaiShowing().leftpoints +=1;
            SearchBonsaiShowing().roots_new -=1;
            SearchBonsaiShowing().roots_lp -=1;
            document.getElementById("bonsai_roots_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().roots_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_roots_new2").innerHTML = (Math.round((SearchBonsaiShowing().roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});        
            document.getElementById("bonsai_detail_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().leftpoints)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_cp_new2").innerHTML = (Math.round((SearchBonsaiShowing().foliage_new+SearchBonsaiShowing().branches_new+SearchBonsaiShowing().trunk_new+SearchBonsaiShowing().roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            leftpoints_r_buttoncheck_m();
        }
    }
}

btn_rm0.onclick = function() {
    if (SearchBonsaiShowing().growing==1) { 
    }
    else {
        if (SearchBonsaiShowing().roots_lp>0.09) {
            SearchBonsaiShowing().leftpoints +=0.1;
            SearchBonsaiShowing().roots_new -=0.1;
            SearchBonsaiShowing().roots_lp -=0.1;
            document.getElementById("bonsai_roots_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().roots_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_roots_new2").innerHTML = (Math.round((SearchBonsaiShowing().roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});        
            document.getElementById("bonsai_detail_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().leftpoints)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_cp_new2").innerHTML = (Math.round((SearchBonsaiShowing().foliage_new+SearchBonsaiShowing().branches_new+SearchBonsaiShowing().trunk_new+SearchBonsaiShowing().roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            leftpoints_r_buttoncheck_m();
        }
    }
}

function leftpoints_r_buttoncheck_m() {
    if (SearchBonsaiShowing().roots_lp<9.99) {
        document.getElementById("bonsai_roots_minus_10").style.backgroundImage = "url('Images/pm10.svg')";
    }
    if (SearchBonsaiShowing().roots_lp<0.99) {
        document.getElementById("bonsai_roots_minus_1").style.backgroundImage = "url('Images/pm1.svg')";
    }
    if (SearchBonsaiShowing().roots_lp<0.09) {
        document.getElementById("bonsai_roots_minus_0").style.backgroundImage = "url('Images/pm0.svg')";
    }
    if (SearchBonsaiShowing().leftpoints>0.09) {
        document.getElementById("bonsai_foliage_plus_0").style.backgroundImage = "url('Images/p0.svg')";
        document.getElementById("bonsai_branches_plus_0").style.backgroundImage = "url('Images/p0.svg')";
        document.getElementById("bonsai_trunk_plus_0").style.backgroundImage = "url('Images/p0.svg')";
        document.getElementById("bonsai_roots_plus_0").style.backgroundImage = "url('Images/p0.svg')";
    }
    if (SearchBonsaiShowing().leftpoints>0.99) {
        document.getElementById("bonsai_foliage_plus_1").style.backgroundImage = "url('Images/p1.svg')";
        document.getElementById("bonsai_branches_plus_1").style.backgroundImage = "url('Images/p1.svg')";
        document.getElementById("bonsai_trunk_plus_1").style.backgroundImage = "url('Images/p1.svg')";
        document.getElementById("bonsai_roots_plus_1").style.backgroundImage = "url('Images/p1.svg')";
    }
    if (SearchBonsaiShowing().leftpoints>9.99) {
        document.getElementById("bonsai_foliage_plus_10").style.backgroundImage = "url('Images/p10.svg')";
        document.getElementById("bonsai_branches_plus_10").style.backgroundImage = "url('Images/p10.svg')";
        document.getElementById("bonsai_trunk_plus_10").style.backgroundImage = "url('Images/p10.svg')";
        document.getElementById("bonsai_roots_plus_10").style.backgroundImage = "url('Images/p10.svg')";
    }
}

btn_rp0.onclick = function() {
    if (SearchBonsaiShowing().growing==1) { 
    }
    else {
        if (SearchBonsaiShowing().leftpoints>0.09) {
            SearchBonsaiShowing().roots_lp +=0.1;
            SearchBonsaiShowing().roots_new +=0.1;
            SearchBonsaiShowing().leftpoints -=0.1;
            document.getElementById("bonsai_roots_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().roots_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_roots_new2").innerHTML = (Math.round((SearchBonsaiShowing().roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});        
            document.getElementById("bonsai_detail_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().leftpoints)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_cp_new2").innerHTML = (Math.round((SearchBonsaiShowing().foliage_new+SearchBonsaiShowing().branches_new+SearchBonsaiShowing().trunk_new+SearchBonsaiShowing().roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            leftpoints_r_buttoncheck_p();
        }
    }
}

btn_rp1.onclick = function() {
    if (SearchBonsaiShowing().growing==1) {
    }
    else {
        if (SearchBonsaiShowing().leftpoints>0.99) {
            SearchBonsaiShowing().roots_lp +=1;
            SearchBonsaiShowing().roots_new +=1;
            SearchBonsaiShowing().leftpoints -=1;
            document.getElementById("bonsai_roots_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().roots_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_roots_new2").innerHTML = (Math.round((SearchBonsaiShowing().roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});        
            document.getElementById("bonsai_detail_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().leftpoints)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_cp_new2").innerHTML = (Math.round((SearchBonsaiShowing().foliage_new+SearchBonsaiShowing().branches_new+SearchBonsaiShowing().trunk_new+SearchBonsaiShowing().roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            leftpoints_r_buttoncheck_p();
        }
    }
}

btn_rp10.onclick = function() {
    if (SearchBonsaiShowing().growing==1) { 
    }
    else {
        if (SearchBonsaiShowing().leftpoints>9.99) {
            SearchBonsaiShowing().roots_lp +=10;
            SearchBonsaiShowing().roots_new +=10;
            SearchBonsaiShowing().leftpoints -=10;
            document.getElementById("bonsai_roots_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().roots_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_roots_new2").innerHTML = (Math.round((SearchBonsaiShowing().roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});        
            document.getElementById("bonsai_detail_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().leftpoints)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_cp_new2").innerHTML = (Math.round((SearchBonsaiShowing().foliage_new+SearchBonsaiShowing().branches_new+SearchBonsaiShowing().trunk_new+SearchBonsaiShowing().roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            leftpoints_r_buttoncheck_p();
        }
    }
}

function leftpoints_r_buttoncheck_p() {
    if (SearchBonsaiShowing().roots_lp>9.99) {
        document.getElementById("bonsai_roots_minus_10").style.backgroundImage = "url('Images/m10.svg')";
    }
    if (SearchBonsaiShowing().roots_lp>0.99) {
        document.getElementById("bonsai_roots_minus_1").style.backgroundImage = "url('Images/m1.svg')";
    }
    if (SearchBonsaiShowing().roots_lp>0.09) {
        document.getElementById("bonsai_roots_minus_0").style.backgroundImage = "url('Images/m0.svg')";
    }
    if (SearchBonsaiShowing().leftpoints<0.09) {
        document.getElementById("bonsai_foliage_plus_0").style.backgroundImage = "url('Images/pm0.svg')";
        document.getElementById("bonsai_branches_plus_0").style.backgroundImage = "url('Images/pm0.svg')";
        document.getElementById("bonsai_trunk_plus_0").style.backgroundImage = "url('Images/pm0.svg')";
        document.getElementById("bonsai_roots_plus_0").style.backgroundImage = "url('Images/pm0.svg')";
    }
    if (SearchBonsaiShowing().leftpoints<0.99) {
        document.getElementById("bonsai_foliage_plus_1").style.backgroundImage = "url('Images/pm1.svg')";
        document.getElementById("bonsai_branches_plus_1").style.backgroundImage = "url('Images/pm1.svg')";
        document.getElementById("bonsai_trunk_plus_1").style.backgroundImage = "url('Images/pm1.svg')";
        document.getElementById("bonsai_roots_plus_1").style.backgroundImage = "url('Images/pm1.svg')";
    }
    if (SearchBonsaiShowing().leftpoints<9.99) {
        document.getElementById("bonsai_foliage_plus_10").style.backgroundImage = "url('Images/pm10.svg')";
        document.getElementById("bonsai_branches_plus_10").style.backgroundImage = "url('Images/pm10.svg')";
        document.getElementById("bonsai_trunk_plus_10").style.backgroundImage = "url('Images/pm10.svg')";
        document.getElementById("bonsai_roots_plus_10").style.backgroundImage = "url('Images/pm10.svg')";
    }
}

function contests_comcalc () {
    if (contests.difficulty==1) {
        $(document).ready(function(){
            $('#modal_contests_result_c2').show();
            $('#modal_contests_result_c3').show();
            $('#modal_contests_result_c4').hide();
            $('#modal_contests_result_c5').hide();
            $('#modal_contests_result_c6').hide();
            $('#modal_contests_result_c7').hide();
            $('#modal_contests_result_c8').hide();
            $('#modal_contests_result_c9').hide();
        });
    }
    else if (contests.difficulty==2) {
        $(document).ready(function(){
            $('#modal_contests_result_c2').show();
            $('#modal_contests_result_c3').show();
            $('#modal_contests_result_c4').show();
            $('#modal_contests_result_c5').show();
            $('#modal_contests_result_c6').hide();
            $('#modal_contests_result_c7').hide();
            $('#modal_contests_result_c8').hide();
            $('#modal_contests_result_c9').hide();
        });
    }
    if (contests.difficulty==3) {
        $(document).ready(function(){
            $('#modal_contests_result_c2').show();
            $('#modal_contests_result_c3').show();
            $('#modal_contests_result_c4').show();
            $('#modal_contests_result_c5').show();
            $('#modal_contests_result_c6').show();
            $('#modal_contests_result_c7').show();
            $('#modal_contests_result_c8').hide();
            $('#modal_contests_result_c9').hide();
        });
    }
    if (contests.difficulty==4) {
        $(document).ready(function(){
            $('#modal_contests_result_c2').show();
            $('#modal_contests_result_c3').show();
            $('#modal_contests_result_c4').show();
            $('#modal_contests_result_c5').show();
            $('#modal_contests_result_c6').show();
            $('#modal_contests_result_c7').show();
            $('#modal_contests_result_c8').show();
            $('#modal_contests_result_c9').show();
        });
    }
    contests_comcalc_level();
    contests_comcalc_treequality();
    contests_comcalc_ttt();
    contests_comcalc_st();
    contests_comcalc_shiny();
    contests_comcalc_nature();
    contests_comcalc_growing();
    contests_comcalc_shaping();
    contests_comcalc_distribution();
    
    contests_comcalc_cp(contests_bonsai_c1, contests_bonsai_c1);
    contests_comcalc_cp(contests_bonsai_c2, contests_bonsai_c2);
    contests_comcalc_cp(contests_bonsai_c3, contests_bonsai_c3);
    contests_comcalc_cp(contests_bonsai_c4, contests_bonsai_c4);
    contests_comcalc_cp(contests_bonsai_c5, contests_bonsai_c5);
    contests_comcalc_cp(contests_bonsai_c6, contests_bonsai_c6);
    contests_comcalc_cp(contests_bonsai_c7, contests_bonsai_c7);
    contests_comcalc_cp(contests_bonsai_c8, contests_bonsai_c8);
    contests_comcalc_cp(contests_bonsai_c9, contests_bonsai_c9);
    
    fetchbonsaimenu_contests_competition(contests_bonsai_c1, contests_bonsai_c2, contests_bonsai_c3, contests_bonsai_c4, contests_bonsai_c5, contests_bonsai_c6, contests_bonsai_c7, contests_bonsai_c8, contests_bonsai_c9);  
}

//Level
function contests_comcalc_level () {
    if (contests.id=="TTG01_C1") {
        contests_bonsai_c1.level=Math.round(Math.random()*25);
        contests_comcalc_level20 (contests_bonsai_c1);
        contests_bonsai_c2.level=Math.round(Math.random()*25);
        contests_comcalc_level20 (contests_bonsai_c2);
        contests_bonsai_c3.level=Math.round(Math.random()*25);
        contests_comcalc_level20 (contests_bonsai_c3);
    }
    else if (contests.id=="TTG01_C2") {
        contests_bonsai_c1.level=Math.round(Math.random()*25);
        contests_comcalc_level20 (contests_bonsai_c1);
        contests_bonsai_c1.level +=15;
        contests_bonsai_c2.level=Math.round(Math.random()*25);
        contests_comcalc_level20 (contests_bonsai_c2);
        contests_bonsai_c2.level +=15;
        contests_bonsai_c3.level=Math.round(Math.random()*25);
        contests_comcalc_level20 (contests_bonsai_c3);
        contests_bonsai_c3.level +=15;
        contests_bonsai_c4.level=Math.round(Math.random()*25);
        contests_comcalc_level20 (contests_bonsai_c4);
        contests_bonsai_c4.level +=15;
        contests_bonsai_c5.level=Math.round(Math.random()*25);
        contests_comcalc_level20 (contests_bonsai_c5);
        contests_bonsai_c5.level +=15;
    }
    else if (contests.id=="TTG01_C3") {
        contests_bonsai_c1.level=Math.round(Math.random()*25);
        contests_comcalc_level20 (contests_bonsai_c1);
        contests_bonsai_c1.level +=30;
        contests_bonsai_c2.level=Math.round(Math.random()*25);
        contests_comcalc_level20 (contests_bonsai_c2);
        contests_bonsai_c2.level +=30;
        contests_bonsai_c3.level=Math.round(Math.random()*25);
        contests_comcalc_level20 (contests_bonsai_c3);
        contests_bonsai_c3.level +=30;
        contests_bonsai_c4.level=Math.round(Math.random()*25);
        contests_comcalc_level20 (contests_bonsai_c4);
        contests_bonsai_c4.level +=30;
        contests_bonsai_c5.level=Math.round(Math.random()*25);
        contests_comcalc_level20 (contests_bonsai_c5);
        contests_bonsai_c5.level +=30;
        contests_bonsai_c6.level=Math.round(Math.random()*25);
        contests_comcalc_level20 (contests_bonsai_c6);
        contests_bonsai_c6.level +=30;
        contests_bonsai_c7.level=Math.round(Math.random()*25);
        contests_comcalc_level20 (contests_bonsai_c7);
        contests_bonsai_c7.level +=30;
    }
}

function contests_comcalc_level20 (a) {
    if (a.level>=20) {
    }
    else if (a.level>=16) {
        a.level +=1;
    }
    else if (a.level>=12) {
        a.level +=2;
    }
    else if (a.level>=8) {
        a.level +=3;
    }
    else if (a.level>=4) {
        a.level +=4;
    }
    else if (a.level>=0) {
        a.level +=5;
    }
}

//Treequality
function contests_comcalc_treequality () {
    if (contests.id=="TTG01_C1" || contests.id=="TTG01_C2" || contests.id=="TTG01_C3") {
        contests_comcalc_treequality_area1(contests_bonsai_c1);
        contests_comcalc_treequality_area1(contests_bonsai_c2);
        contests_comcalc_treequality_area1(contests_bonsai_c3);
        contests_comcalc_treequality_area1(contests_bonsai_c4);
        contests_comcalc_treequality_area1(contests_bonsai_c5);
        contests_comcalc_treequality_area1(contests_bonsai_c6);
        contests_comcalc_treequality_area1(contests_bonsai_c7);
    }
}

function contests_comcalc_treequality_area1 (a) {
    state.random_contests =Math.random(); //Random number between 0 and 1
    if (state.random_contests>=0.98) {
        a.treequality=3;
    }
    else if (state.random_contests>=0.78) {
        a.treequality=2;
    }
    else {
        a.treequality=1;
    }
}

//Treetype group & Treetype
function contests_comcalc_ttt() {
    if (contests.id=="TTG01_C1" || contests.id=="TTG01_C2" || contests.id=="TTG01_C3") {
        contests_bonsai_c1.treetypegroup=1;
        contests_bonsai_c2.treetypegroup=1;
        contests_bonsai_c3.treetypegroup=1;
        contests_bonsai_c4.treetypegroup=1;
        contests_bonsai_c5.treetypegroup=1;
        contests_bonsai_c6.treetypegroup=1;
        contests_bonsai_c7.treetypegroup=1;
        
        contests_comcalc_ttt_tt(contests_bonsai_c1);
        contests_comcalc_ttt_tt(contests_bonsai_c2);
        contests_comcalc_ttt_tt(contests_bonsai_c3);
        contests_comcalc_ttt_tt(contests_bonsai_c4);
        contests_comcalc_ttt_tt(contests_bonsai_c5);
        contests_comcalc_ttt_tt(contests_bonsai_c6);
        contests_comcalc_ttt_tt(contests_bonsai_c7);
    }
}

function contests_comcalc_ttt_tt(a) {
    if (a.treetypegroup==1) {
        state.random_contests =Math.random(); //Random number between 0 and 1
        if (state.random_contests>=0.9016) {
            a.treetype=3;
        }
        else if (state.random_contests>=0.6557) {
            a.treetype=2;
        }
        else {
            a.treetype=1;
        }
    }
}

//Styletpe
function contests_comcalc_st() {
    if (contests.id=="TTG01_C1" || contests.id=="TTG01_C2" || contests.id=="TTG01_C3") {
        contests_comcalc_st_typgroup1(contests_bonsai_c1);
        contests_comcalc_st_typgroup1(contests_bonsai_c2);
        contests_comcalc_st_typgroup1(contests_bonsai_c3);
        contests_comcalc_st_typgroup1(contests_bonsai_c4);
        contests_comcalc_st_typgroup1(contests_bonsai_c5);
        contests_comcalc_st_typgroup1(contests_bonsai_c6);
        contests_comcalc_st_typgroup1(contests_bonsai_c7);
    }
}

function contests_comcalc_st_typgroup1(a) {
    state.random_contests =Math.random(); //Random number between 0 and 1
    if (state.random_contests>=0.666666) {
        a.styletype=3;
    }
    else if (state.random_contests>=0.333333) {
        a.styletype=2;
    }
    else {
        a.styletype=1;
    }
}

//Shiny
function contests_comcalc_shiny() {
    if (contests.id=="TTG01_C1" || contests.id=="TTG01_C2" || contests.id=="TTG01_C3") {
        contests_bonsai_c1.shiny=1;
        contests_bonsai_c2.shiny=1;
        contests_bonsai_c3.shiny=1;
        contests_bonsai_c4.shiny=1;
        contests_bonsai_c5.shiny=1;
        contests_bonsai_c6.shiny=1;
        contests_bonsai_c7.shiny=1;
    }
}

//Nature
function contests_comcalc_nature() {
    contests_bonsai_c1.nature=naturerandom();
    contests_bonsai_c2.nature=naturerandom();
    contests_bonsai_c3.nature=naturerandom();
    contests_bonsai_c4.nature=naturerandom();
    contests_bonsai_c5.nature=naturerandom();
    contests_bonsai_c6.nature=naturerandom();
    contests_bonsai_c7.nature=naturerandom();
    contests_bonsai_c8.nature=naturerandom();
    contests_bonsai_c9.nature=naturerandom();
}

//Growing
function contests_comcalc_growing() {
    if (contests.id=="TTG01_C1" || contests.id=="TTG01_C2" || contests.id=="TTG01_C3") {
        contests_bonsai_c1.growing=Math.round(Math.random()*6);
        contests_bonsai_c2.growing=Math.round(Math.random()*6);
        contests_bonsai_c3.growing=Math.round(Math.random()*6);
        contests_bonsai_c4.growing=Math.round(Math.random()*6);
        contests_bonsai_c5.growing=Math.round(Math.random()*6);
        contests_bonsai_c6.growing=Math.round(Math.random()*6);
        contests_bonsai_c7.growing=Math.round(Math.random()*6);
    }
}

//Shaping
function contests_comcalc_shaping() {
    if (contests.id=="TTG01_C1" || contests.id=="TTG01_C2" || contests.id=="TTG01_C3") {
        contests_bonsai_c1.shaping=Math.round(Math.random()*4);
        contests_bonsai_c2.shaping=Math.round(Math.random()*4);
        contests_bonsai_c3.shaping=Math.round(Math.random()*4);
        contests_bonsai_c4.shaping=Math.round(Math.random()*4);
        contests_bonsai_c5.shaping=Math.round(Math.random()*4);
        contests_bonsai_c6.shaping=Math.round(Math.random()*4);
        contests_bonsai_c7.shaping=Math.round(Math.random()*4);
    }
}

//Distribution type
function contests_comcalc_distribution() {
    contests_comcalc_distribution2(contests_bonsai_c1);
    contests_comcalc_distribution2(contests_bonsai_c2);
    contests_comcalc_distribution2(contests_bonsai_c3);
    contests_comcalc_distribution2(contests_bonsai_c4);
    contests_comcalc_distribution2(contests_bonsai_c5);
    contests_comcalc_distribution2(contests_bonsai_c6);
    contests_comcalc_distribution2(contests_bonsai_c7);
    contests_comcalc_distribution2(contests_bonsai_c8);
    contests_comcalc_distribution2(contests_bonsai_c9);
}

function contests_comcalc_distribution2(a) {
    a.distributiontype=Math.round(Math.random()*12);
    if (a.distributiontype==0) {
        a.distributiontype=1;
    }
}

//CP calculation
function contests_comcalc_cp(a, b) {
    a.foliage=0;
    a.branches=0;
    a.trunk=0;    
    a.roots=0;
    a.leftpointstotal=0;
    if (a.treequality==1) {
        cpdistribution_com(a, b, level_cp_tq1);
    }
    else if (a.treequality==2) {
        cpdistribution_com(a, b, level_cp_tq2);
    }
    else if (a.treequality==3) {
        cpdistribution_com(a, b, level_cp_tq3);
    }
    a.foliage_new=0;
    a.branches_new=0;
    a.trunk_new=0;
    a.roots_new=0;
    a.leftpoints=0;
}

function cpdistribution_com(a, b, level_cp_tq) {
    if (a.level>90) {
        cpdistribution2_com(a, b, level_cp_tq, 9);
    }
    else if (a.level>80) {
        cpdistribution2_com(a, b, level_cp_tq, 8);
    }
    else if (a.level>70) {
        cpdistribution2_com(a, b, level_cp_tq, 7);
    }
    else if (a.level>60) {
        cpdistribution2_com(a, b, level_cp_tq, 6);
    }
    else if (a.level>50) {
        cpdistribution2_com(a, b, level_cp_tq, 5);
    }
    else if (a.level>40) {
        cpdistribution2_com(a, b, level_cp_tq, 4);
    }
    else if (a.level>30) {
        cpdistribution2_com(a, b, level_cp_tq, 3);
    }
    else if (a.level>20) {
        cpdistribution2_com(a, b, level_cp_tq, 2);
    }
    else if (a.level>10) {
        cpdistribution2_com(a, b, level_cp_tq, 1);
    }
    else {
        if (level_cp_tq[0]==2) {
            a.foliage = Math.round((((0.5)*naturedistribution(a, 1))*a.level)* 10) / 10;
            a.branches = Math.round((((0.5)*naturedistribution(a, 2))*a.level)* 10) / 10;
            a.trunk = Math.round((((0.5)*naturedistribution(a, 3))*a.level)* 10) / 10;
            a.roots = Math.round((((0.5)*naturedistribution(a, 4))*a.level)* 10) / 10;
        }
        else {
            cpdistribution2_com(a, b, level_cp_tq, 0);
        }
    }
}

function cpdistribution2_com(a, b, level_cp_tq, level_index) {
    if (level_index==0) {
        cpdistribution3a_com (a, b, level_cp_tq, level_index, 0)
    }
    else {
        cpdistribution3b_com (a, b, level_cp_tq, 0)
        if (level_index==1) {
            cpdistribution3a_com (a, b, level_cp_tq, level_index, 10)
        }
        else {
            cpdistribution3b_com (a, b, level_cp_tq, 1)
            if (level_index==2) {
                cpdistribution3a_com (a, b, level_cp_tq, level_index, 20)
            }
            else {
                cpdistribution3b_com (a, b, level_cp_tq, 2)
                if (level_index==3) {
                    cpdistribution3a_com (a, b, level_cp_tq, level_index, 30)
                }
                else {
                    cpdistribution3b_com (a, b, level_cp_tq, 3)
                    if (level_index==4) {
                        cpdistribution3a_com (a, b, level_cp_tq, level_index, 40)
                    }
                    else {
                        cpdistribution3b_com (a, b, level_cp_tq, 4)
                        if (level_index==5) {
                            cpdistribution3a_com (a, b, level_cp_tq, level_index, 50)
                        }
                        else {
                            cpdistribution3b_com (a, b, level_cp_tq, 5)
                            if (level_index==6) {
                                cpdistribution3a_com (a, b, level_cp_tq, level_index, 60)
                            }
                            else {
                                cpdistribution3b_com (a, b, level_cp_tq, 6)
                                if (level_index==7) {
                                    cpdistribution3a_com (a, b, level_cp_tq, level_index, 70)
                                }
                                else {
                                    cpdistribution3b_com (a, b, level_cp_tq, 7)
                                    if (level_index==8) {
                                        cpdistribution3a_com (a, b, level_cp_tq, level_index, 80)
                                    }
                                    else {
                                        cpdistribution3b_com (a, b, level_cp_tq, 8)
                                        if (level_index==9) {
                                            cpdistribution3a_com (a, b, level_cp_tq, level_index, 90)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    } 
    if (a.distributiontype==1) { //equalalways
        cpcom_lp_equalalways(a);
    }
    else if (a.distributiontype==2) { //equalingout
        cpcom_lp_equalingout(a);
    }
    else if (a.distributiontype==3) { //one_str_equal
        cpcom_lp_one_str_equal(a);
    }  
    else if (a.distributiontype==4) { //one_str_random
        cpcom_lp_one_str_random(a);
    }
    else if (a.distributiontype==5) { //one_weak_equal
        cpcom_lp_one_weak_equal(a);
    }
    else if (a.distributiontype==6) { //one_weak_random
        cpcom_lp_one_weak_random(a);
    }
    else if (a.distributiontype==7) { //one_random
        cpcom_lp_onerandom(a);
    }
    else if (a.distributiontype==8) { //two_str_equal
        cpcom_lp_two_str_equal(a);
    }
    else if (a.distributiontype==9) { //two_str_random
        cpcom_lp_two_str_random(a);
    }
    else if (a.distributiontype==10) { //two_weak_equal
        cpcom_lp_two_weak_equal(a);
    }
    else if (a.distributiontype==11) { //two_weak_random
        cpcom_lp_two_weak_random(a);
    }
    else if (a.distributiontype==12) { //two_random
        cpcom_lp_tworandom(a);
    }
}

function cpdistribution3a_com (a, b, level_cp_tq, level_index, z) {
    if ((level_cp_tq[level_index]/10)*2<2) {
        naturepoints=2;
        leftpoints=level_cp_tq[level_index]-naturepoints;
    }
    else {
        naturepoints=(level_cp_tq[level_index]/10)*2;
        leftpoints=level_cp_tq[level_index]-naturepoints;
    }
    cpdistribution3_com (a, b, level_cp_tq, level_index);
    a.foliage +=a.foliage_new*(a.level-z);
    a.branches +=a.branches_new*(a.level-z);
    a.trunk +=a.trunk_new*(a.level-z);
    a.roots +=a.roots_new*(a.level-z);
    a.leftpointstotal +=a.leftpoints*(a.level-z);
    a.foliage_new=0;
    a.branches_new=0;
    a.trunk_new=0;
    a.roots_new=0;
    a.leftpoints=0;
}

function cpdistribution3b_com (a, b, level_cp_tq, level_index) {
    if ((level_cp_tq[level_index]/10)*2<2) {
        naturepoints=2;
        leftpoints=level_cp_tq[level_index]-naturepoints;
    }
    else {
        naturepoints=(level_cp_tq[level_index]/10)*2;
        leftpoints=level_cp_tq[level_index]-naturepoints;
    }
    cpdistribution3_com (a, b, level_cp_tq, level_index);
    a.foliage +=a.foliage_new*10;
    a.branches +=a.branches_new*10;
    a.trunk +=a.trunk_new*10;
    a.roots +=a.roots_new*10;
    a.leftpointstotal +=a.leftpoints*10;
    a.foliage_new=0;
    a.branches_new=0;
    a.trunk_new=0;
    a.roots_new=0;
    a.leftpoints=0;
}

function cpdistribution3_com (a, b, level_cp_tq, level_index) {
    if (a.treetypegroup<=4) {
        cpdistribution_growing(a, level_cp_tq, level_index, 25, b);
    }
    else if (a.treetypegroup<=6) {
        cpdistribution_growing(a, level_cp_tq, level_index, 32, b);
    }
    else if (a.treetypegroup<=8) {
        cpdistribution_growing(a, level_cp_tq, level_index, 40, b);
    }
    else {
        cpdistribution_growing(a, level_cp_tq, level_index, 50, b);
    }
}

function cpcom_lp_equalalways(a) {
    a.foliage +=a.leftpointstotal/4;
    a.branches +=a.leftpointstotal/4;
    a.trunk +=a.leftpointstotal/4;
    a.roots +=a.leftpointstotal/4;
}

function cpcom_lp_equalingout (a) {
    if (a.foliage==0) {
        if (a.branches==a.trunk) {
            cpcom_lp_equalingout2 (a, a.roots);
            a.foliage +=a.roots_new;
            a.trunk +=a.branches_new;
            a.branches +=a.trunk_new;
            a.roots +=a.foliage_new;
        }
        else if (a.branches==a.roots) {
            cpcom_lp_equalingout2 (a, a.trunk);
            a.foliage +=a.roots_new;
            a.branches +=a.branches_new;
            a.roots +=a.trunk_new;
            a.trunk +=a.foliage_new;
        }
        else {
            cpcom_lp_equalingout2 (a, a.branches);
            a.foliage +=a.roots_new;
            a.trunk +=a.branches_new;
            a.roots +=a.trunk_new;
            a.branches +=a.foliage_new;
        }
    }
    else if (a.branches==0) {
        if (a.foliage==a.trunk) {
            cpcom_lp_equalingout2 (a, a.roots);
            a.branches +=a.roots_new;
            a.trunk +=a.branches_new;
            a.foliage +=a.trunk_new;
            a.roots +=a.foliage_new;
        }
        else if (a.foliage==a.roots) {
            cpcom_lp_equalingout2 (a, a.trunk);
            a.branches +=a.roots_new;
            a.foliage +=a.branches_new;
            a.roots +=a.trunk_new;
            a.trunk +=a.foliage_new;
        }
        else {
            cpcom_lp_equalingout2 (a, a.foliage);
            a.branches +=a.roots_new;
            a.trunk +=a.branches_new;
            a.roots +=a.trunk_new;
            a.foliage +=a.foliage_new;
        }
    }
    else if (a.trunk==0) {
        if (a.foliage==a.branches) {
            cpcom_lp_equalingout2 (a, a.roots);
            a.trunk +=a.roots_new;
            a.branches +=a.branches_new;
            a.foliage +=a.trunk_new;
            a.roots +=a.foliage_new;
        }
        else if (a.foliage==a.roots) {
            cpcom_lp_equalingout2 (a, a.branches);
            a.trunk +=a.roots_new;
            a.roots +=a.branches_new;
            a.foliage +=a.trunk_new;
            a.branches +=a.foliage_new;
        }
        else {
            cpcom_lp_equalingout2 (a, a.foliage);
            a.trunk +=a.roots_new;
            a.branches +=a.branches_new;
            a.roots +=a.trunk_new;
            a.foliage +=a.foliage_new;
        }
    }
    else if (a.roots==0) {
        if (a.foliage==a.branches) {
            cpcom_lp_equalingout2 (a, a.trunk);
            a.roots +=a.roots_new;
            a.branches +=a.branches_new;
            a.foliage +=a.trunk_new;
            a.trunk +=a.foliage_new;
        }
        else if (a.foliage==a.trunk) {
            cpcom_lp_equalingout2 (a, a.branches);
            a.roots +=a.roots_new;
            a.foliage +=a.branches_new;
            a.trunk +=a.trunk_new;
            a.branches +=a.foliage_new;
        }
        else {
            cpcom_lp_equalingout2 (a, a.foliage);
            a.roots +=a.roots_new;
            a.branches +=a.branches_new;
            a.trunk +=a.trunk_new;
            a.foliage +=a.foliage_new;
        }
    }
    else {
        a.foliage +=a.leftpoints/4;
        a.branches +=a.leftpoints/4;
        a.trunk +=a.leftpoints/4;
        a.roots +=a.leftpoints/4;
    } 
    a.foliage_new=0;
    a.branches_new=0;
    a.trunk_new=0;
    a.roots_new=0;  
    a.leftpoints=0;
    leftpoints=0;
}

function cpcom_lp_equalingout2 (a, b) {
    a.leftpoints=0;
    a.leftpoints=b;
    leftpoints=0;
    if (a.leftpointstotal>a.leftpoints*2) {
        leftpoints=1;
        cpcom_lp_equalingout3 (a)
    }
    else {
        if (a.leftpointstotal>a.leftpoints/2) {
            leftpoints=2;
            cpcom_lp_equalingout3 (a)
        }
        else {
            leftpoints=3;
            cpcom_lp_equalingout3 (a)
        }
    }
}

function cpcom_lp_equalingout3 (a) {
    a.foliage_new=0;
    a.branches_new=0;
    a.trunk_new=0;
    a.roots_new=0; 
    if (leftpoints==3) {
        a.roots_new=a.leftpointstotal;
    }
    else if (leftpoints==2) {
        a.roots_new=(a.leftpoints/2);
        a.leftpointstotal=(a.leftpointstotal-(a.leftpoints/2));
        a.leftpoints=Math.round((a.leftpointstotal/3)*10)/10;
        a.roots_new +=a.leftpoints;
        a.branches_new +=a.leftpoints;
        a.trunk_new +=a.leftpoints;
        a.leftpointstotal=(a.leftpointstotal-(a.leftpoints*3));
        a.roots_new +=a.leftpointstotal;
    }
    else if (leftpoints==1) {
        a.roots_new=a.leftpoints;
        a.branches_new +=(a.leftpoints/2);
        a.trunk_new +=(a.leftpoints/2);
        a.leftpointstotal=(a.leftpointstotal-(a.leftpoints*2));
        a.leftpoints=(a.leftpointstotal/4);
        a.roots_new +=a.leftpoints;
        a.foliage_new +=a.leftpoints;
        a.branches_new +=a.leftpoints;
        a.trunk_new +=a.leftpoints;
    }
}

function cpcom_lp_one_str_equal (a) {
    if (a.nature==2 || a.nature==6 || a.nature==10) {
        a.foliage +=a.leftpointstotal;
    }
    else if (a.nature==3 || a.nature==7 || a.nature==14) {
        a.branches +=a.leftpointstotal;
    }
    else if (a.nature==4 || a.nature==11 || a.nature==15) {
        a.trunk +=a.leftpointstotal;
    }
    else if (a.nature==8 || a.nature==12 || a.nature==16) {
        a.roots +=a.leftpointstotal;
    }
    else if (a.nature==1 || a.nature==5 || a.nature==9 || a.nature==13) {
        a.foliage +=a.leftpointstotal/4;
        a.branches +=a.leftpointstotal/4;
        a.trunk +=a.leftpointstotal/4;
        a.roots +=a.leftpointstotal/4;
    }
}

function cpcom_lp_one_str_random (a) {
    if (a.nature==2 || a.nature==6 || a.nature==10) {
        a.foliage +=a.leftpointstotal;
    }
    else if (a.nature==3 || a.nature==7 || a.nature==14) {
        a.branches +=a.leftpointstotal;
    }
    else if (a.nature==4 || a.nature==11 || a.nature==15) {
        a.trunk +=a.leftpointstotal;
    }
    else if (a.nature==8 || a.nature==12 || a.nature==16) {
        a.roots +=a.leftpointstotal;
    }
    else if (a.nature==1 || a.nature==5 || a.nature==9 || a.nature==13) {
        state.random_contests =Math.random(); //Random number between 0 and 1
        if (state.random_contests>=0.75) {
            a.foliage +=a.leftpointstotal;
        }
        else if (state.random_contests>=0.50) {
            a.branches +=a.leftpointstotal;
        }
        else if (state.random_contests>=0.25) {
            a.trunk +=a.leftpointstotal;
        }
        else {
            a.roots +=a.leftpointstotal;
        }
    }
}

function cpcom_lp_one_weak_equal (a) {
    if (a.nature==14 || a.nature==15 || a.nature==16) {
        a.foliage +=a.leftpointstotal;
    }
    else if (a.nature==10 || a.nature==11 || a.nature==12) {
        a.branches +=a.leftpointstotal;
    }
    else if (a.nature==6 || a.nature==7 || a.nature==8) {
        a.trunk +=a.leftpointstotal;
    }
    else if (a.nature==2 || a.nature==3 || a.nature==4) {
        a.roots +=a.leftpointstotal;
    }
    else if (a.nature==1 || a.nature==5 || a.nature==9 || a.nature==13) {
        a.foliage +=a.leftpointstotal/4;
        a.branches +=a.leftpointstotal/4;
        a.trunk +=a.leftpointstotal/4;
        a.roots +=a.leftpointstotal/4;
    }
}

function cpcom_lp_one_weak_random (a) {
    if (a.nature==14 || a.nature==15 || a.nature==16) {
        a.foliage +=a.leftpointstotal;
    }
    else if (a.nature==10 || a.nature==11 || a.nature==12) {
        a.branches +=a.leftpointstotal;
    }
    else if (a.nature==6 || a.nature==7 || a.nature==8) {
        a.trunk +=a.leftpointstotal;
    }
    else if (a.nature==2 || a.nature==3 || a.nature==4) {
        a.roots +=a.leftpointstotal;
    }
    else if (a.nature==1 || a.nature==5 || a.nature==9 || a.nature==13) {
        state.random_contests =Math.random(); //Random number between 0 and 1
        if (state.random_contests>=0.75) {
            a.foliage +=a.leftpointstotal;
        }
        else if (state.random_contests>=0.50) {
            a.branches +=a.leftpointstotal;
        }
        else if (state.random_contests>=0.25) {
            a.trunk +=a.leftpointstotal;
        }
        else {
            a.roots +=a.leftpointstotal;
        }
    }
}

function cpcom_lp_onerandom(a) {
    state.random_contests =Math.random(); //Random number between 0 and 1
    if (state.random_contests>=0.75) {
        a.foliage +=a.leftpointstotal;
    }
    else if (state.random_contests>=0.50) {
        a.branches +=a.leftpointstotal;
    }
    else if (state.random_contests>=0.25) {
        a.trunk +=a.leftpointstotal;
    }
    else {
        a.roots +=a.leftpointstotal;
    }
}

function cpcom_lp_two_str_equal (a) {
    if (a.nature==2 || a.nature==6 || a.nature==10) {
        a.foliage +=a.leftpointstotal/2;
    }
    else if (a.nature==3 || a.nature==7 || a.nature==14) {
        a.branches +=a.leftpointstotal/2;
    }
    else if (a.nature==4 || a.nature==11 || a.nature==15) {
        a.trunk +=a.leftpointstotal/2;
    }
    else if (a.nature==8 || a.nature==12 || a.nature==16) {
        a.roots +=a.leftpointstotal/2;
    }
    else if (a.nature==1 || a.nature==5 || a.nature==9 || a.nature==13) {
        a.foliage +=Math.floor(a.leftpointstotal/8*10)/10;
        a.branches +=Math.floor(a.leftpointstotal/8*10)/10;
        a.trunk +=Math.floor(a.leftpointstotal/8*10)/10;
        a.roots +=Math.floor(a.leftpointstotal/8*10)/10;
        if (Math.floor(a.leftpointstotal/8*10)/10<a.leftpointstotal/8) {
            state.random_contests =Math.random(); //Random number between 0 and 1
            if (state.random_contests>=0.833333) {
                a.foliage +=0.1;
                a.branches +=0.1;
            }
            else if (state.random_contests>=0.666666) {
                a.foliage +=0.1;
                a.trunk +=0.1;
            }
            else if (state.random_contests>=0.500000) {
                a.foliage +=0.1;
                a.roots +=0.1;
            }
            else if (state.random_contests>=0.333333) {
                a.branches +=0.1;
                a.trunk +=0.1;
            }
            else if (state.random_contests>=0.166666) {
                a.branches +=0.1;
                a.roots +=0.1;
            }
            else {
                a.trunk +=0.1;
                a.roots +=0.1;
            }
        }
    }
    a.foliage +=Math.floor(a.leftpointstotal/8*10)/10;
    a.branches +=Math.floor(a.leftpointstotal/8*10)/10;
    a.trunk +=Math.floor(a.leftpointstotal/8*10)/10;
    a.roots +=Math.floor(a.leftpointstotal/8*10)/10;
    if (Math.floor(a.leftpointstotal/8*10)/10<a.leftpointstotal/8) {
        state.random_contests =Math.random(); //Random number between 0 and 1
        if (state.random_contests>=0.833333) {
            a.foliage +=0.1;
            a.branches +=0.1;
        }
        else if (state.random_contests>=0.666666) {
            a.foliage +=0.1;
            a.trunk +=0.1;
        }
        else if (state.random_contests>=0.500000) {
            a.foliage +=0.1;
            a.roots +=0.1;
        }
        else if (state.random_contests>=0.333333) {
            a.branches +=0.1;
            a.trunk +=0.1;
        }
        else if (state.random_contests>=0.166666) {
            a.branches +=0.1;
            a.roots +=0.1;
        }
        else {
            a.trunk +=0.1;
            a.roots +=0.1;
        }
    }
}

function cpcom_lp_two_str_random (a) {
    if (a.nature==2 || a.nature==6 || a.nature==10) {
        a.foliage +=a.leftpointstotal/2;
    }
    else if (a.nature==3 || a.nature==7 || a.nature==14) {
        a.branches +=a.leftpointstotal/2;
    }
    else if (a.nature==4 || a.nature==11 || a.nature==15) {
        a.trunk +=a.leftpointstotal/2;
    }
    else if (a.nature==8 || a.nature==12 || a.nature==16) {
        a.roots +=a.leftpointstotal/2;
    }
    else if (a.nature==1 || a.nature==5 || a.nature==9 || a.nature==13) {
        state.random_contests =Math.random(); //Random number between 0 and 1
        if (state.random_contests>=0.75) {
            a.foliage +=a.leftpointstotal/2;
        }
        else if (state.random_contests>=0.50) {
            a.branches +=a.leftpointstotal/2;
        }
        else if (state.random_contests>=0.25) {
            a.trunk +=a.leftpointstotal/2;
        }
        else {
            a.roots +=a.leftpointstotal/2;
        }
    }
    state.random_contests =Math.random(); //Random number between 0 and 1
    if (state.random_contests>=0.75) {
        a.foliage +=a.leftpointstotal/2;
    }
    else if (state.random_contests>=0.50) {
        a.branches +=a.leftpointstotal/2;
    }
    else if (state.random_contests>=0.25) {
        a.trunk +=a.leftpointstotal/2;
    }
    else {
        a.roots +=a.leftpointstotal/2;
    }
}

function cpcom_lp_two_weak_equal (a) {
    if (a.nature==14 || a.nature==15 || a.nature==16) {
        a.foliage +=a.leftpointstotal/2;
    }
    else if (a.nature==10 || a.nature==11 || a.nature==12) {
        a.branches +=a.leftpointstotal/2;
    }
    else if (a.nature==6 || a.nature==7 || a.nature==8) {
        a.trunk +=a.leftpointstotal/2;
    }
    else if (a.nature==2 || a.nature==3 || a.nature==4) {
        a.roots +=a.leftpointstotal/2;
    }
    else if (a.nature==1 || a.nature==5 || a.nature==9 || a.nature==13) {
        a.foliage +=Math.floor(a.leftpointstotal/8*10)/10;
        a.branches +=Math.floor(a.leftpointstotal/8*10)/10;
        a.trunk +=Math.floor(a.leftpointstotal/8*10)/10;
        a.roots +=Math.floor(a.leftpointstotal/8*10)/10;
        if (Math.floor(a.leftpointstotal/8*10)/10<a.leftpointstotal/8) {
            state.random_contests =Math.random(); //Random number between 0 and 1
            if (state.random_contests>=0.833333) {
                a.foliage +=0.1;
                a.branches +=0.1;
            }
            else if (state.random_contests>=0.666666) {
                a.foliage +=0.1;
                a.trunk +=0.1;
            }
            else if (state.random_contests>=0.500000) {
                a.foliage +=0.1;
                a.roots +=0.1;
            }
            else if (state.random_contests>=0.333333) {
                a.branches +=0.1;
                a.trunk +=0.1;
            }
            else if (state.random_contests>=0.166666) {
                a.branches +=0.1;
                a.roots +=0.1;
            }
            else {
                a.trunk +=0.1;
                a.roots +=0.1;
            }
        }
    }
    a.foliage +=Math.floor(a.leftpointstotal/8*10)/10;
    a.branches +=Math.floor(a.leftpointstotal/8*10)/10;
    a.trunk +=Math.floor(a.leftpointstotal/8*10)/10;
    a.roots +=Math.floor(a.leftpointstotal/8*10)/10;
    if (Math.floor(a.leftpointstotal/8*10)/10<a.leftpointstotal/8) {
        state.random_contests =Math.random(); //Random number between 0 and 1
        if (state.random_contests>=0.833333) {
            a.foliage +=0.1;
            a.branches +=0.1;
        }
        else if (state.random_contests>=0.666666) {
            a.foliage +=0.1;
            a.trunk +=0.1;
        }
        else if (state.random_contests>=0.500000) {
            a.foliage +=0.1;
            a.roots +=0.1;
        }
        else if (state.random_contests>=0.333333) {
            a.branches +=0.1;
            a.trunk +=0.1;
        }
        else if (state.random_contests>=0.166666) {
            a.branches +=0.1;
            a.roots +=0.1;
        }
        else {
            a.trunk +=0.1;
            a.roots +=0.1;
        }
    }
}

function cpcom_lp_two_weak_random (a) {
    if (a.nature==14 || a.nature==15 || a.nature==16) {
        a.foliage +=a.leftpointstotal/2;
    }
    else if (a.nature==10 || a.nature==11 || a.nature==12) {
        a.branches +=a.leftpointstotal/2;
    }
    else if (a.nature==6 || a.nature==7 || a.nature==8) {
        a.trunk +=a.leftpointstotal/2;
    }
    else if (a.nature==2 || a.nature==3 || a.nature==4) {
        a.roots +=a.leftpointstotal/2;
    }
    else if (a.nature==1 || a.nature==5 || a.nature==9 || a.nature==13) {
        state.random_contests =Math.random(); //Random number between 0 and 1
        if (state.random_contests>=0.75) {
            a.foliage +=a.leftpointstotal/2;
        }
        else if (state.random_contests>=0.50) {
            a.branches +=a.leftpointstotal/2;
        }
        else if (state.random_contests>=0.25) {
            a.trunk +=a.leftpointstotal/2;
        }
        else {
            a.roots +=a.leftpointstotal/2;
        }
    }
    state.random_contests =Math.random(); //Random number between 0 and 1
    if (state.random_contests>=0.75) {
        a.foliage +=a.leftpointstotal/2;
    }
    else if (state.random_contests>=0.50) {
        a.branches +=a.leftpointstotal/2;
    }
    else if (state.random_contests>=0.25) {
        a.trunk +=a.leftpointstotal/2;
    }
    else {
        a.roots +=a.leftpointstotal/2;
    }
}

function cpcom_lp_tworandom(a) {
    state.random_contests =Math.random(); //Random number between 0 and 1
    if (state.random_contests>=0.833333) {
        a.foliage +=a.leftpointstotal/2;
        a.branches +=a.leftpointstotal/2;
    }
    else if (state.random_contests>=0.666666) {
        a.foliage +=a.leftpointstotal/2;
        a.trunk +=a.leftpointstotal/2;
    }
    else if (state.random_contests>=0.500000) {
        a.foliage +=a.leftpointstotal/2;
        a.roots +=a.leftpointstotal/2;
    }
    else if (state.random_contests>=0.333333) {
        a.branches +=a.leftpointstotal/2;
        a.trunk +=a.leftpointstotal/2;
    }
    else if (state.random_contests>=0.166666) {
        a.branches +=a.leftpointstotal/2;
        a.roots +=a.leftpointstotal/2;
    }
    else {
        a.trunk +=a.leftpointstotal/2;
        a.roots +=a.leftpointstotal/2;
    }
}
var state = {
    zeitsave: 0,
    zeitjetzt: 0,
    zeitsincesave: 0,
    seconds: 0,
    minutes: 0,
    hours: 0,
    random_treetype: 0,
    random_treequality: 0,
    random_shiny: 0,
    random_nature: 0,
    random_contests: 0,
    bonsai_showing: 0,
    workers_total: 1,
    workers_available: 1,
    seedlings: 0,
    seedlings_ontheway: 0,
    workerstandin: 0,
    areasunlocked: 1,
}

var statistics = {
    seedlings_total: 0,
    bonsais_total: 0,
    bondex_treetype_discovered: 0,
    bondex_bonsai01_discovered: 0,
    bondex_bonsai02_discovered: 0,
    bondex_bonsai03_discovered: 0,
    bondex_bonsai04_discovered: 0,
    bondex_bonsai05_discovered: 0,
    bondex_bonsai06_discovered: 0,
    bondex_bonsai07_discovered: 0,
    bondex_bonsai08_discovered: 0,
    bondex_bonsai09_discovered: 0,
    bondex_bonsai10_discovered: 0,
    bondex_bonsai11_discovered: 0,
    bondex_bonsai12_discovered: 0,
    bondex_bonsai13_discovered: 0,
    bondex_bonsai14_discovered: 0,
}

var resources = {
    money: 0,
    organic_waste: 0,
    compost1: 0,
    fertilizer1: 0,
    bolt: 5,
    metal: 3,
    wire: 2,
    board: 1,
}

var equipment = {
    map_area02: 0,
    book_of_patience1: 0,
    memory_chips1: 0,
    book_growing1: 0,
    book_shaping1: 0,
    book_robot1: 1,
    tools1: 1,
    book_styles1: 1,
    book_styles2: 0,
}

var skills = {
    level: 0,
    exp_nextlevel: 20,
    skillpoints: 0,
    treestyles1: 0,
    treestyles2: 0,
    robot1: 0,
    compost1: 0,
    growing: 0,
    shaping: 0,
    patience: 0,
}

const skillexperience = [];
skillexperience[0]= 20;
skillexperience[1]= 24;
skillexperience[2]= 29;
skillexperience[3]= 35;
skillexperience[4]= 41;
skillexperience[5]= 50;
skillexperience[6]= 60;
skillexperience[7]= 72;
skillexperience[8]= 86;
skillexperience[9]= 103;
skillexperience[10]= 124;
skillexperience[11]= 149;
skillexperience[12]= 178;
skillexperience[13]= 214;
skillexperience[14]= 257;
skillexperience[15]= 308;
skillexperience[16]= 370;
skillexperience[17]= 444;
skillexperience[18]= 532;
skillexperience[19]= 639;

var clubs_leagues = {
    ttg01: 0,
    ttg01c1: 0,
    ttg01c2: 0,
    ttg01c3: 0,
    ttg02: 0,
    ttg03: 0,
    ttg04: 0,
    ttg05: 0,
    ttg06: 0,
    ttg07: 0,
    ttg08: 0,
    ttg09: 0,
    st01: 0,
    st02: 0,
    st03: 0,
    st04: 0,
    st05: 0,
    st06: 0,
    st07: 0,
    st08: 0,
    st09: 0,
    st10: 0,
    st11: 0,
    st12: 0,
    st13: 0,
    st14: 0,
    st15: 0,
    st16: 0,
    lea01: 0,
    lea01c1: 0,
    lea01c2: 0,
    lea01c3: 0,
    lea02: 0,
    lea03: 0,
    lea04: 0,
    lea05: 0,
    lea06: 0,
    lea07: 0,
    lea08: 0,
    lea09: 0,
    lea10: 0,
}

var contests_bonsai_c1 = {
    treetype: 0,
    treetypegroup: 0,
    styletype: 0,
    treequality: 0,
    shiny: 0,
    nature: 0,
    level: 0,
    foliage: 0,
    branches: 0,
    trunk: 0,
    roots: 0,
    growing: 0,
    shaping: 0,
    foliage_new: 0,
    branches_new: 0,
    trunk_new: 0,
    roots_new: 0,
    leftpoints: 0,
    leftpointstotal: 0,
    distributiontype: 0,
    score: 0,
    judge1: 0,
    judge2: 0,
    judge3: 0,
}
var contests_bonsai_c2 = {
    treetype: 0,
    treetypegroup: 0,
    styletype: 0,
    treequality: 0,
    shiny: 0,
    nature: 0,
    level: 0,
    foliage: 0,
    branches: 0,
    trunk: 0,
    roots: 0,
    growing: 0,
    shaping: 0,
    foliage_new: 0,
    branches_new: 0,
    trunk_new: 0,
    roots_new: 0,
    leftpoints: 0,
    leftpointstotal: 0,
    distributiontype: 0,
    score: 0,
    judge1: 0,
    judge2: 0,
    judge3: 0,
}
var contests_bonsai_c3 = {
    treetype: 0,
    treetypegroup: 0,
    styletype: 0,
    treequality: 0,
    shiny: 0,
    nature: 0,
    level: 0,
    foliage: 0,
    branches: 0,
    trunk: 0,
    roots: 0,
    growing: 0,
    shaping: 0,
    foliage_new: 0,
    branches_new: 0,
    trunk_new: 0,
    roots_new: 0,
    leftpoints: 0,
    leftpointstotal: 0,
    distributiontype: 0,
    score: 0,
    judge1: 0,
    judge2: 0,
    judge3: 0,
}
var contests_bonsai_c4 = {
    treetype: 0,
    treetypegroup: 0,
    styletype: 0,
    treequality: 0,
    shiny: 0,
    nature: 0,
    level: 0,
    foliage: 0,
    branches: 0,
    trunk: 0,
    roots: 0,
    growing: 0,
    shaping: 0,
    foliage_new: 0,
    branches_new: 0,
    trunk_new: 0,
    roots_new: 0,
    leftpoints: 0,
    leftpointstotal: 0,
    distributiontype: 0,
    score: 0,
    judge1: 0,
    judge2: 0,
    judge3: 0,
}
var contests_bonsai_c5 = {
    treetype: 0,
    treetypegroup: 0,
    styletype: 0,
    treequality: 0,
    shiny: 0,
    nature: 0,
    level: 0,
    foliage: 0,
    branches: 0,
    trunk: 0,
    roots: 0,
    growing: 0,
    shaping: 0,
    foliage_new: 0,
    branches_new: 0,
    trunk_new: 0,
    roots_new: 0,
    leftpoints: 0,
    leftpointstotal: 0,
    distributiontype: 0,
    score: 0,
    judge1: 0,
    judge2: 0,
    judge3: 0,
}
var contests_bonsai_c6 = {
    treetype: 0,
    treetypegroup: 0,
    styletype: 0,
    treequality: 0,
    shiny: 0,
    nature: 0,
    level: 0,
    foliage: 0,
    branches: 0,
    trunk: 0,
    roots: 0,
    growing: 0,
    shaping: 0,
    foliage_new: 0,
    branches_new: 0,
    trunk_new: 0,
    roots_new: 0,
    leftpoints: 0,
    leftpointstotal: 0,
    distributiontype: 0,
    score: 0,
    judge1: 0,
    judge2: 0,
    judge3: 0,
}
var contests_bonsai_c7 = {
    treetype: 0,
    treetypegroup: 0,
    styletype: 0,
    treequality: 0,
    shiny: 0,
    nature: 0,
    level: 0,
    foliage: 0,
    branches: 0,
    trunk: 0,
    roots: 0,
    growing: 0,
    shaping: 0,
    foliage_new: 0,
    branches_new: 0,
    trunk_new: 0,
    roots_new: 0,
    leftpoints: 0,
    leftpointstotal: 0,
    distributiontype: 0,
    score: 0,
    judge1: 0,
    judge2: 0,
    judge3: 0,
}
var contests_bonsai_c8 = {
    treetype: 0,
    treetypegroup: 0,
    styletype: 0,
    treequality: 0,
    shiny: 0,
    nature: 0,
    level: 0,
    foliage: 0,
    branches: 0,
    trunk: 0,
    roots: 0,
    growing: 0,
    shaping: 0,
    foliage_new: 0,
    branches_new: 0,
    trunk_new: 0,
    roots_new: 0,
    leftpoints: 0,
    leftpointstotal: 0,
    distributiontype: 0,
    score: 0,
    judge1: 0,
    judge2: 0,
    judge3: 0,
}
var contests_bonsai_c9 = {
    treetype: 0,
    treetypegroup: 0,
    styletype: 0,
    treequality: 0,
    shiny: 0,
    nature: 0,
    level: 0,
    foliage: 0,
    branches: 0,
    trunk: 0,
    roots: 0,
    growing: 0,
    shaping: 0,
    foliage_new: 0,
    branches_new: 0,
    trunk_new: 0,
    roots_new: 0,
    leftpoints: 0,
    leftpointstotal: 0,
    distributiontype: 0,
    score: 0,
    judge1: 0,
    judge2: 0,
    judge3: 0,
}

var newOption = 0;
var x=1;
var x_shop=1;
var x_contests=1;
var z=0;
var levels=0;
var id_string=0;
var naturepoints=0;
var leftpoints=0;
var autosave=0;
var styletype=0;

var contests = {
    z:0,
    visible:0,
    bonsaichoosen:0,
    bonsaichoosenx:0,
    id: "-",
    entryprice:0,
    own_place:1,
    difficulty:0,
    a_score:0,
    b_score:0,
    a_advantages:1,
    a_disadvantages:1,
    b_advantages:1,
    b_disadvantages:1,
    judge1_preference: "-",
    judge1_dislike: "-",
    judge2_preference: "-",
    judge2_dislike: "-",
    judge3_preference: "-",
    judge3_dislike: "-",
}
var judge_preference ="-";
var judge_dislike ="-";
var ajudge =0;

var worker01 = {
    busy: 0,
    expedition: 0,
    expedition_zeit: 0,
    expedition_time: 0,
    growing: 0,
    crafting: 0,
    crafting_zeit: 0,
    crafting_zeitone: 0,
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

/* Expedition treetypes and treequality discovered */
var exp_area01 = {
    alltreetype: 0,
    treetype01: 0,
    treetype02: 0,
    treetype04: 0,
    treetype05: 0,
    treetype07: 0,
    treetype08: 0,
    alltreequality: 0,
    treequality01: 0,
    treequality02: 0,
    treequality03: 0,
}

var exp_area02 = {
    alltreetype: 0,
    treetype01: 0,
    treetype03: 0,
    treetype04: 0,
    treetype06: 0,
    treetype09: 0,
    treetype10: 0,
    treetype11: 0,
    treetype13: 0,
    treetype14: 0,
    alltreequality: 0,
    treequality01: 0,
    treequality02: 0,
    treequality03: 0,
    treequality04: 0,
}

/* Bonsai variables */
const treetypename = [];
treetypename[0]= "-";
treetypename[1]= "Maru";
treetypename[2]= "Daen";
treetypename[3]= "Yubiwa";
treetypename[4]= "Otosu";
treetypename[5]= "Hi";
treetypename[6]= "Kumo";
treetypename[7]= "Rokkakkei";
treetypename[8]= "Asutarisuku";
treetypename[9]= "Sunōfurēku";
treetypename[10]= "Fezā";
treetypename[11]= "Makigai";
treetypename[12]= "Me";
treetypename[13]= "Sankakkei";
treetypename[14]= "Yajirushi";
treetypename[15]= "Shīrudo";
treetypename[16]= "Daiyamondo";
treetypename[17]= "Mitsuba";
treetypename[18]= "Shikaku";
treetypename[19]= "Kukei";
treetypename[20]= "Hishigata";
treetypename[21]= "Kokki";
treetypename[22]= "Māku";
treetypename[23]= "Sōbi";
treetypename[24]= "Beru";
treetypename[25]= "Bōru";
treetypename[26]= "Paretto";
treetypename[27]= "Genshi";
treetypename[28]= "Tako";
treetypename[29]= "Kami hikōki";
treetypename[30]= "Tsuki";
treetypename[31]= "Hoshi";
treetypename[32]= "Taiyō";
treetypename[33]= "Hana";
treetypename[34]= "Kurōbā";
treetypename[35]= "Ha";


const treetypegroupname = [];
treetypegroupname[0]= "-";
treetypegroupname[1]= "Raundo";
treetypegroupname[2]= "Erementaru";
treetypegroupname[3]= "Roku-men";
treetypegroupname[4]= "Seikatsu";
treetypegroupname[5]= "Sanmen";
treetypegroupname[6]= "Shihen";
treetypegroupname[7]= "Jinkō-teki";
treetypegroupname[8]= "Sora";
treetypegroupname[9]= "Shizen";

const styletypename = [];
styletypename[0]= "-";
styletypename[1]= "Chokan";
styletypename[2]= "Moyogi";
styletypename[3]= "Shakan";
styletypename[4]= "Han-Kengai";
styletypename[5]= "Sokan";
styletypename[6]= "Kengai";
styletypename[7]= "Kabudachi";
styletypename[8]= "Hokidachi";
styletypename[9]= "Bunjin";
styletypename[10]= "Fukinagashi";
styletypename[11]= "Ikadabuki";
styletypename[12]= "Neagari";
styletypename[13]= "Sharimiki";
styletypename[14]= "Ishizuki";
styletypename[15]= "Sabamiki";
styletypename[16]= "Seki-joju";

const natures = [];
natures[0]= "-";
natures[1]= "Balanced";
natures[2]= "Leafed";
natures[3]= "Branched";
natures[4]= "Strengthened";
natures[5]= "Equalised";
natures[6]= "Adorned";
natures[7]= "Ramified";
natures[8]= "Grounded";
natures[9]= "Adjusted";
natures[10]= "Decorated";
natures[11]= "Fortified";
natures[12]= "Fixed";
natures[13]= "Tempered";
natures[14]= "Dispersed";
natures[15]= "Consolidated";
natures[16]= "Earthed";

/* Seedling variables */
var seedling1 = {
    treetype: 0,
    treetypegroup: 0,
    styletype: 0,
    treequality: 0,
    shiny: 0,
    planting_choosen: 0,
    price: 0,
}

var seedling2 = {
    treetype: 0,
    treetypegroup: 0,
    styletype: 0,
    treequality: 0,
    shiny: 0,
    planting_choosen: 0,
    price: 0,
}

var seedling3 = {
    treetype: 0,
    treetypegroup: 0,
    styletype: 0,
    treequality: 0,
    shiny: 0,
    planting_choosen: 0,
    price: 0,
}

var seedling4 = {
    treetype: 0,
    treetypegroup: 0,
    styletype: 0,
    treequality: 0,
    shiny: 0,
    planting_choosen: 0,
    price: 0,
}

var seedling5 = {
    treetype: 0,
    treetypegroup: 0,
    styletype: 0,
    treequality: 0,
    shiny: 0,
    planting_choosen: 0,
    price: 0,
}

var seedling6 = {
    treetype: 0,
    treetypegroup: 0,
    styletype: 0,
    treequality: 0,
    shiny: 0,
    planting_choosen: 0,
    price: 0,
}

var bonsaiplaceholder = {
    name: "-",
    id:0,
    id_string:0,
    treetype: 0,
    treetypegroup: 0,
    styletype: 0,
    treequality: 0,
    shiny: 0,
    nature: 0,
    level: 0,
    foliage: 0,
    branches: 0,
    trunk: 0,
    roots: 0,
    growing: 0,
    growing_zeit: 0,
    level_new: 0,
    foliage_new: 0,
    branches_new: 0,
    trunk_new: 0,
    roots_new: 0,
    leftpoints: 0,
    level_lp: 0,
    foliage_lp: 0,
    branches_lp: 0,
    trunk_lp: 0,
    roots_lp: 0,
    price: 0,
}

const grow_time_tq1 = [];
grow_time_tq1[0]= 6;
grow_time_tq1[1]= 12;
grow_time_tq1[2]= 18;
grow_time_tq1[3]= 24;
grow_time_tq1[4]= 36;
grow_time_tq1[5]= 48;
grow_time_tq1[6]= 60;
grow_time_tq1[7]= 90;
grow_time_tq1[8]= 120;
grow_time_tq1[9]= 150;
grow_time_tq1[10]= 180;
grow_time_tq1[11]= 240;
grow_time_tq1[12]= 300;
grow_time_tq1[13]= 360;
grow_time_tq1[14]= 420;
grow_time_tq1[15]= 480;
grow_time_tq1[16]= 600;
grow_time_tq1[17]= 720;
grow_time_tq1[18]= 840;
grow_time_tq1[19]= 960;
grow_time_tq1[20]= 1080;
grow_time_tq1[21]= 1200;
grow_time_tq1[22]= 1320;
grow_time_tq1[23]= 1440;
grow_time_tq1[24]= 1560;
grow_time_tq1[25]= 1680;
grow_time_tq1[26]= 1800;
grow_time_tq1[27]= 1920;
grow_time_tq1[28]= 2040;
grow_time_tq1[29]= 2160;
grow_time_tq1[30]= 2280;
grow_time_tq1[31]= 2400;
grow_time_tq1[32]= 2520;
grow_time_tq1[33]= 2640;
grow_time_tq1[34]= 2760;
grow_time_tq1[35]= 2880;
grow_time_tq1[36]= 3000;
grow_time_tq1[37]= 3120;
grow_time_tq1[38]= 3240;
grow_time_tq1[39]= 3360;
grow_time_tq1[40]= 3480;
grow_time_tq1[41]= 3600;
grow_time_tq1[42]= 3720;
grow_time_tq1[43]= 3840;
grow_time_tq1[44]= 3960;
grow_time_tq1[45]= 4080;
grow_time_tq1[46]= 4200;
grow_time_tq1[47]= 4320;
grow_time_tq1[48]= 4440;
grow_time_tq1[49]= 4560;
grow_time_tq1[50]= 4680;
grow_time_tq1[51]= 4800;
grow_time_tq1[52]= 4920;
grow_time_tq1[53]= 5040;
grow_time_tq1[54]= 5160;
grow_time_tq1[55]= 5280;
grow_time_tq1[56]= 5400;
grow_time_tq1[57]= 5520;
grow_time_tq1[58]= 5640;
grow_time_tq1[59]= 5760;
grow_time_tq1[60]= 5880;
grow_time_tq1[61]= 6000;
grow_time_tq1[62]= 6120;
grow_time_tq1[63]= 6240;
grow_time_tq1[64]= 6360;
grow_time_tq1[65]= 6480;
grow_time_tq1[66]= 6600;
grow_time_tq1[67]= 6720;
grow_time_tq1[68]= 6840;
grow_time_tq1[69]= 6960;
grow_time_tq1[70]= 7080;
grow_time_tq1[71]= 7200;
grow_time_tq1[72]= 7320;
grow_time_tq1[73]= 7440;
grow_time_tq1[74]= 7560;
grow_time_tq1[75]= 7680;
grow_time_tq1[76]= 7800;
grow_time_tq1[77]= 7920;
grow_time_tq1[78]= 8040;
grow_time_tq1[79]= 8160;
grow_time_tq1[80]= 8280;
grow_time_tq1[81]= 8400;
grow_time_tq1[82]= 8520;
grow_time_tq1[83]= 8640;
grow_time_tq1[84]= 8760;
grow_time_tq1[85]= 8880;
grow_time_tq1[86]= 9000;
grow_time_tq1[87]= 9120;
grow_time_tq1[88]= 9240;
grow_time_tq1[89]= 9360;
grow_time_tq1[90]= 9480;
grow_time_tq1[91]= 9600;
grow_time_tq1[92]= 9720;
grow_time_tq1[93]= 9840;
grow_time_tq1[94]= 9960;
grow_time_tq1[95]= 10080;
grow_time_tq1[96]= 10200;
grow_time_tq1[97]= 10320;
grow_time_tq1[98]= 10440;
grow_time_tq1[99]= 10560;
grow_time_tq1[100]= 10000000;

const grow_time_tq2 = [];
grow_time_tq2[0]= 6;
grow_time_tq2[1]= 12;
grow_time_tq2[2]= 18;
grow_time_tq2[3]= 24;
grow_time_tq2[4]= 36;
grow_time_tq2[5]= 48;
grow_time_tq2[6]= 60;
grow_time_tq2[7]= 90;
grow_time_tq2[8]= 120;
grow_time_tq2[9]= 150;
grow_time_tq2[10]= 180;
grow_time_tq2[11]= 240;
grow_time_tq2[12]= 300;
grow_time_tq2[13]= 360;
grow_time_tq2[14]= 420;
grow_time_tq2[15]= 480;
grow_time_tq2[16]= 600;
grow_time_tq2[17]= 720;
grow_time_tq2[18]= 840;
grow_time_tq2[19]= 960;
grow_time_tq2[20]= 1080;
grow_time_tq2[21]= 1260;
grow_time_tq2[22]= 1440;
grow_time_tq2[23]= 1620;
grow_time_tq2[24]= 1800;
grow_time_tq2[25]= 1980;
grow_time_tq2[26]= 2160;
grow_time_tq2[27]= 2340;
grow_time_tq2[28]= 2520;
grow_time_tq2[29]= 2700;
grow_time_tq2[30]= 2880;
grow_time_tq2[31]= 3060;
grow_time_tq2[32]= 3240;
grow_time_tq2[33]= 3420;
grow_time_tq2[34]= 3600;
grow_time_tq2[35]= 3780;
grow_time_tq2[36]= 3960;
grow_time_tq2[37]= 4140;
grow_time_tq2[38]= 4320;
grow_time_tq2[39]= 4500;
grow_time_tq2[40]= 4680;
grow_time_tq2[41]= 4860;
grow_time_tq2[42]= 5040;
grow_time_tq2[43]= 5220;
grow_time_tq2[44]= 5400;
grow_time_tq2[45]= 5580;
grow_time_tq2[46]= 5760;
grow_time_tq2[47]= 5940;
grow_time_tq2[48]= 6120;
grow_time_tq2[49]= 6300;
grow_time_tq2[50]= 6480;
grow_time_tq2[51]= 6660;
grow_time_tq2[52]= 6840;
grow_time_tq2[53]= 7020;
grow_time_tq2[54]= 7200;
grow_time_tq2[55]= 7380;
grow_time_tq2[56]= 7560;
grow_time_tq2[57]= 7740;
grow_time_tq2[58]= 7920;
grow_time_tq2[59]= 8100;
grow_time_tq2[60]= 8280;
grow_time_tq2[61]= 8460;
grow_time_tq2[62]= 8640;
grow_time_tq2[63]= 8820;
grow_time_tq2[64]= 9000;
grow_time_tq2[65]= 9180;
grow_time_tq2[66]= 9360;
grow_time_tq2[67]= 9540;
grow_time_tq2[68]= 9720;
grow_time_tq2[69]= 9900;
grow_time_tq2[70]= 10080;
grow_time_tq2[71]= 10260;
grow_time_tq2[72]= 10440;
grow_time_tq2[73]= 10620;
grow_time_tq2[74]= 10800;
grow_time_tq2[75]= 10980;
grow_time_tq2[76]= 11160;
grow_time_tq2[77]= 11340;
grow_time_tq2[78]= 11520;
grow_time_tq2[79]= 11700;
grow_time_tq2[80]= 11880;
grow_time_tq2[81]= 12060;
grow_time_tq2[82]= 12240;
grow_time_tq2[83]= 12420;
grow_time_tq2[84]= 12600;
grow_time_tq2[85]= 12780;
grow_time_tq2[86]= 12960;
grow_time_tq2[87]= 13140;
grow_time_tq2[88]= 13320;
grow_time_tq2[89]= 13500;
grow_time_tq2[90]= 13680;
grow_time_tq2[91]= 13860;
grow_time_tq2[92]= 14040;
grow_time_tq2[93]= 14220;
grow_time_tq2[94]= 14400;
grow_time_tq2[95]= 14580;
grow_time_tq2[96]= 14760;
grow_time_tq2[97]= 14940;
grow_time_tq2[98]= 15120;
grow_time_tq2[99]= 15300;
grow_time_tq2[100]= 10000000;

const grow_time_tq3 = [];
grow_time_tq3[0]= 6;
grow_time_tq3[1]= 12;
grow_time_tq3[2]= 18;
grow_time_tq3[3]= 24;
grow_time_tq3[4]= 36;
grow_time_tq3[5]= 48;
grow_time_tq3[6]= 60;
grow_time_tq3[7]= 90;
grow_time_tq3[8]= 120;
grow_time_tq3[9]= 150;
grow_time_tq3[10]= 180;
grow_time_tq3[11]= 240;
grow_time_tq3[12]= 300;
grow_time_tq3[13]= 360;
grow_time_tq3[14]= 420;
grow_time_tq3[15]= 480;
grow_time_tq3[16]= 600;
grow_time_tq3[17]= 720;
grow_time_tq3[18]= 840;
grow_time_tq3[19]= 960;
grow_time_tq3[20]= 1080;
grow_time_tq3[21]= 1260;
grow_time_tq3[22]= 1440;
grow_time_tq3[23]= 1620;
grow_time_tq3[24]= 1800;
grow_time_tq3[25]= 2100;
grow_time_tq3[26]= 2400;
grow_time_tq3[27]= 2700;
grow_time_tq3[28]= 3000;
grow_time_tq3[29]= 3300;
grow_time_tq3[30]= 3600;
grow_time_tq3[31]= 3900;
grow_time_tq3[32]= 4200;
grow_time_tq3[33]= 4500;
grow_time_tq3[34]= 4800;
grow_time_tq3[35]= 5100;
grow_time_tq3[36]= 5400;
grow_time_tq3[37]= 5700;
grow_time_tq3[38]= 6000;
grow_time_tq3[39]= 6300;
grow_time_tq3[40]= 6600;
grow_time_tq3[41]= 6900;
grow_time_tq3[42]= 7200;
grow_time_tq3[43]= 7500;
grow_time_tq3[44]= 7800;
grow_time_tq3[45]= 8100;
grow_time_tq3[46]= 8400;
grow_time_tq3[47]= 8700;
grow_time_tq3[48]= 9000;
grow_time_tq3[49]= 9300;
grow_time_tq3[50]= 9600;
grow_time_tq3[51]= 9900;
grow_time_tq3[52]= 10200;
grow_time_tq3[53]= 10500;
grow_time_tq3[54]= 10800;
grow_time_tq3[55]= 11100;
grow_time_tq3[56]= 11400;
grow_time_tq3[57]= 11700;
grow_time_tq3[58]= 12000;
grow_time_tq3[59]= 12300;
grow_time_tq3[60]= 12600;
grow_time_tq3[61]= 12900;
grow_time_tq3[62]= 13200;
grow_time_tq3[63]= 13500;
grow_time_tq3[64]= 13800;
grow_time_tq3[65]= 14100;
grow_time_tq3[66]= 14400;
grow_time_tq3[67]= 14700;
grow_time_tq3[68]= 15000;
grow_time_tq3[69]= 15300;
grow_time_tq3[70]= 15600;
grow_time_tq3[71]= 15900;
grow_time_tq3[72]= 16200;
grow_time_tq3[73]= 16500;
grow_time_tq3[74]= 16800;
grow_time_tq3[75]= 17100;
grow_time_tq3[76]= 17400;
grow_time_tq3[77]= 17700;
grow_time_tq3[78]= 18000;
grow_time_tq3[79]= 18300;
grow_time_tq3[80]= 18600;
grow_time_tq3[81]= 18900;
grow_time_tq3[82]= 19200;
grow_time_tq3[83]= 19500;
grow_time_tq3[84]= 19800;
grow_time_tq3[85]= 20100;
grow_time_tq3[86]= 20400;
grow_time_tq3[87]= 20700;
grow_time_tq3[88]= 21000;
grow_time_tq3[89]= 21300;
grow_time_tq3[90]= 21600;
grow_time_tq3[91]= 21900;
grow_time_tq3[92]= 22200;
grow_time_tq3[93]= 22500;
grow_time_tq3[94]= 22800;
grow_time_tq3[95]= 23100;
grow_time_tq3[96]= 23400;
grow_time_tq3[97]= 23700;
grow_time_tq3[98]= 24000;
grow_time_tq3[99]= 24300;
grow_time_tq3[100]= 10000000;

const grow_time_tq4 = [];
grow_time_tq4[0]= 6;
grow_time_tq4[1]= 12;
grow_time_tq4[2]= 18;
grow_time_tq4[3]= 24;
grow_time_tq4[4]= 36;
grow_time_tq4[5]= 48;
grow_time_tq4[6]= 60;
grow_time_tq4[7]= 90;
grow_time_tq4[8]= 120;
grow_time_tq4[9]= 150;
grow_time_tq4[10]= 180;
grow_time_tq4[11]= 240;
grow_time_tq4[12]= 300;
grow_time_tq4[13]= 360;
grow_time_tq4[14]= 420;
grow_time_tq4[15]= 480;
grow_time_tq4[16]= 600;
grow_time_tq4[17]= 720;
grow_time_tq4[18]= 840;
grow_time_tq4[19]= 960;
grow_time_tq4[20]= 1080;
grow_time_tq4[21]= 1260;
grow_time_tq4[22]= 1440;
grow_time_tq4[23]= 1620;
grow_time_tq4[24]= 1800;
grow_time_tq4[25]= 2100;
grow_time_tq4[26]= 2400;
grow_time_tq4[27]= 2700;
grow_time_tq4[28]= 3000;
grow_time_tq4[29]= 3300;
grow_time_tq4[30]= 3600;
grow_time_tq4[31]= 4200;
grow_time_tq4[32]= 4800;
grow_time_tq4[33]= 5400;
grow_time_tq4[34]= 6000;
grow_time_tq4[35]= 6600;
grow_time_tq4[36]= 7200;
grow_time_tq4[37]= 7800;
grow_time_tq4[38]= 8400;
grow_time_tq4[39]= 9000;
grow_time_tq4[40]= 9600;
grow_time_tq4[41]= 10200;
grow_time_tq4[42]= 10800;
grow_time_tq4[43]= 11400;
grow_time_tq4[44]= 12000;
grow_time_tq4[45]= 12600;
grow_time_tq4[46]= 13200;
grow_time_tq4[47]= 13800;
grow_time_tq4[48]= 14400;
grow_time_tq4[49]= 15000;
grow_time_tq4[50]= 15600;
grow_time_tq4[51]= 16200;
grow_time_tq4[52]= 16800;
grow_time_tq4[53]= 17400;
grow_time_tq4[54]= 18000;
grow_time_tq4[55]= 18600;
grow_time_tq4[56]= 19200;
grow_time_tq4[57]= 19800;
grow_time_tq4[58]= 20400;
grow_time_tq4[59]= 21000;
grow_time_tq4[60]= 21600;
grow_time_tq4[61]= 22200;
grow_time_tq4[62]= 22800;
grow_time_tq4[63]= 23400;
grow_time_tq4[64]= 24000;
grow_time_tq4[65]= 24600;
grow_time_tq4[66]= 25200;
grow_time_tq4[67]= 25800;
grow_time_tq4[68]= 26400;
grow_time_tq4[69]= 27000;
grow_time_tq4[70]= 27600;
grow_time_tq4[71]= 28200;
grow_time_tq4[72]= 28800;
grow_time_tq4[73]= 29400;
grow_time_tq4[74]= 30000;
grow_time_tq4[75]= 30600;
grow_time_tq4[76]= 31200;
grow_time_tq4[77]= 31800;
grow_time_tq4[78]= 32400;
grow_time_tq4[79]= 33000;
grow_time_tq4[80]= 33600;
grow_time_tq4[81]= 34200;
grow_time_tq4[82]= 34800;
grow_time_tq4[83]= 35400;
grow_time_tq4[84]= 36000;
grow_time_tq4[85]= 36600;
grow_time_tq4[86]= 37200;
grow_time_tq4[87]= 37800;
grow_time_tq4[88]= 38400;
grow_time_tq4[89]= 39000;
grow_time_tq4[90]= 39600;
grow_time_tq4[91]= 40200;
grow_time_tq4[92]= 40800;
grow_time_tq4[93]= 41400;
grow_time_tq4[94]= 42000;
grow_time_tq4[95]= 42600;
grow_time_tq4[96]= 43200;
grow_time_tq4[97]= 43800;
grow_time_tq4[98]= 44400;
grow_time_tq4[99]= 45000;
grow_time_tq4[100]= 10000000;

const level_cp_tq1 = [];
level_cp_tq1[0]= 2;
level_cp_tq1[1]= 4;
level_cp_tq1[2]= 6;
level_cp_tq1[3]= 8;
level_cp_tq1[4]= 12;
level_cp_tq1[5]= 16;
level_cp_tq1[6]= 20;
level_cp_tq1[7]= 28;
level_cp_tq1[8]= 40;
level_cp_tq1[9]= 64;

const level_cp_tq2 = [];
level_cp_tq2[0]= 2;
level_cp_tq2[1]= 4;
level_cp_tq2[2]= 6;
level_cp_tq2[3]= 10;
level_cp_tq2[4]= 14;
level_cp_tq2[5]= 18;
level_cp_tq2[6]= 22;
level_cp_tq2[7]= 30;
level_cp_tq2[8]= 44;
level_cp_tq2[9]= 70;

const level_cp_tq3 = [];
level_cp_tq3[0]= 2;
level_cp_tq3[1]= 4;
level_cp_tq3[2]= 8;
level_cp_tq3[3]= 12;
level_cp_tq3[4]= 16;
level_cp_tq3[5]= 20;
level_cp_tq3[6]= 24;
level_cp_tq3[7]= 32;
level_cp_tq3[8]= 48;
level_cp_tq3[9]= 74;

const level_cp_tq4 = [];
level_cp_tq4[0]= 2;
level_cp_tq4[1]= 4;
level_cp_tq4[2]= 8;
level_cp_tq4[3]= 12;
level_cp_tq4[4]= 16;
level_cp_tq4[5]= 20;
level_cp_tq4[6]= 28;
level_cp_tq4[7]= 36;
level_cp_tq4[8]= 52;
level_cp_tq4[9]= 82;
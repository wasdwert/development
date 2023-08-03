var state = {
    zeitsave: 0,
    random_treetype: 0,
    random_treequality: 0,
    random_shiny: 0,
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

var resources = {
    money: 0,
    organic_waste: 0,
    compost: 0,
    bolt: 5,
    metal: 3,
    wire: 2,
    board: 1,
}

var x=1;
var levels=0;
var idstring=0;

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

/* Expedition treetypes and treequality discovered */
var exp_area01 = {
    alltreetype: 0,
    treetype01: 0,
    treetype02: 0,
    treetype03: 0,
    alltreequality: 0,
    treequality01: 0,
    treequality02: 0,
}

var exp_area02 = {
    alltreetype: 0,
    treetype01: 0,
    treetype02: 0,
    treetype03: 0,
    treetype04: 0,
    treetype05: 0,
    alltreequality: 0,
    treequality01: 0,
    treequality02: 0,
    treequality03: 0,
}

/* Bonsai variables */
const treetypename = [];
treetypename[1]= "Maru";
treetypename[2]= "Daen";
treetypename[3]= "Yubiwa";
treetypename[4]= "Otosu";
treetypename[5]= "Hi";

const styletypename = [];
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
natures[0]= "";
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

var seedling1 = {
    id: 0,
    treetype: 0,
    treetypegroup: 0,
    styletype: 0,
    treequality: 0,
    shiny: 0,
    planting_choosen: 0,
    price: 0,
}

var seedling2 = {
    id: 0,
    treetype: 0,
    treetypegroup: 0,
    styletype: 0,
    treequality: 0,
    shiny: 0,
    planting_choosen: 0,
    price: 0,
}

var seedling3 = {
    id: 0,
    treetype: 0,
    treetypegroup: 0,
    styletype: 0,
    treequality: 0,
    shiny: 0,
    planting_choosen: 0,
    price: 0,
}

var seedling4 = {
    id: 0,
    treetype: 0,
    treetypegroup: 0,
    styletype: 0,
    treequality: 0,
    shiny: 0,
    planting_choosen: 0,
    price: 0,
}

var seedling5 = {
    id: 0,
    treetype: 0,
    treetypegroup: 0,
    styletype: 0,
    treequality: 0,
    shiny: 0,
    planting_choosen: 0,
    price: 0,
}

var seedling6 = {
    id: 0,
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
grow_time_tq1[21]= 1260;
grow_time_tq1[22]= 1440;
grow_time_tq1[23]= 1620;
grow_time_tq1[24]= 1800;

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

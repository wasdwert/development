var state = {
    random_treetype: 0,
    random_treequality: 0,
    random_shiny: 0,
    random_nature: 0,
    bonsai_showing: 0,
    workers_total: 1,
    workers_available: 1,
    seedlings: 1,
    seedlings_ontheway: 1,
    workerstandin: 0,
}

var statistics = {
    seedlings_total: 0,
    bonsais_total: 0,
}

var x=1;

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
    treetype: 1,
    treetypegroup: 0,
    styletype: 0,
    treequality: 1,
    shiny: 1,
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
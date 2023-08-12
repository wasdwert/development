var shop_bolt_sell = document.getElementById("shop_bolt_sell_1");
var shop_bolt_buy = document.getElementById("shop_bolt_buy_1");
var shop_metal_sell = document.getElementById("shop_metal_sell_1");
var shop_metal_buy = document.getElementById("shop_metal_buy_1");
var shop_wire_sell = document.getElementById("shop_wire_sell_1");
var shop_wire_buy = document.getElementById("shop_wire_buy_1");
var shop_board_sell = document.getElementById("shop_board_sell_1");
var shop_board_buy = document.getElementById("shop_board_buy_1");

shop_bolt_sell.onclick = function() {
    if (resources.bolt>=1) {
        resources.money +=1;
        resources.bolt -=1;
        document.getElementById("money").innerText = resources.money;
        document.getElementById("shop_bolt").innerText = resources.bolt;
        document.getElementById("bolt").innerText = resources.bolt;
        }
}

shop_bolt_buy.onclick = function() {
    if (resources.money>=2) {
        resources.money -=2;
        resources.bolt +=1;
        document.getElementById("money").innerText = resources.money;
        document.getElementById("shop_bolt").innerText = resources.bolt;
        document.getElementById("bolt").innerText = resources.bolt;
    }
    else {
        document.getElementById("snack_message").innerText = "Not enough money";
        var snackb = document.getElementById("snackbar");
        snackb.className = "show";
        setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 1000);
    }
}

shop_metal_sell.onclick = function() {
    if (resources.metal>=1) {
        resources.money +=1;
        resources.metal -=1;
        document.getElementById("money").innerText = resources.money;
        document.getElementById("shop_metal").innerText = resources.metal;
        document.getElementById("metal").innerText = resources.metal;
        }
}

shop_metal_buy.onclick = function() {
    if (resources.money>=2) {
        resources.money -=2;
        resources.metal +=1;
        document.getElementById("money").innerText = resources.money;
        document.getElementById("shop_metal").innerText = resources.metal;
        document.getElementById("metal").innerText = resources.metal;
    }
    else {
        document.getElementById("snack_message").innerText = "Not enough money";
        var snackb = document.getElementById("snackbar");
        snackb.className = "show";
        setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 1000);
    }
}

shop_wire_sell.onclick = function() {
    if (resources.wire>=1) {
        resources.money +=2;
        resources.wire -=1;
        document.getElementById("money").innerText = resources.money;
        document.getElementById("shop_wire").innerText = resources.wire;
        document.getElementById("wire").innerText = resources.wire;
        }
}

shop_wire_buy.onclick = function() {
    if (resources.money>=3) {
        resources.money -=3;
        resources.wire +=1;
        document.getElementById("money").innerText = resources.money;
        document.getElementById("shop_wire").innerText = resources.wire;
        document.getElementById("wire").innerText = resources.wire;
    }
    else {
        document.getElementById("snack_message").innerText = "Not enough money";
        var snackb = document.getElementById("snackbar");
        snackb.className = "show";
        setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 1000);
    }
}

shop_board_sell.onclick = function() {
    if (resources.board>=1) {
        resources.money +=2;
        resources.board -=1;
        document.getElementById("money").innerText = resources.money;
        document.getElementById("shop_board").innerText = resources.board;
        document.getElementById("board").innerText = resources.board;
        }
}

shop_board_buy.onclick = function() {
    if (resources.money>=4) {
        resources.money -=4;
        resources.board +=1;
        document.getElementById("money").innerText = resources.money;
        document.getElementById("shop_board").innerText = resources.board;
        document.getElementById("board").innerText = resources.board;
    }
    else {
        document.getElementById("snack_message").innerText = "Not enough money";
        var snackb = document.getElementById("snackbar");
        snackb.className = "show";
        setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 1000);
    }
}

function SellBonsai(bonsai) {
    if (x_shop==1) {
        if (sbonsai==1) {
            SellBonsaiExecution(bonsai11);
        }
        else if (sbonsai==2) {
            SellBonsaiExecution(bonsai12);
        }
        else if (sbonsai==3) {
            SellBonsaiExecution(bonsai13);
        }
        else if (sbonsai==4) {
            SellBonsaiExecution(bonsai14);
        }
        else if (sbonsai==5) {
            SellBonsaiExecution(bonsai15);
        }
        else if (sbonsai==6) {
            SellBonsaiExecution(bonsai16);
        }
    }else if (x_shop==7) {
        if (sbonsai==1) {
            SellBonsaiExecution(bonsai71);
        }
        else if (sbonsai==2) {
            SellBonsaiExecution(bonsai72);
        }
        else if (sbonsai==3) {
            SellBonsaiExecution(bonsai73);
        }
        else if (sbonsai==4) {
            SellBonsaiExecution(bonsai74);
        }
        else if (sbonsai==5) {
            SellBonsaiExecution(bonsai75);
        }
        else if (sbonsai==6) {
            SellBonsaiExecution(bonsai76);
        }
    }
}

function SellBonsaiExecution(bonsaixx) {
    if (bonsaixx.treetype>0) {
        if (bonsaixx.growing==0) {
            resources.money +=bonsaixx.price;
            document.getElementById("money").innerText = resources.money;
            bonsaixx.name="-";
            bonsaixx.species= 0;
            bonsaixx.treetype=0;
            bonsaixx.treetypegroup=0;
            bonsaixx.rarity=0;
            bonsaixx.nature=0;
            bonsaixx.level=0;
            bonsaixx.foliage=0;
            bonsaixx.branches=0;
            bonsaixx.trunk=0;
            bonsaixx.roots=0;
            bonsaixx.level_new=0;
            bonsaixx.foliage_new=0;
            bonsaixx.branches_new=0;
            bonsaixx.trunk_new=0;
            bonsaixx.roots_new=0;
            bonsaixx.leftpoints=0;
            bonsaixx.level_lp=0;
            bonsaixx.foliage_lp=0;
            bonsaixx.branches_lp=0;
            bonsaixx.trunk_lp=0;
            bonsaixx.roots_lp=0;
            bonsaixx.price=0;
            
            menu_change();
            menu_shop_change();
        }
        else {
            document.getElementById("snack_message").innerText = "Can not sell a growing bonsai";
            var snackb = document.getElementById("snackbar");
            snackb.className = "show";
            setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 1000);
        }
    }
}

function SellSeedling(seedlingx) {
    if (seedlingx.treetype>0) {
        resources.money +=seedlingx.price;
        document.getElementById("money").innerText = resources.money;
        seedlingx.species=0;
        seedlingx.treetype=0;
        seedlingx.treetypegroup=0;
        seedlingx.rarity=0;
        seedlingx.price=0;
        state.seedlings -=1;
        state.seedlings_ontheway -=1;
        document.getElementById("seedling_number").innerText = state.seedlings.toLocaleString('en', {minimumFractionDigits: 0});
        if (seedlingx==seedling1) {
        document.getElementById("seedlinga_price_sell").innerHTML = seedling1.price;
        document.getElementById("seedlinga_type_sell").innerHTML = fetchbonsaiimage_sell(seedling1);
        fetchimage_seedlinga ();
        document.getElementById("seedlinga_center").style.cursor= "auto"; 
        seedlinga_center.className = "";
        }
        if (seedlingx==seedling2) {
        document.getElementById("seedlingb_price_sell").innerHTML = seedling2.price;
        document.getElementById("seedlingb_type_sell").innerHTML = fetchbonsaiimage_sell(seedling2);
        fetchimage_seedlingb ();
        document.getElementById("seedlingb_center").style.cursor= "auto"; 
        seedlingb_center.className = "";
        }
        if (seedlingx==seedling3) {
        document.getElementById("seedlingc_price_sell").innerHTML = seedling3.price;
        document.getElementById("seedlingc_type_sell").innerHTML = fetchbonsaiimage_sell(seedling3);
        fetchimage_seedlingc ();
        document.getElementById("seedlingc_center").style.cursor= "auto"; 
        seedlingc_center.className = "";
        }
        if (seedlingx==seedling4) {
        document.getElementById("seedlingd_price_sell").innerHTML = seedling4.price;
        document.getElementById("seedlingd_type_sell").innerHTML = fetchbonsaiimage_sell(seedling4);
        fetchimage_seedlingd ();
        document.getElementById("seedlingd_center").style.cursor= "auto"; 
        seedlingd_center.className = "";
        }
        if (seedlingx==seedling5) {
        document.getElementById("seedlinge_price_sell").innerHTML = seedling5.price;
        document.getElementById("seedlinge_type_sell").innerHTML = fetchbonsaiimage_sell(seedling5);
        fetchimage_seedlinge ();
        document.getElementById("seedlinge_center").style.cursor= "auto"; 
        seedlinge_center.className = "";
        }
        if (seedlingx==seedling6) {
        document.getElementById("seedlingf_price_sell").innerHTML = seedling6.price;
        document.getElementById("seedlingf_type_sell").innerHTML = fetchbonsaiimage_sell(seedling6);
        fetchimage_seedlingf ();
        document.getElementById("seedlingf_center").style.cursor= "auto"; 
        seedlingf_center.className = "";
        }
        PlantSeedlingReset()
    }
}

function BuyBackpack() {
    if (resources.money>=20) {
        resources.money -=20;
        document.getElementById("money").innerText = resources.money;
        equipment.backpack=1;
        document.getElementById("shop_equip_backpack").style.backgroundImage= "url('Images/bought.svg')";
        $(document).ready(function(){
            $('#expedition2').show();
        });
        task010trigger();
    }
}

function BuyBookofPatience() {
    if (resources.money>=25) {
        resources.money -=25;
        document.getElementById("money").innerText = resources.money;
        equipment.book_of_patience=1;
        document.getElementById("shop_equip_bookofpatience").style.backgroundImage= "url('Images/bought.svg')";
    }
}

function BuyMemoryChips() {
    if (resources.money>=40) {
        resources.money -=40;
        document.getElementById("money").innerText = resources.money;
        equipment.memory_chips=1;
        document.getElementById("shop_equip_memorychips").style.backgroundImage= "url('Images/bought.svg')";
    }
}
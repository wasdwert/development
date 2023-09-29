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
        fetchvalues();
        fetchunlocks();
        }
    else {
        Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;You don't have any bolts left", "snackbar_attention", 3000, "snackbar_attention show3s");
    }
}

shop_bolt_buy.onclick = function() {
    if (resources.money>=2) {
        resources.money -=2;
        resources.bolt +=1;
        fetchvalues();
        fetchunlocks();
    }
    else {
        Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough money", "snackbar_attention", 3000, "snackbar_attention show3s");
    }
}

shop_metal_sell.onclick = function() {
    if (resources.metal>=1) {
        resources.money +=1;
        resources.metal -=1;
        fetchvalues();
        fetchunlocks();
        }
    else {
        Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;You don't have any metal left", "snackbar_attention", 3000, "snackbar_attention show3s");
    }
}

shop_metal_buy.onclick = function() {
    if (resources.money>=2) {
        resources.money -=2;
        resources.metal +=1;
        fetchvalues();
        fetchunlocks();
    }
    else {
        Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough money", "snackbar_attention", 3000, "snackbar_attention show3s");
    }
}

shop_wire_sell.onclick = function() {
    if (resources.wire>=1) {
        resources.money +=2;
        resources.wire -=1;
        fetchvalues();
        fetchunlocks();
        }
    else {
        Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;You don't have any wires left", "snackbar_attention", 3000, "snackbar_attention show3s");
    }
}

shop_wire_buy.onclick = function() {
    if (resources.money>=3) {
        resources.money -=3;
        resources.wire +=1;
        fetchvalues();
        fetchunlocks();
    }
    else {
        Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough money", "snackbar_attention", 3000, "snackbar_attention show3s");
    }
}

shop_board_sell.onclick = function() {
    if (resources.board>=1) {
        resources.money +=2;
        resources.board -=1;
        fetchvalues();
        fetchunlocks();
        }
    else {
        Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;You don't have any electronic boards left", "snackbar_attention", 3000, "snackbar_attention show3s");
    }
}

shop_board_buy.onclick = function() {
    if (resources.money>=4) {
        resources.money -=4;
        resources.board +=1;
        fetchvalues();
        fetchunlocks();
    }
    else {
        Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough money", "snackbar_attention", 3000, "snackbar_attention show3s");
    }
}

function SellBonsai(sbonsai) {
    if (x_shop==1) {
        if (sbonsai==1) {
            SellBonsaiExecution(bonsai001);
        }
        else if (sbonsai==2) {
            SellBonsaiExecution(bonsai002);
        }
        else if (sbonsai==3) {
            SellBonsaiExecution(bonsai003);
        }
        else if (sbonsai==4) {
            SellBonsaiExecution(bonsai004);
        }
        else if (sbonsai==5) {
            SellBonsaiExecution(bonsai005);
        }
        else if (sbonsai==6) {
            SellBonsaiExecution(bonsai006);
        }
        else if (sbonsai==7) {
            SellBonsaiExecution(bonsai007);
        }
        else if (sbonsai==8) {
            SellBonsaiExecution(bonsai008);
        }
        else if (sbonsai==9) {
            SellBonsaiExecution(bonsai009);
        }
        else if (sbonsai==10) {
            SellBonsaiExecution(bonsai010);
        }
    }else if (x_shop==11) {
        if (sbonsai==1) {
            SellBonsaiExecution(bonsai011);
        }
        else if (sbonsai==2) {
            SellBonsaiExecution(bonsai012);
        }
        else if (sbonsai==3) {
            SellBonsaiExecution(bonsai013);
        }
        else if (sbonsai==4) {
            SellBonsaiExecution(bonsai014);
        }
        else if (sbonsai==5) {
            SellBonsaiExecution(bonsai015);
        }
        else if (sbonsai==6) {
            SellBonsaiExecution(bonsai016);
        }
        else if (sbonsai==7) {
            SellBonsaiExecution(bonsai017);
        }
        else if (sbonsai==8) {
            SellBonsaiExecution(bonsai018);
        }
        else if (sbonsai==9) {
            SellBonsaiExecution(bonsai019);
        }
        else if (sbonsai==10) {
            SellBonsaiExecution(bonsai020);
        }
    }
}

function SellBonsaiExecution(bonsaixx) {
    if (bonsaixx.treetype>0) {
        if (bonsaixx.growing==0) {
            resources.money +=bonsaixx.price;
            bonsaixx.name="-";
            bonsaixx.id=0;
            bonsaixx.idstring="-";
            bonsaixx.treetype=0;
            bonsaixx.treetypegroup=0;
            bonsaixx.styletype=0;
            bonsaixx.treequality=0;
            bonsaixx.nature=0;
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
            menu_contests_change();
            fetchvalues();
            fetchunlocks();
        }
        else {
            Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Can not sell a growing bonsai", "snackbar_attention", 3000, "snackbar_attention show3s");
        }
    }
}

function SellSeedling(seedlingx) {
    if (seedlingx.treetype>0) {
        resources.money +=seedlingx.price;
        seedlingx.treetype=0;
        seedlingx.treetypegroup=0;
        seedlingx.styletype=0;
        seedlingx.treequality=0;
        seedlingx.shiny=0;
        seedlingx.price=0;
        state.seedlings -=1;
        state.seedlings_ontheway -=1;
        $(document).ready(function(){
            $('#menu_style2').hide();
            $('#menu_style2_mobile').hide();
           
            $('#menu_style').val(seedlingx.styletype);
            $('#menu_style').trigger('change');
           
            $('#menu_style_mobile').val(seedlingx.styletype);
            $('#menu_style_mobile').trigger('change');
        });
        document.getElementById("seedling_detail_type").innerHTML = '<img src="Images/pot.svg" width="100" height="100">';
        document.getElementById("seedling_detail_type_mobile").innerHTML = '<img src="Images/pot.svg" width="100" height="100">';        
        if (seedlingx==seedling1) {
            document.getElementById("seedlinga_price_sell").innerHTML = seedling1.price;
            fetchimage_seedling ("a", seedling1);
            document.getElementById("seedlinga_center").style.cursor= "auto"; 
            seedlinga_center.className = "";
        }
        if (seedlingx==seedling2) {
            document.getElementById("seedlingb_price_sell").innerHTML = seedling2.price;
            fetchimage_seedling ("b", seedling2);
            document.getElementById("seedlingb_center").style.cursor= "auto"; 
            seedlingb_center.className = "";
        }
        if (seedlingx==seedling3) {
            document.getElementById("seedlingc_price_sell").innerHTML = seedling3.price;
            fetchimage_seedling ("c", seedling3);
            document.getElementById("seedlingc_center").style.cursor= "auto"; 
            seedlingc_center.className = "";
        }
        if (seedlingx==seedling4) {
            document.getElementById("seedlingd_price_sell").innerHTML = seedling4.price;
            fetchimage_seedling ("d", seedling4);
            document.getElementById("seedlingd_center").style.cursor= "auto"; 
            seedlingd_center.className = "";
        }
        if (seedlingx==seedling5) {
            document.getElementById("seedlinge_price_sell").innerHTML = seedling5.price;
            fetchimage_seedling ("e", seedling5);
            document.getElementById("seedlinge_center").style.cursor= "auto"; 
            seedlinge_center.className = "";
        }
        if (seedlingx==seedling6) {
            document.getElementById("seedlingf_price_sell").innerHTML = seedling6.price;
            fetchimage_seedling ("f", seedling6);
            document.getElementById("seedlingf_center").style.cursor= "auto"; 
            seedlingf_center.className = "";
        }
        PlantSeedlingReset();
        fetchvalues();
        fetchunlocks();
    }
}

function BuyMapArea02() {
    if (equipment.map_area02==0) {
        if (resources.money>=20) {
            resources.money -=20;
            equipment.map_area02=1;
            state.areasunlocked+=1;
            fetchvalues();
            fetchunlocks();
        }
        else {
            Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough money", "snackbar_attention", 3000, "snackbar_attention show3s");
        } 
    }
    else {}
}

function BuyBookStyles2() {
    if (equipment.book_styles2==0) {
        if (resources.money>=25) {
            resources.money -=25;
            equipment.book_styles2=1;
            fetchvalues();
            fetchunlocks();
        }
        else {
            Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough money", "snackbar_attention", 3000, "snackbar_attention show3s");
        } 
    }
    else {}
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

function BuyBookGrowing1() {
    if (equipment.book_growing1==0) {
        if (resources.money>=5) {
            resources.money -=5;
            equipment.book_growing1=1;
            fetchvalues();
            fetchunlocks();
        }
        else {
            Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough money", "snackbar_attention", 3000, "snackbar_attention show3s");
        } 
    }
    else {}
}

function BuyBookShaping1() {
    if (equipment.book_shaping1==0) {
        if (resources.money>=5) {
            resources.money -=5;
            equipment.book_shaping1=1;
            fetchvalues();
            fetchunlocks();
        
        }
        else {
            Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough money", "snackbar_attention", 3000, "snackbar_attention show3s");
        } 
    }
    else {}
}
/* Header menu functions */
function ViewBonDex() {
    $(document).ready(function(){
        $('.bondex').show();
        $('.tasks').hide();
        $('.expedition').hide();
        $('.crafting').hide();
        $('.learning').hide();
        $('.shopping').hide();
        $('.competitions').hide();
        $('.bonsai_details').hide();
        $('.bonsai_details_seedling').hide();
    });
}

function ViewTasks() {
    $(document).ready(function(){
        $('.bondex').hide();
        $('.tasks').show();
        $('.expedition').hide();
        $('.crafting').hide();
        $('.learning').hide();
        $('.shopping').hide();
        $('.competitions').hide();
        $('.bonsai_details').hide();
        $('.bonsai_details_seedling').hide();
    });
}

function ViewExpedition() {
    $(document).ready(function(){
        $('.bondex').hide();
        $('.tasks').hide();
        $('.expedition').show();
        $('.crafting').hide();
        $('.learning').hide();
        $('.shopping').hide();
        $('.competitions').hide();
        $('.bonsai_details').hide();
        $('.bonsai_details_seedling').hide();
    });
}

function ViewCrafting() {
    $(document).ready(function(){
        $('.bondex').hide();
        $('.tasks').hide();
        $('.expedition').hide();
        $('.crafting').show();
        $('.learning').hide();
        $('.shopping').hide();
        $('.competitions').hide();
        $('.bonsai_details').hide();
        $('.bonsai_details_seedling').hide();
    });
}

function ViewLearning() {
    $(document).ready(function(){
        $('.bondex').hide();
        $('.tasks').hide();
        $('.expedition').hide();
        $('.crafting').hide();
        $('.learning').show();
        $('.shopping').hide();
        $('.competitions').hide();
        $('.bonsai_details').hide();
        $('.bonsai_details_seedling').hide();
    });
}

function ViewShopping() {
    $(document).ready(function(){
        $('.bondex').hide();
        $('.tasks').hide();
        $('.expedition').hide();
        $('.crafting').hide();
        $('.learning').hide();
        $('.shopping').show();
        $('.competitions').hide();
        $('.bonsai_details').hide();
        $('.bonsai_details_seedling').hide();
    });
}

function ViewCompetitions() {
    $(document).ready(function(){
        $('.bondex').hide();
        $('.tasks').hide();
        $('.expedition').hide();
        $('.crafting').hide();
        $('.learning').hide();
        $('.shopping').hide();
        $('.competitions').show();
        $('.bonsai_details').hide();
        $('.bonsai_details_seedling').hide();
    });
}

/* Expedition Menu functions */
function ViewExNeighborhood() {
    $(document).ready(function(){
        $('#neighborhood').show();
        $('#neighborhood_mobile').show();
        $('#cityboundaries').hide();
        $('#cityboundaries_mobile').hide();
    });
}

function ViewExCityBoundaries() {
    $(document).ready(function(){
        $('#neighborhood').hide();
        $('#neighborhood_mobile').hide();
        $('#cityboundaries').show();
        $('#cityboundaries_mobile').show();
    });
}

/* Bonsai Detail View */
function ViewBonsai_Details(z) {
    if (x==1) {
        if (z==1) {
            ViewBonsai_Details2(bonsai001, 1) 
        }
        else if (z==2) {
            ViewBonsai_Details2(bonsai002, 2) 
        }
        else if (z==3) {
            ViewBonsai_Details2(bonsai003, 3)
        }
        else if (z==4) {
            ViewBonsai_Details2(bonsai004, 4)
        }
        else if (z==5) {
            ViewBonsai_Details2(bonsai005, 5)
        }
        else if (z==6) {
            ViewBonsai_Details2(bonsai006, 6)
        }
        else if (z==7) {
            ViewBonsai_Details2(bonsai007, 7)
        }
        else if (z==8) {
            ViewBonsai_Details2(bonsai008, 8)
        }
        else if (z==9) {
            ViewBonsai_Details2(bonsai009, 9)
        }
        else if (z==10) {
            ViewBonsai_Details2(bonsai010, 10)
        }
    } 
    else if (x==11) {
        if (z==1) {
            ViewBonsai_Details2(bonsai011, 11)
        }
        else if (z==2) {
            ViewBonsai_Details2(bonsai012, 12)
        }
        else if (z==3) {
            ViewBonsai_Details2(bonsai013, 13)
        }
        else if (z==4) {
            ViewBonsai_Details2(bonsai014, 14)
        }
        else if (z==5) {
            ViewBonsai_Details2(bonsai015, 15)
        }
        else if (z==6) {
            ViewBonsai_Details2(bonsai016, 16)
        } 
        else if (z==7) {
            ViewBonsai_Details2(bonsai017, 17)
        } 
        else if (z==8) {
            ViewBonsai_Details2(bonsai018, 18)
        } 
        else if (z==9) {
            ViewBonsai_Details2(bonsai019, 19)
        } 
        else if (z==10) {
            ViewBonsai_Details2(bonsai020, 20)
        } 
    }
}

function ViewBonsai_Details2(x, y) {
    if (x.treetype==0) {
        $(document).ready(function(){
            $('.bondex').hide();
            $('.tasks').hide();
            $('.expedition').hide();
            $('.crafting').hide();
            $('.learning').hide();
            $('.shopping').hide();
            $('.competitions').hide();
            $('.bonsai_details').hide();
            $('.bonsai_details_seedling').show();
        });
        state.bonsai_showing=y;
    }
    else {
        state.bonsai_showing=y;
        Bonsai_Details(x);
    }
}

/* Bonsai Detail Loadout */
function Bonsai_Details(bonsaixxx) {
    $(document).ready(function(){
        $('.bondex').hide();
        $('.tasks').hide();
        $('.expedition').hide();
        $('.crafting').hide();
        $('.learning').hide();
        $('.shopping').hide();
        $('.competitions').hide();
        $('.bonsai_details').show();
        $('.bonsai_details_seedling').hide();
        });
    Bonsai_Growing(bonsaixxx);
    PositionChangeBox();
    $(document).ready(function() {
        $("#positionn_batch").html("<option value='1000'>Select box</option><option value='1001'>Bonsai #01-#10</option><option value='1011'>Bonsai #11-#20</option>");
        $("#positionn_place").html("<option value='00'>Select box first</option>");
        $('#positionn_place2').hide();
    });
}

/* Bonsai Menu Change */
function menu_change(a) {
    if (a==1) {
        x = document.getElementById("menu").value;
        $('#menu').on('select2:select', function (e) {
            $('#menu_mobile').val(x);
            $('#menu_mobilexs').val(x);
            $('#menu_mobile').trigger('change');
            $('#menu_mobilexs').trigger('change');
        });
    }
    else if (a==2) {
        x = document.getElementById("menu_mobile").value;
        $('#menu_mobile').on('select2:select', function (e) {
            $('#menu').val(x);
            $('#menu_mobilexs').val(x);
            $('#menu').trigger('change');
            $('#menu_mobilexs').trigger('change');
        });
    }
    else if (a==3) {
        x = document.getElementById("menu_mobilexs").value;
        $('#menu_mobilexs').on('select2:select', function (e) {
            $('#menu').val(x);
            $('#menu_mobile').val(x);
            $('#menu').trigger('change');
            $('#menu_mobile').trigger('change');
        });
    }
    if (x==1) {
        fetchbonsaimenu("00", "01", bonsai001, bonsai002, bonsai003, bonsai004, bonsai005, bonsai006, bonsai007, bonsai008, bonsai009, bonsai010)
        fetchbonsaimenu_mobile("00", "01", bonsai001, bonsai002, bonsai003, bonsai004, bonsai005, bonsai006, bonsai007, bonsai008, bonsai009, bonsai010)
        fetchbonsaimenu_mobilexs("00", "01", bonsai001, bonsai002, bonsai003, bonsai004, bonsai005, bonsai006, bonsai007, bonsai008, bonsai009, bonsai010)
    }
    else if (x==11) {
        fetchbonsaimenu("01", "02", bonsai011, bonsai012, bonsai013, bonsai014, bonsai015, bonsai016, bonsai017, bonsai018, bonsai019, bonsai020)
        fetchbonsaimenu_mobile("01", "02", bonsai011, bonsai012, bonsai013, bonsai014, bonsai015, bonsai016, bonsai017, bonsai018, bonsai019, bonsai020)
        fetchbonsaimenu_mobilexs("01", "02", bonsai011, bonsai012, bonsai013, bonsai014, bonsai015, bonsai016, bonsai017, bonsai018, bonsai019, bonsai020)
    }
}

function menu_contests_change() {
    x_contests = document.getElementById("menu_contests").value;
    if (x_contests==1) {
        fetchbonsaimenu_contests("00", "01", bonsai001, bonsai002, bonsai003, bonsai004, bonsai005, bonsai006, bonsai007, bonsai008, bonsai009, bonsai010)
    }
    else if (x_contests==11) {
        fetchbonsaimenu_contests("01", "02", bonsai011, bonsai012, bonsai013, bonsai014, bonsai015, bonsai016, bonsai017, bonsai018, bonsai019, bonsai020)
    }
    contests_bonsaiunavailable();
}

function menu_shop_change(a) {
    if (a==1) {
        x_shop = document.getElementById("menu_shopping").value;
        $('#menu_shopping').on('select2:select', function (e) {
            $('#menu_shopping_mobile').val(x_shop);
            $('#menu_shopping_mobile').trigger('change');
        });
    }
    else if (a==2) {
        x_shop = document.getElementById("menu_shopping_mobile").value;
        $('#menu_shopping_mobile').on('select2:select', function (e) {
            $('#menu_shopping').val(x_shop);
            $('#menu_shopping').trigger('change');
        });
    }
    if (x_shop==1) {
        fetchbonsaimenu_shop("00", "01", bonsai001, bonsai002, bonsai003, bonsai004, bonsai005, bonsai006, bonsai007, bonsai008, bonsai009, bonsai010)
    }
    else if (x_shop==11) {
        fetchbonsaimenu_shop("01", "02", bonsai011, bonsai012, bonsai013, bonsai014, bonsai015, bonsai016, bonsai017, bonsai018, bonsai019, bonsai020)
    }
}

/* Crafting Menu functions */
function ViewCrCompost1() {
    $(document).ready(function(){
        $('#cr_compost1').show();
        $('#cr_compost1_mobile').show();
        $('#cr_robot1').hide();
        $('#cr_robot1_mobile').hide();
    });
}

function ViewCrRobot1() {
    $(document).ready(function(){
        $('#cr_compost1').hide();
        $('#cr_compost1_mobile').hide();
        $('#cr_robot1').show();
        $('#cr_robot1_mobile').show();
    });
}

/* Shopping Menu functions */
function ViewShopEquipment() {
    $(document).ready(function(){
        $('#shop_equipment').show();
        $('#shop_resources').hide();
        $('#shop_seedlings').hide();
        $('#shop_bonsais').hide();
        $('#shop_equipment_mobile').show();
        $('#shop_resources_mobile').hide();
        $('#shop_seedlings_mobile').hide();
        $('#shop_bonsais_mobile').hide();
    });
}

function ViewShopResources() {
    $(document).ready(function(){
        $('#shop_equipment').hide();
        $('#shop_resources').show();
        $('#shop_seedlings').hide();
        $('#shop_bonsais').hide();
        $('#shop_equipment_mobile').hide();
        $('#shop_resources_mobile').show();
        $('#shop_seedlings_mobile').hide();
        $('#shop_bonsais_mobile').hide();
    });
}

function ViewShopSeedlings() {
    $(document).ready(function(){
        $('#shop_equipment').hide();
        $('#shop_resources').hide();
        $('#shop_seedlings').show();
        $('#shop_bonsais').hide();
        $('#shop_equipment_mobile').hide();
        $('#shop_resources_mobile').hide();
        $('#shop_seedlings_mobile').show();
        $('#shop_bonsais_mobile').hide();
    });
}

function ViewShopBonsais() {
    $(document).ready(function(){
        $('#shop_equipment').hide();
        $('#shop_resources').hide();
        $('#shop_seedlings').hide();
        $('#shop_bonsais').show();
        $('#shop_equipment_mobile').hide();
        $('#shop_resources_mobile').hide();
        $('#shop_seedlings_mobile').hide();
        $('#shop_bonsais_mobile').show();
    });
}

/* You Menu functions */
function ViewStats() {
    $(document).ready(function(){
        $('#stats').show();
        $('#skill_treestyle1').hide();
        $('#skill_robot1').hide();
        $('#skill_compost1').hide();
        $('#skill_growing').hide();
        $('#skill_shaping').hide();
        $('#skill_patience').hide();
    });
}

function ViewSkillTreestyles1() {
    $(document).ready(function(){
        $('#stats').hide();
        $('#skill_treestyle1').show();
        $('#skill_robot1').hide();
        $('#skill_compost1').hide();
        $('#skill_growing').hide();
        $('#skill_shaping').hide();
        $('#skill_patience').hide();
    });
}

function ViewSkillRobot1() {
    $(document).ready(function(){
        $('#stats').hide();
        $('#skill_treestyle1').hide();
        $('#skill_robot1').show();
        $('#skill_compost1').hide();
        $('#skill_growing').hide();
        $('#skill_shaping').hide();
        $('#skill_patience').hide();
    });
}

function ViewSkillCompost1() {
    $(document).ready(function(){
        $('#stats').hide();
        $('#skill_treestyle1').hide();
        $('#skill_robot1').hide();
        $('#skill_compost1').show();
        $('#skill_growing').hide();
        $('#skill_shaping').hide();
        $('#skill_patience').hide();
    });
}

function ViewSkillGrowing() {
    $(document).ready(function(){
        $('#stats').hide();
        $('#skill_treestyle1').hide();
        $('#skill_robot1').hide();
        $('#skill_compost1').hide();
        $('#skill_growing').show();
        $('#skill_shaping').hide();
        $('#skill_patience').hide();
    });
}

function ViewSkillShaping() {
    $(document).ready(function(){
        $('#stats').hide();
        $('#skill_treestyle1').hide();
        $('#skill_robot1').hide();
        $('#skill_compost1').hide();
        $('#skill_growing').hide();
        $('#skill_shaping').show();
        $('#skill_patience').hide();
    });
}

function ViewSkillPatience() {
    $(document).ready(function(){
        $('#stats').hide();
        $('#skill_treestyle1').hide();
        $('#skill_robot1').hide();
        $('#skill_compost1').hide();
        $('#skill_growing').hide();
        $('#skill_shaping').hide();
        $('#skill_patience').show();
    });
}

/* Contests Menu functions */
function ViewClub_TTG01 () {
    $(document).ready(function(){
        $('#Club_TTG01').show();
        $('#Club_ST01').hide();
        $('#League_Area01').hide();
    });
}

function ViewClub_ST01 () {
    $(document).ready(function(){
        $('#Club_TTG01').hide();
        $('#Club_ST01').show();
        $('#League_Area01').hide();
    });
}

function ViewLeague_Area01 () {
    $(document).ready(function(){
        $('#Club_TTG01').hide();
        $('#Club_ST01').hide();
        $('#League_Area01').show();
    });
}

/* Collapsible Menus - Main menu: Opened at start*/
function toggleCollapsibleSectionWithAnimation() {
	this.classList.toggle("active");
	var buttonId = this.id;
	var sectionId = buttonId.replace("button","section");
	var content = document.getElementById(sectionId);
    var mHeight = window.getComputedStyle(content).maxHeight;
	if (mHeight !== "0px"){
        content.style.maxHeight = "0px";
    } 
    else {
        content.style.maxHeight = "100%";
	}
}

/* Collapsible Menus - Main menu: Closed at start*/
function toggleCollapsibleSectionWithAnimation2() {
	this.classList.toggle("active2");
	var buttonId = this.id;
	var sectionId = buttonId.replace("button","section");
	var content = document.getElementById(sectionId);
    var mHeight = window.getComputedStyle(content).maxHeight;
	if (mHeight !== "100%"){
        content.style.maxHeight = "100%";
    } 
    else {
        content.style.maxHeight = "0px";
	}
}

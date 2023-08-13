/* Header menu functions */
function ViewTasks() {
    $(document).ready(function(){
        $('.tasks').show();
        $('.expedition').hide();
        $('.crafting').hide();
        $('.learning').hide();
        $('.shopping').hide();
        $('.bonsai_details').hide();
        $('.bonsai_details_seedling').hide();
    });
}

function ViewExpedition() {
    $(document).ready(function(){
        $('.tasks').hide();
        $('.expedition').show();
        $('.crafting').hide();
        $('.learning').hide();
        $('.shopping').hide();
        $('.bonsai_details').hide();
        $('.bonsai_details_seedling').hide();
    });
}

function ViewCrafting() {
    $(document).ready(function(){
        $('.tasks').hide();
        $('.expedition').hide();
        $('.crafting').show();
        $('.learning').hide();
        $('.shopping').hide();
        $('.bonsai_details').hide();
        $('.bonsai_details_seedling').hide();
    });
}

function ViewLearning() {
    $(document).ready(function(){
        $('.tasks').hide();
        $('.expedition').hide();
        $('.crafting').hide();
        $('.learning').show();
        $('.shopping').hide();
        $('.bonsai_details').hide();
        $('.bonsai_details_seedling').hide();
    });
}

function ViewShopping() {
    $(document).ready(function(){
        $('.tasks').hide();
        $('.expedition').hide();
        $('.crafting').hide();
        $('.learning').hide();
        $('.shopping').show();
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
        $('.tasks').hide();
        $('.expedition').hide();
        $('.crafting').hide();
        $('.learning').hide();
        $('.shopping').hide();
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
        $('.tasks').hide();
        $('.expedition').hide();
        $('.crafting').hide();
        $('.learning').hide();
        $('.shopping').hide();
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
function menu_change() {
    x = document.getElementById("menu").value;
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

function menu_shop_change() {
    x_shop = document.getElementById("menu_shopping").value;
    if (x_shop==1) {
        fetchbonsaimenu_shop("00", "01", bonsai001, bonsai002, bonsai003, bonsai004, bonsai005, bonsai006, bonsai007, bonsai008, bonsai009, bonsai010)
    }
    else if (x_shop==11) {
        fetchbonsaimenu_shop("01", "02", bonsai011, bonsai012, bonsai013, bonsai014, bonsai015, bonsai016, bonsai017, bonsai018, bonsai019, bonsai020)
    }
}

/* Crafting Menu functions */
function ViewCrCompost() {
    $(document).ready(function(){
        $('#cr_compost').show();
        $('#cr_compost_mobile').show();
        $('#cr_robot').hide();
        $('#cr_robot_mobile').hide();
    });
}

function ViewCrRobot() {
    $(document).ready(function(){
        $('#cr_compost').hide();
        $('#cr_compost_mobile').hide();
        $('#cr_robot').show();
        $('#cr_robot_mobile').show();
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

/* Learning Menu functions */
function ViewSkillRobot() {
    $(document).ready(function(){
        $('#skill_robot').show();
        $('#skill_compost').hide();
        $('#skill_growing').hide();
        $('#skill_shaping').hide();
        $('#skill_patience').hide();
    });
}

function ViewSkillCompost() {
    $(document).ready(function(){
        $('#skill_robot').hide();
        $('#skill_compost').show();
        $('#skill_growing').hide();
        $('#skill_shaping').hide();
        $('#skill_patience').hide();
    });
}

function ViewSkillGrowing() {
    $(document).ready(function(){
        $('#skill_robot').hide();
        $('#skill_compost').hide();
        $('#skill_growing').show();
        $('#skill_shaping').hide();
        $('#skill_patience').hide();
    });
}

function ViewSkillShaping() {
    $(document).ready(function(){
        $('#skill_robot').hide();
        $('#skill_compost').hide();
        $('#skill_growing').hide();
        $('#skill_shaping').show();
        $('#skill_patience').hide();
    });
}

function ViewSkillPatience() {
    $(document).ready(function(){
        $('#skill_robot').hide();
        $('#skill_compost').hide();
        $('#skill_growing').hide();
        $('#skill_shaping').hide();
        $('#skill_patience').show();
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

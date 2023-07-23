var x=1;

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

/* Bonsai Detail View */
function ViewBonsai_Details(z) {
    if (x==1) {
        if (z==1) {
            if (bonsai11.treetype==0) {
                $(document).ready(function(){
                $('.tasks').hide();
                $('.expedition').hide();
                $('.crafting').hide();
                $('.learning').hide();
                $('.shopping').hide();
                $('.bonsai_details').hide();
                $('.bonsai_details_seedling').show();
                });
                state.bonsai_showing=1;
            }
            else {
                Bonsai_Details(bonsai11); 
                state.bonsai_showing=1;
            }
        }
        else if (z==2) {
            if (bonsai12.treetype==0) {
                $(document).ready(function(){
                $('.tasks').hide();
                $('.expedition').hide();
                $('.crafting').hide();
                $('.learning').hide();
                $('.shopping').hide();
                $('.bonsai_details').hide();
                $('.bonsai_details_seedling').show();
                });
                state.bonsai_showing=2;
            }
            else {
                Bonsai_Details(bonsai12); 
                state.bonsai_showing=2;
            }
        }
        else if (z==3) {
            if (bonsai13.treetype==0) {
                $(document).ready(function(){
                $('.tasks').hide();
                $('.expedition').hide();
                $('.crafting').hide();
                $('.learning').hide();
                $('.shopping').hide();
                $('.bonsai_details').hide();
                $('.bonsai_details_seedling').show();
                });
                state.bonsai_showing=3;
            }
            else {
                Bonsai_Details(bonsai13);
                state.bonsai_showing=3;
            }
        }
        else if (z==4) {
            if (bonsai14.treetype==0) {
                $(document).ready(function(){
                $('.tasks').hide();
                $('.expedition').hide();
                $('.crafting').hide();
                $('.learning').hide();
                $('.shopping').hide();
                $('.bonsai_details').hide();
                $('.bonsai_details_seedling').show();
                });
                state.bonsai_showing=4;
            }
            else {
                Bonsai_Details(bonsai14);
                state.bonsai_showing=4;
            }
        }
        else if (z==5) {
            if (bonsai15.treetype==0) {
                $(document).ready(function(){
                $('.tasks').hide();
                $('.expedition').hide();
                $('.crafting').hide();
                $('.learning').hide();
                $('.shopping').hide();
                $('.bonsai_details').hide();
                $('.bonsai_details_seedling').show();
                });
                state.bonsai_showing=5;
            }
            else {
                Bonsai_Details(bonsai15);
                state.bonsai_showing=5;
            }
        }
        else if (z==6) {
            if (bonsai16.treetype==0) {
                $(document).ready(function(){
                $('.tasks').hide();
                $('.expedition').hide();
                $('.crafting').hide();
                $('.learning').hide();
                $('.shopping').hide();
                $('.bonsai_details').hide();
                $('.bonsai_details_seedling').show();
                });
                state.bonsai_showing=6;
            }
            else {
                Bonsai_Details(bonsai16);
                state.bonsai_showing=6;
            }
        }
    } 
    else if (x==7) {
        if (z==1) {
            if (bonsai71.treetype==0) {
                $(document).ready(function(){
                $('.tasks').hide();
                $('.expedition').hide();
                $('.crafting').hide();
                $('.learning').hide();
                $('.shopping').hide();
                $('.bonsai_details').hide();
                $('.bonsai_details_seedling').show();
                });
                state.bonsai_showing=7;
            }
            else {
                Bonsai_Details(bonsai71);
                state.bonsai_showing=7;
            }
        }
        else if (z==2) {
            if (bonsai72.treetype==0) {
                $(document).ready(function(){
                $('.tasks').hide();
                $('.expedition').hide();
                $('.crafting').hide();
                $('.learning').hide();
                $('.shopping').hide();
                $('.bonsai_details').hide();
                $('.bonsai_details_seedling').show();
                });
                state.bonsai_showing=8;
            }
            else {
                Bonsai_Details(bonsai72);
                state.bonsai_showing=8;
            }
        }
        else if (z==3) {
            if (bonsai73.treetype==0) {
                $(document).ready(function(){
                $('.tasks').hide();
                $('.expedition').hide();
                $('.crafting').hide();
                $('.learning').hide();
                $('.shopping').hide();
                $('.bonsai_details').hide();
                $('.bonsai_details_seedling').show();
                });
                state.bonsai_showing=9;
            }
            else {
                Bonsai_Details(bonsai73);
                state.bonsai_showing=9;
            }
        }
        else if (z==4) {
            if (bonsai74.treetype==0) {
                $(document).ready(function(){
                $('.tasks').hide();
                $('.expedition').hide();
                $('.crafting').hide();
                $('.learning').hide();
                $('.shopping').hide();
                $('.bonsai_details').hide();
                $('.bonsai_details_seedling').show();
                });
                state.bonsai_showing=10;
            }
            else {
                Bonsai_Details(bonsai74);
                state.bonsai_showing=10;
            }
        }
        else if (z==5) {
            if (bonsai75.treetype==0) {
                $(document).ready(function(){
                $('.tasks').hide();
                $('.expedition').hide();
                $('.crafting').hide();
                $('.learning').hide();
                $('.shopping').hide();
                $('.bonsai_details').hide();
                $('.bonsai_details_seedling').show();
                });
                state.bonsai_showing=11;
            }
            else {
                Bonsai_Details(bonsai75);
                state.bonsai_showing=11;
            }
        }
        else if (z==6) {
            if (bonsai76.treetype==0) {
                $(document).ready(function(){
                $('.tasks').hide();
                $('.expedition').hide();
                $('.crafting').hide();
                $('.learning').hide();
                $('.shopping').hide();
                $('.bonsai_details').hide();
                $('.bonsai_details_seedling').show();
                });
                state.bonsai_showing=12;
            }
            else {
                Bonsai_Details(bonsai76);
                state.bonsai_showing=12;
            }
        } 
    }
}

/* Bonsai Detail Loadout */
function Bonsai_Details(bonsaixx) {
    $(document).ready(function(){
        $('.tasks').hide();
        $('.expedition').hide();
        $('.crafting').hide();
        $('.learning').hide();
        $('.shopping').hide();
        $('.bonsai_details').show();
        $('.bonsai_details_seedling').hide();
        });
    Bonsai_Growing(bonsaixx);
    PositionChangeBox();
    $(document).ready(function() {
        $("#positionn_batch").html("<option value='1000'>Select box</option><option value='1001'>Box 1 - Bonsai #01-#06</option><option value='1007'>Box 2 - Bonsai #07-#12</option>");
        $("#positionn_place").html("<option value='00'>Select box first</option>");
        $('#positionn_place2').hide();
    });
}

/* Bonsai Menu Change */
function menu_change() {
    x = document.getElementById("menu").value;
    if (x==1) {
        fetchbonsaimenu1()
    }
    else if (x==7) {
        fetchbonsaimenu7()
    }
}

function menu_shop_change() {
    x_shop = document.getElementById("menu_shopping").value;
    if (x_shop==1) {
        fetchbonsaimenu_shop1()
    }
    else if (x_shop==7) {
        fetchbonsaimenu_shop7()
    }
}

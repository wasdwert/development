window.onload = function () {
    $('#positionn_batch').select2({
            minimumResultsForSearch: Infinity
        });
    $('#menu').select2({
            minimumResultsForSearch: Infinity
        });
    $('#menu_shopping').select2({
            minimumResultsForSearch: Infinity
        });
    $('#neighborhood_time').select2({
            minimumResultsForSearch: Infinity
        });
    $('#cityboundaries_time').select2({
            minimumResultsForSearch: Infinity
        });
    
    menu_change();
    menu_shop_change();
    
    fetchimage_seedling ("a", seedling1);
    fetchimage_seedling ("b", seedling2);
    fetchimage_seedling ("c", seedling3);
    fetchimage_seedling ("d", seedling4);
    fetchimage_seedling ("e", seedling5);
    fetchimage_seedling ("f", seedling6);
    
    document.getElementById("skill_growing_nr").innerHTML = skills.growing+1;
    document.getElementById("skill_growing_level").innerHTML = skills.growing_level;
    document.getElementById("skill_growing_time").innerHTML = skillgrowingtime[skills.growing];
    document.getElementById("skill_shaping_nr").innerHTML = skills.shaping+1;
    document.getElementById("skill_shaping_level").innerHTML = skills.shaping_level;
    document.getElementById("skill_shaping_time").innerHTML = skillshapingtime[skills.shaping];
    
    document.getElementById("skilllevel").innerHTML = skills.level;
    document.getElementById("skillexp_left").innerHTML = skills.exp_nextlevel;
    document.getElementById("money").innerHTML = resources.money;
    document.getElementById("organic_waste").innerHTML = resources.organic_waste;
    document.getElementById("compost").innerHTML = resources.compost;
    document.getElementById("bolt").innerHTML = resources.bolt;
    document.getElementById("shop_bolt").innerHTML = resources.bolt;
    document.getElementById("metal").innerHTML = resources.metal;
    document.getElementById("shop_metal").innerHTML = resources.metal;
    document.getElementById("wire").innerHTML = resources.wire;
    document.getElementById("shop_wire").innerHTML = resources.wire;
    document.getElementById("board").innerHTML = resources.board;
    document.getElementById("shop_board").innerHTML = resources.board;
    
    w.postMessage('Start');
}
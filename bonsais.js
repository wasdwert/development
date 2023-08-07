/* Change name functions */
function ChangeName() {
    nname = document.getElementById("nname"); 
    newname = nname.value;
    document.getElementById("nname").innerText = newname;
    nname = newname.length;
    document.getElementById('nname').value = ''
    if (nname==0) {
    }
    else if (nname>=10) {
        document.getElementById("snack_message").innerText = "Name to long. No more than 9 characters allowed!";
        var snackb = document.getElementById("snackbar");
        snackb.className = "show";
        setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
    }
    else {
        SearchBonsaiShowing().name=newname;
        document.getElementById("bonsai_detail_name").innerHTML = SearchBonsaiShowing().name;
        menu_change();
        menu_shop_change();
    }
}

/* Change position functions */
function PositionChangeBox() {
    $(document).ready(function() {
        $("#positionn_batch").change(function() {
            var val = $(positionn_batch).val();
            if (val == "1000") {
                $('#positionn_place2').hide();
                $("#positionn_place").html("<option value='00'>Select box first</option>");
            } else if (val == "1001") {
                $('#positionn_place2').show();
                if (state.bonsai_showing==1) {
                    PostionChangeBox2 ("2", "002", "3", "003", "4", "004", "5", "005", "6", "006", "7", "007", "8", "008", "9", "009", "10", "010");
                }
                else if (state.bonsai_showing==2) {
                    PostionChangeBox2 ("1", "001", "3", "003", "4", "004", "5", "005", "6", "006", "7", "007", "8", "008", "9", "009", "10", "010");
                }
                else if (state.bonsai_showing==3) {
                    PostionChangeBox2 ("1", "001", "2", "002", "4", "004", "5", "005", "6", "006", "7", "007", "8", "008", "9", "009", "10", "010");
                }
                else if (state.bonsai_showing==4) {
                    PostionChangeBox2 ("1", "001", "2", "002", "3", "003", "5", "005", "6", "006", "7", "007", "8", "008", "9", "009", "10", "010");
                }
                else if (state.bonsai_showing==5) {
                    PostionChangeBox2 ("1", "001", "2", "002", "3", "003", "4", "004", "6", "006", "7", "007", "8", "008", "9", "009", "10", "010");
                }
                else if (state.bonsai_showing==6) {
                    PostionChangeBox2 ("1", "001", "2", "002", "3", "003", "4", "004", "5", "005", "7", "007", "8", "008", "9", "009", "10", "010");
                }
                else if (state.bonsai_showing==7) {
                    PostionChangeBox2 ("1", "001", "2", "002", "3", "003", "4", "004", "5", "005", "6", "006", "8", "008", "9", "009", "10", "010");
                }
                else if (state.bonsai_showing==8) {
                    PostionChangeBox2 ("1", "001", "2", "002", "3", "003", "4", "004", "5", "005", "6", "006", "7", "007", "9", "009", "10", "010");
                }
                else if (state.bonsai_showing==9) {
                    PostionChangeBox2 ("1", "001", "2", "002", "3", "003", "4", "004", "5", "005", "6", "006", "7", "007", "8", "008", "10", "010");
                }
                else if (state.bonsai_showing==10) {
                    PostionChangeBox2 ("1", "001", "2", "002", "3", "003", "4", "004", "5", "005", "6", "006", "7", "007", "8", "008", "9", "009");
                }
                else {
                    $("#positionn_place").html("<option value='0'>Select place1</option><option value='1'>001</option><option value='2'>002</option><option value='3'>003</option><option value='4'>004</option><option value='5'>005</option><option value='6'>006</option><option value='7'>007</option><option value='8'>008</option><option value='9'>009</option><option value='10'>010</option>");
                }
            } else if (val == "1011") {
                $('#positionn_place2').show();
                if (state.bonsai_showing==11) {
                    PostionChangeBox2 ("12", "012", "13", "013", "14", "014", "15", "015", "16", "016", "17", "017", "18", "018", "19", "019", "20", "020");
                }
                else if (state.bonsai_showing==12) {
                    PostionChangeBox2 ("11", "011", "13", "013", "14", "014", "15", "015", "16", "016", "17", "017", "18", "018", "19", "019", "20", "020");
                }
                else if (state.bonsai_showing==13) {
                    PostionChangeBox2 ("11", "011", "12", "012", "14", "014", "15", "015", "16", "016", "17", "017", "18", "018", "19", "019", "20", "020");
                }
                else if (state.bonsai_showing==14) {
                    PostionChangeBox2 ("11", "011", "12", "012", "13", "013", "15", "015", "16", "016", "17", "017", "18", "018", "19", "019", "20", "020");
                }
                else if (state.bonsai_showing==15) {
                    PostionChangeBox2 ("11", "011", "12", "012", "13", "013", "14", "014", "16", "016", "17", "017", "18", "018", "19", "019", "20", "020");
                }
                else if (state.bonsai_showing==16) {
                    PostionChangeBox2 ("11", "011", "12", "012", "13", "013", "14", "014", "15", "015", "17", "017", "18", "018", "19", "019", "20", "020");
                }
                else if (state.bonsai_showing==17) {
                    PostionChangeBox2 ("11", "011", "12", "012", "13", "013", "14", "014", "15", "015", "16", "016", "18", "018", "19", "019", "20", "020");
                }
                else if (state.bonsai_showing==18) {
                    PostionChangeBox2 ("11", "011", "12", "012", "13", "013", "14", "014", "15", "015", "16", "016", "17", "017", "19", "019", "20", "020");
                }
                else if (state.bonsai_showing==19) {
                    PostionChangeBox2 ("11", "011", "12", "012", "13", "013", "14", "014", "15", "015", "16", "016", "17", "017", "18", "018", "20", "020");
                }
                else if (state.bonsai_showing==20) {
                    PostionChangeBox2 ("11", "011", "12", "012", "13", "013", "14", "014", "15", "015", "16", "016", "17", "017", "18", "018", "19", "019");
                }
                else {
                    $("#positionn_place").html("<option value='0'>Select place2</option><option value='11'>011</option><option value='12'>012</option><option value='13'>013</option><option value='14'>014</option><option value='15'>015</option><option value='16'>016</option><option value='17'>017</option><option value='18'>018</option><option value='19'>019</option><option value='20'>020</option>");
                }
            }
        });
        $('#positionn_place').select2({
            templateResult: formatState,
            templateSelection: formatState,
            minimumResultsForSearch: Infinity
        });
    });
}

function PostionChangeBox2 (a, a2, b, b2, c, c2, d, d2, e, e2, f, f2, g, g2, h, h2, i, i2) {
    return $("#positionn_place").html("<option value='0'>Select place1</option><option value='"+a+"'>"+a2+"</option><option value='"+b+"'>"+b2+"</option><option value='"+c+"'>"+c2+"</option><option value='"+d+"'>"+d2+"</option><option value='"+e+"'>"+e2+"</option><option value='"+f+"'>"+f2+"</option><option value='"+g+"'>"+g2+"</option><option value='"+h+"'>"+h2+"</option><option value='"+i+"'>"+i2+"</option>");
}

function formatState (state) {
    if (!state.id) { return state.text; }
    if (state.text=="Select place1" || state.text=="Select place2") {
        var $state = $(
            '<span style="display:flex; align-items:center">Select place</span>'
        );
        return $state;
    }
    else if (state.text=="Select box first") {
        var $state = $(
            '<span style="display:flex; align-items:center">Select box first</span>'
        );
        return $state;
    }
    else {
        if (state.text==1) {
            nr=1;
            formatstateimage(bonsai001);
        }
        if (state.text==2) {
            nr=2;
            formatstateimage(bonsai002);
        }
        if (state.text==3) {
            nr=3;
            formatstateimage(bonsai003);
        }
        if (state.text==4) {
            nr=4;
            formatstateimage(bonsai004);
        }
        if (state.text==5) {
            nr=5;
            formatstateimage(bonsai005);
        }
        if (state.text==6) {
            nr=6;
            formatstateimage(bonsai006);
        }
        if (state.text==7) {
            nr=7;
            formatstateimage(bonsai007);
        }
        if (state.text==8) {
            nr=8;
            formatstateimage(bonsai008);
        }
        if (state.text==9) {
            nr=9;
            formatstateimage(bonsai009);
        }
        if (state.text==10) {
            nr=10;
            formatstateimage(bonsai010);
        }
        if (state.text==11) {
            nr=11;
            formatstateimage(bonsai011);
        }
        if (state.text==12) {
            nr=12;
            formatstateimage(bonsai012);
        }
        if (state.text==13) {
            nr=13;
            formatstateimage(bonsai013);
        }
        if (state.text==14) {
            nr=14;
            formatstateimage(bonsai014);
        }
        if (state.text==15) {
            nr=15;
            formatstateimage(bonsai015);
        }
        if (state.text==16) {
            nr=16;
            formatstateimage(bonsai016);
        }
        if (state.text==17) {
            nr=17;
            formatstateimage(bonsai017);
        }
        if (state.text==18) {
            nr=18;
            formatstateimage(bonsai018);
        }
        if (state.text==19) {
            nr=19;
            formatstateimage(bonsai019);
        }
        if (state.text==20) {
            nr=20;
            formatstateimage(bonsai020);
        }
        var $state = $(
            '<span style="display:flex; align-items:center">#'+ nr +'&nbsp;' + image +'&nbsp;'+ name +'&nbsp;Lv.&nbsp;'+ level +'&nbsp;CP&nbsp;'+ cp +'</span>'
        );
        return $state;
    }
 }

function formatstateimage(bonsaixx) {
    if (bonsaixx.treetype==0) {
        image='<img src="Images/b00r00.svg" width="25" height="25">';
    }
    else if (bonsaixx.treetype==1) {
        if (bonsaixx.treequality==1) {
            image='<img src="Images/b01r01.svg" width="25" height="25">';
        }
        else if (bonsaixx.treequality==2) {
            image='<img src="Images/b01r02.svg" width="25" height="25">';
        }
        else if (bonsaixx.treequality==3) {
            image='<img src="Images/b01r03.svg" width="25" height="25">';
        }
    }
    else if (bonsaixx.treetype==2) {
        if (bonsaixx.treequality==1) {
            image='<img src="Images/b02r01.svg" width="25" height="25">';
        }
        else if (bonsaixx.treequality==2) {
            image='<img src="Images/b02r02.svg" width="25" height="25">';
        }
        else if (bonsaixx.treequality==3) {
            image='<img src="Images/b02r03.svg" width="25" height="25">';
        }
    }
    else if (bonsaixx.treetype==3) {
        if (bonsaixx.treequality==1) {
            image='<img src="Images/b03r01.svg" width="25" height="25">';
        }
        else if (bonsaixx.treequality==2) {
            image='<img src="Images/b03r02.svg" width="25" height="25">';
        }
        else if (bonsaixx.treequality==3) {
            image='<img src="Images/b03r03.svg" width="25" height="25">';
        }
    }
    else if (bonsaixx.treetype==4) {
        if (bonsaixx.treequality==1) {
            image='<img src="Images/b04r01.svg" width="25" height="25">';
        }
        else if (bonsaixx.treequality==2) {
            image='<img src="Images/b04r02.svg" width="25" height="25">';
        }
        else if (bonsaixx.treequality==3) {
            image='<img src="Images/b04r03.svg" width="25" height="25">';
        }
    }
    name=bonsaixx.name;
    level=bonsaixx.level;
    cp=bonsaixx.foliage+bonsaixx.branches+bonsaixx.trunk+bonsaixx.roots;
}

function ChangePosition() {
    bonsaiplaceholder=SearchBonsaiShowing();
    if (x==1) {
        if (z==1) {
            bonsai001=SearchBonsaiReplacement();
        }
        else if (z==2) {
            bonsai002=SearchBonsaiReplacement();
        }
        else if (z==3) {
            bonsai003=SearchBonsaiReplacement();
        }
        else if (z==4) {
            bonsai004=SearchBonsaiReplacement();
        }
        else if (z==5) {
            bonsai005=SearchBonsaiReplacement();
        }
        else if (z==6) {
            bonsai006=SearchBonsaiReplacement();
        }
        else if (z==7) {
            bonsai007=SearchBonsaiReplacement();
        }
        else if (z==8) {
            bonsai008=SearchBonsaiReplacement();
        }
        else if (z==9) {
            bonsai009=SearchBonsaiReplacement();
        }
        else if (z==10) {
            bonsai010=SearchBonsaiReplacement();
        }
    }
    else if (x==11) {
        if (z==1) {
            bonsai011=SearchBonsaiReplacement();
        }
        else if (z==2) {
            bonsai012=SearchBonsaiReplacement();
        }
        else if (z==3) {
            bonsai013=SearchBonsaiReplacement();
        }
        else if (z==4) {
            bonsai014=SearchBonsaiReplacement();
        }
        else if (z==5) {
            bonsai015=SearchBonsaiReplacement();
        }
        else if (z==6) {
            bonsai016=SearchBonsaiReplacement();
        }
        else if (z==7) {
            bonsai017=SearchBonsaiReplacement();
        }
        else if (z==8) {
            bonsai018=SearchBonsaiReplacement();
        }
        else if (z==9) {
            bonsai019=SearchBonsaiReplacement();
        }
        else if (z==10) {
            bonsai020=SearchBonsaiReplacement();
        }
    }
    if (document.getElementById("positionn_place").value==1) {
        bonsai001=bonsaiplaceholder;
    }
    else if (document.getElementById("positionn_place").value==2) {
        bonsai002=bonsaiplaceholder;
    }
    else if (document.getElementById("positionn_place").value==3) {
        bonsai003=bonsaiplaceholder;
    }
    else if (document.getElementById("positionn_place").value==4) {
        bonsai004=bonsaiplaceholder;
    }
    else if (document.getElementById("positionn_place").value==5) {
        bonsai005=bonsaiplaceholder;
    }
    else if (document.getElementById("positionn_place").value==6) {
        bonsai006=bonsaiplaceholder;
    }
    else if (document.getElementById("positionn_place").value==7) {
        bonsai007=bonsaiplaceholder;
    }
    else if (document.getElementById("positionn_place").value==8) {
        bonsai008=bonsaiplaceholder;
    }
    else if (document.getElementById("positionn_place").value==9) {
        bonsai009=bonsaiplaceholder;
    }
    else if (document.getElementById("positionn_place").value==10) {
        bonsai010=bonsaiplaceholder;
    }
    else if (document.getElementById("positionn_place").value==11) {
        bonsai011=bonsaiplaceholder;
    }
    else if (document.getElementById("positionn_place").value==12) {
        bonsai012=bonsaiplaceholder;
    }
    else if (document.getElementById("positionn_place").value==13) {
        bonsai013=bonsaiplaceholder;
    }
    else if (document.getElementById("positionn_place").value==14) {
        bonsai014=bonsaiplaceholder;
    }
    else if (document.getElementById("positionn_place").value==15) {
        bonsai015=bonsaiplaceholder;
    }
    else if (document.getElementById("positionn_place").value==16) {
        bonsai016=bonsaiplaceholder;
    }
    else if (document.getElementById("positionn_place").value==17) {
        bonsai017=bonsaiplaceholder;
    }
    else if (document.getElementById("positionn_place").value==18) {
        bonsai018=bonsaiplaceholder;
    }
    else if (document.getElementById("positionn_place").value==19) {
        bonsai019=bonsaiplaceholder;
    }
    else if (document.getElementById("positionn_place").value==20) {
        bonsai020=bonsaiplaceholder;
    }
    
    if (SearchBonsaiShowing().treetype==0) {
        $(document).ready(function(){
            $('.tasks').hide();
            $('.expedition').hide();
            $('.crafting').hide();
            $('.learning').hide();
            $('.shopping').hide();
            $('.bonsai_details').hide();
            $('.bonsai_details_seedling').show();
            });
    }
    else {
        Bonsai_Growing(SearchBonsaiShowing());
        $(document).ready(function() {
            $("#positionn_batch").html("<option value='1000'>Select box</option><option value='1001'>Bonsai #01-#10</option><option value='1011'>Bonsai #11-#20</option>");
            $("#positionn_place").html("<option value='00'>Select box first</option>");
        });
    }
    $(document).ready(function() {
        $('#positionn_place2').hide();
    });
    menu_change();
    menu_shop_change();
}

function SearchBonsaiShowing() {
    if (x==1) {
        if (z==1) {
            return bonsai001;
        }
        else if (z==2) {
            return bonsai002;
        }
        else if (z==3) {
            return bonsai003;
        }
        else if (z==4) {
            return bonsai004;
        }
        else if (z==5) {
            return bonsai005;
        }
        else if (z==6) {
            return bonsai006;
        }
        else if (z==7) {
            return bonsai007;
        }
        else if (z==8) {
            return bonsai008;
        }
        else if (z==9) {
            return bonsai009;
        }
        else if (z==10) {
            return bonsai010;
        }
    }
    else if (x==11) {
        if (z==1) {
            return bonsai011;
        }
        else if (z==2) {
            return bonsai012;
        }
        else if (z==3) {
            return bonsai013;
        }
        else if (z==4) {
            return bonsai014;
        }
        else if (z==5) {
            return bonsai015;
        }
        else if (z==6) {
            return bonsai016;
        }
        else if (z==7) {
            return bonsai017;
        }
        else if (z==8) {
            return bonsai018;
        }
        else if (z==9) {
            return bonsai019;
        }
        else if (z==10) {
            return bonsai020;
        }
    }
}

function SearchBonsaiReplacement() {
    if (document.getElementById("positionn_place").value==1) {
        return bonsai001;
    }
    else if (document.getElementById("positionn_place").value==2) {
        return bonsai002;
    }
    else if (document.getElementById("positionn_place").value==3) {
        return bonsai003;
    }
    else if (document.getElementById("positionn_place").value==4) {
        return bonsai004;
    }
    else if (document.getElementById("positionn_place").value==5) {
        return bonsai005;
    }
    else if (document.getElementById("positionn_place").value==6) {
        return bonsai006;
    }
    else if (document.getElementById("positionn_place").value==7) {
        return bonsai007;
    }
    else if (document.getElementById("positionn_place").value==8) {
        return bonsai008;
    }
    else if (document.getElementById("positionn_place").value==9) {
        return bonsai009;
    }
    else if (document.getElementById("positionn_place").value==10) {
        return bonsai010;
    }
    else if (document.getElementById("positionn_place").value==11) {
        return bonsai011;
    }
    else if (document.getElementById("positionn_place").value==12) {
        return bonsai012;
    }
    else if (document.getElementById("positionn_place").value==13) {
        return bonsai013;
    }
    else if (document.getElementById("positionn_place").value==14) {
        return bonsai014;
    }
    else if (document.getElementById("positionn_place").value==15) {
        return bonsai015;
    }
    else if (document.getElementById("positionn_place").value==16) {
        return bonsai016;
    }
    else if (document.getElementById("positionn_place").value==17) {
        return bonsai017;
    }
    else if (document.getElementById("positionn_place").value==18) {
        return bonsai018;
    }
    else if (document.getElementById("positionn_place").value==19) {
        return bonsai019;
    }
    else if (document.getElementById("positionn_place").value==20) {
        return bonsai020;
    }
}

/* Seedling Planting functions */
function ChooseSeedling(x) {
    if (x==1) {
        ChooseSeedling2(seedling1, seedling2, seedling3, seedling4, seedling5, seedling6, "a", "b", "c", "d", "e", "f", seedlingb_center, seedlingc_center, seedlingd_center, seedlinge_center, seedlingf_center, seedlingb_center_mobile, seedlingc_center_mobile, seedlingd_center_mobile, seedlinge_center_mobile, seedlingf_center_mobile)
    }
    else if (x==2) {
        ChooseSeedling2(seedling2, seedling1, seedling3, seedling4, seedling5, seedling6, "b", "a", "c", "d", "e", "f", seedlinga_center, seedlingc_center, seedlingd_center, seedlinge_center, seedlingf_center, seedlinga_center_mobile, seedlingc_center_mobile, seedlingd_center_mobile, seedlinge_center_mobile, seedlingf_center_mobile)
    }
    else if (x==3) {
        ChooseSeedling2(seedling3, seedling1, seedling2, seedling4, seedling5, seedling6, "c", "a", "b", "d", "e", "f", seedlinga_center, seedlingb_center, seedlingd_center, seedlinge_center, seedlingf_center, seedlinga_center_mobile, seedlingb_center_mobile, seedlingd_center_mobile, seedlinge_center_mobile, seedlingf_center_mobile)
    }
    else if (x==4) {
        ChooseSeedling2(seedling4, seedling1, seedling2, seedling3, seedling5, seedling6, "d", "a", "b", "c", "e", "f", seedlinga_center, seedlingb_center, seedlingc_center, seedlinge_center, seedlingf_center, seedlinga_center_mobile, seedlingb_center_mobile, seedlingc_center_mobile, seedlinge_center_mobile, seedlingf_center_mobile)
    }
    else if (x==5) {
        ChooseSeedling2(seedling5, seedling1, seedling2, seedling3, seedling4, seedling6, "e", "a", "b", "c", "d", "f", seedlinga_center, seedlingb_center, seedlingc_center, seedlingd_center, seedlingf_center, seedlinga_center_mobile, seedlingb_center_mobile, seedlingc_center_mobile, seedlingd_center_mobile, seedlingf_center_mobile)
    }
    else if (x==6) {
        ChooseSeedling2(seedling6, seedling1, seedling2, seedling3, seedling4, seedling5, "f", "a", "b", "c", "d", "e", seedlinga_center, seedlingb_center, seedlingc_center, seedlingd_center, seedlinge_center, seedlinga_center_mobile, seedlingb_center_mobile, seedlingc_center_mobile, seedlingd_center_mobile, seedlinge_center_mobile)
    }
}

function ChooseSeedling2 (seedling1, seedling2, seedling3, seedling4, seedling5, seedling6, a, b, c, d, e, f, seedling1_center, seedling2_center, seedling3_center, seedling4_center, seedling5_center, seedling1_center_mobile, seedling2_center_mobile, seedling3_center_mobile, seedling4_center_mobile, seedling5_center_mobile) {
    if (seedling1.treetype==0) {
        document.getElementById("snack_message").innerText = "No seedling available";
        var snackb = document.getElementById("snackbar");
        snackb.className = "show";
        setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
    } 
    else {
        if (seedling2.planting_choosen==1 || seedling3.planting_choosen==1 || seedling4.planting_choosen==1 || seedling5.planting_choosen==1 || seedling6.planting_choosen==1) {
            document.getElementById("snack_message").innerText = "Only one seedling can be choosen to plant";
            var snackb = document.getElementById("snackbar");
            snackb.className = "show";
            setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
            }
        else {
            if (seedling1.planting_choosen==0) {
                document.getElementById("seedling"+a+"_center").style.backgroundColor= "#bbb";
                seedling1_center.className = "";
                seedling2_center.className = "";
                seedling3_center.className = "";
                seedling4_center.className = "";
                seedling5_center.className = "";
                document.getElementById("seedling"+b+"_center").style.cursor= "auto";
                document.getElementById("seedling"+c+"_center").style.cursor= "auto";
                document.getElementById("seedling"+d+"_center").style.cursor= "auto";
                document.getElementById("seedling"+e+"_center").style.cursor= "auto";
                document.getElementById("seedling"+f+"_center").style.cursor= "auto";
                document.getElementById("seedling"+a+"_center_mobile").style.backgroundColor= "#bbb";
                seedling1_center_mobile.className = "";
                seedling2_center_mobile.className = "";
                seedling3_center_mobile.className = "";
                seedling4_center_mobile.className = "";
                seedling5_center_mobile.className = "";
                document.getElementById("seedling"+b+"_center_mobile").style.cursor= "auto";
                document.getElementById("seedling"+c+"_center_mobile").style.cursor= "auto";
                document.getElementById("seedling"+d+"_center_mobile").style.cursor= "auto";
                document.getElementById("seedling"+e+"_center_mobile").style.cursor= "auto";
                document.getElementById("seedling"+f+"_center_mobile").style.cursor= "auto";
                seedling1.planting_choosen=1;
                $(document).ready(function(){
                    $('#menu_style').show();
                    $('#menu_style_mobile').show();
                });
            }
            else {
                document.getElementById("seedling"+a+"_center").style.backgroundColor= "#f1f1f1";
                document.getElementById("seedling"+a+"_center_mobile").style.backgroundColor= "#f1f1f1";
                if (seedling2.treetype>0) {
                    seedlingb_center.className = "darker_grey";
                    seedlingb_center_mobile.className = "darker_grey";
                    document.getElementById("seedling"+b+"_center").style.cursor= "pointer";
                    document.getElementById("seedling"+b+"_center_mobile").style.cursor= "pointer";
                }
                if (seedling3.treetype>0) {
                    seedlingc_center.className = "darker_grey";
                    seedlingc_center_mobile.className = "darker_grey";
                    document.getElementById("seedling"+c+"_center").style.cursor= "pointer";
                    document.getElementById("seedling"+c+"_center_mobile").style.cursor= "pointer";
                }
                if (seedling4.treetype>0) {
                    seedlingd_center.className = "darker_grey";
                    seedlingd_center_mobile.className = "darker_grey";
                    document.getElementById("seedling"+d+"_center").style.cursor= "pointer";
                    document.getElementById("seedling"+d+"_center_mobile").style.cursor= "pointer";
                }
                if (seedling5.treetype>0) {
                    seedlinge_center.className = "darker_grey";
                    seedlinge_center_mobile.className = "darker_grey";
                    document.getElementById("seedling"+e+"_center").style.cursor= "pointer";
                    document.getElementById("seedling"+e+"_center_mobile").style.cursor= "pointer";
                }
                if (seedling6.treetype>0) {
                    seedlingf_center.className = "darker_grey";
                    seedlingf_center_mobile.className = "darker_grey";
                    document.getElementById("seedling"+f+"_center").style.cursor= "pointer";
                    document.getElementById("seedling"+f+"_center_mobile").style.cursor= "pointer";
                }
                seedling1.planting_choosen=0; 
                seedling1.styletype=0;
                $(document).ready(function(){
                    $('#menu_style').hide();
                    $('#menu_style_mobile').hide();
                });
                document.getElementById('menu_style').value="0";
                document.getElementById('menu_style_mobile').value="0";
                document.getElementById("seedling_detail_type").innerHTML = '<img src="Images/pot.svg" width="100" height="100">';
                document.getElementById("seedling_detail_type_mobile").innerHTML = '<img src="Images/pot.svg" width="100" height="100">';
            }
        }
    }
}

function style_change (x) {
    if (x==1) {
        document.getElementById('menu_style_mobile').value=document.getElementById('menu_style').value
        if (seedling1.planting_choosen==1) {
            style_change2 (seedling1);
        }
        else if (seedling2.planting_choosen==1) {
            style_change2 (seedling2);
        }
        else if (seedling3.planting_choosen==1) {
            style_change2 (seedling3);
        }
        else if (seedling4.planting_choosen==1) {
            style_change2 (seedling4);
        }
        else if (seedling5.planting_choosen==1) {
            style_change2 (seedling5);
        }
        else if (seedling6.planting_choosen==1) {
            style_change2 (seedling6);
        }
    }
    else if (x==2) {
        document.getElementById('menu_style').value=document.getElementById('menu_style_mobile').value
        if (seedling1.planting_choosen==1) {
            style_change2 (seedling1);
        }
        else if (seedling2.planting_choosen==1) {
            style_change2 (seedling2);
        }
        else if (seedling3.planting_choosen==1) {
            style_change2 (seedling3);
        }
        else if (seedling4.planting_choosen==1) {
            style_change2 (seedling4);
        }
        else if (seedling5.planting_choosen==1) {
            style_change2 (seedling5);
        }
        else if (seedling6.planting_choosen==1) {
            style_change2 (seedling6);
        }
    }
}

function style_change2 (x) {
    if (document.getElementById('menu_style_mobile').value==1) {
        x.styletype=1;
        document.getElementById("seedling_detail_type").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, x, "100", "100");
        document.getElementById("seedling_detail_type_mobile").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, x, "100", "100");
    }
    else if (document.getElementById('menu_style_mobile').value==2) {
        x.styletype=2;
        document.getElementById("seedling_detail_type").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, x, "100", "100");
        document.getElementById("seedling_detail_type_mobile").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, x, "100", "100");
    }
    else if (document.getElementById('menu_style_mobile').value==3) {
        x.styletype=3;
        document.getElementById("seedling_detail_type").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, x, "100", "100");
        document.getElementById("seedling_detail_type_mobile").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, x, "100", "100");
    }
}

function PlantSeedling() {
    if (state.workers_available>0) {
        if (worker01.busy==0) {
            PlantSeedling2(worker01);
        } 
        else if (worker02.busy==0) {
            PlantSeedling2(worker02);
        }
        else if (worker03.busy==0) {
            PlantSeedling2(worker03);
        }
    }
    else {
        document.getElementById("snack_message").innerText = "No workers available";
        var snackb = document.getElementById("snackbar");
        snackb.className = "show";
        setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
    }   
}

function PlantSeedling2(worker) {
    if (seedling1.planting_choosen==1) {
        if (seedling1.styletype>0) {
            PlantSeedlingPick(seedling1, worker);
        }
        else {
            document.getElementById("snack_message").innerText = "Choose a style for your bonsai first";
            var snackb = document.getElementById("snackbar");
            snackb.className = "show";
            setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
        }  
    }
    else if (seedling2.planting_choosen==1) {
        if (seedling2.styletype>0) {
            PlantSeedlingPick(seedling2, worker);
        }
        else {
            document.getElementById("snack_message").innerText = "Choose a style for your bonsai first";
            var snackb = document.getElementById("snackbar");
            snackb.className = "show";
            setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
        }  
    }
    else if (seedling3.planting_choosen==1) {
        if (seedling3.styletype>0) {
            PlantSeedlingPick(seedling3, worker);
        }
        else {
            document.getElementById("snack_message").innerText = "Choose a style for your bonsai first";
            var snackb = document.getElementById("snackbar");
            snackb.className = "show";
            setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
        }  
    }
    else if (seedling4.planting_choosen==1) {
        if (seedling4.styletype>0) {
            PlantSeedlingPick(seedling4, worker);
        }
        else {
            document.getElementById("snack_message").innerText = "Choose a style for your bonsai first";
            var snackb = document.getElementById("snackbar");
            snackb.className = "show";
            setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
        }  
    }
    else if (seedling5.planting_choosen==1) {
        if (seedling5.styletype>0) {
            PlantSeedlingPick(seedling5, worker);
        }
        else {
            document.getElementById("snack_message").innerText = "Choose a style for your bonsai first";
            var snackb = document.getElementById("snackbar");
            snackb.className = "show";
            setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
        }  
    }
    else if (seedling6.planting_choosen==1) {
        if (seedling6.styletype>0) {
            PlantSeedlingPick(seedling6, worker);
        }
        else {
            document.getElementById("snack_message").innerText = "Choose a style for your bonsai first";
            var snackb = document.getElementById("snackbar");
            snackb.className = "show";
            setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
        }  
    }
    else {
        document.getElementById("snack_message").innerText = "Choose a seedling to plant first";
        var snackb = document.getElementById("snackbar");
        snackb.className = "show";
        setTimeout(function(){ snackb.className = snackb.className.replace("show", ""); }, 3000);
    }
}

function PlantSeedlingPick(seedlingX, worker) {
    if (x==1) {
        if (z==1) {
            state.bonsai_showing==1;
            worker.growing = 1;
            PlantSeedlingExecution(bonsai001, seedlingX, worker);
        }
        else if (z==2) {
            state.bonsai_showing==2;
            worker.growing = 2;
            PlantSeedlingExecution(bonsai002, seedlingX, worker);
        }
        else if (z==3) {
            state.bonsai_showing==3;
            worker.growing = 3;
            PlantSeedlingExecution(bonsai003, seedlingX, worker);
        }
        else if (z==4) {
            state.bonsai_showing==4;
            worker.growing = 4;
            PlantSeedlingExecution(bonsai004, seedlingX, worker);
        }
        else if (z==5) {
            state.bonsai_showing==5;
            worker.growing = 5;
            PlantSeedlingExecution(bonsai005, seedlingX, worker);
        }
        else if (z==6) {
            state.bonsai_showing==6;
            worker.growing = 6;
            PlantSeedlingExecution(bonsai006, seedlingX, worker);
        }
        else if (z==7) {
            state.bonsai_showing==7;
            worker.growing = 7;
            PlantSeedlingExecution(bonsai007, seedlingX, worker);
        }
        else if (z==8) {
            state.bonsai_showing==8;
            worker.growing = 8;
            PlantSeedlingExecution(bonsai008, seedlingX, worker);
        }
        else if (z==9) {
            state.bonsai_showing==9;
            worker.growing = 9;
            PlantSeedlingExecution(bonsai009, seedlingX, worker);
        }
        else if (z==10) {
            state.bonsai_showing==10;
            worker.growing = 10;
            PlantSeedlingExecution(bonsai010, seedlingX, worker);
        }
    }
    else if (x==11) {
        if (z==1) {
            state.bonsai_showing==11;
            worker.growing = 11;
            PlantSeedlingExecution(bonsai011, seedlingX, worker);
        }
        else if (z==2) {
            state.bonsai_showing==12;
            worker.growing = 12;
            PlantSeedlingExecution(bonsai012, seedlingX, worker);
        }
        else if (z==3) {
            state.bonsai_showing==13;
            worker.growing = 13;
            PlantSeedlingExecution(bonsai013, seedlingX, worker);
        }
        else if (z==4) {
            state.bonsai_showing==14;
            worker.growing = 14;
            PlantSeedlingExecution(bonsai014, seedlingX, worker);
        }
        else if (z==5) {
            state.bonsai_showing==15;
            worker.growing = 15;
            PlantSeedlingExecution(bonsai015, seedlingX, worker);
        }
        else if (z==6) {
            state.bonsai_showing==16;
            worker.growing = 16;
            PlantSeedlingExecution(bonsai016, seedlingX, worker);
        }
        else if (z==7) {
            state.bonsai_showing==17;
            worker.growing = 17;
            PlantSeedlingExecution(bonsai017, seedlingX, worker);
        }
        else if (z==8) {
            state.bonsai_showing==18;
            worker.growing = 18;
            PlantSeedlingExecution(bonsai018, seedlingX, worker);
        }
        else if (z==9) {
            state.bonsai_showing==19;
            worker.growing = 19;
            PlantSeedlingExecution(bonsai019, seedlingX, worker);
        }
        else if (z==10) {
            state.bonsai_showing==20;
            worker.growing = 20;
            PlantSeedlingExecution(bonsai020, seedlingX, worker);
        }
    }
}

function treename (seedlingx) {
    if (seedlingx.treetype==1) {
        return treename2 (seedlingx, 'MR');
    }
    else if (seedlingx.treetype==2) {
        return treename2 (seedlingx, 'DE');
    }
    else if (seedlingx.treetype==3) {
        return treename2 (seedlingx, 'YB');
    }
    else if (seedlingx.treetype==4) {
        return treename2 (seedlingx, 'OT');
    }
    else if (seedlingx.treetype==5) {
        return treename2 (seedlingx, 'HI');
    }
}

function treename2 (seedlingx, a) {
    if (seedlingx.styletype==1) {
        return a+idstring.toString().padStart(5, '0')+'CH';
    }
    else if (seedlingx.styletype==2) {
        return a+idstring.toString().padStart(5, '0')+'MO';
    }
    else if (seedlingx.styletype==3) {
        return a+idstring.toString().padStart(5, '0')+'SK';
    }
    else if (seedlingx.styletype==4) {
        return a+idstring.toString().padStart(5, '0')+'HA';
    }
    else if (seedlingx.styletype==5) {
        return a+idstring.toString().padStart(5, '0')+'SO';
    }
    else if (seedlingx.styletype==6) {
        return a+idstring.toString().padStart(5, '0')+'KE';
    }
    else if (seedlingx.styletype==7) {
        return a+idstring.toString().padStart(5, '0')+'KA';
    }
}

function PlantSeedlingExecution(bonsaixx, seedlingx, worker) {
    state.workers_available -=1;
    worker.busy = 1;
    bonsaixx.id = statistics.bonsais_total+1;
    idstring=bonsaixx.id;
    bonsaixx.name = treename(seedlingx);
    bonsaixx.idstring = bonsaixx.name;
    bonsaixx.treetype = seedlingx.treetype;
    bonsaixx.treetypegroup = seedlingx.treetypegroup;
    bonsaixx.styletype = seedlingx.styletype;
    bonsaixx.treequality = seedlingx.treequality;
    bonsaixx.shiny = seedlingx.shiny;
    bonsaixx.nature = naturerandom();
    bonsaixx.level = 0;
    bonsaixx.foliage = 0;
    bonsaixx.branches = 0;
    bonsaixx.trunk = 0;
    bonsaixx.roots = 0;
    bonsaixx.growing = 1;
    bonsaixx.price = bonsaixx.level*bonsaixx.treetypegroup*bonsaixx.treequality;
    bonsaixx.level_new +=1;
    if (bonsaixx.treequality==1) {
        bonsaixx.growing_zeit = grow_time_tq1[bonsaixx.level];
        cpdistribution(bonsaixx, level_cp_tq1)
        cpdistributionaftercare(bonsaixx);
    }
    else if (bonsaixx.treequality==2) {
        bonsaixx.growing_zeit = grow_time_tq2[bonsaixx.level];
        cpdistribution(bonsaixx, level_cp_tq2)
        cpdistributionaftercare(bonsaixx);
    }
    else if (bonsaixx.treequality==3) {
        bonsaixx.growing_zeit = grow_time_tq3[bonsaixx.level];
        cpdistribution(bonsaixx, level_cp_tq3)
        cpdistributionaftercare(bonsaixx);
    }
    
    if (worker==worker01) {
        document.getElementById("zeit_worker01").innerHTML = "("+bonsaixx.growing_zeit+"&nbsp;seconds left)";
        document.getElementById("worker1_task").innerHTML = '<img src="Images/growing.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Growing';
        document.getElementById("worker1_task_mobile").innerHTML = '<img src="Images/growing.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Growing'; 
        document.getElementById("worker1_task_mobilexs").innerHTML = '<img src="Images/growing.svg" width="20" height="20">'; 
    }
    else if (worker==worker02) {
        document.getElementById("zeit_worker02").innerHTML = "("+bonsaixx.growing_zeit+"&nbsp;seconds left)";
        document.getElementById("worker2_task").innerHTML = '<img src="Images/growing.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Growing'; 
        document.getElementById("worker2_task_mobile").innerHTML = '<img src="Images/growing.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Growing';
        document.getElementById("worker2_task_mobilexs").innerHTML = '<img src="Images/growing.svg" width="20" height="20">';
    }
    else if (worker==worker03) {
        document.getElementById("zeit_worker03").innerHTML = "("+bonsaixx.growing_zeit+"&nbsp;seconds left)";
        document.getElementById("worker3_task").innerHTML = '<img src="Images/growing.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Growing'; 
        document.getElementById("worker3_task_mobile").innerHTML = '<img src="Images/growing.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Growing';
        document.getElementById("worker3_task_mobilexs").innerHTML = '<img src="Images/growing.svg" width="20" height="20">';
    }
    
    Bonsai_Details(bonsaixx);
    
    menu_change();
    menu_shop_change();
    
    state.seedlings -=1;
    state.seedlings_ontheway -=1;
    document.getElementById("seedling_number").innerText = state.seedlings.toLocaleString('en', {minimumFractionDigits: 0});
    $(document).ready(function(){
        $('#menu_style').hide();
        $('#menu_style_mobile').hide();
    });
    document.getElementById('menu_style').value="0";
    document.getElementById('menu_style_mobile').value="0";
    document.getElementById("seedling_detail_type").innerHTML = '<img src="Images/pot.svg" width="100" height="100">';
    document.getElementById("seedling_detail_type_mobile").innerHTML = '<img src="Images/pot.svg" width="100" height="100">';        
    if (seedling1.planting_choosen==1) {
        seedling1.id=0;
        seedling1.treetype=0;
        seedling1.treetypegroup=0;
        seedling1.styletype=0;
        seedling1.treequality=0;
        seedling1.shiny=0;
        seedling1.price=0;
        document.getElementById("seedlinga_price_sell").innerHTML = seedling1.price;
        fetchimage_seedling ("a", seedling1);
        document.getElementById("seedlinga_center").style.cursor= "auto"; 
        seedlinga_center.className = "";
        document.getElementById("seedlinga_center_mobile").style.cursor= "auto"; 
        seedlinga_center_mobile.className = "";
        PlantSeedlingReset()
    }
    else if (seedling2.planting_choosen==1) {
        seedling2.id=0;
        seedling2.treetype=0;
        seedling2.treetypegroup=0;
        seedling2.styletype=0;
        seedling2.treequality=0;
        seedling2.shiny=0;
        seedling2.price=0;
        document.getElementById("seedlingb_price_sell").innerHTML = seedling2.price;
        fetchimage_seedling ("b", seedling2);
        document.getElementById("seedlingb_center").style.cursor= "auto"; 
        seedlingb_center.className = "";
        document.getElementById("seedlingb_center_mobile").style.cursor= "auto"; 
        seedlingb_center_mobile.className = "";
        PlantSeedlingReset()
    }
    else if (seedling3.planting_choosen==1) {
        seedling3.id=0;
        seedling3.treetype=0;
        seedling3.treetypegroup=0;
        seedling3.styletype=0;
        seedling3.treequality=0;
        seedling3.shiny=0;
        seedling3.price=0;
        document.getElementById("seedlingc_price_sell").innerHTML = seedling3.price;
        fetchimage_seedling ("c", seedling3);
        document.getElementById("seedlingc_center").style.cursor= "auto"; 
        seedlingc_center.className = "";
        document.getElementById("seedlingc_center_mobile").style.cursor= "auto"; 
        seedlingc_center_mobile.className = "";
        PlantSeedlingReset()
    }
    else if (seedling4.planting_choosen==1) {
        seedling4.id=0;
        seedling4.treetype=0;
        seedling4.treetypegroup=0;
        seedling4.styletype=0;
        seedling4.treequality=0;
        seedling4.shiny=0;
        seedling4.price=0;
        document.getElementById("seedlingd_price_sell").innerHTML = seedling4.price;
        fetchimage_seedling ("d", seedling4);
        document.getElementById("seedlingd_center").style.cursor= "auto"; 
        seedlingd_center.className = "";
        document.getElementById("seedlingd_center_mobile").style.cursor= "auto"; 
        seedlingd_center_mobile.className = "";
        PlantSeedlingReset()
    }
    else if (seedling5.planting_choosen==1) {
        seedling5.id=0;
        seedling5.treetype=0;
        seedling5.treetypegroup=0;
        seedling5.styletype=0;
        seedling5.treequality=0;
        seedling5.shiny=0;
        seedling5.price=0;
        document.getElementById("seedlinge_price_sell").innerHTML = seedling5.price;
        fetchimage_seedling ("e", seedling5);
        document.getElementById("seedlinge_center").style.cursor= "auto"; 
        seedlinge_center.className = "";
        document.getElementById("seedlinge_center_mobile").style.cursor= "auto"; 
        seedlinge_center_mobile.className = "";
        PlantSeedlingReset()
    }
    else if (seedling6.planting_choosen==1) {
        seedling6.id=0;
        seedling6.treetype=0;
        seedling6.treetypegroup=0;
        seedling6.styletype=0;
        seedling6.treequality=0;
        seedling6.shiny=0;
        seedling6.price=0;
        document.getElementById("seedlingf_price_sell").innerHTML = seedling6.price;
        fetchimage_seedling ("f", seedling6);
        document.getElementById("seedlingf_center").style.cursor= "auto"; 
        seedlingf_center.className = "";
        document.getElementById("seedlingf_center_mobile").style.cursor= "auto"; 
        seedlingf_center_mobile.className = "";
        PlantSeedlingReset()
    }
}

function PlantSeedlingReset() {
    seedling1.planting_choosen=0;
    document.getElementById("seedlinga_center").style.backgroundColor= "#f1f1f1";
    document.getElementById("seedlinga_center_mobile").style.backgroundColor= "#f1f1f1";
    seedling2.planting_choosen=0;
    document.getElementById("seedlingb_center").style.backgroundColor= "#f1f1f1";
    document.getElementById("seedlingb_center_mobile").style.backgroundColor= "#f1f1f1";
    seedling3.planting_choosen=0;
    document.getElementById("seedlingc_center").style.backgroundColor= "#f1f1f1";
    document.getElementById("seedlingc_center_mobile").style.backgroundColor= "#f1f1f1";
    seedling4.planting_choosen=0;
    document.getElementById("seedlingd_center").style.backgroundColor= "#f1f1f1";    
    document.getElementById("seedlingd_center_mobile").style.backgroundColor= "#f1f1f1";
    seedling5.planting_choosen=0;
    document.getElementById("seedlinge_center").style.backgroundColor= "#f1f1f1";       
    document.getElementById("seedlinge_center_mobile").style.backgroundColor= "#f1f1f1";  
    seedling6.planting_choosen=0;
    document.getElementById("seedlingf_center").style.backgroundColor= "#f1f1f1";       
    document.getElementById("seedlingf_center_mobile").style.backgroundColor= "#f1f1f1";          
    if (seedling1.treetype>0) {
        document.getElementById("seedlinga_center").style.cursor= "pointer";
        seedlinga_center.className = "darker_grey";
        document.getElementById("seedlinga_center_mobile").style.cursor= "pointer";
        seedlinga_center_mobile.className = "darker_grey";
    }
    if (seedling2.treetype>0) {
        document.getElementById("seedlingb_center").style.cursor= "pointer";
        seedlingb_center.className = "darker_grey";
        document.getElementById("seedlingb_center_mobile").style.cursor= "pointer";
        seedlingb_center_mobile.className = "darker_grey";
    } 
    if (seedling3.treetype>0) {
        document.getElementById("seedlingc_center").style.cursor= "pointer";
        seedlingc_center.className = "darker_grey";
        document.getElementById("seedlingc_center_mobile").style.cursor= "pointer";
        seedlingc_center_mobile.className = "darker_grey";
    }
    if (seedling4.treetype>0) {
        document.getElementById("seedlingd_center").style.cursor= "pointer";
        seedlingd_center.className = "darker_grey";
        document.getElementById("seedlingd_center_mobile").style.cursor= "pointer";
        seedlingd_center_mobile.className = "darker_grey";
    }
    if (seedling5.treetype>0) {
        document.getElementById("seedlinge_center").style.cursor= "pointer";
        seedlinge_center.className = "darker_grey";
        document.getElementById("seedlinge_center_mobile").style.cursor= "pointer";
        seedlinge_center_mobile.className = "darker_grey";
    }
    if (seedling6.treetype>0) {
        document.getElementById("seedlingf_center").style.cursor= "pointer";
        seedlingf_center.className = "darker_grey";
        document.getElementById("seedlingf_center_mobile").style.cursor= "pointer";
        seedlingf_center_mobile.className = "darker_grey";
    }
}

function cpdistribution(bonsaixx, level_cp_tq) {
    if (bonsaixx.level_new<=10) {
        if (level_cp_tq[0]==2) {
            bonsaixx.foliage_new = Math.round((((0.5)*naturedistribution(bonsaixx, 1)))* 10) / 10;
            bonsaixx.branches_new = Math.round((((0.5)*naturedistribution(bonsaixx, 2)))* 10) / 10;
            bonsaixx.trunk_new = Math.round((((0.5)*naturedistribution(bonsaixx, 3)))* 10) / 10;
            bonsaixx.roots_new = Math.round((((0.5)*naturedistribution(bonsaixx, 4)))* 10) / 10;
        }
        else {
            cpdistribution2(bonsaixx, level_cp_tq, 0);
        }
    }
    else if (bonsaixx.level_new<=20) {
        cpdistribution2(bonsaixx, level_cp_tq, 1);
    }
    else if (bonsaixx.level_new<=30) {
        cpdistribution2(bonsaixx, level_cp_tq, 2);
    }
    else if (bonsaixx.level_new<=40) {
        cpdistribution2(bonsaixx, level_cp_tq, 3);
    }
    else if (bonsaixx.level_new<=50) {
        cpdistribution2(bonsaixx, level_cp_tq, 4);
    }
}

function cpdistribution2(bonsaixx, level_cp_tq, level_index) {
    if ((level_cp_tq[level_index]/10)*2<2) {
        naturepoints=2;
        leftpoints=level_cp_tq[level_index]-naturepoints;
    }
    else {
        naturepoints=(level_cp_tq[level_index]/10)*2;
        leftpoints=level_cp_tq[level_index]-naturepoints;
    }
    if (bonsaixx.treetypegroup<=4) {
        cpdistribution_growing(bonsaixx, level_cp_tq, level_index, 25);
    }
    else if (bonsaixx.treetypegroup<=6) {
        cpdistribution_growing(bonsaixx, level_cp_tq, level_index, 32);
    }
    else if (bonsaixx.treetypegroup<=8) {
        cpdistribution_growing(bonsaixx, level_cp_tq, level_index, 40);
    }
    else {
        cpdistribution_growing(bonsaixx, level_cp_tq, level_index, 50);
    }
}

function cpdistribution_growing(bonsaixx, level_cp_tq, level_index, a) {
    if (skills.growing>=a) {
        cpdistribution_shaping(bonsaixx, level_cp_tq, level_index, a);
    }
    else {
        if (Math.round(((((level_cp_tq[level_index]/10)*8)/a)*skills.growing)* 10) / 10<skills.growing*0.4) {
            if (skills.growing*0.4>leftpoints) {
                cpdistribution_shaping(bonsaixx, level_cp_tq, level_index, a);
            }
            else {
                leftpoints=skills.growing*0.4;
                cpdistribution_shaping(bonsaixx, level_cp_tq, level_index, a);
            }
        }
        else {
            if (Math.round(((((level_cp_tq[level_index]/10)*8)/a)*skills.growing)* 10) / 10>leftpoints) {
                cpdistribution_shaping(bonsaixx, level_cp_tq, level_index, a);
            }
            else {
                leftpoints=Math.round(((((level_cp_tq[level_index]/10)*8)/a)*skills.growing)* 10) / 10;
                cpdistribution_shaping(bonsaixx, level_cp_tq, level_index, a);
            }
        }
    }
}

function cpdistribution_shaping(bonsaixx, level_cp_tq, level_index, a) {
    if (skills.shaping>=a) {
        bonsaixx.foliage_new = Math.round(((naturepoints/4)*naturedistribution(bonsaixx, 1))* 10) / 10;
        bonsaixx.branches_new = Math.round(((naturepoints/4)*naturedistribution(bonsaixx, 2))* 10) / 10;
        bonsaixx.trunk_new = Math.round(((naturepoints/4)*naturedistribution(bonsaixx, 3))* 10) / 10;
        bonsaixx.roots_new = Math.round(((naturepoints/4)*naturedistribution(bonsaixx, 4))* 10) / 10;
        bonsaixx.leftpoints = leftpoints;
        naturepoints=0;
        leftpoints=0;
    }
    else {
        if (Math.round(((((level_cp_tq[level_index]/10)*8)/a)*skills.shaping)* 10) / 10==0) {
            naturepoints=naturepoints+leftpoints;
            bonsaixx.foliage_new = Math.round(((naturepoints/4)*naturedistribution(bonsaixx, 1))* 10) / 10;
            bonsaixx.branches_new = Math.round(((naturepoints/4)*naturedistribution(bonsaixx, 2))* 10) / 10;
            bonsaixx.trunk_new = Math.round(((naturepoints/4)*naturedistribution(bonsaixx, 3))* 10) / 10;
            bonsaixx.roots_new = Math.round(((naturepoints/4)*naturedistribution(bonsaixx, 4))* 10) / 10;
            naturepoints=0;
            leftpoints=0;
        }
        else if (Math.round(((((level_cp_tq[level_index]/10)*8)/a)*skills.shaping)* 10) / 10<skills.shaping*0.4) {
            if (skills.shaping*0.4>leftpoints) {
                bonsaixx.foliage_new = Math.round(((naturepoints/4)*naturedistribution(bonsaixx, 1))* 10) / 10;
                bonsaixx.branches_new = Math.round(((naturepoints/4)*naturedistribution(bonsaixx, 2))* 10) / 10;
                bonsaixx.trunk_new = Math.round(((naturepoints/4)*naturedistribution(bonsaixx, 3))* 10) / 10;
                bonsaixx.roots_new = Math.round(((naturepoints/4)*naturedistribution(bonsaixx, 4))* 10) / 10;
                bonsaixx.leftpoints = leftpoints;
                naturepoints=0;
                leftpoints=0;
            }
            else {
                leftpoints=leftpoints-skills.shaping*0.4;
                naturepoints=naturepoints+leftpoints;
                leftpoints=skills.shaping*0.4;
                bonsaixx.foliage_new = Math.round(((naturepoints/4)*naturedistribution(bonsaixx, 1))* 10) / 10;
                bonsaixx.branches_new = Math.round(((naturepoints/4)*naturedistribution(bonsaixx, 2))* 10) / 10;
                bonsaixx.trunk_new = Math.round(((naturepoints/4)*naturedistribution(bonsaixx, 3))* 10) / 10;
                bonsaixx.roots_new = Math.round(((naturepoints/4)*naturedistribution(bonsaixx, 4))* 10) / 10;
                bonsaixx.leftpoints = leftpoints;
                naturepoints=0;
                leftpoints=0;
            }
        }
        else {
            if (Math.round(((((level_cp_tq[level_index]/10)*8)/a)*skills.shaping)* 10) / 10>leftpoints) {
                bonsaixx.foliage_new = Math.round(((naturepoints/4)*naturedistribution(bonsaixx, 1))* 10) / 10;
                bonsaixx.branches_new = Math.round(((naturepoints/4)*naturedistribution(bonsaixx, 2))* 10) / 10;
                bonsaixx.trunk_new = Math.round(((naturepoints/4)*naturedistribution(bonsaixx, 3))* 10) / 10;
                bonsaixx.roots_new = Math.round(((naturepoints/4)*naturedistribution(bonsaixx, 4))* 10) / 10;
                bonsaixx.leftpoints = leftpoints;
                naturepoints=0;
                leftpoints=0;
            }
            else {
                leftpoints=leftpoints-Math.round(((((level_cp_tq[level_index]/10)*8)/a)*skills.shaping)* 10) / 10;
                naturepoints=naturepoints+leftpoints;
                leftpoints=Math.round(((((level_cp_tq[level_index]/10)*8)/a)*skills.shaping)* 10) / 10;
                bonsaixx.foliage_new = Math.round(((naturepoints/4)*naturedistribution(bonsaixx, 1))* 10) / 10;
                bonsaixx.branches_new = Math.round(((naturepoints/4)*naturedistribution(bonsaixx, 2))* 10) / 10;
                bonsaixx.trunk_new = Math.round(((naturepoints/4)*naturedistribution(bonsaixx, 3))* 10) / 10;
                bonsaixx.roots_new = Math.round(((naturepoints/4)*naturedistribution(bonsaixx, 4))* 10) / 10;
                bonsaixx.leftpoints = leftpoints;
                naturepoints=0;
                leftpoints=0;
            }
        }
    }
}

function cpdistributionaftercare(bonsaixx) {
    bonsaixx.foliage_new +=bonsaixx.foliage;
    bonsaixx.branches_new +=bonsaixx.branches;
    bonsaixx.trunk_new +=bonsaixx.trunk;
    bonsaixx.roots_new +=bonsaixx.roots;
}

function naturedistribution(bonsaixx, fbtr) {
    if (fbtr==1) {
        if (bonsaixx.nature==1 || bonsaixx.nature==3 || bonsaixx.nature==4 || bonsaixx.nature==5 || bonsaixx.nature==7 || bonsaixx.nature==8 || bonsaixx.nature==9 || bonsaixx.nature==11 || bonsaixx.nature==12 || bonsaixx.nature==13) {
        return 1;
        }
        if (bonsaixx.nature==2 || bonsaixx.nature==6 || bonsaixx.nature==10) {
        return 2;
        }
        if (bonsaixx.nature==14 || bonsaixx.nature==15 || bonsaixx.nature==16) {
        return 0;
        }
    }
    if (fbtr==2) {
        if (bonsaixx.nature==1 || bonsaixx.nature==2 || bonsaixx.nature==4 || bonsaixx.nature==5 || bonsaixx.nature==6 || bonsaixx.nature==8 || bonsaixx.nature==9 || bonsaixx.nature==13 || bonsaixx.nature==15 || bonsaixx.nature==16) {
        return 1;
        }
        if (bonsaixx.nature==3 || bonsaixx.nature==7 || bonsaixx.nature==14) {
        return 2;
        }
        if (bonsaixx.nature==10 || bonsaixx.nature==11 || bonsaixx.nature==12) {
        return 0;
        }
    }
    if (fbtr==3) {
        if (bonsaixx.nature==1 || bonsaixx.nature==2 || bonsaixx.nature==3 || bonsaixx.nature==5 || bonsaixx.nature==9 || bonsaixx.nature==10 || bonsaixx.nature==12 || bonsaixx.nature==13 || bonsaixx.nature==14 || bonsaixx.nature==16) {
        return 1;
        }
        if (bonsaixx.nature==4 || bonsaixx.nature==11 || bonsaixx.nature==15) {
        return 2;
        }
        if (bonsaixx.nature==6 || bonsaixx.nature==7 || bonsaixx.nature==8) {
        return 0;
        }
    }
    if (fbtr==4) {
        if (bonsaixx.nature==1 || bonsaixx.nature==5 || bonsaixx.nature==6 || bonsaixx.nature==7 || bonsaixx.nature==9 || bonsaixx.nature==10 || bonsaixx.nature==11 || bonsaixx.nature==13 || bonsaixx.nature==14 || bonsaixx.nature==15) {
        return 1;
        }
        if (bonsaixx.nature==8 || bonsaixx.nature==12 || bonsaixx.nature==16) {
        return 2;
        }
        if (bonsaixx.nature==2 || bonsaixx.nature==3 || bonsaixx.nature==4) {
        return 0;
        }
    }
}

function naturerandom() {
    state.random_nature =Math.random();
    if (state.random_nature>=0.9375) {
        return 1;
    }
    else if (state.random_nature>=0.875) {
        return 2;
    }
    else if (state.random_nature>=0.8125) {
        return 3;
    }
    else if (state.random_nature>=0.75) {
        return 4;
    }
    else if (state.random_nature>=0.6875) {
        return 5;
    }
    else if (state.random_nature>=0.625) {
        return 6;
    }
    else if (state.random_nature>=0.5625) {
        return 7;
    }
    else if (state.random_nature>=0.5) {
        return 8;
    }
    else if (state.random_nature>=0.4375) {
        return 9;
    }
    else if (state.random_nature>=0.375) {
        return 10;
    }
    else if (state.random_nature>=0.3125) {
        return 11;
    }
    else if (state.random_nature>=0.25) {
        return 12;
    }
    else if (state.random_nature>=0.1875) {
        return 13;
    }
    else if (state.random_nature>=0.125) {
        return 14;
    }
    else if (state.random_nature>=0.0625) {
        return 15;
    }
    else {
        return 16;
    }
}

/* Bonsai Growing Intervall*/
function Bonsai_Growing_Intervall(bonsaixx) {
    if (bonsaixx.growing_zeit==0) {
        if (bonsaixx.level==0) {
            statistics.bonsais_total +=1;
        }
        console.log(statistics.bonsais_total);
        //task002trigger();
        levels=bonsaixx.level_new-bonsaixx.level;
        bonsaixx.growing=0;
        bonsaixx.level=bonsaixx.level_new;
        bonsaixx.foliage=bonsaixx.foliage_new;
        bonsaixx.branches=bonsaixx.branches_new;
        bonsaixx.trunk=bonsaixx.trunk_new;
        bonsaixx.roots=bonsaixx.roots_new;
        bonsaixx.price = bonsaixx.level*bonsaixx.treetypegroup*bonsaixx.treequality;
        bonsaixx.level_new +=1;
        bonsaixx.level_lp =0;
        bonsaixx.foliage_lp =0;
        bonsaixx.branches_lp =0;
        bonsaixx.trunk_lp =0;
        bonsaixx.roots_lp =0;
        resources.organic_waste +=levels;
        document.getElementById("organic_waste").innerHTML= resources.organic_waste;
        if (bonsaixx.treequality==1) {
            cpdistribution(bonsaixx, level_cp_tq1);
            cpdistributionaftercare(bonsaixx)
            bonsaixx.growing_zeit = grow_time_tq1[bonsaixx.level];
            //levels =levels*1;
            //experience(levels);
        }
        if (bonsaixx.treequality==2) {
            cpdistribution(bonsaixx, level_cp_tq2);
            cpdistributionaftercare(bonsaixx)
            bonsaixx.growing_zeit = grow_time_tq2[bonsaixx.level];
            //levels =levels*2;
            //experience(levels);
        }
        if (bonsaixx.treequality==3) {
            cpdistribution(bonsaixx, level_cp_tq3);
            cpdistributionaftercare(bonsaixx)
            bonsaixx.growing_zeit = grow_time_tq3[bonsaixx.level];
            //levels =levels*3;
            //experience(levels);
        }
    
        levels=0;
        menu_change();
        menu_shop_change();
        
        //task006trigger(bonsaixx);
        //task008trigger(bonsaixx);
        //if (bonsaixx.foliage+bonsaixx.branches+bonsaixx.trunk+bonsaixx.roots>=30 & skills.growing>=1 & task_triggers.task009<1) {
        //    task_triggers.task009 +=1;
        //}
        //task009trigger();
        //if (bonsaixx.foliage>=20 || bonsaixx.branches>=20 || bonsaixx.trunk>=20 || bonsaixx.roots>=20) {
        //    if (skills.shaping>=1 & task_triggers.task012<1) {
        //        task_triggers.task012 +=1;
        //    }
        //}
        //task012trigger();
    }
    
    if (bonsaixx==bonsai001) {
        worker_growing_check(bonsaixx, 1);   
    }
    else if (bonsaixx==bonsai002) {
        worker_growing_check(bonsaixx, 2);   
    }
    else if (bonsaixx==bonsai003) {
        worker_growing_check(bonsaixx, 3);   
    }
    else if (bonsaixx==bonsai004) {
        worker_growing_check(bonsaixx, 4);   
    }
    else if (bonsaixx==bonsai005) {
        worker_growing_check(bonsaixx, 5);   
    }
    else if (bonsaixx==bonsai006) {
        worker_growing_check(bonsaixx, 6);   
    }
    else if (bonsaixx==bonsai007) {
        worker_growing_check(bonsaixx, 7);   
    }
    else if (bonsaixx==bonsai008) {
        worker_growing_check(bonsaixx, 8);   
    }
    else if (bonsaixx==bonsai009) {
        worker_growing_check(bonsaixx, 9);   
    }
    else if (bonsaixx==bonsai010) {
        worker_growing_check(bonsaixx, 10);   
    }
    else if (bonsaixx==bonsai011) {
        worker_growing_check(bonsaixx, 11);   
    }
    else if (bonsaixx==bonsai012) {
        worker_growing_check(bonsaixx, 12);   
    }
    else if (bonsaixx==bonsai013) {
        worker_growing_check(bonsaixx, 13);   
    }
    else if (bonsaixx==bonsai014) {
        worker_growing_check(bonsaixx, 14);   
    }
    else if (bonsaixx==bonsai015) {
        worker_growing_check(bonsaixx, 15);   
    }
    else if (bonsaixx==bonsai016) {
        worker_growing_check(bonsaixx, 16);   
    }
    else if (bonsaixx==bonsai017) {
        worker_growing_check(bonsaixx, 17);   
    }
    else if (bonsaixx==bonsai018) {
        worker_growing_check(bonsaixx, 18);   
    }
    else if (bonsaixx==bonsai019) {
        worker_growing_check(bonsaixx, 19);   
    }
    else if (bonsaixx==bonsai020) {
        worker_growing_check(bonsaixx, 20);   
    }
    
    if (state.bonsai_showing==1) {
        Bonsai_Growing(bonsai001);  
    }
    else if (state.bonsai_showing==2) {
        Bonsai_Growing(bonsai002);
    }
    else if (state.bonsai_showing==3) {
        Bonsai_Growing(bonsai003);
    }
    else if (state.bonsai_showing==4) {
        Bonsai_Growing(bonsai004);
    }
    else if (state.bonsai_showing==5) {
        Bonsai_Growing(bonsai005);
    }
    else if (state.bonsai_showing==6) {
        Bonsai_Growing(bonsai006);
    }
    else if (state.bonsai_showing==7) {
        Bonsai_Growing(bonsai007);
    }
    else if (state.bonsai_showing==8) {
        Bonsai_Growing(bonsai008);
    }
    else if (state.bonsai_showing==9) {
        Bonsai_Growing(bonsai009);
    }
    else if (state.bonsai_showing==10) {
        Bonsai_Growing(bonsai010);
    }
    else if (state.bonsai_showing==11) {
        Bonsai_Growing(bonsai011);
    }
    else if (state.bonsai_showing==12) {
        Bonsai_Growing(bonsai012);
    }
    else if (state.bonsai_showing==13) {
        Bonsai_Growing(bonsai013);
    }
    else if (state.bonsai_showing==14) {
        Bonsai_Growing(bonsai014);
    }
    else if (state.bonsai_showing==15) {
        Bonsai_Growing(bonsai015);
    }
    else if (state.bonsai_showing==16) {
        Bonsai_Growing(bonsai016);
    }
    else if (state.bonsai_showing==17) {
        Bonsai_Growing(bonsai017);
    }
    else if (state.bonsai_showing==18) {
        Bonsai_Growing(bonsai018);
    }
    else if (state.bonsai_showing==19) {
        Bonsai_Growing(bonsai019);
    }
    else if (state.bonsai_showing==20) {
        Bonsai_Growing(bonsai020);
    }
}

function worker_growing_check(bonsaixx, number) {
    if (worker01.growing==number) {
        if (bonsaixx.growing==1) {
            document.getElementById("zeit_worker01").innerHTML = "("+bonsaixx.growing_zeit+"&nbsp;seconds left)";
            document.getElementById("worker1_task").innerHTML = '<img src="Images/growing.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Growing';
            document.getElementById("worker1_task_mobile").innerHTML = '<img src="Images/growing.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Growing'; 
            document.getElementById("worker1_task_mobilexs").innerHTML = '<img src="Images/growing.svg" width="20" height="20">';  
        }
        else if (bonsaixx.growing==0) {
            worker01.growing = 0;
            worker01.busy = 0;
            state.workers_available +=1;
            document.getElementById("zeit_worker01").innerHTML = "";  
            document.getElementById("worker1_task").innerHTML = '<img src="Images/idle.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Ready for new task'; 
            document.getElementById("worker1_task_mobile").innerHTML = '<img src="Images/idle.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Ready'; 
            document.getElementById("worker1_task_mobilexs").innerHTML = '<img src="Images/idle.svg" width="20" height="20">';   
        }
    }
    else if (worker02.growing==number) {
        if (bonsaixx.growing==1) {
            document.getElementById("zeit_worker02").innerHTML = "("+bonsaixx.growing_zeit+"&nbsp;seconds left)";
            document.getElementById("worker2_task").innerHTML = '<img src="Images/growing.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Growing';
            document.getElementById("worker2_task_mobile").innerHTML = '<img src="Images/growing.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Growing'; 
            document.getElementById("worker2_task_mobilexs").innerHTML = '<img src="Images/growing.svg" width="20" height="20">';   
        }
        else if (bonsaixx.growing==0) {
            worker02.growing = 0;
            worker02.busy = 0;
            state.workers_available +=1;
            document.getElementById("zeit_worker02").innerHTML = "";  
            document.getElementById("worker2_task").innerHTML = '<img src="Images/idle.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Ready for new task';
            document.getElementById("worker2_task_mobile").innerHTML = '<img src="Images/idle.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Ready'; 
            document.getElementById("worker2_task_mobilexs").innerHTML = '<img src="Images/idle.svg" width="20" height="20">';  
        }
    }
    else if (worker03.growing==number) {
        if (bonsaixx.growing==1) {
            document.getElementById("zeit_worker03").innerHTML = "("+bonsaixx.growing_zeit+"&nbsp;seconds left)";
            document.getElementById("worker3_task").innerHTML = '<img src="Images/growing.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Growing';
            document.getElementById("worker3_task_mobile").innerHTML = '<img src="Images/growing.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Growing'; 
            document.getElementById("worker3_task_mobilexs").innerHTML = '<img src="Images/growing.svg" width="20" height="20">';   
        }
        else if (bonsaixx.growing==0) {
            worker03.growing = 0;
            worker03.busy = 0;
            state.workers_available +=1;
            document.getElementById("zeit_worker03").innerHTML = "";  
            document.getElementById("worker3_task").innerHTML = '<img src="Images/idle.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Ready for new task';
            document.getElementById("worker3_task_mobile").innerHTML = '<img src="Images/idle.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Ready'; 
            document.getElementById("worker3_task_mobilexs").innerHTML = '<img src="Images/idle.svg" width="20" height="20">';   
        }
    }
}
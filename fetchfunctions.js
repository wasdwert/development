function fetchbonsaimenu(number1, number2, a, b, c, d, e, f, g, h, i, j) {
    document.getElementById("bonsaia_nr").innerText = "#"+number1+"1";
    document.getElementById("bonsaia_name").innerText = a.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaia_types").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, a, "50", "50");
    document.getElementById("ButtonBonsaiA").style.backgroundImage= fetchbonsaitreequality(a);
    document.getElementById("bonsaia_level").innerText = a.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaia_cp").innerHTML = (Math.round((a.foliage+a.branches+a.trunk+a.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
        
    document.getElementById("bonsaib_nr").innerText = "#"+number1+"2";
    document.getElementById("bonsaib_name").innerText = b.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaib_types").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, b, "50", "50");
    document.getElementById("ButtonBonsaiB").style.backgroundImage= fetchbonsaitreequality(b);
    document.getElementById("bonsaib_level").innerText = b.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaib_cp").innerHTML = (Math.round((b.foliage+b.branches+b.trunk+b.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
        
    document.getElementById("bonsaic_nr").innerText = "#"+number1+"3";
    document.getElementById("bonsaic_name").innerText = c.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaic_types").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, c, "50", "50");
    document.getElementById("ButtonBonsaiC").style.backgroundImage= fetchbonsaitreequality(c);
    document.getElementById("bonsaic_level").innerText = c.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaic_cp").innerHTML = (Math.round((c.foliage+c.branches+c.trunk+c.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
        
    document.getElementById("bonsaid_nr").innerText = "#"+number1+"4";
    document.getElementById("bonsaid_name").innerText = d.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaid_types").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, d, "50", "50");
    document.getElementById("ButtonBonsaiD").style.backgroundImage= fetchbonsaitreequality(d);
    document.getElementById("bonsaid_level").innerText = d.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaid_cp").innerHTML = (Math.round((d.foliage+d.branches+d.trunk+d.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
        
    document.getElementById("bonsaie_nr").innerText = "#"+number1+"5";
    document.getElementById("bonsaie_name").innerText = e.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaie_types").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, e, "50", "50");
    document.getElementById("ButtonBonsaiE").style.backgroundImage= fetchbonsaitreequality(e);
    document.getElementById("bonsaie_level").innerText = e.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaie_cp").innerHTML = (Math.round((e.foliage+e.branches+e.trunk+e.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
        
    document.getElementById("bonsaif_nr").innerText = "#"+number1+"6";
    document.getElementById("bonsaif_name").innerText = f.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaif_types").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, f, "50", "50");
    document.getElementById("ButtonBonsaiF").style.backgroundImage= fetchbonsaitreequality(f);
    document.getElementById("bonsaif_level").innerText = f.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaif_cp").innerHTML = (Math.round((f.foliage+f.branches+f.trunk+f.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
    
    document.getElementById("bonsaig_nr").innerText = "#"+number1+"7";
    document.getElementById("bonsaig_name").innerText = g.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaig_types").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, g, "50", "50");
    document.getElementById("ButtonBonsaiG").style.backgroundImage= fetchbonsaitreequality(g);
    document.getElementById("bonsaig_level").innerText = g.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaig_cp").innerHTML = (Math.round((g.foliage+g.branches+g.trunk+g.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
    
    document.getElementById("bonsaih_nr").innerText = "#"+number1+"8";
    document.getElementById("bonsaih_name").innerText = h.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaih_types").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, h, "50", "50");
    document.getElementById("ButtonBonsaiH").style.backgroundImage= fetchbonsaitreequality(h);
    document.getElementById("bonsaih_level").innerText = h.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaih_cp").innerHTML = (Math.round((h.foliage+h.branches+h.trunk+h.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
    
    document.getElementById("bonsaii_nr").innerText = "#"+number1+"9";
    document.getElementById("bonsaii_name").innerText = i.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaii_types").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, i, "50", "50");
    document.getElementById("ButtonBonsaiI").style.backgroundImage= fetchbonsaitreequality(i);
    document.getElementById("bonsaii_level").innerText = i.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaii_cp").innerHTML = (Math.round((i.foliage+i.branches+i.trunk+i.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
    
    document.getElementById("bonsaij_nr").innerText = "#"+number2+"0";
    document.getElementById("bonsaij_name").innerText = j.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaij_types").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, j, "50", "50");
    document.getElementById("ButtonBonsaiJ").style.backgroundImage= fetchbonsaitreequality(j);
    document.getElementById("bonsaij_level").innerText = j.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaij_cp").innerHTML = (Math.round((j.foliage+j.branches+j.trunk+j.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
}

function fetchbonsaimenu_mobile(number1, number2, a, b, c, d, e, f, g, h, i, j) {
    document.getElementById("bonsaia_nr_mobile").innerText = "#"+number1+"1";
    document.getElementById("bonsaia_name_mobile").innerText = a.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaia_types_mobile").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, a, "30", "30");
    document.getElementById("ButtonBonsaiA_mobile").style.backgroundImage= fetchbonsaitreequality_small(a);
       
    document.getElementById("bonsaib_nr_mobile").innerText = "#"+number1+"2";
    document.getElementById("bonsaib_name_mobile").innerText = b.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaib_types_mobile").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, b, "30", "30");
    document.getElementById("ButtonBonsaiB_mobile").style.backgroundImage= fetchbonsaitreequality_small(b);
          
    document.getElementById("bonsaic_nr_mobile").innerText = "#"+number1+"3";
    document.getElementById("bonsaic_name_mobile").innerText = c.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaic_types_mobile").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, c, "30", "30");
    document.getElementById("ButtonBonsaiC_mobile").style.backgroundImage= fetchbonsaitreequality_small(c);
        
    document.getElementById("bonsaid_nr_mobile").innerText = "#"+number1+"4";
    document.getElementById("bonsaid_name_mobile").innerText = d.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaid_types_mobile").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, d, "30", "30");
    document.getElementById("ButtonBonsaiD_mobile").style.backgroundImage= fetchbonsaitreequality_small(d);
         
    document.getElementById("bonsaie_nr_mobile").innerText = "#"+number1+"5";
    document.getElementById("bonsaie_name_mobile").innerText = e.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaie_types_mobile").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, e, "30", "30");
    document.getElementById("ButtonBonsaiE_mobile").style.backgroundImage= fetchbonsaitreequality_small(e);
         
    document.getElementById("bonsaif_nr_mobile").innerText = "#"+number1+"6";
    document.getElementById("bonsaif_name_mobile").innerText = f.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaif_types_mobile").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, f, "30", "30");
    document.getElementById("ButtonBonsaiF_mobile").style.backgroundImage= fetchbonsaitreequality_small(f);
    
    document.getElementById("bonsaig_nr_mobile").innerText = "#"+number1+"7";
    document.getElementById("bonsaig_name_mobile").innerText = g.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaig_types_mobile").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, g, "30", "30");
    document.getElementById("ButtonBonsaiG_mobile").style.backgroundImage= fetchbonsaitreequality_small(g);
    
    document.getElementById("bonsaih_nr_mobile").innerText = "#"+number1+"8";
    document.getElementById("bonsaih_name_mobile").innerText = h.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaih_types_mobile").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, h, "30", "30");
    document.getElementById("ButtonBonsaiH_mobile").style.backgroundImage= fetchbonsaitreequality_small(h);
     
    document.getElementById("bonsaii_nr_mobile").innerText = "#"+number1+"9";
    document.getElementById("bonsaii_name_mobile").innerText = i.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaii_types_mobile").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, i, "30", "30");
    document.getElementById("ButtonBonsaiI_mobile").style.backgroundImage= fetchbonsaitreequality_small(i);
     
    document.getElementById("bonsaij_nr_mobile").innerText = "#"+number2+"0";
    document.getElementById("bonsaij_name_mobile").innerText = j.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaij_types_mobile").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, j, "30", "30");
    document.getElementById("ButtonBonsaiJ_mobile").style.backgroundImage= fetchbonsaitreequality_small(j);
}

function fetchbonsaimenu_mobilexs(number1, number2, a, b, c, d, e, f, g, h, i, j) {
    document.getElementById("bonsaia_nr_mobilexs").innerText = "#"+number1+"1";
    document.getElementById("bonsaia_types_mobilexs").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, a, "25", "25");
    document.getElementById("ButtonBonsaiA_mobilexs").style.backgroundImage= fetchbonsaitreequality_small(a);
         
    document.getElementById("bonsaib_nr_mobilexs").innerText = "#"+number1+"2";
    document.getElementById("bonsaib_types_mobilexs").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, b, "25", "25");
    document.getElementById("ButtonBonsaiB_mobilexs").style.backgroundImage= fetchbonsaitreequality_small(b);
        
    document.getElementById("bonsaic_nr_mobilexs").innerText = "#"+number1+"3";
    document.getElementById("bonsaic_types_mobilexs").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, c, "25", "25");
    document.getElementById("ButtonBonsaiC_mobilexs").style.backgroundImage= fetchbonsaitreequality_small(c);
        
    document.getElementById("bonsaid_nr_mobilexs").innerText = "#"+number1+"4";
    document.getElementById("bonsaid_types_mobilexs").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, d, "25", "25");
    document.getElementById("ButtonBonsaiD_mobilexs").style.backgroundImage= fetchbonsaitreequality_small(d);
         
    document.getElementById("bonsaie_nr_mobilexs").innerText = "#"+number1+"5";
    document.getElementById("bonsaie_types_mobilexs").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, e, "25", "25");
    document.getElementById("ButtonBonsaiE_mobilexs").style.backgroundImage= fetchbonsaitreequality_small(e);
         
    document.getElementById("bonsaif_nr_mobilexs").innerText = "#"+number1+"6";
    document.getElementById("bonsaif_types_mobilexs").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, f, "25", "25");
    document.getElementById("ButtonBonsaiF_mobilexs").style.backgroundImage= fetchbonsaitreequality_small(f);
    
    document.getElementById("bonsaig_nr_mobilexs").innerText = "#"+number1+"7";
    document.getElementById("bonsaig_types_mobilexs").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, g, "25", "25");
    document.getElementById("ButtonBonsaiG_mobilexs").style.backgroundImage= fetchbonsaitreequality_small(g);
     
    document.getElementById("bonsaih_nr_mobilexs").innerText = "#"+number1+"8";
    document.getElementById("bonsaih_types_mobilexs").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, h, "25", "25");
    document.getElementById("ButtonBonsaiH_mobilexs").style.backgroundImage= fetchbonsaitreequality_small(h);
    
    document.getElementById("bonsaii_nr_mobilexs").innerText = "#"+number1+"9";
    document.getElementById("bonsaii_types_mobilexs").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, i, "25", "25");
    document.getElementById("ButtonBonsaiI_mobilexs").style.backgroundImage= fetchbonsaitreequality_small(i);
     
    document.getElementById("bonsaij_nr_mobilexs").innerText = "#"+number2+"0";
    document.getElementById("bonsaij_types_mobilexs").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, j, "25", "25");
    document.getElementById("ButtonBonsaiJ_mobilexs").style.backgroundImage= fetchbonsaitreequality_small(j);
}

function fetchbonsaimenu_shop(number1, number2, a, b, c, d, e, f, g, h, i, j) {
    document.getElementById("bonsaia_price_sell").innerText = a.price.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaia_name_sell").innerText = a.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaia_types_sell").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, a, "43.75", "43.75");
    document.getElementById("ButtonBonsaiA_sell").style.backgroundImage= fetchbonsaitreequality_small(a);
    document.getElementById("bonsaia_level_sell").innerText = a.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaia_cp_sell").innerHTML = (Math.round((a.foliage+a.branches+a.trunk+a.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
        
    document.getElementById("bonsaib_price_sell").innerText = b.price.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaib_name_sell").innerText = b.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaib_types_sell").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, b, "43.75", "43.75");
    document.getElementById("ButtonBonsaiB_sell").style.backgroundImage= fetchbonsaitreequality_small(b);
    document.getElementById("bonsaib_level_sell").innerText = b.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaib_cp_sell").innerHTML = (Math.round((b.foliage+b.branches+b.trunk+b.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
        
    document.getElementById("bonsaic_price_sell").innerText = c.price.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaic_name_sell").innerText = c.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaic_types_sell").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, c, "43.75", "43.75");
    document.getElementById("ButtonBonsaiC_sell").style.backgroundImage= fetchbonsaitreequality_small(c);
    document.getElementById("bonsaic_level_sell").innerText = c.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaic_cp_sell").innerHTML = (Math.round((c.foliage+c.branches+c.trunk+c.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
        
    document.getElementById("bonsaid_price_sell").innerText = d.price.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaid_name_sell").innerText = d.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaid_types_sell").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, d, "43.75", "43.75");
    document.getElementById("ButtonBonsaiD_sell").style.backgroundImage= fetchbonsaitreequality_small(d);
    document.getElementById("bonsaid_level_sell").innerText = d.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaid_cp_sell").innerHTML = (Math.round((d.foliage+d.branches+d.trunk+d.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
        
    document.getElementById("bonsaie_price_sell").innerText = e.price.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaie_name_sell").innerText = e.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaie_types_sell").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, e, "43.75", "43.75");
    document.getElementById("ButtonBonsaiE_sell").style.backgroundImage= fetchbonsaitreequality_small(e);
    document.getElementById("bonsaie_level_sell").innerText = e.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaie_cp_sell").innerHTML = (Math.round((e.foliage+e.branches+e.trunk+e.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
        
    document.getElementById("bonsaif_price_sell").innerText = f.price.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaif_name_sell").innerText = f.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaif_types_sell").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, f, "43.75", "43.75");
    document.getElementById("ButtonBonsaiF_sell").style.backgroundImage= fetchbonsaitreequality_small(f);
    document.getElementById("bonsaif_level_sell").innerText = f.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaif_cp_sell").innerHTML = (Math.round((f.foliage+f.branches+f.trunk+f.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
    
    document.getElementById("bonsaig_price_sell").innerText = g.price.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaig_name_sell").innerText = g.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaig_types_sell").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, g, "43.75", "43.75");
    document.getElementById("ButtonBonsaiG_sell").style.backgroundImage= fetchbonsaitreequality_small(g);
    document.getElementById("bonsaig_level_sell").innerText = g.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaig_cp_sell").innerHTML = (Math.round((g.foliage+g.branches+g.trunk+g.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
    
    document.getElementById("bonsaih_price_sell").innerText = h.price.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaih_name_sell").innerText = h.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaih_types_sell").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, h, "43.75", "43.75");
    document.getElementById("ButtonBonsaiH_sell").style.backgroundImage= fetchbonsaitreequality_small(h);
    document.getElementById("bonsaih_level_sell").innerText = h.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaih_cp_sell").innerHTML = (Math.round((h.foliage+h.branches+h.trunk+h.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
    
    document.getElementById("bonsaii_price_sell").innerText = i.price.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaii_name_sell").innerText = i.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaii_types_sell").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, i, "43.75", "43.75");
    document.getElementById("ButtonBonsaiI_sell").style.backgroundImage= fetchbonsaitreequality_small(i);
    document.getElementById("bonsaii_level_sell").innerText = i.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaii_cp_sell").innerHTML = (Math.round((i.foliage+i.branches+i.trunk+i.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
    
    document.getElementById("bonsaij_price_sell").innerText = j.price.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaij_name_sell").innerText = j.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaij_types_sell").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, j, "43.75", "43.75");
    document.getElementById("ButtonBonsaiJ_sell").style.backgroundImage= fetchbonsaitreequality_small(j);
    document.getElementById("bonsaij_level_sell").innerText = j.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaij_cp_sell").innerHTML = (Math.round((j.foliage+j.branches+j.trunk+j.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
}

function fetchimage_seedling (x, y) {
    document.getElementById("seedling"+x+"_type").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, y, "43.75", "43.75");
    document.getElementById("seedling"+x+"_type_c").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, y, "43.75", "43.75");
    document.getElementById("seedling"+x+"_type_mobile").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, y, "21.875", "21.875");
    document.getElementById("seedling"+x+"_type_mobilexs").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, y, "21.875", "21.875");
    
    document.getElementById("seedling"+x+"_sell").style.backgroundImage = fetchbonsaitreequality_small(y);
    document.getElementById("seedling"+x+"_type_sell").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, y, "43.75", "43.75");
    
    document.getElementById("seedling"+x+"_right").style.backgroundImage= fetchbonsaitreequality_small(y);
    document.getElementById("seedling"+x+"_center").style.backgroundImage= fetchbonsaitreequality(y);
    document.getElementById("seedling"+x+"_right_mobile").style.backgroundImage= fetchbonsaitreequality_small(y);
    document.getElementById("seedling"+x+"_right_mobilexs").style.backgroundImage= fetchbonsaitreequality_small(y);
}

function fetchbonsaiimage(myCallback, x, size1, size2) {
    if (x.treetype==0) {
        return '<img src="Images/pot.svg" width="'+size1+'" height="'+size2+'">';
    }
    else if (x.treetype==1) {
        return myCallback(fetchbonsaiimage3, x, size1, size2, "01")

    }
    else if (x.treetype==2) {
        return myCallback(fetchbonsaiimage3, x, size1, size2, "02")

    }
    else if (x.treetype==3) {
        return myCallback(fetchbonsaiimage3, x, size1, size2, "03")

    }
    else if (x.treetype==4) {
        return myCallback(fetchbonsaiimage3, x, size1, size2, "04")

    }
    else if (x.treetype==5) {
        return myCallback(fetchbonsaiimage3, x, size1, size2, "05")

    }
    else if (x.treetype==6) {
        return myCallback(fetchbonsaiimage3, x, size1, size2, "06")

    }
    else if (x.treetype==7) {
        return myCallback(fetchbonsaiimage3, x, size1, size2, "07")

    }
    else if (x.treetype==8) {
        return myCallback(fetchbonsaiimage3, x, size1, size2, "08")

    }
    else if (x.treetype==9) {
        return myCallback(fetchbonsaiimage3, x, size1, size2, "09")

    }
    else if (x.treetype==10) {
        return myCallback(fetchbonsaiimage3, x, size1, size2, "10")

    }
    else if (x.treetype==11) {
        return myCallback(fetchbonsaiimage3, x, size1, size2, "11")

    }
    else if (x.treetype==12) {
        return myCallback(fetchbonsaiimage3, x, size1, size2, "12")

    }
    else if (x.treetype==13) {
        return myCallback(fetchbonsaiimage3, x, size1, size2, "13")

    }
    else if (x.treetype==14) {
        return myCallback(fetchbonsaiimage3, x, size1, size2, "14")

    }
}

function fetchbonsaiimage2(myCallback, x, size1, size2, a) {
    if (x.styletype==0) {
        return myCallback(x, size1, size2, a, "00")
    }
    else if (x.styletype==1) {
        return myCallback(x, size1, size2, a, "01")
    }
    else if (x.styletype==2) {
        return myCallback(x, size1, size2, a, "02")
    }
    else if (x.styletype==3) {
        return myCallback(x, size1, size2, a, "03")
    }
    else if (x.styletype==4) {
        return myCallback(x, size1, size2, a, "04")
    }
    else if (x.styletype==5) {
        return myCallback(x, size1, size2, a, "05")
    }
    else if (x.styletype==6) {
        return myCallback(x, size1, size2, a, "06")
    }
    else if (x.styletype==7) {
        return myCallback(x, size1, size2, a, "07")
    }
}

function fetchbonsaiimage3(x, size1, size2, a, b) {
    if (x.shiny==1) {
        return '<img src="Images/bonsaitypes/bonsai'+a+'s'+b+'normal.svg" width="'+size1+'" height="'+size2+'">';
    }
    else if (x.shiny==2) {
        return '<img src="Images/bonsaitypes/bonsai'+a+'s'+b+'blooming.svg" width="'+size1+'" height="'+size2+'">';
    }
    else if (x.shiny==3) {
        return '<img src="Images/bonsaitypes/bonsai'+a+'s'+b+'shiny.svg" width="'+size1+'" height="'+size2+'">';
    }
    else if (x.shiny==4) {
        return '<img src="Images/bonsaitypes/bonsai'+a+'s'+b+'b+s.svg" width="'+size1+'" height="'+size2+'">';
    }
}

function fetchbonsaitreequality(x) {
    if (x.treequality==0) {
        return "url('Images/treequality/none.svg')";
    }
    else if (x.treequality==1) {
        return "url('Images/treequality/one.svg')";
    }
    else if (x.treequality==2) {
        return "url('Images/treequality/two.svg')";
    }
    else if (x.treequality==3) {
        return "url('Images/treequality/three.svg')";
    }
    else if (x.treequality==4) {
        return "url('Images/treequality/four.svg')";
    }
    else if (x.treequality==5) {
        return "url('Images/treequality/five.svg')";
    }
    else if (x.treequality==6) {
        return "url('Images/treequality/six.svg')";
    }
    else if (x.treequality==7) {
        return "url('Images/treequality/seven.svg')";
    }
    else if (x.treequality==8) {
        return "url('Images/treequality/eight.svg')";
    }
    else if (x.treequality==9) {
        return "url('Images/treequality/nine.svg')";
    }
    else {
        return "url('Images/treequality/ten.svg')";
    }
}

function fetchbonsaitreequality_small(x) {
    if (x.treequality==0) {
        return "url('Images/treequality/none_small.svg')";
    }
    else if (x.treequality==1) {
        return "url('Images/treequality/one_small.svg')";
    }
    else if (x.treequality==2) {
        return "url('Images/treequality/two_small.svg')";
    }
    else if (x.treequality==3) {
        return "url('Images/treequality/three_small.svg')";
    }
    else if (x.treequality==4) {
        return "url('Images/treequality/four_small.svg')";
    }
    else if (x.treequality==5) {
        return "url('Images/treequality/five_small.svg')";
    }
    else if (x.treequality==6) {
        return "url('Images/treequality/six_small.svg')";
    }
    else if (x.treequality==7) {
        return "url('Images/treequality/seven_small.svg')";
    }
    else if (x.treequality==8) {
        return "url('Images/treequality/eight_small.svg')";
    }
    else if (x.treequality==9) {
        return "url('Images/treequality/nine_small.svg')";
    }
    else {
        return "url('Images/treequality/ten_small.svg')";
    }
}

function fetchbonsaitreequality_big(x) {
    if (x.treequality==0) {
        return "url('Images/treequality/none_big.svg')";
    }
    else if (x.treequality==1) {
        return "url('Images/treequality/one_big.svg')";
    }
    else if (x.treequality==2) {
        return "url('Images/treequality/two_big.svg')";
    }
    else if (x.treequality==3) {
        return "url('Images/treequality/three_big.svg')";
    }
    else if (x.treequality==4) {
        return "url('Images/treequality/four_big.svg')";
    }
    else if (x.treequality==5) {
        return "url('Images/treequality/five_big.svg')";
    }
    else if (x.treequality==6) {
        return "url('Images/treequality/six_big.svg')";
    }
    else if (x.treequality==7) {
        return "url('Images/treequality/seven_big.svg')";
    }
    else if (x.treequality==8) {
        return "url('Images/treequality/eight_big.svg')";
    }
    else if (x.treequality==9) {
        return "url('Images/treequality/nine_big.svg')";
    }
    else {
        return "url('Images/treequality/ten_big.svg')";
    }
}
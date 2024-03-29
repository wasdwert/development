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

function fetchbonsaimenu_contests(number1, number2, a, b, c, d, e, f, g, h, i, j) {
    document.getElementById("bonsaia_name_contests").innerText = a.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaia_types_contests").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, a, "43.75", "43.75");
    document.getElementById("ButtonBonsaiA_contests").style.backgroundImage= fetchbonsaitreequality_small(a);
    document.getElementById("bonsaia_level_contests").innerText = a.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaia_cp_contests").innerHTML = (Math.round((a.foliage+a.branches+a.trunk+a.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
    document.getElementById("bonsaia_ttg_contests").innerText = treetypegroupname[a.treetypegroup];
    document.getElementById("bonsaia_st_contests").innerText = styletypename[a.styletype];
    document.getElementById("bonsaia_nature_contests").innerText = natures[a.nature];
    document.getElementById("bonsaia_f_contests").innerHTML = a.foliage.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaia_b_contests").innerHTML = a.branches.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaia_t_contests").innerHTML = a.trunk.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaia_r_contests").innerHTML = a.roots.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaia_nr_contests").innerText = "#"+number1+"1";
    document.getElementById("bonsaia_idstring_contests").innerText = a.id_string.toLocaleString('en', {minimumFractionDigits: 0});
    
    document.getElementById("bonsaib_name_contests").innerText = b.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaib_types_contests").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, b, "43.75", "43.75");
    document.getElementById("ButtonBonsaiB_contests").style.backgroundImage= fetchbonsaitreequality_small(b);
    document.getElementById("bonsaib_level_contests").innerText = b.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaib_cp_contests").innerHTML = (Math.round((b.foliage+b.branches+b.trunk+b.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
    document.getElementById("bonsaib_ttg_contests").innerText = treetypegroupname[b.treetypegroup];
    document.getElementById("bonsaib_st_contests").innerText = styletypename[b.styletype];
    document.getElementById("bonsaib_nature_contests").innerText = natures[b.nature];
    document.getElementById("bonsaib_f_contests").innerHTML = b.foliage.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaib_b_contests").innerHTML = b.branches.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaib_t_contests").innerHTML = b.trunk.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaib_r_contests").innerHTML = b.roots.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaib_nr_contests").innerText = "#"+number1+"2";
    document.getElementById("bonsaib_idstring_contests").innerText = b.id_string.toLocaleString('en', {minimumFractionDigits: 0});
    
    document.getElementById("bonsaic_name_contests").innerText = c.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaic_types_contests").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, c, "43.75", "43.75");
    document.getElementById("ButtonBonsaiC_contests").style.backgroundImage= fetchbonsaitreequality_small(c);
    document.getElementById("bonsaic_level_contests").innerText = c.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaic_cp_contests").innerHTML = (Math.round((c.foliage+c.branches+c.trunk+c.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
    document.getElementById("bonsaic_ttg_contests").innerText = treetypegroupname[c.treetypegroup];
    document.getElementById("bonsaic_st_contests").innerText = styletypename[c.styletype];
    document.getElementById("bonsaic_nature_contests").innerText = natures[c.nature];
    document.getElementById("bonsaic_f_contests").innerHTML = c.foliage.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaic_b_contests").innerHTML = c.branches.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaic_t_contests").innerHTML = c.trunk.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaic_r_contests").innerHTML = c.roots.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaic_nr_contests").innerText = "#"+number1+"3";
    document.getElementById("bonsaic_idstring_contests").innerText = c.id_string.toLocaleString('en', {minimumFractionDigits: 0});
    
    document.getElementById("bonsaid_name_contests").innerText = d.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaid_types_contests").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, d, "43.75", "43.75");
    document.getElementById("ButtonBonsaiD_contests").style.backgroundImage= fetchbonsaitreequality_small(d);
    document.getElementById("bonsaid_level_contests").innerText = d.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaid_cp_contests").innerHTML = (Math.round((d.foliage+d.branches+d.trunk+d.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
    document.getElementById("bonsaid_ttg_contests").innerText = treetypegroupname[d.treetypegroup];
    document.getElementById("bonsaid_st_contests").innerText = styletypename[d.styletype];
    document.getElementById("bonsaid_nature_contests").innerText = natures[d.nature];
    document.getElementById("bonsaid_f_contests").innerHTML = d.foliage.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaid_b_contests").innerHTML = d.branches.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaid_t_contests").innerHTML = d.trunk.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaid_r_contests").innerHTML = d.roots.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaid_nr_contests").innerText = "#"+number1+"4";
    document.getElementById("bonsaid_idstring_contests").innerText = d.id_string.toLocaleString('en', {minimumFractionDigits: 0});
    
    document.getElementById("bonsaie_name_contests").innerText = e.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaie_types_contests").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, e, "43.75", "43.75");
    document.getElementById("ButtonBonsaiE_contests").style.backgroundImage= fetchbonsaitreequality_small(e);
    document.getElementById("bonsaie_level_contests").innerText = e.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaie_cp_contests").innerHTML = (Math.round((e.foliage+e.branches+e.trunk+e.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
    document.getElementById("bonsaie_ttg_contests").innerText = treetypegroupname[e.treetypegroup];
    document.getElementById("bonsaie_st_contests").innerText = styletypename[e.styletype];
    document.getElementById("bonsaie_nature_contests").innerText = natures[e.nature];
    document.getElementById("bonsaie_f_contests").innerHTML = e.foliage.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaie_b_contests").innerHTML = e.branches.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaie_t_contests").innerHTML = e.trunk.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaie_r_contests").innerHTML = e.roots.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaie_nr_contests").innerText = "#"+number1+"5";
    document.getElementById("bonsaie_idstring_contests").innerText = e.id_string.toLocaleString('en', {minimumFractionDigits: 0});
    
    document.getElementById("bonsaif_name_contests").innerText = f.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaif_types_contests").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, f, "43.75", "43.75");
    document.getElementById("ButtonBonsaiF_contests").style.backgroundImage= fetchbonsaitreequality_small(f);
    document.getElementById("bonsaif_level_contests").innerText = f.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaif_cp_contests").innerHTML = (Math.round((f.foliage+f.branches+f.trunk+f.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
    document.getElementById("bonsaif_ttg_contests").innerText = treetypegroupname[f.treetypegroup];
    document.getElementById("bonsaif_st_contests").innerText = styletypename[f.styletype];
    document.getElementById("bonsaif_nature_contests").innerText = natures[f.nature];
    document.getElementById("bonsaif_f_contests").innerHTML = f.foliage.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaif_b_contests").innerHTML = f.branches.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaif_t_contests").innerHTML = f.trunk.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaif_r_contests").innerHTML = f.roots.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaif_nr_contests").innerText = "#"+number1+"6";
    document.getElementById("bonsaif_idstring_contests").innerText = f.id_string.toLocaleString('en', {minimumFractionDigits: 0});
    
    document.getElementById("bonsaig_name_contests").innerText = g.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaig_types_contests").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, g, "43.75", "43.75");
    document.getElementById("ButtonBonsaiG_contests").style.backgroundImage= fetchbonsaitreequality_small(g);
    document.getElementById("bonsaig_level_contests").innerText = g.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaig_cp_contests").innerHTML = (Math.round((g.foliage+g.branches+g.trunk+g.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
    document.getElementById("bonsaig_ttg_contests").innerText = treetypegroupname[g.treetypegroup];
    document.getElementById("bonsaig_st_contests").innerText = styletypename[g.styletype];
    document.getElementById("bonsaig_nature_contests").innerText = natures[g.nature];
    document.getElementById("bonsaig_f_contests").innerHTML = g.foliage.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaig_b_contests").innerHTML = g.branches.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaig_t_contests").innerHTML = g.trunk.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaig_r_contests").innerHTML = g.roots.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaig_nr_contests").innerText = "#"+number1+"7";
    document.getElementById("bonsaig_idstring_contests").innerText = g.id_string.toLocaleString('en', {minimumFractionDigits: 0});
    
    document.getElementById("bonsaih_name_contests").innerText = h.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaih_types_contests").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, h, "43.75", "43.75");
    document.getElementById("ButtonBonsaiH_contests").style.backgroundImage= fetchbonsaitreequality_small(h);
    document.getElementById("bonsaih_level_contests").innerText = h.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaih_cp_contests").innerHTML = (Math.round((h.foliage+h.branches+h.trunk+h.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
    document.getElementById("bonsaih_ttg_contests").innerText = treetypegroupname[h.treetypegroup];
    document.getElementById("bonsaih_st_contests").innerText = styletypename[h.styletype];
    document.getElementById("bonsaih_nature_contests").innerText = natures[h.nature];
    document.getElementById("bonsaih_f_contests").innerHTML = h.foliage.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaih_b_contests").innerHTML = h.branches.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaih_t_contests").innerHTML = h.trunk.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaih_r_contests").innerHTML = h.roots.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaih_nr_contests").innerText = "#"+number1+"8";
    document.getElementById("bonsaih_idstring_contests").innerText = h.id_string.toLocaleString('en', {minimumFractionDigits: 0});
    
    document.getElementById("bonsaii_name_contests").innerText = i.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaii_types_contests").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, i, "43.75", "43.75");
    document.getElementById("ButtonBonsaiI_contests").style.backgroundImage= fetchbonsaitreequality_small(i);
    document.getElementById("bonsaii_level_contests").innerText = i.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaii_cp_contests").innerHTML = (Math.round((i.foliage+i.branches+i.trunk+i.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
    document.getElementById("bonsaii_ttg_contests").innerText = treetypegroupname[i.treetypegroup];
    document.getElementById("bonsaii_st_contests").innerText = styletypename[i.styletype];
    document.getElementById("bonsaii_nature_contests").innerText = natures[i.nature];
    document.getElementById("bonsaii_f_contests").innerHTML = i.foliage.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaii_b_contests").innerHTML = i.branches.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaii_t_contests").innerHTML = i.trunk.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaii_r_contests").innerHTML = i.roots.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaii_nr_contests").innerText = "#"+number1+"9";
    document.getElementById("bonsaii_idstring_contests").innerText = i.id_string.toLocaleString('en', {minimumFractionDigits: 0});
    
    document.getElementById("bonsaij_name_contests").innerText = j.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaij_types_contests").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, j, "43.75", "43.75");
    document.getElementById("ButtonBonsaiJ_contests").style.backgroundImage= fetchbonsaitreequality_small(j);
    document.getElementById("bonsaij_level_contests").innerText = j.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaij_cp_contests").innerHTML = (Math.round((j.foliage+j.branches+j.trunk+j.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
    document.getElementById("bonsaij_ttg_contests").innerText = treetypegroupname[j.treetypegroup];
    document.getElementById("bonsaij_st_contests").innerText = styletypename[j.styletype];
    document.getElementById("bonsaij_nature_contests").innerText = natures[j.nature];
    document.getElementById("bonsaij_f_contests").innerHTML = j.foliage.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaij_b_contests").innerHTML = j.branches.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaij_t_contests").innerHTML = j.trunk.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaij_r_contests").innerHTML = j.roots.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaij_nr_contests").innerText = "#"+number2+"0";
    document.getElementById("bonsaij_idstring_contests").innerText = j.id_string.toLocaleString('en', {minimumFractionDigits: 0});
}

function fetchbonsaimenu_contests_competition(c1, c2, c3, c4, c5, c6, c7, c8, c9) {
    document.getElementById("bonsaic1_types_contests").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, c1, "43.75", "43.75");
    document.getElementById("ButtonBonsaiC1_contests").style.backgroundImage= fetchbonsaitreequality_small(c1);
    document.getElementById("bonsaic1_level_contests").innerText = c1.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaic1_cp_contests").innerHTML = (Math.round((c1.foliage+c1.branches+c1.trunk+c1.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
    document.getElementById("bonsaic1_ttg_contests").innerText = treetypegroupname[c1.treetypegroup];
    document.getElementById("bonsaic1_st_contests").innerText = styletypename[c1.styletype];
    document.getElementById("bonsaic1_nature_contests").innerText = natures[c1.nature];
    document.getElementById("bonsaic1_f_contests").innerHTML = c1.foliage.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaic1_b_contests").innerHTML = c1.branches.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaic1_t_contests").innerHTML = c1.trunk.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaic1_r_contests").innerHTML = c1.roots.toLocaleString('en', {minimumFractionDigits: 1});
    
    document.getElementById("bonsaic2_types_contests").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, c2, "43.75", "43.75");
    document.getElementById("ButtonBonsaiC2_contests").style.backgroundImage= fetchbonsaitreequality_small(c2);
    document.getElementById("bonsaic2_level_contests").innerText = c2.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaic2_cp_contests").innerHTML = (Math.round((c2.foliage+c2.branches+c2.trunk+c2.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
    document.getElementById("bonsaic2_ttg_contests").innerText = treetypegroupname[c2.treetypegroup];
    document.getElementById("bonsaic2_st_contests").innerText = styletypename[c2.styletype];
    document.getElementById("bonsaic2_nature_contests").innerText = natures[c2.nature];
    document.getElementById("bonsaic2_f_contests").innerHTML = c2.foliage.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaic2_b_contests").innerHTML = c2.branches.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaic2_t_contests").innerHTML = c2.trunk.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaic2_r_contests").innerHTML = c2.roots.toLocaleString('en', {minimumFractionDigits: 1});
    
    document.getElementById("bonsaic3_types_contests").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, c3, "43.75", "43.75");
    document.getElementById("ButtonBonsaiC3_contests").style.backgroundImage= fetchbonsaitreequality_small(c3);
    document.getElementById("bonsaic3_level_contests").innerText = c3.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaic3_cp_contests").innerHTML = (Math.round((c3.foliage+c3.branches+c3.trunk+c3.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
    document.getElementById("bonsaic3_ttg_contests").innerText = treetypegroupname[c3.treetypegroup];
    document.getElementById("bonsaic3_st_contests").innerText = styletypename[c3.styletype];
    document.getElementById("bonsaic3_nature_contests").innerText = natures[c3.nature];
    document.getElementById("bonsaic3_f_contests").innerHTML = c3.foliage.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaic3_b_contests").innerHTML = c3.branches.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaic3_t_contests").innerHTML = c3.trunk.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaic3_r_contests").innerHTML = c3.roots.toLocaleString('en', {minimumFractionDigits: 1});
    
    document.getElementById("bonsaic4_types_contests").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, c4, "43.75", "43.75");
    document.getElementById("ButtonBonsaiC4_contests").style.backgroundImage= fetchbonsaitreequality_small(c4);
    document.getElementById("bonsaic4_level_contests").innerText = c4.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaic4_cp_contests").innerHTML = (Math.round((c4.foliage+c4.branches+c4.trunk+c4.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
    document.getElementById("bonsaic4_ttg_contests").innerText = treetypegroupname[c4.treetypegroup];
    document.getElementById("bonsaic4_st_contests").innerText = styletypename[c4.styletype];
    document.getElementById("bonsaic4_nature_contests").innerText = natures[c4.nature];
    document.getElementById("bonsaic4_f_contests").innerHTML = c4.foliage.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaic4_b_contests").innerHTML = c4.branches.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaic4_t_contests").innerHTML = c4.trunk.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaic4_r_contests").innerHTML = c4.roots.toLocaleString('en', {minimumFractionDigits: 1});
    
    document.getElementById("bonsaic5_types_contests").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, c5, "43.75", "43.75");
    document.getElementById("ButtonBonsaiC5_contests").style.backgroundImage= fetchbonsaitreequality_small(c5);
    document.getElementById("bonsaic5_level_contests").innerText = c5.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaic5_cp_contests").innerHTML = (Math.round((c5.foliage+c5.branches+c5.trunk+c5.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
    document.getElementById("bonsaic5_ttg_contests").innerText = treetypegroupname[c5.treetypegroup];
    document.getElementById("bonsaic5_st_contests").innerText = styletypename[c5.styletype];
    document.getElementById("bonsaic5_nature_contests").innerText = natures[c5.nature];
    document.getElementById("bonsaic5_f_contests").innerHTML = c5.foliage.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaic5_b_contests").innerHTML = c5.branches.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaic5_t_contests").innerHTML = c5.trunk.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaic5_r_contests").innerHTML = c5.roots.toLocaleString('en', {minimumFractionDigits: 1});
    
    document.getElementById("bonsaic6_types_contests").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, c6, "43.75", "43.75");
    document.getElementById("ButtonBonsaiC6_contests").style.backgroundImage= fetchbonsaitreequality_small(c6);
    document.getElementById("bonsaic6_level_contests").innerText = c6.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaic6_cp_contests").innerHTML = (Math.round((c6.foliage+c6.branches+c6.trunk+c6.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
    document.getElementById("bonsaic6_ttg_contests").innerText = treetypegroupname[c6.treetypegroup];
    document.getElementById("bonsaic6_st_contests").innerText = styletypename[c6.styletype];
    document.getElementById("bonsaic6_nature_contests").innerText = natures[c6.nature];
    document.getElementById("bonsaic6_f_contests").innerHTML = c6.foliage.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaic6_b_contests").innerHTML = c6.branches.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaic6_t_contests").innerHTML = c6.trunk.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaic6_r_contests").innerHTML = c6.roots.toLocaleString('en', {minimumFractionDigits: 1});
    
    document.getElementById("bonsaic7_types_contests").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, c7, "43.75", "43.75");
    document.getElementById("ButtonBonsaiC7_contests").style.backgroundImage= fetchbonsaitreequality_small(c7);
    document.getElementById("bonsaic7_level_contests").innerText = c7.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaic7_cp_contests").innerHTML = (Math.round((c7.foliage+c7.branches+c7.trunk+c7.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
    document.getElementById("bonsaic7_ttg_contests").innerText = treetypegroupname[c7.treetypegroup];
    document.getElementById("bonsaic7_st_contests").innerText = styletypename[c7.styletype];
    document.getElementById("bonsaic7_nature_contests").innerText = natures[c7.nature];
    document.getElementById("bonsaic7_f_contests").innerHTML = c7.foliage.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaic7_b_contests").innerHTML = c7.branches.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaic7_t_contests").innerHTML = c7.trunk.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaic7_r_contests").innerHTML = c7.roots.toLocaleString('en', {minimumFractionDigits: 1});
    
    document.getElementById("bonsaic8_types_contests").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, c8, "43.75", "43.75");
    document.getElementById("ButtonBonsaiC8_contests").style.backgroundImage= fetchbonsaitreequality_small(c8);
    document.getElementById("bonsaic8_level_contests").innerText = c8.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaic8_cp_contests").innerHTML = (Math.round((c8.foliage+c8.branches+c8.trunk+c8.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
    document.getElementById("bonsaic8_ttg_contests").innerText = treetypegroupname[c8.treetypegroup];
    document.getElementById("bonsaic8_st_contests").innerText = styletypename[c8.styletype];
    document.getElementById("bonsaic8_nature_contests").innerText = natures[c8.nature];
    document.getElementById("bonsaic8_f_contests").innerHTML = c8.foliage.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaic8_b_contests").innerHTML = c8.branches.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaic8_t_contests").innerHTML = c8.trunk.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaic8_r_contests").innerHTML = c8.roots.toLocaleString('en', {minimumFractionDigits: 1});
    
    document.getElementById("bonsaic9_types_contests").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, c9, "43.75", "43.75");
    document.getElementById("ButtonBonsaiC9_contests").style.backgroundImage= fetchbonsaitreequality_small(c9);
    document.getElementById("bonsaic9_level_contests").innerText = c9.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaic9_cp_contests").innerHTML = (Math.round((c9.foliage+c9.branches+c9.trunk+c9.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
    document.getElementById("bonsaic9_ttg_contests").innerText = treetypegroupname[c9.treetypegroup];
    document.getElementById("bonsaic9_st_contests").innerText = styletypename[c9.styletype];
    document.getElementById("bonsaic9_nature_contests").innerText = natures[c9.nature];
    document.getElementById("bonsaic9_f_contests").innerHTML = c9.foliage.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaic9_b_contests").innerHTML = c9.branches.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaic9_t_contests").innerHTML = c9.trunk.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaic9_r_contests").innerHTML = c9.roots.toLocaleString('en', {minimumFractionDigits: 1});
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
    document.getElementById("seedling"+x+"_type_c_mobile").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, y, "43.75", "43.75");
    document.getElementById("seedling"+x+"_type_mobile").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, y, "21.875", "21.875");
    document.getElementById("seedling"+x+"_type_mobilexs").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, y, "21.875", "21.875");
    
    document.getElementById("seedling"+x+"_sell").style.backgroundImage = fetchbonsaitreequality_small(y);
    document.getElementById("seedling"+x+"_type_sell").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, y, "43.75", "43.75");
    
    document.getElementById("seedling"+x+"_right").style.backgroundImage= fetchbonsaitreequality_small(y);
    document.getElementById("seedling"+x+"_center").style.backgroundImage= fetchbonsaitreequality(y);
    document.getElementById("seedling"+x+"_center_mobile").style.backgroundImage= fetchbonsaitreequality_small(y);
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

function fetchvalues() {
    document.getElementById("skill_growing_nr").innerHTML = skills.growing+1;
    document.getElementById("skill_growing_nr2").innerHTML = skills.growing+1;
    document.getElementById("skill_shaping_nr").innerHTML = skills.shaping+1;
    document.getElementById("skill_shaping_nr2").innerHTML = skills.shaping+1;
    
    document.getElementById("seedling_number").innerText = state.seedlings.toLocaleString('en', {minimumFractionDigits: 0}); 
    
    document.getElementById("skilllevel").innerHTML = skills.level;
    document.getElementById("skilllevel_mobile").innerHTML = skills.level;
    document.getElementById("skilllevel_mobilexs").innerHTML = skills.level;
    document.getElementById("skillexp_left").innerHTML = skills.exp_nextlevel;
    document.getElementById("skillpoints").innerHTML = skills.skillpoints;
    document.getElementById("skillpoints_mobile").innerHTML = skills.skillpoints;
    document.getElementById("skillpoints_mobilexs").innerHTML = skills.skillpoints;
    document.getElementById("money").innerHTML = resources.money;
    document.getElementById("money_mobile").innerHTML = resources.money;
    document.getElementById("money_mobilexs").innerHTML = resources.money;
    document.getElementById("organic_waste").innerHTML = resources.organic_waste;
    document.getElementById("organic_waste_mobile").innerHTML = resources.organic_waste;
    document.getElementById("organic_waste_mobilexs").innerHTML = resources.organic_waste;
    document.getElementById("compost1").innerHTML = resources.compost1;
    document.getElementById("compost1_mobile").innerHTML = resources.compost1;
    document.getElementById("compost1_mobilexs").innerHTML = resources.compost1;
    document.getElementById("bolt").innerHTML = resources.bolt;
    document.getElementById("bolt_mobile").innerHTML = resources.bolt;
    document.getElementById("bolt_mobilexs").innerHTML = resources.bolt;
    document.getElementById("shop_bolt").innerHTML = resources.bolt;
    document.getElementById("shop_bolt_mobile").innerHTML = resources.bolt;
    document.getElementById("metal").innerHTML = resources.metal;
    document.getElementById("metal_mobile").innerHTML = resources.metal;
    document.getElementById("metal_mobilexs").innerHTML = resources.metal;
    document.getElementById("shop_metal").innerHTML = resources.metal;
    document.getElementById("shop_metal_mobile").innerHTML = resources.metal;
    document.getElementById("wire").innerHTML = resources.wire;
    document.getElementById("wire_mobile").innerHTML = resources.wire;
    document.getElementById("wire_mobilexs").innerHTML = resources.wire;
    document.getElementById("shop_wire").innerHTML = resources.wire;
    document.getElementById("shop_wire_mobile").innerHTML = resources.wire;
    document.getElementById("board").innerHTML = resources.board;
    document.getElementById("board_mobile").innerHTML = resources.board;
    document.getElementById("board_mobilexs").innerHTML = resources.board;
    document.getElementById("shop_board").innerHTML = resources.board;
    document.getElementById("shop_board_mobile").innerHTML = resources.board;
    
    document.getElementById("seedlinga_price_sell").innerHTML = seedling1.price;
    document.getElementById("seedlingb_price_sell").innerHTML = seedling2.price;
    document.getElementById("seedlingc_price_sell").innerHTML = seedling3.price;
    document.getElementById("seedlingd_price_sell").innerHTML = seedling4.price;
    document.getElementById("seedlinge_price_sell").innerHTML = seedling5.price;
    document.getElementById("seedlingf_price_sell").innerHTML = seedling6.price;
    document.getElementById("seedlingall_price_sell").innerHTML = seedling1.price+seedling2.price+seedling3.price+seedling4.price+seedling5.price+seedling6.price;
    
    document.getElementById("stats_seedlingstotal").innerHTML = statistics.seedlings_total;
    document.getElementById("stats_bonsaitotal").innerHTML = statistics.bonsais_total;
    document.getElementById("stats_treetypetotal").innerHTML = statistics.bondex_treetype_discovered;
    
    conteststime(clubs_leagues.ttg01c1, "club_ttg01_c1time");
    conteststime(clubs_leagues.ttg01c2, "club_ttg01_c2time");
    conteststime(clubs_leagues.ttg01c3, "club_ttg01_c3time");
    conteststime(clubs_leagues.lea01c1, "league_area01_c1time");
}

function conteststime(variable, placement) {
    if (variable==0) {
        document.getElementById(placement).innerHTML = "";
    }
    else {
        document.getElementById(placement).innerHTML = "(next in "+timetracker(variable)+")";
    }
}

function fetchunlocks() {
    //Unlock treetypes and treequality in areas
    //Area01
    if (exp_area01.treetype01==1) {
        document.getElementById("area01_tt01").innerHTML = '<img src="Images/bonsai01_stamp.svg" width="35" height="35">';
    }
    if (exp_area01.treetype02==1) {
        document.getElementById("area01_tt02").innerHTML = '<img src="Images/bonsai02_stamp.svg" width="35" height="35">';
    }
    if (exp_area01.treetype04==1) {
        document.getElementById("area01_tt04").innerHTML = '<img src="Images/bonsai04_stamp.svg" width="35" height="35">';
    }
    if (exp_area01.treetype05==1) {
        document.getElementById("area01_tt05").innerHTML = '<img src="Images/bonsai05_stamp.svg" width="35" height="35">';
    }
    if (exp_area01.treetype07==1) {
        document.getElementById("area01_tt07").innerHTML = '<img src="Images/bonsai07_stamp.svg" width="35" height="35">';
    }
    if (exp_area01.treetype08==1) {
        document.getElementById("area01_tt08").innerHTML = '<img src="Images/bonsai08_stamp.svg" width="35" height="35">';
    }
    if (exp_area01.treequality01==1) {
        document.getElementById("area01_tq01").innerHTML = '<img src="Images/one_stamp.svg" width="35" height="35">';
    }
    if (exp_area01.treequality02==1) {
        document.getElementById("area01_tq02").innerHTML = '<img src="Images/two_stamp.svg" width="35" height="35">';
    }
    if (exp_area01.treequality03==1) {
        document.getElementById("area01_tq03").innerHTML = '<img src="Images/three_stamp.svg" width="35" height="35">';
    }
    //Area02
    if (exp_area02.treetype01==1) {
        document.getElementById("area02_tt01").innerHTML = '<img src="Images/bonsai01_stamp.svg" width="35" height="35">';
    }
    if (exp_area02.treetype03==1) {
        document.getElementById("area02_tt03").innerHTML = '<img src="Images/bonsai03_stamp.svg" width="35" height="35">';
    }
    if (exp_area02.treetype04==1) {
        document.getElementById("area02_tt04").innerHTML = '<img src="Images/bonsai04_stamp.svg" width="35" height="35">';
    }
    if (exp_area02.treetype06==1) {
        document.getElementById("area02_tt06").innerHTML = '<img src="Images/bonsai06_stamp.svg" width="35" height="35">';
    }
    if (exp_area02.treetype09==1) {
        document.getElementById("area02_tt09").innerHTML = '<img src="Images/bonsai09_stamp.svg" width="35" height="35">';
    }
    if (exp_area02.treetype10==1) {
        document.getElementById("area02_tt10").innerHTML = '<img src="Images/bonsai10_stamp.svg" width="35" height="35">';
    }
    if (exp_area02.treetype11==1) {
        document.getElementById("area02_tt11").innerHTML = '<img src="Images/bonsai11_stamp.svg" width="35" height="35">';
    }
    if (exp_area02.treetype13==1) {
        document.getElementById("area02_tt13").innerHTML = '<img src="Images/bonsai13_stamp.svg" width="35" height="35">';
    }
    if (exp_area02.treetype14==1) {
        document.getElementById("area02_tt14").innerHTML = '<img src="Images/bonsai14_stamp.svg" width="35" height="35">';
    }
    if (exp_area02.treequality01==1) {
        document.getElementById("area02_tq01").innerHTML = '<img src="Images/one_stamp.svg" width="35" height="35">';
    }
    if (exp_area02.treequality02==1) {
        document.getElementById("area02_tq02").innerHTML = '<img src="Images/two_stamp.svg" width="35" height="35">';
    }
    if (exp_area02.treequality03==1) {
        document.getElementById("area02_tq03").innerHTML = '<img src="Images/three_stamp.svg" width="35" height="35">';
    }
    if (exp_area02.treequality04==1) {
        document.getElementById("area02_tq04").innerHTML = '<img src="Images/four_stamp.svg" width="35" height="35">';
    }
    
    //Unlock workers
    if (state.workers_total==3) {
        $(document).ready(function() {
            $('#worker02div').show();
            $('#worker03div').show();
        });
    }
    else if (state.workers_total==2) {
        $(document).ready(function() {
            $('#worker02div').show();
        });
    }
    
    //Unlock skilllevels
    if (skills.level>=1) {
        document.getElementById("skill_compost1_rec1").innerHTML = '<img src="Images/tick.svg" width="20" height="20">';
    }
    if (skills.level>=2) {
        document.getElementById("skill_growing_rec1").innerHTML = '<img src="Images/tick.svg" width="20" height="20">';
        document.getElementById("skill_shaping_rec1").innerHTML = '<img src="Images/tick.svg" width="20" height="20">';
    }
    
    //Unlock skillpoints
    if (skills.skillpoints==0) {
        document.getElementById("skill_compost1_rec2").innerHTML = '<img src="Images/cross.svg" width="20" height="20">';
        document.getElementById("skill_growing_rec3").innerHTML = '<img src="Images/cross.svg" width="20" height="20">';
        document.getElementById("skill_shaping_rec3").innerHTML = '<img src="Images/cross.svg" width="20" height="20">';
    }
    if (skills.skillpoints>=1) {
        document.getElementById("skill_compost1_rec2").innerHTML = '<img src="Images/tick.svg" width="20" height="20">';
        document.getElementById("skill_growing_rec3").innerHTML = '<img src="Images/tick.svg" width="20" height="20">';
        document.getElementById("skill_shaping_rec3").innerHTML = '<img src="Images/tick.svg" width="20" height="20">';
    }
    
    //Unlock equipment
    if (equipment.tools1==1) {
        $(document).ready(function() {
            $('#you_equip_tools1').show();
        });
        document.getElementById("skill_treestyle_rec1").innerHTML = '<img src="Images/tick.svg" width="20" height="20">';
        document.getElementById("skill_treestyle2_rec1").innerHTML = '<img src="Images/tick.svg" width="20" height="20">';
    }
    if (equipment.book_styles1==1) {
        $(document).ready(function() {
            $('#you_equip_bookstyles1').show();
        });
        document.getElementById("skill_treestyle_rec2").innerHTML = '<img src="Images/tick.svg" width="20" height="20">';
    }
    if (equipment.book_styles2==1) {
        $(document).ready(function() {
            $('#shop_equip_bookstyles2').hide();
        });
        $(document).ready(function() {
            $('#you_equip_bookstyles2').show();
        });
        document.getElementById("skill_treestyle2_rec2").innerHTML = '<img src="Images/tick.svg" width="20" height="20">';
    }
    if (equipment.book_robot1==1) {
        $(document).ready(function() {
            $('#you_equip_bookrobot1').show();
        });
        document.getElementById("skill_robot1_rec1").innerHTML = '<img src="Images/tick.svg" width="20" height="20">';
    }
    if (equipment.book_growing1==1) {
        $(document).ready(function() {
            $('#shop_equip_bookgrowing1').hide();
        });
        $(document).ready(function() {
            $('#you_equip_bookgrowing1').show();
        });
        if (skills.growing<10) {
            document.getElementById("skill_growing_rec2").innerHTML = '<img src="Images/tick.svg" width="20" height="20">';
        }
        else if (skills.growing>=10) {
            document.getElementById("skill_growing_book").innerHTML = 2;
            document.getElementById("skill_growing_rec2").innerHTML = '<img src="Images/cross.svg" width="20" height="20">';
        }
    }
    if (equipment.book_shaping1==1) {
        $(document).ready(function() {
            $('#shop_equip_bookshaping1').hide();
        });
        $(document).ready(function() {
            $('#you_equip_bookshaping1').show();
        });
        if (skills.shaping<10) {
            document.getElementById("skill_shaping_rec2").innerHTML = '<img src="Images/tick.svg" width="20" height="20">';
        }
        else if (skills.shaping>=10) {
            document.getElementById("skill_shaping_book").innerHTML = 2;
            document.getElementById("skill_shaping_rec2").innerHTML = '<img src="Images/cross.svg" width="20" height="20">';
        }
    }
    if (equipment.map_area02==1) {
        $(document).ready(function() {
            $('#shop_equip_map_area02').hide();
        });
        $(document).ready(function() {
            $('#you_equip_map_area02').show();
        });
        $(document).ready(function(){
            $('#expedition2').show();
        });
    }
    
    //Unlock skills
    if (skills.treestyles1==1) {
        $(document).ready(function(){
            $('#Skill_Treestyles1').hide();
            $('#Skill_Treestyles1_Learned').show();
            $('#Skill_Treestyles1_Mobile').hide();
            $('#Skill_Treestyles1_Learned_Mobile').show();
        });
        if (state.areasunlocked>=2) {
            $(document).ready(function(){
                $('#Skill_Treestyles2').show();
                $('#Skill_Treestyles2_Mobile').show();
            });
        }
        document.getElementById("skill_treestyle_rec1").innerHTML = '';
        document.getElementById("skill_treestyle_rec2").innerHTML = '';
        document.getElementById("Skill_Treestyles1_Button").innerHTML = "Learned";
        Button_Skill_Treestyles1.className = "";
        document.getElementById("Button_Skill_Treestyles1").style.cursor= "auto";
        $(document).ready(function(){
            $("#menu_style").html("<option value='0'>Choose a style for your bonsai</option><option value='1'>Chokan - Formal Upright Style</option><option value='2'>Moyogi - Informal Upright Style</option><option value='3'>Shakan - Slanting Style</option>");
            $("#menu_style_mobile").html("<option value='0'>Choose a style for your bonsai</option><option value='1'>Chokan - Formal Upright Style</option><option value='2'>Moyogi - Informal Upright Style</option><option value='3'>Shakan - Slanting Style</option>");
        });
    }
    
    if (skills.treestyles2==1) {
        $(document).ready(function(){
            $('#Skill_Treestyles2').hide();
            $('#Skill_Treestyles2_Learned').show();
            $('#Skill_Treestyles2_Mobile').hide();
            $('#Skill_Treestyles2_Learned_Mobile').show();
        });
        document.getElementById("skill_treestyle2_rec1").innerHTML = '';
        document.getElementById("skill_treestyle2_rec2").innerHTML = '';
        document.getElementById("Skill_Treestyles2_Button").innerHTML = "Learned";
        Button_Skill_Treestyles2.className = "";
        document.getElementById("Button_Skill_Treestyles2").style.cursor= "auto";
        $(document).ready(function(){
            $("#menu_style").html("<option value='0'>Choose a style for your bonsai</option><option value='1'>Chokan - Formal Upright Style</option><option value='2'>Moyogi - Informal Upright Style</option><option value='3'>Shakan - Slanting Style</option></option><option value='4'>Han-Kengai - Semi-cascade Style</option></option><option value='5'>Sokan - Double Trunk Style</option></option><option value='6'>Kengai - Full Cascade Style</option></option><option value='7'>Kabudachi - Multi-Trunk Style</option>");
            $("#menu_style_mobile").html("<option value='0'>Choose a style for your bonsai</option><option value='1'>Chokan - Formal Upright Style</option><option value='2'>Moyogi - Informal Upright Style</option><option value='3'>Shakan - Slanting Style</option><option value='4'>Han-Kengai - Semi-cascade Style</option></option><option value='5'>Sokan - Double Trunk Style</option></option><option value='6'>Kengai - Full Cascade Style</option></option><option value='7'>Kabudachi - Multi-Trunk Style</option>");
        });
    }
    
    if (skills.robot1==1) {
        $(document).ready(function(){
            $('#Craft_Robot1').show();
            $('#Craft_Robot1_Mobile').show();
            $('#Skill_Robot1').hide();
            $('#Skill_Robot1_Learned').show();
        });
        document.getElementById("skill_robot1_rec1").innerHTML = '';
        document.getElementById("Skill_Robot1_Button").innerHTML = "Learned";
        Button_Skill_Robot1.className = "";
        document.getElementById("Button_Skill_Robot1").style.cursor= "auto";
    }
    
    if (skills.compost1==1) {
        $(document).ready(function(){
            $('#Craft_Compost1').show();
            $('#Craft_Compost1_Mobile').show();
            $('#resources_0').show();
            $('#resources_2').show();
            $('#Skill_Compost1').hide();
            $('#Skill_Compost1_Learned').show();
            $('#Skill_Compost1_Mobile').hide();
            $('#Skill_Compost1_Learned_Mobile').show();
        });
        
        document.getElementById("skill_compost1_rec1").innerHTML = ''; 
        document.getElementById("skill_compost1_rec2").innerHTML = ''; 
        document.getElementById("Skill_Compost1_Button").innerHTML = "Learned";
        Button_Skill_Compost1.className = "";
        document.getElementById("Button_Skill_Compost1").style.cursor= "auto";
    }
    
    //Unlock Clubs/Leagues
    if (clubs_leagues.ttg01==5) {
        $(document).ready(function(){
            $('#ButtonTTG01_R1').hide();
            $('#ButtonTTG01_R2').hide();
            $('#ButtonTTG01_R3').hide();
            $('#ButtonTTG01_C1').show();
            $('#ButtonTTG01_C2').show();
            $('#ButtonTTG01_C3').show();
        });
    }
    if (clubs_leagues.ttg01==4) {
        $(document).ready(function(){
            $('#ButtonTTG01_R1').hide();
            $('#ButtonTTG01_R2').hide();
            $('#ButtonTTG01_R3').hide();
            $('#ButtonTTG01_C1').show();
            $('#ButtonTTG01_C2').show();
            $('#ButtonTTG01_C3').hide();
        });
    }
    if (clubs_leagues.ttg01==3) {
        $(document).ready(function(){
            $('#ButtonTTG01_R1').hide();
            $('#ButtonTTG01_R2').hide();
            $('#ButtonTTG01_R3').hide();
            $('#ButtonTTG01_C1').show();
            $('#ButtonTTG01_C2').hide();
            $('#ButtonTTG01_C3').hide();
        });
    }
    else if (clubs_leagues.ttg01==2) {
        $(document).ready(function(){
            $('#ButtonTTG01_R1').hide();
            $('#ButtonTTG01_R2').hide();
            $('#ButtonTTG01_R3').show();
            $('#ButtonTTG01_C1').hide();
            $('#ButtonTTG01_C2').hide();
            $('#ButtonTTG01_C3').hide();
        });
    }
    else if (clubs_leagues.ttg01==1) {
        $(document).ready(function(){
            $('#ButtonTTG01_R1').hide();
            $('#ButtonTTG01_R2').show();
            $('#ButtonTTG01_R3').hide();
            $('#ButtonTTG01_C1').hide();
            $('#ButtonTTG01_C2').hide();
            $('#ButtonTTG01_C3').hide();
        });
    }
}
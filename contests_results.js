function contests_result() {
    if (contests.id=="TTG01_R1" || contests.id=="TTG01_R2" || contests.id=="TTG01_R3") {
        contests_result_request();
        if (contests.id=="TTG01_R1") {
            $(document).ready(function(){
                $('#modal_contests_result_request').show();
                $('#modal_contests_result_competition').hide();
            });            
            document.getElementById("modal_contests_result_title").innerText = "Result: Club Raundo - First Request";
            document.getElementById("modal_contests_result_request_result").innerHTML = "The represented bonsai fits the requirements made in our request. Thank you very much.<br>You may proceed with the next request. Two more to go.";
            document.getElementById("modal_contests_result_request_reward").innerText = "3 XP";
            experience(3);
            clubs_leagues.ttg01=1;
            $(document).ready(function(){
                $('#ButtonTTG01_R1').hide();
                $('#ButtonTTG01_R2').show();
                $('#ButtonTTG01_R3').hide();
                $('#ButtonTTG01_C1').hide();
                $('#ButtonTTG01_C2').hide();
                $('#ButtonTTG01_C3').hide();
            });
            contests.bonsaichoosen=0;
            contests.bonsaichoosenx=0;
        }
        else if (contests.id=="TTG01_R2") {
            $(document).ready(function(){
                $('#modal_contests_result_request').show();
                $('#modal_contests_result_competition').hide();
            }); 
            document.getElementById("modal_contests_result_title").innerText = "Result: Club Raundo - Second Request";
            document.getElementById("modal_contests_result_request_result").innerHTML = "Once again the represented bonsai fits the requirements we made. Thank you very much.<br>You may proceed with the next request. One more to go.";
            document.getElementById("modal_contests_result_request_reward").innerText = "5 XP";
            experience(5);
            clubs_leagues.ttg01=2;
            $(document).ready(function(){
                $('#ButtonTTG01_R1').hide();
                $('#ButtonTTG01_R2').hide();
                $('#ButtonTTG01_R3').show();
                $('#ButtonTTG01_C1').hide();
                $('#ButtonTTG01_C2').hide();
                $('#ButtonTTG01_C3').hide();
            });
            contests.bonsaichoosen=0;
            contests.bonsaichoosenx=0;
        }
        else if (contests.id=="TTG01_R3") {
            $(document).ready(function(){
                $('#modal_contests_result_request').show();
                $('#modal_contests_result_competition').hide();
            }); 
            document.getElementById("modal_contests_result_title").innerText = "Result: Club Raundo - Third Request";
            document.getElementById("modal_contests_result_request_result").innerHTML = "Your third represented bonsai, has as usual, fit our requirements. We congratulate you to finishing all our requests.<br>You may proceed now with competing in our competitions.";
            document.getElementById("modal_contests_result_request_reward").innerText = "10 XP";
            experience(10);
            clubs_leagues.ttg01=3;
            $(document).ready(function(){
                $('#ButtonTTG01_R1').hide();
                $('#ButtonTTG01_R2').hide();
                $('#ButtonTTG01_R3').hide();
                $('#ButtonTTG01_C1').show();
                $('#ButtonTTG01_C2').hide();
                $('#ButtonTTG01_C3').hide();
            });
            contests.bonsaichoosen=0;
            contests.bonsaichoosenx=0;
        }
    }
    else if (contests.id=="TTG01_C1" || contests.id=="TTG01_C2" || contests.id=="TTG01_C3" || contests.id=="Area01_C1") {

        if (contests.id=="TTG01_C1") {
            $(document).ready(function(){
                $('#modal_contests_result_request').hide();
                $('#modal_contests_result_competition').show();
            }); 
            contests.difficulty=1;
            contests_comcalc();
            contests_result_competition();
            document.getElementById("modal_contests_result_title").innerText = "Result: Club Raundo - Competition: Beginner";
            if (contests.own_place==1) {
                if (clubs_leagues.ttg01==3) {
                    document.getElementById("modal_contests_result_competition_result").innerHTML = "Congratulations your bonsai placed first and you won the exhibition! You can now enter the advanced exhibition of this league.";
                    clubs_leagues.ttg01=4;
                    $(document).ready(function(){
                        $('#ButtonTTG01_R1').hide();
                        $('#ButtonTTG01_R2').hide();
                        $('#ButtonTTG01_R3').hide();
                        $('#ButtonTTG01_C1').show();
                        $('#ButtonTTG01_C2').show();
                        $('#ButtonTTG01_C3').hide();
                    }); 
                }
                else {
                    document.getElementById("modal_contests_result_competition_result").innerHTML = "Congratulations your bonsai placed first and you won the competition!";
                }
                document.getElementById("modal_contests_result_competition_reward").innerHTML = '10 XP & 10&nbsp;<img src="Images/currency.svg" width="15" height="15">';
                experience(10);
                resources.money +=10;
                fetchvalues();
            }
            if (contests.own_place==2) {
                document.getElementById("modal_contests_result_competition_result").innerHTML = "Well done, your bonsai was second best in the competitionn. A bit more growing and care and it might win the exhibition.";
                document.getElementById("modal_contests_result_competition_reward").innerHTML = '5 XP & 5&nbsp;<img src="Images/currency.svg" width="15" height="15">';
                experience(5);
                resources.money +=5;
                fetchvalues();
            }
            if (contests.own_place==3) {
                document.getElementById("modal_contests_result_competition_result").innerHTML = "Not bad, your bonsai made it into the top three bonsais of the competition.";
                document.getElementById("modal_contests_result_competition_reward").innerHTML = '3 XP & 3&nbsp;<img src="Images/currency.svg" width="15" height="15">';
                experience(3);
                resources.money +=3;
                fetchvalues();
            }
            if (contests.own_place>=4) {
                document.getElementById("modal_contests_result_competition_result").innerHTML = "Unfortunately your bonsai didn't place within the top three spots for the competition. Try again another time.";
                document.getElementById("modal_contests_result_competition_reward").innerText = "1 XP";
                experience(1);
                fetchvalues();
            }
            contests.bonsaichoosen=0;
            contests.bonsaichoosenx=0;
            contests.own_place=1;
            clubs_leagues.ttg01c1=1200;
            fetchvalues();
        }
        else if (contests.id=="TTG01_C2") {
            $(document).ready(function(){
                $('#modal_contests_result_request').hide();
                $('#modal_contests_result_competition').show();
            }); 
            contests.difficulty=2;
            contests_comcalc();
            contests_result_competition();
            document.getElementById("modal_contests_result_title").innerText = "Result: Club Raundo - Competition: Advanced";
            document.getElementById("modal_contests_result_competition_result").innerHTML = "TBA";
            document.getElementById("modal_contests_result_competition_reward").innerText = "xxx XP";
            //experience(10);
            //clubs_leagues.ttg01=3;
            //$(document).ready(function(){
            //    $('#ButtonTTG01_R1').hide();
            //    $('#ButtonTTG01_R2').hide();
            //    $('#ButtonTTG01_R3').hide();
            //    $('#ButtonTTG01_C1').hide();
            //    $('#ButtonTTG01_C2').hide();
            //    $('#ButtonTTG01_C3').hide();
            //}); 
            contests.bonsaichoosen=0;
            contests.bonsaichoosenx=0;
            contests.own_place=1;
            clubs_leagues.ttg01c2=1200;
            fetchvalues();
        }
        else if (contests.id=="TTG01_C3") {
            $(document).ready(function(){
                $('#modal_contests_result_request').hide();
                $('#modal_contests_result_competition').show();
            }); 
            contests.difficulty=3;
            contests_comcalc();
            contests_result_competition();
            document.getElementById("modal_contests_result_title").innerText = "Result: Club Raundo - Competition: Expert";
            document.getElementById("modal_contests_result_competition_result").innerHTML = "TBA";
            document.getElementById("modal_contests_result_competition_reward").innerText = "xxx XP";
            //experience(10);
            //clubs_leagues.ttg01=3;
            //$(document).ready(function(){
            //    $('#ButtonTTG01_R1').hide();
            //    $('#ButtonTTG01_R2').hide();
            //    $('#ButtonTTG01_R3').hide();
            //    $('#ButtonTTG01_C1').hide();
            //    $('#ButtonTTG01_C2').hide();
            //    $('#ButtonTTG01_C3').hide();
            //}); 
            contests.bonsaichoosen=0;
            contests.bonsaichoosenx=0;
            contests.own_place=1;
            clubs_leagues.ttg01c3=1200;
            fetchvalues();
        }
        else if (contests.id=="Area01_C1") {
            $(document).ready(function(){
                $('#modal_contests_result_request').hide();
                $('#modal_contests_result_competition').show();
            }); 
            contests.difficulty=4;
            contests_comcalc();
            contests_result_competition();
            document.getElementById("modal_contests_result_title").innerText = "Result: League Area 01 - Exhibition: Beginner";
            if (contests.own_place==1) {
                if (clubs_leagues.lea01==3) {
                    document.getElementById("modal_contests_result_competition_result").innerHTML = "Congratulations your bonsai placed first and you won the exhibition! You can now enter the advanced exhibition of this league.";
                    clubs_leagues.lea01=4;
                    $(document).ready(function(){
                        $('#ButtonArea01_R1').hide();
                        $('#ButtonArea01_R2').hide();
                        $('#ButtonArea01_R3').hide();
                        $('#ButtonArea01_C1').show();
                        $('#ButtonArea01_C2').show();
                        $('#ButtonArea01_C3').hide();
                    }); 
                }
                else {
                    document.getElementById("modal_contests_result_competition_result").innerHTML = "Congratulations your bonsai placed first and you won the exhibition!";
                }
                document.getElementById("modal_contests_result_competition_reward").innerHTML = '20 XP & 10&nbsp;<img src="Images/currency.svg" width="15" height="15">';
                experience(20);
                resources.money +=10;
                fetchvalues();
            }
            if (contests.own_place==2) {
                document.getElementById("modal_contests_result_competition_result").innerHTML = "Well done, your bonsai was second best in the exhibition. A bit more growing and care and it might win the exhibition.";
                document.getElementById("modal_contests_result_competition_reward").innerHTML = '10 XP & 5&nbsp;<img src="Images/currency.svg" width="15" height="15">';
                experience(10);
                resources.money +=5;
                fetchvalues();
            }
            if (contests.own_place==3) {
                document.getElementById("modal_contests_result_competition_result").innerHTML = "Not bad, your bonsai made it into the top three bonsais of the exhibition.";
                document.getElementById("modal_contests_result_competition_reward").innerHTML = '5 XP & 3&nbsp;<img src="Images/currency.svg" width="15" height="15">';
                experience(5);
                resources.money +=3;
                fetchvalues();
            }
            if (contests.own_place>=4) {
                document.getElementById("modal_contests_result_competition_result").innerHTML = "Unfortunately your bonsai didn't place within the top three spots for the exhibition. Try again another time.";
                document.getElementById("modal_contests_result_competition_reward").innerText = "3 XP";
                experience(3);
                fetchvalues();
            }
            contests.bonsaichoosen=0;
            contests.bonsaichoosenx=0;
            contests.own_place=1;
            clubs_leagues.lea01c1=3600;
            fetchvalues();
        }
    } 
}
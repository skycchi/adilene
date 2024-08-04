function process(){
    var miku, rin, len, luka, meiko, kaito, teto, gakupo, ia, gumi;
    miku = rin = len = luka = meiko = kaito = teto = gakupo = ia = gumi = 0;
    var one = document.getElementsByName("one");
    var two = document.getElementsByName("two");
    var three = document.getElementsByName("three");
    var four = document.getElementsByName("four");
    var five = document.getElementsByName("five");
    var six = document.getElementsByName("six");
    var seven = document.getElementsByName("seven");
    var eight = document.getElementsByName("eight");
    var nine = document.getElementsByName("nine");
    var ten = document.getElementsByName("ten");
    var count;
    
    /* 
        miku: sweet, cute, bright, happy, kind, friendly, childish
        rin: brash, loud, excitable, bright, silly, childish, stubborn
        len: shy, responsible, calm, childish
        luka: smart, shy, kind, calm
        meiko: strong, chill, stubborn, brash, loud
        kaito: kind, friendly, bright, silly
        teto: weird, childish
        gakupo: weird
    */

    /* q1 */
    for (i = 0; i < one.length; i++){
        if (one[i].checked){ 
            count = one[i].value; 
        }
    }
    if (count == "1"){ miku++; rin++; kaito++; }
    else if (count == "2"){ len++; luka++; }
    else if (count == "3"){ meiko++; teto++; }
    else if (count == "4"){ gakupo++; }
    else{ console.log("An error has occured.") }
    
    /* q2 */
    for (i = 0; i < two.length; i++){
        if (two[i].checked){ 
            count = two[i].value; 
        }
    }
    if (count == "1"){ miku++; }
    else if (count == "2"){ rin++; }
    else if (count == "3"){ len++; }
    else if (count == "4"){ luka++; }
    else{ console.log("An error has occured.") }
    
    /* q3 */
    for (i = 0; i < three.length; i++){
        if (three[i].checked){ 
            count = three[i].value; 
        }
    }
    if (count == "1"){ miku++; }
    else if (count == "2"){ rin++; }
    else if (count == "3"){ len++; }
    else if (count == "4"){ luka++; }  
    else{ console.log("An error has occured.") }
    
    /* q4 */
    for (i = 0; i < four.length; i++){
        if (four[i].checked){ 
            count = four[i].value; 
        }
    }
    if (count == "1"){ miku++; }
    else if (count == "2"){ rin++; }
    else if (count == "3"){ len++; }
    else if (count == "4"){ luka++; }
    else{ console.log("An error has occured.") }
    
    /* q5 */
    for (i = 0; i < five.length; i++){
        if (five[i].checked){ 
            count = five[i].value; 
        }
    }
    if (count == "1"){ miku++; }
    else if (count == "2"){ rin++; }
    else if (count == "3"){ len++; }
    else if (count == "4"){ luka++; }
    else{ console.log("An error has occured.") }

    /* q6 */
    for (i = 0; i < six.length; i++){
        if (six[i].checked){ 
            count = six[i].value; 
        }
    }
    if (count == "1"){ miku++; }
    else if (count == "2"){ rin++; }
    else if (count == "3"){ len++; }
    else if (count == "4"){ luka++; }
    else if (count == "5"){ meiko++; }
    else if (count == "6"){ kaito++; }
    else if (count == "7"){ teto++; }
    else if (count == "8"){ gakupo++; }
    else if (count == "9"){ ia++; }
    else if (count == "10"){ gumi++; }
    else if (count == "11"){ /* ignore */ }
    else{ console.log("An error has occured.") }
    
    /* results */
    $("#f").remove();
    $("#submit").remove();
    $("header").html("VOCALOID QUIZ RESULTS");
    $(".description").html("The results are in! You are...");
    
    i = Math.max(miku, rin, len, luka, meiko, kaito, teto, gakupo, ia, gumi);
    console.log(i);
    
    if (miku == i){
        $("#start").after("<div ctr id='resultswrap'><div node id='results'><header>HATSUNE MIKU</header><div id='flex'><div><img src='/images/games/quiz/miku.png'></div><div>SAMPLE TEXT</div></div><a id='link'>Take the quiz @ adilene.net</a></div></div>");
    }
    
    else if (rin == i){ 
        $("#start").after("<div ctr id='resultswrap'><div node id='results' style='--border:#000000; --background:#fff1b6;'><header style='color:#000000;'>KAGAMINE RIN</header><div id='flex'><div><img src='/images/games/quiz/rin.png'></div><div>SAMPLE TEXT</div></div><a id='link' style='color:#0087d4; --filter:#ffd42a;'>Take the quiz @ adilene.net</a></div></div>");
    }
    
    else if (len == i){ 
        $("#start").after("<div ctr id='resultswrap'><div node id='results' style='--border:#000000; --background:#fff1b6;'><header style='color:#000000'>KAGAMINE LEN</header><div id='flex'><div><img src='/images/games/quiz/len.png'></div><div>SAMPLE TEXT</div></div><a id='link' style='color:#0087d4; --filter:#ffd42a;'>Take the quiz @ adilene.net</a></div></div>");
    }
    
    else if (luka == i){ 
        $("#start").after("<div ctr id='resultswrap'><div node id='results' style='--border:#000000; --background:#ffebe9;'><header style='color:#ac0089;'>MEGURINE LUKA</header><div id='flex'><div><img src='/images/games/quiz/luka.png'></div><div>SAMPLE TEXT</div></div><a id='link' style='color:#ac0089; --filter:#000000;'>Take the quiz @ adilene.net</a></div></div>");
    }
    
    else if (meiko == i){ 
        $("#start").after("<div ctr id='resultswrap'><div node id='results' style='--border:#d62c1c; --background:#ffb594;'><header style='color:#d62c1c'>MEIKO</header><div id='flex'><div><img src='/images/games/quiz/meiko.png'></div><div>SAMPLE TEXT</div></div><a id='link' style='color:#d62c1c; --filter:#d62c1c;'>Take the quiz @ adilene.net</a></div></div>");
    }
    
    else if (kaito == i){ 
        $("#start").after("<div ctr id='resultswrap'><div node id='results' style='--border:#213672; --background:#dff5ff;'><header style='color:#213672'>KAITO</header><div id='flex'><div><img src='/images/games/quiz/kaito.png'></div><div>SAMPLE TEXT</div></div><a id='link' style='color:#213672; --filter:#213672;'>Take the quiz @ adilene.net</a></div></div>");
    }
    
    else if (teto == i){ 
        $("#start").after("<div ctr id='resultswrap'><div node id='results' style='--border:#cc495e; --background:#e18493;'><header style='color:#cc495e'>KASANE TETO</header><div id='flex'><div><img src='/images/games/quiz/teto.png'></div><div>SAMPLE TEXT</div></div><a id='link' style='color:#cc495e; --filter:#958885;'>Take the quiz @ adilene.net</a></div></div>");
    }
    
    else if (gakupo == i){ 
        $("#start").after("<div ctr id='resultswrap'><div node id='results' style='--border:#5f5ba8; --background:#d0b9c9;'><header style='color:#5f5ba8'>KAMUI GAKUPO</header><div id='flex'><div><img src='/images/games/quiz/gakupo.png'></div><div>SAMPLE TEXT</div></div><a id='link' style='color:#5f5ba8; --filter:#5f5ba8;'>Take the quiz @ adilene.net</a></div></div>");
    }
    
    else if (ia = i){
        $("#start").after("<div ctr id='resultswrap'><div node id='results' style='--border:#ec6ca5; --background:#F8C1D9;'><header style='color:#000000'>IA</header><div id='flex'><div><img src='/images/games/quiz/ia.png'></div><div>SAMPLE TEXT</div></div><a id='link' style='color:#000000; --filter:#ec6ca5;'>Take the quiz @ adilene.net</a></div></div>");
    }
    
    else if (gumi = i){
        $("#start").after("<div ctr id='resultswrap'><div node id='results' style='--border:#78bf5c; --background:#fee6b5;'><header style='color:#000000'>IA</header><div id='flex'><div><img src='/images/games/quiz/gumi.png'></div><div>SAMPLE TEXT</div></div><a id='link' style='color:#000000; --filter:#78bf5c;'>Take the quiz @ adilene.net</a></div></div>");
    }
    
    else{
        $("#start").after("<div ctr id='resultswrap'>An error has occured.</div>");
    }
    
    $("#resultswrap").after("<div style='margin-bottom:10px; display:flex; gap:10px; justify-content:center; align-items:flex-end;'><a id='download' onclick='downloadResults();'><button style='margin-top:10px;'>Download</button></a><button onclick='location.reload();'>Restart</button></div>");
}

function downloadResults(){
    domtoimage.toBlob(document.getElementById("results"))
    .then(function (blob) {
        window.saveAs(blob, "results.png");
    });
}
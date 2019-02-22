// booleans
var ketchup = false;
var license = false;


// code ran
$(document).ready(function(){

// $("#N0").show();
$("#buttons").append(createButton("button1", tomato) + createButton("button2", swimsuit) 
+ createButton("button3", wildLifeLicense) + createButton("button4", planeTickets) );

// if($("#button1").text() === tomato){
//     ketchup = true;
//     $("footer").text("You've got ketchup!");
//     console.log(5);
// }
// if($("#button3").text() === wildLifeLicense){
//     license = true;
//     $("footer").text("You've got a license!");
// }
$("#go").click(function(){
    narrative("#N0","#N1");
    butt(iceland,greenland);
    hide("#button3","#button4");
    $("#go").hide();
    $("footer").hide();
})



// buttons 1
$("#button1").click(function(){
    $("#button1").css("background-color", "red");
    if($("#button1").text() === tomato){
        ketchup = true;
        $("footer").text("You've got ketchup!");
        console.log(5);
    }
    if($("#button1").text()===iceland || $("#button1").text()===next){
        narrative("#N1","#N2");
        $("#N14").hide();
        $("#button2").show();
        $("#button3").show();
        butt(teleportation,mindReading,vision);
    }
    else if($("#button1").text()===teleportation){
        narrative("#N2","#N3");
        $("#button3").hide();
        butt(pineapplePizza,nuggets);
    }
    else if($("#button1").text()===pineapplePizza){
        narrative("#N3","#youDied");
        hide("#button2");
        butt(restart);
    }
    else if($("#button1").text()===bfgf){
        narrative("#N4","#N7");
        $("#button1").hide();
        $("#button2").hide();
    }
    else if($("#button1").text() === theEnd){
        narrative("#N5","#youDied");
        hide("#button1","#button2");
        butt(restart);
    }
    else if($("#button1").text() === wife){
        narrative("#N6","#N15");
        butt(flower,skinny);
        hide("#button3","#button4");
    }
    else if($("#button1").text() === sarah){
        narrative("#N9","#N10");
        hide("#button1","#button2","#button3");
    }
    else if($("#button1").text() === next){
        narrative("#N9","#N1");
        hide("#button1","#button2","#button3");
        butt(iceland,greenland);
    }
    else if($("#button1").text() === flower){
        narrative("#N15","#N12");
        hide("#button1","#button2");
    }
    else if($("#button1").text() === restart){
        location.reload();
    }
   
})

// buttons 2
$("#button2").click(function(){
    $("#button2").css("background-color", "yellow");

    if($("#button2").text() === swimsuit){
        $("footer").text("You've got a swim suit.");
    }

    if($("#button2").text() === greenland){
        narrative("#N1","#N6")
        $("#button3").show();
        $("#button4").show();
        butt(wife,daughters,dog,polarBear);
    }
    else if($("#button2").text() === mindReading){
        narrative("#N2","#N4");
        $("#button3").hide();
        butt(bfgf,pickles);
    }
    else if($("#button2").text() === pickles){
        narrative("#N4","#youDied");
        $("#button1").hide();
        $("#button2").hide();
        butt(restart);
        alert("Pickles are not good. Ew!")
    }
    else if($("#button2").text() === theStart){
        narrative("#N5","#N1");
        butt(iceland,greenland);
    }
    else if($("#button2").text() === daughters){
        narrative("#N6","#N9");
        butt(sarah,lara,pam);
        hide("#button4");
    }
    else if($("#button2").text() === lara){
        narrative("#N9","#N13");
        hide("#button1","#button2","#button3");
        $("#youDied").show();
        butt(restart);
    }
    else if($("#button2").text() === skinny){
        narrative("#N15","#youDied");
        butt(restart);
        hide("#button2");
        alert("Can't go skinny dipping in Greenland. Come on it's too cold.");
    }
    
     if($("#button2").text()===nuggets && ketchup === true){
        narrative("#N3","#N16");
        $("#button1").hide();
        $("#button2").hide();
    }
    if($("#button2").text()===nuggets && ketchup === false){
        alert("You need ketchup. Nuggets without ketchup is nasty! It's not a debate");
    }

})

// buttons 3
$("#button3").click(function(){
    $("#button3").css("background-color", "green");

    if($("#button3").text() === wildLifeLicense){
        license = true;
        $("footer").text("You've got a license!");
    }

    if($("#button3").text() === vision){
        narrative("#N2","#N5");
        butt(theEnd,theStart);
        hide("#button3");
    }
    else if($("#button3").text() === dog){
        narrative("#N6","#N11");
        hide("#button1","#button2","#button3","#button4");
    }
    
    if($("#button3").text() === pam){
        narrative("#N9","#N14");
        butt(next);
        hide("#button2","#button3");
    }
    
})

// buttons 4
$("#button4").click(function(){
    $("#button4").css("background-color", "#00FFFF");

    if($("#button4").text() === planeTickets){
        $("footer").text("You've got plane tickets");
    }

    if($("#button4").text() === polarBear && license === true){
        narrative("#N6","#N8");
        hide("#button1","#button2","#button3","#button4");
        butt(restart);
    }
    if($("#button4").text() === polarBear && license === false){
        alert("You need a wild life license");
    }
})

})


// workzone
// buttons variables
var tomato = "KETCHUP"
var swimsuit = "SWIM SUIT"
var wildLifeLicense = "WILD LIFE LICENSE"
var planeTickets = "PLANE TICKETS"
var iceland = "ICELAND";
var greenland = "GREENLAND";
var teleportation = "TELEPORTATION";
var mindReading = "MIND READING";
var vision = "VISION";
var pineapplePizza = "PINEAPPLE PIZZA"
var nuggets = "NUGGETS"
var barbecueSauce = "BARBECUE SAUCE"
var bfgf = "HIS WEDDING CEREMONY APPROACHING"
var pickles = "EATING RAW PICKLES"
var theEnd = "THE END OF THE WORLD"
var theStart = "THE CREATION OF THE WORLD"
var ouch = "HIMSELF HITTING HIS LITTLE TOE ON THE EDGE OF THE SHELF"
var restart = "Restart"
var tryAgain = "Try Again"
var wife = "WIFE"
var daughters = "TWO DAUGHTERS"
var dog = "DOG CHEWY"
var polarBear = "POLAR BEAR"
var skinny = "SKINNY DIPPING"
var flower = "FLOWER FETCHING"
var sarah = "SARAH & AMY"
var lara = "LARA & MARGOT"
var pam = "PAM & KAYLA"
var next = "NEXT" 
// next takes you to iceland narrative

// hide and show function
var narrative = function(a,b){
    $(a).fadeOut();
    $(b).fadeIn();
}
// hide buttons after use
var hide = function(a,b,c,d){
    $(a).hide();
    $(b).hide();
    $(c).hide();
    $(d).hide();
}

// button update function
var butt = function(a,b,c,d){
    $("#button1").text(a);
    $("#button2").text(b);
    $("#button3").text(c);
    $("#button4").text(d);
}

var createButton = function(id, text){

    $("#buttons").append("<button id=" + id + ">" + text + "</button");

}
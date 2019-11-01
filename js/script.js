var data = {
    "users": [
    {
        "name":"Fodboldfan1998",
        "point":3184,
        "placering": 1
    },
    {
        "name":"M_Bundu_For_Prezz",
        "point":3083,
        "placering": 2
    },
    {
        "name":"Agf_forever_",
        "point":2818,
        "placering": 3
    },
    {
        "name":"Randers_er_lort1740",
        "point":2590,
        "placering": 4
    },
    {
        "name":"Capri-sun-elskeren",
        "point":2401,
        "placering": 5
    },

    {
        "name":"Stikmigenølellersslår...",
        "point":1984,
        "placering": 6
    },

    {
        "name":"Hejsameddigsa12948",
        "point":1337,
        "placering": 7
    },
    {
        "name":"Huttelihut14",
        "point":1336,
        "placering": 8
    }
]
}

function visData(jsonElementer){

var divIndhold="";

for(var i = 0; i<jsonElementer.users.length; i++){
divIndhold += '<div class="container"> <figure> <img src="img/avatar-placeholder.png" alt=""> </figure> <section> <h3 id="playerName">' + jsonElementer.users[i].name +  
'</h3> <p id="points">' + jsonElementer.users[i].point + 
' point</p> </section> <div class="numberCircle">' + jsonElementer.users[i].placering + '</div> </div>';
}
document.getElementById("mainWrapper").innerHTML = divIndhold;
}

visData(data);
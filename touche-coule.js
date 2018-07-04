var pvBateau1 = 3;
var pvBateau2 = 3;
// Met à jour le message affiché à l´adversaire à chaque nouvelle
// lettre saisie dans l´input ´Mon nom´
$("#moi").keyup(function(event) {
  var myName = $("#moi").val();
  $("#megaphone").text(promptMessage(myName));
});

// Génère le message diffusé à l´adversaire
function promptMessage(playerName) {
  if (playerName.length > 0) {
    return ">> " + playerName + " va attaquer en ..." + $('#canon').val();
  } else {
    return "> En attente d'un joueur";
  }
}

// Fonction de tir
function tirer(){
    let c = $('#canon').val().toLowerCase();
    if($("#"+c).length){
        if($("#"+c).css("background-color") === "rgb(0, 0, 255)"){
            if($("#"+c).html() != "X") {
                $('#history').append("<li>"+$('#moi').val()+" a tiré en "+c+": Plouf</li>");
                $("#"+c).css('background-color', "red");
            }
            else {
                if(c === "b4" || c === "b5" || c === "b6") {
                    pvBateau1--;
                    if(pvBateau1 === 0 && pvBateau2 === 0){
                        $('#history').append("<li>"+$('#moi').val()+" a tiré en "+c+": WIN</li>");
                        $("#"+c).css('background-color', "red");
                        $('div#no-mans-land').html("NO MAN'S LAND");
                        $('div#no-mans-land').css("background", 'url("index.jpg") no-repeat');
                    }
                    else if(pvBateau1 === 0){
                        $('#history').append("<li>"+$('#moi').val()+" a tiré en "+c+": Coule</li>");
                        $("#"+c).css('background-color', "red");
                    }
                    else{
                        $('#history').append("<li>"+$('#moi').val()+" a tiré en "+c+": Touche</li>");
                        $("#"+c).css('background-color', "red");
                    }

                }
                else if(c === "d9" || c === "e9" || c === "f9"){
                    pvBateau2--;
                    if(pvBateau1 === 0 && pvBateau2 === 0){
                        $('#history').append("<li>"+$('#moi').val()+" a tiré en "+c+": WIN</li>");
                        $("#"+c).css('background-color', "red");
                        $('div#no-mans-land').html("NO MAN'S LAND");
                        $('div#no-mans-land').css("background", 'url("index.jpg") no-repeat'); 
                    }
                    else if(pvBateau2 === 0){
                        $('#history').append("<li>"+$('#moi').val()+" a tiré en "+c+": Coule</li>");
                        $("#"+c).css('background-color', "red");
                    }
                    else{
                        $('#history').append("<li>"+$('#moi').val()+" a tiré en "+c+": Touche</li>");
                        $("#"+c).css('background-color', "red");
                    }
                }
            }
        }
        else
            alert('La case a deja ete ciblee');
    }
    else
        alert('La case n existe pas !');
}

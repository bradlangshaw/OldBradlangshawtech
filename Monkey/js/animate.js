$("button").click(function(){
  let rand = Math.floor((Math.random() * 5) + 1)
  let rand1 = Math.floor((Math.random() * 2) + 1)
 $( "#mouth" ).attr({
        "src" : "img/Mouth"+ rand +".svg",
    });

 $( "#leftarm" ).attr({
        "src" : "img/leftarm"+ rand1 +".svg",
    });

 $( "#rightarm" ).attr({
        "src" : "img/rightarm"+ rand1 +".svg",
        "class" : "rightarmfix",
    });
    

    $('#audio').attr({
      "src" : "audio/"+ rand +".mp3",
      "autoplay" : "autoplay",
    })



    $("#audio").play();



    });


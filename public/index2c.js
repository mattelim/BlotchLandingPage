var transValue = 5.0/1;
var radMin = 1.0/1;
var radVar = 2.7-radMin;
var speedVar = 1231;
var circleDOM = $("#Layer_1").children("circle");
var intervalID;

$(initialStart);
$(loopStart);

$("body").mousemove(function(e) {
    var x = -(e.pageX + this.offsetLeft) / 45;
    var y = -(e.pageY + this.offsetTop) / 45;
    $(this).css('background-position', x + 'px ' + y + 'px');
});

$(".paraGrid").mousemove(function(e) {
    var x = -(e.pageX + this.offsetLeft) / 15;
    var y = -(e.pageY + this.offsetTop) / 15;
    $("#GridContainer").css('background-position', x + 'px ' + y + 'px');
    $("#topGrid").css('background-position', x + 'px');
});

function loopStart() {
  circleDOM.each(function() {
    $(this).velocity({
      r: Math.random()*radVar + radMin
    },{
      duration: (speedVar/4)+Math.random()*(speedVar/2)
    });
  });
  intervalID = window.setInterval(loop, speedVar);
}

function initialStart() {
  circleDOM.each(function() {
    $(this).velocity({
      translateX: Math.random()*transValue-(transValue/2),
      translateY: Math.random()*transValue-(transValue/2),
      r: 0.0
    },{
      duration: (speedVar/2)+Math.random()*(speedVar/1)
    });
    var colorNum = Math.random()*6;
    switch(Math.floor(colorNum)) {
      case 0:
        $(this).velocity({
          fill: "#FFD400"
        });
        break;
      case 1:
        $(this).velocity({
          fill: "#EF3C6B"
        });
        break;
      case 2:
        $(this).velocity({
          fill: "#00ACCE"
        });
        break;
      case 3:
        $(this).velocity({
          fill: "#6863AC"
        });
        break;
      case 4:
        $(this).velocity({
          fill: "#40A372"
        });
        break;
      case 5:
        $(this).velocity({
          fill: "#F36E29"
        });
        break;
      default:
        $(this).velocity({
          fill: "#F36E29"
        });
    }
  });
}

function loop(){
  circleDOM.each(function() {
    $(this).velocity({
      translateX: Math.random()*transValue-(transValue/2),
      translateY: Math.random()*transValue-(transValue/2),
      r: Math.random()*radVar + radMin
    },{
      duration: (speedVar/2)+Math.random()*(speedVar)
    });
  });
}

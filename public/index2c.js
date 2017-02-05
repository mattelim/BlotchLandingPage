//$("circle").velocity({ fill: "#ff0000" }, {duration: 1500});

//$(loop);
var transValue = 5.0/1;
var radMin = 1.0/1;
var radVar = 2.7-radMin;
var speedVar = 5100-3100;
// var isColor = true;

var circleDOM = $("#Layer_1").children("circle");

var intervalID;

//implement some way to change delay/decay time instead of "natural" increase?

// previous version separated speed into speedMin and speedVar
// setInterval was previously unassociated with speedVar

$(firstStart);
$(changeColor);

$("body").mousemove(function(e) {
    var x = -(e.pageX + this.offsetLeft) / 45;
    var y = -(e.pageY + this.offsetTop) / 45;
    $(this).css('background-position', x + 'px ' + y + 'px');
});

$("#GridContainer").mousemove(function(e) {
    var x = -(e.pageX + this.offsetLeft) / 15;
    var y = -(e.pageY + this.offsetTop) / 15;
    $(this).css('background-position', x + 'px ' + y + 'px');
});

function firstStart() {
  $(loop);
  intervalID = window.setInterval(loop, speedVar);
  //console.log("started");
}

function changeColor() {
  intervalID = window.setTimeout(function() {
    circleDOM.each(function() {
      var colorNum = Math.random()*6;
      switch(Math.floor(colorNum)) {
        case 0:
          $(this).velocity({
            fill: "#FFD400"
          },{
            duration: (speedVar/2)+Math.random()*(speedVar)
          });
          break;
        case 1:
          $(this).velocity({
            fill: "#EF3C6B"
          },{
            duration: (speedVar/2)+Math.random()*(speedVar)
          });
          break;
        case 2:
          $(this).velocity({
            fill: "#00ACCE"
          },{
            duration: (speedVar/2)+Math.random()*(speedVar)
          });
          break;
        case 3:
          $(this).velocity({
            fill: "#6863AC"
          },{
            duration: (speedVar/2)+Math.random()*(speedVar)
          });
          break;
        case 4:
          $(this).velocity({
            fill: "#40A372"
          },{
            duration: (speedVar/2)+Math.random()*(speedVar)
          });
          break;
        case 5:
          $(this).velocity({
            fill: "#F36E29"
          },{
            duration: (speedVar/2)+Math.random()*(speedVar)
          });
          break;
        default:
          $(this).velocity({
            fill: "#F36E29"
          },{
            duration: (speedVar/2)+Math.random()*(speedVar)
          });
      }
    });
  }, 200);
  //console.log("started");
}

function stopStart() {
  window.clearInterval(intervalID);
  //console.log("stopped");
  intervalID = window.setInterval(loop, speedVar);
  //console.log("started");
}

//"framerate" of 1000 doesn't differ much from 100
//*seems like fr just have to be average speed
//*** interesting... loop interval can be LESS than animation duration

function loop(){
  circleDOM.each(function() {
    //var xpos = $(this).attr("cx");
    //var ypos = $(this).attr("cy");
    //console.log(transValue);
    //console.log("radVar= " + radVar);
    //console.log("radMin= " + radMin);

    //var radius = Math.random()*radVar + radMin;

    $(this).velocity({
      translateX: Math.random()*transValue-(transValue/2),
      translateY: Math.random()*transValue-(transValue/2),
      r: Math.random()*radVar + radMin
      //r: 0.4
    },{
      duration: (speedVar/2)+Math.random()*(speedVar)

      //duration: Math.random()*500
      //duration: 100+Math.random()*100
      //complete: loop
    });

    //console.log("radius: " + $(this).attr("r"));

  });
}

/*
 * To-do
 *     Leaving a trail
 */

/*
 * Options
 *     multiple random movements with each different timings
 *     single universal timer
 */

/*
function blotch_anim() {
  $(this).velocity({ fill: "#ff0000" }, {duration: 1500});
}
*/

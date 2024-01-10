
// var counter = 0;
// var interval;

// function timer(){
//    counter++;
//    console.log(counter);
// }

// // setInterval(timer,1000);// repeat continously

// interval = setInterval(timer,1000);

// setTimeout(function(){
// clearInterval(interval,);
// },10000);




var hour = 0;
var min = 0;
var sec =0;
var msec =0 ;
var interval;
var hourHeading = document.getElementById("hour");
var minheading = document.getElementById("min");
var secondHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");

function StartTimer(){
    msec++;
    msecHeading.innerHTML = msec;
    if(msec>=100){
        sec++;
        secondHeading.innerHTML = sec;
        msec = 0;

    }

    else if(sec>=60){
        min++;
        minheading.innerHTML = min;
        sec = 0;

    }

    else if(min>=60){
        hour++;
        hourHeading .innerHTML = hour;
        min =0 ;
    }

}


function start(){
    interval = setInterval(StartTimer,10)

}


function pause(){
clearInterval(interval);

}


function reset(){
     hour = 0;
     min = 0;
     sec = 0;
     msec = 0 ;
  hourHeading.innerHTML = hour;
  minheading.innerHTML = min;
  secondHeading.innerHTML= sec;
  msecHeading.innerHTML = msec;
pause();
}

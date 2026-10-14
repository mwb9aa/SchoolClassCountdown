////////////////Declare global variables
// Initialize Neutralino and set some window properties sometimes these can be set in neutralino.config.json but not all of them or sometimes its to combat a bug. I wonder if I should just set them here instead of the config file? I did notice that when running the app with the command neu run in terminal the js file can be modified, saved, and the program automatically reloads with the new code.
Neutralino.init();
Neutralino.window.setDraggableRegion('body');
Neutralino.window.setSize(window.Neutralino.window.getSize());
//Neutralino.window.move(-2510, 1245); // x, y

let currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }); //Current time
let day; //Current Day define here so it can be used in multiple functions
let currentDate = null; //Current Date, month, year; Define here so it can be used in multiple functions
let now = new Date(); //Current time as object
let timesIndex=0; //current class hour, define here so it can be used in multiple functions
let nIntervId; // variable to store our intervalID

//Formats the datetime
const formatter=new Intl.DateTimeFormat('en-US',{month:'long', day:'2-digit', year:'numeric', hour:'2-digit', minute:'2-digit', hour12:false } );

////////////////Functions
function getDay() {day=now.getDay(); return day;} //Date object (year, month (-1, so Dec is month 11), Date, Hour, Minute, Second)
function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); } //Sleep function using promises
async function goHome() { console.log("GoHome in function"); timesIndex=0; await sleep(10000); Neutralino.app.exit(); } //Go Home function, waits 10 seconds before closing the app
function endTime(currentDate,timeIndex){
  if (currentDate==null) {   if (currentDate==null) { getDay(); }
  switch (day) {
    case 0: //Sunday
    case 6: //Saturday
      document.getElementById("time").innerHTML='<span class="little">Wait for a school day!!!</span>'; goHome(); break;
    case 1: //Monday
    case 2: //Tuesday
    case 4: //Thursday
    case 5: //Friday
      //times = ["07:30","07:50","08:50","09:49","10:48","11:47","12:12","13:11","14:10","15:09","15:30","16:00"];//Ending times for Lunch Shift 1
      times = ["07:30","07:50","08:50","09:49","10:48","11:47","12:46","13:11","14:10","15:09","15:30","16:00"];//Ending times for Lunch Shift 2
      //countdown(timesIndex);
      break;
    case 3: //Wednesday
      //times = ["07:30","07:50","08:45","09:40","10:35","11:30","11:52","12:47","13:42","14:37","15:30","16:00"];//Ending power hour times for Lunch Shift 1
      times =["07:30","07:50","08:45","09:40","10:35","11:30","11:52","12:47","13:42","14:37","15:30","16:00"];//Ending power hour times for Lunch Shift 2
      //countdown(timesIndex);
      break;
    default:
      document.getElementById("time").innerHTML='<span class="little">I could not find out the day.</span>'; goHome(); break;
    }

    var t=times[timeIndex].split(':');//split the times value at the array position into hour and minute
    Future = new Date(now.getFullYear()+'-'+String((now.getMonth()+1)).padStart(2,'0')+'-'+String(now.getDate()).padStart(2,'0')+'T'+t[0]+':'+t[1]+':00');//Figure out the time class is out
    //var F = Future.getTime();//Convert the future time into a timestamp  COMMENTED OUT 6 OCT 2026
    var Timedifference = Future-Date.now();//Find the difference between now and the future
    //If there is time left, show it by counting down in minutes:seconds.
    if (Timedifference >= 0) {
      var hours = Math.floor(Timedifference / 36e5);
      var minutes = Math.floor(Timedifference % 36e5 / 60000); if (hours > 0) {minutes=minutes+(hours*60);}
      var seconds = Math.floor(Timedifference % 60000 / 1000);
      var Countdown=minutes.toString().padStart(2,0)+":"+seconds.toString().padStart(2,0);
      document.getElementById("time").innerHTML="<span>"+Countdown+"</span>";
    }
    else {
      timesIndex++;//Increase the array position by 1
      if (timesIndex > times.length-1) { clearInterval(nIntervId); nIntervId=null; document.getElementById("time").innerHTML='<span class="little">GO HOME NOW!!!</span>'; goHome(); return;  }
      console.log('Times Array Index: '+timesIndex);
      clearInterval(nIntervId);//clear the interval started earlier
      nIntervId=null;//stop the interval from actually running
      nIntervId=setInterval(endTime,1000,currentDate,timesIndex);//create a new instance of the interval
     }

    return;
  }
}
nIntervId=setInterval(endTime,1000,currentDate,timesIndex);
////////////////Declare global variables
//Class times
const times = ["07:30","09:23","10:40","11:57","13:40","14:57","15:20","15:30"];//Ending times for Lunch Shift 2
//Current time
let currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
//console.log(new Date());console.log("");//console.log("Current time is: "+currentTime);
//Current Day define here so it can be used in multiple functions
let day;
//Current Date, month, year; Define here so it can be used in multiple functions
let currentDate = null;
//Current time as object
let now = new Date();
//current class hour, define here so it can be used in multiple functions
let timesIndex=0;
// variable to store our intervalID
let nIntervId;
//Current Time
//let rightNow = Date.now();
//Formats the datetime
const formatter=new Intl.DateTimeFormat('en-US',{month:'long', day:'2-digit', year:'numeric', hour:'2-digit', minute:'2-digit', hour12:false } );
//searches the url for the a paramerter named block
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
//console.log(params);

////////////////Functions
function getDay() {day=now.getDay(); return day;} //Date object (year, month (-1, so Dec is month 11), Date, Hour, Minute, Second)
function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); } //Sleep function using promises
async function goHome() {
  console.log("GoHome in function");
  timesIndex=0;
  await sleep(10000);
  window.close();
}
function endTime(currentDate,timeIndex){
  if (currentDate==null) { getDay(); } 
  if (0 < day & day < 6) { 
    var t=times[timeIndex].split(':');//split the times value at the array position into hour and minute
    Future = new Date(now.getFullYear()+'-'+String((now.getMonth()+1)).padStart(2,'0')+'-'+String(now.getDate()).padStart(2,'0')+'T'+t[0]+':'+t[1]+':00');//Figure out the time class is out
    var F = Future.getTime();//Conver the future time into a timestamp
    var Timedifference = Future-Date.now();//Find the difference between now and the future
    //If there is time left, show it by counting down in minutes:seconds.
    if (Timedifference >= 0) {
      var hours = Math.floor(Timedifference / 36e5);
      var minutes = Math.floor(Timedifference % 36e5 / 60000); if (hours > 0) {minutes=minutes+(hours*60);}
      var seconds = Math.floor(Timedifference % 60000 / 1000);
      var Countdown=minutes.toString().padStart(2,0)+":"+seconds.toString().padStart(2,0);
      document.getElementById("time").innerHTML="<span data-tauri-drag-region>"+Countdown+"</span>";
    }
    else { 
      timesIndex++;//Increase the array position by 1
      if (timesIndex > times.length-1) { clearInterval(nIntervId); nIntervId=null; document.getElementById("time").innerHTML='<span data-tauri-drag-region class="little">GO HOME NOW!!!</span>'; goHome(); return;  }
      console.log('Times Array Index: '+timesIndex);
      clearInterval(nIntervId);//clear the interval started earlier
      nIntervId=null;//stop the interval from actually running
      nIntervId=setInterval(endTime,1000,currentDate,timesIndex);//create a new instance of the interval
     }    
  } else { console.log("Wait for a school day"); }
  return;
}
nIntervId=setInterval(endTime,1000,currentDate,timesIndex);
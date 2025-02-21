let clock= document.querySelector("#clock");
let timer = null;
let reset = document.getElementById("reset");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
console.log(clock)
let [seconds, minutes, hours]=[0,0,0];

start.addEventListener("click",()=>{
    if (timer!=null){
        clearInterval(timer);
    }
   timer=setInterval(()=>{
            seconds++;
            if (seconds ==60) {
                minutes ++;
                seconds=0;
                if (minutes==60){
                    hours++;
                    minutes=0;
                }
            }
           let h=hours<10? "0"+ hours:hours;
           let m=minutes<10? "0"+ minutes:minutes;
           let s=seconds<10? "0"+ seconds:seconds;
            clock.innerHTML= `<h1>${h} :${m}: ${s}</h1>`;
    },1000)
   
})

reset.addEventListener("click",()=>{
    [seconds, minutes, hours]=[0,0,0];
    clearInterval(timer);
    let h=hours<10? "0"+ hours:hours;
    let m=minutes<10? "0"+ minutes:minutes;
    let s=seconds<10? "0"+ seconds:seconds;
    clock.innerHTML= `<h1>${h} :${m}: ${s}</h1>`;
})

stop.addEventListener("click",()=>{
    clearInterval(timer);
})

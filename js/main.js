
//variable
let hours = 0;
let min = 0;
let second = 0;
let millescond = 0;
let stopbut = document.querySelector('#stop');
let watch = document.querySelector(".watch")
let reset = document.querySelector('#rest');
let hour = document.getElementById('hours');
let minute = document.getElementById('minute');
let seconds = document.getElementById('second');
let milleScond = document.getElementById('milleScond');
let interval = null ;
//====================swap between tab (tab1 , tab2)
let collectTab = document.querySelectorAll('.tab');
for (let i = 0; i < collectTab.length; i++) {
	let item = collectTab[i];
	item.addEventListener('click', (event) => {
		let tab_active = document.querySelector('.tab.active');
		let disb_none = document.querySelector('.display-blk');
		tab_active.classList.remove('active');
		disb_none.classList.remove('display-blk');
        let cont_numb = `.content-${i+1}`;
        event.target.classList.add('active');
		document.querySelector(cont_numb).classList.add('display-blk');
	});
}
//===========================content-1=====================
//function  control 
function control(){
    millescond++;
    if(millescond/1000 === 1){
        second++;
        millescond = 0;
    }
    if(second/60 === 1){
        min++;
        second = 0;
    }
    if(min/60 === 1){
        hours++;
        min = 0;
    }
    innerValue(millescond,second,min,hours);
}
//inner valu function to modify value in html
function innerValue(millescond,second,min,hours){
    //format value
    if(second < 10){
        second = "0"+second;
    }
    if(hours < 10){
        hours = "0"+hours;
    }
    if(min < 10){
        min = "0"+min;
    }
    if(millescond < 10){
        millescond = "0"+millescond;
    }
    //inner value
hour.childNodes[0].nodeValue = hours;
minute.childNodes[0].nodeValue  = min;
seconds.childNodes[0].nodeValue  = second;
milleScond.childNodes[0].nodeValue  = millescond;
minute.childNodes[0].nodeValue  = min;
}
//reset timer
function resetTim(){
    hours = 0;
    min = 0 ;
    millescond = 0;
    second = 0;
    innerValue(millescond,second,min,hours);
}
//Counter coordination

//play -1
//stop 0
//contine 1
stopbut.addEventListener('click',()=>{
    if(stopbut.value == -1 || stopbut.value == 1){
        stopbut.textContent = "Stop";
        stopbut.value = "0" ;
        stopbut.style.backgroundColor = "yellow";
        interval = setInterval(control,1);
        
    }else if(stopbut.value == 0){
        stopbut.textContent = "Continue";
        stopbut.value = "1" ;
        stopbut.style.backgroundColor = "#FFA500";
        clearInterval(interval);
       
    }
});
reset.addEventListener('click',()=>{
    stopbut.value == "-1";
    stopbut.textContent="Play";
    stopbut.style.backgroundColor = "#080";
   resetTim();
   clearInterval(interval);
    
});
//===========================countDown =====================
let parent_countDown = document.querySelector('.countDown');
let hours_down =  parent_countDown.querySelector('#hours');
 let minute_down = parent_countDown.querySelector('#minutes');
 let second_down = parent_countDown.querySelector('#seconds');
 let start_btn = parent_countDown.querySelector('#start');
 let return_btn = parent_countDown.querySelector('#return');
 let setHour = 00;
 let setMinute = 00;
 let setSecond = 00;
 let collec_h1 = null;
 //let timerInterval = null;---*
//creat option child
 //--I don't know if writing HTml is better than js here???
 function creatOptionChild(parent,numberOption){
    for(let i = 0;i<numberOption;i++){
        let option = document.createElement("option");
        if(i<10) i="0"+i;
        option.textContent = i ;
        parent.appendChild(option);
       }
 }
 //create option child for hours_down
 creatOptionChild(hours_down,13);
 //create option child for minute_down
 creatOptionChild(minute_down,61);
 //create option child for second_down
 creatOptionChild(second_down,61);
 //addEvent Listener for start_btn
 start_btn.addEventListener('click',(event)=>{
     if(start_btn.value == -1){
    getValue();//just when start 
     }
    //timerInterval =  setInterval(timer,1000);----*
    changeStatusBtn(event,timer,1000);
 });
 //change status button 
 //Duration of a function to repeate it in setInterval function
 let timerInterval = null;
 function changeStatusBtn(event,callback,duration){
     
    let element = event.target;
    if(element.value == -1 || element.value == 1){
        element.textContent = "Stop";
        element.value = "0" ;
        element.style.backgroundColor = "yellow";
        timerInterval = setInterval(callback,duration);
        
    }else if(element.value == 0){
        element.textContent = "Continue";
        element.value = "1" ;
        element.style.backgroundColor = "#FFA500";
        clearInterval(timerInterval);
    }
 }

 function getValue(){
     setHour = hours_down.value;
     setMinute = minute_down.value;
     setSecond = second_down.value;
     //replace select hours with h1
     replaceSelect(hours_down,setHour);
     //replace mintues
     replaceSelect(minute_down,setMinute);
     //replace second
     replaceSelect(second_down,setSecond);
      collec_h1 =  document.querySelector('.countDown').querySelectorAll('h1');
 }
 //function replace all select tag 
 function replaceSelect(oldElement , newValue){
  let newElement =  document.createElement('h1');
  newElement.textContent = newValue;
  oldElement.replaceWith(newElement);
 }
 function timer(){
   
     if(setSecond>0){
       //  alert(setSecond);
        setSecond--;
     }else if(setSecond == 0 && setMinute >0){
        setSecond =60;
        setMinute--;

     }else if(setMinute ==0 && setHour>0){
        setMinute=60;
        setHour--;
     }
    
    innerValueDown(setHour,setMinute,setSecond)
 }
  function innerValueDown(houre,minute,second){
   collec_h1[0].textContent = houre;
    collec_h1[1].textContent = minute;
    collec_h1[2].textContent = second;
  }
  return_btn.addEventListener('click',getValue);
 
//under development 
/*
*I haven't finished it yet. There are still stops and problems that I try to solve in my spare time
**I hope that I have performed it to the fullest
*/
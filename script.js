function displayTime()
{
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var mins = dateTime.getMinutes();
    var seconds = dateTime.getSeconds();
    var session = document.getElementById('session');

    if(hrs>=12){
        session.innerHTML='PM';
    }

    else{
        session.innerHTML='AM';
    }

    if(hrs>12){
        hrs=hrs-12;
    }
    document.getElementById('hours').innerHTML=hrs;
    document.getElementById('minutes').innerHTML=mins;
    document.getElementById('seconds').innerHTML=seconds;
}




// repeated execution
setInterval(displayTime, 1000)

// executed only once
// setTimeout(setTimeout(), 5000)

// document.getElementById('button').onclick=function(){
//     document.getElementById('main').style.backgroundColor="black";
//     document.getElementById('button').style.backgroundColor="white";
//     document.getElementById('button').style.color="black";

//     document.getElementById('button').innerHTML="Light Mode";
// }

const bt = document.getElementById('button') ; 
bt.addEventListener('click' , () => { 
     if ( bt.innerHTML=='Dark Mode'){ 
        document.body.style.backgroundColor ='black' ;
       
        bt.innerHTML = 'Light Mode' ;
        document.getElementById('button').style.color = 'black';
        document.getElementById('button').style.backgroundColor = 'white';


       document.getElementById('hours').style.color = 'white';
       document.getElementById('minutes').style.color = 'white';
       document.getElementById('seconds').style.color = 'white';
       document.getElementById('session').style.color = 'white';

     }
    else{ 
        document.body.style.backgroundColor ='white' ;
       
        bt.innerHTML = 'Dark Mode' ;
        document.getElementById('button').style.color = 'white';
        document.getElementById('button').style.backgroundColor = 'black';


        document.getElementById('hours').style.color = 'black';
       document.getElementById('minutes').style.color = 'black';
       document.getElementById('seconds').style.color = 'black';
       document.getElementById('session').style.color = 'black';
     }
});


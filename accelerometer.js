var watchID = null;
var watchLastX=0;
var watchLastY=0;
var watchLastZ=0;
var moveCounter=0;

var LastX=0;
var LastY=0;
var LastZ=0;
var LastT=0;

var startSymul=false;

    function startWatch() {
        var options = { frequency: 250 };
		try {watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);}
		catch(er){
		//if (watchID == null) symulacja();
		if (startSymul) symulacja();
		
		}
	}
		

    // Stop watching the acceleration
    function stopWatch() {
        if (watchID) {
            navigator.accelerometer.clearWatch(watchID);
            watchID = null;
        }
	}
		

    // onSuccess: Get a snapshot of the current acceleration
    function onSuccess(acceleration) {
		if (acceleration){

		
			var deltaX=Math.abs(acceleration.x - watchLastX);
			var deltaY=Math.abs(acceleration.y - watchLastY);
			var deltaZ=Math.abs(acceleration.z - watchLastZ);
			var suma=deltaX+deltaY+deltaZ;
			var sumaa=acceleration.x+acceleration.y+acceleration.z;
			if (suma > 3) {	moveCounter++;} else {moveCounter = Math.max(0, --moveCounter);}		
			
			watchLastX = acceleration.x;
			watchLastY = acceleration.y;
			watchLastZ = acceleration.z;
			
			$('#infotest').innerHTML='<b>'+moveCounter+'</b><br />';
			$('#infotest').innerHTML+=' <b>D:s:'+r(suma)+'</b> <br />X:'+r(deltaX)+' <br />Y:'+r(deltaY)+' <br />Z:'+r(deltaZ)+'<br />';
			$('#infotest').innerHTML+='<b>A:s:'+r(sumaa)+'</b> <br />x:'+r(acceleration.x)+' <br />y:'+r(acceleration.y)+' <br />z:'+r(acceleration.z)+'<br />';
				//if (suma < -3) {goback(); return;}
				//if (suma > 9)  {gonext(); return;}
				//if (acceleration.y < -3) {goback(); return;}
				//if (acceleration.y > 9)  {gonext(); return;}
				//acceleration.timestamp
				
				rysuj(acceleration);
				

		}
    }

	function r(v){
		return Math.round(v*100);
	}
	
    function onError() {
        //alert('onError!');
		}



	function symulacja(){
	var it=window.setInterval(function(){
			var acceleration={};
			
			acceleration.x=LastX+(Math.random()); if (acceleration.x>9.81) acceleration.x=-9.81; LastX=acceleration.x;
			acceleration.y=LastY+(Math.random()); if (acceleration.y>9.81) acceleration.y=-9.81; LastY=acceleration.y;
			acceleration.z=LastZ+(Math.random()); if (acceleration.z>9.81) acceleration.z=-9.81; LastZ=acceleration.z;
			
			//acceleration.x=(Math.random()*20)-10;
			//acceleration.y=(Math.random()*20)-10;
			//acceleration.z=(Math.random()*10);
			acceleration.timestamp=111111;
			//console.log(acceleration);
			onSuccess(acceleration);
			return acceleration;
		},333);
	}

 	
function rysuj(acceleration){
		//var c=document.getElementById("myCanvas");
		//var ctx=c.getContext("2d");

	var dmax=60;
	var xmax=398;
	var ymax=398;
	var pol=200;
	
		try {
			var z=skala(acceleration.z,10);
	    	var x=skala(acceleration.x,20); 
				x=(x-(z/2))+pol;
				x=xmax-x-z;
			var y=skala(acceleration.y,20); 
				y=(y-(z/2))+pol;
			var t=acceleration.timestamp;
		} catch(er)
		{
			var z=Math.round((Math.random()*(dmax*0.8))+(dmax*0.2));
			var x=Math.round((Math.random()*(xmax-z)));
			var y=Math.round((Math.random()*(ymax-z)));	
			var t=Math.random();	
		}
		//console.log(d+ ' ' +xlos+ ' ' +ylos);

	//ctx.clearRect(0, 0,xmax,ymax);	
	//ctx.fillStyle="#ffa000";
	//ctx.fillRect(x,y,z,z);
	ctx.fillStyle="rgba(255,255,255,0.1)";
	ctx.fillRect(0,0,xmax,ymax);
	ctx.fillStyle="rgba(0,0,255,0.3)";
	ctx.fillRect(x,y,z,z);

	ctx.fillStyle="rgba(255,0,0,0.3)";
	x=moveCounter*10;
	ctx.fillRect(x,x,10,10);
	
	
	
	$('#infotest').innerHTML+='<p>x='+x+'<br />'+'y='+y+'<br />'+'z='+z+'<br />'+'t='+t+'</p>';
	
}	
function skala(v,s){
	var a=((v)*s);
	return Math.round(a);
}	
	



		

function goback(){alert('back')};
function gonext(){alert('next')};
 
 
//phonegap 
    function playBeep() {
        navigator.notification.beep(1);
    }
    function vibrate() {
        navigator.notification.vibrate(200);
    }
 
 
 
// kapiszon 
 
 var $=function kapiszon(id) {
	var prefix=id[0];
	var iid=id.slice(1,id.length);

	switch (prefix){
		case '#':	return document.getElementById(iid);   			break;
		case '.':	return document.getElementsByClassName(iid);  	break;
		default:	return document.getElementsByTagName(id); 
		}
		
	}
	
	
function toDate(date){
	if  (!date) date=new Date();
	var d = new Date(date);
	var miesiac = d.getMonth()+1;  if (miesiac<10) miesiac = '0'+miesiac;
	var dzien   = d.getDate();     if (dzien<10)   dzien   = '0'+dzien;
	var godzina = d.getHours();    if (godzina<10) godzina = '0'+godzina;
	var minuta  = d.getMinutes();  if (minuta<10)  minuta  = '0'+minuta;
	var rok     = d.getFullYear();
	var pldata=rok+'-'+dzien+'-'+miesiac+' <b>'+godzina+':'+minuta+'</b>';
	return pldata;
}		
	
	
	
	
	
	
	
function zapal(){$("#strona").style.opacity='1.0';}	
function zgas() {$("#strona").style.opacity='0.7';}	
	
	
function koniec(){
	try  {
	stopWatch();
	navigator.app.exitApp();
	}
	catch(err) {
	  //window.scrollTo(0,0);
	  }
}
	



function loadURL(url){
	try  { navigator.app.loadUrl(url, { openExternal:true } );  }
	catch(err) {
	  window.location.href=url;
	  }
}



 
 
 
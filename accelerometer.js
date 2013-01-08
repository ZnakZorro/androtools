var watchID = null;
var watchLastX=0;
var watchLastY=0;
var watchLastZ=0;

var LastX=Math.random();
var LastY=Math.random();
var LastZ=Math.random();
var LastT=0;


    function startWatch() {
        var options = { frequency: 100 };
		try {watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);}
		catch(er){symulacja()}
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
			var deltaX=acceleration.x - watchLastX;
			var deltaY=acceleration.y - watchLastY;
			var deltaZ=acceleration.z - watchLastZ;
			var suma=deltaY+deltaZ;
			var sumaa=acceleration.y+acceleration.z;
			
			watchLastX = acceleration.x;
			watchLastY = acceleration.y;
			watchLastZ = acceleration.z;
			
			$('#infotest').innerHTML='<b>A:s:'+sumaa+'</b> <br />:x:'+acceleration.x+' <br />:y:'+acceleration.y+' <br />:z:'+acceleration.z+'<br />';
			$('#infotest').innerHTML+=' <b>D:s:'+suma+'</b> <br />:x:'+deltaX+' <br />:y:'+deltaY+' <br />:z:'+deltaZ+'<br />';
				//if (suma < -3) {goback(); return;}
				//if (suma > 9)  {gonext(); return;}
				//if (acceleration.y < -3) {goback(); return;}
				//if (acceleration.y > 9)  {gonext(); return;}
				//acceleration.timestamp
				
				rysuj(acceleration);
				

		}
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
	$('#infotest').innerHTML+='x='+x+'<br />'+'y='+y+'<br />'+'z='+z+'<br />'+'t='+t;
	
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



 
 
 
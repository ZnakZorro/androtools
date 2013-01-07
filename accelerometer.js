
var watchID = null;
var watchLastX=0;
var watchLastY=0;
var watchLastZ=0;


    function startWatch() {
        var options = { frequency: 2000 };
		try {watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);}
		catch(er){}
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
			watchLastY = acceleration.y;
			$('#infotest').innerHTML='A :x:'+acceleration.x+' :y:'+acceleration.y+' :z:'+acceleration.z+' <b>:s:'+sumaa+'</b><br /><br />';
			$('#infotest').innerHTML+='D :x:'+deltaX+' :y:'+deltaY+' :z:'+deltaZ+' <b>:s:'+suma+'</b><br />';
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
			acceleration.x=(Math.random()*20)-10;
			acceleration.y=(Math.random()*20)-10;
			acceleration.z=(Math.random()*10);
			acceleration.timestamp=111111;
			//console.log(acceleration);
			onSuccess(acceleration);
			return acceleration;
		},333);
	}
 	
function rysuj(acceleration){
		var c=document.getElementById("myCanvas");
		var ctx=c.getContext("2d");

	var dmax=60;
	var xmax=398;
	var ymax=398;
	var pol=200;
	
		try {
			var z=skala(acceleration.z,10);
	    	var x=skala(acceleration.x,20); x=(x-(z/2))+pol;
			var y=skala(acceleration.y,20); y=(y-(z/2))+pol;
			var t=acceleration.timestamp;
		} catch(er)
		{
			var z=Math.round((Math.random()*(dmax*0.8))+(dmax*0.2));
			var x=Math.round((Math.random()*(xmax-z)));
			var y=Math.round((Math.random()*(ymax-z)));	
			var t=Math.random();	
		}
		//console.log(d+ ' ' +xlos+ ' ' +ylos);
	//ctx.fillStyle="#ffffff";
	//ctx.fillRect(0,0,xmax,ymax);
	ctx.clearRect(0, 0,xmax,ymax);	
	ctx.fillStyle="#f00000";
	ctx.fillRect(x,y,z,z);
	$('#accelerometer').innerHTML='<hr />x='+x+'<br />'+'y='+y+'<br />'+'z='+z+'<br />'+'t='+t;
	
}	
function skala(v,s){
	var a=((v)*s);
	return Math.round(a);
}	
	



		

function goback(){alert('back')};
function gonext(){alert('next')};
 

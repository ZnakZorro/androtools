    function playBeep() {
        navigator.notification.beep(1);
    }
    function vibrate() {
        navigator.notification.vibrate(200);
    }


//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
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
			//$('#title').innerHTML=' : '+acceleration.z;
			//$('#infotest').innerHTML='A :x:'+acceleration.x+' :y:'+acceleration.y+' :z:'+acceleration.z+' :s:'+sumaa+'<br />';
			//$('#infotest').innerHTML+='D :x:'+deltaX+' :y:'+deltaY+' :z:'+deltaZ+' :s:'+suma+'<br />';
			//if (suma < -3) {goback(); return;}
			//if (suma > 9)  {gonext(); return;}
		
			//if (acceleration.z <5)  {playBeep();}
			//if (acceleration.z <4)  {vibrate();}
			if (acceleration.z <3)  {vibrate();gonext(); return;}
		
			
			
			//if (acceleration.y < -3) {goback(); return;}
			//if (acceleration.y > 9)  {gonext(); return;}
			//acceleration.timestamp
		}
    }

    // onError: Failed to get the acceleration
    function onError() {
        //alert('onError!');
    }

//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

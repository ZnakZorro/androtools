/* 
Kapiszon v 0.0.1
like not jQuery
licence: completly free
*/

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
	try  {navigator.app.exitApp();}
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



	
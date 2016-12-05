
function Begin() {
	console.log('start');
	document.getElementById('startknop').style.display = "none";
	document.getElementById('titel').innerHTML = "";
	showtekst('Er was eens een klein jongentje. Zijn naam wa Tarzan. Hij was gestrand met zijn ouders ergens in de jungle. De ouders hadden een boomhut gemaakt ergens hoog in de boom waar niks en niemand bij kon komen. Totdat het moment dat een tijger in de boom kwam. Verplaats je in de moeder en je hebt de keuze:')
	document.body.style.backgroundImage = "url('foto 3.jpg')";
	document.body.style.backgroundSize = "1820px 980px";
	document.getElementById('begintekst').style.top = "-100px";
	document.getElementById('begintekst').style.position = "absolute";
	document.getElementById('begintekst').style.left = "-250px";
	document.getElementById('begintekst').style.color = "white";
	document.getElementById('weg').style.display = "inline";
	document.getElementById('vechten').style.display = "inline";
}
function Verstoppen() {
	
	clearInterval(lbgt_interval);
	document.getElementById('weg').style.display = "none";
	document.getElementById('begintekst').innerHTML = "";
	document.body.style.backgroundImage = "url('foto 6.gif')";
	document.getElementById('vechten').style.display = "none";
	showtekst('Tarzan lag in de wieg en begon te huilen. Een van de apen namelijk "Nana" die hoorde iets of iemand huilen en ging kijken. Nana deed voorzichtig want ze zag dat de tijger hier was geweest. Maar uiteindelijk vond ze tarzan en dacht: zal ik hem meenemen of laten liggen?');
	document.getElementById('liggen').style.display = "inline";
	document.getElementById('meenemen').style.display = "inline";
}
function Liggen() {
	clearInterval(lbgt_interval);
	document.getElementById('liggen').style.display = "none";
	document.getElementById('begintekst').innerHTML = "";
	document.body.style.backgroundImage = "url('foto 6.jpg')"
	document.getElementById('meenemen').style.display = "none";
	document.getElementById('terug').style.display = "inline";
	showtekst('helaas je hebt tarzan laten liggen en is omgekomen van de honger. Probeer het opnieuw!')
	document.getElementById('begintekst').style.left = "50px";
	document.getElementById('begintekst').style.fontSize = "100px";
	document.getElementById('begintekst').style.color = "black";
}
function Meenemen() {
	clearInterval(lbgt_interval);
	document.getElementById('meenemen').style.display = "none";
	document.getElementById('begintekst').innerHTML = "";
	document.body.style.backgroundImage = "url('foto 7.gif')"
	document.getElementById('liggen').style.display = "none";
	showtekst('Nana komt teug bij de apen family met tarzan. Alle apen zijn helemaal gek op tarzan. Behalve dodo hij vind het niet fijn dat tarzan er is omdat het een mens is. Hij laat ons er ook niet langs om het bos verder in te gaan. Mischien moeten we hem een banaan geven. Zoek een banaan en geef hem aan dodo.');
	document.getElementById('dodo').style.display = "inline";
	document.getElementById('banaantje').style.display = "inline";
}
function Vechten() {
	clearInterval(lbgt_interval);
	document.getElementById('vechten').style.display = "none";
	document.getElementById('begintekst').innerHTML = ""
	showtekst('helaas je hebt verloren van de tijger en bent overleden')
	document.getElementById('titel').innerHTML = "game over";
	document.getElementById('titel').style.color = "red";
	document.getElementById('titel').style.textShadow = "5px 5px 1px darkred";
	document.getElementById('begintekst').style.top = "100px";
	document.getElementById('begintekst').style.left = "100px";
	document.getElementById('weg').style.display = "none";
	document.getElementById('back').style.display = "inline";
	document.body.style.backgroundImage = "url('foto 4.jpg')";
	document.body.style.backgroundSize = "1820px 980px";
}
function Back(){
	location.reload();
}
function Terug(){
	location.reload();
}
var lbgt_interval = '';
function showtekst (tekst){
	document.getElementById('begintekst').innerHTML = "";
	var lbgt_char = tekst.split('');
	var lbgt_length = lbgt_char.length - 1;
	var lbgt_index = 0;
	lbgt_interval = setInterval(function(){
		if (lbgt_index <= lbgt_length) {
		document.getElementById('begintekst').innerHTML += lbgt_char[lbgt_index];
		lbgt_index++;
	}
		else {
			clearInterval(lbgt_interval);
		}
	},40);
}
function dodo(){
	clearInterval(lbgt_interval);
	document.getElementById('dodo').style.display = "none";
	document.getElementById('begintekst').innerHTML = "";
	document.body.style.backgroundImage = "url('foto 9.jpg')";
	document.getElementById('banaantje').style.display = "none";
	document.getElementById('langsdodo').style.display = "inline";
}
onclick = function(){
	banaanHebben = true;
}
function banaantje() {
	clearInterval(lbgt_interval)
	document.getElementById('banaantje').style.display = "none";
	document.getElementById('begintekst').innerHTML = "";
	document.body.style.backgroundImage = "url('foto 8.jpg')";
	document.body.style.backgroundSize = "1820px 980px";
	document.getElementById('dodo').style.display = "none";
	document.getElementById('banana').style.display = "inline";

}

var BanaanHebben = false;

function langsdodo() {
	clearInterval(lbgt_interval);
		onclick = function(){
		if (banaanHebben) {
			langsdodo();
		} 
		else {
			alert('zoek de banaan voor dodo');
		}
	}
	document.body.style.backgroundImage = "url('foto 4.jpg')"
}


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
	document.body.style.backgroundImage = "url('foto 2.jpg')";
	document.getElementById('vechten').style.display = "none";
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
function Begin() {
	console.log('start');
	document.getElementById('startknop').style.display = "none";
	document.getElementById('begintekst').innerHTML = "Er was eens een klein jongentje. Hij was gestrand met zijn ouders ergens in de jungle. <br> De ouders hadden een boomhut gemaakt ergens hoog in de boom waar niks en niemand bij kon komen.<br> Totdat het moment dat een tijger in de boom kwam.<br> Verplaats je in de moeder en je hebt de keuze:";
	document.getElementById('titel').innerHTML = "";
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
	document.getElementById('weg').style.display = "none";
	document.getElementById('begintekst').innerHTML = "";
	document.body.style.backgroundImage = "url('foto 2.jpg')";
}
function Vechten() {
	document.getElementById('vechten').style.display = "none";
	document.getElementById('begintekst').innerHTML = "helaas je hebt verloren van de tijger en bent overleden"
	document.getElementById('titel').innerHTML = "game over";
	document.getElementById('titel').style.color = "red";
	document.getElementById('titel').style.textShadow = "5px 5px 1px darkred";
	document.getElementById('begintekst').style.top = "100px";
	document.getElementById('begintekst').style.left = "100px";
	document.getElementById('weg').style.display = "none";
	document.getElementById('back').style.display = "inline";
}
function Back(){
	location.reload();
}
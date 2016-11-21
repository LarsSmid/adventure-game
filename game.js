function Begin() {
	console.log('start');
	document.getElementById('startknop').style.display = "none";
	document.getElementById('begintekst').innerHTML = "er was eens een klein jongentje. Hij was gestrand met zijn ouders ergens in de jungle. de ouders hadden een boomhut gemaakt ergens hoog in de boom waar niks en niemand bij kon komen. totdat het moment dat een tijger in de boom kwam.<br> Verplaats je in de moeder en je hebt de keuze.";
	document.getElementById('titel').innerHTML = "";
	document.body.style.backgroundImage = "url('foto 3.jpg')";
	document.body.style.backgroundSize = "1820px 980px";
	document.getElementById('begintekst').style.top = "-100px";
	document.getElementById('begintekst').style.position = "absolute";
	document.getElementById('begintekst').style.left = "-100px";
	document.getElementById('weg').style.display = "inline";
}
function Verstoppen() {
	console.log('ik verstop hem in de wieg')
	document.getElementById('weg').style.display = "none";
}
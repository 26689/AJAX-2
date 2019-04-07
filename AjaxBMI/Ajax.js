let bereken = document.getElementById('bereken');
let lengte = document.getElementById('lengte');
let gewicht = document.getElementById('gewicht');
let resultaat = document.getElementById('resultaat');
let input = document.getElementById('input');

bereken.addEventListener('click', function() {
    gewichtInput = gewicht.value;
    lengteInput = lengte.value;
    ajax(gewichtInput, lengteInput);
})

function ajax(gewicht, lengte){
let debug = true;
let xmlhttp = new XMLHttpRequest();
let controlScript = "bmi.php";
let httpString = controlScript + "?gewicht=" + gewicht + "&lengte_cm=" + lengte;
let httpResponse = "";
if(debug) console.log(httpString);
xmlhttp.open("GET", httpString, true);
xmlhttp.send();
xmlhttp.onreadystatechange = function() {
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    if(debug) console.log("http response = " + xmlhttp.responseText);
    httpResponse = xmlhttp.responseText;
    resultaat.innerHTML = httpResponse;
  }}
}

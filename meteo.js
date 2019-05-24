function buttonClickGET() {
    //récupérer la valeur de l'input
    var ville = document.getElementById("ville").value;
    //appel à api meteo ou à chaque fois q prend la valeur de l'input 
    var url = "https://api.openweathermap.org/data/2.5/weather?q="+ville+"&appid=c21a75b667d6f7abb81f118dcf8d4611&units=metric"
    
    //appel de l'api meteo pour récupérer la température
    $.get(url, callBackGetSuccess).fail(function() {
        alert( "error" );
      })
}
var callBackGetSuccess = function(data) {
    //récupérer la valeur de l'input
    var ville = document.getElementById("ville").value;
    //récupérer la div du html
    var element = document.getElementById("zone_meteo");
    //ajouter un code htlm en affichant la température de chaque ville
    element.innerHTML = "La temperature de "+ville+" est de " + data.main.temp;
}

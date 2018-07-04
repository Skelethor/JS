function getHTTPRequest()
{
    if (window.XMLHttpRequest)    //  Objet standard
    { 
        xhr = new XMLHttpRequest();     //  Firefox, Safari, ...
    } 
    else  if (window.ActiveXObject)      //  Internet Explorer
    {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xhr;
}

function chercherTemp()
{
    let xhttp = getHTTPRequest();
    let ville = document.getElementById("question").value;
    
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) { 
            document.write(Math.round(JSON.parse(this.responseText).main.temp)+"°C");
            if(JSON.parse(this.responseText)[0].main === "clear")
                document.write("<img src='' alt='Img soleil'>");
        }
    };
    xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?q="+ville+"&APPID=b9a5c246d15882741be8bdbd2283e51b&units=metric", true);
    xhttp.send("");

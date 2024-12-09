// coded by darksel0  ....2024
//https://github.com/Darksel0
//hackforums.net username:darkosel
var url = "https://raw.githubusercontent.com/TheSpeedX/PROXY-List/refs/heads/master/http.txt";
var fileName = "proxies.txt";

var xmlhttp = new ActiveXObject("MSXML2.XMLHTTP");
xmlhttp.open("GET", url, false);
xmlhttp.send();

if (xmlhttp.status == 200) {
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var file = fso.CreateTextFile(fso.GetAbsolutePathName(".") + "\\" + fileName, true);
    file.Write(xmlhttp.responseText);
    file.Close();
    WScript.Echo("Proxies downloaded and saved to " + fileName);
} else {
    WScript.Echo("Failed to download proxies. Status: " + xmlhttp.status);
}

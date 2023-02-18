
// Selecting the iframe element
var iframe = document.getElementById("Quran");

// Adjusting the iframe height onload event
iframe.onload = function(){
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
}
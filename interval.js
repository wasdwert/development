/*1 Sekunden Intervallfunktion*/
var lastinterval=Date.now;
var thisinterval=0;
var interval=1000;

document.onload = function () {
    startinterval();
}

function startinterval() {
    setTimeout(function() { 
        thisinterval= Date.now();
        interval= intervall-(lastinterval-thisinterval+1000);
        lastinterval=thisinterval;
        console.log(interval);
        self.postMessage("Ping");
        startinterval();
    }, interval)/*1 Sekunden Intervallfunktion*/
}
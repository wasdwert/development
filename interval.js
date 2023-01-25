/*1 Sekunden Intervallfunktion*/
var lastinterval=0;
var thisinterval=0;
var interval=1000;

lastinterval= Date.now();

function intervaltimer() {
    setTimeout(function() { 
        thisinterval= Date.now();
        interval= intervall-(lastinterval-thisinterval+1000);
        lastinterval=thisinterval;
        console.log(interval);
        self.postMessage("Ping");
        intervaltimer();
    }, interval)/*1 Sekunden Intervallfunktion*/
}
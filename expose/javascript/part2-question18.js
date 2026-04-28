// function to get and print current time 
function printTimeString(){
    let d = new Date();
    console.log(d.toLocaleTimeString());
}

// calls printTimeString every 1 second.
setInterval(printTimeString, 1000);

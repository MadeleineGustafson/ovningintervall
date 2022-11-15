window.addEventListener('DOMContentLoaded', main);

let timeoutRef;

function main() {
    //Start på programmet
   timeoutRef= setTimeout (changeBackgroundColor, 4000);

    addEventListeners();  

}

function changeBackgroundColor() {
    document.body.style.background=getRandomColor();
        
}

function addEventListeners() {
    const cancelTimeoutButtton = document.getElementById ("cancel-timeout");  //gör knappen till variabel
    cancelTimeoutButtton.addEventListener ('click', cancelBackgroundChange); 

    const startIntervalButton = document.getElementById ("start-interval");
    startIntervalButton.addEventListener("click", beginBackgroundChangeInterval);
}

function cancelBackgroundChange() {
    clearTimeout(timeoutRef);

}

function beginBackgroundChangeInterval() {
    setInterval (changeBackgroundColor, 1000);

}

function getRandomColor() {
   const value= Math.random();


   if (value < 0,2) {
    return "yellow";
   } else if (value < 0,4) {
    return "red";
   } else if (value < 0,6) {
    return "green";
   } else if (value < 0,8) {
    return "grey";
   } else {
    return "pink";
   }
}

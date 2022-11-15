window.addEventListener('DOMContentLoaded', main);

let timeoutRef;

function main() {
    //Start på programmet
   timeoutRef= setTimeout (changeBackgroundColor, 4000);

    addEventListeners ();

}

function changeBackgroundColor() {
    document.body.style.background="lightblue"
        
}

function addEventListeners() {
    const buttton = document.getElementById ("cancel");  //gör knappen till variabel
    buttton.addEventListener ('click', cancelBackgroundChange); 
}

function cancelBackgroundChange() {
    clearTimeout(timeoutRef);

}


function showTimer() {
   const timerDivElement = document.getElementById("timerDiv");
   let time = "00:01:00";
   //displaying time
   timerDivElement.innerHTML = `${time}`;
   //adding css in timerDivElement
   applyCSS(timerDivElement);
}

function applyCSS(timerDivElement) {
   timerDivElement.style.fontSize = "40px";
   timerDivElement.style.color = "teal";
   timerDivElement.style.fontWeight = "bold";
   timerDivElement.style.width = "150px";
   timerDivElement.style.padding = "10px";
   timerDivElement.style.textAlign = "center";
   timerDivElement.style.border = "3px solid green";
   timerDivElement.style.borderRadius = "30%";
}
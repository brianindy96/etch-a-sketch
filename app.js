// create 16x16 Grids inside container 

const container = document.querySelector(".container");

makeGrids(16,16); 

function makeGrids(rows,cols){
  // --grid-rows = rows (16)
  // --grid-cols = cols (16)
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  // i = total grids need created 
   for(i=0; i < (rows*cols); i++){
     let box = document.createElement("div");
     // gives all these box a class called grid-item 
     container.appendChild(box).className = "grid-item";
   }
}
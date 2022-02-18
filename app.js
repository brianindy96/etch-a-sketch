// create 16x16 Grids inside container 

const container = document.querySelector(".container");
const reset = document.querySelector(".reset");
const rgb = document.querySelector(".change-color");
const black = document.querySelector(".black");


function makeGrids(rows,cols){
  // i = total grids need created 
   for(i=0; i < (rows*cols); i++){
     let div = document.createElement("div");
     // --grid-rows = rows (16)
    // --grid-cols = cols (16)
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
     // gives all these box a class called grid-item 
     container.appendChild(div).className = "box";
    }
}

function blackColor(){
  const boxes = container.querySelectorAll(".box");
  boxes.forEach(box =>{
    box.addEventListener("mouseenter", ()=>{
      box.style.background = "black";
      box.style.border = "1px solid red";
    })
  })
}

function resetBtn(){
  reset.innerHTML = "Reset"
  const boxes = container.querySelectorAll(".box");
  boxes.forEach(box =>{
    box.style.background = "white";
    box.remove();
  })
  resizeGrid()
  blackColor();
}


function resizeGrid(){
  let size = prompt("what size do you want your grid to be ");
  if(size === null || size <1){
    makeGrids(16,16);
  } else {
    makeGrids(size,size);
  }
}


function rgbColor(){
  const boxes = container.querySelectorAll(".box");
  boxes.forEach(box =>{
    box.addEventListener("mouseenter", ()=>{
      const r =Math.floor(Math.random() * 255);
      const g =Math.floor(Math.random() * 255);
      const b =Math.floor(Math.random() * 255);
      box.style.background = `rgb(${r},${g},${b})`;
    })
  })
}


// Function execution
blackColor();
reset.addEventListener("click", resetBtn)
rgb.addEventListener("click", rgbColor);
black.addEventListener("click", blackColor);
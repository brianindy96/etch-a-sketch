// create 16x16 Grids inside container 
const body = document.body;
const container = document.querySelector(".container");
const reset = document.querySelector(".reset");
const rgb = document.querySelector(".change-color");
const black = document.querySelector(".black");
const title = document.querySelector(".title");
const link = document.querySelector("a");

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
  body.style.background = "var(--color3)";
  title.style.color = "var(--color1)";
  container.style.border = "1px var(--color4) solid";
  const boxes = container.querySelectorAll(".box");
  boxes.forEach(box =>{
    box.addEventListener("mouseenter", ()=>{
      box.style.background = "var(--color1)";
      box.style.border = "1px solid var(--color5)";
      
    })
  })
}

function resetBtn(){
  reset.innerHTML = "Reset"
  const boxes = container.querySelectorAll(".box");
  boxes.forEach(box =>{
    box.style.background = "var(--color4)";
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
  body.style.background = "var(--color1)";
  title.style.color = "var(--color4)";
  container.style.border = "1px var(--color4) solid";
  link.style.color = "var(--color4)";
  const boxes = container.querySelectorAll(".box");
  boxes.forEach(box =>{
    box.addEventListener("mouseenter", ()=>{
      const r =Math.floor(Math.random() * 255);
      const g =Math.floor(Math.random() * 255);
      const b =Math.floor(Math.random() * 255);
      box.style.background = `rgb(${r},${g},${b})`;
      box.style.border = "1px solid var(--color1)"
    })
  })
}


// Function execution
blackColor();
reset.addEventListener("click", resetBtn)
rgb.addEventListener("click", rgbColor);
black.addEventListener("click", blackColor);

const gridBox = document.getElementById("gridBox");
const boxWidth = gridBox.offsetWidth;

let squareNum = 20;

function resetGrid(num){
    for (let i = 0; i < num*num; i++) {
        const smallSquare = document.createElement("div");
        smallSquare.style.width = boxWidth/squareNum +"px";
        smallSquare.style.height = boxWidth/squareNum +"px";
        smallSquare.style.border = "thin solid black";        
        smallSquare.classList.add("smallSquare");
        gridBox.appendChild(smallSquare);    
    }
}

resetGrid(squareNum);


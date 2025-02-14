
const gridBox = document.getElementById("gridBox");
const boxWidth = gridBox.offsetWidth;
const gridBtn = document.getElementById("gridBtn");

let squareNum = 0;

gridBtn.addEventListener("click", function (){
    squareNum = prompt("Input how many squares you would like in your grid", "Eg 20");
    resetGrid(squareNum);
})

function resetGrid(num) {

    gridBox.innerHTML ="";

    for (let i = 0; i < num * num; i++) {
        const smallSquare = document.createElement("div");
        smallSquare.style.width = boxWidth / squareNum + "px";
        smallSquare.style.height = boxWidth / squareNum + "px";
        smallSquare.style.border = "thin solid black";
        smallSquare.classList.add("smallSquare");
        gridBox.appendChild(smallSquare);

        smallSquare.addEventListener("mouseover", function(){
            this.style.backgroundColor = "black"
            let currentOpacity = parseFloat(this.style.opacity) || 0;
            if (currentOpacity < 1){
                this.style.opacity = (currentOpacity + 0.1).toString();
            }
                      
        })
    }
}

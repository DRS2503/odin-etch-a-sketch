
document.querySelector("button").addEventListener("click", () => {
    console.log("Clicked");
    generateSquares(document.querySelector("input").valueAsNumber);
});



let container = document.querySelector("#container");

function generateSquares(num){
    if(typeof(num) == "number"){
        for(let i = 0; i < num * num; i++){
            let newSquare = document.createElement("div");
            newSquare.className = "colorDiv"
            container.appendChild(newSquare);
        }
    }
    else{
        console.log("Not a number!");
    }
}


generateSquares(16);
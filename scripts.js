function generateSquares(num){
    let container = document.querySelector("#container");
    container.textContent = "";

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

    hoverListener();
}


function hoverListener(){
    let elements = document.querySelectorAll(".colorDiv")
    
    for (let i = 0; i < elements.length; i++){
        elements[i].addEventListener("mouseover", () => { 
            elements[i].style.backgroundColor = "black"
    
        })
    }
}

document.querySelector("button").addEventListener("click", () => {
    console.log("Clicked");
    generateSquares(document.querySelector("input").valueAsNumber);
});

generateSquares(16);
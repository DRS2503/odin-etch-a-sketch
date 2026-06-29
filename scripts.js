function generateSquares(num){
    let container = document.querySelector("#container");
    container.textContent = "";

    if(typeof(num) == "number"){
        for(let i = 0; i < num; i++){
            let row = document.createElement("div");
            row.className = "row";
            container.appendChild(row);

        }
        let rows = document.querySelectorAll(".row");      
        rows.forEach((d) => {
            for(let j = 0; j < num; j++){
                let col = document.createElement("div");
                col.className = "col";
                d.insertAdjacentElement("afterbegin", col);
            }
        })
    }

    else{
        console.log("Not a number!");
    }

    hoverListener();
}


function hoverListener(){
    let elements = document.querySelectorAll(".col")
    
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
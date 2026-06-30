function generateSquares(num){
    let container = document.querySelector("#container");
    container.textContent = "";

    if(num > 100){
        document.querySelector(".top").textContent = "Max is 100! So here is 16 instead";
        num = 16;
    }

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
            let r = Math.random() * 256;
            let g = Math.random() * 256;
            let b = Math.random() * 256;
            elements[i].style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    
        })
    }
}

document.querySelector("button").addEventListener("click", () => {
    console.log("Clicked");
    generateSquares(document.querySelector("input").valueAsNumber);
});

generateSquares(16);
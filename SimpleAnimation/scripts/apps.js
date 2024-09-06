document.getElementById("btn-hide").addEventListener("click", wordDissapears);
document.getElementById("btn-show").addEventListener("click", wordAppears);
document.getElementById("btn-change-color").addEventListener("click", changeTextColor);
document.getElementById("btn-move-right").addEventListener("click", pressRight);
document.getElementById("btn-move-left").addEventListener("click", pressLeft);

function wordDissapears()
{
    document.getElementById("p2").style.visibility = "hidden";
}

function wordAppears()
{
    document.getElementById("p2").style.visibility = "visible";
}

function changeTextColor()
{
    var input = document.getElementById("txt-color").value;
    document.getElementById("p3").style.background = input;
}

const shape = document.getElementById("shapes");

shape.addEventListener('change', () => {

    var changeShape = document.getElementById('changeShape');
    selectElement = document.querySelector('#shapes');
    output = selectElement.value;

    if (output == 'circle')
    {
        changeShape.style.borderRadius = "300px";
        changeShape.style.width = "500px";
        changeShape.style.height = "500px";
        changeShape.style.borderLeft = "5px solid black";
        changeShape.style.borderRight = "5px solid black";
        changeShape.style.borderBottom = "5px solid black";
        changeShape.style.borderTop = "5px solid black";
    }
    else if (output == 'square')
    {
        changeShape.style.borderRadius = "0px";
        changeShape.style.width = "500px";
        changeShape.style.height = "500px";
        changeShape.style.borderLeft = "5px solid black";
        changeShape.style.borderRight = "5px solid black";
        changeShape.style.borderBottom = "5px solid black";
        changeShape.style.borderTop = "5px solid black";
    }
    else if (output == 'triangle')
    {
        changeShape.style.borderRadius = "0px";
        changeShape.style.width = "0";
        changeShape.style.height = "0";
        changeShape.style.borderLeft = "200px solid black";
        changeShape.style.borderRight = "0px solid black";
        changeShape.style.borderBottom = "200px solid transparent";
        changeShape.style.borderTop = "200px solid transparent";
    }
})

const moveBox = document.getElementById('move-box');
function pressLeft()
{
    moveBox.style.left = moveBox.offsetLeft + -100 + "px";
    console.log("moving left");
}
function pressRight()
{
    moveBox.style.left = moveBox.offsetLeft + 100 + "px";
    console.log("move right");
}

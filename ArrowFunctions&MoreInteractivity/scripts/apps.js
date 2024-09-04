document.getElementById("btn-hide").addEventListener("click", wordDissapears);
document.getElementById("btn-show").addEventListener("click", wordAppears);
document.getElementById("btn-change-color").addEventListener("click", changeTextColor);

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


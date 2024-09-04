document.getElementById("btn-hide").addEventListener("click", wordDissapears);
document.getElementById("btn-show").addEventListener("click", wordAppears);

function wordDissapears()
{
    document.getElementById("p2").style.visibility = 'hidden';
}

function wordAppears()
{
    document.getElementById("p2").style.visibility = "visible";
}
document.getElementById("btn-hide").addEventListener("click", wordDissapears);
document.getElementById("btn-show").addEventListener("click", wordAppears);
document.getElementById("btn-change-color").addEventListener("click", changeTextColor);
document.getElementById("btn-move-right").addEventListener("click", pressRight);
document.getElementById("btn-move-left").addEventListener("click", pressLeft);
document.getElementById("toggleContent").addEventListener("click", toggleOnOff);
document.getElementById("submitForm").addEventListener("click", formValidation);
document.getElementById("addItem").addEventListener("click", interactiveList);
document.getElementById("colors").addEventListener("change", changeWords);

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

function toggleOnOff()
{
    document.getElementById("toggledWords").classList.toggle("toggleWordsOnOff");
}

function formValidation()
{
    const uName = document.getElementById("uName").value;
    var nameError = document.getElementById("nameError");
    const email = document.getElementById("email").value;
    var emailError = document.getElementById("emailError");
    let aSymbol = "@";
    let period = ".";
    const age = document.getElementById("age").value;
    var ageError = document.getElementById("ageError");


    if (uName)
    {
        if (uName.length <= 3)
        {
            event.preventDefault();
            nameError.textContent = "name is too short";
            nameError.style.display = "block";
            nameError.style.color = "red";
        }
        else
        {
            nameError.style.display = "none"
        }
    }
    if (email)
    {
        if (email.includes(aSymbol) == false || email.includes(period) == false)
        {
            event.preventDefault();
            emailError.textContent = "Email must include '@' and '.' symbols.";
            emailError.style.display = "block";
            emailError.style.color = "red";
        }
        else
        {
            emailError.style.display = "none";
        }
    }
    if (age)
    {
        if (age < 10 || age > 100)
        {
            event.preventDefault();
            ageError.textContent = "Age must be higher than 10 and lower than 100";
            ageError.style.display = "block";
            ageError.style.color = "red";
        }
        else
        {
            ageError.style.display = "none";
        }
    }
    if (nameError.style.display == "none" && emailError.style.display == "none" && ageError.style.display == "none")
    {
        document.getElementById("form").reset();
    }
}



function interactiveList()
{
    var node = document.createElement("LI");
    var div = document.createElement("div");
    div.id = "liDiv";
    var textnode = document.createTextNode(document.getElementById("input").value);
    node.appendChild(textnode);
    var ul = document.getElementById("addedItem");
    ul.appendChild(node);
    var btn = document.createElement('BUTTON');
    btn.innerHTML = 'Delete';
    node.appendChild(btn);
    btn.addEventListener("click", deleteFromInteractiveList);
    function deleteFromInteractiveList()
    {
        node.remove();
        btn.remove();
    }
}

function changeWords()
{
    var words = document.getElementById('changeableWords');
    selectElement = document.querySelector('#colors');
    output = selectElement.value;

    if (output == 'blue')
    {
        words.style.color = "blue";
        words.style.background = "none";
        words.style.fontSize += "2px";
        words.style.removeProperty('fontStyle');
    }
    else if (output == 'red')
    {
        words.style.color = "red";
        words.style.background = "none";
        words.style.fontSize = "1em";
        words.style.fontStyle = "italic";
    }
    else if (output == 'green')
    {
        words.style.color = "green";
        words.style.background = "lightGreen";
        words.style.fontSize = "1em";
        words.style.removeProperty('fontStyle');
    }
}
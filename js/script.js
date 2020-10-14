function showAddList() {

    document.getElementById('addListCard').style.filter = "blur(8px)";
    var cards = document.getElementsByClassName('card');

    for (let i = 0; i < cards.length; i++) {
        cards[i].style.backgroundColor = "white";
    }

    document.getElementById("addListItem1").style.display = "block";



}

function addList() {
    var inputValue = document.getElementById("addListItem-input").value;
    if (inputValue.length != 0) {
        var element = document.getElementById("addListCard");
        var childElement = document.createElement("div");
        var count = document.getElementsByClassName("card").length;
        childElement.id = "card" + count + 1;
        childElement.classList.add("card");
        var currentdate = new Date();
        childElement.innerHTML = '<h1 class="card-title" id=' + "list" + (count + 1) + '>' + document.getElementById("addListItem-input").value + '</h1><div class="make-hide" id=' + "make-hide" + (count + 1) + '><hr><div id=' + "itemList" + (count + 1) + ' class="itemList" style="margin-top:20px"></div></div><div class="font"><i style="color: lightblue;" class="fa fa-plus-circle addTasks" aria-hidden="true" id="' + "icon" + (count + 1) + '"onclick="addItem(' + (count + 1) + ')"></i ></div>';

        element.prepend(childElement);
    }

    removeBlurEffect();

}

function removeBlurEffect() {
    document.getElementById("addListItem1").style.display = "none";
    document.getElementById("addItem").style.display = "none";
    document.getElementById('addListCard').style.filter = "blur(0px)";
    var cards = document.getElementsByClassName('card');

    for (let i = 0; i < cards.length; i++) {
        cards[i].style.backgroundColor = "#000";
    }

}

function addItem(count) {
    var element = document.createElement('span');
    element.id = count;
    element.style.display = "none";
    document.getElementById("addItem").style.display = "block";
    document.getElementById("addItem").appendChild(element);

}

function addListItem() {
    if (document.getElementById("addListItem-input1").value.length != 0) {
        var element = document.createElement("p");
        element.classList.add("item");
        element.innerHTML = document.getElementById("addListItem-input1").value;
        document.getElementById("itemList" + (document.getElementById("addItem").lastChild.id)).prepend(element);
        var span = document.createElement("span");
        var complete = document.createTextNode("complete");
        span.appendChild(complete);
        span.style.borderRadius = "20%";
        span.style.backgroundColor = "green";
        span.setAttribute("onclick", "completeTask(this)");
        element.appendChild(document.createElement("br"));
        element.appendChild(span);
    }

    document.getElementById("addItem").style.display = "none";
}

function completeTask(e) {
    e.style.display = "none";
    (e.parentNode).style.color = "green";
    (e.parentNode).style.textDecoration = "line-through";
}

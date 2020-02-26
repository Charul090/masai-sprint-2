var form_1=document.getElementById("form1");
var submit_button=document.getElementById("btn3");

function deleteContent(e){
    if(e.target.nodeName === "TD"){
        e.target.parentNode.remove();
    }
}

function updateLeftContent(e){
    e.preventDefault();

    var dish_name = document.querySelector("#dish").value;
    var dish_cal = document.querySelector("#dish-cal").value;

    var row=document.createElement("tr");
    var cell1=document.createElement("td");
    var cell2=document.createElement("td");

    cell1.textContent=dish_name;
    cell2.textContent=dish_cal;

    row.append(cell1,cell2);

    var table_left=document.querySelector(".table-left");

    row.addEventListener("click",deleteContent);

    table_left.appendChild(row);
}

function getCalorieConsumed(){

    var calorie_info=document.querySelectorAll(".table-left>tr>td:nth-child(2)");

    var calorie_consumed=0;

    for(var i=0;i<calorie_info.length;i++){
        calorie_consumed+=Number(calorie_info[i].textContent)
    }

    return calorie_consumed;
}

function calculate(){
    var calorie_consumed=getCalorieConsumed();

    console.log(calorie_consumed)

}
form_1.addEventListener("submit",updateLeftContent);

submit_button.addEventListener("click",calculate);
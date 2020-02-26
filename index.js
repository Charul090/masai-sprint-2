var form_1=document.getElementById("form1");

var submit_button=document.getElementById("btn3");

var form_2=document.getElementById("form2");

var gender="";

function deleteContent(e){
    if(e.target.nodeName === "TD"){
        e.target.parentNode.remove();
    }
}

function updateRightContent(e){
    e.preventDefault();

    var exercise_name = document.getElementById("exercise").value;

    var row=document.createElement("tr");
    var cell1=document.createElement("td");
    var cell2=document.createElement("td");
    
    if(exercise_name === "walking"){
        cell1.textContent="Walking";
        cell2.textContent=150;
    }

    else if(exercise_name === "jogging"){
        cell1.textContent="Jogging";
        cell2.textContent=350;
    }

    else if(exercise_name === "swimming"){
        cell1.textContent="Swimming";
        cell2.textContent=300;
    }

    else if(exercise_name === "workout"){
        cell1.textContent="Workout";
        cell2.textContent=270;
    }
    else{
        if(exercise_name === "cycling"){
            cell1.textContent="Cycling";
            cell2.textContent=250;
        }
    }

    row.append(cell1,cell2);

    var table_right=document.querySelector(".table-right");

    row.addEventListener("click",deleteContent);

    table_right.appendChild(row);
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

    var input1 = document.querySelector("#dish");
    var input2 = document.querySelector("#dish-cal");

    input1.value="";
    input2.value="";
}

function getCalorieConsumed(){

    var calorie_consumed_info=document.querySelectorAll(".table-left>tr>td:nth-child(2)");

    var calorie_consumed=0;

    for(var i=0;i<calorie_consumed_info.length;i++){
        calorie_consumed+=Number(calorie_consumed_info[i].textContent)
    }

    return calorie_consumed;
}

function getCalorieBurned(){
    var calorie_burned_info=document.querySelectorAll(".table-right>tr>td:nth-child(2)");

    var calorie_burned=0;

    for(var i=0;i<calorie_burned_info.length;i++){
        calorie_burned+= Number(calorie_burned_info[i].textContent);
    }

    return calorie_burned;
}

function calculate(){
    var info=document.querySelector(".info");

    info.textContent="";

    var calorie_consumed = getCalorieConsumed();

    var calorie_burned = getCalorieBurned();

    gender=document.getElementById("gender").value;

    var total_calories=0;

    if(gender === "male"){
        total_calories=2000;
    }
    else{
        total_calories=1500;
    }

    net_calories = calorie_consumed- total_calories - calorie_burned ;

    displayInfo(net_calories,calorie_consumed,calorie_burned)
}

function displayInfo(net_calories,calorie_consumed,calorie_burned){
    var string;

    var line1=document.createElement("p");
    var line2=document.createElement("p");
    var line3=document.createElement("p");
    var line4=document.createElement("p");

    line1.textContent="Total calorie's consumed = "+calorie_consumed;
    line2.textContent="Total calorie's burned= "+calorie_burned;

    var month_calorie=30*Math.abs(net_calories);
    var fat=Math.floor(month_calorie/7000);

    var unique=document.createElement("span");

    if(net_calories < 0){
        line3.textContent="Net loss="+Math.abs(net_calories)+" kcal";
        unique.textContent=fat;
        line4.textContent="You will lose approx. "+unique.textContent+" kgs in 30 days";
        line4.setAttribute("class","statement green1");
    }

    else if (net_calories > 0){
        line3.textContent="Net gain="+net_calories+" kcal";
        unique.textContent=fat;
        line4.textContent="You will gain approx. "+unique.textContent+" kgs in 30 days";
        line4.setAttribute("class","statement red1");
    }
    else{
        line3.textContent="Net gain/loss="+net_calories+" kcal";
        line4.textContent="You will gain/lose "+fat+" kgs in 30 days";
        line4.setAttribute("class","statement");
    }

    var info1=document.querySelector(".info");
    info1.append(line1,line2,line3,line4);
}

form_1.addEventListener("submit",updateLeftContent);

form_2.addEventListener("submit",updateRightContent);

submit_button.addEventListener("click",calculate);
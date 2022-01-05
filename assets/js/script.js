//function to save data to local storage
function saveData(key, value) {
    localStorage.setItem(key, value);
}
//function to load data from local storage and persist
function loadData() {
    var currentHour = moment().hour();
    for (var i = 9; i < 18; i++) {
        var key = "hour-" + i;
        var value = localStorage.getItem(key);
        var textArea = $("#" + key);
        textArea.val(value);
        textColor(i, currentHour, textArea);
    };
}

function textColor(hour, currentHour, textArea)  {
    if (hour < currentHour)  {
        textArea.addClass("past");
    } else if (hour == currentHour) {
        textArea.addClass("present");
    } else {
        textArea.addClass("future");
    }
}

//function to set time in header
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm a'));
//button handler
function saveTask(event) {
    var btn = $(this);
    var parent = btn.parent();
    var textArea = parent.find("textarea");
    var key = textArea.attr("id");
    var input = textArea.val();
    console.log(key);
    console.log(input);
    saveData(key, input);
}
// event listener for button
$(".saveBtn").on("click", saveTask);
loadData();

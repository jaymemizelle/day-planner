// Display current date/time
var NowDate = new Date();
var eDisplayDate = document.getElementById('currentDay');
eDisplayDate.innerHTML = NowDate;


// Render rows
var container = $('.container');
var timeArr = ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];

for (i=0; i< timeArr.length; i++) {
    var row = $('<div>').addClass('row time-block');
    container.append(row);
    var column = $('<div>').addClass('col-1 hour');
    column.text(timeArr[i]);
    var textArea = $('<textarea>').addClass('col-10 description time-block');
    var saveBtn = $('<button>').addClass('saveBtn col-1');
    row.append(column, textArea, saveBtn);
    var icon = $('<i>').addClass('fa fa-save');
    saveBtn.append(icon);
}

$('.saveBtn').click(storeNotes);

function storeNotes() {

}



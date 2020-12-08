// Display current date/time at top of page
var newDate = new Date();
var nowDate = moment().format('MMMM Do YYYY, h:mm:ss a');
var displayDate = document.getElementById('currentDay');
displayDate.innerHTML = nowDate;

// Variables
var nowMoment = moment();
var currentTime = nowMoment.format('LT');
var currentHour =  newDate.getHours();
console.log(currentHour);

// Render rows
var container = $('.container');
var businessHours = ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm' ];
var militaryHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

function renderRows() {
    for (i=0; i < businessHours.length; i++) {
        // Creates row
        var row = $('<div>');
        row.addClass('row time-block');
        container.append(row);

        // Render business hours on left
        var column = $('<div>').addClass('col-1 hour');
        column.text(businessHours[i]);

       // Render row colors
       for (j=0; j < militaryHours.length; j++) {
            if (currentHour < militaryHours[j]) {
                row.addClass('past');
            } else if (currentHour == militaryHours[j]) {
                row.addClass('present');
            } else if (currentHour > militaryHours[j]) {
                row.addClass('future');
            }
       }
    
        
        // Creates text area and buttons
        var textArea = $('<textarea>').addClass('col-10 description time-block');
        var saveBtn = $('<button>').addClass('saveBtn col-1');
        row.append(column, textArea, saveBtn);
        var saveIcon = $('<i>').addClass('fa fa-save');
        saveBtn.append(saveIcon);
    }
}

renderRows();
    for (i=0; i < militaryHours.length; i++) {
        // Sets css classes based on current time
        if (currentHour < militaryHours[i]) {
            row.addClass('past');
        } else if (currentHour == militaryHours[i]) {
            row.addClass('present');
        } else if (currentHour > militaryHours[i]) {
            row.addClass('future');
        }
    }


$('.saveBtn').click(storeNotes);

function storeNotes() {

}
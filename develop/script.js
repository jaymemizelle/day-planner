// Display current date/time at top of page
var nowDate = moment().format('MMMM Do YYYY, h:mm:ss a');
var displayDate = document.getElementById('currentDay');
displayDate.innerHTML = nowDate;

// Variables
var nowMoment = moment();
var currentTime = nowMoment.format('LT');
var currentHour = moment().startOf('hour').fromNow(currentTime);

// Render rows
var container = $('.container');
var businessHours = ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm' ];

function renderRows() {
    for (i=0; i < businessHours.length; i++) {
        // Creates row
        var row = $('<div>');
        row.addClass('row time-block');
        container.append(row);

        var column = $('<div>').addClass('col-1 hour');
        column.text(businessHours[i]);

        // Sets css classes based on curren time
        if (currentHour < businessHours[i]) {
            row.addClass('past');
        } else if (currentHour == businessHours[i]) {
            row.addClass('present');
        } else if (currentHour > businessHours[i]) {
            row.addClass('future');
        }
        
        // Creates text area and buttons
        var textArea = $('<textarea>').addClass('col-10 description time-block');
        var saveBtn = $('<button>').addClass('saveBtn col-1');
        row.append(column, textArea, saveBtn);
        var icon = $('<i>').addClass('fa fa-save');
        saveBtn.append(icon);
    }
}

renderRows();

$('.saveBtn').click(storeNotes);

function storeNotes() {

}


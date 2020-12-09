// Display current date/time at top of page
let newDate = new Date();
const nowDate = moment().format('MMMM Do YYYY, h:mm:ss a');
var displayDate = document.getElementById('currentDay');
displayDate.innerHTML = nowDate;

// Variables
const nowMoment = moment();
const currentTime = nowMoment.format('LT');
const currentHour =  newDate.getHours();
console.log(currentHour);

const container = $('.container');
const businessHours = ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm' ];
const militaryHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

// Call functions
renderRows();
getNotes();

function renderRows() {
    for (i=0; i < militaryHours.length; i++) {
        // Creates row
        var row = $('<div>');
        row.addClass('row time-block');
        container.append(row);

        // Render business hours on left
        for (j=0; j< businessHours.length; j++) {
            var column = $('<div>').addClass('col-1 hour');
            column.text(businessHours[i]);
        }

       // Render row colors
       
        if (currentHour > militaryHours[i]) {
            row.addClass('past');
        } else if (currentHour < militaryHours[i]) {
            row.addClass('future');
        } else if (currentHour == militaryHours[i]) {
            row.addClass('present');
        }
    
    
        // Creates text area and buttons
        var textArea = $('<textarea>').addClass('col-10 description time-block');
        textArea.attr("id", "input");
        var saveBtn = $('<button>').addClass('saveBtn col-1');
        row.append(column, textArea, saveBtn);
        var saveIcon = $('<i>').addClass('fa fa-save');
        saveBtn.append(saveIcon);
    }
}

// Save button event listener
$('.saveBtn').click(storeNotes);

function getNotes () {
    // Retrieve notes from local storage

    // Display notes retrieved on page
}


function storeNotes() {
    console.log("Save Button works!");
    // Set notes to local storage
    let userInput = $('#input');
    localStorage.setItem("note", userInput.value);
}
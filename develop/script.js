// Display current date/time at top of page
let newDate = new Date();
const nowDate = moment().format('MMMM Do YYYY, h:mm:ss a');
const displayDate = document.getElementById('currentDay');
displayDate.innerHTML = nowDate;

// Variables
const nowMoment = moment();
const currentTime = nowMoment.format('LT');
const currentHour =  newDate.getHours();

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
        } else if (currentHour == militaryHours[i]) {
            row.addClass('present');
        } else if (currentHour < militaryHours[i]) {
            row.addClass('future');
        }
    
    
        // Creates text area and buttons
        let textArea = $('<textarea>').addClass('col-10 description time-block');
        textArea.attr("id", "text-area");
        let saveBtn = $('<button>').addClass('saveBtn col-1').attr('data-hour', militaryHours[i]);
        row.append(column, textArea, saveBtn);
        let saveIcon = $('<i>').addClass('fa fa-save');
        saveBtn.append(saveIcon);
    }
}

// Save button event listener
$('.saveBtn').click(storeNotes);

// var note = $('.saveBtn').attr('data-hour');
// console.log(note);
function getNotes () {
    // Retrieve notes from local storage
    let notes = localStorage.getItem('note');
    // Display notes retrieved on page
    $('#text-area').text(notes);
}   


function storeNotes() {
    console.log("Save Button works!");
    // Set notes to local storage
    let userInput = $('#text-area');
    localStorage.setItem('note', userInput.val());
    console.log(userInput);
}
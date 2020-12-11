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

// Renders row immediately when the page loads
renderRows();


function renderRows() {
    for (let i=0; i < militaryHours.length; i++) {
        // Creates row
        var row = $('<div>');
        row.addClass('row time-block');
        container.append(row);

        // Render business hours on left
        for (j=0; j< businessHours.length; j++) {
            var column = $('<div>').addClass('col-1 hour');
            column.text(businessHours[i]);
        }

       // Render row colors based on the current hour
        if (currentHour > militaryHours[i]) {
            row.addClass('past');
        } else if (currentHour == militaryHours[i]) {
            row.addClass('present');
        } else if (currentHour < militaryHours[i]) {
            row.addClass('future');
        }
    
    
        // Creates text area and buttons and sets classes and ids for each
        let textArea = $('<textarea>').addClass('col-10 description time-block text-area').attr('id', militaryHours[i]);
        let saveBtn = $('<button>').addClass('saveBtn col-1').attr('id', militaryHours[i]);
        row.append(column, textArea, saveBtn);
        let saveIcon = $('<i>').addClass('fa fa-save');
        saveBtn.append(saveIcon);

        // Gets the notes from local storage and displays them in the rendered rows
        var getNote = localStorage.getItem(militaryHours[i]);
        if (localStorage.key(i) === $('.text-area').attr('id')); {
            textArea.text(JSON.parse(getNote));           
        }
    }
}

// Save button event listener
$('.saveBtn').click(storeNotes);

// When save button this function is called & sets notes to local storage
function storeNotes() {
    console.log("save button works!");
    let localStorageKey = $(this).attr('id');
    let localStorageValue = $(this).siblings('textarea').val();
    localStorage.setItem(localStorageKey, JSON.stringify(localStorageValue));
}

// jQuery ready method, ensures functions are available after the document is loaded.

$(document).ready(function() {

    //1.) WHEN I open the planner THEN the current day is displayed at the top of the calendar

    // array hours available in the application
    // const dayHours = ['06am', '07am', '08am', '09am', '10am', '11am', '12pm', '01pm', '02pm', '03pm', '04pm', '05pm', '06pm'];

    // const presentDateAndTime = () => {
    //     let presentTime = dayjs().format('dddd MMMM YYYY hh mm ss a');
    //     $("#currentDay").html(now);
    //     setTimeout(function() {presentDateAndTime(); }, 1000);
    // }

// 2.) WHEN I scroll down THEN I am presented with time blocks for standard business hours

// 3.) WHEN I view the time blocks for that day THEN each time block is color-coded to indicate whether it is in the past, present, or future

// 4.) WHEN I click into a time block THEN I can enter an event

// 5.) WHEN I click the save button for that time block THEN the text for that event is saved in local storage

// 6.) WHEN I refresh the page THEN the saved events persist

});

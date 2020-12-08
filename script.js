// jQuery ready method, ensures functions are available after the document is loaded.
$(document).ready(function () {
    // Displays current date and time under description of Tabula Rasa Application
    const todaysDate = dayjs();
    $("#currentDay").text(todaysDate.format("dddd, MMMM D, YYYY."))

    // WHEN I view the time blocks for that day THEN each time block is color-coded to indicate whether it is in the past, present, or future
    $(".saveBtn").addClass("ml-auto");


});


// 6.) WHEN I refresh the page THEN the saved events persist

// });

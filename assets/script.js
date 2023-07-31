
// This code is wrapped in a jQuery ready function to ensure that it executes once the DOM is fully loaded.

$(document).ready(function () {

    // Get the current date and format it using the dayjs library. 
    // Set the formatted date as the text content of an element with the id "currentDay".
    var currentHeaderDate = dayjs().format('dddd, MMMM DD  ');
    $("#currentDay").text(currentHeaderDate);

    // Attached a click event listener to elements with the class "saveBtn".
    $(".saveBtn").on("click", function (event) {
        console.log(event.target)
        console.log($(this))

        // Get the save button of the clicked element.
        var siblings = $(this).siblings()
        console.log(siblings)

        // Get the text content .
        var timeText = siblings[0].textContent
        console.log(timeText)

        // Get the value, which is a textarea element.
        var note = siblings[1].value

        console.log(note)
        // Store the time text as the key and the note as the value in the browser's localStorage.
        localStorage.setItem(timeText, note)

        // Remove the "hide" class from an element with the id "savelocal" to display it on the page.
        $("#savelocal").removeClass("hide")

        // Set a timeout to add the "hide" class back to the element after 5000 milliseconds (5 seconds).
        setTimeout(function () {

            $("#savelocal").addClass("hide")

        }, 5000)
    })

    timeBlocks();

    function timeBlocks() {

        // Get the current hour using dayjs.
        var hours = dayjs().hour();

        // Iterate over each element with the class "time-block".
        $(".time-block").each(function () {
            var $timeBlock = $(this);

            // Remove any existing classes "past", "present", and "future" from the time block.
            $timeBlock.removeClass("past present future");

            // Get the hour from the time block's id attribute.
            var hourBlock = parseInt($timeBlock.attr("id").split("-")[1]);


            // Add the appropriate class ("past", "present", or "future") based on the comparison of the hour block and the current hour.
            if (hourBlock < hours) {
                $timeBlock.addClass("past");
            } else if (hourBlock === hours) {
                $timeBlock.addClass("present");
            } else {
                $timeBlock.addClass("future");
            }

            // Get the text content of the element with class "hour" within the time block.
            var timeText = $timeBlock.find(".hour").text();


            // Retrieve the notes from localStorage based on the time text.
            var note = localStorage.getItem(timeText);


            // Set the value of the textarea within the time block to the retrieved note.
            $timeBlock.find("textarea").val(note);
        });
    }
});
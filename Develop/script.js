// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(document).ready(function () {
    var currentHeaderDate = dayjs().format('dddd, MMMM DD  ');
    $("#currentDay").text(currentHeaderDate);
    $(".saveBtn").on("click", function (event) {
        console.log(event.target)
        console.log($(this))
        var siblings = $(this).siblings()
        console.log(siblings)
        var timeText = siblings[0].textContent
        console.log(timeText)
        var note = siblings[1].value
        console.log(note)
        localStorage.setItem(timeText, note)
        $("#savelocal").removeClass("hide")
        setTimeout(function () {

            $("#savelocal").addClass("hide")

        }, 5000)
    })

    timeBlocks();

    function timeBlocks() {
        var hours = dayjs().hour();
        $(".time-block").each(function () {
            var $timeBlock = $(this);
            $timeBlock.removeClass("past present future");
            var hourBlock = parseInt($timeBlock.attr("id").split("-")[1]);
            if (hourBlock < hours) {
                $timeBlock.addClass("past");
            } else if (hourBlock === hours) {
                $timeBlock.addClass("present");
            } else {
                $timeBlock.addClass("future");
            }
            var timeText = $timeBlock.find(".hour").text();
            var note = localStorage.getItem(timeText);
            $timeBlock.find("textarea").val(note);
        });
    }
});

            // var hours = dayjs().format('H');
            // var timeBlocks = document.querySelectorAll(".time-block");
            // timeBlocks.forEach(function (timeBlocks) {
            //     console.log(timeBlocks);
            //     var hoursBlock = parseInt(timeBlocks.getAttribute("id").split("-")[1]);

            //     $(this).removeClass("past present future");

            // timeBlocks.classList.remove("past", "present", "future");

    //         if (hoursBlock < hours) {
    //             timeBlocks.classList.add("past");
    //         } else if (hoursBlock === hours) {
    //             timeBlocks.classList.add("present");
    //         } else {
    //             timeBlocks.classList.add("future");
    //         }

    //     });

    // }


// });

    // var timeBlocks = document.querySelectorAll(".time-block");
    // timeBlocks.forEach(function (timeBlocks) {
    //     console.log(timeBlocks);
    //     var hours = parseInt(timeBlocks.getAttribute("id").split("."), [1]);

    //     // timeBlocks.classList.remove("past", "present", "future");

    //     if (hours < currentHour) {
    //         timeBlocks.addClass("past");
    //     } else if (hours === currentHour) {
    //         timeBlocks.addClass("presnt");
    //     } else {
    //         timeBlocks.addClass("future");
    //     }


    // });
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //

    // TODO: Add code to display the current date in the header of the page.

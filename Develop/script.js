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
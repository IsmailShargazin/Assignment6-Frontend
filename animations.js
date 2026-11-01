$(document).ready(function () {
    let startPosition = {
        left: 0,
        top: 0,
        width: 80,
        height: 80,
        opacity: 1
    };

    // Task 8
    $("#basicBtn").on("click", function () {
        let distance = Math.max(0, $("#basicStage").width() - 120);

        $("#basicBox")
            .stop(true)
            .css(startPosition)
            .animate({
                left: distance,
                top: 50,
                width: 120,
                height: 120
            }, 800);
    });

    // Task 9
    $("#sequenceBtn").on("click", function () {
        let distance = Math.max(0, $("#sequenceStage").width() - 80);

        $("#sequenceBox")
            .stop(true)
            .css(startPosition)
            .animate({
                left: distance
            }, 600)
            .animate({
                top: 140
            }, 600)
            .animate({
                width: 40,
                height: 40
            }, 500)
            .animate({
                left: 0,
                top: 0,
                width: 80,
                height: 80
            }, 800);
    });

    // Task 10
    $("#combinedBtn").on("click", function () {
        let distance = Math.max(0, $("#combinedStage").width() - 120);

        $("#combinedBox")
            .stop(true)
            .css(startPosition)
            .animate({
                left: distance,
                top: 80,
                width: 120,
                height: 120,
                opacity: 0.35
            }, 1200);
    });

    // Reset animations
    $("#resetAnimationsBtn").on("click", function () {
        $(".animation-box")
            .stop(true)
            .css(startPosition);
    });
});
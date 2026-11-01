$(document).ready(function () {
    // Task 2
    $("#hideBtn").on("click", function () {
        $("#visibilityText").hide();
    });

    $("#showBtn").on("click", function () {
        $("#visibilityText").show();
    });

    $("#toggleBtn").on("click", function () {
        $("#visibilityText").toggle();
    });

    // Task 3
    $("#fadeInBtn").on("click", function () {
        $("#fadeImage").fadeIn(600);
    });

    $("#fadeOutBtn").on("click", function () {
        $("#fadeImage").fadeOut(600);
    });

    $("#fadeToggleBtn").on("click", function () {
        $("#fadeImage").fadeToggle(600);
    });

    // Task 4
    $("#slideUpBtn").on("click", function () {
        $("#infoPanel").slideUp(600);
    });

    $("#slideDownBtn").on("click", function () {
        $("#infoPanel").slideDown(600);
    });

    $("#slideToggleBtn").on("click", function () {
        $("#infoPanel").slideToggle(600);
    });
});
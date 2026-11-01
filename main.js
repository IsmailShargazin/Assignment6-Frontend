$(document).ready(function () {
    // Task 0
    console.log("jQuery is ready!");

    $("#status").text("jQuery is connected and ready!");

    // Task 1
    $("#changeText").on("click", function () {
        $("#collectionTitle").text("New Sneakers Collection");
    });

    $("#changeHtml").on("click", function () {
        $(".description").html("Explore our <strong>new arrivals!</strong>");
    });

    $("#changeStyles").on("click", function () {
        $("h3").css({
            color: "#2563eb",
            backgroundColor: "#eff6ff",
            padding: "15px",
            borderRadius: "8px"
        });
    });
});
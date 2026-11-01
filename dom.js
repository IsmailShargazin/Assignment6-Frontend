$(document).ready(function () {
    // Task 5
    let itemNumber = 4;

    $("#appendBtn").on("click", function () {
        $("#sneakerList").append("<li>Sneaker " + itemNumber + "</li>");
        itemNumber++;
    });

    $("#prependBtn").on("click", function () {
        $("#sneakerList").prepend("<li>Sneaker " + itemNumber + "</li>");
        itemNumber++;
    });

    $("#removeBtn").on("click", function () {
        $("#sneakerList li").last().remove();
    });

    // Task 6
    $("#changeImageBtn").on("click", function () {
        let currentImage = $("#productImage").attr("src");

        if (currentImage === "images/sneaker.jpg") {
            $("#productImage").attr({
                src: "images/sneaker2.jpg",
                alt: "Second sneaker"
            });
        } else {
            $("#productImage").attr({
                src: "images/sneaker.jpg",
                alt: "First sneaker"
            });
        }
    });

    $("#changeLinkBtn").on("click", function () {
        $("#storeLink").attr("href", "https://www.adidas.com/");
        $("#storeLink").text("Visit Adidas");
    });

    // Task 7
    $("#nameInput, #emailInput").on("input", function () {
        let name = $("#nameInput").val();
        let email = $("#emailInput").val();

        $("#liveName").text(name || "—");
        $("#liveEmail").text(email || "—");
    });

    $("#profileForm").on("submit", function (event) {
        event.preventDefault();
    });
});
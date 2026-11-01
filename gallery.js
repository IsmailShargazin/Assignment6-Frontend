$(document).ready(function () {
    // Task 11
    $(".gallery-thumb").on("click", function () {
        let image = $(this).find("img");
        let imageSource = image.attr("src");
        let imageDescription = image.attr("alt");

        $("#galleryImage")
            .stop(true, true)
            .hide()
            .attr({
                src: imageSource,
                alt: imageDescription
            })
            .fadeIn(400);

        $("#imageCaption").text(imageDescription);

        $(".gallery-thumb")
            .removeClass("selected")
            .attr("aria-pressed", "false");

        $(this)
            .addClass("selected")
            .attr("aria-pressed", "true");
    });

    // Gallery effects
    $("#showGalleryBtn").on("click", function () {
        $(".gallery-thumb").stop(true, true).fadeIn(500);
    });

    $("#hideGalleryBtn").on("click", function () {
        $(".gallery-thumb").stop(true, true).fadeOut(500);
    });

    $("#toggleGalleryBtn").on("click", function () {
        $(".gallery-thumb").stop(true, true).fadeToggle(500);
    });
});
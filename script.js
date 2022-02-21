$("document").ready(function () {
  $("button#btn-open-modal").on("click", function (event) {
    var modal = $("div.modal");
    modal.removeClass("hide");
  });

  $("button#btn-close-modal").on("click", function (event) {
    var modal = $("div.modal");
    var videoUrl = $("iframe#youtube-video").prop("src");

    modal.addClass("hide");
    $("iframe#youtube-video").prop("src", "");
    $("iframe#youtube-video").prop("src", videoUrl);
  });

  $(window).on("click", function (event) {
    var modal = $("div.modal");
    var modalContainer = $("div.modal-container");
    if (
      (modal.length > 0 && event.target === modal[0]) ||
      (modalContainer.length > 0 && event.target === modalContainer[0])
    ) {
      var videoUrl = $("iframe#youtube-video").prop("src");

      modal.addClass("hide");
      $("iframe#youtube-video").prop("src", "");
      $("iframe#youtube-video").prop("src", videoUrl);
    }
  });
});


//document.addEventListener("DOMContentLoaded", function () {
//    function checkScroll() {
//        const aboutSection = document.getElementById("about");
//        if (!aboutSection) return; 
//
//        const sectionPos = aboutSection.getBoundingClientRect().top;
//        const screenPos = window.innerHeight / 1.3;
//
//        if (sectionPos < screenPos) {
//            aboutSection.classList.add("visible");
//        }
//    }
//
//    window.addEventListener("scroll", checkScroll);
//    checkScroll(); 
//});
$(document).on("scroll", function () {
    var pageTop = $(document).scrollTop()
    var pageBottom = pageTop + $(window).height()
    var tags = $(".fadein")

    for (var i = 0; i < tags.length; i++) {
        var tag = tags[i]

        if ($(tag).offset().top < pageBottom) {
            $(tag).addClass("visible")
        } else {
            $(tag).removeClass("visible")
        }
    }
})

document.querySelector(".contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); 
    alert("Pesan Anda telah dikirim! Kami akan segera menghubungi Anda.");
    this.reset(); 
});

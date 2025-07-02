$('#skillsCarousel').on('slide.bs.carousel', function () {
  // Animate all progress bars when the slide changes
    $('.progress-bar').each(function () {
    let value = $(this).attr('style').match(/\d+/)[0]; // get percentage number
    $(this).css('width', '0%').animate({ width: value + '%' }, 1000);
    });
});
